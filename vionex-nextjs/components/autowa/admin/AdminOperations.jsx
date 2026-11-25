"use client";

import { useEffect, useState } from "react";
import { Activity, CircleAlert, Loader, UsersRound } from "lucide-react";
import { api, fmtDateTime } from "../ui";

const POLL_MS = 5000;

function Tile({ icon: Icon, tint, label, value, note }) {
  return (
    <div className="col">
      <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-soft h-100">
        <span className={`icon-box ${tint} text-white rounded-circle`} aria-hidden="true">
          <Icon />
        </span>
        <span className="lh-sm">
          <span className="d-block fs-3 fw-bold text-title">{value.toLocaleString()}</span>
          <span className="d-block fs-md text-muted-2">{label}</span>
          {note && <span className="d-block fs-xs text-muted-2">{note}</span>}
        </span>
      </div>
    </div>
  );
}

function JobRow({ j }) {
  const pct = j.total ? Math.round((j.checked / j.total) * 100) : 0;
  return (
    <tr>
      <td>
        <span className="fw-medium text-title">{j.userName}</span>
        <span className="d-block fs-sm text-muted-2">{j.userEmail}</span>
      </td>
      <td className="text-break">{j.fileName}</td>
      <td style={{ minWidth: 140 }}>
        <div className="d-flex justify-content-between fs-sm">
          <span>
            {j.checked.toLocaleString()} / {j.total.toLocaleString()}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="progress" style={{ height: 6 }}>
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
      </td>
      <td className="text-nowrap fs-sm">{fmtDateTime(j.createdAt)}</td>
    </tr>
  );
}

/* Live operations: who is online, what is running, what failed. Refreshes every 5 s. */
export default function AdminOperations({ initial }) {
  const [ops, setOps] = useState(initial);

  useEffect(() => {
    const t = setInterval(() => api("/api/admin/operations").then(setOps).catch(() => {}), POLL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="card mb-4">
      <div className="card-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <h2 className="fs-5 fw-semibold text-title mb-0">Operations</h2>
          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
            <Activity className="icon-14" aria-hidden="true" /> Live
          </span>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3 mb-3">
          <Tile icon={UsersRound} tint="bg-cat-emerald" label="Active users" value={ops.activeUsers.length} note={`seen in the last ${ops.activeMinutes} minutes`} />
          <Tile icon={Loader} tint="bg-cat-blue" label="Tasks running now" value={ops.running.length} note="Live Filter jobs" />
          <Tile
            icon={CircleAlert}
            tint={ops.failed.length || ops.failedBatches ? "bg-cat-red" : "bg-cat-slate"}
            label="Failed"
            value={ops.failed.length}
            note={`stopped filters (7 days) · ${ops.failedBatches} failed lookups (24 h)`}
          />
        </div>

        <div className="row g-3">
          <div className="col-12 col-xl-4">
            <h3 className="fs-6 fw-semibold text-title mb-2">Active users</h3>
            {ops.activeUsers.length ? (
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {ops.activeUsers.map((u) => (
                  <li key={u.id} className="d-flex align-items-center gap-2 p-2 rounded-3 bg-soft">
                    <span className="legend-dot bg-cat-emerald flex-shrink-0" aria-hidden="true" />
                    <span className="min-w-0 me-auto">
                      <span className="d-block fw-medium text-title text-truncate">{u.name}</span>
                      <span className="d-block fs-sm text-muted-2 text-truncate">{u.email}</span>
                    </span>
                    {u.role === "admin" && <span className="badge-soft tint-primary">Admin</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="fs-md text-body-2 mb-0">Nobody is active right now.</p>
            )}
          </div>
          <div className="col-12 col-xl-8">
            <h3 className="fs-6 fw-semibold text-title mb-2">Running tasks</h3>
            {ops.running.length ? (
              <div className="table-responsive mb-3">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">List</th>
                      <th scope="col">Progress</th>
                      <th scope="col">Started</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ops.running.map((j) => (
                      <JobRow key={j.id} j={j} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="fs-md text-body-2">No tasks are running.</p>
            )}

            <h3 className="fs-6 fw-semibold text-title mb-2">Failed tasks (last 7 days)</h3>
            {ops.failed.length ? (
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">List</th>
                      <th scope="col">Reason</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ops.failed.map((j) => (
                      <tr key={j.id}>
                        <td>
                          <span className="fw-medium text-title">{j.userName}</span>
                          <span className="d-block fs-sm text-muted-2">{j.userEmail}</span>
                        </td>
                        <td className="text-break">
                          {j.fileName}
                          <span className="d-block fs-sm text-muted-2">
                            {j.checked.toLocaleString()} of {j.total.toLocaleString()} checked
                          </span>
                        </td>
                        <td className="fs-sm text-danger">{j.message}</td>
                        <td className="text-nowrap fs-sm">{fmtDateTime(j.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="fs-md text-body-2 mb-0">No failed tasks. 🎉</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
