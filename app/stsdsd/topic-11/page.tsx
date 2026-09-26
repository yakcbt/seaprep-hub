"use client";

import Link from "next/link";

export default function STSDSDTopic11() {
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
            STSDSD • Topic 11
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Piracy off the Coast of Somalia
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Background of Somali piracy, international and Indian efforts,
            historical incidents and typical methods of pirate attack.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <Card title="11.1 Piracy off the Coast of Somalia">
            <p>
              The handout describes piracy off the coast of Somalia as a major
              threat to international shipping and trade.
            </p>

            <p>
              It links the growth of piracy to the period following the second
              phase of the Somali Civil War in the early 21st century.
            </p>

            <p>
              The absence of an effective national coast guard following the
              collapse of the civil war and the subsequent disintegration of
              the Armed Forces contributed to conditions in which piracy
              developed.
            </p>
          </Card>

          {/* BACKGROUND */}
          <Card title="Background">
            <div className="space-y-3">
              <Point>
                Local fishermen initially organized groups to deter foreign
                vessels.
              </Point>

              <Point>
                The handout states that piracy became substantially more
                lucrative in later years.
              </Point>

              <Point>
                International concern increased because of the effect on
                shipping and trade.
              </Point>
            </div>
          </Card>

          {/* INTERNATIONAL RESPONSE */}
          <Card title="International Response">
            <p>
              Since 2005, many international organizations have expressed
              concern about piracy off Somalia and in the Gulf of Aden.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Organisation
                short="IMO"
                full="International Maritime Organization"
              />

              <Organisation
                short="WFP"
                full="World Food Programme"
              />

              <Organisation
                short="UN"
                full="United Nations"
              />

              <Organisation
                short="MSPA"
                full="Maritime Security Patrol Area"
              />
            </div>

            <p className="mt-5">
              The handout notes that the international community took measures
              to protect shipping and humanitarian assistance in the region.
            </p>
          </Card>

          {/* INDIAN EFFORTS */}
          <Card title="The Indian & International Efforts">
            <p>
              The increasing threat posed by piracy was a cause of concern in
              India because much of its shipping trade routes passed through
              the Gulf of Aden.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                The Indian Navy responded to piracy concerns by deploying a
                warship in the region.
              </Point>

              <Point>
                The handout refers to deployment from 23 October 2008.
              </Point>

              <Point>
                INS Reprieve, as written in the handout, is described as being
                used to escort merchant vessels through the area.
              </Point>

              <Point>
                Ships from other countries also participated in anti-piracy
                efforts.
              </Point>
            </div>
          </Card>

          {/* INTERNATIONAL ACTION */}
          <Card title="International Naval Action">
            <p>
              The handout describes international naval forces operating in the
              region to protect merchant shipping and respond to piracy.
            </p>

            <div className="mt-5 space-y-3">
              <Point>
                Naval vessels escorted merchant ships through high-risk areas.
              </Point>

              <Point>
                Naval forces responded to distress calls and piracy incidents.
              </Point>

              <Point>
                International cooperation was used to improve protection of
                vessels in the Gulf of Aden.
              </Point>
            </div>
          </Card>

          {/* RECENT EVENTS */}
          <Card title="Summary of Recent Events in the Handout">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">
                Historical Examples
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                The events and statistics in this section are historical
                examples presented by the course handout and should be read in
                that context.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <Event
                title="Arabian Sea and Indian Ocean"
                text="The handout describes Somali pirates attacking vessels across the Arabian Sea and Indian Ocean region."
              />

              <Event
                title="Increasing Operating Range"
                text="It states that pirates increased their range and attacked ships farther from the coast of Kenya in the Indian Ocean."
              />

              <Event
                title="Naval Intervention"
                text="Several incidents described in the handout involved naval vessels responding to merchant ships under attack."
              />

              <Event
                title="Hostages"
                text="The handout describes incidents in which crews were taken hostage after vessels were captured."
              />
            </div>
          </Card>

          {/* ATTACK METHOD */}
          <Card title="Typical Pirate Attack Method Described in the Handout">
            <p>
              The handout describes a typical pirate attack as involving small,
              fast craft approaching a vessel.
            </p>

            <div className="mt-5 space-y-3">
              <Step number="1">
                The attacked vessel may be approached from the quarter or
                stern.
              </Step>

              <Step number="2">
                RPGs and small arms may be used to intimidate the operator and
                slow the vessel down.
              </Step>

              <Step number="3">
                Light ladders may be brought alongside to climb aboard.
              </Step>

              <Step number="4">
                Pirates may then attempt to gain control of the bridge and take
                operational control of the vessel.
              </Step>
            </div>
          </Card>

          {/* HANDOUT NOTE */}
          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Course Note
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-slate-900">
              Historical Material
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              This chapter contains dates, statistics and piracy incidents from
              the period covered by the supplied course handout. They are
              presented here as course material rather than as current piracy
              statistics.
            </p>
          </section>

          {/* QUICK REVISION */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Quick Revision
            </p>

            <h2 className="mt-2 text-2xl font-extrabold">
              Topic 11 Key Points
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Revision>
                Somali piracy became a major threat to international shipping.
              </Revision>

              <Revision>
                The Gulf of Aden was an important area of international concern.
              </Revision>

              <Revision>
                International organizations responded to piracy concerns.
              </Revision>

              <Revision>
                India deployed naval assets for anti-piracy operations.
              </Revision>

              <Revision>
                International naval cooperation helped protect merchant
                shipping.
              </Revision>

              <Revision>
                Pirates used small, fast craft in attacks described by the
                handout.
              </Revision>

              <Revision>
                Small arms and RPGs are mentioned in the handout&apos;s
                description of pirate attacks.
              </Revision>

              <Revision>
                The chapter&apos;s incidents and statistics are historical
                course examples.
              </Revision>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <Link
              href="/stsdsd/topic-10"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 10
            </Link>

            <Link
              href="/stsdsd/topic-12"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-center font-bold text-white hover:bg-cyan-800"
            >
              Topic 12: Anti-Piracy Measures →
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

function Organisation({
  short,
  full,
}: {
  short: string;
  full: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
      <p className="text-xl font-extrabold text-cyan-800">{short}</p>
      <p className="mt-2 font-semibold text-slate-700">{full}</p>
    </div>
  );
}

function Event({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-extrabold text-cyan-800">{title}</h3>
      <p className="mt-2 leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Step({
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