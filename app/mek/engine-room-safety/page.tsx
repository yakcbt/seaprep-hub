"use client";

import Link from "next/link";

export default function EngineRoomSafetyPage() {
  const hazards = [
    {
      icon: "🔥",
      title: "Fire & Hot Surfaces",
      text: "Fuel, lubricating oil, hot exhaust surfaces and other ignition sources can create serious fire hazards.",
    },
    {
      icon: "⚙️",
      title: "Moving Machinery",
      text: "Rotating shafts, couplings, belts, fans and other moving machinery can cause serious injury.",
    },
    {
      icon: "⚡",
      title: "Electrical Hazards",
      text: "Damaged cables, exposed conductors, wet equipment and incorrect electrical work can cause electric shock.",
    },
    {
      icon: "🔊",
      title: "Noise",
      text: "Machinery spaces can have high noise levels. Correct hearing protection must be used where required.",
    },
    {
      icon: "♨️",
      title: "Pressure & Temperature",
      text: "Steam, hot water, compressed air and pressurised oil systems can cause serious burns or injuries.",
    },
    {
      icon: "💧",
      title: "Slips & Falls",
      text: "Oil, water, loose tools and poor housekeeping can cause slips, trips and falls.",
    },
  ];

  const ppe = [
    "Safety helmet",
    "Safety shoes",
    "Boiler suit / coverall",
    "Safety goggles or eye protection",
    "Gloves suitable for the job",
    "Hearing protection",
    "Face shield when required",
    "Respiratory protection when specified by the risk assessment",
  ];

  const safetyRules = [
    "Follow instructions from the responsible officer or supervisor.",
    "Wear the correct PPE for the job.",
    "Keep escape routes and emergency exits clear.",
    "Maintain good housekeeping at all times.",
    "Clean oil and water spills immediately.",
    "Never remove machinery guards while equipment is operating.",
    "Do not work on machinery until it is correctly stopped and isolated.",
    "Follow lockout/tagout procedures where applicable.",
    "Use correct tools and approved lifting equipment.",
    "Report leaks, abnormal noise, vibration, overheating or unsafe conditions immediately.",
    "Never smoke in prohibited areas.",
    "Know the location of alarms, emergency stops and firefighting equipment.",
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
            MEK • TOPIC 08
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Engine Room Safety
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn common engine-room hazards, PPE, safe working practices,
            machinery isolation, fire prevention and emergency precautions
            required for GP Rating personnel.
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
              "Identify common engine-room hazards.",
              "Understand the importance of PPE.",
              "Follow safe machinery-working practices.",
              "Understand basic machinery isolation.",
              "Know important fire-prevention measures.",
              "Know what to do when an unsafe condition is observed.",
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

        <Section number="01" title="Why Engine Room Safety is Important">
          <p>
            The engine room contains operating machinery, hot surfaces,
            pressurised systems, fuel and lubricating oil, electrical
            equipment and other potential hazards.
          </p>

          <p className="mt-4">
            Safe working practices are essential to protect personnel,
            machinery and the vessel.
          </p>

          <InfoBox>
            Think before starting any job:{" "}
            <strong>Identify Hazard → Assess Risk → Control Risk → Work Safely</strong>
          </InfoBox>
        </Section>

        <Section number="02" title="Common Engine Room Hazards">
          <div className="grid gap-5 md:grid-cols-2">
            {hazards.map((hazard) => (
              <div
                key={hazard.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-4xl">{hazard.icon}</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {hazard.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {hazard.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Personal Protective Equipment (PPE)">
          <p>
            PPE must be selected according to the job and the hazards
            identified. PPE is an important safety measure but does not replace
            proper isolation and safe working procedures.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {ppe.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-medium text-blue-950"
              >
                🦺 {item}
              </div>
            ))}
          </div>

          <ExamBox>
            Always use PPE appropriate to the task. Different jobs may require
            different protective equipment.
          </ExamBox>
        </Section>

        <Section number="04" title="Safe Working Around Machinery">
          <div className="grid gap-4 md:grid-cols-2">
            <SafetyCard title="Moving Parts">
              Keep hands, clothing and tools away from rotating machinery.
            </SafetyCard>

            <SafetyCard title="Machine Guards">
              Never operate machinery with required guards removed.
            </SafetyCard>

            <SafetyCard title="Hot Surfaces">
              Do not touch hot machinery, pipes or exhaust components without
              appropriate precautions.
            </SafetyCard>

            <SafetyCard title="Correct Tools">
              Use the correct tool for the job and inspect tools before use.
            </SafetyCard>
          </div>
        </Section>

        <Section number="05" title="Isolation & Lockout / Tagout">
          <p>
            Machinery must be safely isolated before maintenance when required
            by the job and shipboard procedure.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="1" title="Stop">
              Stop the machinery safely.
            </Step>

            <Step number="2" title="Isolate">
              Isolate relevant energy sources.
            </Step>

            <Step number="3" title="Secure">
              Apply the vessel&apos;s lockout/tagout or isolation procedure.
            </Step>

            <Step number="4" title="Verify">
              Confirm the equipment is in a safe condition before work begins.
            </Step>
          </div>

          <WarningBox>
            Never assume machinery is safe simply because it has stopped.
            Electrical, hydraulic, pneumatic, pressure, gravity or other stored
            energy may still be present.
          </WarningBox>
        </Section>

        <Section number="06" title="Fire Prevention in Engine Room">
          <div className="grid gap-3">
            {[
              "Keep fuel and lubricating oil leaks under control.",
              "Report leaking pipes, flanges and equipment.",
              "Keep hot surfaces correctly protected or insulated.",
              "Do not allow oily rags to accumulate.",
              "Maintain good housekeeping.",
              "Keep firefighting equipment accessible.",
              "Follow hot-work permit procedures.",
              "Never smoke in prohibited areas.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-orange-100 bg-orange-50 p-4"
              >
                <span className="font-black text-orange-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <ExamBox>
            Oil contacting a sufficiently hot surface can create a serious fire
            hazard.
          </ExamBox>
        </Section>

        <Section number="07" title="Housekeeping">
          <p>
            Good housekeeping is one of the most important everyday safety
            practices in an engine room.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <SafetyCard title="Keep Decks Clean">
              Remove oil, grease and water from walking surfaces.
            </SafetyCard>

            <SafetyCard title="Store Tools Properly">
              Do not leave tools or equipment in walkways.
            </SafetyCard>

            <SafetyCard title="Clear Escape Routes">
              Never block emergency exits, ladders or escape routes.
            </SafetyCard>

            <SafetyCard title="Dispose of Waste Safely">
              Oily rags and other waste must be handled according to shipboard
              procedures.
            </SafetyCard>
          </div>
        </Section>

        <Section number="08" title="Emergency Awareness">
          <p>
            Engine-room personnel should know the vessel&apos;s emergency
            arrangements and their assigned duties.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Know the emergency escape routes.",
              "Know the location of fire alarms.",
              "Know the location of emergency stops.",
              "Know where firefighting equipment is located.",
              "Know the muster station and emergency duties.",
              "Raise the alarm immediately when a serious emergency is discovered.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-red-100 bg-red-50 p-4 font-medium"
              >
                🚨 {item}
              </div>
            ))}
          </div>
        </Section>

        <Section number="09" title="Golden Safety Rules">
          <div className="grid gap-3">
            {safetyRules.map((item, index) => (
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
              "Wear PPE suitable for the job.",
              "Keep clear of moving machinery.",
              "Never remove required guards from operating machinery.",
              "Isolate machinery before maintenance when required.",
              "Oil leakage is both a fire and slip hazard.",
              "Keep escape routes clear.",
              "Good housekeeping prevents many accidents.",
              "Report unsafe conditions immediately.",
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
            href="/mek/electrical-basics"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 07: Electrical Basics
          </Link>

          <Link
            href="/mek/tools-maintenance"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 09: Tools & Maintenance →
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

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 font-medium text-slate-800">
      ⚠️ <strong>Safety:</strong> {children}
    </div>
  );
}

function SafetyCard({
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

      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}