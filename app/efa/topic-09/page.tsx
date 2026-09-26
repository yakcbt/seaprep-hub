"use client";

import Link from "next/link";

export default function EFATopic09() {
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
            Elementary First Aid • Topic 09
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🚑 Rescue and Transportation of Casualty
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            General principles for safe removal and transportation of a sick
            or injured person.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Introduction
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The removal of a sick or injured person either from the site of
              an accident or ashore is a matter of importance, since the
              casualty&apos;s life may depend on the arrangements made.
            </p>
          </div>

          {/* BEFORE TRANSPORT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Before Moving the Casualty
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The following should be attended to before transportation:
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Action
                icon="🩸"
                title="Arrest Severe Haemorrhage"
                text="Control severe haemorrhage before moving the casualty."
              />

              <Action
                icon="⚕️"
                title="Treat for Shock"
                text="Treat the casualty for shock before transportation."
              />

              <Action
                icon="🦴"
                title="Splint Fractures"
                text="Splint fractures securely before moving the casualty."
              />

              <Action
                icon="🩹"
                title="Cover Wounds"
                text="Cover wounds before transportation."
              />
            </div>
          </div>

          {/* SUPPORT */}
          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
            <h2 className="text-2xl font-extrabold text-blue-800">
              🤲 3. Support the Injured Part
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The injured part should be supported well while moving the
              casualty.
            </p>
          </div>

          {/* DO NOT WALK */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              ⚠️ Do Not Allow the Casualty to Walk
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The handout states that a casualty with shock, haemorrhage or a
              head injury should not be allowed to walk even if conscious.
            </p>
          </div>

          {/* OBSERVATION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Observe During Transportation
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              During transportation, constantly observe the casualty&apos;s
              condition.
            </p>

            <div className="mt-5 rounded-xl bg-emerald-50 p-5">
              <p className="text-lg font-bold text-emerald-800">
                Transportation must be:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Point icon="🛡️" title="Safe" />
                <Point icon="⚓" title="Steady" />
                <Point icon="⚡" title="Speedy" />
              </div>
            </div>
          </div>

          {/* METHOD */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. Selection of Transportation Method
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The method of transportation depends upon various factors.
            </p>

            <div className="mt-5 space-y-3">
              <Factor
                no="01"
                title="Number of Helpers"
                text="Consider the number of helpers available."
              />

              <Factor
                no="02"
                title="Mode of Transportation"
                text="Consider the mode of transportation available."
              />

              <Factor
                no="03"
                title="Type of Injury"
                text="The type of injury affects the method of transportation."
              />

              <Factor
                no="04"
                title="Distance"
                text="Consider the distance to be covered."
              />

              <Factor
                no="05"
                title="Nature of Route"
                text="Consider the nature of the route to be covered."
              />
            </div>
          </div>

          {/* TRANSPORT SEQUENCE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              6. Transportation Sequence
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-5">
              <Sequence no="1" text="Control severe haemorrhage" />
              <Sequence no="2" text="Treat for shock" />
              <Sequence no="3" text="Splint fracture & cover wounds" />
              <Sequence no="4" text="Support injured part" />
              <Sequence no="5" text="Transport and observe" />
            </div>
          </div>

          {/* IMPORTANT */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-xl font-extrabold text-amber-800">
              📌 Important
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The transport method should be selected according to the
              casualty&apos;s injury, available helpers, available mode of
              transport, distance and the route to be covered.
            </p>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Arrest severe haemorrhage before moving.</p>
              <p>✓ Treat for shock.</p>
              <p>✓ Splint fractures securely.</p>
              <p>✓ Cover wounds before moving.</p>
              <p>✓ Support the injured part.</p>
              <p>
                ✓ Do not allow a casualty with shock, haemorrhage or head
                injury to walk.
              </p>
              <p>✓ Constantly observe the casualty during transportation.</p>
              <p>✓ Transportation must be safe, steady and speedy.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-08"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 08
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-10"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 10: Other Topics →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Action({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Point({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 text-center shadow-sm">
      <div className="text-2xl">{icon}</div>
      <p className="mt-2 font-extrabold text-emerald-700">{title}</p>
    </div>
  );
}

function Factor({
  no,
  title,
  text,
}: {
  no: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
        {no}
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
      </div>
    </div>
  );
}

function Sequence({
  no,
  text,
}: {
  no: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 text-center">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
        {no}
      </div>

      <p className="mt-3 text-sm font-semibold leading-5 text-slate-700">
        {text}
      </p>
    </div>
  );
}