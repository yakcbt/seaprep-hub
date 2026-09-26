"use client";

import Link from "next/link";

export default function EFATopic03() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/efa"
            className="text-sm font-semibold text-emerald-100 hover:text-white"
          >
            ← Back to EFA
          </Link>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-100">
            Elementary First Aid • Topic 03
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🛌 Positioning of Casualty
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            A patient is nursed in different positions according to the
            situation and condition of the casualty.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              Introduction
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The patient is nursed in different positions in different
              situations. The commonly used positions are described below.
            </p>
          </div>

          {/* RECOVERY POSITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                🛌
              </div>

              <div>
                <p className="text-sm font-bold text-emerald-600">
                  POSITION 01
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Recovery Position
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-emerald-50 p-5">
              <p className="font-bold text-emerald-800">
                When is it used?
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                A patient who is unconscious but breathing and has a heartbeat
                should be nursed in the recovery position.
              </p>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Advantages of Recovery Position
            </h3>

            <div className="mt-4 space-y-3 text-slate-700">
              <p>✓ It maintains an open airway.</p>
              <p>✓ The tongue cannot fall to the back of the throat.</p>
              <p>
                ✓ The head and neck remain in an extended position so that the
                air passage is widened.
              </p>
              <p>
                ✓ Vomit or other fluid in the casualty&apos;s mouth can drain
                freely.
              </p>
            </div>
          </div>

          {/* WHEN NOT USED */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-xl font-extrabold text-red-700">
              ⚠️ Recovery Position Cannot Be Used
            </h2>

            <div className="mt-4 space-y-3 text-slate-700">
              <p>
                • When there are fractures to the upper or lower body.
              </p>

              <p>
                • When the casualty is lying in a confined space.
              </p>

              <p>
                • When it is not possible to bend the limbs.
              </p>
            </div>
          </div>

          {/* PRONE POSITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🛏️
              </div>

              <div>
                <p className="text-sm font-bold text-blue-600">
                  POSITION 02
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Prone Position
                </h2>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-700">
              The patient is placed on the abdomen with the head turned to one
              side. A pillow is placed under the head and the hands are kept
              on the sides.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-5">
              <p className="font-bold text-blue-800">
                Used For
              </p>
              <p className="mt-2 text-slate-700">
                Burns of the back.
              </p>
            </div>
          </div>

          {/* SHOCK POSITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                ⚕️
              </div>

              <div>
                <p className="text-sm font-bold text-amber-600">
                  POSITION 03
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Positioning in Shock
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                • Lay the casualty on the back.
              </p>

              <p>
                • Turn the head to one side.
              </p>

              <p>
                • Raise the legs with two pillows to improve blood supply to
                the heart.
              </p>
            </div>

            <div className="mt-5 rounded-xl bg-amber-50 p-5">
              <p className="font-bold text-amber-800">
                ⚠️ Important
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                If the victim has a fracture of the lower limbs, the limbs
                should not be elevated unless they are well splinted.
              </p>
            </div>
          </div>

          {/* FOWLERS POSITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-2xl">
                🫁
              </div>

              <div>
                <p className="text-sm font-bold text-cyan-700">
                  POSITION 04
                </p>

                <h2 className="text-2xl font-extrabold text-slate-900">
                  Fowlers Position
                </h2>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-700">
              This position is used when a patient is having difficulty in
              breathing.
            </p>

            <div className="mt-5 rounded-xl bg-cyan-50 p-5">
              <p className="font-bold text-cyan-800">
                Position
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                The patient is kept in a sitting position with the help of
                three to four pillows.
              </p>
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-emerald-800/50 p-4">
                <p className="font-bold">Recovery Position</p>
                <p className="mt-1 text-sm text-emerald-50">
                  Unconscious, breathing and heartbeat present.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-800/50 p-4">
                <p className="font-bold">Prone Position</p>
                <p className="mt-1 text-sm text-emerald-50">
                  Used for burns of the back.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-800/50 p-4">
                <p className="font-bold">Shock Position</p>
                <p className="mt-1 text-sm text-emerald-50">
                  Casualty on back, head to one side and legs raised.
                </p>
              </div>

              <div className="rounded-xl bg-emerald-800/50 p-4">
                <p className="font-bold">Fowlers Position</p>
                <p className="mt-1 text-sm text-emerald-50">
                  Sitting position for difficulty in breathing.
                </p>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-02"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 02
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-04"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 04: Unconscious Casualty →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}