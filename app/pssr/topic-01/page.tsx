"use client";

import Link from "next/link";

export default function PSSRTopic01() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 01
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Introduction & Ship Familiarization
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Introduction to PSSR, importance of STCW, ship
            familiarization, types of ships and basic ship terminology.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* IMPORTANCE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📘 Importance of the Course
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The International Convention on Standards of Training,
            Certification and Watchkeeping for Seafarers (STCW), 1978
            sets qualification standards for masters, officers and
            watch personnel on seagoing merchant ships.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-cyan-50 p-5 text-center">
              <p className="text-sm font-semibold text-cyan-700">
                STCW Adopted
              </p>
              <p className="mt-2 text-3xl font-bold text-cyan-900">
                1978
              </p>
            </div>

            <div className="rounded-xl bg-cyan-50 p-5 text-center">
              <p className="text-sm font-semibold text-cyan-700">
                Entered into Force
              </p>
              <p className="mt-2 text-3xl font-bold text-cyan-900">
                1984
              </p>
            </div>

            <div className="rounded-xl bg-cyan-50 p-5 text-center">
              <p className="text-sm font-semibold text-cyan-700">
                Significant Amendment
              </p>
              <p className="mt-2 text-3xl font-bold text-cyan-900">
                1995
              </p>
            </div>
          </div>
        </section>

        {/* IMO MODEL COURSE */}
        <section className="rounded-2xl border-l-4 border-cyan-600 bg-cyan-50 p-6">
          <h2 className="text-xl font-bold text-cyan-900">
            IMO Model Course 1.21
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Following the Manila amendments to STCW 2010, the handout
            states that IMO Model Course 1.21 – Personal Safety and
            Social Responsibilities was revised with the 2016 Edition.
          </p>
        </section>

        {/* SHIP FAMILIARIZATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚢 Ship Familiarization
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Ships are classified into various types on the basis of
            purpose, size and type of cargo.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The economic factor is of prime importance in designing a
            merchant ship. The handout explains that ship construction
            depends not only on current economic necessities but also
            on future adaptability.
          </p>
        </section>

        {/* DESIGN */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            Preliminary Design of a Vessel
          </h2>

          <p className="mt-3 text-slate-700">
            The following information can be obtained from the
            preliminary design of a vessel:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Dimensions",
              "Displacement",
              "Stability",
              "Propulsive characteristics and hull form",
              "Preliminary general arrangement",
              "Principal structural details",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-900 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-yellow-50 p-4 text-yellow-900">
            <strong>Remember:</strong> The type of ship plays an
            important role in deciding these parameters.
          </div>
        </section>

        {/* SHIP TYPES */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            ⚓ Types of Ships
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Container Ships",
              "Bulk Carrier",
              "Tanker Ships",
              "Passenger Ships",
              "Naval Ships",
              "Offshore Ships",
              "Special Purpose Ships",
              "RO-RO Ship",
              "Refer Ship",
              "General Cargo Ship",
            ].map((ship, index) => (
              <div
                key={ship}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700 shadow-sm"
              >
                <span className="mr-2 font-bold text-blue-800">
                  {index + 1}.
                </span>
                {ship}
              </div>
            ))}
          </div>
        </section>

        {/* MAIN PARTS */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🛳️ Three Main Parts of a Ship
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            The handout describes a ship as being like a floating city
            having several different parts. It identifies three main
            parts of a ship:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">🚢</div>
              <p className="mt-2 text-xl font-bold">Hull</p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">⚙️</div>
              <p className="mt-2 text-xl font-bold">
                Engine Room
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">🧭</div>
              <p className="mt-2 text-xl font-bold">
                Navigation Bridge
              </p>
            </div>
          </div>
        </section>

        {/* VISIBLE PARTS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👀 Visible Parts of a Ship
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Rudder",
              "Anchor",
              "Bow",
              "Keel",
              "Accommodation",
              "Propeller",
              "Mast",
              "Bridge",
              "Hatch Covers",
              "Bow Thrusters",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-cyan-50 px-4 py-2 font-semibold text-cyan-900"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* INVISIBLE PARTS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🔧 Invisible / Structural Parts
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Bulkheads",
              "Frames",
              "Cargo Holds",
              "Hopper Tank",
              "Double Bottom",
              "Girders",
              "Cofferdams",
              "Side Shell",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* TERMINOLOGY */}
        <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🧭 Basic Ship Terminology
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5">
              <p className="text-lg font-bold text-orange-900">
                Bow
              </p>
              <p className="mt-1 text-slate-700">
                Most forward part of the ship.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-lg font-bold text-orange-900">
                Port
              </p>
              <p className="mt-1 text-slate-700">
                Left-hand side of the ship.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-lg font-bold text-orange-900">
                Starboard
              </p>
              <p className="mt-1 text-slate-700">
                Right-hand side of the ship.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-lg font-bold text-orange-900">
                Forward
              </p>
              <p className="mt-1 text-slate-700">
                Front side of the ship.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 sm:col-span-2">
              <p className="text-lg font-bold text-orange-900">
                Astern
              </p>
              <p className="mt-1 text-slate-700">
                Back side, as described in the handout.
              </p>
            </div>
          </div>
        </section>

        {/* EXAM REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • <strong>STCW:</strong> Standards of Training,
              Certification and Watchkeeping for Seafarers.
            </p>

            <p>
              • STCW adopted: <strong>1978</strong>.
            </p>

            <p>
              • Entered into force: <strong>1984</strong>.
            </p>

            <p>
              • Significantly amended: <strong>1995</strong>.
            </p>

            <p>
              • PSSR: <strong>IMO Model Course 1.21</strong>.
            </p>

            <p>
              • Ships are classified by purpose, size and type of
              cargo.
            </p>

            <p>
              • Three main parts: <strong>Hull, Engine Room and
              Navigation Bridge</strong>.
            </p>

            <p>
              • <strong>Port = Left</strong>.
            </p>

            <p>
              • <strong>Starboard = Right</strong>.
            </p>

            <p>
              • <strong>Bow = Most forward part</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-02"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Emergency Procedures →
          </Link>
        </div>

      </div>
    </main>
  );
}