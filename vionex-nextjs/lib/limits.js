import { allowedDialCodes, parseCountries } from "./countries";

/* What a user may do, from their plan plus the super admin's per-user overrides.
   `user` is the row from getCurrentUser() (it carries the plan columns). */

const ADMIN_PER_FILTER = 500000;
const ADMIN_SPEED = 10; /* seconds per 10,000 numbers */
const NO_PLAN_PER_FILTER = 1000;

/* Most numbers one generated list can hold (keeps downloads a sensible size). */
export const GENERATOR_MAX = 1_000_000;

/* Numbers per Live Filter run — set by the plan. */
export function filterLimit(user) {
  return user.role === "admin" ? ADMIN_PER_FILTER : user.max_generated_numbers || NO_PLAN_PER_FILTER;
}

/* Numbers per generated list. Plans do not limit generating; the super admin can set
   a per-user limit, otherwise only the technical maximum applies. */
export function generatorLimit(user) {
  if (user.role === "admin" || user.user_generator_limit == null) return GENERATOR_MAX;
  return Math.min(GENERATOR_MAX, user.user_generator_limit);
}

export function entitlements(user) {
  const admin = user.role === "admin";
  const countries = parseCountries(user.user_countries) ?? parseCountries(user.package_countries);
  const expired = !admin && !!user.package_expires_at && new Date(user.package_expires_at).getTime() < Date.now();
  const hasPlan = admin || !!user.package_id;
  /* total numbers the user may filter in this plan (null = unlimited) */
  const quota = admin ? null : hasPlan ? (user.user_filter_quota ?? user.package_filter_quota ?? 0) : 0;
  const used = user.quota_used || 0;

  return {
    admin,
    hasPlan,
    expired,
    perFilter: filterLimit(user),
    perList: generatorLimit(user),
    generatorLimited: !admin && user.user_generator_limit != null,
    quota,
    used,
    remaining: quota == null ? null : Math.max(0, quota - used),
    countries, /* null = all countries */
    dialCodes: allowedDialCodes(countries),
    generator: admin || (hasPlan && !!(user.feature_generator ?? 1)),
    multiFiles: admin || !!user.feature_multi_files,
    bothResults: admin || (hasPlan && !!(user.feature_both_results ?? 1)),
    speedSecPer10k: admin ? ADMIN_SPEED : user.speed_sec_per_10k || 30,
    support: admin ? "—" : user.support || "Email support",
  };
}

/* Why this user cannot filter / generate right now, or null. */
export function blockedReason(ent) {
  if (ent.admin) return null;
  if (!ent.hasPlan) return "No plan is assigned to your account yet. Please contact your administrator.";
  if (ent.expired) return "Your plan has expired. Please contact your administrator to renew it.";
  return null;
}
