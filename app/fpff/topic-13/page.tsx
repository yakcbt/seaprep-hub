"use client";

import Link from "next/link";

export default function FPFFTopic13() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 13
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Fire Fighting Appliances & Equipment
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Portable fire extinguishers, fireman&apos;s outfit,
            breathing apparatus and fire nozzles used on board.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* PORTABLE EXTINGUISHERS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🧯 Portable Fire Extinguishers
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Portable fire extinguishers are intended for immediate use
            in the early stages of a fire.
          </p>

          <div className="mt-4 rounded-xl bg-red-50 p-5">
            <p className="font-semibold text-red-900">
              They should not be expected to deal with large fires
              because their capacity and duration of use are limited.
            </p>
          </div>

          <p className="mt-4 leading-7 text-slate-700">
            The handout gives portable extinguisher capacities from
            <strong> 9 litres to 13.5 litres</strong>. Selection depends
            upon the nature of the anticipated fire.
          </p>
        </section>

        {/* LOCATION */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            📍 Location of Portable Extinguishers
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Conspicuous and readily visible positions",
              "Near room exits",
              "In corridors",
              "Near stairways",
              "Near places containing major fire risk",
              "Spare charges provided for each type",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* MARKINGS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Information Marked on Extinguisher
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Name of manufacturer",
              "Type of fire for which extinguisher is suitable",
              "Type and quantity of extinguishing medium",
              "Approval details",
              "Instructions for use and recharge",
              "Year of manufacture",
              "Operating temperature range",
              "Test pressure",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-green-600">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WATER TYPE */}
        <section className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            💧 9 Litre Soda Acid Water Type Extinguisher
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-sm font-bold text-red-600">IDENTIFICATION</p>
              <p className="mt-1 font-bold text-slate-800">Painted Red</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-bold text-blue-700">ACTION</p>
              <p className="mt-1 font-bold text-slate-800">Cooling</p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-bold text-green-700">DURATION</p>
              <p className="mt-1 font-bold text-slate-800">
                60–90 seconds
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-4">
              <p className="text-sm font-bold text-yellow-700">
                DISCHARGE DISTANCE
              </p>
              <p className="mt-1 font-bold text-slate-800">
                3–5 metres
              </p>
            </div>
          </div>

          <h3 className="mt-6 font-bold text-slate-900">
            Operating Procedure
          </h3>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              "Lift extinguisher and go to seat of fire",
              "Take out safety pin",
              "Strike the knob",
            ].map((item, index) => (
              <div key={item} className="rounded-xl bg-blue-50 p-4">
                <span className="font-bold text-blue-900">
                  {index + 1}.
                </span>{" "}
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOAM */}
        <section className="rounded-2xl border-l-4 border-yellow-500 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-yellow-900">
            🫧 9 Litre Mechanical Foam Type Extinguisher
          </h2>

          <h3 className="mt-5 font-bold text-slate-900">
            Main Body Parts
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Wheel Cap",
              "Dip Tube",
              "Striking Knob",
              "Piercer",
              "Discharge Hose",
              "Discharge Nozzle",
              "Pressure Releasing Holes",
              "CO₂ Cartridge Seal",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-900"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="mt-6 font-bold text-slate-900">
            Operating Procedure
          </h3>

          <div className="mt-3 space-y-2 text-slate-700">
            <p>1. Check wheel cap for tightness.</p>
            <p>2. Lift extinguisher and go to seat of fire.</p>
            <p>3. Take out safety clip.</p>
            <p>4. Uncoil hose.</p>
            <p>5. Point nozzle towards vertical support.</p>
            <p>6. Strike the knob.</p>
            <p>7. Use in sweeping motion to cover the fire area.</p>
          </div>
        </section>

        {/* DCP */}
        <section className="rounded-2xl border-l-4 border-purple-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-purple-900">
            Dry Chemical Powder (DCP) Extinguisher
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes DCP extinguishers as mainly suitable
            for low-flash-point liquid fires and high-pressure gas
            fires. Their cooling effect is very small.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Petroleum fires",
              "Gas fires",
              "Electrical equipment fires",
              "Surface fires of textile fibre",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-purple-50 p-4 font-semibold text-purple-900"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 p-5">
            <h3 className="font-bold text-amber-900">
              Types of DCP Extinguisher
            </h3>

            <p className="mt-2 text-slate-700">
              • Gas cartridge type
              <br />
              • Stored pressure type
            </p>

            <p className="mt-3 text-slate-700">
              The handout states that these are normally available in
              <strong> 4.5 kg and 10 kg capacities</strong>.
            </p>
          </div>
        </section>

        {/* 4.5 KG DCP */}
        <section className="rounded-2xl bg-purple-50 p-6">
          <h2 className="text-xl font-bold text-purple-900">
            🧯 4.5 kg DCP Extinguisher
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-slate-500">
                IDENTIFICATION
              </p>
              <p className="mt-1 font-bold">Painted Blue</p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-slate-500">
                EXTINGUISHING
              </p>
              <p className="mt-1 font-bold">By Smothering</p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-slate-500">
                DURATION
              </p>
              <p className="mt-1 font-bold">25–30 seconds</p>
            </div>
          </div>

          <h3 className="mt-6 font-bold text-purple-900">
            Operating Procedure
          </h3>

          <div className="mt-3 space-y-2 text-slate-700">
            <p>1. Check wheel cap for tightness.</p>
            <p>2. Lift extinguisher and go to seat of fire.</p>
            <p>3. Take out safety clip.</p>
            <p>4. Uncoil hose.</p>
            <p>5. Point nozzle towards seat of fire.</p>
            <p>6. Strike the knob.</p>
            <p>7. Squeeze nozzle and use in sweeping motion.</p>
          </div>
        </section>

        {/* CO2 */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            CO₂ Type Fire Extinguisher – 2 kg
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">IDENTIFICATION</p>
              <p className="mt-1 font-bold">
                Black with Silver Band
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">ACTION</p>
              <p className="mt-1 font-bold">Smothering</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">DURATION</p>
              <p className="mt-1 font-bold">6–8 seconds</p>
            </div>
          </div>

          <p className="mt-5 text-slate-300">
            The handout lists its use for electrical fire, general fire
            and liquid-fuel fire.
          </p>

          <h3 className="mt-5 font-bold">
            Operating Procedure
          </h3>

          <div className="mt-3 space-y-2 text-slate-300">
            <p>1. Take out safety clip.</p>
            <p>2. Lift the extinguisher.</p>
            <p>3. Point discharge horn towards fire.</p>
            <p>4. Open valve.</p>
          </div>

          <div className="mt-5 rounded-xl bg-red-900 p-4 font-semibold">
            ⚠️ Never hold the discharge horn — the handout warns that
            this may cause a cold burn.
          </div>
        </section>

        {/* FIREMANS OUTFIT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            👨‍🚒 Fireman&apos;s Outfit
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Adequate protection against heat and smoke is required when
            approaching the seat of fire for fire fighting or rescue.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Breathing apparatus",
              "Water-resistant protective clothing",
              "Boots and gloves",
              "Rigid helmet",
              "Intrinsically safe electric hand lamp",
              "Axe with short insulated handle",
              "Strong fireproof line",
              "Belt for ancillary equipment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-red-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* BA TYPES */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            😷 Types of Breathing Apparatus
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-white p-5">
              <p className="text-xl font-bold text-blue-900">
                CABA
              </p>
              <p className="mt-2 text-slate-700">
                Compressed Air Breathing Apparatus
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-xl font-bold text-blue-900">
                ELSA / ELBA
              </p>
              <p className="mt-2 text-slate-700">
                Emergency Life Support Apparatus / Breathing Apparatus
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-xl font-bold text-blue-900">
                FABA
              </p>
              <p className="mt-2 text-slate-700">
                Forced Air Breathing Apparatus
              </p>
            </div>

          </div>
        </section>

        {/* PURPOSE BA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Purpose of Breathing Apparatus
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl bg-red-50 p-5">
              <h3 className="font-bold text-red-900">
                CABA
              </h3>
              <p className="mt-2 text-slate-700">
                • Enter smoke-filled compartments
                <br />
                • Enter enclosed spaces
                <br />
                • Fire fighting
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="font-bold text-green-900">
                ELSA
              </h3>
              <p className="mt-2 text-slate-700">
                Used for emergency escape purpose.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">
                Forced Air Breathing Apparatus
              </h3>
              <p className="mt-2 text-slate-700">
                • Enter smoke-filled compartments
                <br />
                • Enter enclosed spaces
              </p>
            </div>

          </div>
        </section>

        {/* CABA */}
        <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            CABA – Important Points
          </h2>

          <p className="mt-3 text-slate-700">
            The handout lists a fully charged cylinder pressure of:
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-4xl font-bold text-red-900">
              200 bar
            </p>
            <p className="mt-1 text-slate-600">
              Full cylinder charge
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-red-100 p-5">
            <p className="font-bold text-red-900">
              Warning Whistle: 50 bar
            </p>

            <p className="mt-2 text-slate-700">
              The handout states that when the warning whistle blows at
              50 bar, approximately 8 minutes are left to come out of
              the compartment.
            </p>
          </div>
        </section>

        {/* FIRE NOZZLES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚿 Fire Nozzles
          </h2>

          <p className="mt-3 text-slate-700">
            The handout lists the following types of fire nozzles:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Spray / Jet Nozzle",
              "Jet Nozzle",
              "Oil Fire Nozzle",
              "Diffuser Nozzle",
              "Mid Force Nozzle",
              "Revolving Nozzle",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 p-4 text-center font-semibold text-blue-900"
              >
                {item}
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
              Portable extinguishers are for early-stage fires •
              Water type works mainly by cooling • Foam works by
              smothering • DCP acts quickly and has little cooling
              effect • CO₂ works by smothering • Fireman&apos;s outfit
              protects against heat and smoke • CABA cylinder = 200 bar
              in the handout • Warning whistle = 50 bar.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-12"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Construction & Escape
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-14"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Fixed Installations →
          </Link>

        </div>

      </div>
    </main>
  );
}