"use client";

import Link from "next/link";

export default function FPFFTopic08() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 08
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Fire Hazards
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Common fire hazards found in accommodation spaces, cargo
            holds, engine rooms and galleys on board ships.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            What is a Fire Hazard?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Different spaces on board contain different materials,
            equipment and sources of heat that can create a fire
            hazard.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Crew members should recognize these hazards and remain
            alert so that unsafe conditions can be identified before a
            fire occurs.
          </p>
        </section>

        {/* FOUR AREAS */}
        <section className="grid gap-4 md:grid-cols-4">

          {[
            ["🏠", "Accommodation"],
            ["📦", "Cargo Holds"],
            ["⚙️", "Engine Room"],
            ["🍳", "Galley"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-5 text-center shadow-sm"
            >
              <div className="text-3xl">{icon}</div>

              <p className="mt-3 font-bold text-red-900">
                {title}
              </p>
            </div>
          ))}

        </section>

        {/* ACCOMMODATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
              🏠
            </div>

            <div>
              <p className="text-sm font-bold text-red-600">
                FIRE HAZARDS IN
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Accommodation
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
              <h3 className="font-bold text-orange-900">
                Combustible Materials
              </h3>

              <p className="mt-2 text-slate-700">
                Paneling, paper, clothing and furniture.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">
                Smoking & Open Flame
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Cigarettes, bidis, cigars and lighting of agarbattis
                and dhoop bhattis are listed as potential fire hazards.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-5">
              <h3 className="font-bold text-yellow-900">
                Electrical Equipment
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Electrical wiring and overheating of electrical
                equipment may create a fire hazard.
              </p>
            </div>

          </div>
        </section>

        {/* ELECTRICAL ITEMS */}
        <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-xl font-bold text-yellow-900">
            ⚡ Electrical Equipment Mentioned in the Handout
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

            {[
              "Washing Machine",
              "Television",
              "Music System",
              "Refrigerator",
              "Lighting Bulbs / Tubes",
              "Fans",
              "Geyser",
              "Hot Plate",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700"
              >
                ⚡ {item}
              </div>
            ))}

          </div>
        </section>

        {/* CARGO HOLD */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
              📦
            </div>

            <div>
              <p className="text-sm font-bold text-amber-700">
                FIRE HAZARDS IN
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Cargo Holds
              </h2>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            The handout identifies the following hazards in cargo
            holds:
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">

            {[
              "Spontaneous combustion",
              "Oxidation of organic materials",
              "Chemical reactions",
              "Carriage of dangerous cargo",
              "Cargo which reacts with water",
              "Cigarette smoking",
              "Electrical wiring in holds",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-amber-50 p-4"
              >
                <span className="font-bold text-red-600">⚠</span>

                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ENGINE ROOM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              ⚙️
            </div>

            <div>
              <p className="text-sm font-bold text-orange-700">
                FIRE HAZARDS IN
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Engine Room
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">

            {/* COMBUSTIBLE LIQUIDS */}
            <div className="rounded-xl bg-red-50 p-5">
              <h3 className="text-lg font-bold text-red-900">
                🛢️ Combustible Liquids
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Diesel Oil",
                  "Heavy Oil",
                  "Lubricating Oil",
                  "Dirty Oil",
                  "Sludge",
                  "Waste Oil",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* LEAKS */}
            <div className="rounded-xl bg-orange-50 p-5">
              <h3 className="text-lg font-bold text-orange-900">
                Oil & Fuel Leakage
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Fuel and oil leaks from pipes and joints, together with
                oily engine-room platforms and bilges, create a fire
                hazard.
              </p>
            </div>

            {/* OIL SOAKED */}
            <div className="rounded-xl bg-amber-50 p-5">
              <h3 className="text-lg font-bold text-amber-900">
                Oil-Soaked Insulation
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Oily rags and fuel or oil leaking onto main-engine,
                diesel-generator lagging and exhaust pipes are fire
                hazards.
              </p>
            </div>

            {/* HOT SURFACES */}
            <div className="rounded-xl bg-red-50 p-5">
              <h3 className="text-lg font-bold text-red-900">
                🔥 Hot Surfaces
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Overheating of machinery or failure of lubrication to
                bearings and other moving parts may produce dangerous
                hot surfaces.
              </p>
            </div>

            {/* HOT WORK */}
            <div className="rounded-xl bg-slate-100 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                ⚠️ Hot Work & Electrical Hazards
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Welding, cutting, poor electrical wiring and damaged
                electrical insulation are listed as engine-room fire
                hazards.
              </p>
            </div>

          </div>
        </section>

        {/* ENGINE ROOM FORMULA */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Engine Room – Remember
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-bold">

            <span className="rounded-lg bg-white/10 px-4 py-3">
              Oil / Fuel
            </span>

            <span>+</span>

            <span className="rounded-lg bg-white/10 px-4 py-3">
              Hot Surface
            </span>

            <span>+</span>

            <span className="rounded-lg bg-white/10 px-4 py-3">
              Ignition Source
            </span>

            <span>→</span>

            <span className="rounded-lg bg-red-600 px-4 py-3">
              🔥 Fire Hazard
            </span>

          </div>
        </section>

        {/* GALLEY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
              🍳
            </div>

            <div>
              <p className="text-sm font-bold text-yellow-700">
                FIRE HAZARDS IN
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Galley
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-orange-50 p-5">
              <h3 className="font-bold text-orange-900">
                🛢️ Combustible Liquids
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Cooking oils and combustible dry foods.
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-5">
              <h3 className="font-bold text-red-900">
                🔥 Hot Surfaces
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exhaust-space fire due to accumulation of oil and
                carbon, and hot plates left ON when not required.
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-5">
              <h3 className="font-bold text-yellow-900">
                ⚡ Electrical Equipment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Poor electrical wiring, overheating of electrical
                equipment, hot plates and unattended heating pans or
                oils.
              </p>
            </div>

          </div>
        </section>

        {/* HAZARD SUMMARY */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Fire Hazard Summary
          </h2>

          <div className="mt-5 space-y-3">

            <div className="rounded-xl bg-white/10 p-4">
              <strong>🏠 Accommodation:</strong>
              <span className="text-slate-300">
                {" "}Combustible materials, smoking and electrical equipment.
              </span>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>📦 Cargo Holds:</strong>
              <span className="text-slate-300">
                {" "}Spontaneous combustion, chemical reactions,
                dangerous cargo and electrical hazards.
              </span>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>⚙️ Engine Room:</strong>
              <span className="text-slate-300">
                {" "}Fuel/oil, leaks, oily insulation, hot surfaces,
                hot work and electrical hazards.
              </span>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>🍳 Galley:</strong>
              <span className="text-slate-300">
                {" "}Cooking oil, dry food, hot surfaces and electrical
                equipment.
              </span>
            </div>

          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Accommodation → combustible material, smoking and
              electrical equipment • Cargo hold → spontaneous
              combustion, dangerous cargo and chemical reaction •
              Engine room → oil, leakage, hot surfaces, hot work and
              electrical hazards • Galley → cooking oil, hot surfaces
              and electrical equipment.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-07"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Patrol System
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-09"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Shipboard Fire Fighting →
          </Link>

        </div>

      </div>
    </main>
  );
}