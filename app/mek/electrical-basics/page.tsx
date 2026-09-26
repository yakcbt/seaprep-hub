"use client";

import Link from "next/link";

export default function ElectricalBasicsPage() {
  const basics = [
    {
      title: "Voltage",
      symbol: "V",
      unit: "Volt (V)",
      text: "Voltage is the electrical potential difference that causes current to flow through a circuit.",
    },
    {
      title: "Current",
      symbol: "I",
      unit: "Ampere (A)",
      text: "Current is the flow of electric charge through a conductor.",
    },
    {
      title: "Resistance",
      symbol: "R",
      unit: "Ohm (Ω)",
      text: "Resistance is the opposition offered to the flow of electric current.",
    },
    {
      title: "Power",
      symbol: "P",
      unit: "Watt (W)",
      text: "Electrical power is the rate at which electrical energy is used or converted.",
    },
  ];

  const protection = [
    {
      title: "Fuse",
      text: "A fuse contains an element that melts when excessive current flows, interrupting the circuit.",
    },
    {
      title: "Circuit Breaker",
      text: "A circuit breaker automatically opens the circuit during certain electrical faults and can normally be reset after the fault is corrected.",
    },
    {
      title: "Earthing",
      text: "Earthing provides a protective path and helps reduce the risk of electric shock when faults occur.",
    },
    {
      title: "Insulation",
      text: "Electrical insulation helps prevent unwanted current flow and protects personnel from contact with live conductors.",
    },
  ];

  const safety = [
    "Treat electrical equipment as live unless it has been properly isolated and proved safe.",
    "Do not touch electrical equipment with wet hands.",
    "Use correct PPE and insulated tools when required.",
    "Switch off and isolate the electrical supply before maintenance.",
    "Follow lockout/tagout procedures where applicable.",
    "Never bypass a fuse, circuit breaker or other protective device.",
    "Report damaged cables, plugs and electrical equipment immediately.",
    "Keep water and oil away from electrical equipment.",
    "Do not overload electrical sockets or circuits.",
    "Electrical repairs should only be carried out by authorised competent personnel.",
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
            MEK • TOPIC 07
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Electrical Basics
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn basic marine electrical terms, Ohm&apos;s Law, AC and DC,
            generators, motors, batteries, protective devices and essential
            electrical safety for GP Rating.
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
              "Understand voltage, current and resistance.",
              "Understand the basic meaning of electrical power.",
              "Know the difference between AC and DC.",
              "Understand the basic purpose of generators and motors.",
              "Know common electrical protective devices.",
              "Follow essential electrical safety precautions.",
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

        <Section number="01" title="Basic Electrical Terms">
          <div className="grid gap-5 md:grid-cols-2">
            {basics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-xl font-black text-white">
                    {item.symbol}
                  </span>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    {item.unit}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="02" title="Ohm's Law">
          <p>
            Ohm&apos;s Law describes the relationship between voltage,
            current and resistance in a simple electrical circuit.
          </p>

          <div className="mt-6 rounded-2xl bg-blue-950 p-8 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Ohm&apos;s Law
            </p>

            <p className="mt-4 text-4xl font-black">
              V = I × R
            </p>

            <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                V = Voltage
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                I = Current
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                R = Resistance
              </div>
            </div>
          </div>

          <ExamBox>
            Remember the basic formula: <strong>V = I × R</strong>.
          </ExamBox>
        </Section>

        <Section number="03" title="AC and DC">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="text-4xl">〰️</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                AC – Alternating Current
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Alternating current periodically changes direction. AC is
                widely used for shipboard electrical distribution and
                machinery.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <div className="text-4xl">🔋</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                DC – Direct Current
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Direct current flows with one polarity. Batteries provide DC
                electrical power.
              </p>
            </div>
          </div>

          <InfoBox>
            Easy memory: <strong>Battery → DC</strong>. Ship&apos;s generators
            commonly supply AC power to the main electrical distribution
            system.
          </InfoBox>
        </Section>

        <Section number="04" title="Generator">
          <p>
            A <strong>generator</strong> converts mechanical energy into
            electrical energy.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-100 p-6 text-center">
            <p className="text-lg font-extrabold text-blue-950 md:text-2xl">
              Mechanical Energy → Generator → Electrical Energy
            </p>
          </div>

          <p className="mt-5">
            On ships, diesel engines commonly drive alternators to supply
            electrical power for lighting, pumps, ventilation, machinery and
            other services.
          </p>
        </Section>

        <Section number="05" title="Electric Motor">
          <p>
            An <strong>electric motor</strong> performs the opposite basic
            energy conversion to a generator. It converts electrical energy
            into mechanical energy.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-100 p-6 text-center">
            <p className="text-lg font-extrabold text-blue-950 md:text-2xl">
              Electrical Energy → Motor → Mechanical Energy
            </p>
          </div>

          <InfoBox>
            Motors are widely used to drive shipboard pumps, fans, compressors
            and other auxiliary machinery.
          </InfoBox>
        </Section>

        <Section number="06" title="Battery">
          <p>
            A battery stores chemical energy and supplies electrical energy as
            direct current.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard title="Emergency Services">
              Batteries may provide power to selected emergency or backup
              equipment depending on the ship&apos;s system.
            </MiniCard>

            <MiniCard title="Starting">
              Batteries are commonly used for starting certain diesel engines
              and other equipment.
            </MiniCard>

            <MiniCard title="Communication & Control">
              DC battery supplies may support communication, alarm or control
              systems depending on the installation.
            </MiniCard>
          </div>

          <WarningBox>
            Batteries can present electrical and chemical hazards. Follow the
            vessel&apos;s battery-room procedures and use the required PPE.
          </WarningBox>
        </Section>

        <Section number="07" title="Electrical Protection">
          <div className="grid gap-4 md:grid-cols-2">
            {protection.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="font-bold text-blue-950">
                  ⚡ {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <ExamBox>
            A fuse or circuit breaker is used to protect an electrical circuit
            against abnormal current conditions according to its design.
          </ExamBox>
        </Section>

        <Section number="08" title="Electric Shock">
          <p>
            Electric current passing through the human body can cause serious
            injury or death. Electrical equipment must therefore be handled
            with great care.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
            <strong className="text-red-700">
              Never directly touch a person who is still in contact with a
              live electrical source.
            </strong>

            <p className="mt-2">
              Isolate the electrical supply safely, raise the alarm and follow
              the ship&apos;s emergency and first-aid procedures.
            </p>
          </div>
        </Section>

        <Section number="09" title="Electrical Safety Precautions">
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
              "Voltage is measured in volts.",
              "Current is measured in amperes.",
              "Resistance is measured in ohms.",
              "Ohm's Law: V = I × R.",
              "A battery supplies DC.",
              "A generator converts mechanical energy into electrical energy.",
              "A motor converts electrical energy into mechanical energy.",
              "Never work on live electrical equipment unless specifically authorised and trained for the task.",
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
            href="/mek/cooling-system"
            className="rounded-xl border border-blue-900 px-6 py-3 text-center font-bold text-blue-950 hover:bg-blue-50"
          >
            ← Topic 06: Cooling System
          </Link>

          <Link
            href="/mek/engine-room-safety"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white shadow-md hover:bg-orange-600"
          >
            Topic 08: Engine Room Safety →
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