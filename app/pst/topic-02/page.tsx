"use client";

import Link from "next/link";

const emergencies = [
  {
    title: "Collision",
    text: "Collision may damage the watertight integrity of the vessel and may result in flooding or other serious damage.",
  },
  {
    title: "Fire",
    text: "Fire can occur in accommodation, galley, machinery spaces, cargo spaces, paint rooms and other areas of the ship.",
  },
  {
    title: "Flooding",
    text: "Flooding may occur due to damage to the ship's outer shell caused by collision, contact with land or underwater objects, explosion or other damage.",
  },
  {
    title: "Stranding",
    text: "Stranding is an accidental grounding of the vessel and may cause serious damage, particularly to the double-bottom area.",
  },
  {
    title: "Beaching",
    text: "Beaching is the intentional grounding of a vessel under controlled circumstances, such as when necessary to prevent loss of the ship.",
  },
  {
    title: "Man Overboard",
    text: "A man-overboard situation requires immediate alarm, lookout, lifesaving equipment and recovery action.",
  },
  {
    title: "Hull Failure",
    text: "Hull failure is listed among the emergencies that may threaten the safety of the vessel and persons on board.",
  },
];

export default function PSTTopic02() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 02
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Emergency Situations
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Types of shipboard emergencies, immediate precautions,
            emergency signals, muster duties and survival preparations.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* DEFINITION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.1 Emergency Situations
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            An emergency is a dangerous situation that threatens the
            safety of the ship and the lives of persons on board.
            Seafarers must understand the possible emergencies and know
            their duties when an emergency occurs.
          </p>
        </section>

        {/* TYPES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Types of Emergencies
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {emergencies.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4"
              >
                <h3 className="text-lg font-bold text-blue-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COLLISION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.2 Precautions – Collision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A collision can seriously affect the watertight integrity of
            a vessel. Immediate actions described in the course handout
            include:
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✓ Sound the General Emergency Alarm.</li>
            <li>✓ Stop engines.</li>
            <li>✓ Start pumping if water is entering the vessel.</li>
            <li>✓ Close watertight doors and fire doors.</li>
            <li>✓ Assess the extent of damage and damage stability.</li>
            <li>✓ Follow emergency damage-control procedures.</li>
            <li>✓ Establish communication with the collided vessel.</li>
            <li>✓ Follow the Master's instructions.</li>
          </ul>
        </section>

        {/* FLOODING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Flooding
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Flooding may occur when the outer shell of the vessel is
            damaged. Possible causes mentioned in the handout include
            collision with another vessel, land or an underwater object,
            as well as explosion.
          </p>
        </section>

        {/* STRANDING / BEACHING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Stranding & Beaching
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-bold text-amber-900">
                Stranding
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Stranding is accidental grounding. The double-bottom
                area may suffer considerable damage, particularly when
                the ground is rocky.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Stop main engines.</li>
                <li>• Raise the emergency alarm.</li>
                <li>• Shut fire and watertight doors.</li>
                <li>• Assess damage.</li>
                <li>• Check position and soundings.</li>
                <li>• Consider outside assistance.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="text-lg font-bold text-blue-900">
                Beaching
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Beaching is intentional grounding of the vessel. It may
                be carried out under controlled circumstances when
                necessary to prevent collision or loss of a damaged
                vessel that is in danger of sinking.
              </p>
            </div>

          </div>
        </section>

        {/* MAN OVERBOARD */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            Man Overboard
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Immediate action is essential when a person falls overboard.
            The handout identifies the following actions:
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              ✓ Put the helm hard over towards the side where the person
              has fallen.
            </li>
            <li>✓ Inform the Master.</li>
            <li>✓ Release a lifebuoy.</li>
            <li>✓ Raise the man-overboard alarm.</li>
            <li>✓ Stand by the main engines.</li>
            <li>✓ Post lookouts.</li>
            <li>✓ Follow the Master's orders for recovery.</li>
          </ul>
        </section>

        {/* FIRE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.3 Fire Provision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Containment and extinguishing of a fire depend on factors
            such as the location and type of fire, availability of
            extinguishing equipment, quick assessment of the situation
            and a properly trained crew.
          </p>

          <div className="mt-5 rounded-xl bg-red-50 p-5">
            <h3 className="font-bold text-red-900">
              Important
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              The alarm should be raised as soon as a fire is discovered,
              regardless of its size. Early containment gives the
              emergency team time to prepare appropriate fire-fighting
              equipment.
            </p>
          </div>

          <h3 className="mt-6 text-lg font-bold text-slate-900">
            Examples of Shipboard Fires
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              "Accommodation",
              "Galley",
              "Machinery Space",
              "Cargo Space",
              "Paint Room",
            ].map((fire) => (
              <div
                key={fire}
                className="rounded-xl bg-slate-100 p-3 text-center text-sm font-semibold text-slate-700"
              >
                {fire}
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDERING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.4 Foundering
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When a vessel is foundering and it is no longer safe to
            remain on board because the vessel is sinking, emergency
            procedures must be followed and the vessel abandoned in
            accordance with the Master's instructions.
          </p>
        </section>

        {/* FAMILIARIZATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.5 Crew Expertise & Initial Familiarization
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            New crew members must become familiar with ship-specific
            safety arrangements and emergency procedures.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Location of cabin and nearest emergency exit",
              "Location of the nearest fire extinguisher",
              "Location of lifejackets and immersion suits",
              "Correct method of wearing a lifejacket",
              "Location of emergency exits",
              "Types of emergency alarms",
              "Location and purpose of the ship's fire plan",
              "Muster-list duties",
              "Instructions for abandoning ship",
              "Actions during a man-overboard emergency",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-slate-50 p-3"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MUSTER LIST */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.6 Muster List & Emergency Signals
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The muster list is prepared by the Master and displayed at
            important locations such as the bridge, control room and
            engine room.
          </p>

          <h3 className="mt-5 font-bold text-slate-900">
            Muster List Contains
          </h3>

          <ul className="mt-3 space-y-2 text-slate-700">
            <li>• Name and call sign of the ship</li>
            <li>• Emergency alarm signals</li>
            <li>• Duties of crew members</li>
            <li>• Officer in charge of groups or squads</li>
            <li>• Escape routes</li>
            <li>• Substitutes for key persons</li>
          </ul>
        </section>

        {/* SIGNALS */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Important Emergency Signals
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl bg-white/10 p-4">
              <h3 className="font-bold text-yellow-300">
                General Emergency Alarm
              </h3>
              <p className="mt-2 text-blue-100">
                At least 7 short blasts followed by 1 long blast on the
                ship's whistle, siren or electrically operated bell.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <h3 className="font-bold text-yellow-300">
                Fire Alarm
              </h3>
              <p className="mt-2 text-blue-100">
                Continuous ringing of the ship's bell or fire alarm.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <h3 className="font-bold text-yellow-300">
                Abandon Ship
              </h3>
              <p className="mt-2 text-blue-100">
                The handout describes this normally as a verbal order
                given by the Master. Personnel then follow their
                assigned abandon-ship duties.
              </p>
            </div>

          </div>
        </section>

        {/* CREW INSTRUCTIONS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.7 Crew & Emergency Instructions
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Clear emergency instructions must be available to crew.
            Muster lists are displayed at conspicuous locations
            throughout the vessel.
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✓ Know your assigned muster station.</li>
            <li>✓ Know your emergency duties.</li>
            <li>✓ Know how to correctly don a lifejacket.</li>
            <li>✓ Follow the emergency instructions displayed on board.</li>
            <li>✓ Assist passengers when assigned passenger-safety duties.</li>
            <li>✓ Keep passageways and stairways orderly during emergencies.</li>
          </ul>
        </section>

        {/* EXTRA EQUIPMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.8 Extra Equipment & Survival
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout lists additional items that may assist survival
            when circumstances and time permit.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Blankets",
              "Warm Clothes",
              "Food",
              "Notebook & Pencil",
              "Waterproof Watch",
              "Torches",
              "Batteries",
              "Pyrotechnics",
              "Plastic Bags",
              "Extra Water",
              "Fuel",
              "Lubricating Oil",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 p-4">
            <p className="font-semibold leading-7 text-amber-900">
              Cold exposure is an important survival hazard. The
              handout emphasizes drinking water before abandonment and
              wearing additional warm clothing.
            </p>
          </div>
        </section>

        {/* ABANDONMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2.9 Abandoning Ship – Complications
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Abandonment places the crew under considerable stress.
            Personnel should avoid panic, remain organized, help one
            another and obey the officer in charge.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Heavy Weather
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Strong winds and heavy weather can make launching and
                handling survival craft difficult.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Fire or Toxic Fumes
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The handout advises moving the lifeboat to windward of
                the casualty when there is danger from toxic fumes or
                burning oil on the water.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Missing Personnel
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A survival craft may not have its full complement during
                a rapidly developing emergency.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Leadership
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The person in charge of the survival craft must maintain
                clear command and keep safety as the primary concern.
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
            <strong>Alarm → Muster → Know your duty → Follow the
            Master's instructions → Control the emergency → Prepare
            survival equipment → Avoid panic.</strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-01"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Safety & Survival
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-03"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Evacuation →
          </Link>

        </div>

      </div>
    </main>
  );
}