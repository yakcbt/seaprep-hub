"use client";

import Link from "next/link";

export default function PSSRTopic05() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 05
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Contribute to Effective Communication on Board Ship
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Importance of clear communication, understanding instructions
            and maintaining effective communication between shipboard
            personnel.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📢 Effective Communication
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Effective communication is important for safe and efficient
            shipboard operations. Crew members need to understand
            instructions correctly and communicate information clearly.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Basic Principle
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Communication should be clear, understood and suitable for
              the situation.
            </p>
          </div>
        </section>

        {/* COMMUNICATION PROCESS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🔄 Communication Process
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {[
              ["1", "Sender"],
              ["2", "Message"],
              ["3", "Receiver"],
              ["4", "Understanding"],
              ["5", "Feedback"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="rounded-xl bg-cyan-50 p-4 text-center"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-cyan-900 font-bold text-white">
                  {number}
                </div>

                <p className="mt-3 font-bold text-cyan-900">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            Communication is successful when the information sent by one
            person is correctly understood by the other person.
          </p>
        </section>

        {/* IMPORTANCE */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🚢 Importance on Board Ship
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Helps in safe shipboard operations",
              "Helps crew understand instructions",
              "Reduces misunderstanding",
              "Supports teamwork",
              "Helps during emergency situations",
              "Improves coordination between crew members",
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

        {/* VERBAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🗣️ Verbal Communication
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Verbal communication involves spoken information between
            personnel. Instructions should be clear and understandable.
          </p>

          <div className="mt-5 rounded-xl bg-green-50 p-5">
            <p className="font-bold text-green-900">
              Good Communication
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Speak clearly.</p>
              <p>• Listen carefully.</p>
              <p>• Avoid unnecessary confusion.</p>
              <p>• Confirm important instructions when required.</p>
            </div>
          </div>
        </section>

        {/* NON VERBAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👋 Non-Verbal Communication
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Communication can also take place without spoken words.
            Signs, signals, gestures and body language can communicate
            important information.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["✋", "Hand Signals"],
              ["🚧", "Safety Signs"],
              ["👀", "Body Language"],
              ["🚨", "Alarm Signals"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-xl bg-slate-50 p-5 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 font-bold text-slate-800">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LISTENING */}
        <section className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            👂 Effective Listening
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Communication does not depend only on speaking. The receiver
            should listen carefully and make sure that the information
            has been correctly understood.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-green-900">
              Listen → Understand → Confirm → Act
            </p>
          </div>
        </section>

        {/* INSTRUCTIONS */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            📋 Understanding Instructions
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Instructions related to shipboard work and safety must be
            correctly understood before action is taken.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Listen carefully to the instruction.",
              "Make sure the instruction is understood.",
              "Ask for clarification if there is doubt.",
              "Repeat or confirm important information when necessary.",
              "Carry out the instruction correctly.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-white p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-700 font-bold text-white">
                  {index + 1}
                </span>

                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BARRIERS */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Barriers to Effective Communication
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Communication can become ineffective when information is
            unclear or not properly understood.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Language differences",
              "Noise",
              "Poor listening",
              "Unclear instructions",
              "Misunderstanding",
              "Lack of attention",
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

        {/* MULTINATIONAL CREW */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🌍 Communication in a Multinational Crew
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Ships may have crew members from different backgrounds.
            Clear and respectful communication helps personnel work
            together effectively.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Keep Communication
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              Simple • Clear • Respectful • Understood
            </p>
          </div>
        </section>

        {/* EMERGENCY */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🚨 Communication During Emergency
          </h2>

          <p className="mt-4 leading-7 text-red-100">
            During an emergency, communication becomes especially
            important. Crew members must listen to alarms, announcements
            and instructions and respond according to their assigned
            duties.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Listen carefully",
              "Remain calm",
              "Understand the message",
              "Follow instructions",
              "Report important information",
              "Avoid unnecessary communication",
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

        {/* TEAMWORK */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🤝 Communication & Teamwork
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Effective communication supports cooperation and teamwork.
            Crew members should communicate professionally and respect
            each other while performing their duties.
          </p>

          <div className="mt-5 rounded-xl bg-white/10 p-5 text-center">
            <p className="text-xl font-bold text-cyan-300">
              Good Communication = Better Teamwork + Safer Operations
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
              • Effective communication is important for{" "}
              <strong>safe shipboard operations</strong>.
            </p>

            <p>
              • Communication involves a{" "}
              <strong>sender, message and receiver</strong>.
            </p>

            <p>
              • <strong>Feedback</strong> helps confirm understanding.
            </p>

            <p>
              • Communication may be{" "}
              <strong>verbal or non-verbal</strong>.
            </p>

            <p>
              • Good communication requires{" "}
              <strong>effective listening</strong>.
            </p>

            <p>
              • If an instruction is not understood, ask for{" "}
              <strong>clarification</strong>.
            </p>

            <p>
              • Noise, language differences and poor listening can
              interfere with communication.
            </p>

            <p>
              • During an emergency, communication should be{" "}
              <strong>clear and understood</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-04"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Safe Working Practices
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-06"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Human Relationships →
          </Link>
        </div>

      </div>
    </main>
  );
}