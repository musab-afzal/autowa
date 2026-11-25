import { getDb } from "./db";
import { blockedReason, entitlements, generatorLimit } from "./limits";
import { numberAllowed } from "./countries";
import { generateNumbers, parseGenerator } from "./numbers";
import { WaError } from "./whatsapp";

/* Generated lists are stored as their recipe (country code, start, increment,
   quantity), not as numbers: any list can be rebuilt exactly, at any size. */

function shape(r) {
  const p = { cc: r.country_code, local: r.start_number, increment: r.increment, quantity: r.quantity };
  const [first] = generateNumbers(p, !!r.plus, 0, 1);
  const [last] = generateNumbers(p, !!r.plus, r.quantity - 1, 1);
  return {
    id: r.id,
    countryCode: r.country_code,
    startNumber: r.start_number,
    increment: r.increment,
    quantity: r.quantity,
    plus: !!r.plus,
    first,
    last,
    createdAt: r.created_at,
  };
}

function getRow(userId, id) {
  const r = getDb().prepare("SELECT * FROM generator_logs WHERE id = ? AND user_id = ?").get(Number(id), userId);
  if (!r) throw new WaError(404, "This number list was not found.");
  return r;
}

export function createList(user, body) {
  const ent = entitlements(user);
  const blocked = blockedReason(ent);
  if (blocked) throw new WaError(403, blocked);
  if (!ent.generator) throw new WaError(403, "The number generator is not included in your plan.");
  const p = parseGenerator(body, generatorLimit(user));
  if (p.error) throw new WaError(400, p.error);
  if (!numberAllowed(p.cc + p.local, ent.dialCodes)) {
    throw new WaError(403, "Your account is not allowed to use this country code. Pick one of your allowed countries.");
  }
  const info = getDb()
    .prepare(
      "INSERT INTO generator_logs (user_id, country_code, start_number, increment, quantity, plus, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    )
    .run(user.id, p.cc, p.local, p.increment, p.quantity, body.plus ? 1 : 0, new Date().toISOString());
  return shape(getRow(user.id, info.lastInsertRowid));
}

export function listLists(userId, limit = 20) {
  return getDb()
    .prepare("SELECT * FROM generator_logs WHERE user_id = ? ORDER BY id DESC LIMIT ?")
    .all(userId, limit)
    .map(shape);
}

export function getList(userId, id) {
  return shape(getRow(userId, id));
}

/* The list's numbers, exactly as they were generated. */
export function listNumbers(userId, id) {
  const r = getRow(userId, id);
  const numbers = generateNumbers(
    { cc: r.country_code, local: r.start_number, increment: r.increment, quantity: r.quantity },
    !!r.plus,
  );
  return { list: shape(r), numbers };
}

export function listFileName(l) {
  return `numbers_${l.countryCode}${l.startNumber}_x${l.quantity}_${l.createdAt.slice(0, 10)}`;
}
