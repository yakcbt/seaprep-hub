"use client";

import Link from "next/link";

export default function STSDSDTopic06() {
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
            STSDSD • Topic 06
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Threat Identification, Recognition, and Response
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Recognition of security threats, search procedures, suspicious
            behaviour, circumvention techniques and crowd management.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* 6.1 */}
          <Card title="6.1 Recognition and Detection of Weapons, Dangerous Substances and Devices">
            <p>
              Personnel with designated security duties should be able to
              recognize weapons, dangerous substances and devices that may
              present a threat to ship security.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Threat title="Hand Held Weapons" />
              <Threat title="Narcotics" />
              <Threat title="Mines" />
              <Threat title="Plastic Explosives" />
            </div>
          </Card>

          {/* 6.2 */}
          <Card title="6.2 Methods of Physical Searches and Non-Intrusive Inspections">
            <p>
              Personnel should know how to carry out physical searches and
              non-intrusive inspections.
            </p>

            <div className="mt-4 space-y-3">
              <Point>
                Unless there are clear security grounds, members of the
                ship&apos;s crew should not normally be required to search
                colleagues or their personal effects.
              </Point>

              <Point>
                Such searches should be undertaken in a manner that fully takes
                into account human rights and preserves the basic human dignity
                of the individual.
              </Point>

              <Point>
                A hand-held metal detector is a non-intrusive device for
                personal body searches.
              </Point>
            </div>
          </Card>

          {/* 6.3 */}
          <Card title="6.3 Execution and Coordination of Searches">
            <div className="space-y-3">
              <Point>
                It is important to plan a search and practice carrying out
                searches as a drill.
              </Point>

              <Point>
                Know how to plan a search using a system of check cards.
              </Point>

              <Point>
                Know the equipment that should be carried when conducting a
                search.
              </Point>

              <Point>
                Know the procedures to be followed for an efficient search.
              </Point>

              <Point>
                Know the various places of concealment on board a vessel.
              </Point>
            </div>
          </Card>

          {/* SEARCH PLAN */}
          <Card title="Search Plan">
            <div className="space-y-3">
              <Point>
                A search should be conducted to a specific plan and be
                carefully controlled.
              </Point>

              <Point>
                Searchers should maintain contact with search controllers by
                walkie-talkies.
              </Point>
            </div>
          </Card>

          {/* SECURITY TRAINING */}
          <Card title="Security Training – Check Card System">
            <p>
              The handout describes the use of a check-card system for
              organizing searches.
            </p>

            <div className="mt-4 space-y-3">
              <Point>
                A check card can be issued to each searcher, specifying the
                route to follow and the area to be searched.
              </Point>

              <Point>
                Cards can be colour coded for different areas of
                responsibility.
              </Point>

              <Point>
                On completion of individual searches, cards are returned to a
                central control point.
              </Point>

              <Point>
                When all cards are returned, the search is known to be
                complete.
              </Point>
            </div>
          </Card>

          {/* SEARCH EQUIPMENT */}
          <Card title="Equipment Used in a Search">
            <div className="grid gap-3 md:grid-cols-2">
              <Equipment>Torch lights and batteries</Equipment>
              <Equipment>Screwdrivers, wrenches and crowbars</Equipment>
              <Equipment>Mirrors and probes</Equipment>
              <Equipment>Personal protective equipment</Equipment>
              <Equipment>Gloves and hard hat</Equipment>
              <Equipment>Overalls and non-slip footwear</Equipment>
              <Equipment>Plastic bags and envelopes</Equipment>
              <Equipment>Means of recording activities and discoveries</Equipment>
            </div>
          </Card>

          {/* SEARCH PROCEDURE */}
          <Card title="Procedures Used in a Search">
            <div className="space-y-3">
              <Point>
                Crew members should not normally search their own areas because
                they may have concealed packages or devices in their own work
                or personal areas.
              </Point>

              <Point>
                The search should be conducted according to a specific plan or
                schedule and must be carefully controlled.
              </Point>

              <Point>
                Special consideration should be given to search parties working
                in pairs.
              </Point>

              <Point>
                If a suspicious object is found, one of the pair can remain on
                guard while the other reports the find.
              </Point>

              <Point>
                Searchers should be able to recognize suspicious items.
              </Point>

              <Point>
                Searchers should maintain contact with search controllers by
                UHF/VHF radio.
              </Point>

              <Point>
                Searchers should have clear guidance on what to do if a suspect
                package, device or situation is found.
              </Point>
            </div>
          </Card>

          {/* CONCEALMENT */}
          <Card title="Places of Concealment">
            <p>
              The handout notes that many places on board may be used for
              concealing weapons, dangerous substances or even human beings.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Area
                title="Cabins"
                items={[
                  "Bunk sides and underneath drawers",
                  "Between bottom drawer and deck",
                  "Beneath bunks",
                  "Under wash basin",
                  "Behind removable medicine chest",
                  "Inside radios and recorders",
                  "Ventilator ducts",
                ]}
              />

              <Area
                title="Companionways"
                items={[
                  "Ducts",
                  "Wire harnesses",
                  "Railings",
                  "Fire extinguishers",
                  "Fire hoses and compartments",
                  "Access panels in floors, walls and ceilings",
                  "Behind or inside water coolers",
                ]}
              />

              <Area
                title="Toilet and Showers"
                items={[
                  "Behind and under sinks",
                  "Behind toilets",
                  "Ventilation ducts and heaters",
                  "Toilet tissue rollers",
                  "Towel dispensers and supply lockers",
                  "Taped to shower curtains",
                  "Exposed piping and light fixtures",
                  "Access panels in floors, walls and ceiling",
                ]}
              />

              <Area
                title="Galleys and Stewards' Stores"
                items={[
                  "Flour bins and dry stores",
                  "Vegetable sacks",
                  "Canned foods",
                  "Under or behind standard refrigerators",
                  "Inside fish",
                  "Inside sides of beef in freezers",
                  "Bonded store lockers",
                  "Shop chest and storage rooms",
                ]}
              />

              <Area
                title="On Deck"
                items={[
                  "Ledges on deck housing",
                  "Electrical switch rooms",
                  "Winch control panels",
                  "Lifeboat storage compartments",
                  "Under coiled lines",
                  "In deck storage rooms",
                  "Paint cans and cargo holds",
                  "Battery rooms and chain lockers",
                ]}
              />

              <Area
                title="Engine Room"
                items={[
                  "Under deck plates",
                  "Cofferdams, machinery pedestals and bilges",
                  "Journal-bearing shrouds",
                  "Sumps on propeller shaft",
                  "Under catwalks, in bilges and shaft alley",
                  "Escape ladders and ascending areas",
                  "Ventilation ducts",
                  "Attached to piping",
                  "In tanks with false gauges",
                  "Equipment boxes",
                  "Emergency steering rooms",
                  "Storage spaces",
                ]}
              />
            </div>
          </Card>

          {/* 6.4 */}
          <Card title="6.4 Recognition, on a Non-Discriminatory Basis, of Persons Posing Potential Security Risks">
            <p>
              Security personnel should be capable of reading suspicious
              patterns of behaviour.
            </p>

            <div className="mt-4 space-y-3">
              <Suspicious>
                Unknown persons photographing vessels or facilities.
              </Suspicious>

              <Suspicious>
                Unknown persons attempting to gain access to vessels or
                facilities.
              </Suspicious>

              <Suspicious>
                Individuals establishing business or roadside food stands near
                or close to facilities.
              </Suspicious>

              <Suspicious>
                Unknown persons loitering near vessels or facilities for an
                extended period.
              </Suspicious>

              <Suspicious>
                Vehicles with personnel loitering, taking photographs or
                creating diagrams of vessels or facilities.
              </Suspicious>

              <Suspicious>
                Small boats with personnel loitering or taking photographs
                around vessels or facilities.
              </Suspicious>

              <Suspicious>
                General aviation aircraft operating near vessels or facilities.
              </Suspicious>

              <Suspicious>
                Persons who may be carrying bombs or participating in suicide
                attack activities.
              </Suspicious>

              <Suspicious>
                Unknown persons attempting to obtain information about vessels
                or facilities.
              </Suspicious>

              <Suspicious>
                Vendors attempting to sell merchandise.
              </Suspicious>

              <Suspicious>
                Workers trying to gain access to vessels to repair, replace,
                service or install equipment.
              </Suspicious>

              <Suspicious>
                E-mails attempting to obtain information regarding vessels,
                personnel or standard operating procedures.
              </Suspicious>

              <Suspicious>
                Package drop-off or attempted drop-offs.
              </Suspicious>

              <Suspicious>
                Anti-national sentiments expressed by employees or vendors.
              </Suspicious>

              <Suspicious>
                Anti-national pamphlets or flyers distributed to employees or
                placed on windshields in parking lots.
              </Suspicious>

              <Suspicious>
                Out-of-the-ordinary phone calls.
              </Suspicious>

              <Suspicious>
                Recreational boaters or persons aboard refugee craft posing as
                mariners in distress to attract assistance from other vessels.
              </Suspicious>
            </div>
          </Card>

          {/* 6.5 */}
          <Card title="6.5 Techniques Used to Circumvent Security Measures">
            <p>
              The handout states that no safety measure is infallible.
            </p>

            <p>
              Security arrangements such as flood-light systems, CCTV systems,
              cutting of electricity wires to disable the full system, alarm
              systems, picking of locks and jamming of radio signals may be
              circumvented.
            </p>
          </Card>

          {/* 6.6 */}
          <Card title="6.6 Crowd Management and Control Techniques">
            <h3 className="text-lg font-extrabold text-cyan-800">
              Crowd Management
            </h3>

            <div className="mt-4 space-y-3">
              <Point>
                Know the basic psychology of a crowd in a crisis situation.
              </Point>

              <Point>
                Know the importance of clear communication with crew and
                passengers during an emergency.
              </Point>

              <Point>
                Control the crowd to prevent disorder and possible riot.
              </Point>

              <Point>
                Use public address facilities for riot control.
              </Point>

              <Point>
                Direct the flow of movement using items such as stanchions,
                crowd-control barriers, fences and signs.
              </Point>

              <Point>
                Keep the crowd comfortable and relaxed.
              </Point>

              <Point>
                Use linguistic services, cooling fans in hot weather and
                entertainment where appropriate.
              </Point>

              <Point>
                Use crowd-management ability to assist passengers in an
                emergency situation.
              </Point>
            </div>

            <h3 className="mt-7 text-lg font-extrabold text-cyan-800">
              Control Techniques
            </h3>

            <div className="mt-4 space-y-3">
              <Point>
                Control passengers in staircases, corridors and passages.
              </Point>

              <Point>
                Use procedures for preventing panic and other irrational
                behaviour.
              </Point>

              <Point>
                Communicate with, instruct and inform passengers.
              </Point>

              <Point>
                Crew members should be capable of mobilizing passengers to
                assist and also organizing evacuation when required.
              </Point>

              <Point>
                Crew should know crisis-management and human-behaviour
                principles appropriate to their duties.
              </Point>
            </div>
          </Card>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 06 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Recognize weapons, dangerous substances and devices.
              </Revision>

              <Revision>
                Physical searches must respect human rights and dignity.
              </Revision>

              <Revision>
                Searches should follow a specific plan and be carefully
                controlled.
              </Revision>

              <Revision>
                Search teams should know common places of concealment.
              </Revision>

              <Revision>
                Suspicious behaviour should be recognized on a
                non-discriminatory basis.
              </Revision>

              <Revision>
                Security measures can sometimes be circumvented.
              </Revision>

              <Revision>
                Clear communication is important during crowd management.
              </Revision>

              <Revision>
                Crew should know procedures for preventing panic and irrational
                behaviour.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-05"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 05
            </Link>

            <Link
              href="/stsdsd/topic-07"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 07: Ship Security Actions →
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

function Threat({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50 p-4">
      <p className="font-bold text-red-800">{title}</p>
    </div>
  );
}

function Equipment({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 font-semibold text-slate-700">
      • {children}
    </div>
  );
}

function Suspicious({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
      <span className="font-bold text-amber-700">⚠</span>
      <p>{children}</p>
    </div>
  );
}

function Area({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{title}</h3>

      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
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