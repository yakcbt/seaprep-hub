"use client";

import Link from "next/link";

export default function PSSRTopic02() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 02
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Comply with Emergency Procedures
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Emergency alarms, actions by crew, abandon ship, fire,
            contingency plans, muster list and muster stations.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚨 Emergency Procedures
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Emergency signals and alarms are provided throughout a ship
            to notify the crew about dangerous situations that may arise
            from different types of emergencies.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Emergency alarms may be audible as well as visual so that
            personnel can receive the warning in different working
            locations on board.
          </p>
        </section>

        {/* GENERAL ALARM */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <p className="text-sm font-bold uppercase tracking-widest text-red-700">
            Important Exam Point
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-900">
            🔔 General Emergency Alarm
          </h2>

          <div className="mt-5 rounded-xl bg-white p-6 text-center">
            <p className="text-lg font-semibold text-slate-600">
              General Emergency Alarm
            </p>

            <p className="mt-2 text-3xl font-extrabold text-red-900">
              7 SHORT + 1 LONG
            </p>

            <p className="mt-2 text-slate-600">
              Bell / ship&apos;s horn
            </p>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            The general alarm warns the crew that an emergency has
            occurred, such as fire, collision, grounding or another
            situation which may lead to abandoning ship.
          </p>

          <p className="mt-3 font-semibold text-red-900">
            The handout states that the general alarm system activation
            point is located on the navigation bridge.
          </p>
        </section>

        {/* ACTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👨‍✈️ Action After General Alarm
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Proceed to the designated muster station.",
              "Listen to the Public Address (PA) system for information about the emergency.",
              "Follow the instructions and duties given in the muster list.",
              "Once the nature of the emergency is known, regroup according to the assigned squad.",
              "Take corrective action according to the muster plan.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-cyan-50 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-900 font-bold text-white">
                  {index + 1}
                </span>

                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TYPES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ⚠️ Types of Emergency
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout lists a range of emergency situations,
            including:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Abandon ship",
              "Collision",
              "Fire",
              "High winds and/or waves",
              "Rescue / salvage operation",
              "Vessel in distress / towing",
              "Cargo system leaks",
              "LNG tank leaks",
              "Loading arm leaks",
              "Grounding",
              "Loss of power supplies",
              "Equipment failure",
              "Loss of instrumentation",
              "Cargo tank overfilling",
              "Structural damage during loading / unloading",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* ABANDON SHIP */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🛟 Abandon Ship
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            When an emergency goes out of control and the ship is no
            longer safe for the crew, the order to abandon ship is
            given verbally by the Master.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-orange-900">
              Action after abandon ship is announced:
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Carry lifejacket / immersion suit to the designated muster station.</p>
              <p>• Carry additional items such as blanket, ration or water if assigned in the muster list.</p>
              <p>• Avoid taking a longer route to the muster station.</p>
              <p>• Wait for the Master&apos;s order to abandon ship.</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-red-100 p-4 text-center font-bold text-red-900">
            Do not abandon ship until ordered by the Master.
          </div>
        </section>

        {/* FIRE */}
        <section className="rounded-2xl bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🔥 Fire Emergency
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            When a crew member detects a fire, the handout says the
            alarm should be raised by pressing the nearest fire switch
            or loudly and continuously shouting:
          </p>

          <div className="mt-5 rounded-xl bg-red-900 p-5 text-center text-white">
            <p className="text-2xl font-extrabold">
              FIRE! FIRE! FIRE!
            </p>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            The fire alarm is described as continuous ringing of the
            ship&apos;s electrical bell or continuous sounding of the
            ship&apos;s horn.
          </p>

          <div className="mt-4 rounded-xl bg-white p-4 font-semibold text-red-900">
            Fire signal: continuous blast of the whistle or electrical
            bell for not less than 10 seconds.
          </div>
        </section>

        {/* CONTINGENCY PLAN */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            📋 Shipboard Contingency Plan
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Effective emergency action is possible when procedures are
            pre-planned, practical and frequently exercised.
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            A contingency plan provides guidelines and instructions to
            help the crew respond efficiently to emergency situations.
          </p>

          <h3 className="mt-6 text-lg font-bold text-cyan-300">
            Main aims of an emergency plan
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Rescue and treatment of casualties",
              "Safeguarding others",
              "Minimizing damage to property and environment",
              "Bringing the incident under control",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/10 p-4 font-semibold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONTINGENCY SITUATIONS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-cyan-900">
            Contingency Plans Should Include Advice On
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            {[
              "🔥 Fire",
              "💥 Collision",
              "⚓ Grounding",
              "🛢️ Cargo Spill / Leak",
              "🩹 Personnel Casualty",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-cyan-50 p-4 text-center font-bold text-cyan-900"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            These plans should be used during emergency drills and
            exercises so that crew members know what to do and how to
            use the required safety equipment.
          </p>
        </section>

        {/* MUSTER LIST */}
        <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            📄 Muster List
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The muster list specifies the functions, duties and
            responsibilities assigned to each crew member in case of
            an emergency.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The handout states that the muster list must be displayed
            at conspicuous locations such as the bridge, engine room
            and accommodation alleyways.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-blue-900">
              Regulatory reference in the handout
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              SOLAS Chapter III — Regulations 8 and 37
            </p>
          </div>
        </section>

        {/* MUSTER STATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👥 Muster Station
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Every ship has designated muster stations. These are
            meeting points where crew members assemble during an
            emergency.
          </p>

          <div className="mt-5 rounded-xl bg-yellow-50 p-5">
            <p className="font-bold text-yellow-900">
              Remember
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              On hearing the general emergency alarm, proceed to your
              designated muster station and carry out the duties
              assigned in the muster list.
            </p>
          </div>
        </section>

        {/* PERSONAL SAFETY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🦺 Personal Safety During Emergency
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Crew members must know their assigned emergency duties,
            muster station and the correct use of personal safety
            equipment.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The handout emphasizes familiarity with the ship&apos;s
            contingency plans and with equipment that may have to be
            used during an emergency.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • General Emergency Alarm ={" "}
              <strong>7 short + 1 long blast</strong>.
            </p>

            <p>
              • General alarm activation point stated in the handout ={" "}
              <strong>Navigation Bridge</strong>.
            </p>

            <p>
              • After general alarm → proceed to{" "}
              <strong>designated muster station</strong>.
            </p>

            <p>
              • Listen to the <strong>PA system</strong> for the type
              of emergency.
            </p>

            <p>
              • Abandon ship order is given verbally by the{" "}
              <strong>Master</strong>.
            </p>

            <p>
              • Fire discovered → raise alarm / shout{" "}
              <strong>FIRE! FIRE! FIRE!</strong>
            </p>

            <p>
              • Muster List = emergency{" "}
              <strong>duties and responsibilities</strong> of crew.
            </p>

            <p>
              • Muster Station = designated{" "}
              <strong>emergency meeting point</strong>.
            </p>

            <p>
              • Emergency plans include fire, collision, grounding,
              cargo spill/leak and personnel casualty.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-01"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Introduction
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-03"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Marine Pollution →
          </Link>
        </div>

      </div>
    </main>
  );
}