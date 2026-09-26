"use client";

import Link from "next/link";

const topics = [
  {
    no: "01",
    title: "Principal of First Aid",
    icon: "⛑️",
    href: "/efa/topic-01",
  },
  {
    no: "02",
    title: "Body Structure and Functions",
    icon: "🫀",
    href: "/efa/topic-02",
  },
  {
    no: "03",
    title: "Positioning of Casualty",
    icon: "🛌",
    href: "/efa/topic-03",
  },
  {
    no: "04",
    title: "The Unconscious Casualty",
    icon: "🚑",
    href: "/efa/topic-04",
  },
  {
    no: "05",
    title: "Resuscitation",
    icon: "❤️",
    href: "/efa/topic-05",
  },
  {
    no: "06",
    title: "Bleeding",
    icon: "🩸",
    href: "/efa/topic-06",
  },
  {
    no: "07",
    title: "Management of Shock",
    icon: "⚕️",
    href: "/efa/topic-07",
  },
  {
    no: "08",
    title: "Burns, Scalds and Accidents caused by Electricity",
    icon: "🔥",
    href: "/efa/topic-08",
  },
  {
    no: "09",
    title: "Rescue and Transport of Casualty",
    icon: "🚨",
    href: "/efa/topic-09",
  },
  {
    no: "10",
    title: "Other Topics",
    icon: "📚",
    href: "/efa/topic-10",
  },
];

export default function EFAPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-5 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-6 inline-block text-sm font-semibold text-emerald-100 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-100">
            STCW Basic Safety Training
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Elementary First Aid
          </h1>

          <p className="mt-3 text-xl font-semibold text-emerald-100">
            EFA Study Notes
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-emerald-50 md:text-base">
            Study the Elementary First Aid course topic by topic. Select a
            chapter below to begin.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="font-bold uppercase tracking-wider text-emerald-600">
              Course Contents
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              📘 EFA Study Topics
            </h2>

            <p className="mt-2 text-slate-600">
              Complete the topics in sequence for easier study and revision.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.no}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-3xl">
                    {topic.icon}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-emerald-600">
                      TOPIC {topic.no}
                    </p>

                    <h3 className="mt-1 text-lg font-extrabold leading-6 text-slate-900 group-hover:text-emerald-700">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-emerald-600">
                      Study Topic →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practice CBT */}
      <section className="px-5 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
                Exam Preparation
              </p>

              <h2 className="mt-2 text-2xl font-extrabold">
                📝 EFA Practice CBT
              </h2>

              <p className="mt-2 text-sm text-emerald-100">
                Test your knowledge after completing the study topics.
              </p>
            </div>

            <Link
              href="/efa/practice-cbt"
              className="mt-5 inline-block rounded-xl bg-white px-6 py-3 text-center font-bold text-emerald-700 transition hover:bg-emerald-50 md:mt-0"
            >
              Start Practice CBT →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-slate-600 hover:text-emerald-700"
          >
            ← Home
          </Link>

          <Link
            href="/efa/topic-01"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700"
          >
            Start Topic 01 →
          </Link>
        </div>
      </section>
    </main>
  );
}