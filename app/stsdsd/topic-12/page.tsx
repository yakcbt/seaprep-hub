"use client";

import Link from "next/link";

export default function STSDSDTopic12() {
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
            STSDSD • Topic 12
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Anti-Piracy Measures
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Best management practices, voyage planning, defensive measures,
            transit operations and response to pirate attacks.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <Card title="12.1 Anti-Piracy Measures">
            <p>
              The handout refers to Best Management Practices (BMP) developed
              for ships operating in piracy-risk areas.
            </p>

            <p>
              These practices are intended to assist ships in avoiding,
              deterring or delaying piracy attacks and improving the protection
              of the vessel and crew.
            </p>
          </Card>

          {/* PURPOSE */}
          <Card title="Purpose of Best Management Practices">
            <div className="space-y-3">
              <Point>
                Provide best-management-practice guidance to companies and
                ships in avoiding piracy attacks.
              </Point>

              <Point>
                Deter attacks and delay successful attacks.
              </Point>

              <Point>
                Support ships operating in piracy-risk areas.
              </Point>

              <Point>
                Encourage organizations and members to promote the guidance
                throughout the shipping industry.
              </Point>
            </div>
          </Card>

          {/* ATTACK PROFILE */}
          <Card title="Typical Attack Profiles and Lessons Learnt">
            <p>
              The handout identifies several characteristics associated with
              pirate attacks during the period covered by the course material.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Attacks were concentrated in particular areas of the Gulf of
                Aden and wider region.
              </Point>

              <Point>
                Certain vessel characteristics may make a ship more vulnerable.
              </Point>

              <Point>Low speed can increase vulnerability.</Point>

              <Point>Low freeboard can increase vulnerability.</Point>

              <Point>
                Inadequate planning and procedures can increase vulnerability.
              </Point>

              <Point>
                Visibly low alertness or lack of evident self-protective
                measures may increase vulnerability.
              </Point>

              <Point>
                A slow response by the ship may increase vulnerability.
              </Point>
            </div>
          </Card>

          {/* SMALL CRAFT */}
          <Card title="Pirate Craft and Attack Characteristics">
            <div className="space-y-3">
              <Point>
                The handout refers to small high-speed craft or “skiffs” being
                used in attacks.
              </Point>

              <Point>
                A larger “mother ship” may carry personnel, equipment,
                supplies and smaller attack craft.
              </Point>

              <Point>
                The use of a mother ship can allow pirates to operate at a
                greater range from shore.
              </Point>

              <Point>
                Higher vessel speeds can make successful pirate boarding more
                difficult.
              </Point>

              <Point>
                RPGs are mentioned in the handout as a means used to intimidate
                Masters and obtain compliance.
              </Point>
            </div>
          </Card>

          {/* BMP */}
          <Card title="Recommended Best Management Practices">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">Important Principle</p>

              <p className="mt-2 leading-7 text-slate-700">
                The Master retains discretion to adopt appropriate measures to
                avoid, deter or delay piracy attacks based on the circumstances
                of the vessel.
              </p>
            </div>

            <p className="mt-5">
              The handout also notes that not every measure will be applicable
              to every ship. Companies and Masters should determine which
              measures are appropriate for their particular vessel.
            </p>
          </Card>

          {/* PRIOR TO TRANSIT */}
          <Card title="12.2 Prior to Transit – General Planning">
            <p>
              Planning before entering a piracy-risk area is an important part
              of the anti-piracy measures described in the handout.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Obtain current information and guidance relevant to the voyage.
              </Point>

              <Point>
                The handout refers to UKMTO Dubai as an important point of
                contact for ships in the region.
              </Point>

              <Point>
                The Maritime Security Centre – Horn of Africa (MSCHOA) is
                identified as a planning and coordination authority.
              </Point>

              <Point>
                The Maritime Liaison Office (MARLO) is identified as a conduit
                for information exchange.
              </Point>

              <Point>
                Before transiting a high-risk area, the owner and Master should
                carry out their own risk assessment.
              </Point>
            </div>
          </Card>

          {/* RISK ASSESSMENT */}
          <Card title="Ship-Specific Risk Assessment">
            <p>
              The risk assessment should identify measures for prevention,
              mitigation and recovery.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Feature title="Prevention">
                Measures intended to reduce the likelihood of a successful
                attack.
              </Feature>

              <Feature title="Mitigation">
                Measures intended to reduce the consequences of an attack.
              </Feature>

              <Feature title="Recovery">
                Measures relating to actions following a security incident.
              </Feature>

              <Feature title="Ship Type">
                Measures should take account of the particular circumstances
                and type of ship.
              </Feature>
            </div>
          </Card>

          {/* COMPANY PLANNING */}
          <Card title="Company Planning">
            <div className="space-y-3">
              <Point>
                Review the Ship Security Assessment (SSA).
              </Point>

              <Point>
                Review implementation of the Ship Security Plan (SSP) as
                required by the ISPS Code.
              </Point>

              <Point>
                The Company Security Officer should have a contingency plan for
                high-risk passages.
              </Point>

              <Point>
                The contingency plan should be exercised, briefed and discussed
                with the Master and SSO.
              </Point>

              <Point>
                Be aware of the particular high-risk sea areas.
              </Point>

              <Point>
                Offer ship&apos;s Master guidance regarding available methods
                of transiting the region.
              </Point>

              <Point>
                Conduct periodic crew training sessions.
              </Point>

              <Point>
                Consider additional resources to enhance watchkeeping numbers.
              </Point>

              <Point>
                Consider fitting the ship with Self Protection Measures (SPM)
                before entering high-risk areas.
              </Point>
            </div>
          </Card>

          {/* MASTER PLANNING */}
          <Card title="Ship's Master Planning">
            <div className="space-y-3">
              <Point>
                Make required initial reports and vessel movement
                registrations described in the handout.
              </Point>

              <Point>
                Before entering the region, thoroughly brief the crew.
              </Point>

              <Point>
                Implement and advance the anti-piracy contingency plan before
                arrival in the area.
              </Point>

              <Point>
                Masters should prepare an emergency communication plan.
              </Point>

              <Point>
                Emergency contact information and pre-prepared messages should
                be readily available.
              </Point>

              <Point>
                Define the ship&apos;s AIS policy taking account of security
                considerations and applicable requirements.
              </Point>
            </div>
          </Card>

          {/* VOYAGE PLANNING */}
          <Card title="12.3 Prior to Transit – Voyage Planning">
            <div className="space-y-3">
              <Point>
                Ships are encouraged to report relevant voyage information to
                the organizations identified in the handout.
              </Point>

              <Point>
                Vessels should follow applicable routing and transit guidance.
              </Point>

              <Point>
                Ships should avoid entering Yemen Territorial Waters (YTW)
                while on transit, as stated in the handout.
              </Point>

              <Point>
                Ships may be asked to make adjustments to passage plans to
                conform to MSCHOA routing advice.
              </Point>

              <Point>
                Masters should plan transit periods carefully and take account
                of areas of highest risk.
              </Point>
            </div>
          </Card>

          {/* DEFENSIVE MEASURES */}
          <Card title="12.4 Prior to Transit – Defensive Measures">
            <p>
              The handout lists a number of defensive preparations before
              entering a piracy-risk area.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Measure>Review ship routing.</Measure>
              <Measure>Review weather and sea conditions.</Measure>
              <Measure>Minimize unnecessary external communications.</Measure>
              <Measure>Increase readiness of auxiliary machinery.</Measure>
              <Measure>Increase lookout and bridge manning.</Measure>
              <Measure>Man the engine room.</Measure>
              <Measure>Secure access to the bridge.</Measure>
              <Measure>Secure access to the engine room.</Measure>
              <Measure>Secure steering gear room access.</Measure>
              <Measure>Secure accommodation access points.</Measure>
            </div>
          </Card>

          {/* ACCESS CONTROL */}
          <Card title="Access Control and Physical Protection">
            <div className="space-y-3">
              <Point>
                Potential access points should be risk-assessed and adequately
                secured.
              </Point>

              <Point>
                Emergency exits must remain usable from within the internal
                space.
              </Point>

              <Point>
                Check ladders and outboard equipment are stowed or secured.
              </Point>

              <Point>
                Self-protection measures should be securely fitted and should
                function as intended.
              </Point>

              <Point>
                Physical barriers may be considered around vulnerable access
                points.
              </Point>
            </div>
          </Card>

          {/* SELF PROTECTION */}
          <Card title="Self-Protection Measures">
            <div className="space-y-3">
              <Point>
                Consider physical barriers around vulnerable points of access.
              </Point>

              <Point>
                Consider using water spray or water around the vessel to deter
                boarding.
              </Point>

              <Point>
                Consider providing night-vision optics for use during darkness.
              </Point>

              <Point>
                Ship&apos;s crew should not be exposed to undue risk when
                employing Self-Protective Measures.
              </Point>
            </div>
          </Card>

          {/* TRANSIT */}
          <Card title="12.5 In Transit – Operations">
            <div className="space-y-3">
              <Point>
                Follow the applicable transit guidance and timings described in
                the handout.
              </Point>

              <Point>
                Masters should remain aware of relevant routing and reporting
                arrangements.
              </Point>

              <Point>
                Ships should maintain safe speed and avoid unnecessary
                reduction in speed in high-risk areas.
              </Point>

              <Point>
                Maintain a full visual lookout.
              </Point>

              <Point>
                Maintain effective radar watch.
              </Point>

              <Point>
                Maintain communication and reporting as required.
              </Point>

              <Point>
                Keep accommodation and working spaces secured where
                appropriate.
              </Point>

              <Point>
                Crew exposure on deck should be minimized when a threat is
                suspected.
              </Point>
            </div>
          </Card>

          {/* LOOKOUT */}
          <Card title="Lookout and Early Detection">
            <p>
              The handout emphasizes the importance of maintaining an effective
              lookout so that a possible threat can be detected as early as
              possible.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Maintain an all-round visual lookout.
              </Point>

              <Point>
                Maintain careful radar watch.
              </Point>

              <Point>
                Monitor approaching small craft.
              </Point>

              <Point>
                Report suspicious craft according to the procedures described
                in the handout.
              </Point>

              <Point>
                Make an early assessment of a possible threat.
              </Point>
            </div>
          </Card>

          {/* ATTACK */}
          <Card title="12.6 If Attacked by Pirates">
            <div className="space-y-3">
              <Action number="1">
                Follow the ship&apos;s pre-prepared contingency plan.
              </Action>

              <Action number="2">
                Activate the Emergency Communication Plan and report the attack
                immediately through the contact arrangements described in the
                handout.
              </Action>

              <Action number="3">
                Activate the Ship Security Alert System (SSAS), where
                appropriate.
              </Action>

              <Action number="4">
                If the Master considers it appropriate, AIS may be switched on
                during an attack.
              </Action>

              <Action number="5">
                Sound the emergency alarm and make a pirate-attack announcement
                in accordance with the ship&apos;s emergency plan.
              </Action>

              <Action number="6">
                Make a “Mayday” call on VHF Channel 16, as stated in the
                handout.
              </Action>

              <Action number="7">
                Prevent skiffs from closing on the ship by altering course and
                increasing speed where possible.
              </Action>
            </div>
          </Card>

          {/* SPEED */}
          <Card title="Speed and Manoeuvring">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-900">
                Handout Guidance
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                The handout emphasizes maintaining speed and, where possible,
                using manoeuvring to make boarding more difficult during a
                pirate attack.
              </p>
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 12 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                BMP is intended to help avoid, deter or delay piracy attacks.
              </Revision>

              <Revision>
                Ship-specific risk assessment should be completed before
                transit.
              </Revision>

              <Revision>
                SSA and SSP should be reviewed before high-risk passages.
              </Revision>

              <Revision>
                Crew should be briefed and trained before entering risk areas.
              </Revision>

              <Revision>
                Access points and vulnerable areas should be secured.
              </Revision>

              <Revision>
                Effective lookout and early detection are important.
              </Revision>

              <Revision>
                A pre-prepared contingency and emergency communication plan
                should be available.
              </Revision>

              <Revision>
                In an attack, follow the ship&apos;s contingency plan and
                reporting procedures.
              </Revision>
            </div>
          </section>

          {/* COURSE COMPLETE */}
          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              STSDSD Course Notes
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              All 12 Topics Completed ✓
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
              You have reached the final topic of the STSDSD course notes.
            </p>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-11"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 11
            </Link>

            <Link
              href="/stsdsd"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Back to STSDSD Course →
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

function Feature({
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

function Measure({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-semibold text-slate-700">
      ✓ {children}
    </div>
  );
}

function Action({
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

function Revision({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/10 p-4 leading-6 text-slate-100">
      ✓ {children}
    </div>
  );
}