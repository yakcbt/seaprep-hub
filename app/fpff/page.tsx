"use client";

import Link from "next/link";

const topics = [
  {
    no: "01",
    title: "Fire Triangle & Principles of Fire",
    desc: "Concept and application of the fire triangle to fire and explosion.",
    href: "/fpff/topic-01",
  },
  {
    no: "02",
    title: "Sources of Heat / Ignition",
    desc: "Common sources of heat and ignition that may start a fire.",
    href: "/fpff/topic-02",
  },
  {
    no: "03",
    title: "Flammability",
    desc: "Basic principles and properties of flammable materials.",
    href: "/fpff/topic-03",
  },
  {
    no: "04",
    title: "Fire Prevention",
    desc: "Fire prevention practices and precautions on board ships.",
    href: "/fpff/topic-04",
  },
  {
    no: "05",
    title: "Spread of Fire",
    desc: "Spread of fire in different parts of the ship.",
    href: "/fpff/topic-05",
  },
  {
    no: "06",
    title: "Need for Constant Vigilance",
    desc: "Importance of continuous fire awareness and vigilance.",
    href: "/fpff/topic-06",
  },
  {
    no: "07",
    title: "Patrol System",
    desc: "Fire patrol system and shipboard monitoring.",
    href: "/fpff/topic-07",
  },
  {
    no: "08",
    title: "Fire Hazards",
    desc: "Common fire hazards found on board ships.",
    href: "/fpff/topic-08",
  },
  {
    no: "09",
    title: "Organisation of Shipboard Fire Fighting",
    desc: "Emergency organisation, alarms, muster list and fire control.",
    href: "/fpff/topic-09",
  },
  {
    no: "10",
    title: "Fire & Smoke Detection",
    desc: "Fire and smoke detection measures and automatic alarm systems.",
    href: "/fpff/topic-10",
  },
  {
    no: "11",
    title: "Classification of Fires & Extinguishing Agents",
    desc: "Classes of fire and the applicable extinguishing agents.",
    href: "/fpff/topic-11",
  },
  {
    no: "12",
    title: "Construction & Means of Escape",
    desc: "Fire-related construction requirements and means of escape.",
    href: "/fpff/topic-12",
  },
  {
    no: "13",
    title: "Fire Fighting Appliances & Equipment",
    desc: "Portable and shipboard fire-fighting appliances and equipment.",
    href: "/fpff/topic-13",
  },
  {
    no: "14",
    title: "Fixed Fire Fighting Installations",
    desc: "Precautions and use of fixed fire-fighting installations.",
    href: "/fpff/topic-14",
  },
  {
    no: "15",
    title: "Breathing Apparatus",
    desc: "Use of breathing apparatus for fire fighting and rescue.",
    href: "/fpff/topic-15",
  },
];

export default function FPFFPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            SeaPrep Hub • STCW Course
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Fire Prevention & Fire Fighting
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-red-100">
            FPFF study notes covering fire prevention, fire hazards,
            fire-fighting organisation, extinguishing agents,
            fire-fighting equipment and breathing apparatus.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              STCW FPFF
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              15 Topics
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              Study Notes
            </span>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-10">

        {/* INTRO */}
        <div className="mb-8 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold text-red-900">
            FPFF Course Topics
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Select a topic below to study Fire Prevention and Fire
            Fighting. Topics are arranged according to the FPFF course
            handout.
          </p>

        </div>

        {/* TOPIC CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <Link
              key={topic.no}
              href={topic.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-md"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 font-bold text-red-900">
                  {topic.no}
                </div>

                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-red-700">
                  →
                </span>

              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-red-900">
                {topic.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {topic.desc}
              </p>

              <p className="mt-5 text-sm font-bold text-red-800">
                Study Topic →
              </p>

            </Link>
          ))}

        </div>

        {/* PRACTICE CBT */}
        <div className="mt-10 rounded-2xl bg-red-900 p-7 text-white md:flex md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
              Practice Test
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              FPFF Practice CBT
            </h2>

            <p className="mt-2 max-w-2xl text-red-100">
              Complete the study topics and then test your knowledge
              with the FPFF practice CBT.
            </p>
          </div>

          <Link
            href="/fpff/practice-cbt"
            className="mt-5 inline-block rounded-xl bg-white px-6 py-3 font-bold text-red-900 transition hover:bg-red-50 md:mt-0"
          >
            Start Practice CBT →
          </Link>

        </div>

        {/* QUICK STUDY FLOW */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">

          <h2 className="text-xl font-bold text-amber-900">
            Recommended Study Flow
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Start from Topic 01 and continue in sequence. After completing
            all 15 topics, use the Practice CBT for revision.
          </p>

        </div>

        {/* HOME */}
        <div className="mt-8 text-center">

          <Link
            href="/"
            className="inline-block rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            ← Back to SeaPrep Hub
          </Link>

        </div>

      </section>

    </main>
  );
}