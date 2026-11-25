"use client";

import { ArrowRight } from "lucide-react";
import { DownloadMenu, fmtDateTime } from "./ui";
import { FilterStatusBadge, resultHref } from "./LiveFilter";

/* The latest Live Filter runs, for the dashboard. */
export default function RecentFilters({ jobs, bothResults = true }) {
  return (
    <section className="card mb-4">
      <div className="card-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <h2 className="fs-5 fw-semibold text-title mb-0">Recent filters</h2>
          <a href="/live-filter" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1">
            Open Live Filter <ArrowRight className="icon-14 flip-rtl" aria-hidden="true" />
          </a>
        </div>
        {jobs.length === 0 ? (
          <p className="text-body-2 mb-0">No filters yet. Generate a list and press “Start filtration”, or upload a file in the Live Filter.</p>
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
                  <th scope="col" className="text-end">Download</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id}>
                    <td className="fw-medium text-title text-break">{j.fileName}</td>
                    <td className="text-nowrap">{fmtDateTime(j.createdAt)}</td>
                    <td className="text-end">{j.total.toLocaleString()}</td>
                    <td className="text-end text-success fw-semibold">{j.exists.toLocaleString()}</td>
                    <td className="text-end text-danger fw-semibold">{j.notExists.toLocaleString()}</td>
                    <td>
                      <FilterStatusBadge status={j.status} />
                    </td>
                    <td className="text-end text-nowrap">
                      <div className="d-inline-flex gap-1">
                        <DownloadMenu href={resultHref(j.id, "exists")} label="On WA" size="btn-sm" className="btn-outline-success" disabled={!j.exists} align="end" />
                        {bothResults && <DownloadMenu href={resultHref(j.id, "not-exists")} label="Not on WA" size="btn-sm" className="btn-outline-danger" disabled={!j.notExists} align="end" />}
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
  );
}
