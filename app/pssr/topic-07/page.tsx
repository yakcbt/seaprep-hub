"use client";

import Link from "next/link";

export default function PSSRTopic07() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 07
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Understand and Take Necessary Actions to Control Fatigue
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Understanding fatigue, its effects on shipboard safety and
            the importance of adequate rest and proper sleep.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            😴 Fatigue at Sea
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fatigue is an important shipboard safety issue. A fatigued
            seafarer may have reduced alertness and may not perform duties
            as effectively as required.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Important Safety Point
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              The PSSR handout identifies fatigue as one of the common
              and dangerous conditions that can occur on board ships.
            </p>
          </div>
        </section>

        {/* EFFECTS */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Effects of Fatigue
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fatigue can affect both personal behaviour and safe
            performance on board.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Impaired judgment",
              "Reduced self-control",
              "Increased irritability",
              "Reduced alertness",
              "Misunderstanding or misinterpreting comments",
              "Greater possibility of conflict",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-red-900"
              >
                ⚠ {item}
              </div>
            ))}
          </div>
        </section>

        {/* SAFETY */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🚨 Fatigue & Shipboard Safety
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fatigue is particularly important where duties involve
            navigational safety and the safe and secure operation of the
            ship.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-lg font-bold text-orange-900">
              Fatigue → Reduced Alertness → Increased Safety Risk
            </p>
          </div>
        </section>

        {/* BEHAVIOUR */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🧠 Effect on Behaviour
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout explains that fatigued individuals may
            misinterpret comments or overreact to minor issues. This may
            lead to unnecessary conflict between crew members.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["🧠", "Judgment", "May be impaired"],
              ["😠", "Irritability", "May increase"],
              ["🤝", "Relationships", "Conflict may develop"],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-xl bg-slate-50 p-5 text-center"
              >
                <div className="text-3xl">{icon}</div>

                <p className="mt-2 font-bold text-slate-900">
                  {title}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SUPERVISORS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👨‍✈️ Fatigue & Supervision
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout also notes that supervisors suffering from
            fatigue may fail to notice inappropriate behaviour or may
            handle a situation ineffectively.
          </p>

          <div className="mt-5 rounded-xl bg-yellow-50 p-5">
            <p className="font-bold text-yellow-900">
              Remember
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Fatigue can affect personnel at any level and can influence
              both individual performance and supervision.
            </p>
          </div>
        </section>

        {/* CONTROL */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            🛌 Controlling Fatigue
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout emphasizes compliance with hours of work and rest
            requirements and promoting a proper sleep routine.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Obtain adequate rest",
              "Maintain a proper sleep routine",
              "Comply with hours of work and rest",
              "Use available rest periods effectively",
              "Recognize the effects of fatigue",
              "Take fatigue seriously as a safety issue",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-green-900"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* WORK AND REST */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            ⏱️ Hours of Work & Rest
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            The handout gives limits for seafarers&apos; hours of work
            and minimum hours of rest.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-300">
                Maximum Work
              </p>

              <p className="mt-3 text-3xl font-bold">
                14 Hours
              </p>

              <p className="mt-1 text-slate-300">
                in any 24-hour period
              </p>

              <p className="mt-4 text-3xl font-bold">
                72 Hours
              </p>

              <p className="mt-1 text-slate-300">
                in any seven-day period
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
                Minimum Rest
              </p>

              <p className="mt-3 text-3xl font-bold">
                10 Hours
              </p>

              <p className="mt-1 text-slate-300">
                in any 24-hour period
              </p>

              <p className="mt-4 text-3xl font-bold">
                77 Hours
              </p>

              <p className="mt-1 text-slate-300">
                in any seven-day period
              </p>
            </div>

          </div>
        </section>

        {/* REST PERIODS */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🕒 Division of Rest Periods
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            According to the handout, hours of rest may be divided into
            no more than two periods.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5">
              <p className="text-3xl font-bold text-blue-900">
                ≥ 6 Hours
              </p>

              <p className="mt-2 text-slate-700">
                One of the rest periods shall be at least six hours in
                length.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-3xl font-bold text-blue-900">
                ≤ 14 Hours
              </p>

              <p className="mt-2 text-slate-700">
                Interval between consecutive periods of rest shall not
                exceed 14 hours.
              </p>
            </div>
          </div>
        </section>

        {/* DRILLS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚨 Drills & Rest
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Musters, fire-fighting drills, lifeboat drills and other
            prescribed drills should be conducted in a way that minimizes
            disturbance of rest periods and does not induce fatigue.
          </p>
        </section>

        {/* ON CALL */}
        <section className="rounded-2xl border-l-4 border-cyan-600 bg-cyan-50 p-6">
          <h2 className="text-2xl font-bold text-cyan-900">
            📞 Seafarer on Call
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Where a seafarer&apos;s normal rest period is disturbed by
            call-outs to work, the handout states that an adequate
            compensatory rest period should be provided.
          </p>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • Fatigue can impair <strong>judgment</strong>.
            </p>

            <p>
              • Fatigue can reduce <strong>self-control</strong> and
              increase <strong>irritability</strong>.
            </p>

            <p>
              • Proper <strong>sleep and rest</strong> are important for
              controlling fatigue.
            </p>

            <p>
              • Maximum work = <strong>14 hours in 24 hours</strong>.
            </p>

            <p>
              • Maximum work = <strong>72 hours in 7 days</strong>.
            </p>

            <p>
              • Minimum rest = <strong>10 hours in 24 hours</strong>.
            </p>

            <p>
              • Minimum rest = <strong>77 hours in 7 days</strong>.
            </p>

            <p>
              • Rest may be divided into{" "}
              <strong>no more than two periods</strong>.
            </p>

            <p>
              • One rest period shall be at least{" "}
              <strong>6 hours</strong>.
            </p>

            <p>
              • Interval between consecutive rest periods shall not
              exceed <strong>14 hours</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-06"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Human Relationships
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-08"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: MLC 2006 →
          </Link>
        </div>

      </div>
    </main>
  );
}