"use client";

import Link from "next/link";

export default function STSDSDTopic09() {
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
            STSDSD • Topic 09
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Security Administration
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Documentation, records and important security documents required
            on board the ship.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* 9.1 */}
          <Card title="9.1 Documentation and Records">
            <div className="space-y-3">
              <Point>
                Security documents shall be available on board at all times.
              </Point>

              <Point>
                Personnel should know the activities for which records shall be
                kept on board.
              </Point>

              <Point>
                Personnel should also know the duration for which those records
                should be retained.
              </Point>
            </div>
          </Card>

          {/* DOCUMENTS */}
          <Card title="Security Documents Required">
            <p>
              According to the course handout, the following security documents
              and records are required:
            </p>

            <div className="mt-5 space-y-3">
              <DocumentItem
                number="1"
                title="Appointment of SSO"
                text="Record relating to the appointment of the Ship Security Officer."
              />

              <DocumentItem
                number="2"
                title="SSP"
                text="Ship Security Plan."
              />

              <DocumentItem
                number="3"
                title="Form of DOS"
                text="Form of Declaration of Security."
              />

              <DocumentItem
                number="4"
                title="Continuous Synopsis Record (CSR)"
                text="The vessel's Continuous Synopsis Record."
              />

              <DocumentItem
                number="5"
                title="Continuous Synopsis Record"
                text="The handout lists Continuous Synopsis Record as a required security document."
              />

              <DocumentItem
                number="6"
                title="Ship History Record"
                text="A record maintained to provide an onboard history of the ship with respect to its name, identification and ownership."
              />

              <DocumentItem
                number="7"
                title="Security Incidents"
                text="Records of security incidents."
              />

              <DocumentItem
                number="8"
                title="Declaration of Security"
                text="Records relating to the Declaration of Security."
              />

              <DocumentItem
                number="9"
                title="Security Inspections"
                text="Records of security inspections."
              />

              <DocumentItem
                number="10"
                title="Security Drills & Exercises"
                text="Records of security drills and exercises."
              />
            </div>
          </Card>

          {/* KEY ABBREVIATIONS */}
          <Card title="Important Security Abbreviations">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Abbreviation
                short="SSO"
                full="Ship Security Officer"
              />

              <Abbreviation
                short="SSP"
                full="Ship Security Plan"
              />

              <Abbreviation
                short="DOS"
                full="Declaration of Security"
              />

              <Abbreviation
                short="CSR"
                full="Continuous Synopsis Record"
              />
            </div>
          </Card>

          {/* CSR */}
          <Card title="Continuous Synopsis Record (CSR)">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-5">
              <p className="leading-7 text-slate-700">
                The handout describes this as an onboard record of the history
                of the ship with respect to its name, identification and
                ownership.
              </p>
            </div>
          </Card>

          {/* RECORD KEEPING */}
          <Card title="Security Record Keeping">
            <p>
              Security administration includes maintaining records relating to
              important shipboard security activities.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Record>Security incidents</Record>
              <Record>Declaration of Security</Record>
              <Record>Security inspections</Record>
              <Record>Security drills and exercises</Record>
            </div>
          </Card>

          {/* IMPORTANT */}
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Important
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-amber-900">
              Documents Must Be Available
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Security documents shall be available on board at all times.
              Personnel with security duties should know which activities
              require records and the period for which those records are to be
              retained.
            </p>
          </section>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 09 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Security documents must be available on board at all times.
              </Revision>

              <Revision>
                Appointment of the SSO is included in security documentation.
              </Revision>

              <Revision>
                SSP means Ship Security Plan.
              </Revision>

              <Revision>
                DOS means Declaration of Security.
              </Revision>

              <Revision>
                CSR means Continuous Synopsis Record.
              </Revision>

              <Revision>
                Records of security incidents must be maintained.
              </Revision>

              <Revision>
                Records of security inspections must be maintained.
              </Revision>

              <Revision>
                Security drills and exercises form part of security records.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-08"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 08
            </Link>

            <Link
              href="/stsdsd/topic-10"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 10: Introduction to Ship Piracy →
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

function Point({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-cyan-700">✓</span>
      <p>{children}</p>
    </div>
  );
}

function DocumentItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-700 font-extrabold text-white">
        {number}
      </div>

      <div>
        <h3 className="font-extrabold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
      </div>
    </div>
  );
}

function Abbreviation({
  short,
  full,
}: {
  short: string;
  full: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <p className="text-2xl font-extrabold text-cyan-800">{short}</p>
      <p className="mt-2 font-semibold text-slate-700">{full}</p>
    </div>
  );
}

function Record({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-semibold text-slate-700">
      ✓ {children}
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