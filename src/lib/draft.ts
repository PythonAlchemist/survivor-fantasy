import { put, list, del } from "@vercel/blob";

export const ROUNDS = 5;
export const DEFAULT_DRAFTERS = ["Drafter 1", "Drafter 2", "Drafter 3", "Drafter 4"];

export interface Pick {
  castawayId: string;
  drafter: string;
  round: number;
  pickNo: number;
  at: string;
}

export interface DraftState {
  v: number;
  drafters: string[];
  picks: Pick[];
  updatedAt: string;
}

const BLOB_PREFIX = "draft/state-";
const hasBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

/** Dev fallback so the page works locally without a Blob store. */
let memory: DraftState | null = null;

export function emptyState(drafters = DEFAULT_DRAFTERS): DraftState {
  return { v: 1, drafters, picks: [], updatedAt: new Date().toISOString() };
}

/** Snake order: 1-2-3-4, 4-3-2-1, ... one entry per pick slot. */
export function pickSlots(drafters: string[], rounds = ROUNDS): string[] {
  const slots: string[] = [];
  for (let r = 0; r < rounds; r++) {
    const row = r % 2 === 0 ? drafters : [...drafters].reverse();
    slots.push(...row);
  }
  return slots;
}

export function onTheClock(state: DraftState): { drafter: string; round: number; pickNo: number } | null {
  const slots = pickSlots(state.drafters);
  const i = state.picks.length;
  if (i >= slots.length) return null;
  return { drafter: slots[i], round: Math.floor(i / state.drafters.length) + 1, pickNo: i + 1 };
}

const pathFor = (v: number) => `${BLOB_PREFIX}${String(v).padStart(6, "0")}.json`;
const versionOf = (pathname: string) => {
  const m = pathname.match(/state-(\d+)\.json$/);
  return m ? parseInt(m[1], 10) : -1;
};

/**
 * Blob objects are served through a CDN with a 30-day max-age, and overwriting a
 * pathname does NOT reliably invalidate it — a read-after-write returns stale JSON.
 * So every write goes to a NEW versioned pathname and reads take the highest version
 * found via list(), which queries the API rather than the CDN. Old versions are pruned.
 */
export async function readState(): Promise<DraftState> {
  if (!hasBlob()) return (memory ??= emptyState());
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 1000 });
    if (!blobs.length) return emptyState();
    const newest = blobs.reduce((a, b) => (versionOf(b.pathname) > versionOf(a.pathname) ? b : a));
    const res = await fetch(newest.url, { cache: "no-store" });
    if (!res.ok) return emptyState();
    return (await res.json()) as DraftState;
  } catch {
    return emptyState();
  }
}

export async function writeState(state: DraftState): Promise<DraftState> {
  const next = { ...state, v: state.v + 1, updatedAt: new Date().toISOString() };
  if (!hasBlob()) {
    memory = next;
    return next;
  }
  await put(pathFor(next.v), JSON.stringify(next), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
  // Prune superseded versions so the store doesn't grow without bound.
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 1000 });
    const stale = blobs.filter((b) => versionOf(b.pathname) < next.v - 2).map((b) => b.url);
    if (stale.length) await del(stale);
  } catch {
    /* pruning is best-effort */
  }
  return next;
}
