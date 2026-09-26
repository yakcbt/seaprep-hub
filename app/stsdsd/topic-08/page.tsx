"use client";

import Link from "next/link";

export default function STSDSDTopic08() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/stsdsd"
            className="text-sm font-semibold text-cyan-100 hover:text-white"
          >
            ← Back to STSDSD
          </Link>

          <p className="mt-7 text-sm font-bold uppercase tracking-widest text-cyan-200">
            STSDSD • Topic 08
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Emergency Preparedness, Drills, and Exercises
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Security contingency planning, drills, exercises and preparation
            for security-related incidents.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* 8.1 */}
          <Card title="8.1 Execution of Contingency Plans">
            <p>
              Security contingency planning should prepare ship personnel to
              respond to various security-related incidents.
            </p>

            <div className="mt-5 space-y-3">
              <Scenario number="1">
                Damage to, or destruction of, the ship or a Port Facility,
                for example by explosive devices, arson, sabotage or vandalism.
              </Scenario>

              <Scenario number="2">
                Hijacking or seizure of the ship or of persons on board.
              </Scenario>

              <Scenario number="3">
                Attacks by armed robbers.
              </Scenario>

              <Scenario number="4">
                Tampering with cargo, essential ship equipment or systems, or
                ship&apos;s stores.
              </Scenario>

              <Scenario number="5">
                Unauthorized access or use, including presence of stowaways.
              </Scenario>

              <Scenario number="6">
                Smuggling weapons or equipment, including weapons of mass
                destruction.
              </Scenario>

              <Scenario number="7">
                Use of the ship to carry persons intending to cause a security
                incident, or their equipment.
              </Scenario>

              <Scenario number="8">
                Use of the ship itself as a weapon or as a means to cause
                damage or destruction.
              </Scenario>

              <Scenario number="9">
                Attacks from seaward while at berth or at anchor.
              </Scenario>

              <Scenario number="10">
                Attacks while at sea.
              </Scenario>
            </div>
          </Card>

          {/* 8.2 */}
          <Card title="8.2 Security Drills and Exercises">
            <p>
              The objective of drills and exercises is to ensure that vessel
              personnel are proficient in all assigned security duties at all
              security levels.
            </p>

            <p>
              They also help identify security-related deficiencies that need
              to be addressed.
            </p>
          </Card>

          {/* DRILL FREQUENCY */}
          <Card title="Frequency of Security Drills">
            <div className="grid gap-4 md:grid-cols-3">
              <InfoBox
                title="Normal Frequency"
                value="At least once every 3 months"
              />

              <InfoBox
                title="Crew Change"
                value="Within 1 week"
              />

              <InfoBox
                title="Condition"
                value="If more than 25% personnel change"
              />
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">
                Important
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                When more than 25 percent of vessel&apos;s personnel have been
                changed at any one time, with personnel who have not previously
                participated in any drill on that vessel within the last
                3 months, a drill should be conducted within one week of the
                change.
              </p>
            </div>
          </Card>

          {/* DRILL SCENARIOS */}
          <Card title="Security Drill Scenarios">
            <p>
              The handout states that drills should test individual elements
              of the plan, including:
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Damage to, or destruction of, the vessel or a port facility.
              </Point>

              <Point>
                Hijacking or seizure of the vessel or of persons on board.
              </Point>

              <Point>
                Tampering with cargo, essential vessel equipment, systems or
                vessel stores.
              </Point>

              <Point>
                Unauthorized access or use, including presence of stowaways.
              </Point>

              <Point>
                Smuggling weapons or equipment, including weapons of mass
                destruction.
              </Point>

              <Point>
                Use of the vessel to carry persons intending to cause a
                security incident, or their equipment.
              </Point>

              <Point>
                Use of the vessel itself as a weapon or as a means to cause
                damage or destruction.
              </Point>

              <Point>
                Attacks from seaward while at berth or at anchor, and attacks
                while at sea.
              </Point>
            </div>
          </Card>

          {/* EXERCISES */}
          <Card title="Security Exercises">
            <p>
              Various types of exercises involving participation of vessel
              security personnel should be carried out at least once each
              calendar year.
            </p>

            <div className="mt-5 rounded-xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="font-extrabold text-cyan-900">
                Maximum Interval
              </h3>

              <p className="mt-2 text-slate-700">
                The handout states that there should be no more than
                18 months between the exercises.
              </p>
            </div>
          </Card>

          {/* EXERCISE TESTING */}
          <Card title="What Should Security Exercises Test?">
            <div className="grid gap-3 md:grid-cols-2">
              <Feature title="Communications">
                Test the ability to communicate effectively during a security
                incident.
              </Feature>

              <Feature title="Coordination">
                Test coordination between personnel and organizations.
              </Feature>

              <Feature title="Resource Availability">
                Check that necessary resources are available.
              </Feature>

              <Feature title="Response">
                Test the effectiveness of the response to a security incident.
              </Feature>
            </div>
          </Card>

          {/* EXERCISE TYPES */}
          <Card title="Types of Exercises">
            <p>The handout includes:</p>

            <div className="mt-4 space-y-3">
              <Point>Full-scale or live exercise.</Point>

              <Point>
                Tabletop simulation or seminar.
              </Point>

              <Point>
                Exercise combined with other exercises such as search and
                rescue or emergency-response exercises.
              </Point>
            </div>
          </Card>

          {/* PLANNING */}
          <Card title="Planning of Drills and Exercises">
            <div className="space-y-3">
              <Point>
                Drills and exercises should be based on threat assessments and
                evaluated risks.
              </Point>

              <Point>
                They should test individual elements of the Ship Security Plan
                (SSP).
              </Point>

              <Point>
                They should build skills in developing search and
                identification techniques.
              </Point>
            </div>
          </Card>

          {/* PARTICIPATION */}
          <Card title="Participation in Security Drills">
            <p>
              According to the handout, drills should include participation,
              where available, of:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Role abbreviation="CSO" name="Company Security Officer" />
              <Role abbreviation="PFSO" name="Port Facility Security Officer" />
              <Role abbreviation="SSO" name="Ship Security Officer" />
              <Role
                abbreviation="CG"
                name="Relevant Contracting Governments"
              />
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 08 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Security contingency plans cover a range of possible security
                incidents.
              </Revision>

              <Revision>
                Drills ensure personnel are proficient in assigned security
                duties.
              </Revision>

              <Revision>
                Security drills should normally be conducted at least once
                every three months.
              </Revision>

              <Revision>
                Certain crew changes require a drill within one week.
              </Revision>

              <Revision>
                Security exercises should be carried out at least once each
                calendar year.
              </Revision>

              <Revision>
                No more than 18 months should pass between exercises.
              </Revision>

              <Revision>
                Exercises test communications, coordination, resources and
                response.
              </Revision>

              <Revision>
                Drills and exercises should be based on threat assessments and
                evaluated risks.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-07"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 07
            </Link>

            <Link
              href="/stsdsd/topic-09"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 09: Security Administration →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>

      <div className="mt-4 space-y-4 leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function Scenario({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-red-100 bg-red-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-700 font-extrabold text-white">
        {number}
      </div>

      <p className="pt-1 text-slate-700">{children}</p>
    </div>
  );
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-cyan-700">✓</span>
      <p>{children}</p>
    </div>
  );
}

function InfoBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
        {title}
      </p>

      <p className="mt-2 font-extrabold text-slate-900">{value}</p>
    </div>
  );
}

function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
      <h3 className="font-extrabold text-blue-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

function Role({
  abbreviation,
  name,
}: {
  abbreviation: string;
  name: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <p className="text-xl font-extrabold text-cyan-800">{abbreviation}</p>
      <p className="mt-1 font-semibold text-slate-700">{name}</p>
    </div>
  );
}

function Revision({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/10 p-4 leading-6 text-slate-100">
      ✓ {children}
    </div>
  );
}