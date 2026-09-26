"use client";

import Link from "next/link";

export default function EngineComponentsPage() {
  const components = [
    {
      no: "01",
      title: "Cylinder Head",
      icon: "🔩",
      text: "The cylinder head forms the top cover of the cylinder. It contains important parts such as inlet and exhaust valves, fuel injector and starting-air valve where fitted.",
      point:
        "It must withstand high combustion pressure and temperature.",
    },
    {
      no: "02",
      title: "Cylinder Liner",
      icon: "⚙️",
      text: "The cylinder liner is the cylindrical surface inside which the piston moves up and down. It provides a smooth wearing surface for the piston rings.",
      point:
        "The liner is cooled and lubricated to control temperature and reduce wear.",
    },
    {
      no: "03",
      title: "Piston",
      icon: "⬆️",
      text: "The piston moves inside the cylinder and receives the force produced by combustion. This force is transmitted through the connecting rod to the crankshaft.",
      point:
        "The piston must withstand high pressure and high temperature.",
    },
    {
      no: "04",
      title: "Piston Rings",
      icon: "⭕",
      text: "Piston rings are fitted in grooves around the piston. They provide sealing between the piston and cylinder liner.",
      point:
        "They help prevent gas leakage and assist in controlling lubricating oil.",
    },
    {
      no: "05",
      title: "Connecting Rod",
      icon: "🔗",
      text: "The connecting rod connects the piston to the crankshaft and transmits the force from the piston to the crankshaft.",
      point:
        "It converts piston force into useful crankshaft movement.",
    },
    {
      no: "06",
      title: "Crankshaft",
      icon: "⚙️",
      text: "The crankshaft converts the reciprocating motion of the piston into rotary motion.",
      point:
        "The rotary motion of the crankshaft is used to produce mechanical power.",
    },
    {
      no: "07",
      title: "Bearings",
      icon: "🛞",
      text: "Bearings support rotating and moving engine parts and allow them to move with minimum friction.",
      point:
        "Correct lubrication of bearings is essential to prevent overheating and damage.",
    },
    {
      no: "08",
      title: "Flywheel",
      icon: "🔘",
      text: "The flywheel stores rotational energy and helps maintain smooth and steady rotation of the engine.",
      point:
        "It helps reduce fluctuations in crankshaft speed.",
    },
  ];

  const safety = [
    "Stop the engine before carrying out maintenance unless an approved procedure requires otherwise.",
    "Obtain permission before starting maintenance work.",
    "Isolate the machinery and follow lockout/tagout procedures.",
    "Close and isolate starting-air supply before working on the engine.",
    "Use correct PPE such as safety shoes, gloves, helmet and eye protection.",
    "Never place hands near moving or rotating machinery.",
    "Allow hot engine components to cool before touching or dismantling them.",
    "Use correct tools and lifting equipment for heavy engine components.",
    "Keep the work area clean and free from oil or grease.",
    "After maintenance, ensure tools, rags and loose materials are removed before starting the engine.",
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
            MEK • TOPIC 02
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Engine Components
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the main components of a marine diesel engine, their basic
            functions, maintenance importance and essential safety precautions
            for GP Rating.
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
              "Identify the main components of a diesel engine.",
              "Understand the basic function of each component.",
              "Understand how piston motion reaches the crankshaft.",
              "Know the importance of bearings and lubrication.",
              "Recognise common engine-component safety hazards.",
              "Remember important points for GP Rating examinations.",
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

        {/* INTRO */}
        <Section number="01" title="Introduction">
          <p>
            A marine diesel engine consists of many components working
            together. During combustion, pressure acts on the piston. The force
            is transmitted through the connecting rod to the crankshaft.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 font-medium text-blue-950">
            💡 Simple power path:
            <div className="mt-3 text-lg font-extrabold">
              Combustion → Piston → Connecting Rod → Crankshaft → Rotary Power
            </div>
          </div>
        </Section>

        {/* COMPONENTS */}
        <Section number="02" title="Main Engine Components">
          <div className="grid gap-5 md:grid-cols-2">
            {components.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{item.icon}</div>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    PART {item.no}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>

                <div className="mt-4 rounded-xl bg-white p-4 text-sm font-medium text-slate-700">
                  <span className="font-bold text-orange-600">
                    Remember:
                  </span>{" "}
                  {item.point}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PISTON */}
        <Section number="03" title="Piston and Piston Rings">
          <p>
            The piston is one of the most important moving components of a
            diesel engine. Combustion pressure acts on the top of the piston
            and forces it downward.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard title="Compression Rings" icon="⭕">
              Help seal combustion gases inside the cylinder.
            </MiniCard>

            <MiniCard title="Oil Control" icon="💧">
              Piston rings help control lubricating oil on the cylinder wall.
            </MiniCard>

            <MiniCard title="Heat Transfer" icon="🌡️">
              Piston rings also assist heat transfer from the piston towards
              the cylinder liner.
            </MiniCard>
          </div>

          <ExamBox>
            Worn or damaged piston rings can cause poor compression, gas
            leakage, increased oil consumption and reduced engine performance.
          </ExamBox>
        </Section>

        {/* LINER */}
        <Section number="04" title="Cylinder Liner">
          <p>
            The cylinder liner provides the working surface for the piston and
            piston rings. The liner is designed to resist wear, high
            temperature and combustion pressure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Point title="Lubrication">
              Correct lubrication reduces friction between piston rings and
              liner.
            </Point>

            <Point title="Cooling">
              Cooling prevents excessive liner temperature and helps maintain
              correct operating conditions.
            </Point>

            <Point title="Wear">
              Excessive wear may affect compression and engine efficiency.
            </Point>

            <Point title="Inspection">
              The liner should be inspected for scoring, wear, cracks and
              abnormal condition during maintenance.
            </Point>
          </div>
        </Section>

        {/* CONNECTING ROD */}
        <Section number="05" title="Connecting Rod and Crankshaft">
          <p>
            The connecting rod transmits piston force to the crankshaft. The
            crankshaft then converts the reciprocating motion of the piston
            into rotary motion.
          </p>

          <div className="mt-6 rounded-2xl bg-blue-950 p-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Motion Conversion
            </p>

            <div className="mt-4 text-xl font-extrabold md:text-2xl">
              Reciprocating Motion ↔ Connecting Rod → Rotary Motion
            </div>
          </div>
        </Section>

        {/* BEARINGS */}
        <Section number="06" title="Engine Bearings">
          <p>
            Bearings support the crankshaft and other moving parts while
            allowing smooth movement with minimum friction.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
            <strong className="text-orange-700">Important:</strong>
            <p className="mt-2">
              Loss of lubricating oil can cause bearing overheating, excessive
              wear and serious engine damage.
            </p>
          </div>
        </Section>

        {/* MAINTENANCE */}
        <Section number="07" title="Basic Maintenance Checks">
          <div className="grid gap-3">
            {[
              "Check lubricating oil level and pressure.",
              "Check cooling-water temperature.",
              "Check for fuel, oil and water leakage.",
              "Listen for abnormal engine noise.",
              "Observe abnormal vibration.",
              "Check bearing temperature where applicable.",
              "Inspect components during planned maintenance.",
              "Maintain cleanliness around the engine.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="font-extrabold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SAFETY */}
        <Section number="08" title="Safety Precautions">
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
              "Piston receives the force of combustion.",
              "Piston rings provide sealing between piston and liner.",
              "Cylinder liner provides the working surface for the piston.",
              "Connecting rod connects the piston to the crankshaft.",
              "Crankshaft converts reciprocating motion into rotary motion.",
              "Bearings reduce friction and support moving parts.",
              "Flywheel helps maintain smooth engine rotation.",
              "Correct lubrication is essential for moving engine components.",
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
            href="/mek/marine-diesel-engine"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 01: Marine Diesel Engine
          </Link>

          <Link
            href="/mek/pumps"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 03: Pumps →
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

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

function MiniCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-bold text-blue-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

function Point({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">✓ {title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
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