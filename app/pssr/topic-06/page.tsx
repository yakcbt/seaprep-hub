"use client";

import Link from "next/link";

export default function PSSRTopic06() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 06
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Contribute to Effective Human Relationships on Board Ship
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Teamwork, cooperation, mutual respect and professional
            relationships between personnel living and working on board.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🤝 Human Relationships on Board
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Seafarers live and work together for long periods on board
            ship. Good human relationships help crew members cooperate,
            communicate and perform their duties effectively.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Basic Principle
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Respect, cooperation, communication and teamwork are
              important for maintaining good working relationships on board.
            </p>
          </div>
        </section>

        {/* TEAMWORK */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            👥 Importance of Teamwork
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Shipboard operations require crew members to work together.
            Effective teamwork supports both normal operations and the
            response to emergency situations.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Cooperate with other crew members",
              "Perform assigned duties responsibly",
              "Share important information",
              "Support fellow crew members",
              "Follow the chain of command",
              "Work towards common shipboard objectives",
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

        {/* GOOD RELATIONSHIPS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🌟 Good Human Relationships
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🤝",
                title: "Respect",
                text: "Treat other crew members with dignity and respect.",
              },
              {
                icon: "🗣️",
                title: "Communication",
                text: "Communicate clearly and professionally with others.",
              },
              {
                icon: "👥",
                title: "Cooperation",
                text: "Work together and support the shipboard team.",
              },
              {
                icon: "👂",
                title: "Listening",
                text: "Listen carefully to instructions and other personnel.",
              },
              {
                icon: "⚖️",
                title: "Fairness",
                text: "Maintain professional behaviour towards fellow crew.",
              },
              {
                icon: "🛟",
                title: "Support",
                text: "Help fellow crew members when assistance is required.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SHIPBOARD ENVIRONMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚢 Shipboard Living & Working Environment
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A ship is both a workplace and a living environment.
            Personnel work, eat, rest and spend their free time in the
            same shipboard community.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Professional behaviour and consideration for other crew
            members therefore contribute to a better working and living
            environment.
          </p>
        </section>

        {/* MULTICULTURAL CREW */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            🌍 Working with Different People
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Shipboard personnel may come from different countries and
            backgrounds. Crew members should maintain respectful and
            professional relationships with one another.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Respect other crew members",
              "Avoid unnecessary conflict",
              "Communicate clearly",
              "Be willing to cooperate",
              "Maintain professional behaviour",
              "Support teamwork",
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

        {/* RESPONSIBILITIES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👨‍✈️ Responsibilities of a Crew Member
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Carry out assigned duties responsibly.",
              "Follow lawful shipboard instructions.",
              "Cooperate with officers and fellow crew members.",
              "Maintain discipline and professional behaviour.",
              "Respect other personnel on board.",
              "Contribute positively to the shipboard team.",
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

        {/* CONFLICT */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            ⚠️ Avoiding Conflict
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Poor communication and inappropriate behaviour can damage
            relationships between crew members and affect teamwork.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-orange-900">
              Good Practice
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Remain calm.</p>
              <p>• Communicate respectfully.</p>
              <p>• Listen to the other person.</p>
              <p>• Avoid aggressive behaviour.</p>
              <p>• Seek assistance through the proper shipboard channel if required.</p>
            </div>
          </div>
        </section>

        {/* COMMUNICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📢 Communication & Human Relationships
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Effective communication supports good human relationships.
            Clear communication can reduce misunderstanding and help crew
            members cooperate effectively.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5 text-center">
            <p className="text-lg font-bold text-cyan-900">
              Clear Communication + Mutual Respect + Cooperation
            </p>

            <p className="mt-2 font-semibold text-slate-700">
              = Better Shipboard Teamwork
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🛡️ Teamwork, Communication & Trust
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            The PSSR handout emphasizes that shipboard safety depends on
            teamwork, communication and trust. Behaviour that creates
            fear, hostility or division can weaken these important
            elements.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["🤝", "Teamwork"],
              ["📢", "Communication"],
              ["🛡️", "Trust"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-xl bg-white/10 p-5 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 font-bold text-cyan-300">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MUTUAL SUPPORT */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            💙 Mutual Support
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Mutual support and positive interaction between crew members
            can help maintain cooperation and reduce the negative effects
            of isolation during life at sea.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-blue-900">
              A Good Crew Member
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Works safely, communicates clearly, respects others and
              contributes to the effectiveness of the shipboard team.
            </p>
          </div>
        </section>

        {/* SAFETY */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🚨 Human Relationships & Safety
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Poor relationships can affect communication, concentration
            and cooperation. These factors are important because
            shipboard operations depend on personnel working together
            safely.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="font-bold text-red-900">
              Respectful Working Environment
            </p>

            <p className="mt-2 text-slate-700">
              supports communication, teamwork and safe operations.
            </p>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • Good human relationships require{" "}
              <strong>respect and cooperation</strong>.
            </p>

            <p>
              • Shipboard work depends heavily on{" "}
              <strong>teamwork</strong>.
            </p>

            <p>
              • Effective <strong>communication</strong> supports good
              relationships.
            </p>

            <p>
              • Crew members should maintain{" "}
              <strong>professional behaviour</strong>.
            </p>

            <p>
              • Respect is important when working with people from
              different <strong>backgrounds</strong>.
            </p>

            <p>
              • Mutual support can help reduce the negative effects of{" "}
              <strong>isolation</strong>.
            </p>

            <p>
              • Shipboard safety depends on{" "}
              <strong>teamwork, communication and trust</strong>.
            </p>

            <p>
              • Good relationships contribute to a safer and more
              effective <strong>shipboard team</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-05"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Effective Communication
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-07"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Control of Fatigue →
          </Link>
        </div>

      </div>
    </main>
  );
}