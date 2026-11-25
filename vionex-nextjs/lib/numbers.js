/* Number-list rules shared by the browser (preview) and the server (saved
   lists, downloads, Live Filter). No server-only imports here. */

export const digits = (s) => String(s ?? "").replace(/\D/g, "");

/* Validates generator input. Returns { error } or { cc, local, increment, quantity }. */
export function parseGenerator(form, limit) {
  const cc = digits(form.countryCode);
  const local = digits(form.phone ?? form.startNumber).replace(/^0+/, ""); /* 0300… → 300… */
  const increment = Number(form.increment);
  const quantity = Number(form.quantity);

  if (!cc || cc.length > 4) return { error: "Enter a country code of 1 to 4 digits, e.g. 92." };
  if (local.length < 4) return { error: "Enter a phone number with at least 4 digits." };
  if (cc.length + local.length > 15) return { error: "Country code + number can be at most 15 digits." };
  if (!Number.isInteger(increment) || increment < 1 || increment > 1000000)
    return { error: "Increment must be a whole number from 1 to 1,000,000." };
  if (!Number.isInteger(quantity) || quantity < 1) return { error: "Quantity must be at least 1." };
  if (limit && quantity > limit) return { error: `You can generate up to ${limit.toLocaleString()} numbers per list.` };
  return { cc, local, increment, quantity };
}

/* start, start+inc, start+2·inc … (BigInt, so long numbers never lose digits).
   Keeps the original width, so 0012 + 1 stays 0013. */
export function generateNumbers({ cc, local, increment, quantity }, plus = false, from = 0, count = quantity) {
  const width = local.length;
  const start = BigInt(local);
  const step = BigInt(increment);
  const prefix = (plus ? "+" : "") + cc;
  const end = Math.min(quantity, from + count);
  const out = [];
  for (let i = from; i < end; i++) out.push(prefix + (start + step * BigInt(i)).toString().padStart(width, "0"));
  return out;
}

/* One number per line (commas / semicolons also accepted). Keeps 7–15 digits, removes duplicates. */
export function parseNumberText(text) {
  const seen = new Set();
  let invalid = 0;
  let duplicates = 0;
  for (const raw of String(text).split(/[\r\n,;]+/)) {
    if (!raw.trim()) continue;
    const n = digits(raw);
    if (n.length < 7 || n.length > 15) {
      invalid++;
      continue;
    }
    if (seen.has(n)) {
      duplicates++;
      continue;
    }
    seen.add(n);
  }
  return { numbers: [...seen], invalid, duplicates };
}

export const EXPORT_FORMATS = [
  { key: "txt", label: "Notepad (.txt)" },
  { key: "xlsx", label: "Excel (.xlsx)" },
  { key: "csv", label: "CSV (.csv)" },
  { key: "pdf", label: "PDF (.pdf)" },
];
