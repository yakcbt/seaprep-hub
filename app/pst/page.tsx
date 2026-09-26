"use client";

import Link from "next/link";

const topics = [
  {
    no: "01",
    title: "Introduction, Safety & Survival",
    description:
      "Safety guidelines, principles of survival at sea and basic survival preparedness.",
    href: "/pst/topic-01",
  },
  {
    no: "02",
    title: "Emergency Situations",
    description:
      "Types of emergencies, precautions, muster list, emergency signals and abandoning ship.",
    href: "/pst/topic-02",
  },
  {
    no: "03",
    title: "Evacuation",
    description:
      "Preparation for abandoning ship, prevention of panic and crew duties during evacuation.",
    href: "/pst/topic-03",
  },
  {
    no: "04",
    title: "Survival Craft & Rescue Boats",
    description:
      "Lifeboats, liferafts, rescue boats and basic survival craft procedures.",
    href: "/pst/topic-04",
  },
  {
    no: "05",
    title: "Personal Life-Saving Appliances",
    description:
      "Lifebuoys, lifejackets, immersion suits and thermal protective aids.",
    href: "/pst/topic-05",
  },
  {
    no: "06",
    title: "Survival at Sea",
    description:
      "Dangers to survivors and effective use of survival craft facilities.",
    href: "/pst/topic-06",
  },
  {
    no: "07",
    title: "Helicopter Assistance",
    description:
      "Communication with helicopters, evacuation and helicopter pickup procedures.",
    href: "/pst/topic-07",
  },
  {
    no: "08",
    title: "Emergency Radio Equipment",
    description:
      "EPIRB and Search and Rescue Transponder used during maritime emergencies.",
    href: "/pst/topic-08",
  },
];

export default function PSTPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
            STCW Course Notes
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Personal Survival Techniques
          </h1>

          <p className="mt-3 text-lg font-semibold text-blue-100">
            PST
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 md:text-base">
            Study notes for essential personal survival procedures,
            life-saving appliances, survival craft and emergency actions
            required for seafarers.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            About This Course
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Personal Survival Techniques provides basic training to help a
            seafarer respond correctly during an emergency and improve the
            chances of survival if a ship has to be abandoned.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">Lifejacket</p>
              <p className="mt-1 text-sm text-slate-600">
                Correct donning and use
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">Liferaft</p>
              <p className="mt-1 text-sm text-slate-600">
                Boarding and survival
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">Immersion Suit</p>
              <p className="mt-1 text-sm text-slate-600">
                Protection in cold water
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">Emergency Equipment</p>
              <p className="mt-1 text-sm text-slate-600">
                Survival and radio equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            PST Study Topics
          </h2>
          <p className="mt-2 text-slate-600">
            Select a topic to start studying.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.no}
              href={topic.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 font-bold text-white">
                  {topic.no}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800">
                    {topic.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {topic.description}
                  </p>

                  <p className="mt-4 font-semibold text-blue-700">
                    Read Notes →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Practice CBT */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-2xl bg-slate-900 p-7 text-center text-white">
          <h2 className="text-2xl font-bold">
            Ready to Test Your Knowledge?
          </h2>

          <p className="mt-2 text-slate-300">
            Complete the PST notes first and then attempt the practice CBT.
          </p>

          <Link
            href="/pst/practice-cbt"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Start Practice CBT →
          </Link>
        </div>
      </section>

      {/* Back */}
      <div className="pb-12 text-center">
        <Link
          href="/"
          className="font-semibold text-blue-700 hover:text-blue-900"
        >
          ← Back to SeaPrep Hub
        </Link>
      </div>
    </main>
  );
}