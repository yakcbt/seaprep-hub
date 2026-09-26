"use client";

import Link from "next/link";

export default function FPFFTopic15() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 15
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Use of Breathing Apparatus
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            SCBA construction, uses, working duration, donning,
            lifeline signals and emergency breathing apparatus.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* SCBA INTRO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            😷 SCBA – Self Contained Breathing Apparatus
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout identifies two major application areas for
            SCBA:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-5">
              <div className="text-3xl">🔥</div>
              <h3 className="mt-2 font-bold text-red-900">
                Fire Fighting
              </h3>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <div className="text-3xl">🏭</div>
              <h3 className="mt-2 font-bold text-blue-900">
                Industrial Use
              </h3>
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            The handout also mentions medical use as another
            application coming into practice.
          </p>
        </section>

        {/* FIRE FIGHTING SCBA */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            🔥 SCBA for Fire Fighting
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            For fire fighting, the design emphasis is on heat and
            flame resistance.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The layout of the breathing set should not interfere with
            the firefighter&apos;s ability to carry a rescued person
            over the shoulders.
          </p>
        </section>

        {/* PASS ADSU */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🚨 PASS / ADSU
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-xl font-bold text-red-300">
                PASS
              </p>
              <p className="mt-2 text-slate-300">
                Personal Alert Safety System
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-xl font-bold text-yellow-300">
                ADSU
              </p>
              <p className="mt-2 text-slate-300">
                Automatic Distress Signal Unit
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-300">
            These units emit a distinctive high-pitched alarm to help
            locate a firefighter in distress.
          </p>

          <div className="mt-4 rounded-xl bg-red-900 p-4 font-semibold">
            The handout states that automatic activation may occur if
            movement is not sensed for typically 15–30 seconds.
          </div>
        </section>

        {/* OPEN CIRCUIT SCBA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Open-Circuit Rescue / Firefighter SCBA
          </h2>

          <p className="mt-3 text-slate-700">
            The handout lists the following main parts:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Full face mask",
              "Regulator",
              "Air cylinder",
              "Cylinder pressure gauge",
              "Harness",
              "Adjustable shoulder straps",
              "Waist belt",
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

        {/* CABA PARTS */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            CABA Set – Parts Listed in the Handout
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Cylinder",
              "Pressure gauge",
              "Main valve",
              "Reducing valve",
              "Supply hose",
              "Pressure-gauge line",
              "Back plate",
              "Shoulder straps",
              "Waist strap",
              "Face mask",
              "Demand valve",
              "Warning whistle",
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

        {/* PRESSURE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            📊 CABA Pressure & Working Time
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-green-50 p-5 text-center">
              <p className="text-sm font-bold text-green-700">
                FULL CHARGE
              </p>
              <p className="mt-2 text-4xl font-bold text-green-900">
                200 bar
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-5 text-center">
              <p className="text-sm font-bold text-yellow-700">
                WARNING WHISTLE
              </p>
              <p className="mt-2 text-4xl font-bold text-yellow-900">
                50 bar
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-5 text-center">
              <p className="text-sm font-bold text-red-700">
                TIME LEFT
              </p>
              <p className="mt-2 text-4xl font-bold text-red-900">
                8 min
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-xl bg-slate-100 p-5">
            <p className="font-semibold text-slate-800">
              Normal working condition: 35 minutes
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              Hard working condition: 20 minutes
            </p>
          </div>
        </section>

        {/* CYLINDER SIZES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Air Cylinder Sizes
          </h2>

          <p className="mt-3 text-slate-700">
            Chapter 15 lists three standard cylinder sizes:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {["4 Litre", "6 Litre", "6.8 Litre"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-red-50 p-5 text-center text-2xl font-bold text-red-900"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* DURATION FORMULA */}
        <section className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
            Important Numerical
          </p>

          <h2 className="mt-2 text-2xl font-bold text-orange-900">
            ⏱️ SCBA Duration Formula
          </h2>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-lg font-bold text-slate-900">
              Duration = (Volume × Pressure ÷ 40) − 10
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Duration is in minutes.
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-white p-5">
            <h3 className="font-bold text-orange-900">
              Handout Example
            </h3>

            <p className="mt-3 text-slate-700">
              6 litre cylinder at 300 bar:
            </p>

            <p className="mt-3 text-xl font-bold text-slate-900">
              (6 × 300 ÷ 40) − 10 = 35 minutes
            </p>
          </div>

          <p className="mt-4 leading-7 text-slate-700">
            The handout notes that fitness and level of exertion can
            reduce actual usable working time by approximately
            25%–50%.
          </p>
        </section>

        {/* CYLINDER */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Air Cylinder
          </h2>

          <p className="mt-3 text-slate-700">
            The handout states that air cylinders may be made of:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {["Aluminium", "Steel", "Composite Construction"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-800"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-5">
              <p className="font-bold text-blue-900">
                Hydrostatic Test
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-900">
                Every 5 Years
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="font-bold text-green-900">
                Composite Cylinder
              </p>
              <p className="mt-2 text-3xl font-bold text-green-900">
                15 Years
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Service life stated in Chapter 15
              </p>
            </div>
          </div>
        </section>

        {/* DONNING */}
        <section className="rounded-2xl border-l-4 border-green-600 bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            👨‍🚒 CABA Donning Procedure
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Check face seal for cracks / damage.",
              "Check cylinder pressure before donning the set.",
              "Take out the face mask and hang it around the neck.",
              "Don the breathing apparatus set.",
              "Put on the face mask when entering the compartment.",
              "Make sure your record is written with the attendant.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-white p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LIFELINE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🪢 Lifeline Signals
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When a person enters wearing a CABA set, communication can
            be maintained using lifeline signals.
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Signal</th>
                  <th className="p-3">By</th>
                  <th className="p-3">Meaning</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-3 font-bold">1 Pull</td>
                  <td className="p-3">Attendant / Wearer</td>
                  <td className="p-3">
                    How are you? / I am fine
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">2 Pulls</td>
                  <td className="p-3">Wearer</td>
                  <td className="p-3">
                    I want to move ahead — slack the line
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-bold">3 Pulls</td>
                  <td className="p-3">Attendant / Wearer</td>
                  <td className="p-3">
                    Time over — come back / wearer wants to come out
                  </td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="p-3 font-bold">
                    Continuous Pulling
                  </td>
                  <td className="p-3">Attendant / Wearer</td>
                  <td className="p-3">
                    Emergency — come out immediately / take me out
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ELSA */}
        <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-2xl font-bold text-yellow-900">
            🚪 ELSA – Emergency Life Support Apparatus
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes ELSA as life-saving equipment used
            for emergency escape from smoke.
          </p>

          <div className="mt-5 rounded-xl bg-red-100 p-5 text-center">
            <p className="text-lg font-bold text-red-900">
              NOT TO BE USED FOR FIRE FIGHTING
            </p>
          </div>
        </section>

        {/* FABA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Forced Air Breathing Apparatus
          </h2>

          <p className="mt-3 text-slate-700">
            The handout describes its use for entering:
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-4 font-semibold text-blue-900">
              Smoke-filled compartments
            </div>

            <div className="rounded-xl bg-blue-50 p-4 font-semibold text-blue-900">
              Enclosed spaces
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            It includes a face mask, insulated hose and bellows /
            foot pump supplying air to the mask.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              <strong>SCBA:</strong> Self Contained Breathing Apparatus
            </p>

            <p>
              <strong>CABA full charge:</strong> 200 bar
            </p>

            <p>
              <strong>Warning whistle:</strong> 50 bar
            </p>

            <p>
              <strong>Time after warning:</strong> 8 minutes in the
              earlier handout section
            </p>

            <p>
              <strong>Standard cylinder sizes:</strong> 4 L, 6 L and
              6.8 L
            </p>

            <p>
              <strong>Duration:</strong> (Volume × Pressure ÷ 40) − 10
            </p>

            <p>
              <strong>Hydrostatic test:</strong> Every 5 years
            </p>

            <p>
              <strong>PASS:</strong> Personal Alert Safety System
            </p>

            <p>
              <strong>ADSU:</strong> Automatic Distress Signal Unit
            </p>

            <p>
              <strong>ELSA:</strong> Emergency escape only — not for
              fire fighting
            </p>
          </div>
        </section>

        {/* COURSE COMPLETE */}
        <section className="rounded-2xl bg-red-900 p-7 text-center text-white">
          <div className="text-4xl">🎓</div>

          <h2 className="mt-3 text-2xl font-bold">
            FPFF Topics Completed
          </h2>

          <p className="mt-2 text-red-100">
            You have reached the final theory topic of the FPFF course.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/fpff/topic-14"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Fixed Installations
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/practice-cbt"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Start FPFF Practice CBT →
          </Link>
        </div>

      </div>
    </main>
  );
}