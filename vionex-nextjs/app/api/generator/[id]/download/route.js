import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { listFileName, listNumbers } from "@/lib/generator";
import { exportResponse, isExportFormat } from "@/lib/exporters";
import { logAudit } from "@/lib/audit";

/* ?format=txt|xlsx|csv|pdf */
export async function GET(request, ctx) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));
  const format = new URL(request.url).searchParams.get("format") || "txt";
  if (!isExportFormat(format)) return NextResponse.json({ error: "Unknown file type." }, { status: 400 });
  try {
    const { list, numbers } = listNumbers(user.id, (await ctx.params).id);
    logAudit({
      actor: user,
      request,
      category: "generator",
      action: "Downloaded a number list",
      description: `List #${list.id} (${numbers.length.toLocaleString()} numbers) as ${format.toUpperCase()}`,
      target: `List #${list.id}`,
    });
    return await exportResponse(numbers, format, listFileName(list), `Generated list #${list.id}`);
  } catch (e) {
    return NextResponse.json({ error: e.message || "Not found" }, { status: e.status || 500 });
  }
}
