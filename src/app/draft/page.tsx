"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { s51Cast, castById } from "@/data/s51Cast";
import { pickSlots, onTheClock, roundsFor, type DraftState } from "@/lib/draft";

const POLL_MS = 3000;

export default function DraftPage() {
  const [state, setState] = useState<DraftState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const editing = useRef(false);

  const load = useCallback(async () => {
    if (editing.current) return;
    const res = await fetch("/api/draft", { cache: "no-store" });
    if (res.ok) {
      const s: DraftState = await res.json();
      setState((prev) => (prev && prev.v === s.v ? prev : s));
      setNames((n) => (n.length ? n : s.drafters));
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, POLL_MS);
    return () => clearInterval(id);
  }, [load]);

  async function send(action: string, extra: Record<string, unknown> = {}) {
    if (!state) return;
    setBusy(true);
    setError(null);
    const res = await fetch("/api/draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, v: state.v, ...extra }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Something went wrong.");
      if (data.state) setState(data.state);
    } else {
      setState(data);
      setNames(data.drafters);
    }
    setBusy(false);
  }

  if (!state) {
    return <p className="text-gray-500 py-16 text-center">Loading draft…</p>;
  }

  const slots = pickSlots(state.drafters);
  const rounds = roundsFor(state.drafters.length);
  const clock = onTheClock(state);
  const takenBy = new Map(state.picks.map((p) => [p.castawayId, p.drafter]));
  const started = state.picks.length > 0;
  const remaining = s51Cast.length - state.picks.length;

  return (
    <div className="pb-20">
      <div className="pt-4 mb-6">
        <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-2">
          Survivor 51
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Draft Board
        </h1>
        <p className="text-gray-500 mt-2">
          Snake order · {rounds} rounds · {slots.length} picks · {remaining} castaways left
        </p>
      </div>

      {/* on the clock */}
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {clock ? (
          <>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1">On the clock</p>
              <p className="text-xl font-bold text-[#F5C518]">{clock.drafter}</p>
            </div>
            <p className="text-sm text-gray-500">
              Round {clock.round} · Pick {clock.pickNo} of {slots.length}
            </p>
          </>
        ) : (
          <p className="text-xl font-bold text-white">Draft complete</p>
        )}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => send("undo")}
            disabled={busy || !started}
            className="text-xs uppercase tracking-widest px-3 py-2 rounded-md border border-white/[0.12] text-gray-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Undo
          </button>
          <button
            onClick={() => { if (confirm("Clear every pick and start over?")) send("reset"); }}
            disabled={busy || !started}
            className="text-xs uppercase tracking-widest px-3 py-2 rounded-md border border-white/[0.12] text-gray-400 hover:text-[#E8590C] hover:border-[#E8590C]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {error && (
        <p className="mb-5 rounded-lg border border-[#E8590C]/40 bg-[#E8590C]/10 px-4 py-3 text-sm text-[#F5C518]">
          {error}
        </p>
      )}

      {/* drafter names — editable until the first pick */}
      {!started && (
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 mb-8">
          <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-3">
            Draft order — first to last. Editable until the first pick.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {names.map((n, i) => (
              <input
                key={i}
                value={n}
                onFocus={() => (editing.current = true)}
                onBlur={() => (editing.current = false)}
                onChange={(e) => setNames(names.map((x, j) => (j === i ? e.target.value : x)))}
                className="rounded-md bg-black/30 border border-white/[0.12] px-3 py-2 text-sm text-white focus:border-[#F5C518] focus:outline-none"
                placeholder={`Drafter ${i + 1}`}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => {
              const shuffled = [...names];
              for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
              }
              setNames(shuffled);
            }}
            disabled={busy}
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-md border border-white/[0.12] text-gray-400 hover:text-white hover:border-white/30 disabled:opacity-40 transition-colors"
          >
            Randomise order
          </button>
          <button
            onClick={() => { editing.current = false; send("setDrafters", { drafters: names }); }}
            disabled={busy}
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-md bg-[#F5C518] text-black font-semibold hover:bg-[#ffd633] disabled:opacity-40 transition-colors"
          >
            Save order
          </button>
          </div>
        </div>
      )}

      {/* the board */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {s51Cast.map((c) => {
          const owner = takenBy.get(c.id);
          return (
            <div
              key={c.id}
              className={`rounded-xl overflow-hidden border transition-all ${
                owner
                  ? "border-white/[0.06] bg-white/[0.02] opacity-50"
                  : "border-white/[0.10] bg-white/[0.04]"
              }`}
            >
              <div className="relative aspect-[2/3]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 22vw"
                  className={`object-cover object-top transition-all ${owner ? "grayscale" : ""}`}
                />
              </div>
              <div className="p-3">
                <h2 className={`font-bold leading-tight ${owner ? "text-gray-500 line-through" : "text-white"}`}>
                  {c.name}
                </h2>
                <p className="text-[11px] text-gray-500 mt-1">{c.hometown}</p>
                {owner ? (
                  <p className="mt-2.5 text-[11px] uppercase tracking-widest text-[#F5C518]/70">
                    {owner}
                  </p>
                ) : (
                  <button
                    onClick={() => send("pick", { castawayId: c.id })}
                    disabled={busy || !clock}
                    className="mt-2.5 w-full text-[11px] uppercase tracking-widest py-2 rounded-md bg-[#F5C518] text-black font-semibold hover:bg-[#ffd633] disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                  >
                    Draft
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* rosters */}
      <h2 className="text-xl font-bold text-white mb-4">Teams</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-12">
        {state.drafters.map((d) => {
          const roster = state.picks.filter((p) => p.drafter === d);
          return (
            <div key={d} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="font-semibold text-white mb-3">{d}</p>
              {roster.length === 0 ? (
                <p className="text-xs text-gray-600">No picks yet</p>
              ) : (
                <ol className="space-y-1.5">
                  {roster.map((p) => (
                    <li key={p.castawayId} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-gray-600 tabular-nums">{p.round}.</span>
                      {castById[p.castawayId]?.name}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          );
        })}
      </div>

      {/* ledger */}
      <h2 className="text-xl font-bold text-white mb-4">Pick ledger</h2>
      {state.picks.length === 0 ? (
        <p className="text-sm text-gray-600">Nothing drafted yet.</p>
      ) : (
        <div className="rounded-xl border border-white/[0.08] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-[11px] uppercase tracking-widest text-gray-500">
              <tr>
                <th className="text-left font-medium px-4 py-2.5">#</th>
                <th className="text-left font-medium px-4 py-2.5">Rd</th>
                <th className="text-left font-medium px-4 py-2.5">Drafter</th>
                <th className="text-left font-medium px-4 py-2.5">Castaway</th>
              </tr>
            </thead>
            <tbody>
              {state.picks.map((p) => (
                <tr key={p.pickNo} className="border-t border-white/[0.06]">
                  <td className="px-4 py-2.5 text-gray-600 tabular-nums">{p.pickNo}</td>
                  <td className="px-4 py-2.5 text-gray-500 tabular-nums">{p.round}</td>
                  <td className="px-4 py-2.5 text-gray-300">{p.drafter}</td>
                  <td className="px-4 py-2.5 text-white font-medium">{castById[p.castawayId]?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
