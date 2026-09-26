"use client";

import Link from "next/link";

export default function FPFFTopic04() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 04
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Fire Prevention
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Basic precautions and safe practices for preventing fire
            on board ships, particularly in the engine room.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Introduction
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fire is a cause of accidents and loss of life on board a
            ship. Everyone on board should remain alert and take
            precautions to prevent a fire from starting.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Before carrying out any job, consideration should be given
            to whether the work could cause a fire and how a fire would
            be dealt with if one occurred.
          </p>
        </section>

        {/* GOLDEN RULE */}
        <section className="rounded-2xl bg-red-900 p-6 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Fire Prevention Principle
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Always Think About Fire Safety
          </h2>

          <p className="mt-3 text-red-100">
            Fire prevention requires continuous awareness while
            carrying out work on board.
          </p>
        </section>

        {/* ENGINE ROOM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔥 Fire Risk in the Engine Room
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Heat, oil and gas are present in the engine room.
            Therefore, the handout identifies the engine room as an
            area with a greater risk of fire.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-orange-50 p-5 text-center">
              <div className="text-3xl">🔥</div>
              <p className="mt-2 font-bold text-orange-900">
                Heat
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-5 text-center">
              <div className="text-3xl">🛢️</div>
              <p className="mt-2 font-bold text-amber-900">
                Oil
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <div className="text-3xl">💨</div>
              <p className="mt-2 font-bold text-blue-900">
                Gas
              </p>
            </div>

          </div>
        </section>

        {/* CLEAN ENGINE ROOM */}
        <section className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            1. Keep the Engine Room Clean
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The engine room should always be kept clean. Leaking pipes
            and oil collected in trays can create a fire hazard.
          </p>
        </section>

        {/* OILY WASTE */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-orange-900">
            2. Oily Cotton Waste & Rags
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Oily cotton waste and oily rags should be stored in
            <strong> closed boxes</strong>.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The handout states that they should be disposed of through
            the ship&apos;s incinerator at the end of the day.
          </p>
        </section>

        {/* FLAMMABLE MATERIALS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            3. Keep Combustible Materials Away from Heat
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The following materials should not be kept near boilers or
            other hot locations:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["🎨", "Paint"],
              ["🛢️", "Oil"],
              ["⛽", "Diesel"],
              ["🪵", "Wooden Articles"],
            ].map(([icon, item]) => (
              <div
                key={item}
                className="rounded-xl bg-red-50 p-4 text-center"
              >
                <div className="text-2xl">{icon}</div>
                <p className="mt-2 font-semibold text-red-900">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOTH */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            ⚠️ Cleaning Cloths & Hot Pipes
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Cleaning cloths should not be left on hot pipes or steam
            pipes because the heat can create a fire hazard.
          </p>
        </section>

        {/* LAGGING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            4. Steam & Exhaust Pipe Lagging
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Steam pipes and exhaust pipes should be properly
            <strong> lagged</strong>.
          </p>

          <div className="mt-4 rounded-xl bg-blue-50 p-4 text-slate-700">
            Proper lagging helps keep hot surfaces covered and reduces
            exposure to high-temperature surfaces.
          </div>
        </section>

        {/* LEAK */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            5. Report Pipe Leakage
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            If a leak is observed in any pipe, it should be
            <strong> immediately reported to the officer on duty.</strong>
          </p>

          <div className="mt-5 rounded-xl bg-white p-4">
            <p className="font-bold text-red-800">
              Oil Leak + Hot Pipe / Hot Surface = Serious Fire Hazard
            </p>
          </div>

          <p className="mt-4 leading-7 text-slate-700">
            Oil falling onto a hot pipe or hot surface may catch fire.
          </p>
        </section>

        {/* BILGE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            6. Keep Bilges Free from Oil
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Oil should not be permitted to accumulate in the
            <strong> bilge</strong>.
          </p>

          <div className="mt-4 rounded-xl bg-amber-50 p-4 font-semibold text-amber-900">
            Good housekeeping is an important part of engine-room fire
            prevention.
          </div>
        </section>

        {/* SOUNDING PIPE */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            7. Sounding Pipes
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Sounding pipes should not be left open.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Oil may spill from an open sounding pipe and could reach a
            hot plate or hot pipe, creating a risk of fire.
          </p>
        </section>

        {/* FIRE PREVENTION CHECKLIST */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Engine Room Fire Prevention Checklist
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Keep the engine room clean.",
              "Do not allow oil to collect in trays.",
              "Store oily cotton waste and rags in closed boxes.",
              "Keep paint, oil, diesel and wooden articles away from hot places.",
              "Do not leave cleaning cloths on hot or steam pipes.",
              "Keep steam and exhaust pipes properly lagged.",
              "Immediately report pipe leakage.",
              "Do not allow oil to accumulate in bilges.",
              "Do not leave sounding pipes open.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
              >
                <span className="font-bold text-green-400">✓</span>
                <p className="text-slate-100">{item}</p>
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
              Keep engine room clean • Control oil leakage • Store oily
              waste safely • Keep combustible materials away from hot
              areas • Keep hot pipes properly lagged • Report leaks •
              Keep bilges free from oil • Never leave sounding pipes open.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-03"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Flammability
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-05"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Spread of Fire →
          </Link>

        </div>

      </div>
    </main>
  );
}