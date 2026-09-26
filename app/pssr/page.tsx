"use client";

import Link from "next/link";

const topics = [
  {
    no: "01",
    title: "Introduction & Ship Familiarization",
    description:
      "Introduction to PSSR, STCW and basic ship familiarization.",
    href: "/pssr/topic-01",
    icon: "🚢",
  },
  {
    no: "02",
    title: "Comply with Emergency Procedures",
    description:
      "Emergency situations, alarms, muster list and emergency actions.",
    href: "/pssr/topic-02",
    icon: "🚨",
  },
  {
    no: "03",
    title: "Prevention of Marine Pollution",
    description:
      "Marine pollution, its effects and precautions to protect the environment.",
    href: "/pssr/topic-03",
    icon: "🌊",
  },
  {
    no: "04",
    title: "Safe Working Practices",
    description:
      "Safe working procedures and precautions while working on board.",
    href: "/pssr/topic-04",
    icon: "🦺",
  },
  {
    no: "05",
    title: "Effective Communication on Board",
    description:
      "Importance and methods of effective shipboard communication.",
    href: "/pssr/topic-05",
    icon: "📢",
  },
  {
    no: "06",
    title: "Effective Human Relationships",
    description:
      "Teamwork, cooperation and good human relationships on board.",
    href: "/pssr/topic-06",
    icon: "🤝",
  },
  {
    no: "07",
    title: "Control of Fatigue",
    description:
      "Causes and effects of fatigue and measures for its control.",
    href: "/pssr/topic-07",
    icon: "😴",
  },
  {
    no: "08",
    title: "Maritime Labour Convention (MLC 2006)",
    description:
      "Basic understanding of the Maritime Labour Convention, 2006.",
    href: "/pssr/topic-08",
    icon: "⚖️",
  },
  {
    no: "09",
    title: "Prevention of Violence & Harassment",
    description:
      "Awareness and prevention of violence and harassment at sea.",
    href: "/pssr/topic-09",
    icon: "🛡️",
  },
];

export default function PSSRPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-200 hover:text-white"
          >
            ← SeaPrep Hub Home
          </Link>

          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              STCW Basic Safety Training
            </p>

            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
              Personal Safety & Social Responsibilities
            </h1>

            <p className="mt-2 text-xl font-bold text-cyan-200">
              PSSR
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-cyan-100">
              Study PSSR topic by topic with simple, exam-focused notes
              based on the course material.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE INFO */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Course
            </p>
            <p className="mt-1 text-xl font-bold text-cyan-900">
              PSSR
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Study Topics
            </p>
            <p className="mt-1 text-xl font-bold text-cyan-900">
              09 Topics
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Learning Mode
            </p>
            <p className="mt-1 text-xl font-bold text-cyan-900">
              Notes + CBT
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
            Course Contents
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-slate-900">
            📚 PSSR Topics
          </h2>

          <p className="mt-2 text-slate-600">
            Select a topic below to start studying.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.no}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl">{topic.icon}</div>

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
                  TOPIC {topic.no}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>

              <Link
                href={topic.href}
                className="mt-5 rounded-xl bg-cyan-900 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-800"
              >
                Study Topic →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE CBT */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-900 p-7 text-white md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
                  Practice Test
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  PSSR Practice CBT
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-cyan-100">
                  After completing the topics, test your knowledge with
                  multiple-choice practice questions.
                </p>
              </div>

              <Link
                href="/pssr/practice-cbt"
                className="shrink-0 rounded-xl bg-white px-6 py-3 text-center font-bold text-cyan-900 transition hover:bg-cyan-50"
              >
                Start Practice CBT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="bg-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
          >
            ← SeaPrep Hub Home
          </Link>

          <Link
            href="/pssr/topic-01"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Start Topic 01 →
          </Link>
        </div>
      </section>
    </main>
  );
}