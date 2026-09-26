"use client";

import Link from "next/link";

export default function EFATopic01() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/efa"
            className="text-sm font-semibold text-emerald-100 hover:text-white"
          >
            ← Back to EFA
          </Link>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-100">
            Elementary First Aid • Topic 01
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            ⛑️ Principal of First Aid
          </h1>

          <p className="mt-3 text-emerald-50">
            General Principles of First Aid
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* Definition */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Definition of First Aid
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              First Aid is the immediate assistance given to an injured or ill
              person with available resources before medical help is available.
            </p>
          </div>

          {/* Aim */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Aims of First Aid
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="text-lg font-bold text-emerald-800">
                  ❤️ Save Life
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Remove any danger immediately threatening life.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="text-lg font-bold text-emerald-800">
                  🛡️ Prevent Further Injury
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Prevent further injury and deterioration of the
                  patient&apos;s condition.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="text-lg font-bold text-emerald-800">
                  💊 Relieve Pain
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Take appropriate first-aid action to relieve pain.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="text-lg font-bold text-emerald-800">
                  🏥 Medical Care
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Make medical care available at the earliest.
                </p>
              </div>
            </div>
          </div>

          {/* Qualities */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Qualities of a First Aider
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>👀 A good observer.</p>
              <p>⚡ Able to act quickly.</p>
              <p>🧘 Calm and collected.</p>
              <p>
                👥 Able to lead and control the crowd and take help from
                onlookers.
              </p>
              <p>
                🧠 Self-confident and able to judge which injuries need to be
                tackled first.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Principles of First Aid
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
                <p className="font-semibold text-slate-800">
                  Remove the patient to a place of safety.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
                <p className="font-semibold text-slate-800">
                  Loosen clothing around the neck and waist to aid breathing.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
                <p className="font-semibold text-slate-800">
                  Look for failure of breathing, failure of circulation and
                  severe bleeding.
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Check */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              🚨 Immediate Check
            </h2>

            <div className="mt-5 space-y-4 text-slate-800">
              <div>
                <p className="font-bold">A. Failure of Breathing?</p>
                <p className="mt-1">
                  If yes, start Artificial Respiration.
                </p>
              </div>

              <div>
                <p className="font-bold">B. Failure of Circulation?</p>
                <p className="mt-1">
                  If yes, start External Cardiac Massage.
                </p>
              </div>

              <div>
                <p className="font-bold">C. Severe Bleeding?</p>
                <p className="mt-1 leading-7">
                  Stop bleeding by pressing firmly on the bleeding area with a
                  pad for a few minutes or apply pressure on the pressure point.
                </p>
              </div>
            </div>
          </div>

          {/* Further Action */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. Further First Aid Action
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>• Treat for shock.</p>
              <p>• Relieve pain.</p>
              <p>• Avoid handling the casualty unnecessarily.</p>
              <p>
                • Arrange for the safe removal of the casualty to hospital.
              </p>
            </div>
          </div>

          {/* Quick Revision */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ First Aid is immediate assistance before medical help.</p>
              <p>✓ Save life.</p>
              <p>✓ Prevent further injury and deterioration.</p>
              <p>✓ Relieve pain.</p>
              <p>✓ Obtain medical care at the earliest.</p>
              <p>✓ Check breathing, circulation and severe bleeding.</p>
              <p>✓ Treat shock and avoid unnecessary handling.</p>
              <p>✓ Arrange safe removal to hospital.</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← EFA Topics
            </Link>

            <Link
              href="/efa/topic-02"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 02: Body Structure & Functions →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}