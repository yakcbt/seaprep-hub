"use client";

import Link from "next/link";

export default function PSSRTopic04() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 04
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Observe Safe Working Practices
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Basic shipboard safety, personal protective equipment,
            safe working procedures and prevention of accidents.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🦺 Safe Working Practices
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Working on board a ship can involve hazards. Seafarers must
            follow safe working procedures, instructions and precautions
            while carrying out their duties.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Safety First
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Before starting any job, understand the work, identify the
              hazards and use the required safety precautions.
            </p>
          </div>
        </section>

        {/* BASIC RULES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ✅ Basic Safety Rules
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Follow shipboard safety procedures and instructions.",
              "Understand the hazards before starting a job.",
              "Wear the correct personal protective equipment.",
              "Use the correct tools and equipment for the job.",
              "Keep the workplace clean and tidy.",
              "Do not operate equipment without proper knowledge or authorization.",
              "Report unsafe conditions to the responsible officer.",
              "Never take unnecessary risks while working.",
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

        {/* PPE */}
        <section className="rounded-2xl bg-yellow-50 p-6">
          <h2 className="text-2xl font-bold text-yellow-900">
            👷 Personal Protective Equipment (PPE)
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Suitable personal protective equipment should be used
            according to the type of work and the hazards involved.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["⛑️", "Safety Helmet"],
              ["🥽", "Eye Protection"],
              ["🧤", "Safety Gloves"],
              ["🥾", "Safety Shoes"],
              ["🎧", "Hearing Protection"],
              ["🦺", "Protective Clothing"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-xl bg-white p-5 text-center shadow-sm"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 font-bold text-slate-800">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-yellow-100 p-4 font-semibold text-yellow-900">
            PPE does not remove the hazard. It provides protection while
            safe working procedures are followed.
          </div>
        </section>

        {/* HOUSEKEEPING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🧹 Good Housekeeping
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Keeping working areas clean and orderly is an important part
            of shipboard safety.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Keep decks and working areas clear.",
              "Remove unnecessary obstructions.",
              "Clean spilled material promptly.",
              "Keep tools in their proper places.",
              "Keep access and escape routes clear.",
              "Dispose of waste according to shipboard procedures.",
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

        {/* TOOLS */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🔧 Tools & Equipment
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Equipment should be used only for its intended purpose and
            according to the proper operating procedure.
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p>• Use the correct tool for the job.</p>
            <p>• Check equipment before use.</p>
            <p>• Do not use obviously damaged tools.</p>
            <p>• Follow operating instructions.</p>
            <p>• Return tools to their correct place after work.</p>
          </div>
        </section>

        {/* WORKING ALOFT */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🪜 Working Aloft
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Working at height requires special care because a fall can
            result in serious injury.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-orange-900">
              Basic precautions
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Follow the ship&apos;s safe working procedure.</p>
              <p>• Use appropriate fall-protection equipment.</p>
              <p>• Check access arrangements before starting work.</p>
              <p>• Keep tools and equipment properly secured.</p>
              <p>• Follow instructions of the responsible officer.</p>
            </div>
          </div>
        </section>

        {/* ENCLOSED SPACE */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Enclosed Spaces
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Enclosed spaces can present serious hazards. Entry must not
            be made casually or without following the ship&apos;s
            established safety procedure.
          </p>

          <div className="mt-5 rounded-xl bg-red-900 p-5 text-center text-white">
            <p className="text-xl font-bold">
              Never enter an enclosed space without proper authorization
              and safety precautions.
            </p>
          </div>
        </section>

        {/* HOT WORK */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🔥 Hot Work
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Hot work can introduce fire and other hazards. The required
            shipboard precautions and authorization must be followed
            before starting such work.
          </p>

          <div className="mt-5 rounded-xl bg-orange-50 p-5">
            <p className="font-bold text-orange-900">
              Examples of hot work
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Work involving heat, flame or sparks requires particular
              attention to fire prevention.
            </p>
          </div>
        </section>

        {/* ELECTRICAL SAFETY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ⚡ Electrical Safety
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Electrical equipment must be handled carefully and only by
            personnel who are permitted and competent to carry out the
            work.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Do not use damaged electrical equipment.",
              "Follow safety instructions.",
              "Keep electrical equipment protected from unsafe conditions.",
              "Report defects immediately.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-4 font-semibold text-slate-700"
              >
                ⚡ {item}
              </div>
            ))}
          </div>
        </section>

        {/* LIFTING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🏗️ Lifting Operations
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Lifting operations can be hazardous. Personnel should remain
            alert and follow the instructions of the person responsible
            for the operation.
          </p>

          <div className="mt-5 rounded-xl bg-red-50 p-5">
            <p className="font-bold text-red-900">
              Important Safety Point
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              Keep clear of suspended loads.
            </p>
          </div>
        </section>

        {/* SIGNS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚧 Safety Signs & Warnings
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Safety signs, notices and warnings provide important
            information about hazards and required precautions.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-4">
              <p className="font-bold text-red-900">⛔ Prohibition</p>
              <p className="mt-1 text-sm text-slate-600">
                Indicates an action that must not be carried out.
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-4">
              <p className="font-bold text-yellow-900">⚠️ Warning</p>
              <p className="mt-1 text-sm text-slate-600">
                Draws attention to a hazard.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">🔵 Mandatory</p>
              <p className="mt-1 text-sm text-slate-600">
                Indicates a required safety action.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="font-bold text-green-900">🟢 Safe Condition</p>
              <p className="mt-1 text-sm text-slate-600">
                Identifies safety-related locations or information.
              </p>
            </div>
          </div>
        </section>

        {/* RESPONSIBILITY */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            👨‍✈️ Personal Responsibility for Safety
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Safe working depends on the actions of every person on board.
            Seafarers should remain alert, follow instructions and avoid
            unsafe acts.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Work safely",
              "Use required PPE",
              "Follow procedures",
              "Report hazards",
              "Protect yourself",
              "Protect fellow crew members",
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

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • Follow <strong>safe working procedures</strong> at all
              times.
            </p>

            <p>
              • Use suitable <strong>PPE</strong> for the work being
              performed.
            </p>

            <p>
              • Keep the workplace <strong>clean and tidy</strong>.
            </p>

            <p>
              • Use the <strong>correct tools and equipment</strong>.
            </p>

            <p>
              • Working aloft requires appropriate{" "}
              <strong>fall protection</strong>.
            </p>

            <p>
              • Enclosed-space entry requires proper{" "}
              <strong>authorization and precautions</strong>.
            </p>

            <p>
              • Hot work requires appropriate{" "}
              <strong>fire-safety precautions</strong>.
            </p>

            <p>
              • Keep clear of <strong>suspended loads</strong>.
            </p>

            <p>
              • Report unsafe conditions and defects to the{" "}
              <strong>responsible officer</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-03"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Marine Pollution
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-05"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Effective Communication →
          </Link>
        </div>

      </div>
    </main>
  );
}