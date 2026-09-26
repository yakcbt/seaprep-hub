"use client";

import Link from "next/link";

export default function EFATopic07() {
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
            Elementary First Aid • Topic 07
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            ⚕️ Management of Shock
          </h1>

          <p className="mt-3 text-emerald-50">
            Causes, types, signs & symptoms and first aid treatment
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* DEFINITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. What is Shock?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Shock is a state of inadequate tissue perfusion. In other words,
              not enough oxygen and nutrients are being delivered to the cells
              to keep them alive.
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              Shock results from a decrease in effective circulating
              oxygenated blood or fluid in the body due to injury or illness,
              resulting in a decrease in the vital functions of various
              organs.
            </p>
          </div>

          {/* EFFECTS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Effects of Shock
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="It can vary from faintness to complete collapse." />
              <Item text="Early loss of consciousness mainly involves the nervous system and may be fatal." />
              <Item text="Progressive loss of blood from active circulation may lead to failure of heart output." />
              <Item text="Insufficient oxygen may reach cells that are vital for survival." />
              <Item text="Continuous lowering of blood pressure may lead to kidney and liver failure." />
            </div>
          </div>

          {/* CAUSES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Causes of Shock
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Cause text="Severe or extensive injury" />
              <Cause text="Severe pain" />
              <Cause text="Heart attack" />
              <Cause text="Internal or external loss of blood" />
              <Cause text="Severe burns causing loss of body fluids" />
              <Cause text="Electric shock or electrocution" />
              <Cause text="Exposure to extreme heat or cold" />
              <Cause text="Drugs or allergic reactions" />
              <Cause text="Poisoning from drugs, gases or other chemicals" />
              <Cause text="Alcohol intoxication" />
              <Cause text="Stress and fright" />
              <Cause text="Bites or stings of poisonous animals or insects" />
            </div>
          </div>

          {/* TYPES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Types of Shock
            </h2>

            <div className="mt-5 space-y-4">
              <ShockType
                no="01"
                title="Nervous Shock"
                text="May result from strong emotional upset such as fear or pain. The handout also associates it with spinal or head injury."
              />

              <ShockType
                no="02"
                title="Haemorrhagic Shock"
                text="Occurs due to loss of blood from external bleeding or loss of body fluid due to wounds, multiple injuries, burns, severe vomiting or loose motions."
              />

              <ShockType
                no="03"
                title="Cardiogenic Shock"
                text="Occurs when the cardiac muscles are not pumping effectively due to injury or previous heart attack."
              />

              <ShockType
                no="04"
                title="Bacterial or Septic Shock"
                text="Associated with severe bacterial infection and toxins entering the blood."
              />

              <ShockType
                no="05"
                title="Anaphylactic Shock"
                text="A severe allergic reaction to some drugs or foreign proteins to which the person is sensitive."
              />

              <ShockType
                no="06"
                title="Electric Shock"
                text="Associated with electrocution or contact with a high-voltage electric current."
              />
            </div>
          </div>

          {/* SIGNS */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              🚨 Signs & Symptoms
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Symptom text="Anxiety and restlessness" />
              <Symptom text="Weakness" />
              <Symptom text="Fainting or giddiness" />
              <Symptom text="Disorientation" />
              <Symptom text="Pale, cold and often moist skin" />
              <Symptom text="Shallow, rapid or gasping breathing" />
              <Symptom text="Nausea and vomiting" />
              <Symptom text="Extreme thirst" />
              <Symptom text="Unconsciousness" />
              <Symptom text="Blood pressure falls" />
              <Symptom text="Pupils are dilated" />
              <Symptom text="Evidence of associated external or internal injury" />
            </div>
          </div>

          {/* FIRST AID */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. First Aid Treatment
            </h2>

            <div className="mt-5 space-y-3">
              <Step
                no="1"
                text="Reassure and comfort the casualty when conscious."
              />

              <Step
                no="2"
                text="Remove the cause of shock where possible."
              />

              <Step
                no="3"
                text="Control bleeding, restore breathing and relieve severe pain as described in the handout."
              />

              <Step
                no="4"
                text="Loosen tight clothing to assist circulation and breathing."
              />

              <Step
                no="5"
                text="Keep the casualty warm, but do not overheat."
              />

              <Step
                no="6"
                text="Check breathing rate, pulse rate and level of consciousness."
              />

              <Step
                no="7"
                text="Keep the casualty in the recovery position as directed in the handout."
              />

              <Step
                no="8"
                text="If breathing and heartbeat stop, establish an airway and begin resuscitation as described in the course material."
              />

              <Step
                no="9"
                text="Remove the casualty to hospital immediately."
              />

              <Step
                no="10"
                text="Transport the casualty on a stretcher while maintaining the treatment position."
              />
            </div>
          </div>

          {/* DO NOT */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-2xl font-extrabold text-amber-800">
              ⚠️ Do Not
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                ✕ Do not apply a hot-water bottle.
              </p>

              <p>
                ✕ Do not move the casualty unnecessarily.
              </p>

              <p>
                ✕ Do not give alcohol.
              </p>

              <p>
                ✕ Do not allow the casualty to smoke.
              </p>

              <p>
                ✕ The handout also warns against giving anything by mouth
                where surgery may be required.
              </p>
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Shock = inadequate tissue perfusion.</p>
              <p>✓ Cells do not receive enough oxygen and nutrients.</p>
              <p>✓ Severe injury, bleeding, burns and heart attack can cause shock.</p>
              <p>✓ Shock may lead from faintness to complete collapse.</p>
              <p>✓ Check breathing, pulse and consciousness.</p>
              <p>✓ Keep the casualty warm but do not overheat.</p>
              <p>✓ Avoid unnecessary movement.</p>
              <p>✓ Arrange immediate hospital treatment.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-06"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 06
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-08"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 08: Burns & Scalds →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 font-medium leading-6 text-slate-700">
      ✓ {text}
    </div>
  );
}

function Cause({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 font-medium text-slate-700">
      • {text}
    </div>
  );
}

function Symptom({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-white p-4 font-medium text-slate-700">
      • {text}
    </div>
  );
}

function ShockType({
  no,
  title,
  text,
}: {
  no: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="text-sm font-bold text-emerald-600">
        TYPE {no}
      </p>
      <h3 className="mt-1 text-lg font-bold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 leading-6 text-slate-700">
        {text}
      </p>
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
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
        {no}
      </div>
      <p className="leading-7 text-slate-700">
        {text}
      </p>
    </div>
  );
}