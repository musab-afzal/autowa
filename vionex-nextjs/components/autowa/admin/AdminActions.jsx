"use client";

import { useState } from "react";
import { DatabaseBackup } from "lucide-react";
import { DownloadMenu } from "../ui";

const REPORT_FORMATS = [
  { key: "xlsx", label: "Excel (.xlsx)" },
  { key: "csv", label: "CSV (.csv)" },
  { key: "pdf", label: "PDF (.pdf)" },
];

/* Welcome-banner buttons: users report + database backup. */
export default function AdminActions() {
  const [backingUp, setBackingUp] = useState(false);
  return (
    <div className="d-flex flex-wrap gap-2">
      <DownloadMenu href={(f) => `/api/admin/report?format=${f}`} label="Generate users report" className="btn-accent" formats={REPORT_FORMATS} />
      <a
        href="/api/admin/backup"
        className="btn btn-accent-ghost d-inline-flex align-items-center gap-2"
        onClick={() => {
          setBackingUp(true);
          setTimeout(() => setBackingUp(false), 3000);
        }}
      >
        {backingUp ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <DatabaseBackup className="icon-16" aria-hidden="true" />}
        Database backup
      </a>
    </div>
  );
}
