"use client";

import Link from "next/link";

export default function ToolsMaintenancePage() {
  const handTools = [
    {
      icon: "🔧",
      title: "Spanner / Wrench",
      text: "Used for tightening and loosening nuts and bolts. Always use the correct size.",
    },
    {
      icon: "🪛",
      title: "Screwdriver",
      text: "Used for tightening and loosening screws. Select the correct type and size for the screw head.",
    },
    {
      icon: "🔨",
      title: "Hammer",
      text: "Used for striking operations. Different types of hammers are selected according to the job.",
    },
    {
      icon: "🗜️",
      title: "Pliers",
      text: "Used for gripping, holding, bending or cutting depending on the type of pliers.",
    },
    {
      icon: "🔩",
      title: "Socket & Ratchet",
      text: "Used for tightening or loosening nuts and bolts efficiently, especially where access permits.",
    },
    {
      icon: "📏",
      title: "Measuring Tools",
      text: "Steel rules, vernier calipers and other measuring tools are used to check dimensions accurately.",
    },
  ];

  const maintenanceTypes = [
    {
      title: "Routine Maintenance",
      text: "Regular checks, cleaning, lubrication and inspection carried out as part of normal machinery care.",
    },
    {
      title: "Preventive Maintenance",
      text: "Maintenance carried out at planned intervals to reduce the chance of machinery failure.",
    },
    {
      title: "Corrective Maintenance",
      text: "Maintenance carried out to correct a defect or restore equipment after a fault has been identified.",
    },
  ];

  const checks = [
    "Inspect tools before use.",
    "Use the correct tool for the job.",
    "Keep tools clean and in good condition.",
    "Check machinery for leakage.",
    "Listen for abnormal noise.",
    "Observe abnormal vibration.",
    "Check temperature and pressure readings.",
    "Check lubrication where applicable.",
    "Report defects to the responsible person.",
    "Return tools to their proper storage place after use.",
  ];

  const safety = [
    "Wear PPE suitable for the job.",
    "Use only the correct tool and correct size.",
    "Do not use damaged or defective tools.",
    "Never use a file without a suitable handle.",
    "Do not use makeshift extensions on spanners unless specifically approved.",
    "Keep hands clear of pinch points and moving machinery.",
    "Stop and isolate machinery before maintenance when required.",
    "Follow lockout/tagout procedures where applicable.",
    "Use approved lifting equipment for heavy components.",
    "Keep the work area clean and free from oil or obstructions.",
    "Account for tools and loose items after completing maintenance.",
    "Refit guards and safety devices before returning machinery to service.",
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
            MEK • TOPIC 09
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Tools & Maintenance
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn common engine-room hand tools, measuring tools, basic
            maintenance practices, correct tool handling and essential
            workshop safety for GP Rating.
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
              "Identify common engine-room hand tools.",
              "Select the correct tool for a job.",
              "Understand basic measuring tools.",
              "Understand basic maintenance practices.",
              "Recognise common machinery defects.",
              "Follow safe workshop and maintenance practices.",
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

        <Section number="01" title="Importance of Correct Tools">
          <p>
            Marine machinery requires regular inspection, adjustment,
            cleaning and maintenance. Using the correct tool makes the job
            safer and helps prevent damage to machinery and fasteners.
          </p>

          <InfoBox>
            Golden rule:{" "}
            <strong>Always use the correct tool and correct size for the job.</strong>
          </InfoBox>
        </Section>

        <Section number="02" title="Common Hand Tools">
          <div className="grid gap-5 md:grid-cols-2">
            {handTools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-4xl">{tool.icon}</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {tool.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {tool.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Spanners & Wrenches">
          <p>
            Spanners and wrenches are commonly used to tighten or loosen nuts,
            bolts and pipe fittings.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <MiniCard title="Open-End Spanner">
              Has open jaws and is commonly used on nuts and bolts where
              access is suitable.
            </MiniCard>

            <MiniCard title="Ring Spanner">
              Surrounds the fastener head and generally provides better grip
              than an open-end spanner.
            </MiniCard>

            <MiniCard title="Socket Wrench">
              Uses sockets of different sizes with a handle or ratchet.
            </MiniCard>

            <MiniCard title="Adjustable Wrench">
              Has an adjustable jaw. It should be adjusted correctly and used
              carefully to avoid slipping or damaging the fastener.
            </MiniCard>
          </div>

          <ExamBox>
            Select the correct-size spanner. An incorrect or loose-fitting tool
            can slip and damage the nut or injure the user.
          </ExamBox>
        </Section>

        <Section number="04" title="Measuring Tools">
          <div className="grid gap-4 md:grid-cols-3">
            <ToolCard
              title="Steel Rule"
              text="Used for simple linear measurements."
            />

            <ToolCard
              title="Vernier Caliper"
              text="Used for accurate external, internal and depth measurements within the instrument's capability."
            />

            <ToolCard
              title="Micrometer"
              text="Used for precise measurement of dimensions such as shaft or component thickness/diameter within its measuring range."
            />
          </div>

          <InfoBox>
            Measuring instruments should be kept clean, handled carefully and
            stored properly after use.
          </InfoBox>
        </Section>

        <Section number="05" title="Types of Maintenance">
          <div className="grid gap-5 md:grid-cols-3">
            {maintenanceTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-extrabold text-blue-950">
                  ⚙️ {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="06" title="Basic Maintenance Procedure">
          <div className="grid gap-4 md:grid-cols-4">
            <Step number="1" title="Prepare">
              Understand the job, hazards, instructions and required tools.
            </Step>

            <Step number="2" title="Isolate">
              Stop and safely isolate machinery where required.
            </Step>

            <Step number="3" title="Maintain">
              Carry out the work using correct tools and approved procedures.
            </Step>

            <Step number="4" title="Restore">
              Reassemble, inspect and return equipment to service only when
              authorised and safe.
            </Step>
          </div>

          <WarningBox>
            Never start maintenance on machinery until required isolation and
            safety precautions have been completed.
          </WarningBox>
        </Section>

        <Section number="07" title="Routine Machinery Checks">
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

          <ExamBox>
            Abnormal noise, vibration, temperature, pressure or leakage can be
            an indication of a machinery problem and should be reported.
          </ExamBox>
        </Section>

        <Section number="08" title="Good Workshop Practice">
          <div className="grid gap-4 md:grid-cols-2">
            <MiniCard title="Clean Work Area">
              Keep benches, decks and working areas clean and organised.
            </MiniCard>

            <MiniCard title="Tool Control">
              Return tools to their correct storage location after use.
            </MiniCard>

            <MiniCard title="Correct PPE">
              Wear eye, hand, foot, hearing or other protection appropriate to
              the task.
            </MiniCard>

            <MiniCard title="Good Housekeeping">
              Remove oil, waste and unnecessary materials from the work area.
            </MiniCard>
          </div>
        </Section>

        <Section number="09" title="Tool & Maintenance Safety">
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
              "Always select the correct tool and correct size.",
              "Inspect tools before using them.",
              "Vernier calipers are used for accurate dimensional measurements.",
              "Micrometers provide precise measurements within their range.",
              "Preventive maintenance is carried out before failure at planned intervals.",
              "Abnormal noise or vibration should be investigated and reported.",
              "Machinery must be safely isolated before maintenance when required.",
              "After maintenance, refit guards and account for tools before operation.",
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

        {/* COMPLETION */}
        <section className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-7 text-center md:p-10">
          <div className="text-5xl">🎓</div>

          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            MEK SECTION COMPLETED
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
            Marine Engineering Knowledge
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            You have reached the end of the MEK basic notes. Revise all topics
            regularly and connect the theory with practical workshop and
            engine-room training.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between">
          <Link
            href="/mek/engine-room-safety"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 08: Engine Room Safety
          </Link>

          <Link
            href="/mek"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Back to All MEK Topics →
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
      <h3 className="font-bold text-blue-950">
        ✓ {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {children}
      </p>
    </div>
  );
}

function ToolCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-3xl">📐</div>

      <h3 className="mt-3 font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
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

      <h3 className="mt-3 font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {children}
      </p>
    </div>
  );
}