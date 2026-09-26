"use client";

import Link from "next/link";

export default function STSDSDTopic03() {
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
            STSDSD • Topic 03
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Security Responsibilities
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Security responsibilities of Governments, companies, ships, port
            facilities and personnel involved in maritime security.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* CONTRACTING GOVERNMENTS */}
          <Card title="3.1 Contracting Governments">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of Government
            </h3>

            <div className="mt-4 space-y-3">
              <Item>Setting of security level.</Item>
              <Item>Approving security assessments.</Item>
              <Item>Designating ports which need PFSO.</Item>
              <Item>Approving security plans.</Item>
              <Item>Establishing requirements for a DOS.</Item>
            </div>
          </Card>

          {/* RSO */}
          <Card title="3.2 Recognized Security Organizations">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of RSO
            </h3>

            <p>
              Under the authority of the Government, the Recognized Security
              Organization may carry out specified security-related functions.
            </p>

            <div className="mt-4 space-y-3">
              <Item>Carry out security assessments.</Item>
              <Item>Approve security assessments.</Item>
              <Item>Designate ports which need PFSO.</Item>
              <Item>Approve security plans.</Item>
              <Item>Establish requirements for a DOS.</Item>
            </div>
          </Card>

          {/* COMPANY */}
          <Card title="3.3 The Company">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of Company
            </h3>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Item>Ensure all required documents are aboard.</Item>
              <Item>Designate CSO and SSO for each ship.</Item>
              <Item>Ensure each ship has an approved SSP.</Item>
              <Item>Establish overriding authority of Master.</Item>
              <Item>
                Ensure the CSO, Master and SSO are given the necessary support.
              </Item>
            </div>
          </Card>

          {/* SHIP */}
          <Card title="3.4 The Ship">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of Ship
            </h3>

            <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-5">
              <p className="font-semibold text-slate-700">
                The vessel shall comply with the requirements of the Ship
                Security Plan (SSP) as per the Security Level set.
              </p>
            </div>
          </Card>

          {/* PORT */}
          <Card title="3.5 The Port Facility">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of Port Facility
            </h3>

            <div className="mt-4 space-y-3">
              <Item>
                A Port Facility is required to act upon the security levels set
                by the Contracting Government within whose territory it is
                located.
              </Item>

              <Item>
                When a ship within a port facility area encounters security
                difficulties, the port facility shall liaise and coordinate
                action.
              </Item>
            </div>
          </Card>

          {/* SSO */}
          <Card title="3.6 Ship Security Officer">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of SSO
            </h3>

            <div className="mt-4 space-y-3">
              <Item>
                Undertake regular security inspections of the ship to ensure
                security measures are maintained.
              </Item>

              <Item>
                Maintain implementation of the SSP.
              </Item>

              <Item>
                Coordinate security aspects of cargo and ship&apos;s stores.
              </Item>

              <Item>
                Propose changes in the SSP.
              </Item>

              <Item>
                Report to the CSO any deficiencies identified in audits and
                inspections.
              </Item>

              <Item>
                Enhance security awareness and vigilance on board.
              </Item>

              <Item>
                Ensure adequate training has been provided to ship&apos;s
                personnel.
              </Item>

              <Item>
                Report all security incidents.
              </Item>

              <Item>
                Coordinate implementation of the SSP with the CSO and PFSO.
              </Item>

              <Item>
                Ensure security equipment is properly operated, tested,
                calibrated and maintained.
              </Item>
            </div>
          </Card>

          {/* CSO */}
          <Card title="3.7 Company Security Officer">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of CSO
            </h3>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Item>May act as CSO for one or more vessels.</Item>
              <Item>Designate SSO for each ship.</Item>
              <Item>Ensure each ship has an approved SSP.</Item>
              <Item>Establish overriding authority of Master.</Item>
              <Item>
                Ensure the Master and SSO are given the necessary support.
              </Item>
              <Item>
                Advise the level of threat likely to be encountered by the
                ship.
              </Item>
              <Item>Ensure the SSA is carried out.</Item>
              <Item>Ensure joint exercises are carried out.</Item>
              <Item>
                Arrange for internal and external audits to be carried out.
              </Item>
              <Item>
                Ensure consistency between security requirements and safety
                requirements.
              </Item>
            </div>
          </Card>

          {/* PFSO */}
          <Card title="3.8 Port Facility Security Officer">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of PFSO
            </h3>

            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="leading-7 text-slate-700">
                The Port Facility Security Officer is responsible for the
                development, implementation, revision and maintenance of the
                Port Facility Security Plan.
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                The PFSO also liaises with the SSO and the CSO.
              </p>
            </div>
          </Card>

          {/* DESIGNATED SECURITY DUTIES */}
          <Card title="3.9 Seafarers with Designated Security Duties">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Responsibility of Ship&apos;s Personnel
            </h3>

            <p>
              Ship personnel other than the SSO may be assigned security duties
              in support of the SSP.
            </p>

            <div className="mt-4 rounded-xl bg-emerald-50 p-5">
              <p className="font-bold text-emerald-900">
                Key Point
              </p>
              <p className="mt-2 text-slate-700">
                Personnel assigned designated security duties support the
                implementation of shipboard security measures under the SSP.
              </p>
            </div>
          </Card>

          {/* PORT PERSONNEL */}
          <Card title="3.10 Port Facility Personnel with Specific Security Duties">
            <p>
              Port Facility Personnel other than the PFSO may be assigned
              security duties in support of the Port Facility Security Plan.
            </p>
          </Card>

          {/* OTHER PERSONNEL */}
          <Card title="3.11 Other Personnel">
            <p>
              Personnel of military, industry and Government organizations,
              and other personnel associated with ships and port facilities,
              may have a role in enhancing maritime security.
            </p>

            <p>
              Their activities may include prevention, suppression and
              reporting of piracy and armed robbery against ships.
            </p>
          </Card>

          {/* WHO IS WHO */}
          <section className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Who is Responsible?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Role abbreviation="SSO" name="Ship Security Officer" />
              <Role abbreviation="CSO" name="Company Security Officer" />
              <Role abbreviation="PFSO" name="Port Facility Security Officer" />
              <Role abbreviation="RSO" name="Recognized Security Organization" />
              <Role abbreviation="SSP" name="Ship Security Plan" />
              <Role abbreviation="DOS" name="Declaration of Security" />
            </div>
          </section>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 03 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Contracting Governments set security levels.
              </Revision>

              <Revision>
                The Company designates the CSO and SSO.
              </Revision>

              <Revision>
                The ship complies with the SSP according to the security level.
              </Revision>

              <Revision>
                SSO undertakes regular security inspections aboard the ship.
              </Revision>

              <Revision>
                CSO ensures the Ship Security Assessment is carried out.
              </Revision>

              <Revision>
                PFSO is responsible for the Port Facility Security Plan.
              </Revision>

              <Revision>
                SSO coordinates implementation of the SSP with CSO and PFSO.
              </Revision>

              <Revision>
                Ship personnel other than the SSO may have designated security
                duties.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-02"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 02
            </Link>

            <Link
              href="/stsdsd/topic-04"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 04: Vessel Security Assessment →
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

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-cyan-700">✓</span>
      <p className="text-slate-700">{children}</p>
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
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <p className="text-xl font-extrabold text-cyan-800">{abbreviation}</p>
      <p className="mt-1 text-sm font-semibold text-slate-700">{name}</p>
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