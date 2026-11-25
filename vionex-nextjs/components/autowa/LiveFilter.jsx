"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CircleCheckBig,
  Eye,
  FileText,
  Filter,
  Gauge,
  Hourglass,
  ListChecks,
  ListOrdered,
  Play,
  Square,
  Timer,
  Trash2,
  Upload,
  UserCheck,
  UserX,
} from "lucide-react";
import ApexChart, { baseOptions } from "./ApexChart";
import { Alert, DownloadMenu, api, fmtDateTime, postJson } from "./ui";
import { parseNumberText } from "@/lib/numbers";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACTIVE = new Set(["countdown", "running"]);

export const FILTER_STATUS = {
  countdown: ["tint-info", "Starting"],
  running: ["tint-info", "Filtering"],
  completed: ["tint-success", "Completed"],
  stopped: ["tint-warning", "Stopped"],
  cancelled: ["tint-danger", "Cancelled"],
};

export function FilterStatusBadge({ status }) {
  const [tint, label] = FILTER_STATUS[status] || ["tint-info", status];
  return <span className={`badge-soft ${tint} text-nowrap`}>{label}</span>;
}

export const resultHref = (jobId, type) => (format) => `/api/filter/${jobId}/download?type=${type}&format=${format}`;

function Stat({ icon: Icon, tint, label, value }) {
  return (
    <div className="col">
      <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-soft h-100">
        <span className={`icon-box ${tint} rounded-circle`} aria-hidden="true">
          <Icon />
        </span>
        <span className="lh-sm">
          <span className="d-block fs-4 fw-bold text-title">{typeof value === "number" ? value.toLocaleString() : value}</span>
          <span className="d-block fs-md text-muted-2">{label}</span>
        </span>
      </div>
    </div>
  );
}

function fmtDuration(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "—";
  if (sec < 60) return `${Math.max(1, Math.round(sec))}s`;
  const m = Math.floor(sec / 60);
  return m < 60 ? `${m}m ${Math.round(sec % 60)}s` : `${Math.floor(m / 60)}h ${m % 60}m`;
}

/* ------------------------------------------------------------ job panel -- */

