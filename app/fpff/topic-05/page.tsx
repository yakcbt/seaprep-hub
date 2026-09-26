"use client";

import Link from "next/link";

export default function FPFFTopic05() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 05
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Spread of Fire
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Understanding how heat and fire can spread by conduction,
            radiation and convection, together with important welding
            precautions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            How Does Fire Spread?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The FPFF handout explains that fire can spread through the
            transfer of heat in three different ways:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Conduction", "Heat transfer through a substance"],
              ["02", "Radiation", "Heat transfer by electromagnetic waves"],
              ["03", "Convection", "Heat transfer by movement of fluid"],
            ].map(([no, title, desc]) => (
              <div
                key={no}
                className="rounded-2xl border border-red-100 bg-red-50 p-5"
              >
                <span className="text-sm font-bold text-red-600">
                  {no}
                </span>

                <h3 className="mt-2 text-xl font-bold text-red-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONDUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🔥
            </div>

            <div>
              <p className="text-sm font-bold text-orange-600">
                METHOD 01
              </p>
              <h2 className="text-2xl font-bold text-red-900">
                Conduction
              </h2>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Conduction is the transfer of heat within a substance from
            a region of higher temperature to a region of lower
            temperature by direct contact between particles.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Heat energy is passed from one molecule to another due to
            vibration, without actual movement of the molecules from
            one place to another.
          </p>

          <div className="mt-5 rounded-xl bg-orange-50 p-5">
            <p className="font-bold text-orange-900">
              Common examples of materials
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["Iron", "Copper", "Brass"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONDUCTION EXAMPLE */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-orange-900">
            Remember: Conduction
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-center font-bold">
            <span className="rounded-lg bg-red-600 px-4 py-2 text-white">
              Hot Area
            </span>

            <span className="text-xl">→</span>

            <span className="rounded-lg bg-orange-200 px-4 py-2 text-orange-900">
              Solid Material
            </span>

            <span className="text-xl">→</span>

            <span className="rounded-lg bg-yellow-100 px-4 py-2 text-yellow-900">
              Cooler Area
            </span>
          </div>
        </section>

        {/* RADIATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
              ☀️
            </div>

            <div>
              <p className="text-sm font-bold text-yellow-700">
                METHOD 02
              </p>
              <h2 className="text-2xl font-bold text-red-900">
                Radiation
              </h2>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Radiation is the transfer of heat by temperature-excited
            electromagnetic waves.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Thermal energy is converted into radiant energy. Heat can
            travel in a straight line through empty space without the
            use of a material medium.
          </p>

          <div className="mt-5 rounded-xl bg-yellow-50 p-5">
            <p className="font-bold text-yellow-900">
              Important Point
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              The handout states that radiant energy travels at
              approximately 3 × 10⁸ metres per second.
            </p>
          </div>
        </section>

        {/* RADIATION VISUAL */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Radiation Concept
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="rounded-xl bg-red-600 p-4">
              <div className="text-3xl">🔥</div>
              <p className="mt-2 font-bold">Fire</p>
            </div>

            <div className="text-2xl">
              ))) → ))) →
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">Nearby Material</p>
              <p className="mt-1 text-sm text-slate-300">
                Receives radiant heat
              </p>
            </div>
          </div>
        </section>

        {/* CONVECTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              💨
            </div>

            <div>
              <p className="text-sm font-bold text-blue-600">
                METHOD 03
              </p>
              <h2 className="text-2xl font-bold text-red-900">
                Convection
              </h2>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Convection is the transfer of heat by the actual physical
            movement of fluid molecules.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            When a liquid or gas is heated, it expands, becomes less
            dense and rises. Colder liquid or gas then moves in to take
            its place, setting up circulation.
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-5">
            <p className="font-bold text-blue-900">
              Convection Process
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 font-semibold text-slate-700">
              <span>Heat</span>
              <span>→</span>
              <span>Liquid / Gas warms</span>
              <span>→</span>
              <span>Expands</span>
              <span>→</span>
              <span>Rises</span>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Three Methods at a Glance
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Method</th>
                  <th className="p-3">How Heat Transfers</th>
                  <th className="p-3">Main Medium</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-3 font-bold">Conduction</td>
                  <td className="p-3">
                    Direct transfer through particles
                  </td>
                  <td className="p-3">
                    Mainly solids
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">Radiation</td>
                  <td className="p-3">
                    Electromagnetic waves
                  </td>
                  <td className="p-3">
                    No material medium required
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold">Convection</td>
                  <td className="p-3">
                    Physical movement of molecules
                  </td>
                  <td className="p-3">
                    Liquids and gases
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WELDING */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Welding & Gas Cutting Precautions
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The FPFF handout highlights special precautions during
            welding and gas-cutting work because these operations can
            provide a strong source of heat and ignition.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Special care should be taken during welding or gas cutting.",
              "Do not carry out welding or cutting on oily or greasy plates.",
              "Check the other side of the bulkhead before starting work.",
              "Check the deck below for material that could catch fire.",
              "Insulation, garbage and other combustible material may be present nearby.",
              "Fire may break out even after the welding work has finished.",
              "Fire extinguishers and fire hoses must be kept ready where welding or cutting is being carried out.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4"
              >
                <span className="font-bold text-red-600">⚠</span>
                <p className="leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPORTANT WARNING */}
        <section className="rounded-2xl bg-amber-100 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            Important: Fire After Welding
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout specifically warns that there is a risk of a
            fire breaking out even after welding has finished, including
            up to about <strong>two hours later</strong>.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <div className="mt-4 space-y-2 text-slate-700">
            <p>
              <strong>Conduction</strong> → Heat transfer mainly through
              solids.
            </p>

            <p>
              <strong>Radiation</strong> → Heat transfer by
              electromagnetic waves.
            </p>

            <p>
              <strong>Convection</strong> → Heat transfer by movement of
              liquids or gases.
            </p>

            <p>
              <strong>Welding</strong> → Check surrounding areas and keep
              fire-fighting equipment ready.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/fpff/topic-04"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fire Prevention
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-06"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Constant Vigilance →
          </Link>
        </div>

      </div>
    </main>
  );
}