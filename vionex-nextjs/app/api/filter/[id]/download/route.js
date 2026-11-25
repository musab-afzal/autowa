import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { jobNumbers, RESULT_KINDS } from "@/lib/filter";
import { exportResponse, isExportFormat } from "@/lib/exporters";
import { entitlements } from "@/lib/limits";
import { logAudit } from "@/lib/audit";

const NAMES = { exists: "on-whatsapp", "not-exists": "not-on-whatsapp", errors: "not-checked" };
const TITLES = { exists: "Numbers on WhatsApp", "not-exists": "Numbers not on WhatsApp", errors: "Numbers not checked" };

/* ?type=exists|not-exists|errors&format=txt|xlsx|csv|pdf */
export async function GET(request, ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));
  const q = new URL(request.url).searchParams;
  const kind = q.get("type");
  const format = q.get("format") || "txt";
  if (!Object.hasOwn(RESULT_KINDS, kind) || !isExportFormat(format)) {
    return NextResponse.json({ error: "Unknown file type." }, { status: 400 });
  }
  if (kind !== "exists" && !entitlements(user).bothResults) {
    return NextResponse.json({ error: "Your plan includes the On-WhatsApp results only." }, { status: 403 });
  }
  try {
    const { job, list } = jobNumbers(user.id, (await ctx.params).id, kind);
    logAudit({
      actor: user,
      request,
      category: "filter",
      action: "Downloaded filter results",
      description: `${TITLES[kind]} (${list.length.toLocaleString()}) from ${job.file_name} as ${format.toUpperCase()}`,
      target: job.file_name,
    });
    const base = job.file_name.replace(/\.[^.]+$/, "") || "numbers";
    return await exportResponse(list, format, `${base}_${NAMES[kind]}_${list.length}`, `${TITLES[kind]} — ${job.file_name}`);
  } catch (e) {
    return NextResponse.json({ error: e.message || "Not found" }, { status: e.status || 500 });
  }
}
