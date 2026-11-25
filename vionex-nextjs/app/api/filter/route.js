import { withUser } from "@/lib/api";
import { COUNTDOWN_SECONDS, createJob, filterLimit, listJobs } from "@/lib/filter";

export const GET = withUser(async (_req, user) => ({
  limit: filterLimit(user),
  countdown: COUNTDOWN_SECONDS,
  jobs: listJobs(user.id),
}));

/* body: { waId, listId } for a generated list, or { waId, files: [{ name, text }] } / { waId, fileName, text } for uploads */
export const POST = withUser(
  async (req, user, _ctx, log) => {
    const b = await req.json().catch(() => ({}));
    const names = Array.isArray(b.files) ? b.files.map((f) => f?.name).filter(Boolean).join(", ") : b.fileName;
    log.description = b.listId ? `Filter generated list #${b.listId}` : `Filter ${names || "an uploaded file"}`;
    const source = b.listId ? { listId: b.listId } : Array.isArray(b.files) ? { files: b.files } : { text: b.text, fileName: b.fileName };
    const j = await createJob(user, b.waId, source);
    const skipped = [
      j.limitSkipped && `${j.limitSkipped.toLocaleString()} over the plan limit`,
      j.blocked && `${j.blocked.toLocaleString()} in blocked countries`,
      j.invalid && `${j.invalid.toLocaleString()} invalid`,
      j.duplicates && `${j.duplicates.toLocaleString()} duplicates`,
    ].filter(Boolean);
    log.description = `${j.fileName}: ${j.total.toLocaleString()} numbers to check${skipped.length ? `; skipped ${skipped.join(", ")}` : ""}`;
    log.target = j.fileName;
    return j;
  },
  { category: "filter", action: "Started a filter" },
);
