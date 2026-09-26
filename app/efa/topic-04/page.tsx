"use client";

import Link from "next/link";

export default function EFATopic04() {
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
            Elementary First Aid • Topic 04
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🚑 The Unconscious Casualty
          </h1>

          <p className="mt-3 text-emerald-50">
            Recognition and first-aid management of unconsciousness
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* DEFINITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Definition
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Unconsciousness is a state of complete loss of consciousness.
              The casualty is unresponsive to painful stimulus, is unaware of
              the surroundings and the body muscles are in a state of
              relaxation.
            </p>
          </div>

          {/* CAUSES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Causes of Unconsciousness
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "Brain injuries",
                "Fits or convulsion",
                "Syncope or lack of cerebral circulation",
                "Infection of the coverings or tissues of the brain",
                "Brain tumors",
                "Exposure to extreme cold",
                "Severe infections",
                "Severe injuries",
                "Severe burns",
                "Drug reaction",
                "Electric shock",
                "Failure of liver or kidney",
                "Poisoning with chemicals, gas or alcohol",
                "Severe heart attack",
                "Drowning",
                "Diabetes",
                "Diabetes or overdose of insulin",
                "Severe bleeding or fluid loss",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 font-medium text-slate-700"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>

          {/* RESPONSIVENESS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Level of Responsiveness
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The handout describes stages through which a person may pass
              during progression from consciousness or vice versa.
            </p>

            <div className="mt-5 space-y-3">
              <Stage
                number="I"
                text="Responds normally to questions and conversation."
              />
              <Stage
                number="II"
                text="Answers direct questions."
              />
              <Stage
                number="III"
                text="Responds vaguely to questions."
              />
              <Stage
                number="IV"
                text="Obeys commands."
              />
              <Stage
                number="V"
                text="Responds to pain only."
              />
              <Stage
                number="VI"
                text="Does not respond at all."
              />
            </div>
          </div>

          {/* FIRST AID */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. First Aid Management
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <Step
                no="1"
                text="Maintain the airway open and keep it clear."
              />
              <Step
                no="2"
                text="Ensure a free supply of fresh air and keep the air passage free."
              />
              <Step
                no="3"
                text="Take the casualty away from harmful gases. If inside a room, open doors and windows."
              />
              <Step
                no="4"
                text="Remove loose dentures or detached teeth and clear vomit or blood from the mouth."
              />
              <Step
                no="5"
                text="Correct the tongue if it has fallen back."
              />
              <Step
                no="6"
                text="Loosen tight clothing around the neck, chest and waist."
              />
              <Step
                no="7"
                text="Keep the casualty warm, but do not overheat."
              />
              <Step
                no="8"
                text="Keep back the crowd so that fresh air is not obstructed."
              />
            </div>
          </div>

          {/* BREATHING */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              🚨 If Breathing Stops
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If breathing has stopped or is about to stop, put the casualty
              on a hard surface in the supine or flat position and start
              artificial respiration immediately.
            </p>
          </div>

          {/* PUPILS / PULSE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. Check the Casualty
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-5">
                <h3 className="font-bold text-blue-800">
                  👁️ Pupils
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Check the pupils of the eyes to see whether they are dilated
                  or constricted.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-5">
                <h3 className="font-bold text-red-800">
                  ❤️ Pulse
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Listen for heart sounds and feel the pulse at the wrist and
                  neck.
                </p>
              </div>
            </div>
          </div>

          {/* HEART */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-xl font-extrabold text-amber-800">
              ⚠️ If the Heart Has Stopped
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The handout instructs that heart compression should be started
              without wasting time if the heart has stopped.
            </p>
          </div>

          {/* MONITORING */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              6. Continuous Care
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                ✓ Continuously watch for changes in pulse, respiration and
                level of responsiveness.
              </p>

              <p>
                ✓ If pulse and respiration are restored, place the casualty in
                the recovery position.
              </p>

              <p>
                ✓ Do not leave the casualty until handed over to medical
                personnel on a stretcher.
              </p>

              <p>
                ✓ Give nothing orally while the casualty remains unconscious.
              </p>
            </div>
          </div>

          {/* FURTHER ACTION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              7. Further Action
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Action text="Remove the underlying cause of unconsciousness." />
              <Action text="Restore breathing and heartbeat." />
              <Action text="Control bleeding, if any." />
              <Action text="Remove poisons." />
              <Action text="Prevent further injury to the casualty." />
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Maintain a clear airway.</p>
              <p>✓ Ensure fresh air.</p>
              <p>✓ Check breathing and circulation.</p>
              <p>✓ Check pupils and pulse.</p>
              <p>✓ Loosen tight clothing.</p>
              <p>✓ Keep the casualty warm.</p>
              <p>✓ Monitor continuously.</p>
              <p>✓ Give nothing orally while unconscious.</p>
              <p>✓ Prevent further injury.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-03"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 03
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-05"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 05: Resuscitation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stage({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
        {number}
      </div>
      <p className="font-medium text-slate-700">{text}</p>
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
    <div className="rounded-xl bg-emerald-50 p-4 font-medium text-slate-700">
      ✓ {text}
    </div>
  );
}