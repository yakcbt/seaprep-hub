"use client";

import Link from "next/link";

export default function ValvesPage() {
  const valveTypes = [
    {
      icon: "🔵",
      title: "Globe Valve",
      use: "Flow regulation and isolation",
      text: "A globe valve is commonly used where flow needs to be started, stopped or regulated. The disc moves towards or away from the valve seat.",
    },
    {
      icon: "🚪",
      title: "Gate Valve",
      use: "Mainly isolation",
      text: "A gate valve uses a gate that moves up and down. It provides a relatively straight flow path when fully open and is normally used fully open or fully closed.",
    },
    {
      icon: "🦋",
      title: "Butterfly Valve",
      use: "Isolation and flow control",
      text: "A butterfly valve uses a rotating disc inside the pipe. It is compact, light and commonly used in many shipboard piping systems.",
    },
    {
      icon: "⚪",
      title: "Ball Valve",
      use: "Quick isolation",
      text: "A ball valve contains a ball with a hole through its centre. A quarter turn normally changes the valve from fully open to fully closed.",
    },
    {
      icon: "➡️",
      title: "Check Valve",
      use: "Prevents reverse flow",
      text: "A check valve allows liquid to flow in one direction and automatically prevents reverse flow.",
    },
    {
      icon: "⚠️",
      title: "Relief Valve",
      use: "Over-pressure protection",
      text: "A relief valve opens automatically when system pressure exceeds its set value and helps protect equipment and piping from excessive pressure.",
    },
  ];

  const maintenance = [
    "Inspect the valve for external leakage.",
    "Check gland packing or stem seal condition.",
    "Operate valves periodically where required.",
    "Check the valve spindle or stem for damage.",
    "Keep moving parts correctly lubricated where specified.",
    "Inspect flange connections for leakage.",
    "Check handwheel and operating mechanism.",
    "Do not use excessive force to operate a valve.",
  ];

  const safety = [
    "Identify the correct valve before operating it.",
    "Understand the piping system before opening or closing any valve.",
    "Wear the required PPE.",
    "Never open a pressurised valve or fitting for maintenance without isolation.",
    "Depressurise and drain the isolated section before dismantling.",
    "Be careful when handling steam, hot water, fuel and chemical systems.",
    "Use the correct tools for valve maintenance.",
    "Do not use excessive extension bars on valve handwheels unless an approved procedure allows it.",
    "Never stand directly in front of a pressurised opening.",
    "After maintenance, confirm correct valve position before restoring the system.",
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
            MEK • TOPIC 04
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Valves
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the common types of valves used on ships, their functions,
            operation, maintenance and essential safety precautions for GP
            Rating.
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
              "Understand the purpose of valves.",
              "Identify common marine valves.",
              "Know the difference between globe and gate valves.",
              "Understand the purpose of check valves.",
              "Understand the purpose of relief valves.",
              "Know basic valve maintenance and safety.",
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

        <Section number="01" title="What is a Valve?">
          <p>
            A <strong>valve</strong> is a device installed in a piping system
            to start, stop, regulate or direct the flow of a fluid.
          </p>

          <p className="mt-4">
            Valves are used throughout a ship in fuel, lubricating oil,
            cooling water, ballast, bilge, fire, compressed air and many other
            systems.
          </p>

          <InfoBox>
            Basic valve functions: <strong>Isolation • Regulation • Direction • Protection</strong>
          </InfoBox>
        </Section>

        <Section number="02" title="Common Types of Marine Valves">
          <div className="grid gap-5 md:grid-cols-2">
            {valveTypes.map((valve) => (
              <div
                key={valve.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-4xl">{valve.icon}</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {valve.title}
                </h3>

                <p className="mt-2 text-sm font-bold text-orange-600">
                  Main use: {valve.use}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {valve.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Globe Valve">
          <p>
            A globe valve uses a movable disc and a stationary seat. Turning
            the handwheel moves the valve stem and disc.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Point
              title="Good Flow Regulation"
              text="The position of the disc can be adjusted to control the amount of fluid passing through the valve."
            />
            <Point
              title="Flow Resistance"
              text="The internal flow path changes direction, so a globe valve generally creates more pressure drop than a fully open gate valve."
            />
          </div>

          <ExamBox>
            Globe valves are suitable for throttling or regulating flow.
          </ExamBox>
        </Section>

        <Section number="04" title="Gate Valve">
          <p>
            A gate valve controls flow by raising or lowering a gate across
            the fluid passage.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5">
            <strong className="text-blue-950">Important:</strong>
            <p className="mt-2">
              Gate valves are mainly used for isolation and are normally kept
              either fully open or fully closed.
            </p>
          </div>

          <ExamBox>
            A gate valve is generally not the preferred valve for throttling
            because operating it partly open can cause vibration, erosion and
            damage.
          </ExamBox>
        </Section>

        <Section number="05" title="Butterfly and Ball Valves">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-4xl">🦋</div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Butterfly Valve
              </h3>
              <p className="mt-3 leading-7">
                A disc rotates inside the valve body. Butterfly valves are
                compact and can be operated quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-4xl">⚪</div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Ball Valve
              </h3>
              <p className="mt-3 leading-7">
                A drilled ball rotates inside the valve body. A quarter-turn
                operation normally provides quick opening or closing.
              </p>
            </div>
          </div>
        </Section>

        <Section number="06" title="Check Valve / Non-Return Valve">
          <p>
            A <strong>check valve</strong>, also called a non-return valve,
            allows fluid to flow in one direction and prevents reverse flow.
          </p>

          <div className="mt-6 rounded-2xl bg-blue-950 p-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Flow Direction
            </p>
            <div className="mt-4 text-2xl font-extrabold">
              Correct Flow → Allowed
            </div>
            <div className="mt-2 text-2xl font-extrabold">
              Reverse Flow ← Stopped
            </div>
          </div>

          <InfoBox>
            Check valves normally operate automatically due to fluid pressure
            and flow direction.
          </InfoBox>
        </Section>

        <Section number="07" title="Relief Valve">
          <p>
            A relief valve is a safety device designed to protect a system
            from excessive pressure.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
            <strong className="text-red-700">Basic operation:</strong>
            <p className="mt-2">
              When system pressure rises above the valve&apos;s set pressure,
              the valve opens and relieves pressure through the designed
              discharge path.
            </p>
          </div>

          <ExamBox>
            Relief valves are important safety devices and should not be
            adjusted or tampered with without proper authority and procedure.
          </ExamBox>
        </Section>

        <Section number="08" title="Basic Valve Maintenance">
          <div className="grid gap-3">
            {maintenance.map((item, index) => (
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

        <Section number="09" title="Valve Safety Precautions">
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
              "Globe valve can be used for flow regulation.",
              "Gate valve is mainly used for isolation.",
              "Butterfly valve uses a rotating disc.",
              "Ball valve provides quick quarter-turn operation.",
              "Check valve prevents reverse flow.",
              "Relief valve protects against excessive pressure.",
              "Never dismantle a pressurised valve.",
              "Confirm correct valve position after maintenance.",
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
            href="/mek/pumps"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 03: Pumps
          </Link>

          <Link
            href="/mek/fuel-lubrication"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 05: Fuel & Lubrication →
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

function ExamBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5 font-medium text-slate-800">
      📌 <strong>Exam Point:</strong> {children}
    </div>
  );
}

function Point({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">✓ {title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}