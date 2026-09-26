"use client";

import Link from "next/link";

export default function FPFFTopic03() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 03
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Flammability
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Understanding flammable materials, flammable limits,
            flash point, ignition point and auto-ignition.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* FLAMMABILITY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            What is Flammability?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            <strong>Flammability</strong> is the ability of a substance
            to burn.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Vapours given off by a flammable material can burn when
            mixed with air in the correct proportion and an ignition
            source is present.
          </p>
        </section>

        {/* BASIC CONDITION */}
        <section className="rounded-2xl bg-red-900 p-6 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Basic Concept
          </p>

          <p className="mt-4 text-2xl font-bold">
            Flammable Vapour + Air + Ignition Source
          </p>

          <p className="mt-3 text-red-100">
            A suitable mixture can ignite and burn.
          </p>
        </section>

        {/* GAS FREE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Gas Free
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A tank, compartment or container is considered
            <strong> gas free</strong> when sufficient fresh air has
            been introduced to reduce flammable, toxic or inert gas to
            the level required for a specific purpose.
          </p>

          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-900">
              Examples given in the handout:
            </p>
            <p className="mt-2 text-slate-700">
              Hot work and entry into a compartment.
            </p>
          </div>
        </section>

        {/* TLV */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Threshold Limit Value (TLV)
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            TLV is the time-weighted average concentration of a
            substance to which nearly all workers may be repeatedly
            exposed during normal working periods without adverse
            effect.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-100 p-4 text-center">
              <p className="text-2xl font-bold text-red-900">8 Hours</p>
              <p className="mt-1 text-sm text-slate-600">
                Normal workday
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-4 text-center">
              <p className="text-2xl font-bold text-red-900">48 Hours</p>
              <p className="mt-1 text-sm text-slate-600">
                Work week
              </p>
            </div>
          </div>
        </section>

        {/* FLAMMABLE LIMITS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Flammable Limits
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
              <h3 className="text-lg font-bold text-blue-900">
                Lower Flammable Limit (LFL)
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                The concentration of hydrocarbon gas in air below which
                there is insufficient hydrocarbon to support and
                propagate combustion.
              </p>

              <p className="mt-2 font-semibold text-blue-800">
                Also referred to as Lower Explosive Limit.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
              <h3 className="text-lg font-bold text-red-900">
                Upper Flammable Limit (UFL)
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                The concentration of hydrocarbon gas in air above which
                there is insufficient air to support and propagate
                combustion.
              </p>

              <p className="mt-2 font-semibold text-red-800">
                Also referred to as Upper Explosive Limit.
              </p>
            </div>

          </div>
        </section>

        {/* RANGE VISUAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Flammable Range
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The range of hydrocarbon gas concentration in air between
            the lower and upper flammable limits is known as the
            <strong> Flammable Range</strong> or
            <strong> Explosive Range.</strong>
          </p>

          <div className="mt-6 grid overflow-hidden rounded-xl text-center sm:grid-cols-3">

            <div className="bg-blue-100 p-5">
              <p className="font-bold text-blue-900">Below LFL</p>
              <p className="mt-2 text-sm text-slate-700">
                Insufficient hydrocarbon
              </p>
            </div>

            <div className="bg-red-600 p-5 text-white">
              <p className="font-bold">LFL → UFL</p>
              <p className="mt-2 text-sm">
                Flammable / Explosive Range
              </p>
            </div>

            <div className="bg-amber-100 p-5">
              <p className="font-bold text-amber-900">Above UFL</p>
              <p className="mt-2 text-sm text-slate-700">
                Insufficient air
              </p>
            </div>

          </div>
        </section>

        {/* FLASH POINT */}
        <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🔥 Flash Point
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Flash point is the
            <strong> lowest temperature</strong> at which a liquid gives
            off sufficient gas to form a flammable gas mixture near the
            surface of the liquid.
          </p>
        </section>

        {/* IGNITION POINT */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🔥 Ignition Point
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Ignition point is the lowest temperature to which a
            flammable substance must be heated for it to ignite.
          </p>
        </section>

        {/* AUTO IGNITION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Auto-Ignition
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Auto-ignition is ignition of a combustible material
            <strong> without initiation by a spark or flame</strong>,
            after the material reaches a temperature at which
            self-sustaining combustion occurs.
          </p>

          <div className="mt-5">
            <p className="font-bold text-slate-800">
              Examples listed in the handout:
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Oily waste or jute",
                "Wet coal",
                "Wet grain",
                "Timber products",
                "Scrap iron",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-red-50 p-4 font-semibold text-slate-700"
                >
                  🔥 {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BURNING SPEED */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Burning Speed / Flame Speed
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Burning speed or flame speed is the speed of rapid
            propagation of the flame front through a flammable vapour
            and air mixture.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            When flammable vapour and oxygen are present in the correct
            quantity required for complete oxidation, the handout calls
            this a <strong>stoichiometric mixture.</strong>
          </p>
        </section>

        {/* THERMAL VALUE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Thermal / Calorific Value
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Thermal value or calorific value is the quantity of heat
            produced per unit weight of fuel.
          </p>

          <div className="mt-4 rounded-xl bg-slate-100 p-4">
            <p className="font-bold text-slate-800">
              Expressed in Joules/gram or kcal/gram
            </p>
          </div>
        </section>

        {/* HOT WORK */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Hot Work
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Hot work involves sources of ignition or temperatures high
            enough to cause ignition of a flammable gas mixture.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Welding",
              "Burning",
              "Soldering",
              "Blow torches",
              "Some power-driven tools",
              "Non-intrinsically safe portable electrical equipment",
              "Sand blasting equipment",
              "Internal combustion engines",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-slate-700 shadow-sm"
              >
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* STATIC ELECTRICITY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            ⚡ Static Electricity
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Static electricity is electrical charge produced on
            dissimilar materials through physical contact and
            separation.
          </p>
        </section>

        {/* IMPORTANT TERMS */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Important Terms
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">

            <div className="rounded-xl bg-white/10 p-4">
              <strong>LFL</strong>
              <p className="mt-1 text-sm text-slate-300">
                Lower Flammable Limit
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>UFL</strong>
              <p className="mt-1 text-sm text-slate-300">
                Upper Flammable Limit
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>Flash Point</strong>
              <p className="mt-1 text-sm text-slate-300">
                Lowest temperature producing sufficient flammable gas
                near a liquid surface.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <strong>Auto-Ignition</strong>
              <p className="mt-1 text-sm text-slate-300">
                Ignition without an external spark or flame.
              </p>
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
              Flammability = ability to burn • LFL = insufficient
              hydrocarbon below the limit • UFL = insufficient air above
              the limit • Between LFL and UFL = Flammable Range • Flash
              Point relates to flammable gas from a liquid •
              Auto-Ignition occurs without an external spark or flame.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-02"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Sources of Ignition
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-04"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Fire Prevention →
          </Link>

        </div>

      </div>
    </main>
  );
}