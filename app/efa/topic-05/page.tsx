"use client";

import Link from "next/link";

export default function EFATopic05() {
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
            Elementary First Aid • Topic 05
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            ❤️ Resuscitation
          </h1>

          <p className="mt-3 text-emerald-50">
            Basic Life Support • Airway • Breathing • Circulation
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* BLS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Basic Life Support
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Basic life support is an emergency lifesaving procedure that
              consists of recognizing and correcting failure of the
              respiratory or cardiovascular systems.
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              A profound disturbance of breathing or circulation can promptly
              produce brain death.
            </p>
          </div>

          {/* WHEN INDICATED */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Basic Life Support is Indicated For
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Card
                icon="🫁"
                title="Airway Obstruction"
                text="Obstruction of the airway."
              />

              <Card
                icon="💨"
                title="Respiratory Arrest"
                text="Breathing or respiratory arrest."
              />

              <Card
                icon="❤️"
                title="Cardiac Arrest"
                text="Circulatory or cardiac arrest."
              />
            </div>
          </div>

          {/* ABC */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              ABC of CPR
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ABC
                letter="A"
                title="Airway"
                text="Airway clearance"
              />

              <ABC
                letter="B"
                title="Breathing"
                text="Assist in breathing"
              />

              <ABC
                letter="C"
                title="Circulation"
                text="Establish circulation"
              />
            </div>
          </div>

          {/* AIRWAY */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-emerald-600">
              STEP A
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
              🫁 Airway
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <Step
                no="1"
                text="Establish an open airway."
              />

              <Step
                no="2"
                text="Place the person face-up on a hard surface."
              />

              <Step
                no="3"
                text="Put one hand under the patient's neck and the other hand on the forehead."
              />

              <Step
                no="4"
                text="Lift the neck with one hand and apply pressure on the forehead with the other, keeping the head backward."
              />

              <Step
                no="5"
                text="If foreign material is obstructing the mouth or throat, remove it."
              />
            </div>
          </div>

          {/* CHECK BREATHING */}
          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
            <h2 className="text-xl font-extrabold text-blue-800">
              👀 Check for Breathing
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              After opening the airway, assess whether breathing has returned.
              The handout instructs the rescuer to check for movement of air
              and observe movement of the casualty&apos;s chest and abdomen.
            </p>
          </div>

          {/* BREATHING */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-emerald-600">
              STEP B
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
              💨 Breathing
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If the casualty does not resume adequate spontaneous breathing,
              the handout describes artificial respiration by mouth-to-mouth,
              mouth-to-nose or other techniques.
            </p>

            <div className="mt-5 rounded-xl bg-emerald-50 p-5">
              <p className="font-bold text-emerald-800">
                Important Principle
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Regardless of the method used, preservation of an open airway
                is essential.
              </p>
            </div>
          </div>

          {/* MOUTH TO MOUTH */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Mouth-to-Mouth Respiration
            </h2>

            <div className="mt-5 space-y-3">
              <Action text="Keep the patient's head tilted backward." />
              <Action text="Maintain the backward tilt of the head." />
              <Action text="Pinch the patient's nostrils to prevent air escaping through the nose." />
              <Action text="Form a tight seal with your mouth over the patient's mouth." />
              <Action text="Watch the patient's chest while inflating the lungs." />
              <Action text="Remove your mouth and allow passive exhalation." />
              <Action text="If there is no air exchange, check for airway obstruction." />
            </div>
          </div>

          {/* CIRCULATION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-emerald-600">
              STEP C
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
              ❤️ Circulation — Heart Compression
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The handout states that when a non-breathing person&apos;s heart
              has stopped beating, external heart compression should be
              applied along with artificial respiration.
            </p>
          </div>

          {/* HEART COMPRESSION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Technique for Heart Compression
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <Action text="The casualty should be on a firm surface." />

              <Action text="Kneel close to the side of the casualty." />

              <Action text="Place the heel of one hand over the lower half of the sternum as described in the handout." />

              <Action text="Place the heel of the other hand on top of the first hand." />

              <Action text="Keep the arms straight with the shoulders directly above the casualty's chest." />

              <Action text="Compression should be regular and smooth." />

              <Action text="Artificial respiration is combined with heart compression." />
            </div>
          </div>

          {/* BRAIN OXYGEN */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-xl font-extrabold text-red-700">
              🚨 Importance of Oxygen
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The handout states that brain damage is possible when the brain
              is deprived of oxygen for 4–6 minutes and is very likely beyond
              6 minutes without oxygen.
            </p>
          </div>

          {/* HANDBOOK NOTE */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-xl font-extrabold text-amber-800">
              📘 Handout Training Note
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The supplied EFA handout contains specific compression rates,
              ventilation rates and compression-to-breath ratios. These are
              retained as course-handout material and may reflect the edition
              of training material from which the handout was prepared.
            </p>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ BLS = Basic Life Support.</p>
              <p>✓ A = Airway clearance.</p>
              <p>✓ B = Breathing.</p>
              <p>✓ C = Circulation.</p>
              <p>✓ Maintain an open airway.</p>
              <p>✓ Check whether breathing has returned.</p>
              <p>✓ Artificial respiration is used when breathing is absent.</p>
              <p>✓ Heart compression is used when circulation is absent.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-04"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 04
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-06"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 06: Bleeding →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
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

function ABC({
  letter,
  title,
  text,
}: {
  letter: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-extrabold text-emerald-700">
        {letter}
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-emerald-50">{text}</p>
    </div>
  );
}

function Step({
  no,
  text,
}: {
  no: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
        {no}
      </div>
      <p className="leading-6">{text}</p>
    </div>
  );
}

function Action({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 font-medium leading-6 text-slate-700">
      ✓ {text}
    </div>
  );
}