function JobPanel({ job, countdown, speed, onCancel, onResume, busy, bothResults }) {
  const left = Math.max(0, job.total - job.checked);
  const pct = job.total ? Math.round((job.checked / job.total) * 100) : 0;

  if (job.status === "countdown") {
    return (
      <div className="d-flex flex-column align-items-center text-center gap-3 py-4">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle bg-grad-theme text-white fw-bold"
          style={{ width: 120, height: 120, fontSize: 48 }}
          aria-live="polite"
          aria-label={`Starting in ${countdown} seconds`}
        >
          {countdown}
        </div>
        <div>
          <p className="fs-5 fw-bold text-title mb-1">Picking numbers from your list…</p>
          <p className="text-body-2 mb-0">The check against WhatsApp starts in {countdown} second{countdown === 1 ? "" : "s"}.</p>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 g-2 w-100">
          {[
            [job.total, "numbers picked"],
            [job.duplicates, "duplicates removed"],
            [job.invalid + (job.blocked || 0) + (job.limitSkipped || 0), "skipped (invalid, country or plan limit)"],
          ].map(([v, l]) => (
            <div key={l} className="col">
              <div className="p-2 rounded-3 bg-soft">
                <span className="d-block fs-4 fw-bold text-title">{v.toLocaleString()}</span>
                <span className="fs-sm text-muted-2">{l}</span>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2" onClick={onCancel} disabled={busy}>
          <Square className="icon-16" aria-hidden="true" /> Cancel
        </button>
      </div>
    );
  }

  const eta = speed > 0 ? left / speed : NaN;

  return (
    <>
      {job.status === "stopped" && <Alert tint="tint-warning">{job.message || "This filter was stopped."}</Alert>}
      {job.status === "cancelled" && <Alert tint="tint-warning">This filter was cancelled. You can still download the numbers checked so far.</Alert>}
      {job.status === "completed" && (
        <div className="tint-success rounded-3 p-3 mb-3 d-flex align-items-center gap-2 fs-md fw-semibold" role="status">
          <CircleCheckBig className="icon-20 flex-shrink-0" aria-hidden="true" />
          Done — all {job.total.toLocaleString()} numbers were checked. Download your results below.
        </div>
      )}

      <div className="mb-3">
        <div className="d-flex justify-content-between fs-md mb-1">
          <span className="fw-semibold text-title">
            {job.checked.toLocaleString()} of {job.total.toLocaleString()} checked
          </span>
          <span className="fw-semibold text-title">{pct}%</span>
        </div>
        <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} style={{ height: 12 }}>
          <div className={`progress-bar ${job.status === "running" ? "progress-bar-striped progress-bar-animated" : ""}`} style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="row row-cols-2 row-cols-lg-3 g-2 mb-3">
        <Stat icon={ListChecks} tint="bg-cat-blue text-white" label="Done" value={job.checked} />
        <Stat icon={Hourglass} tint="bg-cat-slate text-white" label="Left" value={left} />
        <Stat icon={UserCheck} tint="bg-cat-emerald text-white" label="On WhatsApp" value={job.exists} />
        <Stat icon={UserX} tint="bg-cat-red text-white" label="Not on WhatsApp" value={job.notExists} />
        {job.status === "running" ? (
          <>
            <Stat icon={Gauge} tint="bg-cat-violet text-white" label="Numbers / second" value={speed > 0 ? Math.round(speed).toLocaleString() : "—"} />
            <Stat icon={Timer} tint="bg-cat-amber text-white" label="Time left" value={fmtDuration(eta)} />
          </>
        ) : (
          job.errors > 0 && <Stat icon={Hourglass} tint="bg-cat-amber text-white" label="Could not check" value={job.errors} />
        )}
      </div>

      <div className="row g-3 align-items-center mb-3">
        <div className="col-12 col-md-6">
          <ApexChart
            height={250}
            deps={[job.id, job.status]}
            series={[job.exists, job.notExists, left + job.errors]}
            build={(t) => ({
              ...baseOptions(t),
              chart: { ...baseOptions(t).chart, type: "donut" },
              series: [0, 0, 0],
              labels: ["On WhatsApp", "Not on WhatsApp", job.status === "running" ? "Left" : "Not checked"],
              colors: [t.emerald, t.rose, t.border],
              legend: { ...baseOptions(t).legend, position: "bottom", horizontalAlign: "center" },
              stroke: { width: 0 },
              plotOptions: { pie: { donut: { size: "68%", labels: { show: true, total: { show: true, label: "Total", color: t.axis } } } } },
            })}
          />
        </div>
        <div className="col-12 col-md-6">
          <ApexChart
            height={250}
            deps={[job.id, job.status]}
            series={[{ name: "Numbers", data: [job.exists, job.notExists] }]}
            build={(t) => ({
              ...baseOptions(t),
              chart: { ...baseOptions(t).chart, type: "bar" },
              series: [{ name: "Numbers", data: [0, 0] }],
              colors: [t.emerald, t.rose],
              plotOptions: { bar: { distributed: true, borderRadius: 6, columnWidth: "50%" } },
              legend: { show: false },
              dataLabels: { enabled: true, style: { fontSize: "13px" } },
              xaxis: { categories: ["On WhatsApp", "Not on WhatsApp"], axisBorder: { show: false }, axisTicks: { show: false } },
              yaxis: { min: 0, forceNiceScale: true, labels: { formatter: (v) => Math.round(v).toLocaleString() } },
            })}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-center gap-2">
        <DownloadMenu href={resultHref(job.id, "exists")} label={`On WhatsApp (${job.exists.toLocaleString()})`} className="btn-success" disabled={!job.exists} />
        {bothResults && (<DownloadMenu
          href={resultHref(job.id, "not-exists")}
          label={`Not on WhatsApp (${job.notExists.toLocaleString()})`}
          className="btn-outline-danger"
          disabled={!job.notExists}
        />)}
        {job.errors > 0 && <DownloadMenu href={resultHref(job.id, "errors")} label={`Not checked (${job.errors})`} className="btn-outline-soft" />}
        {job.status === "running" && (
          <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2 ms-auto" onClick={onCancel} disabled={busy}>
            <Square className="icon-16" aria-hidden="true" /> Stop
          </button>
        )}
        {job.status === "stopped" && (
          <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2 ms-auto" onClick={onResume} disabled={busy}>
            <Play className="icon-16" aria-hidden="true" /> Resume
          </button>
        )}
      </div>
    </>
  );
}

/* ----------------------------------------------------------------- page -- */

export default function LiveFilter({ initialWhatsapps, initialJobs, limit, lists, preselectListId, ent }) {
  const [whatsapps] = useState(initialWhatsapps);
  const [waId, setWaId] = useState(initialWhatsapps[0] ? String(initialWhatsapps[0].id) : "");
  const [source, setSource] = useState(preselectListId || lists.length ? "list" : "file");
  const [listId, setListId] = useState(String(preselectListId || lists[0]?.id || ""));
  const [file, setFile] = useState(null); /* { name, text, valid, invalid } */
  const [jobs, setJobs] = useState(initialJobs);
  const [job, setJob] = useState(() => initialJobs.find((j) => ACTIVE.has(j.status)) || null);
  const [countdown, setCountdown] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const startAt = useRef(job ? Date.now() + job.startsIn * 1000 : 0);
  const samples = useRef([]);
  const fileInput = useRef(null);

  const selectedList = lists.find((l) => String(l.id) === listId);

  const loadJobs = useCallback(async () => {
    try {
      setJobs((await api("/api/filter")).jobs);
    } catch (e) {
      setError(e.message);
    }
  }, []);

  /* follow the current job while it is active */
  const jobId = job?.id;
  const jobActive = !!job && ACTIVE.has(job.status);
  useEffect(() => {
    if (!jobId || !jobActive) return;
    samples.current = [];
    const t = setInterval(async () => {
      try {
        const j = await api(`/api/filter/${jobId}`);
        /* speed = numbers checked over the last ~10 seconds */
        const s = samples.current;
        s.push({ t: Date.now(), n: j.checked });
        while (s.length > 1 && s[s.length - 1].t - s[0].t > 10000) s.shift();
        if (s.length > 1) setSpeed((s[s.length - 1].n - s[0].n) / ((s[s.length - 1].t - s[0].t) / 1000));
        setJob(j);
        if (!ACTIVE.has(j.status)) loadJobs();
      } catch (e) {
        setError(e.message);
      }
    }, 1000);
    return () => clearInterval(t);
  }, [jobId, jobActive, loadJobs]);

  /* local countdown, smooth between polls */
  useEffect(() => {
    if (job?.status !== "countdown") return;
    const tick = () => setCountdown(Math.max(0, Math.ceil((startAt.current - Date.now()) / 1000)));
    tick();
    const t = setInterval(tick, 200);
    return () => clearInterval(t);
  }, [job?.status, job?.id]);

  /* one file, or several when the plan allows it — numbers from all files are merged */
  async function pickFile(e) {
    const picked = [...(e.target.files || [])];
    setError("");
    if (!picked.length) return setFile(null);
    const size = picked.reduce((s, f) => s + f.size, 0);
    if (size > MAX_FILE_BYTES) {
      setFile(null);
      e.target.value = "";
      return setError("The files are larger than 5 MB in total.");
    }
    try {
      const files = await Promise.all(picked.map(async (f) => ({ name: f.name, text: await f.text() })));
      const p = parseNumberText(files.map((f) => f.text).join("\n"));
      const outside = ent.dialCodes ? p.numbers.filter((n) => !ent.dialCodes.some((d) => n.startsWith(d))).length : 0;
      setFile({
        name: files.length === 1 ? files[0].name : `${files.length} files`,
        files,
        valid: p.numbers.length - outside,
        invalid: p.invalid,
        outside,
      });
    } catch {
      setError("Could not read this file.");
    }
  }

  async function start(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const body = source === "list" ? { waId: Number(waId), listId: Number(listId) } : { waId: Number(waId), files: file.files };
      const j = await postJson("/api/filter", body);
      startAt.current = Date.now() + j.startsIn * 1000;
      setSpeed(0);
      setJob(j);
      setFile(null);
      if (fileInput.current) fileInput.current.value = "";
      loadJobs();
    } catch (e2) {
      setError(e2.message);
    } finally {
      setBusy(false);
    }
  }

  async function jobAction(j, action) {
    if (action === "delete" && !window.confirm(`Delete the filter "${j.fileName}" and its results?`)) return;
    setBusy(true);
    try {
      if (action === "cancel") setJob(await postJson(`/api/filter/${j.id}/cancel`));
      if (action === "resume") setJob(await postJson(`/api/filter/${j.id}/resume`));
      if (action === "delete") {
        await api(`/api/filter/${j.id}`, { method: "DELETE" });
        if (job?.id === j.id) setJob(null);
      }
      setError("");
      loadJobs();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  const count = source === "list" ? selectedList?.quantity || 0 : file?.valid || 0;
  /* the plan limits filtering: a bigger list is checked up to the allowed amount */
  const allowedNow = Math.min(limit || Infinity, ent.remaining ?? Infinity);
  const overBy = Math.max(0, count - allowedNow);
  const noneLeft = allowedNow <= 0;
  const canStart = !!waId && count > 0 && !noneLeft && !busy && !jobActive;

  return (
    <>
      {error && <Alert>{error}</Alert>}

      <div className="row g-3 mb-3">
        {/* ===== New filter ===== */}
        <div className="col-12 col-xl-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="fs-5 fw-semibold text-title mb-1">New live filter</h2>
              <p className="text-body-2 mb-4">Find out which numbers are on WhatsApp. Numbers are checked in fast batches.</p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                {ent.remaining != null && (
                  <span className={`badge-soft ${ent.remaining > 0 ? "tint-info" : "tint-danger"}`}>{ent.remaining.toLocaleString()} numbers left in your plan</span>
                )}
                <span className="badge-soft tint-info">Up to {limit.toLocaleString()} per filter</span>
                {ent.countriesLabel && <span className="badge-soft tint-warning" title={ent.countriesLabel}>Countries: {ent.countriesLabel.length > 40 ? ent.countriesLabel.slice(0, 40) + "…" : ent.countriesLabel}</span>}
              </div>
              {ent.blocked ? (
                <Alert tint="tint-warning">{ent.blocked}</Alert>
              ) : whatsapps.length === 0 ? (
                <Alert tint="tint-warning">
                  <span>
                    Connect a WhatsApp first — numbers are checked through it. <a href="/whatsapp">Login to WhatsApp</a>
                  </span>
                </Alert>
              ) : (
                <form onSubmit={start}>
                  <div className="mb-3">
                    <label htmlFor="lfWa" className="form-label fs-md fw-semibold text-title">
                      Check with WhatsApp
                    </label>
                    <select id="lfWa" className="form-select" value={waId} onChange={(e) => setWaId(e.target.value)}>
                      {whatsapps.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.label}
                          {w.phone ? ` (+${w.phone})` : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="btn-group w-100 mb-3" role="group" aria-label="Numbers to check">
                    <button
                      type="button"
                      className={`btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 ${source === "list" ? "btn-primary" : "btn-outline-soft"}`}
                      aria-pressed={source === "list"}
                      onClick={() => setSource("list")}
                    >
                      <ListOrdered className="icon-16" aria-hidden="true" /> Generated list
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 ${source === "file" ? "btn-primary" : "btn-outline-soft"}`}
                      aria-pressed={source === "file"}
                      onClick={() => setSource("file")}
                    >
                      <Upload className="icon-16" aria-hidden="true" /> Upload file
                    </button>
                  </div>

                  {source === "list" ? (
                    lists.length === 0 ? (
                      <p className="text-body-2">
                        No generated lists yet. <a href="/number-generator">Generate one</a> or upload a file.
                      </p>
                    ) : (
                      <div className="mb-3">
                        <label htmlFor="lfList" className="form-label fs-md fw-semibold text-title">
                          Number list
                        </label>
                        <select id="lfList" className="form-select" value={listId} onChange={(e) => setListId(e.target.value)}>
                          {lists.map((l) => (
                            <option key={l.id} value={l.id}>
                              #{l.id} · {l.first} → {l.last} · {l.quantity.toLocaleString()} numbers
                            </option>
                          ))}
                        </select>
                        {selectedList && (
                          <div className="bg-soft rounded-3 p-3 mt-2 fs-md">
                            <strong>{selectedList.quantity.toLocaleString()}</strong> numbers, from <bdi>{selectedList.first}</bdi> to{" "}
                            <bdi>{selectedList.last}</bdi> (+{selectedList.increment} each), generated {fmtDateTime(selectedList.createdAt)}.
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="mb-3">
                      <label
                        htmlFor="lfFile"
                        className="d-flex flex-column align-items-center justify-content-center text-center gap-2 p-4 rounded-4 border border-2 bg-soft"
                        style={{ borderStyle: "dashed", cursor: "pointer" }}
                      >
                        {file ? <FileText className="icon-24 text-primary" aria-hidden="true" /> : <Upload className="icon-24 text-primary" aria-hidden="true" />}
                        <span className="fw-semibold text-title text-break">{file ? file.name : ent.multiFiles ? "Choose one or more .txt / .csv files" : "Choose a .txt or .csv file"}</span>
                        <span className="fs-sm text-muted-2">One number per line, with country code · max 5 MB</span>
                      </label>
                      <input ref={fileInput} id="lfFile" type="file" multiple={ent.multiFiles} accept=".txt,.csv,text/plain,text/csv" className="visually-hidden" onChange={pickFile} />
                      {file && (
                        <div className={`${!file.valid ? "tint-danger" : "tint-info"} rounded-3 p-3 mt-2 fs-md`}>
                          <strong>{file.valid.toLocaleString()}</strong> unique number(s) found
                          {file.invalid ? `, ${file.invalid.toLocaleString()} invalid line(s) will be skipped` : ""}
                          {file.outside ? `, ${file.outside.toLocaleString()} outside your allowed countries will be left out` : ""}.
                        </div>
                      )}
                    </div>
                  )}

                  {noneLeft ? (
                    <Alert>You have no numbers left to filter in your plan. Please contact your administrator.</Alert>
                  ) : (
                    overBy > 0 && (
                      <Alert tint="tint-info">
                        This list has {count.toLocaleString()} numbers. Your plan lets you filter {allowedNow.toLocaleString()} now, so the first{" "}
                        {allowedNow.toLocaleString()} will be checked and {overBy.toLocaleString()} skipped.
                      </Alert>
                    )
                  )}

                  <button type="submit" className="btn btn-primary btn-lg w-100 d-inline-flex align-items-center justify-content-center gap-2" disabled={!canStart}>
                    {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <Play className="icon-18" aria-hidden="true" />}
                    Start filtration
                  </button>
                  {jobActive && <p className="fs-sm text-muted-2 mt-2 mb-0">A filter is running. Wait for it to finish, or stop it, to start another.</p>}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ===== Current filter ===== */}
        <div className="col-12 col-xl-7">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <h2 className="fs-5 fw-semibold text-title mb-0 text-truncate">{job ? job.fileName : "Filter results"}</h2>
                {job && <FilterStatusBadge status={job.status} />}
              </div>
              {job ? (
                <JobPanel
                  job={job}
                  countdown={countdown}
                  speed={speed}
                  busy={busy}
                  onCancel={() => jobAction(job, "cancel")}
                  onResume={() => jobAction(job, "resume")}
                  bothResults={ent.bothResults}
                />
              ) : (
                <div className="flex-fill d-flex flex-column align-items-center justify-content-center text-center gap-2 py-5">
                  <span className="icon-box bg-muted rounded-circle" style={{ width: 64, height: 64 }}>
                    <Filter style={{ width: 30, height: 30 }} aria-hidden="true" />
                  </span>
                  <p className="fw-semibold text-title mb-0">No filter running</p>
                  <p className="text-body-2 mb-0">Choose a list and press Start filtration. Live progress and charts will show here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== History ===== */}
      <section className="card mb-4">
        <div className="card-body">
          <h2 className="fs-5 fw-semibold text-title mb-3">Recent filters</h2>
          {jobs.length === 0 ? (
            <p className="text-body-2 mb-0">Your filters will be listed here.</p>
          ) : (
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">List</th>
                    <th scope="col">Date</th>
                    <th scope="col" className="text-end">Numbers</th>
                    <th scope="col" className="text-end">On WhatsApp</th>
                    <th scope="col" className="text-end">Not on WhatsApp</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j) => (
                    <tr key={j.id} className={job?.id === j.id ? "table-active" : ""}>
                      <td className="fw-medium text-title text-break">{j.fileName}</td>
                      <td className="text-nowrap">{fmtDateTime(j.createdAt)}</td>
                      <td className="text-end">{j.total.toLocaleString()}</td>
                      <td className="text-end text-success fw-semibold">{j.exists.toLocaleString()}</td>
                      <td className="text-end text-danger fw-semibold">{j.notExists.toLocaleString()}</td>
                      <td>
                        <FilterStatusBadge status={j.status} />
                      </td>
                      <td className="text-end text-nowrap">
                        <div className="d-inline-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-ghost"
                            title="View"
                            aria-label={`View ${j.fileName}`}
                            onClick={() => {
                              startAt.current = Date.now() + j.startsIn * 1000;
                              setJob(j);
                            }}
                          >
                            <Eye className="icon-16" aria-hidden="true" />
                          </button>
                          <DownloadMenu href={resultHref(j.id, "exists")} label="On WA" size="btn-sm" className="btn-outline-success" disabled={!j.exists} align="end" />
                          {ent.bothResults && <DownloadMenu href={resultHref(j.id, "not-exists")} label="Not on WA" size="btn-sm" className="btn-outline-danger" disabled={!j.notExists} align="end" />}
                          <button
                            type="button"
                            className="btn btn-sm btn-ghost"
                            title="Delete"
                            aria-label={`Delete ${j.fileName}`}
                            onClick={() => jobAction(j, "delete")}
                            disabled={busy}
                          >
                            <Trash2 className="icon-16" aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
