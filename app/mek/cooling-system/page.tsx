"use client";

import Link from "next/link";

export default function CoolingSystemPage() {
  const components = [
    {
      title: "Fresh Water Pump",
      icon: "💧",
      text: "Circulates fresh cooling water through the engine and cooling circuit.",
    },
    {
      title: "Sea Water Pump",
      icon: "🌊",
      text: "Circulates sea water through the cooler or heat exchanger.",
    },
    {
      title: "Heat Exchanger",
      icon: "♨️",
      text: "Transfers heat from hot fresh water to the colder sea-water circuit without mixing the two fluids.",
    },
    {
      title: "Expansion Tank",
      icon: "🛢️",
      text: "Provides space for expansion of fresh cooling water and helps maintain the cooling-water supply.",
    },
    {
      title: "Thermostatic Valve",
      icon: "🌡️",
      text: "Helps regulate engine cooling-water temperature by controlling the flow path.",
    },
    {
      title: "Sea Chest & Strainer",
      icon: "⚓",
      text: "Sea water enters through the sea chest, while the strainer helps prevent larger debris from entering the cooling system.",
    },
  ];

  const checks = [
    "Check cooling-water level.",
    "Check inlet and outlet temperatures.",
    "Check pump suction and discharge condition.",
    "Inspect the system for water leakage.",
    "Check sea-water strainer condition.",
    "Observe pump for abnormal noise or vibration.",
    "Check heat exchanger performance.",
    "Monitor engine cooling-water temperature.",
  ];

  const safety = [
    "Wear correct PPE before working on the cooling system.",
    "Never suddenly open a hot pressurised cooling system.",
    "Allow hot machinery and water to cool before maintenance.",
    "Isolate pumps before dismantling or maintenance.",
    "Isolate electrical power before working on electrically driven pumps.",
    "Close and isolate relevant valves before opening equipment.",
    "Release system pressure before removing covers or connections.",
    "Be careful of hot water, steam and hot surfaces.",
    "Clean water spills immediately to prevent slipping.",
    "Restore all valves to their correct operating position after maintenance.",
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
            MEK • TOPIC 06
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Cooling System
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn why marine diesel engines require cooling, fresh-water and
            sea-water cooling circuits, heat exchangers, temperature control
            and essential safety precautions for GP Rating.
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
              "Understand why an engine requires cooling.",
              "Understand the fresh-water cooling circuit.",
              "Understand the sea-water cooling circuit.",
              "Know the basic function of a heat exchanger.",
              "Understand basic temperature control.",
              "Know common cooling-system checks and safety precautions.",
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

        <Section number="01" title="Why Does an Engine Need Cooling?">
          <p>
            Combustion inside a diesel engine produces a large amount of heat.
            Some of this heat must be removed to keep engine components within
            their safe operating temperature range.
          </p>

          <p className="mt-4">
            Excessive temperature can damage components, affect lubrication
            and reduce reliable engine operation.
          </p>

          <InfoBox>
            The cooling system removes unwanted heat and helps maintain the
            engine at its correct operating temperature.
          </InfoBox>
        </Section>

        <Section number="02" title="Basic Marine Cooling System">
          <p>
            A common marine engine cooling arrangement uses two separate
            circuits:
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="text-4xl">💧</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                Fresh-Water Circuit
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Fresh water circulates through the engine and absorbs heat
                from hot engine components.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <div className="text-4xl">🌊</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                Sea-Water Circuit
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sea water normally passes through a cooler or heat exchanger
                and removes heat from the fresh-water circuit.
              </p>
            </div>
          </div>

          <ExamBox>
            Fresh water and sea water normally remain separated inside the
            heat exchanger. Heat is transferred between them without the two
            fluids intentionally mixing.
          </ExamBox>
        </Section>

        <Section number="03" title="Fresh-Water Cooling Circuit">
          <div className="grid gap-4 md:grid-cols-4">
            <FlowBox number="1" title="F.W. Pump">
              Circulates cooling water.
            </FlowBox>

            <FlowBox number="2" title="Engine">
              Fresh water absorbs engine heat.
            </FlowBox>

            <FlowBox number="3" title="Heat Exchanger">
              Heat is transferred from fresh water to sea water.
            </FlowBox>

            <FlowBox number="4" title="Return">
              Cooled fresh water returns to the engine circuit.
            </FlowBox>
          </div>

          <div className="mt-6 rounded-2xl bg-blue-950 p-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Simplified Flow
            </p>

            <p className="mt-4 text-lg font-extrabold md:text-2xl">
              F.W. Pump → Engine → Heat Exchanger → F.W. Pump
            </p>
          </div>
        </Section>

        <Section number="04" title="Sea-Water Cooling Circuit">
          <p>
            Sea water is taken from outside the ship through a sea inlet and
            used as a cooling medium.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <FlowBox number="1" title="Sea Chest">
              Provides sea-water inlet to the ship.
            </FlowBox>

            <FlowBox number="2" title="Strainer">
              Helps remove larger debris from incoming sea water.
            </FlowBox>

            <FlowBox number="3" title="S.W. Pump">
              Circulates sea water through the cooling circuit.
            </FlowBox>

            <FlowBox number="4" title="Heat Exchanger">
              Sea water absorbs heat before being discharged according to the
              system arrangement.
            </FlowBox>
          </div>

          <InfoBox>
            A blocked sea-water strainer can reduce cooling-water flow and may
            cause engine temperature to rise.
          </InfoBox>
        </Section>

        <Section number="05" title="Heat Exchanger">
          <p>
            A <strong>heat exchanger</strong> transfers heat from one fluid to
            another while normally keeping the two fluids separated.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-5 text-center md:grid-cols-3">
              <div>
                <div className="text-4xl">🔥</div>
                <h3 className="mt-2 font-bold text-blue-950">
                  Hot Fresh Water
                </h3>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl font-black text-orange-500">
                  → HEAT →
                </span>
              </div>

              <div>
                <div className="text-4xl">🌊</div>
                <h3 className="mt-2 font-bold text-blue-950">
                  Cooling Sea Water
                </h3>
              </div>
            </div>
          </div>

          <ExamBox>
            Fouling inside a heat exchanger can reduce heat transfer and lead
            to poor cooling performance.
          </ExamBox>
        </Section>

        <Section number="06" title="Main Cooling-System Components">
          <div className="grid gap-4 md:grid-cols-2">
            {components.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-3 font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="07" title="Engine Overheating">
          <p>
            Engine temperature can rise abnormally if the cooling system is
            unable to remove sufficient heat.
          </p>

          <h3 className="mt-6 text-xl font-bold text-blue-950">
            Possible Causes
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Low cooling-water level",
              "Cooling-water pump problem",
              "Blocked sea-water strainer",
              "Incorrect valve position",
              "Dirty or fouled heat exchanger",
              "Restricted cooling-water flow",
              "Cooling-water leakage",
              "Temperature-control problem",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-red-100 bg-red-50 p-4 font-medium"
              >
                ⚠️ {item}
              </div>
            ))}
          </div>

          <WarningBox>
            Abnormally high engine temperature should be reported and handled
            according to the machinery operating procedure. Do not suddenly
            open a hot pressurised cooling system.
          </WarningBox>
        </Section>

        <Section number="08" title="Routine Cooling-System Checks">
          <div className="grid gap-3">
            {checks.map((item, index) => (
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

        <Section number="09" title="Cooling-System Safety">
          <div className="grid gap-3">
            {safety.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-100 bg-red-50 p-4"
              >
                <span className="font-black text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-medium text-slate-700">
                  {item}
                </p>
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
              "Cooling removes unwanted heat from the engine.",
              "Fresh water normally circulates through the engine.",
              "Sea water removes heat through a heat exchanger.",
              "Fresh water and sea water normally remain separated.",
              "A sea-water strainer helps prevent debris entering the system.",
              "A dirty heat exchanger can reduce cooling efficiency.",
              "Low cooling-water flow can cause overheating.",
              "Never suddenly open a hot pressurised cooling system.",
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
            href="/mek/fuel-lubrication"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 05: Fuel & Lubrication
          </Link>

          <Link
            href="/mek/electrical-basics"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 07: Electrical Basics →
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

      <div className="leading-8 text-slate-600">
        {children}
      </div>
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

function ExamBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5 font-medium text-slate-800">
      📌 <strong>Exam Point:</strong> {children}
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

function FlowBox({
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

      <h3 className="mt-3 font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {children}
      </p>
    </div>
  );
}