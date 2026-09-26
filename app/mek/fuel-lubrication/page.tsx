"use client";

import Link from "next/link";

export default function FuelLubricationPage() {
  const fuelComponents = [
    {
      title: "Fuel Oil Tank",
      text: "Stores fuel oil required for operation of the diesel engine.",
    },
    {
      title: "Fuel Oil Pump",
      text: "Transfers fuel through the fuel system and maintains the required flow and pressure.",
    },
    {
      title: "Fuel Filter",
      text: "Removes solid impurities and contamination from fuel before it reaches sensitive engine components.",
    },
    {
      title: "Fuel Injector",
      text: "Injects finely atomised fuel into the combustion chamber at the required time.",
    },
  ];

  const lubeFunctions = [
    "Reduces friction between moving parts.",
    "Reduces wear of engine components.",
    "Carries away some heat from moving parts.",
    "Helps clean and carry contaminants towards filters.",
    "Provides a protective oil film between moving surfaces.",
    "Helps protect internal surfaces against corrosion.",
  ];

  const safety = [
    "Wear correct PPE when handling fuel and lubricating oil.",
    "Clean oil spills immediately to prevent slipping and fire hazards.",
    "Keep fuel away from hot surfaces and ignition sources.",
    "Never smoke near fuel handling or storage areas.",
    "Isolate pumps and equipment before maintenance.",
    "Release system pressure before opening filters or pipe connections.",
    "Use drip trays when opening fuel or lubricating oil systems.",
    "Do not mix different grades of lubricating oil unless specifically permitted.",
    "Dispose of oily waste according to shipboard procedures.",
    "Report fuel or lubricating oil leakage immediately.",
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
            MEK • TOPIC 05
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Fuel & Lubrication
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the basic marine fuel oil and lubricating oil systems,
            filters, pumps, fuel injectors, lubrication functions and important
            safety precautions for GP Rating.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* LEARNING OBJECTIVES */}
        <section className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-extrabold text-blue-950">
            🎯 Learning Objectives
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Understand the basic purpose of the fuel oil system.",
              "Identify important fuel system components.",
              "Understand the purpose of lubricating oil.",
              "Know the main functions of lubricating oil.",
              "Understand the importance of filters and oil pressure.",
              "Learn basic fuel and lubricating oil safety precautions.",
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

        <Section number="01" title="Purpose of the Fuel Oil System">
          <p>
            The <strong>fuel oil system</strong> stores, cleans, transfers and
            supplies fuel to the diesel engine at the required pressure and
            condition.
          </p>

          <p className="mt-4">
            Clean fuel is important for correct combustion and reliable engine
            operation.
          </p>

          <InfoBox>
            Simple flow:
            <div className="mt-2 font-extrabold">
              Fuel Tank → Pump → Filter → Engine → Fuel Injector
            </div>
          </InfoBox>
        </Section>

        <Section number="02" title="Main Fuel System Components">
          <div className="grid gap-4 md:grid-cols-2">
            {fuelComponents.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="font-bold text-blue-950">
                  ⛽ {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Fuel Injector">
          <p>
            The <strong>fuel injector</strong> supplies fuel into the engine
            combustion chamber in a finely atomised form.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard title="Correct Timing">
              Fuel must be injected at the correct stage of the engine cycle.
            </MiniCard>

            <MiniCard title="Atomisation">
              Fuel is broken into fine droplets to promote efficient
              combustion.
            </MiniCard>

            <MiniCard title="Correct Quantity">
              The engine requires the correct amount of fuel according to its
              operating condition.
            </MiniCard>
          </div>

          <ExamBox>
            Poor fuel atomisation can contribute to poor combustion, smoke and
            reduced engine performance.
          </ExamBox>
        </Section>

        <Section number="04" title="Fuel Filters">
          <p>
            Fuel filters remove dirt and other solid contamination from the
            fuel before it reaches sensitive fuel-system components.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
            <strong className="text-orange-700">Important:</strong>
            <p className="mt-2">
              A dirty or blocked fuel filter can restrict fuel flow and may
              affect engine operation.
            </p>
          </div>
        </Section>

        <Section number="05" title="What is Lubrication?">
          <p>
            <strong>Lubrication</strong> is the process of supplying oil
            between moving surfaces to reduce direct metal-to-metal contact,
            friction and wear.
          </p>

          <div className="mt-6 rounded-2xl bg-blue-950 p-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Basic Principle
            </p>

            <div className="mt-4 text-xl font-extrabold md:text-2xl">
              Moving Surface → Oil Film → Moving Surface
            </div>

            <p className="mt-3 text-slate-300">
              The lubricating oil film helps keep the moving surfaces
              separated.
            </p>
          </div>
        </Section>

        <Section number="06" title="Functions of Lubricating Oil">
          <div className="grid gap-4 md:grid-cols-2">
            {lubeFunctions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-medium"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </Section>

        <Section number="07" title="Basic Lubricating Oil System">
          <p>
            The lubricating oil system continuously supplies clean oil to
            bearings and other moving engine components.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <FlowBox number="1" title="Sump / Tank">
              Stores lubricating oil.
            </FlowBox>

            <FlowBox number="2" title="L.O. Pump">
              Circulates oil through the system.
            </FlowBox>

            <FlowBox number="3" title="Filter">
              Removes contaminants from the oil.
            </FlowBox>

            <FlowBox number="4" title="Engine">
              Oil reaches bearings and moving components.
            </FlowBox>
          </div>

          <InfoBox>
            A lubricating oil cooler may also be fitted to control oil
            temperature before the oil reaches the engine.
          </InfoBox>
        </Section>

        <Section number="08" title="Low Lubricating Oil Pressure">
          <p>
            Correct lubricating oil pressure is essential for safe engine
            operation.
          </p>

          <h3 className="mt-6 text-xl font-bold text-blue-950">
            Possible Causes of Low L.O. Pressure
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Low oil level",
              "Oil leakage",
              "Blocked suction strainer",
              "Pump problem",
              "Excessively hot or low-viscosity oil",
              "Excessive bearing clearances or internal leakage",
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
            Low lubricating oil pressure can cause serious engine damage.
            Follow the machinery operating procedure and report abnormal
            pressure immediately.
          </WarningBox>
        </Section>

        <Section number="09" title="Fuel & Lubrication Safety">
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
              "Fuel must be clean for reliable engine operation.",
              "Fuel filters remove solid contamination.",
              "Fuel injectors atomise fuel inside the combustion chamber.",
              "Lubricating oil reduces friction and wear.",
              "Lubricating oil also assists cooling and cleaning.",
              "L.O. pumps circulate oil through the system.",
              "Low lubricating oil pressure can seriously damage an engine.",
              "Fuel and oil leaks are important fire and slip hazards.",
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
            href="/mek/valves"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 04: Valves
          </Link>

          <Link
            href="/mek/cooling-system"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 06: Cooling System →
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

function MiniCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {children}
      </p>
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