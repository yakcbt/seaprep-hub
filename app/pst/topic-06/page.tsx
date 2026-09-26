"use client";

import Link from "next/link";

export default function PSTTopic06() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 06
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Survival at Sea
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Dangers to survivors and the best use of survival craft
            facilities after abandoning ship.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* PREPARATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Be Prepared Before an Emergency
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Every crew member should become familiar with emergency
            arrangements as soon as possible after joining a ship.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Read the ship's muster list.",
              "Know your emergency duties.",
              "Know the shortest route from your cabin to the muster station.",
              "Know the general emergency and abandon-ship instructions.",
              "Know your allotted survival craft.",
              "Know your fire station and fire duties.",
              "Locate lifeboats and liferafts.",
              "Locate fire alarm points.",
              "Locate portable fire extinguishers.",
              "Locate fire hoses and hydrants.",
              "Keep warm and waterproof clothing readily accessible.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-blue-50 p-4"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPORTANT */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Important Survival Principle
          </h2>

          <p className="mt-4 text-xl font-bold text-yellow-300">
            Know what to do before the emergency happens.
          </p>

          <p className="mt-3 leading-7 text-blue-100">
            During a real emergency there may be no time to search for
            warm clothing, lifejackets or read the muster list.
          </p>
        </section>

        {/* SURVIVAL CRAFT SAFETY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Survival Craft Safety
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <h3 className="font-bold text-red-900">
                No Smoking
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Smoking should not be permitted in survival craft.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <h3 className="font-bold text-red-900">
                Do Not Paint HRU
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Do not paint liferaft or lifeboat release arrangements
                or the Hydrostatic Release Unit.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <h3 className="font-bold text-red-900">
                Liferaft Painter
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Do not unnecessarily pull the liferaft painter from its
                container.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <h3 className="font-bold text-red-900">
                Liferaft Container
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Do not stand on or roll the liferaft container.
              </p>
            </div>

          </div>
        </section>

        {/* BOAT NUMBER */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            Remember Lifeboat Numbering
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5 text-center">
              <p className="text-3xl font-bold text-blue-900">ODD</p>
              <p className="mt-2 font-semibold text-slate-700">
                Starboard
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 text-center">
              <p className="text-3xl font-bold text-blue-900">EVEN</p>
              <p className="mt-2 font-semibold text-slate-700">
                Port
              </p>
            </div>
          </div>
        </section>

        {/* DANGERS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            6.1 Dangers to Survivors
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Survivors in the water may face several hazards. Correct
            actions can improve their chances of survival and rescue.
          </p>
        </section>

        {/* TRAPPED */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Danger of Getting Trapped
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout advises survivors to remain preferably on the
            windward side of a stopped and drifting casualty and to get
            clear of the immediate vicinity of the vessel after entering
            the water.
          </p>

          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-900">
              Float quietly in your lifejacket and try to reach a
              survival craft as soon as possible.
            </p>
          </div>
        </section>

        {/* HUDDLE */}
        <section className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Huddle Together
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When several survivors are in the water, the handout advises
            them to huddle together. This helps conserve warmth and makes
            the group more conspicuous to rescuers.
          </p>
        </section>

        {/* SEA ANIMALS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Sharks & Other Sea Animals
          </h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>✓ Remain calm.</p>
            <p>✓ Keep the animal in sight if possible.</p>
            <p>✓ Cover your limbs where possible.</p>
            <p>
              ✓ If in a group, huddle together in a circle facing
              outward.
            </p>
            <p>✓ Get out of the water as soon as possible.</p>
          </div>
        </section>

        {/* OIL FIRE */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            Oil Fire on the Water
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            An oil fire around a casualty creates an additional danger
            to survivors. The PST handout stresses getting clear of the
            fire area and protecting the eyes, nose and mouth while
            escaping.
          </p>
        </section>

        {/* BEST USE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            6.2 Best Use of Survival Craft Facilities
          </h2>

          <div className="mt-5 rounded-xl bg-blue-50 p-5">
            <p className="text-lg font-bold text-blue-900">
              “The ship herself is always your No. 1 lifesaving unit.”
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Abandonment should take place only after efforts to save
              the vessel have failed and the order to abandon has been
              given.
            </p>
          </div>
        </section>

        {/* AFTER ABANDONMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            After Abandonment
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Keep survival craft together when practicable.",
              "Bring EPIRB and SART to the survival craft if time permits.",
              "Use GMDSS portable radios when available.",
              "Use the sea anchor to help control the survival craft.",
              "Check survival equipment and read its instructions.",
              "Search for survivors in the water.",
              "Use the rescue quoit and line to recover survivors.",
              "Keep equipment securely lashed.",
              "Keep water containers tightly closed.",
              "Keep the survival craft bailed out and as dry as possible.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISTRESS EQUIPMENT */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Emergency Location Equipment
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-2xl font-bold text-yellow-300">
                EPIRB
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Emergency Position Indicating Radio Beacon
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-2xl font-bold text-yellow-300">
                SART
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Search and Rescue Transponder
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-2xl font-bold text-yellow-300">
                GMDSS
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Portable communication equipment
              </p>
            </div>

          </div>
        </section>

        {/* LIFERAFT STABILITY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Liferaft Stability in Heavy Weather
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When the sea anchor is streamed in heavy weather, the
            handout advises positioning the majority of survivors on the
            side where the sea anchor is attached to help prevent the
            liferaft from capsizing.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Occupants should normally sit with their feet towards the
            centre and use the internal hand lines for support.
          </p>
        </section>

        {/* CAPSIZED RAFT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Uprighting a Capsized Liferaft
          </h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>1. Turn the canopy towards the windward side.</p>
            <p>2. Stand on the gas-cylinder side.</p>
            <p>3. Pull the righting strap using your body weight.</p>
            <p>
              4. As the raft comes upright, keep clear from underneath
              it.
            </p>
          </div>
        </section>

        {/* HYPOTHERMIA */}
        <section className="rounded-2xl border-l-4 border-cyan-500 bg-cyan-50 p-6">
          <h2 className="text-2xl font-bold text-cyan-900">
            Hypothermia
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout identifies hypothermia as a major danger after
            shipwreck and cold-water exposure.
          </p>

          <h3 className="mt-5 font-bold text-slate-900">
            Symptoms Listed in the Handout
          </h3>

          <div className="mt-3 space-y-2 text-slate-700">
            <p>• Slowing of physical and mental response</p>
            <p>• Irritability or unreasonable behaviour</p>
            <p>• Cramps or shivering</p>
            <p>• Unsteadiness</p>
            <p>• Difficulty with speech or vision</p>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Know your duties → Keep warm → Stay together → Get clear
              of danger → Board survival craft → Use sea anchor → Keep
              craft dry and stable → Use EPIRB/SART → Conserve energy →
              Wait for rescue.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-05"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Life-Saving Appliances
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-07"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Helicopter Assistance →
          </Link>

        </div>

      </div>
    </main>
  );
}