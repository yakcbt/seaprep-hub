"use client";

import Link from "next/link";

export default function STSDSDTopic02() {
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
            STSDSD • Topic 02
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Maritime Security Policy
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            International maritime security requirements, IMO initiatives,
            SOLAS, ISPS Code, SUA Convention and important security
            definitions.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* 2.1 */}
          <Card title="2.1 Familiarity with Relevant International Conventions, Codes and Recommendations">
            <p>
              Maritime security is supported by international conventions,
              codes, recommendations and national requirements.
            </p>

            <p>
              The International Maritime Organization (IMO) has an important
              role in developing international measures relating to safety,
              security and efficiency in shipping.
            </p>
          </Card>

          {/* IMO */}
          <Card title="2.2 Familiarity with Relevant Government Legislation and Regulations">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Contribution of the International Maritime Organization (IMO)
            </h3>

            <p>
              Since 1959, IMO, as the specialized agency of the United Nations
              concerned with maritime affairs, has provided a forum for
              cooperation among Governments in matters affecting shipping.
            </p>

            <p>
              Its work includes the adoption of international conventions,
              codes, recommendations and guidelines covering maritime safety,
              security, environmental protection and other shipping matters.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>Development of international maritime standards.</Point>
              <Point>Safety of navigation.</Point>
              <Point>Maritime security.</Point>
              <Point>Prevention and control of marine pollution.</Point>
              <Point>Facilitation of international maritime traffic.</Point>
              <Point>International cooperation between Governments.</Point>
            </div>
          </Card>

          {/* LRIT */}
          <Card title="Long-Range Identification and Tracking (LRIT)">
            <p>
              The handout discusses Long-Range Identification and Tracking of
              ships as an international maritime security and safety measure.
            </p>

            <p>
              LRIT provides for the global identification and tracking of
              ships and forms part of international measures intended to
              improve maritime awareness.
            </p>

            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="font-bold text-blue-900">
                Key Point
              </p>
              <p className="mt-2">
                Identification and tracking of ships can support maritime
                safety, security and the protection of the marine environment.
              </p>
            </div>
          </Card>

          {/* PIRACY */}
          <Card title="Piracy and Armed Robbery Against Ships">
            <p>
              IMO has developed guidance and recommendations for Governments,
              shipowners, ship operators, shipmasters and crews concerning the
              prevention and suppression of piracy and armed robbery against
              ships.
            </p>

            <p>
              The handout describes international cooperation as an important
              part of preventing, reporting and responding to piracy and armed
              robbery incidents.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>Prevention of attacks.</Point>
              <Point>Reporting of incidents.</Point>
              <Point>International cooperation.</Point>
              <Point>Investigation of incidents.</Point>
            </div>
          </Card>

          {/* SOLAS / ISPS */}
          <Card title="Enhancement of Maritime Security">
            <h3 className="text-xl font-extrabold text-cyan-800">
              SOLAS Chapter XI-2 and the ISPS Code
            </h3>

            <p>
              Following increased international concern about maritime
              security, measures were developed to strengthen the security of
              ships and port facilities.
            </p>

            <p>
              The International Ship and Port Facility Security Code
              (ISPS Code) provides a standardized framework for evaluating
              security risks and implementing appropriate security measures.
            </p>

            <div className="mt-5 rounded-xl bg-slate-100 p-5">
              <p className="font-bold text-slate-900">
                ISPS Code
              </p>
              <p className="mt-2">
                The ISPS Code contains security-related requirements and
                guidance concerning ships, port facilities, Governments and
                shipping companies.
              </p>
            </div>
          </Card>

          {/* SECURITY INCIDENTS */}
          <Card title="Security Incidents Addressed">
            <p>
              The maritime security framework is intended to help prevent and
              respond to security incidents that may affect ships and port
              facilities.
            </p>

            <div className="mt-5 space-y-3">
              <Check>Seizure of a ship.</Check>

              <Check>
                Use of a ship as a weapon.
              </Check>

              <Check>
                Use of a ship to cause a security incident.
              </Check>

              <Check>
                Attacks against ships or port facilities.
              </Check>

              <Check>
                Other unlawful acts affecting maritime safety and security.
              </Check>
            </div>
          </Card>

          {/* SUA */}
          <Card title="IMO Treaties on the Suppression of Unlawful Acts (SUA)">
            <p>
              The handout describes international measures for the suppression
              of unlawful acts against the safety of maritime navigation.
            </p>

            <p>
              These measures address unlawful acts against ships and maritime
              navigation and provide an international legal framework for
              dealing with certain offences.
            </p>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">
                Important
              </p>
              <p className="mt-2">
                Maritime security is supported not only by physical security
                measures but also by international legal instruments and
                cooperation between States.
              </p>
            </div>
          </Card>

          {/* CAPACITY BUILDING */}
          <Card title="Capacity Building to Prevent and Combat Terrorism">
            <p>
              IMO technical cooperation activities support States in
              implementing maritime security requirements and strengthening
              their ability to prevent and respond to security threats.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>Promoting maritime security awareness.</Point>
              <Point>Supporting implementation of SOLAS and ISPS Code.</Point>
              <Point>Training and technical cooperation.</Point>
              <Point>Strengthening maritime security capabilities.</Point>
            </div>
          </Card>

          {/* DEFINITIONS */}
          <Card title="2.3 Definitions">
            <p>
              The handout provides important maritime security terms that
              personnel with designated security duties should understand.
            </p>

            <div className="mt-5 space-y-4">
              <Definition
                term="Ship Security Plan (SSP)"
                text="A ship-specific document based on the Ship Security Assessment that identifies equipment, measures and procedures used to maintain security aboard the ship."
              />

              <Definition
                term="Company Security Officer (CSO)"
                text="The person designated by the Company for ensuring that a ship security assessment is carried out, an SSP is developed and submitted for approval, and the plan is implemented and maintained."
              />

              <Definition
                term="Ship Security Officer (SSO)"
                text="The person on board the ship responsible for the security of the ship, including implementation and maintenance of the SSP and liaison with the CSO and Port Facility Security Officer."
              />

              <Definition
                term="Port Facility"
                text="A location where the ship-port interface takes place and may include areas such as anchorages, waiting berths and approaches from seaward."
              />

              <Definition
                term="Ship/Port Interface"
                text="Interactions involving the movement of people, goods or the provision of port services to or from the ship."
              />

              <Definition
                term="Ship-to-Ship Activity"
                text="An activity involving transfer of goods or persons from one ship to another that is not related to a port facility."
              />

              <Definition
                term="Port Facility Security Officer (PFSO)"
                text="The person designated as responsible for the security of the port facility."
              />

              <Definition
                term="Recognized Security Organization (RSO)"
                text="An organization with appropriate expertise in security matters authorized to carry out specified security-related activities."
              />

              <Definition
                term="Declaration of Security (DOS)"
                text="An agreement between a ship and a port facility, or between ships, specifying the security measures each will implement."
              />

              <Definition
                term="Security Incident"
                text="Any suspicious act or circumstance threatening the security of a ship."
              />
            </div>
          </Card>

          {/* SECURITY LEVELS */}
          <Card title="Security Levels">
            <div className="grid gap-4 md:grid-cols-3">
              <SecurityLevel
                level="1"
                title="Security Level 1"
                text="The level for which minimum appropriate protective security measures shall be maintained at all times."
              />

              <SecurityLevel
                level="2"
                title="Security Level 2"
                text="The level for which appropriate additional protective security measures shall be maintained for a period of time as a result of heightened risk of a security incident."
              />

              <SecurityLevel
                level="3"
                title="Security Level 3"
                text="The level for which further specific protective security measures shall be maintained for a limited period when a security incident is probable or imminent."
              />
            </div>
          </Card>

          {/* SENSITIVE INFO */}
          <Card title="2.4 Handling Sensitive Security-Related Information and Communications">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="font-extrabold text-red-800">
                Security Information Must Be Protected
              </p>

              <p className="mt-3">
                SSP documents and other sensitive security information must be
                kept confidential.
              </p>

              <p className="mt-3">
                The Security Plan is not to be shown to persons who are not
                connected with the ship, except where specifically permitted.
              </p>
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 02 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                IMO develops international maritime standards and guidance.
              </Revision>

              <Revision>
                SOLAS Chapter XI-2 and the ISPS Code are central to maritime
                security.
              </Revision>

              <Revision>
                SSP means Ship Security Plan.
              </Revision>

              <Revision>
                SSO means Ship Security Officer.
              </Revision>

              <Revision>
                CSO means Company Security Officer.
              </Revision>

              <Revision>
                PFSO means Port Facility Security Officer.
              </Revision>

              <Revision>
                Security Levels are Level 1, Level 2 and Level 3.
              </Revision>

              <Revision>
                Sensitive security information must be kept confidential.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-01"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 01
            </Link>

            <Link
              href="/stsdsd/topic-03"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 03: Security Responsibilities →
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
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 font-semibold text-slate-700">
      • {children}
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-emerald-600">✓</span>
      <p>{children}</p>
    </div>
  );
}

function Definition({
  term,
  text,
}: {
  term: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{term}</h3>
      <p className="mt-2">{text}</p>
    </div>
  );
}

function SecurityLevel({
  level,
  title,
  text,
}: {
  level: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-700 text-lg font-extrabold text-white">
        {level}
      </div>
      <h3 className="mt-4 font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
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