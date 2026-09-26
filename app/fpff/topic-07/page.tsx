"use client";

import Link from "next/link";

export default function FPFFTopic07() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 07
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Patrol System
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Fire patrol arrangements, duties, frequency and areas to be
            checked for early identification of fire hazards.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Fire Patrol System
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout refers to SOLAS Regulation II-2/7.8 for an
            efficient fire patrol system on specified classes of
            passenger ships.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The ship&apos;s organisation should ensure that patrolling
            is efficient, taking into account the size and type of ship.
            Instructions for fire patrol should be included in the
            ship&apos;s standing orders or ISM procedures.
          </p>
        </section>

        {/* PURPOSE */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Main Purpose
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Detect Fire Hazards Early
          </h2>

          <p className="mt-3 leading-7 text-red-100">
            Regular patrols help identify potential fire sources and
            conditions that may cause or assist the spread of fire.
          </p>
        </section>

        {/* PORT PATROL */}
        <section className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            ⚓ Fire Patrol in Port
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The patrol system should be maintained when ships in
            service are in port.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Every part of the ship that is accessible to the fire
            patrol should be visited regularly.
          </p>
        </section>

        {/* DETECTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            👀 Detection by Sight & Smell
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Openings to holds, stores and baggage rooms should not be
            overlooked during patrol.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-orange-50 p-5 text-center">
              <div className="text-3xl">👁️</div>
              <h3 className="mt-2 font-bold text-orange-900">
                Sight
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Look for signs of fire or abnormal conditions.
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-5 text-center">
              <div className="text-3xl">👃</div>
              <h3 className="mt-2 font-bold text-yellow-900">
                Smell
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Fire may also be detected by smell.
              </p>
            </div>

          </div>
        </section>

        {/* PASSENGER VESSELS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Passenger Vessel Fire Patrol
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout states that Regulation 7.8.1 applies to certain
            passenger-vessel situations, including:
          </p>

          <div className="mt-5 space-y-3">

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">
                More than 25 berthed passengers or more than 50
                passengers.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">
                More than 100 berthed passengers on a voyage during
                which the vessel is more than 15 nautical miles from
                the point of departure or 5 nautical miles from shore.
              </p>
            </div>

          </div>
        </section>

        {/* HOURLY */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-900">
            ⏱️ Patrol Frequency
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            For the passenger-vessel fire patrol described in the
            handout, patrols are to be performed
            <strong> at least once every hour</strong> and include a
            patrol of the entire vessel.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-3xl font-bold text-red-900">
              At Least Once Every Hour
            </p>
          </div>
        </section>

        {/* OTHER SHIPS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Fire Patrol on Other Ships
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout also states that a fire patrol system should be
            maintained on other types of ships.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <div className="text-2xl">⚓</div>
              <p className="mt-2 font-bold text-blue-900">
                In Port
              </p>
            </div>

            <div className="rounded-xl bg-cyan-50 p-4 text-center">
              <div className="text-2xl">🌊</div>
              <p className="mt-2 font-bold text-cyan-900">
                At Sea
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-4 text-center">
              <div className="text-2xl">🌙</div>
              <p className="mt-2 font-bold text-slate-900">
                Especially at Night
              </p>
            </div>

          </div>
        </section>

        {/* DUTIES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔍 Duties of Fire Patrol
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The basic duties include taking regular rounds in different
            parts of the ship.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              "Main deck",
              "Cargo-space areas",
              "Accommodation",
              "Ship stores",
              "Public areas",
              "Potentially vulnerable areas",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-red-50 p-4"
              >
                <span className="font-bold text-red-700">✓</span>
                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* PUBLIC AREAS */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            Public Areas to Check
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Public places are areas normally occupied by the
            ship&apos;s crew and may contain potential fire hazards.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Mess Room",
              "Smoking Room",
              "Recreation Room",
              "Alleyways",
              "Laundry",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 font-semibold text-orange-900 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* WHAT TO LOOK FOR */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            What Should the Patrol Look For?
          </h2>

          <div className="mt-5 space-y-3">

            <div className="rounded-xl bg-white/10 p-4">
              🔥 Potential sources of fire
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              ⚠️ Conditions that may cause a fire
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              💨 Conditions that may facilitate the spread of fire
            </div>

          </div>

          <p className="mt-5 leading-7 text-slate-300">
            The basic purpose of the fire patrol system is to identify
            these hazards and eliminate or suppress them before a fire
            incident occurs.
          </p>
        </section>

        {/* SCHEDULING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Patrol Scheduling & Responsibility
          </h2>

          <div className="mt-5 space-y-3">

            {[
              "Fire patrol should be scheduled at regular intervals.",
              "The handout specifies hourly frequency especially when the vessel is in port.",
              "Fire patrol duties should be assigned to designated persons.",
              "The effectiveness of patrol duties and procedures should be evaluated regularly.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
              >
                <span className="font-bold text-green-600">✓</span>
                <p className="leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* RECORDS */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            📝 Fire Patrol Records
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Records of fire patrol duties should be maintained and
            inspected regularly.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Any unusual observation or matter causing concern should be
            taken seriously and proper action should be taken to reduce
            the chance of recurrence.
          </p>
        </section>

        {/* ALL CREW */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            👥 Responsibility of All Crew
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            All crew members should play their part in maintaining fire
            safety on board and support the personnel designated to
            carry out fire-patrol duties.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Fire patrol must be systematic • Check accessible areas
              regularly • Detect fire by sight and smell • Patrol main
              deck, cargo areas, accommodation, stores and public areas
              • Designated persons carry out patrols • Maintain patrol
              records • Investigate unusual observations • All crew
              support shipboard fire safety.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-06"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Constant Vigilance
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-08"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Fire Hazards →
          </Link>

        </div>

      </div>
    </main>
  );
}