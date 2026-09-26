"use client";

import Link from "next/link";

export default function PSTTopic03() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 03
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Evacuation
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Preparation for abandoning ship, prevention of panic,
            crew responsibilities and safe evacuation procedures.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Evacuation
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Evacuation becomes necessary when an emergency can no longer
            be controlled and remaining on board becomes unsafe.
            Preparation, discipline, leadership and correct use of
            survival equipment are essential during abandonment.
          </p>
        </section>

        {/* LAST RESORT */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            3.1 Abandoning Ship – Last Resort
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Every reasonable effort should first be made to save the
            vessel. Abandonment is considered only when those efforts
            have failed and remaining on board is no longer safe.
          </p>

          <div className="mt-5 rounded-xl bg-white p-4">
            <p className="font-bold text-red-800">
              Important Principle
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              The ship itself is the primary lifesaving platform at sea.
              Premature and unnecessary abandonment should therefore be
              avoided.
            </p>
          </div>
        </section>

        {/* PERSONAL PREPARATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3.2 Personal Preparation for Abandoning Ship
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When the general emergency alarm is followed by emergency
            instructions, crew members should prepare themselves and
            proceed to their designated muster stations.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Listen carefully to emergency announcements and instructions.",
              "Proceed to the assigned muster station.",
              "Put on additional warm clothing when circumstances permit.",
              "Collect and correctly wear the lifejacket.",
              "Take the immersion suit when required.",
              "Attend the muster and head count.",
              "Listen to further instructions from the person in charge.",
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

        {/* PREVENT PANIC */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3.3 Need to Prevent Panic
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            An abandon-ship emergency may involve mental stress,
            confusion and shock. Training and emergency preparedness
            help crew members understand what they must do and reduce
            the risk of panic.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-green-50 p-4">
              <h3 className="font-bold text-green-900">
                Maintain Discipline
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Carry out the evacuation in an orderly manner and follow
                instructions from the responsible officers.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <h3 className="font-bold text-green-900">
                Maintain Self-Control
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Crew and passengers should remain calm, courageous and
                cooperative.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <h3 className="font-bold text-green-900">
                Help Each Other
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Crew members should assist one another in carrying out
                their assigned emergency duties.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <h3 className="font-bold text-green-900">
                Training & Drills
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Regular drills improve confidence and help personnel know
                what actions are expected during a real emergency.
              </p>
            </div>

          </div>
        </section>

        {/* PASSENGERS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3.4 Crew Duties to Passengers
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            On passenger ships, crew members have important
            responsibilities for assisting passengers during emergencies
            and evacuation.
          </p>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>✓ Warn passengers about the emergency.</li>
            <li>✓ Direct passengers towards their muster stations.</li>
            <li>✓ Assist passengers in correctly donning lifejackets.</li>
            <li>✓ Maintain order in passageways and stairways.</li>
            <li>✓ Control passenger movement.</li>
            <li>✓ Explain important emergency and survival procedures.</li>
            <li>✓ Assist children, elderly persons and others requiring help.</li>
          </ul>
        </section>

        {/* SURVIVAL CRAFT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3.5 Crew Duties – Launching Survival Craft
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Crew assigned to survival craft must carry out the duties
            specified in the muster list and follow the instructions of
            the responsible officer.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Prepare Craft
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Prepare the assigned lifeboat or liferaft for launching
                as directed.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Equipment
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ensure required survival equipment and arrangements are
                ready for use.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Embarkation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Assist personnel during orderly embarkation into the
                survival craft.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Follow Command
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Follow instructions from the survival craft officer or
                person in charge.
              </p>
            </div>

          </div>
        </section>

        {/* MASTER ORDER */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            3.6 Master's Order to Abandon Ship
          </h2>

          <p className="mt-3 leading-7 text-blue-100">
            The decision to abandon ship is made by the Master. Crew
            members must not abandon the vessel merely because the
            general emergency alarm has sounded.
          </p>

          <div className="mt-5 rounded-xl bg-white/10 p-5">
            <p className="text-lg font-bold text-yellow-300">
              Remember
            </p>

            <p className="mt-2 leading-7 text-white">
              General Emergency Alarm means muster and carry out your
              emergency duties. Abandon ship only when instructed by
              the Master.
            </p>
          </div>
        </section>

        {/* MEANS OF SURVIVAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3.7 Means of Survival
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Survival after abandonment depends on correct use of the
            lifesaving equipment provided on board and disciplined
            actions by everyone involved.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              "Lifeboat",
              "Liferaft",
              "Rescue Boat",
              "Lifejacket",
              "Immersion Suit",
              "Lifebuoy",
              "TPA",
              "Emergency Equipment",
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
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Hear the alarm → Listen to instructions → Wear lifejacket
              → Proceed to muster station → Head count → Prepare survival
              craft → Wait for Master's abandon-ship order → Evacuate in
              an orderly manner.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-02"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Emergency Situations
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-04"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Survival Craft →
          </Link>

        </div>

      </div>
    </main>
  );
}