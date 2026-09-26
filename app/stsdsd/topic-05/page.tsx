"use client";

import Link from "next/link";

export default function STSDSDTopic05() {
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
            STSDSD • Topic 05
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Security Equipment
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Security equipment and systems, operational limitations, testing,
            calibration and maintenance.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* 5.1 */}
          <Card title="5.1 Security Equipment and Systems">
            <p>
              Course participants should be familiar with the types of
              security equipment and systems useful in enhancing maritime
              security, both ashore and afloat.
            </p>

            <p>
              The handout gives the following examples of security equipment:
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Equipment number="1" name="AIS" />
              <Equipment number="2" name="Ship Security Alert System" />
              <Equipment number="3" name="Locks" />
              <Equipment number="4" name="Lighting" />
              <Equipment number="5" name="Handheld Radios" />
              <Equipment number="6" name="GMDSS Equipment" />
              <Equipment number="7" name="Closed Circuit Television (CCTV)" />
              <Equipment
                number="8"
                name="Automatic Intrusion Detection Device (Burglar Alarm)"
              />
              <Equipment number="9" name="Metal Detectors" />
              <Equipment number="10" name="Explosive Detectors" />
              <Equipment number="11" name="Baggage Screening Equipment" />
              <Equipment number="12" name="Container X-Ray Devices" />
              <Equipment number="13" name="General Alarm" />
              <Equipment number="14" name="Night Vision Binocular" />
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-extrabold text-amber-900">
                Important
              </h3>
              <p className="mt-2">
                Candidates should know the working of equipment and not the
                construction and various scientific details involved.
              </p>
            </div>
          </Card>

          {/* 5.2 */}
          <Card title="5.2 Operational Limitations of Security Equipment and Systems">
            <p>
              The limitations of individual items of security equipment and
              security systems must be known.
            </p>

            <div className="mt-4 space-y-3">
              <Point>
                The risks and benefits of security equipment and systems that
                may be used to prevent and suppress attacks by pirates and
                armed robbers must be known.
              </Point>

              <Point>
                Before using or installing any security equipment, personnel
                must know its limitations and how it can be circumvented.
              </Point>
            </div>
          </Card>

          {/* SSAS */}
          <Card title="Ship Security Alert System">
            <div className="space-y-3">
              <Limitation>
                May cause false alerts.
              </Limitation>

              <Limitation>
                Master may not be able to activate the alarm.
              </Limitation>
            </div>
          </Card>

          {/* LIGHTING */}
          <Card title="Lighting">
            <div className="space-y-3">
              <Limitation>Needs to be switched on.</Limitation>
              <Limitation>
                Has limited coverage and creates blind spots.
              </Limitation>
              <Limitation>Bulbs can be broken.</Limitation>
              <Limitation>Wires can be cut or shortened.</Limitation>
            </div>
          </Card>

          {/* RADIO */}
          <Card title="Handheld Radios">
            <div className="space-y-3">
              <Limitation>Sufficient radios are required.</Limitation>
              <Limitation>Common security frequency is required.</Limitation>
              <Limitation>
                May not receive signals in certain areas such as the Engine
                Room.
              </Limitation>
              <Limitation>Hijackers may smash radios.</Limitation>
              <Limitation>Signals can be jammed.</Limitation>
              <Limitation>
                Batteries must be maintained, including battery life and
                charging.
              </Limitation>
            </div>
          </Card>

          {/* CCTV */}
          <Card title="CCTV">
            <div className="space-y-3">
              <Limitation>Has limited area of coverage.</Limitation>
              <Limitation>
                Professionals may circumvent the equipment.
              </Limitation>
              <Limitation>The camera may be broken.</Limitation>
              <Limitation>
                Policy on recording and storage of tapes is required.
              </Limitation>
              <Limitation>Automatic Intrusion Detection.</Limitation>
            </div>
          </Card>

          {/* BURGLAR ALARM */}
          <Card title="Device (Burglar Alarm)">
            <div className="space-y-3">
              <Limitation>May cause false alarms.</Limitation>
              <Limitation>
                Professionals may bypass or circumvent the system.
              </Limitation>
            </div>
          </Card>

          {/* METAL DETECTOR */}
          <Card title="Metal Detector">
            <div className="space-y-3">
              <Limitation>Has limited sensitivity.</Limitation>
              <Limitation>
                May not be able to detect metallic objects inside the body.
              </Limitation>
              <Limitation>
                Only detects the presence of metal but does not identify it.
              </Limitation>
            </div>
          </Card>

          {/* GENERAL ALARM */}
          <Card title="General Alarm">
            <div className="space-y-3">
              <Limitation>May cause false alarms.</Limitation>
              <Limitation>
                Personnel will not know why the alarm was sounded and will
                muster at their regular muster points.
              </Limitation>
            </div>
          </Card>

          {/* NIGHT VISION */}
          <Card title="Night Vision Binocular">
            <p>
              The handout notes that night vision binoculars can be used to
              view the presence and approach of other vessels, including pirate
              vessels, in the hours of darkness.
            </p>
          </Card>

          {/* 5.3 */}
          <Card title="5.3 Testing, Calibration and Maintenance of Security Equipment and Systems">
            <p>
              Testing, calibration and maintenance requirements for security
              equipment and systems must be properly followed.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <InfoBox
                title="Testing"
                text="Regular testing should be carried out at set intervals and in line with the manufacturer's instructions."
              />

              <InfoBox
                title="Calibration"
                text="Calibration should be carried out at set intervals and in line with the manufacturer's instructions."
              />

              <InfoBox
                title="Maintenance"
                text="Maintenance logs must be maintained and the person in charge must be appointed."
              />
            </div>
          </Card>

          {/* TESTING AND CALIBRATION */}
          <Card title="Testing and Calibration">
            <div className="space-y-3">
              <Point>
                Regular testing to be carried out at set intervals and in line
                with manufacturer&apos;s instructions.
              </Point>

              <Point>
                Calibration to be carried out at set intervals and in line
                with manufacturer&apos;s instructions.
              </Point>

              <Point>
                Always follow the user&apos;s handbook and consult the
                manufacturer or vendor if in doubt.
              </Point>
            </div>
          </Card>

          {/* MAINTENANCE */}
          <Card title="Maintenance">
            <div className="space-y-3">
              <Point>
                All equipment should be maintained as part of the general
                Planned Maintenance System (PMS).
              </Point>

              <Point>
                If equipment currently available may not be designed for
                marine use, it may suffer from a hostile marine environmental
                condition and require extra maintenance.
              </Point>

              <Point>
                Follow the manufacturer&apos;s instructions for any particular
                attention to protection of moving parts, hinges, brackets,
                nuts, bolts, screws and lenses.
              </Point>

              <Point>
                Always use cleaning material as recommended by the
                manufacturer.
              </Point>
            </div>
          </Card>

          {/* SPARE PARTS */}
          <Card title="Spare Parts">
            <div className="space-y-3">
              <Point>
                Shipping companies may consider testing and calibrating spare
                parts.
              </Point>

              <Point>
                As soon as a spare part is utilized, a request for replacement
                should be made.
              </Point>
            </div>
          </Card>

          {/* SUMMARY */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Chapter 5 Summary
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Equipment that assists detection is only effective if
                monitored.
              </Revision>

              <Revision>
                Equipment purchased or installed must be suitable for the role
                required.
              </Revision>

              <Revision>
                Detections must be reacted to immediately.
              </Revision>

              <Revision>
                The user must be trained.
              </Revision>

              <Revision>
                Equipment must be maintained.
              </Revision>

              <Revision>
                Gaps must be covered by other means, such as patrols.
              </Revision>

              <Revision>
                All electronic equipment must be backed up by random security
                patrols.
              </Revision>

              <Revision>
                Equipment must be robust.
              </Revision>

              <Revision>
                Limitations including coverage must be understood.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-04"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 04
            </Link>

            <Link
              href="/stsdsd/topic-06"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 06: Threat Identification, Recognition and Response →
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

function Equipment({
  number,
  name,
}: {
  number: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-700 font-extrabold text-white">
        {number}
      </div>
      <p className="font-semibold text-slate-800">{name}</p>
    </div>
  );
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="font-extrabold text-cyan-700">✓</span>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function Limitation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
      <span className="font-extrabold text-amber-700">•</span>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{title}</h3>
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