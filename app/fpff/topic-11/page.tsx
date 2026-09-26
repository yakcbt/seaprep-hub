"use client";

import Link from "next/link";

export default function FPFFTopic11() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 11
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Classification of Fires
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Classification of fire and applicable extinguishing agents
            used for different types of fires.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* CLASSIFICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔥 Classification of Fire
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The FPFF handout classifies fires according to the type of
            material involved.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {[
              ["A", "Solid / Carbon Materials"],
              ["B", "Flammable Liquids"],
              ["C", "Gases"],
              ["D", "Metals"],
              ["E", "Electrical"],
            ].map(([letter, title]) => (
              <div
                key={letter}
                className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-900 text-2xl font-bold text-white">
                  {letter}
                </div>

                <p className="mt-3 font-bold text-red-900">
                  {title}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* CLASS A */}
        <section className="rounded-2xl border-l-4 border-green-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-green-800">
            Class A – Solid / Combustible Material Fires
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Class A fires normally involve solid materials of organic
            nature. Combustion occurs with the formation of glowing
            embers.
          </p>

          <h3 className="mt-5 font-bold text-slate-900">
            Examples
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Paper",
              "Grass",
              "Coal",
              "Trees",
              "Wood",
              "Furniture",
              "Bedding",
              "Clothing",
              "Cleaning Rags",
              "Canvas",
              "Rope",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-900"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <h3 className="font-bold text-blue-900">
              💧 Extinguishing Method
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Cooling with large quantities of water is important.
              Water in the form of jet or spray is described in the
              handout as the best method for these fires.
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Cooling should continue long enough to prevent
              re-ignition.
            </p>
          </div>
        </section>

        {/* CLASS B */}
        <section className="rounded-2xl border-l-4 border-yellow-500 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-yellow-800">
            Class B – Flammable Liquid Fires
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Petrol",
              "Fuel Oil",
              "Lubricating Oil",
              "Spirits",
              "Paints",
              "Chemicals",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-900"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-yellow-50 p-5">
            <h3 className="font-bold text-yellow-900">
              🫧 Foam – Smothering
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Foam is described as an efficient agent for fighting most
              liquid-fuel fires.
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Foam forms an unbroken smothering blanket over the
              burning liquid, limits the supply of air and reduces or
              stops the formation of flammable fuel vapour.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-orange-50 p-5">
            <h3 className="font-bold text-orange-900">
              Starvation
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Liquid-fuel fires may also be fought by starvation,
              meaning the fuel supply to the fire is stopped.
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Drain fuel from the burning oil tank.</p>
              <p>• Close the concerned fuel-supply valve.</p>
              <p>• Stop the fuel pump where applicable.</p>
            </div>
          </div>
        </section>

        {/* CLASS C */}
        <section className="rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Class C – Gas Fires
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Coal Gas",
              "Methane",
              "Chlorine Gas",
              "Ammonia",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            For gas or liquefied petroleum gas fires, the handout
            states that the gas flow should be stopped where possible.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="font-bold text-green-900">
                ✓ Stop Gas Flow
              </h3>
              <p className="mt-2 text-slate-700">
                Stop the flow of gas where possible.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">
                💧 Water Spray
              </h3>
              <p className="mt-2 text-slate-700">
                If gas flow cannot be stopped, water spray may be used
                to cool and control radiant heat.
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-xl bg-purple-50 p-5">
            <h3 className="font-bold text-purple-900">
              Dry Chemical Powder
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Dry chemical powder may be used where flames from small
              leaks need to be extinguished in order to reach and close
              the valve controlling the gas flow.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-bold text-red-900">
              ⚠️ Important
            </h3>

            <p className="mt-2 text-slate-700">
              The handout states that water jets should not be directed
              into an LPG fire and foam will not extinguish such fires.
            </p>
          </div>
        </section>

        {/* CLASS D */}
        <section className="rounded-2xl border-l-4 border-slate-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Class D – Metal Fires
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Copper",
              "Zinc",
              "Aluminium",
              "Iron",
              "Magnesium",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="mt-6 font-bold text-slate-900">
            Extinguishing Materials Listed in the Handout
          </h3>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              "Powdered Graphite",
              "Powdered Talc",
              "Soda Ash",
              "Limestone",
              "Dry Sand",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-100 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* ELECTRICAL */}
        <section className="rounded-2xl border-l-4 border-purple-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-purple-900">
            ⚡ Electrical Equipment Fires
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Examples in the handout include old wiring, electric
            motors, transformers and electrically operated equipment.
          </p>

          <div className="mt-5 rounded-xl bg-red-50 p-5">
            <h3 className="font-bold text-red-900">
              First Action – De-energize
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              The immediate action is to de-energize the equipment by
              switching off the electrical supply from the immediate
              switch, junction box or main switchboard.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-purple-50 p-5">
            <h3 className="font-bold text-purple-900">
              Non-Conducting Agents
            </h3>

            <p className="mt-2 text-slate-700">
              The handout lists:
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Carbon Dioxide (CO₂)",
                "Halon",
                "Dry Chemical Powder",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 font-semibold text-purple-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WATER */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            💧 Cooling – Water
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Water is described as an efficient, inexpensive and readily
            available cooling agent on board because of its heat
            absorbing qualities.
          </p>

          <div className="mt-5 space-y-3">

            <div className="rounded-xl bg-white p-4">
              ✓ Water jet is suitable for ordinary combustible
              materials.
            </div>

            <div className="rounded-xl bg-white p-4">
              ✓ Water spray and fog may be used against oil fires and
              as a screen between the firefighter and fire.
            </div>

            <div className="rounded-xl bg-red-100 p-4 font-semibold text-red-900">
              ✕ Do not direct water towards electrical equipment.
            </div>

            <div className="rounded-xl bg-red-100 p-4 font-semibold text-red-900">
              ✕ Water jet should not be used on burning oil, cooking
              oil or fat because it may spread the fire.
            </div>

          </div>
        </section>

        {/* FOAM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🫧 Smothering – Foam
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Foam consists of small bubbles and flows over the surface
            of a burning liquid to form a smothering blanket.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            It restricts oxygen supply, reduces fuel vapour formation
            and absorbs some heat.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">
                High Expansion Foam
              </h3>
              <p className="mt-2 text-slate-700">
                Handout: expansion ratio approximately 10:1 to 100:1.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="font-bold text-green-900">
                Low Expansion Foam
              </h3>
              <p className="mt-2 text-slate-700">
                Handout: expansion ratio approximately 5:1 to 15:1.
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-xl bg-red-50 p-4 font-semibold text-red-900">
            ⚠️ Foam should not come into contact with electrical equipment.
          </div>
        </section>

        {/* CO2 */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            CO₂ – Carbon Dioxide
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Carbon dioxide is described in the handout as an excellent
            smothering agent. It extinguishes fire mainly by reducing
            the oxygen available for combustion.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4">
              ✓ Non-conductor of electricity
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              ✓ Leaves no residue
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              ✓ Suitable around electrical equipment
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              ✓ Effective in enclosed spaces
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-red-900 p-4">
            ⚠️ CO₂ is highly asphyxiating. A compartment flooded with
            CO₂ must be fully ventilated before entry without breathing
            apparatus.
          </div>
        </section>

        {/* DCP */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Dry Chemical Powder (DCP)
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Dry chemical powder is discharged under pressure. The
            handout describes it as particularly useful for burning
            liquids escaping from pipelines and joints and for
            electrical fires because it is non-conducting.
          </p>

          <div className="mt-5 rounded-xl bg-amber-50 p-5">
            <p className="font-semibold text-amber-900">
              DCP has negligible cooling effect and therefore provides
              little protection against re-ignition from hot surfaces.
            </p>
          </div>
        </section>

        {/* SUMMARY TABLE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Quick Fire Class Summary
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Class</th>
                  <th className="p-3">Material</th>
                  <th className="p-3">Examples</th>
                  <th className="p-3">Handout Method / Agent</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr className="border-b">
                  <td className="p-3 font-bold">A</td>
                  <td className="p-3">Solid combustible</td>
                  <td className="p-3">Wood, paper, rope</td>
                  <td className="p-3">Water – cooling</td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">B</td>
                  <td className="p-3">Flammable liquid</td>
                  <td className="p-3">Petrol, fuel oil, paint</td>
                  <td className="p-3">Foam / starvation</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-bold">C</td>
                  <td className="p-3">Gas</td>
                  <td className="p-3">Methane, LPG-type gas fire</td>
                  <td className="p-3">
                    Stop gas flow / DCP / water spray for cooling
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">D</td>
                  <td className="p-3">Metal</td>
                  <td className="p-3">Magnesium, aluminium</td>
                  <td className="p-3">
                    Graphite, talc, soda ash, limestone, dry sand
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold">E</td>
                  <td className="p-3">Electrical equipment</td>
                  <td className="p-3">Motor, transformer, wiring</td>
                  <td className="p-3">
                    De-energize + CO₂ / Halon / DCP
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              A → Solid → Water • B → Liquid → Foam / Starvation •
              C → Gas → Stop gas supply / DCP • D → Metal → Special
              powders / dry sand • Electrical → First de-energize,
              then use a non-conducting agent such as CO₂ or DCP.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-10"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fire Detection
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-12"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Construction & Means of Escape →
          </Link>

        </div>

      </div>
    </main>
  );
}