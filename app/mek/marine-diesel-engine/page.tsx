"use client";

import Link from "next/link";

export default function MarineDieselEnginePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Link
            href="/mek"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
          >
            ← Back to MEK Topics
          </Link>

          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              MEK • Topic 01
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Marine Diesel Engine
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Learn the basic working principle of marine diesel engines,
              2-stroke and 4-stroke cycles, important engine terminology,
              safety precautions and essential GP Rating examination points.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* LEARNING OBJECTIVES */}
        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-blue-950">
            🎯 Learning Objectives
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Understand what a marine diesel engine is.",
              "Know the basic diesel engine working principle.",
              "Understand the 2-stroke engine cycle.",
              "Understand the 4-stroke engine cycle.",
              "Know the difference between 2-stroke and 4-stroke engines.",
              "Learn basic engine safety precautions.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-sm font-medium leading-6 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 1 */}
        <ContentCard number="01" title="What is a Marine Diesel Engine?">
          <p>
            A <strong>marine diesel engine</strong> is an internal combustion
            engine used on ships to convert the chemical energy of diesel fuel
            into mechanical energy.
          </p>

          <p>
            The mechanical energy produced by the engine may be used to rotate
            the ship&apos;s propeller or to drive generators and other
            machinery.
          </p>

          <InfoBox>
            <strong>Simple idea:</strong> Fuel burns inside the cylinder →
            pressure is produced → piston moves → crankshaft rotates → useful
            mechanical power is produced.
          </InfoBox>
        </ContentCard>

        {/* SECTION 2 */}
        <ContentCard number="02" title="Basic Working Principle">
          <p>
            A diesel engine works on the principle of{" "}
            <strong>compression ignition</strong>.
          </p>

          <div className="my-6 grid gap-4 md:grid-cols-4">
            <StepBox step="1" title="Air">
              Fresh air enters the engine cylinder.
            </StepBox>

            <StepBox step="2" title="Compression">
              The piston compresses the air and its temperature rises.
            </StepBox>

            <StepBox step="3" title="Fuel Injection">
              Diesel fuel is injected into the hot compressed air.
            </StepBox>

            <StepBox step="4" title="Power">
              Fuel burns and expanding gases force the piston down.
            </StepBox>
          </div>

          <WarningBox>
            A diesel engine normally does not require a spark plug for ignition.
            The heat of compressed air ignites the injected fuel.
          </WarningBox>
        </ContentCard>

        {/* SECTION 3 */}
        <ContentCard number="03" title="Four-Stroke Diesel Engine">
          <p>
            In a <strong>4-stroke diesel engine</strong>, one complete cycle
            requires four piston strokes and two revolutions of the crankshaft.
          </p>

          <div className="mt-6 space-y-4">
            <Stroke
              number="1"
              name="Suction / Intake Stroke"
              text="The piston moves downward. The inlet valve opens and fresh air enters the cylinder."
            />

            <Stroke
              number="2"
              name="Compression Stroke"
              text="The piston moves upward. Both valves are closed and the air inside the cylinder is compressed."
            />

            <Stroke
              number="3"
              name="Power / Expansion Stroke"
              text="Fuel is injected near the end of compression. It burns in the hot compressed air and the expanding gases push the piston downward."
            />

            <Stroke
              number="4"
              name="Exhaust Stroke"
              text="The piston moves upward. The exhaust valve opens and burnt gases are expelled from the cylinder."
            />
          </div>

          <InfoBox>
            <strong>Remember:</strong> 4 strokes = Suction → Compression → Power
            → Exhaust.
          </InfoBox>
        </ContentCard>

        {/* SECTION 4 */}
        <ContentCard number="04" title="Two-Stroke Diesel Engine">
          <p>
            In a <strong>2-stroke diesel engine</strong>, the complete working
            cycle is completed in two piston strokes and one revolution of the
            crankshaft.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 text-3xl">⬆️</div>
              <h3 className="text-xl font-bold text-blue-950">
                Upward Stroke
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                The piston moves upward and compresses the fresh air. Near the
                top of the stroke, fuel is injected into the hot compressed
                air and combustion starts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 text-3xl">⬇️</div>
              <h3 className="text-xl font-bold text-blue-950">
                Downward Stroke
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Combustion gases expand and push the piston downward. Exhaust
                gases leave and fresh air enters the cylinder during the
                scavenging process.
              </p>
            </div>
          </div>

          <InfoBox>
            Large slow-speed 2-stroke marine diesel engines are commonly used
            for main propulsion because they can efficiently produce high
            torque at low speed.
          </InfoBox>
        </ContentCard>

        {/* SECTION 5 */}
        <ContentCard number="05" title="2-Stroke vs 4-Stroke Engine">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse overflow-hidden rounded-xl text-left">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-4">Feature</th>
                  <th className="p-4">2-Stroke Engine</th>
                  <th className="p-4">4-Stroke Engine</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                <TableRow
                  feature="Cycle"
                  two="2 piston strokes"
                  four="4 piston strokes"
                />
                <TableRow
                  feature="Crankshaft"
                  two="1 revolution per cycle"
                  four="2 revolutions per cycle"
                />
                <TableRow
                  feature="Power stroke"
                  two="Every revolution"
                  four="Every two revolutions"
                />
                <TableRow
                  feature="Typical marine use"
                  two="Main propulsion"
                  four="Generators / auxiliary engines"
                />
                <TableRow
                  feature="Typical speed"
                  two="Low speed"
                  four="Medium or high speed"
                />
              </tbody>
            </table>
          </div>
        </ContentCard>

        {/* SECTION 6 */}
        <ContentCard number="06" title="Important Engine Terms">
          <div className="grid gap-4 md:grid-cols-2">
            <Term
              name="TDC – Top Dead Centre"
              text="The highest position reached by the piston inside the cylinder."
            />

            <Term
              name="BDC – Bottom Dead Centre"
              text="The lowest position reached by the piston inside the cylinder."
            />

            <Term
              name="Bore"
              text="The internal diameter of the engine cylinder."
            />

            <Term
              name="Stroke"
              text="The distance travelled by the piston from TDC to BDC or BDC to TDC."
            />

            <Term
              name="Compression"
              text="Reduction of air volume inside the cylinder by movement of the piston."
            />

            <Term
              name="Scavenging"
              text="The process of removing exhaust gases and supplying fresh air to the cylinder."
            />
          </div>
        </ContentCard>

        {/* SECTION 7 */}
        <ContentCard number="07" title="Main Uses on Board Ship">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <UseBox icon="🚢" title="Main Engine">
              Drives the ship&apos;s propeller.
            </UseBox>

            <UseBox icon="⚡" title="Generator Engine">
              Drives alternators to produce electrical power.
            </UseBox>

            <UseBox icon="🛟" title="Emergency Generator">
              Supplies emergency electrical power.
            </UseBox>

            <UseBox icon="⚙️" title="Auxiliary Machinery">
              Diesel engines may drive various auxiliary equipment.
            </UseBox>
          </div>
        </ContentCard>

        {/* SAFETY */}
        <ContentCard number="08" title="Safety Precautions">
          <div className="grid gap-3">
            {[
              "Wear proper PPE before working near operating machinery.",
              "Never touch moving or rotating machinery.",
              "Keep loose clothing away from rotating parts.",
              "Do not open pressurised systems without proper isolation.",
              "Keep oil and fuel leakages under control.",
              "Maintain good housekeeping around the engine.",
              "Use correct tools for maintenance work.",
              "Follow lockout/tagout and shipboard safety procedures before maintenance.",
              "Never work on machinery without permission and proper isolation.",
              "Report abnormal noise, vibration, leakage or overheating immediately.",
            ].map((item, index) => (
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
        </ContentCard>

        {/* EXAM REVISION */}
        <section className="mt-8 rounded-3xl bg-gradient-to-br from-blue-950 to-slate-950 p-7 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            GP Rating Quick Revision
          </p>

          <h2 className="mt-2 text-3xl font-extrabold">
            Remember These Points
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Diesel engine works on compression ignition.",
              "4-stroke cycle: Suction, Compression, Power, Exhaust.",
              "4-stroke cycle requires two crankshaft revolutions.",
              "2-stroke cycle requires one crankshaft revolution.",
              "TDC is the highest piston position.",
              "BDC is the lowest piston position.",
              "Bore is the internal diameter of the cylinder.",
              "Scavenging removes exhaust gas and supplies fresh air.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/10 p-4 leading-6"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/mek"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 transition hover:bg-blue-50"
          >
            ← MEK Topics
          </Link>

          <Link
            href="/mek/engine-components"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md transition hover:bg-orange-600"
          >
            Topic 02: Engine Components →
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

function ContentCard({
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

      <div className="space-y-4 leading-8 text-slate-600">{children}</div>
    </section>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 text-blue-950">
      💡 {children}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5 font-medium text-slate-800">
      ⚠️ {children}
    </div>
  );
}

function StepBox({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 font-bold text-white">
        {step}
      </span>
      <h3 className="font-bold text-blue-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

function Stroke({
  number,
  name,
  text,
}: {
  number: string;
  name: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
        {number}
      </span>

      <div>
        <h3 className="font-bold text-blue-950">{name}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function TableRow({
  feature,
  two,
  four,
}: {
  feature: string;
  two: string;
  four: string;
}) {
  return (
    <tr>
      <td className="p-4 font-bold text-blue-950">{feature}</td>
      <td className="p-4 text-slate-600">{two}</td>
      <td className="p-4 text-slate-600">{four}</td>
    </tr>
  );
}

function Term({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">{name}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function UseBox({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
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