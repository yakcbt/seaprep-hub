"use client";

import Link from "next/link";

export default function FPFFTopic09() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 09
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Organisation of Shipboard Fire Fighting
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Fire alarm, initial response, emergency teams, fire control
            plan, communication and shipboard fire-fighting procedures.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Shipboard Fire-Fighting Organisation
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A fire can occur at any time on a ship. Therefore, the ship
            must have a definite plan of response for dealing with a
            fire emergency.
          </p>
        </section>

        {/* FIRE ALARM */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Fire Alarm
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            🔔 Continuous Ringing of Ship&apos;s Bell
          </h2>

          <p className="mt-3 text-red-100">
            The handout states that the fire alarm is initiated by
            continuous ringing of the ship&apos;s bell.
          </p>
        </section>

        {/* INITIAL RESPONSE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚨 Alarm & Initial Response
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Whether the vessel is at sea, at anchor or in port, on
            hearing the emergency alarm ship&apos;s personnel muster at
            their emergency stations.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Life jacket",
              "Long-sleeved boiler suit",
              "Safety shoes",
              "Safety helmet",
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

        {/* MUSTER */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-orange-900">
            Muster & Personnel Check
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Teams are mustered by their team leaders. A report is then
            made to the Master regarding any missing persons or
            absentees.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Depending on the emergency, the Master gives orders for
            tackling the emergency and fighting the fire with
            appropriate fire-fighting appliances.
          </p>
        </section>

        {/* IMPORTANT INITIAL DUTIES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Important Initial Duties
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Chief Engineer proceeds to the engine control room for information on the emergency.",
              "Chief Officer secures cargo and ballast operations before proceeding to the muster station.",
              "Bridge and engine-room watchkeepers remain on watch until relieved.",
              "Bridge messenger distributes portable radio sets to the teams.",
              "Team leaders maintain communication with the bridge during the emergency.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-red-600">✓</span>
                <p className="leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ORGANISATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            👥 Emergency Team Organisation
          </h2>

          <p className="mt-3 text-slate-700">
            The actual team pattern depends on the number of personnel
            carried on the particular ship.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="text-lg font-bold text-red-900">
                1. Command Team
              </h3>
              <p className="mt-3 text-slate-700">
                <strong>Master:</strong> Overall in charge
              </p>
              <p className="mt-2 text-slate-700">
                Responsible for command and control of the emergency.
              </p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
              <h3 className="text-lg font-bold text-orange-900">
                2. Emergency Team
              </h3>
              <p className="mt-3 text-slate-700">
                Musters, reports to the command team, prepares equipment
                and reports readiness.
              </p>
              <p className="mt-2 font-semibold text-orange-900">
                First team to tackle the emergency.
              </p>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="text-lg font-bold text-blue-900">
                3. Support Team
              </h3>
              <p className="mt-3 text-slate-700">
                Provides support to the emergency team and reports
                readiness.
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="text-lg font-bold text-green-900">
                4. Technical Team
              </h3>
              <p className="mt-3 text-slate-700">
                Reports machinery and emergency-system status and
                advises if machinery needs to be shut down for safety.
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-purple-900">
                5. First Aid Team
              </h3>
              <p className="mt-3 text-slate-700">
                The handout lists a separate First Aid Team as part of
                the shipboard emergency organisation.
              </p>
            </div>

          </div>
        </section>

        {/* COMMAND TEAM DUTIES */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Command Team Duties
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Command and control of emergency",
              "Search for unaccounted persons",
              "Internal communication",
              "External communication",
              "Maintain safe navigation",
              "Maintain time/event record",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 p-4">
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* SUPPORT TEAM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Support Team Duties
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Prepare survival craft",
              "Prepare breathing apparatus",
              "Provide additional fire-fighting equipment",
              "Maintain security patrol",
              "Carry out boundary cooling",
              "Shut off ventilation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL TEAM */}
        <section className="rounded-2xl border-l-4 border-green-600 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            ⚙️ Technical Team
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The technical team reports readiness to the command team
            and provides information on the status of machinery and
            other emergency systems.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The team advises whether machinery should be shut down for
            safety and attends to fixed installations when necessary.
          </p>
        </section>

        {/* FIRE CONTROL PLAN */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🗺️ Fire Control Plan
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The fire control plan is a permanently exhibited plan
            displaying the fire-protection facilities on board.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Ship, engine-room and accommodation details",
              "Emergency escape routes and access from different zones",
              "Fixed fire-extinguishing equipment",
              "Portable fire-extinguishing equipment",
              "Storage of refills",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-4 text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* BRIDGE INFO */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            Information Available on Bridge
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Fire control plan",
              "Stability information",
              "Survival equipment details",
              "Storage plans",
              "Dangerous-goods information",
              "Communication arrangements",
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

        {/* COMMUNICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            📻 Communication Methods
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Telephones",
              "Sound-powered Telephone",
              "Loudhailers",
              "Direct Speech",
              "Bridge–MCR Communication",
              "Radio Telephones",
              "Walkie-Talkie",
              "Messengers",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-red-50 px-4 py-2 font-semibold text-red-900"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* DAMAGE CONTROL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Fire Containment & Damage Control
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Operate watertight doors as required.",
              "Stop ventilation and exhaust fans.",
              "Close dampers.",
              "Close windows and portholes in accommodation and galley.",
              "Adjust ship direction relative to wind for fire fighting.",
              "Cool fuel-tank boundary bulkheads.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-red-50 p-4"
              >
                <span className="font-bold text-red-600">🔥</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STABILITY */}
        <section className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            ⚠️ Maintaining Stability
          </h2>

          <div className="mt-4 space-y-2 text-slate-700">
            <p>• Frequently check changes in GM due to use of water.</p>
            <p>• Pump and drain fire-fighting water.</p>
            <p>• Shift cargo if required to facilitate fire fighting.</p>
            <p>• Move to shallow water if necessary.</p>
          </div>
        </section>

        {/* ERP */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Emergency Response Plan (ERP)
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            During an emergency the Emergency Response Plan goes into
            action and a trained team tackles the emergency.
          </p>

          <h3 className="mt-5 font-bold text-slate-900">
            ERP is normally posted at:
          </h3>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              "Navigating Bridge",
              "Engine Room",
              "Crew Accommodation",
              "Muster Stations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-100 p-4 font-semibold text-slate-700"
              >
                📍 {item}
              </div>
            ))}
          </div>
        </section>

        {/* AT SEA */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🌊 Fire-Fighting Procedure – Ship at Sea
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Fire alarm initiated.",
              "Crew assemble at fire stations as per muster list.",
              "Fire parties assemble and prepare for action.",
              "Ship's course and speed altered if necessary.",
              "Fire pump started and fire main activated.",
              "Fire hoses and nozzles rigged.",
              "Fire fighting initiated.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IN PORT */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            ⚓ Additional Procedures in Port
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Call the port fire brigade.",
              "Inform the port authority.",
              "Confirm that the port fire brigade will take charge.",
              "Inform port authority of hazards to dock installations.",
              "Evacuate non-essential personnel.",
              "Prepare to leave port if required, using own power or tugs.",
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

        {/* CONTROL */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🚢 Who Controls the Fire Emergency?
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-sm text-red-200">CONTROL STATION</p>
              <p className="mt-2 text-xl font-bold">Bridge</p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-sm text-red-200">OVERALL IN CHARGE</p>
              <p className="mt-2 text-xl font-bold">Master</p>
            </div>
          </div>

          <p className="mt-5 text-red-100">
            Each team leader reports to the bridge and receives
            instructions.
          </p>
        </section>

        {/* TRAINING */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            Training & Fire Drills
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            On joining a ship, every person must know their fire station
            and boat station and become familiar with the ship&apos;s
            general layout, fire-fighting appliances and life-saving
            appliances.
          </p>

          <div className="mt-5 space-y-2 text-slate-700">
            <p>✓ Fire drills should be realistic.</p>
            <p>✓ One fire pump should be started.</p>
            <p>✓ Two fire hoses/nozzles should be rigged.</p>
            <p>✓ Fireman&apos;s outfit and rescue equipment should be checked.</p>
            <p>✓ Communication between bridge and teams should be checked.</p>
            <p>✓ Watertight doors, fire doors and dampers should be checked.</p>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            <strong className="text-white">
              Bridge = Control Station • Master = Overall In Charge •
              Emergency Team = First to tackle emergency • Support Team =
              Provides assistance • Technical Team = Machinery &
              emergency systems • Fire Control Plan = Fire protection,
              equipment and escape information • Maintain communication
              with bridge throughout the emergency.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-08"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fire Hazards
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-10"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Fire & Smoke Detection →
          </Link>

        </div>

      </div>
    </main>
  );
}