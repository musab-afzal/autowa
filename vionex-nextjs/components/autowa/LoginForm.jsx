"use client";

import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, LogIn, Mail, CircleAlert } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
          remember: form.get("remember") === "on",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not sign in. Please try again.");
      window.location.href = data.role === "admin" ? "/admin" : "/";
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <div className="tint-danger rounded-3 p-3 mb-3 d-flex align-items-center gap-2 fs-md fw-semibold" role="alert">
          <CircleAlert className="icon-20 flex-shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label fs-md fw-semibold text-title">
          Email address
        </label>
        <div className="field-icon">
          <Mail className="icon-18" aria-hidden="true" />
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            name="email"
            placeholder="you@company.com"
            autoComplete="username"
            required
            autoFocus
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label fs-md fw-semibold text-title">
          Password
        </label>
        <div className="field-icon">
          <LockKeyhole className="icon-18" aria-hidden="true" />
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="loginPassword"
            name="password"
            placeholder="Your password"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className="btn btn-ghost btn-18 rounded-circle"
            onClick={() => setShowPassword((v) => !v)}
            aria-controls="loginPassword"
            aria-pressed={showPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="loginRemember" name="remember" defaultChecked />
        <label className="form-check-label fs-md text-body-2" htmlFor="loginRemember">
          Keep me signed in on this device
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2"
        disabled={busy}
      >
        {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <LogIn className="icon-18" aria-hidden="true" />}
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
