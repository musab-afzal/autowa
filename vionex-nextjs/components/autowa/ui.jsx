"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleAlert, Download, FileSpreadsheet, FileText, FileType2, Sheet } from "lucide-react";
import { EXPORT_FORMATS } from "@/lib/numbers";

/* Small client helpers shared by the AutoWA screens. */

export async function api(path, options) {
  const res = await fetch(path, { cache: "no-store", ...options });
  if (res.status === 401) {
    window.location.href = "/login";
    throw new Error("Signed out");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export const postJson = (path, body) =>
  api(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body ?? {}) });

export function Alert({ children, tint = "tint-danger" }) {
  return (
    <div className={`${tint} rounded-3 p-3 mb-3 d-flex align-items-center gap-2 fs-md fw-semibold`} role="alert">
      <CircleAlert className="icon-20 flex-shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function Spinner({ text }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center gap-3 py-5">
      <span className="spinner-border text-primary" role="status" aria-hidden="true" />
      {text && <p className="fw-medium text-title mb-0">{text}</p>}
    </div>
  );
}

const ICONS = { txt: FileText, xlsx: FileSpreadsheet, csv: Sheet, pdf: FileType2 };

/* A download button that opens a small menu: Notepad, Excel, CSV, PDF.
   `href(format)` returns the download URL for a format. */
export function DownloadMenu({
  href,
  label = "Download",
  className = "btn-primary",
  size = "",
  disabled = false,
  align = "start",
  formats = EXPORT_FORMATS,
}) {
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.type === "keydown" ? e.key === "Escape" : !box.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={box} className="position-relative d-inline-block">
      <button
        type="button"
        className={`btn ${size} ${className} d-inline-flex align-items-center gap-2`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={disabled}
      >
        <Download className="icon-16" aria-hidden="true" />
        {label}
        <ChevronDown className="icon-14" aria-hidden="true" />
      </button>
      {open && (
        <div
          className={`dropdown-menu show p-1 shadow ${align === "end" ? "dropdown-menu-end" : ""}`}
          role="menu"
          style={{ position: "absolute", top: "100%", marginTop: 4, [align === "end" ? "right" : "left"]: 0, zIndex: 1060 }}
        >
          {formats.map((f) => {
            const Icon = ICONS[f.key];
            return (
              <a key={f.key} role="menuitem" className="dropdown-item d-flex align-items-center gap-2" href={href(f.key)} onClick={() => setOpen(false)}>
                <Icon className="icon-16" aria-hidden="true" /> {f.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* A Bootstrap-styled modal driven by React state (no Bootstrap JS). */
export function Modal({ title, onClose, children, footer, size = "" }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true" aria-label={title}>
        <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${size}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5">{title}</h2>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export function fmtDateTime(iso) {
  return new Date(iso).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}
