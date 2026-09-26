"use client";

import Link from "next/link";

export default function EFATopic06() {
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
            Elementary First Aid • Topic 06
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🩸 Bleeding
          </h1>

          <p className="mt-3 text-emerald-50">
            Types of bleeding, effects and first aid management
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
              The human body contains approximately 5 litres of blood.
              According to the course handout, a healthy adult can lose up to
              half a litre of blood without harmful effects, but loss of more
              than this can be threatening to life.
            </p>
          </div>

          {/* DEFINITION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Definition
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bleeding or haemorrhage is the escape of blood from blood
              vessels. The flow of blood may be from an artery, vein or
              capillary.
            </p>
          </div>

          {/* EFFECTS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Effects of Bleeding
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Haemorrhage from major blood vessels of the arms, neck and thigh can occur very rapidly." />
              <Item text="Severe haemorrhage must be controlled immediately to prevent excessive blood loss." />
              <Item text="Loss of red blood cells causes lack of oxygen to the body systems." />
              <Item text="A decrease in blood volume causes a decrease in blood pressure." />
              <Item text="The heart's pumping rate increases to compensate for reduced blood pressure." />
              <Item text="The force of the heartbeat is reduced because there is less blood to pump." />
            </div>
          </div>

          {/* TYPES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Types of Bleeding
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <BleedingCard
                title="Arterial Bleeding"
                icon="🔴"
                items={[
                  "Blood is bright red.",
                  "Blood spurts with each contraction of the heart.",
                  "Flow is pulse type.",
                ]}
              />

              <BleedingCard
                title="Venous Bleeding"
                icon="🩸"
                items={[
                  "Blood is dark red.",
                  "There is a steady flow of blood.",
                  "It does not spurt.",
                ]}
              />

              <BleedingCard
                title="Capillary Bleeding"
                icon="💧"
                items={[
                  "Blood is red.",
                  "It does not spurt.",
                  "Flow is slow but even.",
                ]}
              />
            </div>
          </div>

          {/* EXTERNAL INTERNAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. External & Internal Bleeding
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-red-50 p-5">
                <h3 className="text-xl font-bold text-red-700">
                  External Bleeding
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  If bleeding is from the surface of the body, it is called
                  external bleeding.
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-700">
                  Internal Bleeding
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Internal bleeding occurs inside the body and may involve the
                  chest, skull or abdomen. The bleeding cannot be seen
                  immediately.
                </p>
              </div>
            </div>
          </div>

          {/* SIGNS */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              🚨 Signs Associated with Major Blood Loss
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Item text="Thirst" />
              <Item text="Blurring of vision" />
              <Item text="Fainting and giddiness" />
              <Item text="Face and lips become pale" />
              <Item text="Skin feels cold" />
              <Item text="Pulse becomes faster but weaker" />
              <Item text="Restlessness and sweating" />
              <Item text="Breathing becomes shallow" />
              <Item text="Unconsciousness" />
            </div>
          </div>

          {/* AIM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              6. Aim of First Aid
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Control bleeding as soon as possible." />
              <Item text="Keep the wound clean." />
              <Item text="Dress the wound to minimize blood loss." />
              <Item text="Help prevent infection." />
            </div>
          </div>

          {/* GENERAL MANAGEMENT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              7. General Management
            </h2>

            <div className="mt-5 space-y-3">
              <NumberStep
                no="1"
                text="Place the casualty in a position where he or she will be least affected by the loss of blood."
              />
              <NumberStep
                no="2"
                text="Lie the casualty down and raise the legs in a semi-flexed position."
              />
              <NumberStep
                no="3"
                text="Control the bleeding."
              />
              <NumberStep
                no="4"
                text="Maintain the airway."
              />
              <NumberStep
                no="5"
                text="Prevent loss of body heat by placing blankets under and over the casualty."
              />
              <NumberStep
                no="6"
                text="Keep the casualty at rest."
              />
            </div>
          </div>

          {/* MINOR BLEEDING */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              8. Minor Bleeding
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Wash your hands before dealing with the wound." />
              <Item text="If the wound is dirty, lightly rinse it with running water if available." />
              <Item text="Protect the wound with a clean cloth and clean the surrounding skin." />
              <Item text="Dress a small wound with a band aid." />
              <Item text="Raise and support the injured part unless an underlying fracture is suspected." />
              <Item text="For a larger wound, apply a dressing, gauze or clean pad and bandage it firmly." />
              <Item text="If in doubt, seek medical help." />
            </div>
          </div>

          {/* MAJOR EXTERNAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              9. Major External Bleeding
            </h2>

            <p className="mt-3 text-slate-700">
              The course handout describes four methods to control major
              external bleeding:
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Method
                no="01"
                title="Direct Pressure"
                text="Apply firm and steady pressure directly over the wound."
              />

              <Method
                no="02"
                title="Elevation"
                text="Raise the bleeding part above the level of the heart as described in the handout."
              />

              <Method
                no="03"
                title="Pressure Points"
                text="Arterial bleeding may be controlled by pressure at points where an artery lies close to the skin and underlying bone."
              />

              <Method
                no="04"
                title="Tourniquet"
                text="The handout limits tourniquet use to severe life-threatening bleeding that cannot be controlled by other means."
              />
            </div>
          </div>

          {/* TOURNIQUET */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-xl font-extrabold text-amber-800">
              ⚠️ Tourniquet
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The handout defines a tourniquet as a strip of rubber or cloth
              used to control severe bleeding. It states that it should be used
              only for severe life-threatening bleeding that cannot be
              controlled by other means and only on the upper or lower limbs.
            </p>
          </div>

          {/* INTERNAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              10. Internal Bleeding — First Aid
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Keep the casualty down with the head low and turned to one side." />
              <Item text="Advise the casualty not to move." />
              <Item text="If the condition allows, raise the legs." />
              <Item text="Loosen tight clothing around the neck, chest and waist." />
              <Item text="Minimize shock." />
              <Item text="Check breathing rate, pulse and level of responsiveness." />
              <Item text="If unconscious but breathing, place the casualty in the recovery position." />
              <Item text="Remove the casualty to hospital immediately and transport on a stretcher." />
            </div>
          </div>

          {/* DON'T */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-xl font-extrabold text-red-700">
              ❌ Internal Bleeding — Do Not
            </h2>

            <div className="mt-4 space-y-3 text-slate-700">
              <p>✕ Do not apply a hot-water bottle or ice bag to the chest or abdomen.</p>
              <p>✕ Do not give anything to eat or drink because surgery may be required.</p>
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Arterial — bright red and spurting/pulsating flow.</p>
              <p>✓ Venous — dark red and steady flow.</p>
              <p>✓ Capillary — slow, even flow.</p>
              <p>✓ Bleeding may be external or internal.</p>
              <p>✓ Control severe bleeding as soon as possible.</p>
              <p>✓ Maintain the airway and minimize shock.</p>
              <p>✓ Major external bleeding: pressure, elevation, pressure points and tourniquet.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-05"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 05
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-07"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 07: Management of Shock →
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

function NumberStep({
  no,
  text,
}: {
  no: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
        {no}
      </div>
      <p className="leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function BleedingCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>

      <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>
    </div>
  );
}

function Method({
  no,
  title,
  text,
}: {
  no: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-red-50 p-5">
      <p className="text-sm font-bold text-red-600">METHOD {no}</p>
      <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}