"use client";

import Link from "next/link";

export default function FPFFTopic14() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 14
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Precautions & Use of Fixed Fire Fighting Installations
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Fixed fire-fighting systems, fire main, international shore
            coupling, CO₂ flooding, foam and automatic sprinkler systems.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔥 Fixed Fire Fighting Installations
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A fire may occur at any time and anywhere on board a ship.
            A minor fire can develop into a major fire due to
            carelessness or failure to adopt correct fire-fighting
            techniques.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Ships are therefore provided with fixed fire-fighting
            installations to deal with such emergencies.
          </p>
        </section>

        {/* SYSTEM OVERVIEW */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Main Fixed Fire Fighting Systems
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["CO₂ System", "Engine room, pump room, cargo holds, control room and paint store"],
              ["Halon 1301 / 1211", "Engine room, pump room, control room and accommodation"],
              ["Water Sprinkler", "Engine room, cargo holds, accommodation and ship-side fuel tanks"],
              ["High Expansion Foam", "Engine room, cargo holds, boiler room, pump room and paint store"],
              ["Low Expansion Foam", "Deck on tanker, helix deck and open spaces"],
              ["DCP System", "Metals, gas, electrical/electronic fires and LPG carriers"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-red-100 bg-red-50 p-5"
              >
                <h3 className="font-bold text-red-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXAM MEMORY */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Exam Focus – Extinguishing Effect
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-bold text-blue-300">Cooling Effect</p>
              <p className="mt-2 text-slate-300">
                Sprinklers / pressure spray
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-bold text-green-300">Smothering Effect</p>
              <p className="mt-2 text-slate-300">
                Carbon dioxide and foam
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-bold text-yellow-300">Inhibitor Effect</p>
              <p className="mt-2 text-slate-300">
                Halon and powders
              </p>
            </div>
          </div>
        </section>

        {/* FIRE MAIN */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚒 Fire Main System
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Ship is fitted with motor-driven fire and bilge pumps and diesel-driven emergency pumps at various locations.",
              "Pumps take suction directly from the sea through the sea chest.",
              "Pump discharge is fed into the fire main line.",
              "The fire main line is spread throughout the ship.",
              "Fire main is connected to hydrants around the ship.",
              "Hydrants are provided with coupling and valve.",
              "A hose basket is fitted at the side of every fire hydrant.",
              "Hoses may be kept flaked or rolled in the hose basket.",
              "Hose is connected to the hydrant and a nozzle is attached at the other end.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-red-50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WATER PRECAUTIONS */}
        <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            💧 Use of Water During Fire Fighting
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Use of water during fire fighting must be monitored.",
              "Excess water inside the vessel affects stability.",
              "Water should be pumped out after fire fighting.",
              "Failure to pump out accumulated water may cause the ship to list.",
              "Consider the equipment fitted inside the compartment before introducing water.",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white p-4 text-slate-700">
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-red-100 p-4 font-bold text-red-900">
            ⚠️ Exam Point: Excess fire-fighting water can affect ship
            stability and may lead to listing.
          </div>
        </section>

        {/* INTERNATIONAL SHORE CONNECTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔗 International Shore Coupling
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes its use when the ship&apos;s fire-main
            pump cannot be started due to total power failure and the
            diesel-driven pump is also not operational.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            It allows the fire main to receive pressure from shore or
            another vessel even when the coupling and flange sizes are
            different.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-700">
                INTERNAL DIAMETER
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-900">
                64 mm
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm font-bold text-green-700">
                OUTSIDE DIAMETER
              </p>
              <p className="mt-2 text-3xl font-bold text-green-900">
                178 mm
              </p>
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            The handout states that the two couplings are connected by
            four nuts and bolts, with the other end connected to the
            ship&apos;s hydrant.
          </p>
        </section>

        {/* CO2 FLOODING */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            CO₂ Flooding System
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            The system is described for fire fighting in the engine
            room, boiler room, pump room, control room and electrical
            supply room / switchboard.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "A battery of CO₂ bottles is provided.",
              "Bottles are connected in parallel to a common manifold / distributor.",
              "Distributor panel has valves for different compartments.",
              "Pipelines inside compartments are fitted with nozzles.",
              "Two master bottles have manually operated valves.",
              "CO₂ reaches the common manifold through the main line.",
              "The affected compartment is flooded by opening its particular valve.",
              "Manual operation is available if remote operation does not work.",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 p-4">
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CO2 OPERATION */}
        <section className="rounded-2xl border-2 border-red-300 bg-red-50 p-6">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Very Important for Exam
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-900">
            🚨 Preparation Before Operating CO₂ Flooding System
          </h2>

          <div className="mt-6 space-y-3">
            {[
              "Raise alarm to evacuate the compartment.",
              "Switch off all machinery.",
              "Switch off electrical supply.",
              "Stop ventilation supply.",
              "Make sure no person is left inside the compartment.",
              "Take written permission from the Master.",
              "Close the compartment.",
              "Operate the CO₂ system.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-white p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-900 font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CO2 SAFETY */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            ⚠️ CO₂ Safety
          </h2>

          <p className="mt-3 leading-7 text-red-100">
            CO₂ is highly asphyxiating and cannot be detected by sight
            or smell. The handout states that no one should enter a
            confined or partially confined space after CO₂ has been
            used unless suitably protected by breathing apparatus and
            lifeline.
          </p>

          <p className="mt-3 font-semibold">
            A CO₂-flooded compartment must be fully ventilated before
            entry without breathing apparatus.
          </p>
        </section>

        {/* FOAM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🫧 Fixed Foam Fire Fighting System
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes the foam system for major oil /
            liquid-fuel fires in areas such as engine rooms, boiler
            areas, helicopter decks and paint stores.
          </p>

          <div className="mt-5 rounded-xl bg-yellow-50 p-5">
            <h3 className="font-bold text-yellow-900">
              Working Principle
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              A convergent-divergent nozzle creates a partial vacuum.
              Foam is drawn into the seawater line and mixed with the
              driving water before being supplied through pipelines to
              the fire area.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-700">
                FIRE MAIN PRESSURE
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-900">
                7–9 kg/cm²
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm font-bold text-green-700">
                FOAM TANK CAPACITY
              </p>
              <p className="mt-2 text-3xl font-bold text-green-900">
                450–5000 L
              </p>
            </div>
          </div>
        </section>

        {/* SPRINKLER */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚿 Automatic Water Sprinkler System
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout lists its use in accommodation spaces,
            alleyways and saloons. It is a fixed system that
            automatically fights fire by sprinkling water.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "System gives an alarm as well as fights the fire.",
              "A test valve is provided for testing the alarm.",
              "Sprinkler heads are connected to the pipeline.",
              "A quartzoid bulb is fitted to the sprinkler.",
              "The bulb contains high-expansion liquid.",
              "The bulb bursts when temperature rises to the stated operating range.",
              "Water is then sprinkled around the affected area.",
              "Reservoir tank has a level indicator.",
              "Sea-water pump operates automatically when tank pressure falls.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 p-4 text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-orange-50 p-5 text-center">
              <p className="text-sm font-bold text-orange-700">
                BULB OPERATING RANGE
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-900">
                68°C–79°C
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5 text-center">
              <p className="text-sm font-bold text-green-700">
                RESERVOIR PRESSURE
              </p>
              <p className="mt-2 text-3xl font-bold text-green-900">
                6–7 bar
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 p-4 font-semibold text-amber-900">
            After use of sea water, the handout states that the line
            should be thoroughly flushed with fresh water.
          </div>
        </section>

        {/* DCP */}
        <section className="rounded-2xl border-l-4 border-purple-600 bg-purple-50 p-6">
          <h2 className="text-xl font-bold text-purple-900">
            DCP Fixed Fire Fighting System
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Dry Chemical Powder is listed for interrupting the chemical
            reaction in metal fires, gas fires and electrical /
            electronic equipment fires.
          </p>

          <p className="mt-3 font-semibold text-purple-900">
            The handout specifically notes its use as a fixed
            fire-fighting system on gas (LPG) carriers.
          </p>
        </section>

        {/* EXAM REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              <strong>CO₂ / Foam</strong> → Smothering effect
            </p>
            <p>
              <strong>Halon / Powder</strong> → Inhibitor effect
            </p>
            <p>
              <strong>Sprinkler / Pressure Spray</strong> → Cooling effect
            </p>
            <p>
              <strong>CO₂:</strong> evacuate → machinery OFF →
              electrical OFF → ventilation OFF → confirm nobody inside
              → Master&apos;s written permission → close compartment →
              operate system.
            </p>
            <p>
              <strong>International Shore Coupling:</strong> 64 mm I.D.
              and 178 mm O.D. as given in the handout.
            </p>
            <p>
              <strong>Sprinkler:</strong> bulb 68–79°C; reservoir
              pressure 6–7 bar.
            </p>
            <p>
              <strong>Water:</strong> monitor accumulation because
              excess water can affect stability and cause listing.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/fpff/topic-13"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fire Fighting Appliances
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-15"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Breathing Apparatus →
          </Link>
        </div>

      </div>
    </main>
  );
}