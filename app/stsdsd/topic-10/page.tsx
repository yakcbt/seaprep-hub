"use client";

import Link from "next/link";

export default function STSDSDTopic10() {
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
            STSDSD • Topic 10
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Introduction to Ship Piracy
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Introduction to piracy, its definition, historical background,
            international legal measures and IMO initiatives.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <Card title="10.1 Introduction to Ship Piracy">
            <p>
              Piracy at sea is a worldwide phenomenon that has affected not
              only the coasts of Africa, but also Indonesia, Malaysia, the
              Philippines, Yemen and Venezuela.
            </p>

            <p>
              American citizens considering travel by sea should exercise
              caution when near and within these coastal areas.
            </p>
          </Card>

          {/* UNCLOS */}
          <Card title="Definition of Piracy">
            <p>
              The handout refers to the 1982 United Nations Convention on the
              Law of the Sea (UNCLOS) for the definition of piracy.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Any illegal acts of violence, detention or depredation
                committed for private ends by the crew or passengers of a
                private ship or private aircraft.
              </Point>

              <Point>
                Such acts may be directed on the high seas against another
                ship or aircraft, or against persons or property on board.
              </Point>

              <Point>
                They may also be directed against a ship, aircraft, persons or
                property in a place outside the jurisdiction of any State.
              </Point>

              <Point>
                Voluntary participation in the operation of a ship or aircraft
                with knowledge of facts making it a pirate ship or aircraft is
                included.
              </Point>

              <Point>
                Inciting or intentionally facilitating an act of piracy is
                also included.
              </Point>
            </div>
          </Card>

          {/* HISTORY */}
          <Card title="Historical Background of Piracy">
            <p>
              The handout explains that piracy has existed for as long as
              oceans have been used for commerce.
            </p>

            <div className="mt-5 space-y-4">
              <History
                title="14th Century BC"
                text="The handout refers to the Sea Peoples who threatened the Aegean and Mediterranean."
              />

              <History
                title="Ancient Greece"
                text="Piracy and kidnapping were known in the ancient Greek world."
              />

              <History
                title="Roman Period"
                text="The handout describes piracy affecting the Adriatic Sea and the western Balkan peninsula."
              />

              <History
                title="1st Century BC"
                text="Pirates operating along the Anatolian coast threatened commerce of the Roman Empire in the eastern Mediterranean."
              />

              <History
                title="Chinese History"
                text="The handout notes that piracy also had roles in Chinese history and refers to activity from the Three Kingdoms period."
              />

              <History
                title="Aegean and Mediterranean"
                text="Piracy affected trade and coastal areas over long periods of maritime history."
              />
            </div>
          </Card>

          {/* HISTORICAL EXAMPLES */}
          <Card title="Historical Examples">
            <div className="space-y-3">
              <Point>
                In 264, the Goths reached Galatia and Cappadocia, and Gothic
                pirates landed on Cyprus and Crete.
              </Point>

              <Point>
                In 286 AD, Carausius, a Roman military commander of Gaulish
                origins, was appointed to command the Classis Britannica and
                given responsibility for eliminating Frankish and Saxon pirates.
              </Point>

              <Point>
                Early Polynesian warriors attacked seaside and riverside
                villages.
              </Point>

              <Point>
                The handout notes the use of the sea for hit-and-run tactics,
                including raids and retreats.
              </Point>
            </div>
          </Card>

          {/* SUA */}
          <Card title="SUA Convention and Unlawful Acts">
            <p>
              The handout discusses unlawful acts covered by the SUA Convention
              in relation to ships and maritime navigation.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Seizure of ships by force.
              </Point>

              <Point>
                Acts of violence against persons on board ships.
              </Point>

              <Point>
                Placing devices on board a ship which are likely to destroy or
                damage it.
              </Point>
            </div>
          </Card>

          {/* TRANSPORT MATERIAL */}
          <Card title="Transport of Nuclear Material">
            <p>
              The handout discusses the transportation of nuclear material in
              connection with the international legal framework.
            </p>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold leading-7 text-slate-700">
                It refers to circumstances involving nuclear material being
                transported to or from the territory of, or under the control
                of, a State Party to the Treaty on the Non-Proliferation of
                Nuclear Weapons.
              </p>
            </div>
          </Card>

          {/* OFFENCES */}
          <Card title="Offences Under the Convention">
            <p>
              The handout also describes offences involving the unlawful and
              intentional transport of certain persons or materials on board a
              ship.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Transporting a person knowing that the person has committed an
                act constituting an offence under the SUA Convention or other
                specified treaties.
              </Point>

              <Point>
                Unlawfully and intentionally injuring or killing a person in
                connection with the commission of an offence under the
                Convention.
              </Point>

              <Point>
                Attempting to commit an offence.
              </Point>

              <Point>
                Participating as an accomplice.
              </Point>

              <Point>
                Organizing or directing others to commit an offence.
              </Point>

              <Point>
                Contributing to the commission of an offence.
              </Point>
            </div>
          </Card>

          {/* IMO */}
          <Card title="IMO Initiative Against Piracy">
            <p>
              IMO has implemented an anti-piracy project as a long-term
              initiative.
            </p>

            <p>
              The handout states that the project began in 1998 and included
              regional seminars and workshops attended by Government
              representatives.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Point>
                Increase awareness of the piracy problem.
              </Point>

              <Point>
                Examine regional anti-piracy measures.
              </Point>

              <Point>
                Assess whether measures already in place are adequate.
              </Point>

              <Point>
                Promote implementation of measures to counter piracy.
              </Point>
            </div>
          </Card>

          {/* REGIONAL COOPERATION */}
          <Card title="Regional Cooperation">
            <p>
              The handout emphasizes regional cooperation as an important part
              of solving piracy and armed robbery against ships.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Regional cooperation allows States to coordinate anti-piracy
                action.
              </Point>

              <Point>
                The handout refers to the Regional Cooperation Agreement on
                Combating Piracy and Armed Robbery against Ships in Asia
                (ReCAAP).
              </Point>

              <Point>
                The agreement provides a framework for cooperation and
                information sharing.
              </Point>
            </div>
          </Card>

          {/* GULF OF ADEN */}
          <Card title="Security Situation in the Gulf of Aden">
            <p>
              The handout describes the security situation in the seas off
              war-torn Somalia and the Gulf of Aden as an area of increasing
              concern.
            </p>

            <p>
              It notes that the International Maritime Organization supported
              regional agreements and cooperation intended to repress piracy
              and armed robbery against ships.
            </p>
          </Card>

          {/* DJIBOUTI CODE */}
          <Card title="Djibouti Code of Conduct">
            <p>
              The handout refers to the Djibouti Code of Conduct concerning the
              repression of piracy and armed robbery against ships in the
              western Indian Ocean and Gulf of Aden.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Investigation and prosecution of persons reasonably suspected
                of committing piracy and armed robbery.
              </Point>

              <Point>
                Interdiction of suspect ships and seizure of suspect property.
              </Point>

              <Point>
                Rescue of ships, persons and property subject to piracy and
                armed robbery.
              </Point>

              <Point>
                Proper care and treatment of persons involved.
              </Point>
            </div>
          </Card>

          {/* INFORMATION SHARING */}
          <Card title="Information Sharing">
            <p>
              Signatories undertake to share and report relevant information
              through systems of national focal points and information centres.
            </p>

            <p>
              The purpose is to improve coordination and response to piracy and
              armed robbery against ships.
            </p>
          </Card>

          {/* IMO REPORTS */}
          <Card title="IMO Reports on Piracy and Armed Robbery">
            <p>
              IMO issues reports on piracy and armed robbery against ships
              submitted by Member Governments and international organizations.
            </p>

            <p>
              According to the handout, these reports include information such
              as the name and description of the vessel, ship or cargo,
              position, time of event, type of attack, consequences to the crew
              and coastal authorities.
            </p>

            <div className="mt-5 rounded-xl border border-cyan-200 bg-cyan-50 p-5">
              <p className="font-bold text-cyan-900">Reporting Frequency</p>
              <p className="mt-2 text-slate-700">
                The handout states that reports are circulated monthly, with
                quarterly and annual summaries.
              </p>
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 10 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Piracy is a worldwide maritime security problem.
              </Revision>

              <Revision>
                The handout uses UNCLOS to explain the definition of piracy.
              </Revision>

              <Revision>
                Piracy has existed throughout maritime history.
              </Revision>

              <Revision>
                The SUA Convention addresses unlawful acts against maritime
                navigation.
              </Revision>

              <Revision>
                IMO&apos;s anti-piracy project began in 1998 according to the
                handout.
              </Revision>

              <Revision>
                Regional cooperation is important in combating piracy.
              </Revision>

              <Revision>
                ReCAAP supports cooperation against piracy and armed robbery in
                Asia.
              </Revision>

              <Revision>
                IMO receives and circulates reports of piracy and armed robbery.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-09"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 09
            </Link>

            <Link
              href="/stsdsd/topic-11"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 11: Piracy off the Coast of Somalia →
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

function History({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{title}</h3>
      <p className="mt-2 leading-6 text-slate-700">{text}</p>
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