"use client";

import Link from "next/link";

export default function STSDSDTopic07() {
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
            STSDSD • Topic 07
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Ship Security Actions
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Security-level actions, ship/port interface, Declaration of
            Security, reporting of incidents and shipboard security procedures.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <Card title="Ship Security Actions">
            <div className="space-y-3">
              <Point>
                There are three security levels and different actions are
                required for each level.
              </Point>

              <Point>
                Recommended actions in response to attacks and attempted attacks
                by pirates and armed robbers must be practiced.
              </Point>
            </div>
          </Card>

          {/* 7.1 */}
          <Card title="7.1 Actions Required by Different Security Levels">
            <div className="space-y-3">
              <Point>
                For each security level, the SSP will contain a set of
                instructions to be complied with by ship staff.
              </Point>

              <Point>
                The Port Security Plan will contain instructions to be complied
                with by the port.
              </Point>

              <Point>
                Ensuring that instructions in the respective plans are being
                complied with makes things safer overall.
              </Point>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Level
                level="1"
                text="Minimum appropriate protective security measures are maintained at all times."
              />

              <Level
                level="2"
                text="Additional protective measures specified in the SSP are taken."
              />

              <Level
                level="3"
                text="Further specific protective measures specified in the SSP are taken."
              />
            </div>
          </Card>

          {/* SEVEN ACTIVITIES */}
          <Card title="Seven Security Activities">
            <p>
              The following security measures and procedures at all three
              security levels must address:
            </p>

            <div className="mt-4 space-y-3">
              <Numbered number="1">
                Ensure the performance of all vessel security duties.
              </Numbered>

              <Numbered number="2">
                Control access to the vessel.
              </Numbered>

              <Numbered number="3">
                Control the embarkation of persons and their effects.
              </Numbered>

              <Numbered number="4">
                Monitor restricted areas to ensure only authorized persons have
                access.
              </Numbered>

              <Numbered number="5">
                Monitor deck areas and areas surrounding the vessel.
              </Numbered>

              <Numbered number="6">
                Coordinate the security aspects of handling cargo and vessel
                stores.
              </Numbered>

              <Numbered number="7">
                Ensure that security communication is readily available.
              </Numbered>
            </div>
          </Card>

          {/* 7.2 */}
          <Card title="7.2 Maintaining Security of the Ship / Port Interface">
            <p>
              The handout identifies ship/port-interface activities for which
              notification may be required.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Activity title="Cargo Work Alongside">
                Loading and discharging operations.
              </Activity>

              <Activity title="Cargo Work from Barges">
                Cargo operations involving barges.
              </Activity>

              <Activity title="Crew & Passengers">
                Embarkation and disembarkation.
              </Activity>

              <Activity title="Stores and Bunkers">
                Receipt of ship stores and bunkers.
              </Activity>

              <Activity title="Repairs">
                Repair activities involving the ship and shore personnel.
              </Activity>
            </div>
          </Card>

          {/* 7.3 DOS */}
          <Card title="7.3 Familiarity with the Declaration of Security">
            <p>
              A Declaration of Security (DOS) is an agreement reached between a
              ship and a port facility, or another ship, specifying the
              security measures each will implement.
            </p>

            <h3 className="mt-6 text-lg font-extrabold text-cyan-800">
              When may a DOS be required?
            </h3>

            <div className="mt-4 space-y-3">
              <Point>
                When the ship is operating at a higher security level than the
                port facility or another ship with which it is interfacing.
              </Point>

              <Point>
                When there is an agreement on a Declaration of Security between
                Contracting Governments covering certain international voyages
                or specific ships on those voyages.
              </Point>

              <Point>
                When there has been a security threat or a security incident
                involving the ship or port facility.
              </Point>

              <Point>
                When the ship is at a port which is not required to have and
                implement an approved Port Facility Security Plan.
              </Point>

              <Point>
                When the ship is conducting ship-to-ship activities with
                another ship which is not required to have and implement an
                approved Ship Security Plan.
              </Point>
            </div>
          </Card>

          {/* DOS REQUIREMENTS */}
          <Card title="Declaration of Security – Important Requirements">
            <div className="space-y-3">
              <Point>
                A request for completion of a Declaration of Security must be
                acknowledged by the applicable port facility or ship.
              </Point>

              <Point>
                The Declaration of Security is completed by the Master or SSO
                on behalf of the ship.
              </Point>

              <Point>
                For the port facility, it is completed by the PFSO or another
                authorized person responsible for shore-side security.
              </Point>

              <Point>
                The DOS addresses security requirements that may be shared
                between the port facility and ship, or between ships.
              </Point>

              <Point>
                A copy of the Declaration of Security must be kept by both the
                ship and the port facility.
              </Point>
            </div>
          </Card>

          {/* DOS ACTIVITY */}
          <Card title="DOS – Security Activities">
            <div className="space-y-3">
              <Point>
                Communications established between the ship and waterfront
                facility.
              </Point>

              <Point>
                Method of raising alarm agreed between ship and facility.
              </Point>

              <Point>
                Ship/facility will communicate any noted security
                non-conformities and notify appropriate Government agencies.
              </Point>

              <Point>
                Port-specific security information passed to the ship.
              </Point>

              <Point>
                Specifically who contacts local and national authorities,
                response centres and coast guard.
              </Point>
            </div>
          </Card>

          {/* DOS RESPONSIBILITY */}
          <Card title="DOS – Responsibility for Checking">
            <p>
              The handout identifies checks and screening associated with:
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Point>Crew hand-carried items and luggage.</Point>
              <Point>Ship&apos;s stores, cargo and vehicles.</Point>
              <Point>Responsibility for searching the berth.</Point>
              <Point>Monitoring security of water surrounding the ship.</Point>
              <Point>
                Verification of increased threat level and implementation of
                additional protective measures.
              </Point>
            </div>
          </Card>

          {/* 7.4 */}
          <Card title="7.4 Reporting Security Incidents">
            <div className="space-y-3">
              <Point>
                Follow reporting requirements in case of security incidents,
                including protocols for reporting attacks and attempted attacks
                by pirates and robbers.
              </Point>

              <Point>
                Although there may be reporting formats, a free-format report
                may also be used for initial reporting of a security incident.
              </Point>
            </div>
          </Card>

          {/* 7.5 */}
          <Card title="7.5 Execution of Security Procedures">
            <p>The SSO should:</p>

            <div className="mt-4 space-y-3">
              <Point>
                Undertake regular security inspections of the ship to ensure
                that appropriate security measures are maintained.
              </Point>

              <Point>
                Maintain and supervise implementation of the Ship Security Plan,
                including amendments to the plan.
              </Point>

              <Point>
                Coordinate security aspects of handling cargo and ship&apos;s
                stores with other shipboard personnel and relevant port facility
                security officers.
              </Point>

              <Point>
                Propose modifications to the Ship Security Plan.
              </Point>

              <Point>
                Report to the CSO any deficiencies and non-conformities
                identified during internal audits, periodic reviews, security
                inspections and verification of compliance.
              </Point>

              <Point>
                Ensure verification of compliance and implementation of
                corrective actions.
              </Point>
            </div>
          </Card>

          {/* SECURITY MEASURES */}
          <Card title="Security Measures at Each Security Level">
            <div className="grid gap-3 md:grid-cols-2">
              <Activity title="Access">
                Access to the ship by personnel, passengers and visitors.
              </Activity>

              <Activity title="Restricted Areas">
                Restricted areas on the ship.
              </Activity>

              <Activity title="Cargo">
                Handling of cargo.
              </Activity>

              <Activity title="Ship's Stores">
                Delivery of ship&apos;s stores.
              </Activity>

              <Activity title="Baggage">
                Handling unaccompanied baggage.
              </Activity>

              <Activity title="Monitoring">
                Monitoring the security of the ship.
              </Activity>
            </div>
          </Card>

          {/* GANGWAY WATCH */}
          <Card title="Ship's Access – Gangway Watch">
            <p>
              One of the most important duties of the Ship Security Officer or
              Duty Officer is to have an effective gangway watch to control
              access to the ship.
            </p>

            <h3 className="mt-6 text-lg font-extrabold text-cyan-800">
              Gangway Watch Duties
            </h3>

            <div className="mt-4 space-y-3">
              <Point>
                The gangway watch is posted at the top or foot of the gangway to
                perform duties as directed by the OOW.
              </Point>

              <Point>
                Duties normally include security of the ship and other safety
                and ceremonial duties.
              </Point>

              <Point>Security watches are stood to prevent sabotage.</Point>

              <Point>Protect property from damage or theft.</Point>

              <Point>Prevent access to restricted areas by unauthorized persons.</Point>

              <Point>Protect personnel.</Point>

              <Point>Security watches include security duty and patrols.</Point>

              <Point>Barracks watches.</Point>

              <Point>Fire watches.</Point>

              <Point>Watertight condition watch.</Point>

              <Point>
                Security watches and patrols may be assigned at the discretion
                of the Commanding Officer.
              </Point>

              <Point>
                Security watches and patrols are established to increase the
                physical security of the ship.
              </Point>

              <Point>
                Maintain continuous patrols above decks and below decks.
              </Point>

              <Point>
                Check classified stowage, including spaces containing
                classified equipment.
              </Point>

              <Point>
                Check gear for evidence of sabotage, thievery and fire hazards.
              </Point>

              <Point>Check security of weapons magazines.</Point>

              <Point>
                Obtain periodic sounding of designated tanks and spaces.
              </Point>

              <Point>Periodically inspect damage-control closures.</Point>

              <Point>
                Be especially watchful at night and during challenging times.
              </Point>

              <Point>
                Challenge all persons on or near the post.
              </Point>

              <Point>
                Do not allow any person to pass without proper authority.
              </Point>
            </div>
          </Card>

          {/* COLOURED STRAPS */}
          <Card title="Coloured Strap System">
            <p>
              The handout describes a system of coloured plastic straps for
              controlling access to the ship.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Strap number="1" title="Stevedores / Visitors" />
              <Strap number="2" title="Technicians" />
              <Strap number="3" title="Other" />
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-slate-700">
                Each category uses different colours, and the straps are to be
                used only once. The handout states that this system can be
                effective in controlling access to the ship.
              </p>
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 07 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Different security levels require different protective actions.
              </Revision>

              <Revision>
                SSP contains security instructions to be followed by ship staff.
              </Revision>

              <Revision>
                Access, restricted areas, cargo, stores, baggage and monitoring
                must be addressed.
              </Revision>

              <Revision>
                DOS specifies security measures agreed between the parties.
              </Revision>

              <Revision>
                Security incidents and attempted attacks must be reported.
              </Revision>

              <Revision>
                SSO undertakes regular ship security inspections.
              </Revision>

              <Revision>
                An effective gangway watch helps control access to the ship.
              </Revision>

              <Revision>
                Unauthorized persons must not be allowed to pass without proper
                authority.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-06"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 06
            </Link>

            <Link
              href="/stsdsd/topic-08"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 08: Emergency Preparedness, Drills and Exercises →
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

function Numbered({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-700 font-extrabold text-white">
        {number}
      </div>
      <p className="pt-1 text-slate-700">{children}</p>
    </div>
  );
}

function Level({
  level,
  text,
}: {
  level: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
      <p className="text-xl font-extrabold text-blue-800">
        Security Level {level}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Activity({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

function Strap({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-cyan-700 font-extrabold text-white">
        {number}
      </div>
      <p className="mt-3 font-bold text-slate-800">{title}</p>
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