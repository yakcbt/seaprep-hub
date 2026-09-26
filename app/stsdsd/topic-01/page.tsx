"use client";

import Link from "next/link";

export default function STSDSDTopic01() {
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
            STSDSD • Topic 01
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Introduction
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Introduction to security duties, course competence, current
            security threats and the vessel-port operational environment.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <Card title="1. Introduction">
            <p>
              This course is intended to provide the knowledge required for
              vessel personnel who are assigned specific security duties in
              connection with the Vessel Security Plan (SSP).
            </p>

            <p>
              The course is based on the requirements of Chapter XI-2 of SOLAS
              74, as amended, and the IMO ISPS Code.
            </p>

            <p>
              The course helps seafarers understand the duties of the Ship
              Security Officer (SSO) and how to carry out assigned security
              duties.
            </p>
          </Card>

          {/* COURSE OVERVIEW */}
          <Card title="1.1 Course Overview">
            <p>
              The objective of the course is that a candidate should be able to
              demonstrate sufficient knowledge to undertake the duties assigned
              under the Ship Security Plan (SSP).
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>
                Knowledge of current security threats and patterns.
              </Point>

              <Point>
                Recognition and detection of weapons, dangerous substances and
                devices.
              </Point>

              <Point>
                Recognition, on a non-discriminatory basis, of characteristics
                and behavioural patterns of persons who may be likely to
                threaten security.
              </Point>

              <Point>
                Techniques used to circumvent security measures.
              </Point>

              <Point>
                Crowd management and control techniques.
              </Point>

              <Point>
                Security-related communications.
              </Point>

              <Point>
                Knowledge of emergency procedures and contingency plans.
              </Point>

              <Point>
                Operation of security equipment and systems.
              </Point>

              <Point>
                Testing, calibration and at-sea maintenance of security
                equipment and systems.
              </Point>

              <Point>
                Inspection, control and monitoring techniques.
              </Point>

              <Point>
                Methods of physical searches of persons, personal effects,
                baggage, cargo and vessel stores.
              </Point>
            </div>
          </Card>

          {/* COMPETENCE */}
          <Card title="1.2 Competence to be Achieved">
            <p>
              The handout identifies the knowledge and competence expected from
              personnel carrying designated security duties.
            </p>

            <div className="mt-5 space-y-3">
              <Check>
                Knowledge of maritime security levels and the consequential
                security measures and procedures aboard ship and in the port
                facility environment.
              </Check>

              <Check>
                Knowledge of security-related contingency plans and procedures
                for responding to security threats or breaches of security.
              </Check>

              <Check>
                Understanding procedures for maintaining critical operations of
                the ship and port facility interface.
              </Check>

              <Check>
                Working knowledge of maritime security terms and definitions,
                including elements that may relate to piracy and armed robbery.
              </Check>

              <Check>
                Knowledge of risk assessment and assessment tools.
              </Check>

              <Check>
                Knowledge of techniques used to circumvent security measures,
                including those used by pirates and armed robbers.
              </Check>

              <Check>
                Knowledge enabling recognition, on a non-discriminatory basis,
                of persons posing potential security risks.
              </Check>

              <Check>
                Knowledge enabling recognition of weapons, dangerous substances
                and devices and awareness of the damage they can cause.
              </Check>

              <Check>
                Knowledge of crowd management and control techniques, where
                appropriate.
              </Check>

              <Check>
                Knowledge of coordinating searches.
              </Check>

              <Check>
                Knowledge of methods for physical searches and non-intrusive
                inspections.
              </Check>

              <Check>
                Knowledge of controlling access to the ship and restricted
                areas on board ship.
              </Check>

              <Check>
                Knowledge of methods for effective monitoring of deck areas and
                areas surrounding the ship.
              </Check>

              <Check>
                Knowledge of security aspects relating to handling cargo and
                ship&apos;s stores.
              </Check>

              <Check>
                Knowledge of methods for controlling embarkation,
                disembarkation and access while on board.
              </Check>

              <Check>
                Knowledge of security equipment and systems and their
                limitations.
              </Check>

              <Check>
                Knowledge of training, drill and exercise requirements under
                relevant conventions, codes and IMO circulars.
              </Check>

              <Check>
                Knowledge of methods for enhancing security awareness and
                vigilance on board.
              </Check>
            </div>
          </Card>

          {/* IMPORTANT NOTE */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-extrabold text-amber-900">
              Important Training Principle
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              The course emphasizes that the seafarer is not being trained to
              fight or respond militarily to security threats. The purpose of
              the training is to identify, deter or mitigate such threats
              through proper planning, preparation and coordination with the
              appropriate authorities.
            </p>
          </div>

          {/* THREATS */}
          <Card title="1.3 Current Security Threats and Patterns">
            <p>
              The handout identifies a number of current security issues that
              may affect maritime operations.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Threat
                title="Piracy"
                text="Piracy and armed attacks can create serious threats to ships, crew, cargo and maritime operations."
              />

              <Threat
                title="Terrorism"
                text="Terrorism may involve violence or the threat of violence intended to achieve political objectives."
              />

              <Threat
                title="Contraband Smuggling"
                text="Illegal goods, weapons and other contraband may be concealed and moved through maritime transport."
              />

              <Threat
                title="Cargo Theft"
                text="Cargo theft can cause major financial loss and may involve organized criminal activity."
              />

              <Threat
                title="Collateral Damage"
                text="Security incidents may also cause unintended damage or loss to ships, facilities and surrounding operations."
              />
            </div>

            <div className="mt-5 rounded-xl bg-slate-100 p-5">
              <p className="font-semibold leading-7 text-slate-700">
                Prevention is emphasized in the handout as an important method
                of dealing with security threats.
              </p>
            </div>
          </Card>

          {/* VESSEL PORT OPERATIONS */}
          <Card title="1.4 Vessel and Port Operations and Conditions">
            <p>
              Maritime transportation operates through an important interface
              between the ship, the port and other modes of transportation.
            </p>

            <p>
              This interface includes the movement of cargo, containers,
              vehicles, personnel, stores and other goods between the vessel
              and shore.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>Movement of cargo and containers.</Point>
              <Point>Movement of vehicles.</Point>
              <Point>Movement of officials and labour.</Point>
              <Point>Loading and discharge operations.</Point>
              <Point>Movement of stores and provisions.</Point>
              <Point>Movement of passengers and other personnel.</Point>
            </div>

            <p className="mt-5">
              The operational interface between maritime transport and other
              modes of transportation is therefore an important part of the
              security management of the ship and port environment.
            </p>
          </Card>

          {/* GENERAL COURSE OVERVIEW */}
          <Card title="1.5 General Overview of the Course">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoBox
                title="Course Duration"
                value="2 Days (14 Hours)"
              />

              <InfoBox
                title="Maximum Intake"
                value="16 Candidates"
              />

              <InfoBox
                title="Attendance"
                value="100% Required"
              />

              <InfoBox
                title="Eligibility"
                value="Anyone desiring to join sea can attend this course"
              />
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Remember These Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                STSDSD prepares seafarers for designated security duties.
              </Revision>

              <Revision>
                Ship security duties are carried out in accordance with the SSP.
              </Revision>

              <Revision>
                Personnel should understand maritime security levels and
                procedures.
              </Revision>

              <Revision>
                Security threats include piracy, terrorism, smuggling and cargo
                theft.
              </Revision>

              <Revision>
                Personnel must be able to recognize potential security risks.
              </Revision>

              <Revision>
                Access control, monitoring, searches and security equipment are
                important security functions.
              </Revision>

              <Revision>
                The course duration stated in the handout is 2 days / 14 hours.
              </Revision>

              <Revision>
                The handout requires 100% attendance.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/stsdsd"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← STSDSD Topics
            </Link>

            <Link
              href="/stsdsd/topic-02"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 02: Maritime Security Policy →
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
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
      <p className="font-semibold text-slate-700">• {children}</p>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-emerald-600">✓</span>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function Threat({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50 p-5">
      <h3 className="font-extrabold text-red-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
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
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">
        {title}
      </p>
      <p className="mt-2 font-extrabold text-slate-900">{value}</p>
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