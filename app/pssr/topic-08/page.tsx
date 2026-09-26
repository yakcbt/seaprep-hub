"use client";

import Link from "next/link";

export default function PSSRTopic08() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 08
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Maritime Labour Convention (MLC 2006)
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Seafarers&apos; rights, employment conditions, wages,
            work and rest, repatriation, accommodation, food,
            medical care and welfare.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ⚖️ What is MLC 2006?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The Maritime Labour Convention provides protection for
            seafarers in relation to their working and living conditions,
            employment, health, social security and related matters.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Maritime Labour Convention
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              The handout states that the maritime regulation entered
              into force on 20 August 2013.
            </p>
          </div>
        </section>

        {/* MAIN AREAS */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🌍 Main Areas Covered
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Employment",
              "Working Conditions",
              "Living Conditions",
              "Health Protection",
              "Social Security",
              "Seafarers' Rights",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-center font-bold text-blue-900"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* MINIMUM AGE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👨‍✈️ Minimum Age
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-5 text-center">
              <p className="text-4xl font-bold text-red-900">
                16
              </p>

              <p className="mt-2 font-semibold text-slate-700">
                Employment, engagement or work on board below
                16 years is prohibited.
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-5 text-center">
              <p className="text-4xl font-bold text-orange-900">
                18
              </p>

              <p className="mt-2 font-semibold text-slate-700">
                Night work for seafarers under 18 years is prohibited.
              </p>
            </div>
          </div>
        </section>

        {/* MEDICAL */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            🩺 Medical Fitness
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Before beginning work on a ship, a seafarer must hold a valid
            medical certificate confirming fitness to perform the duties
            required at sea.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5">
              <p className="text-3xl font-bold text-green-900">
                2 Years
              </p>
              <p className="mt-2 text-slate-700">
                Maximum validity of the medical certificate.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5">
              <p className="text-3xl font-bold text-green-900">
                1 Year
              </p>
              <p className="mt-2 text-slate-700">
                Maximum validity when the seafarer is under 18.
              </p>
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🎓 Training & Certification
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers shall not work on a ship unless they are trained,
            certified as competent or otherwise qualified to perform
            their duties.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The handout also states that seafarers must successfully
            complete training for personal safety on board ship.
          </p>
        </section>

        {/* EMPLOYMENT AGREEMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📄 Seafarers&apos; Employment Agreement
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A seafarer should have an opportunity to review and seek
            advice on the terms and conditions of the employment
            agreement before freely accepting and signing it.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Seafarer's name and personal particulars",
              "Shipowner's name and address",
              "Place and date of agreement",
              "Capacity in which seafarer is employed",
              "Wages or method of calculation",
              "Paid annual leave",
              "Termination conditions",
              "Health and social security benefits",
              "Repatriation entitlement",
              "Collective bargaining agreement, if applicable",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-cyan-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* WAGES */}
        <section className="rounded-2xl bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold text-emerald-900">
            💰 Wages
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers shall be paid regularly and in full according to
            their employment agreements.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-emerald-900">
              Monthly Account
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Seafarers shall receive a monthly account showing payments
              due and amounts paid, including wages, additional payments
              and applicable exchange-rate information.
            </p>
          </div>
        </section>

        {/* HOURS */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            ⏱️ Hours of Work & Rest
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-bold text-red-300">
                Maximum Hours of Work
              </p>

              <p className="mt-4 text-2xl font-bold">
                14 hours / 24 hours
              </p>

              <p className="mt-2 text-2xl font-bold">
                72 hours / 7 days
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-bold text-green-300">
                Minimum Hours of Rest
              </p>

              <p className="mt-4 text-2xl font-bold">
                10 hours / 24 hours
              </p>

              <p className="mt-2 text-2xl font-bold">
                77 hours / 7 days
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-300">
            Rest may be divided into no more than two periods, one of
            which shall be at least six hours. The interval between
            consecutive periods of rest shall not exceed 14 hours.
          </p>
        </section>

        {/* LEAVE */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🏖️ Leave
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers shall be granted shore leave for their health and
            well-being, consistent with operational requirements.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-3xl font-bold text-blue-900">
              2.5 Calendar Days
            </p>

            <p className="mt-2 font-semibold text-slate-700">
              Minimum annual leave with pay per month of employment.
            </p>
          </div>
        </section>

        {/* REPATRIATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ✈️ Repatriation
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers have a right to repatriation at no cost to
            themselves under the circumstances and conditions specified
            in the Code.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Employment agreement expires while the seafarer is abroad.",
              "Employment agreement is terminated by the shipowner.",
              "Agreement is terminated by the seafarer for justified reasons.",
              "Seafarer can no longer carry out duties under the employment agreement.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-cyan-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* ACCOMMODATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🛏️ Accommodation & Recreational Facilities
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Ships shall provide and maintain decent accommodation and
            recreational facilities consistent with promoting the
            health and well-being of seafarers.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Adequate accommodation",
              "Adequate insulation",
              "Proper lighting",
              "Sufficient drainage",
              "Suitable sleeping rooms",
              "Recreational facilities",
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

        {/* ACCOMMODATION NUMBERS */}
        <section className="rounded-2xl bg-purple-50 p-6">
          <h2 className="text-2xl font-bold text-purple-900">
            📏 Important Accommodation Figures
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5 text-center">
              <p className="text-3xl font-bold text-purple-900">
                203 cm
              </p>
              <p className="mt-2 text-slate-700">
                Minimum permitted headroom where full and free movement
                is necessary.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 text-center">
              <p className="text-3xl font-bold text-purple-900">
                198 × 80 cm
              </p>
              <p className="mt-2 text-slate-700">
                Minimum inside dimensions of a berth.
              </p>
            </div>
          </div>
        </section>

        {/* FOOD */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🍽️ Food & Catering
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Ships shall carry and serve food and drinking water of
            appropriate quality, nutritional value and quantity.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Adequate quantity of food",
              "Appropriate nutritional value",
              "Suitable quality and variety",
              "Safe drinking water",
              "Hygienic preparation and service",
              "Trained or instructed catering staff",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-orange-100 p-5">
            <p className="font-bold text-orange-900">
              Food During Employment
            </p>

            <p className="mt-2 text-slate-700">
              The handout states that food shall be provided free of
              charge during the period of engagement.
            </p>
          </div>
        </section>

        {/* MEDICAL CARE */}
        <section className="rounded-2xl bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🏥 Medical Care & Health Protection
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers shall have access to prompt and adequate medical
            care while working on board.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Ships shall carry a medicine chest.",
              "Ships shall carry required medical equipment.",
              "Ships shall carry a medical guide.",
              "Medical equipment and arrangements are subject to inspection.",
              "Medical protection and care should in principle be provided at no cost to seafarers.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700"
              >
                🩺 {item}
              </div>
            ))}
          </div>
        </section>

        {/* DOCTOR */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            👨‍⚕️ Medical Doctor on Board
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout states that ships carrying 100 or more persons
            and ordinarily engaged on international voyages of more than
            three days shall carry a qualified medical doctor responsible
            for medical care.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-red-100 px-4 py-2 font-bold text-red-900">
              100+ Persons
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 font-bold text-red-900">
              International Voyage
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 font-bold text-red-900">
              More Than 3 Days
            </span>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>• MLC = <strong>Maritime Labour Convention</strong>.</p>

            <p>
              • Handout states MLC entered into force on{" "}
              <strong>20 August 2013</strong>.
            </p>

            <p>
              • Minimum age for work on board = <strong>16 years</strong>.
            </p>

            <p>
              • Night work below <strong>18 years</strong> is prohibited.
            </p>

            <p>
              • Medical certificate normally valid maximum{" "}
              <strong>2 years</strong>.
            </p>

            <p>
              • Under age 18: medical certificate maximum{" "}
              <strong>1 year</strong>.
            </p>

            <p>
              • Minimum rest = <strong>10 hours / 24 hours</strong> and{" "}
              <strong>77 hours / 7 days</strong>.
            </p>

            <p>
              • Annual leave = minimum{" "}
              <strong>2.5 calendar days per month</strong> of employment.
            </p>

            <p>
              • Seafarers have a right to{" "}
              <strong>repatriation</strong> under specified circumstances.
            </p>

            <p>
              • MLC covers employment, accommodation, food, medical care,
              health, welfare and <strong>seafarers&apos; rights</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-07"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Control of Fatigue
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-09"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Violence & Harassment →
          </Link>
        </div>

      </div>
    </main>
  );
}