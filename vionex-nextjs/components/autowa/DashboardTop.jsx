"use client";

import { useEffect, useState } from "react";
import {
  CalendarClock,
  ChevronRight,
  CircleCheckBig,
  Filter,
  Gem,
  ListOrdered,
  MessageCircle,
  PlugZap,
  QrCode,
  Smartphone,
  Unplug,
} from "lucide-react";
import { api } from "./ui";

const POLL_MS = 5000;

function Tile({ href, icon: Icon, label }) {
  return (
    <a href={href} className="d-flex flex-grow-1 mw-fit align-items-center gap-2 ps-2 pe-3 py-2 rounded-pill tile-soft transition-base">
      <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
        <Icon />
      </span>
      <span className="flex-grow-1 min-w-0 fw-medium text-truncate">{label}</span>
      <ChevronRight className="icon-20 flip-rtl" aria-hidden="true" />
    </a>
  );
}

function Metric({ wash, iconBg, icon: Icon, title, value, note }) {
  return (
    <div className="col">
      <div className={`position-relative overflow-hidden h-100 p-3 rounded-4 ${wash}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/burst-art.svg" alt="" className="card-watermark position-absolute top-0 pe-none" />
        <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
          <div className="d-flex flex-column gap-2">
            <span className={`icon-box ${iconBg} text-white rounded-circle`} aria-hidden="true">
              <Icon />
            </span>
            <h3 className="fs-5 fw-medium text-primary mb-0">{title}</h3>
          </div>
          <div className="d-flex flex-column gap-1">
            <span className="fs-3 fw-bold text-title text-break">
              <bdi>{value}</bdi>
            </span>
            {note && <span className="fs-md text-muted-2">{note}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Welcome banner + the four key cards. Starts from server data, then refreshes
   every few seconds, so a WhatsApp removed from the phone shows up straight away. */
export default function DashboardTop({ firstName, plan, isAdmin, initial, limit, expires }) {
  const [state, setState] = useState(initial); /* { items, max, offline } */

  useEffect(() => {
    const t = setInterval(async () => {
      try {
        const r = await api("/api/whatsapp");
        setState({ items: r.items, max: r.max, offline: false });
      } catch {
        setState((s) => ({ ...s, offline: true }));
      }
    }, POLL_MS);
    return () => clearInterval(t);
  }, []);

  const connected = state.items.filter((w) => w.status === "ready");
  const numbers = connected.filter((w) => w.phone).map((w) => `+${w.phone}`);
  const label = state.offline ? "Engine offline" : connected.length ? "Connected" : "Not connected";
  const tint = state.offline || !connected.length ? "tint-danger" : "tint-success";
  const StatusIcon = state.offline ? PlugZap : connected.length ? CircleCheckBig : Unplug;

  return (
    <>
      <section className="on-dark bg-nav rounded-3 overflow-hidden flex-shrink-0 p-3 p-md-4 mb-4" aria-labelledby="welcome-title">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-xxl-7">
            <h2 id="welcome-title" className="text-title mb-1">
              Welcome back, {firstName} <span aria-hidden="true">👋</span>
            </h2>
            <p className="fw-medium text-primary mb-4">Here&apos;s your AutoWA workspace at a glance.</p>
            <div className="d-flex flex-wrap gap-3">
              <Tile href="/whatsapp" icon={QrCode} label="Login to WhatsApp" />
              <Tile href="/number-generator" icon={ListOrdered} label="Number Generator" />
              <Tile href="/live-filter" icon={Filter} label="Live Filter" />
            </div>
          </div>
          <div className="col-12 col-xxl-5">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <div className="on-page d-flex flex-column justify-content-between gap-3 h-100 p-3 rounded-4 bg-plain">
                  <h3 className="d-flex align-items-center gap-2 fs-5 text-title mb-0">
                    <span className="icon-box bg-accent text-nav rounded-circle" aria-hidden="true">
                      <MessageCircle />
                    </span>
                    WhatsApp
                  </h3>
                  <div className="d-flex flex-column gap-2 align-items-start">
                    <span className={`badge-soft ${tint} d-inline-flex align-items-center gap-1`} aria-live="polite">
                      <StatusIcon className="icon-16" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="fs-md text-muted-2">{numbers.length ? numbers.join(", ") : "No number linked yet"}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <a href="/profile/package" className="position-relative overflow-hidden d-flex flex-column justify-content-between gap-3 h-100 p-3 rounded-4 bg-grad-6 text-decoration-none">
                  <h3 className="position-relative d-flex align-items-center gap-2 fs-5 text-title mb-0">
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <Gem />
                    </span>
                    Current Plan
                  </h3>
                  <div className="position-relative d-flex flex-column gap-1">
                    <span className="fs-5 fw-bold text-title">{plan.name}</span>
                    <span className="fs-md text-title">{plan.note}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="visually-hidden">Key metrics</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
          <Metric
            wash="bg-wash-emerald"
            iconBg="bg-cat-emerald"
            icon={MessageCircle}
            title="WhatsApp Status"
            value={label}
            note={state.offline ? "Start the WhatsApp engine" : `${connected.length} of ${state.items.length} connected · ${state.max} allowed`}
          />
          <Metric
            wash="bg-wash-blue"
            iconBg="bg-cat-blue"
            icon={Smartphone}
            title="Linked Number"
            value={numbers[0] || "—"}
            note={numbers.length > 1 ? `+${numbers.length - 1} more linked` : connected[0]?.pushName || null}
          />
          <Metric
            wash="bg-wash-amber"
            iconBg="bg-cat-amber"
            icon={ListOrdered}
            title="Generator Limit"
            value={limit == null ? "No limit" : limit.toLocaleString()}
            note={limit == null ? "generate as many numbers as you need" : "numbers per generated list"}
          />
          <Metric wash="bg-wash-rose" iconBg="bg-cat-red" icon={CalendarClock} title="Package Expires" value={expires.value} note={isAdmin ? null : expires.note} />
        </div>
      </section>
    </>
  );
}
