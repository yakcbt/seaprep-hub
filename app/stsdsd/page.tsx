"use client";

import Link from "next/link";

const topics = [
  {
    no: "01",
    title: "Introduction",
    description: "Introduction to the STSDSD course and security awareness.",
    href: "/stsdsd/topic-01",
  },
  {
    no: "02",
    title: "Maritime Security Policy",
    description: "International maritime security policy and requirements.",
    href: "/stsdsd/topic-02",
  },
  {
    no: "03",
    title: "Security Responsibilities",
    description: "Security responsibilities of organizations and personnel.",
    href: "/stsdsd/topic-03",
  },
  {
    no: "04",
    title: "Vessel Security Assessment",
    description: "Understanding vessel security assessment.",
    href: "/stsdsd/topic-04",
  },
  {
    no: "05",
    title: "Security Equipment",
    description: "Security equipment used for shipboard security.",
    href: "/stsdsd/topic-05",
  },
  {
    no: "06",
    title: "Threat Identification, Recognition, and Response",
    description:
      "Recognizing security threats, searches and appropriate response.",
    href: "/stsdsd/topic-06",
  },
  {
    no: "07",
    title: "Ship Security Actions",
    description:
      "Security actions, access control and procedures at different security levels.",
    href: "/stsdsd/topic-07",
  },
  {
    no: "08",
    title: "Emergency Preparedness, Drills, and Exercises",
    description:
      "Security contingency planning, drills and exercises.",
    href: "/stsdsd/topic-08",
  },
  {
    no: "09",
    title: "Security Administration",
    description:
      "Security documentation, records and shipboard administration.",
    href: "/stsdsd/topic-09",
  },
  {
    no: "10",
    title: "Introduction to Ship Piracy",
    description:
      "Introduction to piracy, international framework and IMO initiatives.",
    href: "/stsdsd/topic-10",
  },
  {
    no: "11",
    title: "Piracy off the Coast of Somalia",
    description:
      "Somali piracy, international efforts and historical incidents.",
    href: "/stsdsd/topic-11",
  },
  {
    no: "12",
    title: "Anti-Piracy Measures",
    description:
      "Best management practices, defensive measures and response to piracy.",
    href: "/stsdsd/topic-12",
  },
];

export default function STSDSDPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-5 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-100 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-cyan-200">
            STCW Course
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Security Training for Seafarers with
            <span className="block text-cyan-300">
              Designated Security Duties
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Study the STSDSD course topic by topic and test your knowledge
            with the Practice CBT.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              12 Topics
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              Course Notes
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              Practice CBT
            </span>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Course Content
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              STSDSD Topics
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Select a topic below to start studying.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.no}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 font-extrabold text-cyan-800">
                    {topic.no}
                  </span>

                  <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-3 leading-6 text-slate-600">
                  {topic.description}
                </p>

                <p className="mt-5 font-bold text-cyan-700">
                  Study Topic →
                </p>
              </Link>
            ))}
          </div>

          {/* PRACTICE CBT */}
          <section className="mt-12 overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <div className="p-7 md:p-9">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                    Practice Examination
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                    STSDSD Practice CBT
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                    Test your knowledge with random questions covering the
                    complete STSDSD course.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
                      30 Questions
                    </span>

                    <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
                      30 Minutes
                    </span>

                    <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
                      Pass Mark 60%
                    </span>

                    <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
                      Random Questions
                    </span>
                  </div>
                </div>

                <Link
                  href="/stsdsd/practice-cbt"
                  className="shrink-0 rounded-xl bg-emerald-600 px-8 py-4 text-center text-lg font-extrabold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Start Practice CBT →
                </Link>
              </div>
            </div>
          </section>

          {/* COURSE INFO */}
          <section className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Course Notes"
              text="Study all 12 STSDSD topics in a simple classroom-friendly format."
            />

            <InfoCard
              title="Practice CBT"
              text="Attempt 30 random questions and check your score after submission."
            />

            <InfoCard
              title="Answer Review"
              text="Review your answers and correct answers after completing the test."
            />
          </section>

          {/* BACK HOME */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block rounded-xl border border-slate-300 bg-white px-7 py-3 font-bold text-slate-700 hover:bg-slate-100"
            >
              ← Back to SeaPrep Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}