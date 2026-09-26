"use client";

import Link from "next/link";

export default function EFATopic10() {
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
            Elementary First Aid • Topic 10
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🩹 Other Topics
          </h1>

          <p className="mt-3 text-emerald-50">
            Bandaging and Enclosed Space Safety
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* BANDAGING */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">
              Part 01
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-emerald-700">
              🩹 Bandaging
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A bandage is a piece of material used either to support a medical
              device such as a dressing or splint, or on its own to provide
              support to or restrict the movement of a part of the body.
            </p>
          </div>

          {/* BANDAGE WITH DRESSING */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Bandage with a Dressing
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              When used with a dressing, the dressing is applied directly on
              the wound and the bandage is used to hold the dressing in place.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Card
                icon="🩹"
                title="Dressing"
                text="Applied directly on the wound."
              />

              <Card
                icon="➕"
                title="Bandage"
                text="Used to hold the dressing in place."
              />

              <Card
                icon="🦴"
                title="Support"
                text="May also be used to support a splint or body part."
              />
            </div>
          </div>

          {/* OTHER USES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Other Uses of Bandages
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Provide support to a part of the body." />
              <Item text="Restrict movement of a part of the body." />
              <Item text="Elastic bandages may be used to reduce swelling." />
              <Item text="Provide support to a sprained ankle." />
              <Item text="Bandages may be used to hold a dressing or splint in position." />
            </div>
          </div>

          {/* TYPES */}
          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
            <h2 className="text-2xl font-extrabold text-blue-800">
              📦 3. Bandages in First Aid Kits
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Adhesive Bandages
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  Various sizes.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Ace Bandages
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  Listed in the handout as a first aid kit bandage.
                </p>
              </div>
            </div>
          </div>

          {/* IMPROVISED */}
          <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
            <h2 className="text-xl font-extrabold text-emerald-800">
              💡 Improvised Bandages
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The handout states that bandages can often be improvised as the
              situation demands by using clothing, blankets or other material.
            </p>
          </div>

          {/* ENCLOSED SPACE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">
              Part 02
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-emerald-700">
              ⚠️ Enclosed Space
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A ship is a complex structure with several small and enclosed
              spaces. Some enclosed spaces are used for machinery, machine
              parts or workshop equipment.
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              According to the handout, poor or zero ventilation may allow
              toxic gases to collect. A person entering without proper
              precautions may become unconscious and may even die.
            </p>
          </div>

          {/* HAZARDS */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              🚨 Enclosed Space Hazards
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Hazard text="Deficiency of oxygen" />
              <Hazard text="Presence of toxic gases" />
              <Hazard text="Poor or zero ventilation" />
              <Hazard text="Possible fire hazards during hot work" />
              <Hazard text="Possible pressure inside the space" />
              <Hazard text="Danger during entry and rescue operations" />
            </div>
          </div>

          {/* ENTRY PROCEDURE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Procedure Before Entering an Enclosed Space
            </h2>

            <div className="mt-5 space-y-3">
              <Step
                no="1"
                text="Risk assessment should be carried out by a competent officer."
              />

              <Step
                no="2"
                text="Prepare a list of the work to be done, such as welding or pipe replacement."
              />

              <Step
                no="3"
                text="The risk assessment should consider the work and rescue operation."
              />

              <Step
                no="4"
                text="Identify potential hazards such as the presence of toxic gases."
              />

              <Step
                no="5"
                text="Open and secure the space and check whether it is pressurized."
              />

              <Step
                no="6"
                text="Minimize fire hazards if hot work is to be carried out."
              />

              <Step
                no="7"
                text="The confined space must be well ventilated before entry."
              />

              <Step
                no="8"
                text="Check oxygen and other gas content using an oxygen analyzer and gas detector."
              />

              <Step
                no="9"
                text="Ensure enough lighting and illumination before entering."
              />

              <Step
                no="10"
                text="Complete the proper permit to work and required checklist."
              />
            </div>
          </div>

          {/* OXYGEN */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-2xl font-extrabold text-amber-800">
              🫁 Oxygen Content
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The supplied handout states that the oxygen content should read
              <strong> 20% by volume</strong>. It states that a percentage less
              than this is not acceptable and more time should be allowed for
              ventilation.
            </p>
          </div>

          {/* PERMIT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              📋 5. Permit to Work
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A proper permit to work must be filled out and the checklist
              checked to help prevent an accident that could endanger life.
            </p>

            <div className="mt-4 rounded-xl bg-slate-50 p-5">
              <p className="font-semibold leading-7 text-slate-700">
                The permit to work is valid only for a certain time period.
                If that period expires, the handout states that a new permit
                should be issued and the checklist completed again.
              </p>
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Bandages can hold dressings and support splints.</p>
              <p>✓ Bandages may support or restrict movement.</p>
              <p>✓ Bandages may be improvised when required.</p>
              <p>✓ Enclosed spaces may contain toxic gases.</p>
              <p>✓ Carry out risk assessment before entry.</p>
              <p>✓ Identify potential hazards.</p>
              <p>✓ Ventilate the enclosed space before entry.</p>
              <p>✓ Test oxygen and other gases.</p>
              <p>✓ Provide adequate lighting.</p>
              <p>✓ Complete permit to work and checklist.</p>
            </div>
          </div>

          {/* COURSE COMPLETE */}
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-7 text-center">
            <div className="text-4xl">🎓</div>

            <h2 className="mt-3 text-2xl font-extrabold text-emerald-800">
              EFA Notes Completed
            </h2>

            <p className="mt-2 text-slate-700">
              You have completed all 10 Elementary First Aid topics.
            </p>

            <Link
              href="/efa/practice-cbt"
              className="mt-5 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Start EFA Practice CBT →
            </Link>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-09"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 09
            </Link>

            <Link
              href="/efa"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              EFA Course Home
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

function Item({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 font-medium leading-6 text-slate-700">
      ✓ {text}
    </div>
  );
}

function Hazard({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-white p-4 font-medium text-slate-700">
      ⚠ {text}
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

      <p className="leading-7 text-slate-700">{text}</p>
    </div>
  );
}