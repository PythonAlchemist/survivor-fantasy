import { NextResponse } from "next/server";
import {
  readState, writeState, emptyState, onTheClock, pickSlots,
  DEFAULT_DRAFTERS, type DraftState,
} from "@/lib/draft";
import { castById } from "@/data/s51Cast";

export const dynamic = "force-dynamic";

export async function GET() {
  const state = await readState();
  return NextResponse.json(state, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.action !== "string") {
    return NextResponse.json({ error: "Missing action." }, { status: 400 });
  }

  const state = await readState();

  // Optimistic concurrency: a stale client gets the current board back, not a lost pick.
  if (typeof body.v === "number" && body.v !== state.v) {
    return NextResponse.json(
      { error: "Someone else just picked. Board refreshed.", state },
      { status: 409 },
    );
  }

  let next: DraftState;

  switch (body.action) {
    case "pick": {
      const id = String(body.castawayId ?? "");
      if (!castById[id]) return NextResponse.json({ error: "Unknown castaway." }, { status: 400 });
      if (state.picks.some((p) => p.castawayId === id)) {
        return NextResponse.json({ error: "Already drafted.", state }, { status: 409 });
      }
      const clock = onTheClock(state);
      if (!clock) return NextResponse.json({ error: "Draft complete.", state }, { status: 409 });
      next = {
        ...state,
        picks: [...state.picks, { castawayId: id, drafter: clock.drafter, round: clock.round, pickNo: clock.pickNo, at: new Date().toISOString() }],
      };
      break;
    }
    case "undo": {
      if (!state.picks.length) return NextResponse.json(state);
      next = { ...state, picks: state.picks.slice(0, -1) };
      break;
    }
    case "setDrafters": {
      const names = Array.isArray(body.drafters)
        ? body.drafters.map((n: unknown) => String(n).trim()).filter(Boolean)
        : [];
      if (names.length < 2 || names.length > 8) {
        return NextResponse.json({ error: "Need between 2 and 8 drafters." }, { status: 400 });
      }
      if (state.picks.length) {
        return NextResponse.json({ error: "Reset the draft before changing drafters." }, { status: 409 });
      }
      next = { ...state, drafters: names };
      break;
    }
    case "reset":
      next = emptyState(state.drafters.length ? state.drafters : DEFAULT_DRAFTERS);
      next.v = state.v;
      break;
    default:
      return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  }

  const saved = await writeState(next);
  return NextResponse.json(saved, { headers: { "Cache-Control": "no-store" } });
}

export async function HEAD() {
  const state = await readState();
  return new NextResponse(null, { headers: { "x-draft-version": String(state.v), "x-total-slots": String(pickSlots(state.drafters).length) } });
}
