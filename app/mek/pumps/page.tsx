"use client";

import Link from "next/link";

export default function PumpsPage() {
  const pumpTypes = [
    {
      title: "Centrifugal Pump",
      icon: "💧",
      text: "A centrifugal pump uses a rotating impeller to increase the velocity and pressure of liquid. It is widely used on ships for sea water, fresh water, cooling and ballast duties.",
    },
    {
      title: "Reciprocating Pump",
      icon: "↔️",
      text: "A reciprocating pump uses a piston or plunger moving backward and forward inside a cylinder. It is a positive displacement pump.",
    },
    {
      title: "Gear Pump",
      icon: "⚙️",
      text: "A gear pump uses rotating gears to carry liquid from suction to discharge. It is commonly used for lubricating oil and fuel oil.",
    },
    {
      title: "Screw Pump",
      icon: "🔩",
      text: "A screw pump uses rotating screws to move liquid smoothly through the pump. It is suitable for oils and other viscous liquids.",
    },
  ];

  const safety = [
    "Wear correct PPE before working on pumps.",
    "Stop and isolate the pump before maintenance.",
    "Switch off and isolate electrical power before dismantling.",
    "Close suction and discharge valves when required before opening the pump.",
    "Release internal pressure before loosening covers or connections.",
    "Never touch rotating shafts or couplings while the pump is running.",
    "Ensure coupling guards are correctly fitted.",
    "Clean spilled oil or water immediately to prevent slipping.",
    "Use correct tools during maintenance.",
    "After maintenance, ensure all tools and loose materials are removed before starting.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Link
            href="/mek"
            className="mb-8 inline-block text-sm font-semibold text-blue-200 hover:text-white"
          >
            ← Back to MEK Topics
          </Link>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            MEK • TOPIC 03
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Pumps
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the basic types of pumps used on ships, their working
            principles, priming, cavitation, maintenance and essential safety
            precautions for GP Rating.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* OBJECTIVES */}
        <section className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-extrabold text-blue-950">
            🎯 Learning Objectives
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Understand the purpose of a pump.",
              "Identify common pumps used on ships.",
              "Understand centrifugal pump operation.",
              "Understand positive displacement pumps.",
              "Know the meaning and importance of priming.",
              "Understand cavitation and basic pump safety.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-medium shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        <Section number="01" title="What is a Pump?">
          <p>
            A <strong>pump</strong> is a machine used to move liquid from one
            place to another by increasing its pressure or energy.
          </p>

          <p className="mt-4">
            Ships use pumps for many important services including cooling,
            ballast, bilge, fire fighting, fuel oil, lubricating oil and fresh
            water systems.
          </p>

          <InfoBox>
            A pump normally creates flow, while resistance in the piping system
            produces pressure.
          </InfoBox>
        </Section>

        <Section number="02" title="Main Types of Pumps">
          <div className="grid gap-5 md:grid-cols-2">
            {pumpTypes.map((pump) => (
              <div
                key={pump.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-4xl">{pump.icon}</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {pump.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {pump.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Centrifugal Pump">
          <p>
            A centrifugal pump is one of the most commonly used pumps on
            board ships. Its main rotating component is called the{" "}
            <strong>impeller</strong>.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="1" title="Suction">
              Liquid enters the centre or eye of the impeller.
            </Step>

            <Step number="2" title="Rotation">
              The motor rotates the pump shaft and impeller.
            </Step>

            <Step number="3" title="Acceleration">
              The rotating impeller throws liquid outward.
            </Step>

            <Step number="4" title="Discharge">
              Liquid leaves the pump through the discharge connection.
            </Step>
          </div>

          <ExamBox>
            A centrifugal pump generally requires priming before starting when
            it is installed above the liquid level and is not self-priming.
          </ExamBox>
        </Section>

        <Section number="04" title="Main Parts of a Centrifugal Pump">
          <div className="grid gap-4 md:grid-cols-2">
            <Part
              title="Impeller"
              text="Rotating component that transfers energy to the liquid."
            />
            <Part
              title="Casing"
              text="Surrounds the impeller and directs liquid towards the discharge."
            />
            <Part
              title="Shaft"
              text="Connects the driving motor or prime mover to the impeller."
            />
            <Part
              title="Bearings"
              text="Support the shaft and allow smooth rotation."
            />
            <Part
              title="Mechanical Seal / Gland"
              text="Helps prevent leakage where the rotating shaft passes through the casing."
            />
            <Part
              title="Coupling"
              text="Connects the pump shaft to its driving machinery."
            />
          </div>
        </Section>

        <Section number="05" title="Priming">
          <p>
            <strong>Priming</strong> means filling the pump casing and suction
            line with liquid and removing unwanted air before starting a
            centrifugal pump.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
            <strong className="text-orange-700">
              Why is priming necessary?
            </strong>

            <p className="mt-2">
              A conventional centrifugal pump cannot effectively pump air.
              Air inside the casing can prevent the pump from developing the
              required suction and liquid flow.
            </p>
          </div>

          <InfoBox>
            GP Rating Exam Point: Always remember — centrifugal pumps may
            require priming before starting.
          </InfoBox>
        </Section>

        <Section number="06" title="Positive Displacement Pump">
          <p>
            A positive displacement pump moves a fixed quantity of liquid by
            trapping it and forcing it from the suction side to the discharge
            side.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Part
              title="Reciprocating Pump"
              text="Uses piston or plunger movement to displace liquid."
            />
            <Part
              title="Gear Pump"
              text="Uses meshing gears to transfer liquid."
            />
            <Part
              title="Screw Pump"
              text="Uses rotating screws to move liquid continuously."
            />
          </div>

          <WarningBox>
            A positive displacement pump should not normally be operated
            against a closed discharge valve. A suitable relief valve is
            important to protect the pump and system from excessive pressure.
          </WarningBox>
        </Section>

        <Section number="07" title="Cavitation">
          <p>
            <strong>Cavitation</strong> occurs when vapour bubbles form in a
            low-pressure region of the liquid and then collapse as they move
            into a higher-pressure region.
          </p>

          <h3 className="mt-6 text-xl font-bold text-blue-950">
            Signs of Cavitation
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Abnormal noise",
              "Excessive vibration",
              "Reduced pump performance",
              "Fluctuating discharge",
              "Damage or erosion of the impeller",
              "Possible reduction in pump efficiency",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-medium"
              >
                ⚠️ {item}
              </div>
            ))}
          </div>

          <ExamBox>
            Poor suction conditions, restricted suction lines or inadequate
            suction pressure can contribute to cavitation.
          </ExamBox>
        </Section>

        <Section number="08" title="Basic Pump Maintenance">
          <div className="grid gap-3">
            {[
              "Check for abnormal noise and vibration.",
              "Check suction and discharge pressure.",
              "Inspect the pump for leakage.",
              "Check bearing temperature.",
              "Check lubrication where applicable.",
              "Inspect mechanical seals or gland packing.",
              "Check coupling and coupling guard.",
              "Keep suction strainers clean.",
              "Check foundation and mounting bolts.",
              "Maintain good housekeeping around the pump.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="font-black text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="09" title="Pump Safety Precautions">
          <div className="grid gap-3">
            {safety.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-100 bg-red-50 p-4"
              >
                <span className="font-black text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* QUICK REVISION */}
        <section className="rounded-3xl bg-gradient-to-br from-blue-950 to-slate-950 p-7 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            GP Rating Quick Revision
          </p>

          <h2 className="mt-2 text-3xl font-extrabold">
            Remember These Points
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "A pump is used to move liquid.",
              "The impeller is the main rotating part of a centrifugal pump.",
              "Centrifugal pumps may require priming.",
              "Gear and screw pumps are positive displacement pumps.",
              "Positive displacement pumps require protection against excessive discharge pressure.",
              "Cavitation can cause noise, vibration and damage.",
              "Bearings require correct lubrication.",
              "Never work on a running pump without an approved safe procedure.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/10 p-4"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between">
          <Link
            href="/mek/engine-components"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 02: Engine Components
          </Link>

          <Link
            href="/mek/valves"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 04: Valves →
          </Link>
        </div>
      </section>
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 font-black text-white">
          {number}
        </span>

        <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="leading-8 text-slate-600">{children}</div>
    </section>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 font-medium text-blue-950">
      💡 {children}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 font-medium text-slate-800">
      ⚠️ <strong>Safety:</strong> {children}
    </div>
  );
}

function ExamBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5 font-medium text-slate-800">
      📌 <strong>Exam Point:</strong> {children}
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 font-bold text-white">
        {number}
      </span>

      <h3 className="mt-3 font-bold text-blue-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {children}
      </p>
    </div>
  );
}

function Part({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">⚙️ {title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}