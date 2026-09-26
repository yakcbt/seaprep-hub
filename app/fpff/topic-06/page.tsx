"use client";

import Link from "next/link";

export default function FPFFTopic06() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 06
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Need for Constant Vigilance
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Maintaining continuous fire-safety awareness and emergency
            preparedness on board ship.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* MAIN PRINCIPLE */}
        <section className="rounded-2xl bg-red-900 p-7 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Basic Principle
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Prevention is Always Better than Cure
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-red-100">
            Fire prevention depends on remaining alert and identifying
            potential fire hazards before they develop into an incident.
          </p>
        </section>

        {/* CONSTANT VIGILANCE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            👀 Constant Vigilance
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Constant vigilance should be maintained on board the vessel
            at all times regarding the safety measures necessary for
            the safety of:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <div className="text-3xl">🚢</div>
              <p className="mt-2 font-bold text-blue-900">
                Vessel
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5 text-center">
              <div className="text-3xl">👥</div>
              <p className="mt-2 font-bold text-green-900">
                Crew
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-5 text-center">
              <div className="text-3xl">📦</div>
              <p className="mt-2 font-bold text-amber-900">
                Cargo
              </p>
            </div>

          </div>

          <p className="mt-5 leading-7 text-slate-700">
            By remaining vigilant, the crew tries to identify and
            eliminate risks involving fire hazards and other potential
            fire threats.
          </p>
        </section>

        {/* SIMPLE FLOW */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            Purpose of Vigilance
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-bold">
            <span className="rounded-xl bg-white px-4 py-3 text-slate-700">
              Observe
            </span>

            <span>→</span>

            <span className="rounded-xl bg-white px-4 py-3 text-slate-700">
              Identify Risk
            </span>

            <span>→</span>

            <span className="rounded-xl bg-white px-4 py-3 text-slate-700">
              Eliminate Hazard
            </span>

            <span>→</span>

            <span className="rounded-xl bg-green-100 px-4 py-3 text-green-900">
              Prevent Fire
            </span>
          </div>
        </section>

        {/* EMERGENCY PREPAREDNESS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚨 Emergency Preparedness
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The ship&apos;s crew should be properly trained and made
            aware of the different emergencies that may occur,
            especially fire emergencies on board.
          </p>

          <div className="mt-5 rounded-xl bg-orange-50 p-5">
            <h3 className="font-bold text-orange-900">
              Safety Drills
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Safety drills should be conducted at regular intervals
              and after crew changes so that crew members remain
              familiar with emergency procedures.
            </p>
          </div>
        </section>

        {/* 25 PERCENT RULE */}
        <section className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            ⚠️ Crew Change – Important Point
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The FPFF handout states that if
            <strong> 25% of the ship&apos;s crew is changed at the same port</strong>,
            a safety drill should be conducted on board before sailing
            from that port.
          </p>

          <p className="mt-3 font-semibold text-slate-800">
            Purpose: To familiarize the new crew members with the ship
            and its emergency procedures.
          </p>
        </section>

        {/* FIRE PATROL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔍 Fire Patrol
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The importance of fire patrol should not be overlooked.
            Fire-patrol duties should be assigned to designated
            personnel.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            These designated persons should carry out patrol duties in
            different areas to identify and prevent potential fire
            hazards.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="rounded-xl bg-red-50 p-4 text-center">
              <p className="font-bold text-red-900">
                Cargo Spaces
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-4 text-center">
              <p className="font-bold text-red-900">
                Store Spaces
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-4 text-center">
              <p className="font-bold text-red-900">
                Public Places
              </p>
            </div>

          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Regular monitoring of these spaces helps prevent potential
            hazards from developing into a fire incident.
          </p>
        </section>

        {/* WATCHKEEPING */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            👁️ Proper Watchkeeping
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Watchkeeping is another important aspect of fire safety,
            whether the vessel is:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-white p-5 text-center">
              <div className="text-3xl">🌊</div>
              <p className="mt-2 font-bold text-blue-900">
                At Sea
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 text-center">
              <div className="text-3xl">⚓</div>
              <p className="mt-2 font-bold text-blue-900">
                In Port
              </p>
            </div>

          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Proper watchkeeping duties should be maintained at all
            times on board at regular intervals.
          </p>
        </section>

        {/* MAINTENANCE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🧯 Maintenance of Fire-Fighting Equipment
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fire-fighting equipment should be maintained so that it is
            always in a state of readiness.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">

            {[
              "Planned inspection",
              "Regular servicing",
              "Refilling when required",
              "Repair when required",
              "Regular testing",
              "Crew training in equipment operation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-green-600">✓</span>
                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* TRAINING */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Training & Equipment Readiness
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            The correct operating procedures for fire-fighting
            equipment should be discussed on board.
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            Crew members should receive the required training during
            drills and training sessions so that they know how to use
            the equipment when an emergency occurs.
          </p>
        </section>

        {/* FIVE POINT SUMMARY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            5 Key Points of Constant Vigilance
          </h2>

          <div className="mt-5 space-y-3">

            {[
              ["01", "Constant Vigilance"],
              ["02", "Emergency Preparedness"],
              ["03", "Fire Patrol"],
              ["04", "Proper Watchkeeping"],
              ["05", "Maintenance of Equipment"],
            ].map(([no, title]) => (
              <div
                key={no}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 font-bold text-red-900">
                  {no}
                </div>

                <p className="font-bold text-slate-800">
                  {title}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Prevention is better than cure • Maintain constant
              vigilance • Conduct regular safety drills • Fire patrol
              must be carried out by designated personnel • Maintain
              proper watchkeeping at sea and in port • Keep
              fire-fighting equipment ready, inspected and tested.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-05"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Spread of Fire
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-07"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Patrol System →
          </Link>

        </div>

      </div>
    </main>
  );
}