"use client";

import Link from "next/link";

export default function FPFFTopic02() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 02
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Sources of Heat / Ignition
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Understanding the different sources of heat, sparks and
            ignition that can lead to fire on board a ship.
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
            For fire to occur, heat, ignition or a spark is essential.
            Therefore, for fire prevention and fire fighting, control of
            heat energy, sparks and sources of ignition is important.
          </p>
        </section>

        {/* FOUR SOURCES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Main Sources of Heat / Ignition
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="text-3xl">🧪</div>
              <h3 className="mt-3 text-xl font-bold text-orange-900">
                1. Chemical Sources
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Heat produced during chemical reactions and oxidation.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-3 text-xl font-bold text-yellow-900">
                2. Electrical Sources
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Electrical heating, arcing and static electrical
                sparking.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="text-3xl">⚙️</div>
              <h3 className="mt-3 text-xl font-bold text-blue-900">
                3. Physical / Mechanical Sources
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Frictional heat, frictional sparks and heat of
                compression.
              </p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="text-3xl">👤</div>
              <h3 className="mt-3 text-xl font-bold text-green-900">
                4. Biological Sources
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Human actions and carelessness can provide sources of
                ignition.
              </p>
            </div>

          </div>
        </section>

        {/* CHEMICAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            1. Chemical Heat Energy
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Chemical heat energy is the heat released during complete
            oxidation of a substance. The handout refers to this as
            heat of combustion or calorific value.
          </p>

          <div className="mt-5 rounded-xl bg-red-50 p-5">
            <p className="font-bold text-red-900">
              Calorific Value
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              It is expressed in Joules per gram or kilocalories per
              gram.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">
              1 Joule = 0.000239 Kilocalories
            </p>
          </div>
        </section>

        {/* SPONTANEOUS COMBUSTION */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            Spontaneous Combustion / Ignition
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes spontaneous combustion or ignition as
            an increase in the temperature of a material without drawing
            heat from its surroundings.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Some combustible materials oxidize in air and generate heat
            faster than the heat can be dissipated to the surroundings.
            The temperature therefore continues to increase and may
            eventually result in ignition.
          </p>
        </section>

        {/* EXOTHERMIC */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Exothermic Reaction
          </h2>

          <p className="mt-3 leading-7 text-red-100">
            The handout describes these as reactions in which heat is
            produced increasingly as the chemical or oxidation reaction
            proceeds.
          </p>

          <p className="mt-4 text-lg font-bold text-yellow-300">
            Chemical / Oxidation Reaction → Heat → Temperature Rise →
            Possible Ignition
          </p>
        </section>

        {/* HEAT OF SOLUTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Heat of Solution
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Heat may also be released when certain materials dissolve.
            The handout gives the example of
            <strong> sulphuric acid dissolved in water.</strong>
          </p>

          <div className="mt-4 rounded-xl bg-amber-50 p-4 text-slate-700">
            The heat evolved may be sufficient to ignite nearby
            combustible material.
          </div>
        </section>

        {/* OXIDIZING REACTIONS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Chemical Reactions & Oxidizing Agents
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Combustion normally involves oxygen, but the handout also
            explains that some materials contain oxygen within
            themselves and that certain other elements can act as
            oxidizing agents.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-red-900">
                Oxygen within material
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Some materials can support a combustion reaction using
                oxygen contained within the material.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-red-900">
                Other oxidizing agents
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The handout gives chlorine and fluorine as examples of
                elements that can act as oxidizing agents.
              </p>
            </div>

          </div>
        </section>

        {/* ELECTRICAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            2. Electrical Sources
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout lists several sources of electrical heat energy:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Resistance heating",
              "Dielectric heating",
              "Induction heating",
              "Heat from arcing",
              "Static electric heating / sparking",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-yellow-50 p-4 font-semibold text-slate-700"
              >
                ⚡ {item}
              </div>
            ))}
          </div>
        </section>

        {/* STATIC ELECTRICITY */}
        <section className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6">
          <h2 className="text-xl font-bold text-yellow-900">
            ⚡ Static Electricity
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            An electric charge may accumulate on the surfaces of two
            materials when they are brought together and then
            separated.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            One surface may become positively charged and the other
            negatively charged.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            If the charge is not properly bonded or grounded, sufficient
            charge may accumulate and discharge as a spark capable of
            igniting flammable vapours or gases.
          </p>

          <div className="mt-5 rounded-xl bg-white p-4 font-semibold text-red-700">
            Fuel flowing through a pipe can generate enough static
            electrical charge to ignite a flammable mixture.
          </div>
        </section>

        {/* MECHANICAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            3. Physical / Mechanical Sources
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            According to the handout, a large number of fires on board
            can result from mechanical heat energy.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <div className="text-3xl">⚙️</div>
              <p className="mt-3 font-bold text-blue-900">
                Frictional Heat
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <div className="text-3xl">✨</div>
              <p className="mt-3 font-bold text-blue-900">
                Frictional Spark
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <div className="text-3xl">🔥</div>
              <p className="mt-3 font-bold text-blue-900">
                Heat of Compression
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Example given: diesel engine
              </p>
            </div>

          </div>
        </section>

        {/* BIOLOGICAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            4. Biological Sources
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout identifies ship's personnel themselves as the
            main biological source of spark or ignition.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Carelessness while smoking",
              "Careless handling of electrical gadgets or instruments",
              "Bypassing safety checklists and procedures",
              "Consumption of alcohol and drugs",
              "Lack of knowledge",
              "Lack of training and experience",
              "Lack of drills",
              "Lack of interest and incentive",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-red-50 p-4"
              >
                <span className="font-bold text-red-700">⚠</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REMEMBER */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Remember
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Control the Ignition Source
          </h2>

          <p className="mt-3 leading-7 text-red-100">
            Since heat, ignition or a spark is essential for a fire to
            occur, controlling sources of heat and ignition is an
            important part of fire prevention.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Sources of ignition = Chemical + Electrical +
              Physical/Mechanical + Biological • Static electricity can
              create an ignition spark • Mechanical sources include
              friction and compression • Human carelessness can also
              lead to fire.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-01"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fire Triangle
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-03"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Flammability →
          </Link>

        </div>

      </div>
    </main>
  );
}