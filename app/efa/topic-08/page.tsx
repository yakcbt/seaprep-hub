"use client";

import Link from "next/link";

export default function EFATopic08() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/efa"
            className="text-sm font-semibold text-emerald-100 hover:text-white"
          >
            ← Back to EFA
          </Link>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-100">
            Elementary First Aid • Topic 08
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🔥 Burns, Scalds & Electrical Accidents
          </h1>

          <p className="mt-3 max-w-3xl text-emerald-50">
            Causes, dangers, classification and first aid management
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Introduction
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Burns and scalds are dangerous because they can cause death and
              may also produce delayed effects such as scarring and deformity.
              Prompt and correct treatment is therefore essential.
            </p>
          </div>

          {/* BURNS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. Burns
            </h2>

            <p className="mt-3 text-slate-700">
              The course handout describes burns as injuries resulting from
              dry heat and lists the following causes:
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Item text="Fire" />
              <Item text="Contact with hot metals" />
              <Item text="Chemicals such as nitric acid and sulfuric acid" />
              <Item text="Ammonia and caustic soda" />
              <Item text="Electricity" />
              <Item text="Radiation" />
            </div>
          </div>

          {/* SCALDS */}
          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
            <h2 className="text-2xl font-extrabold text-blue-800">
              💧 3. Scalds
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Scalds are injuries caused by moist heat.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Item text="Boiling water" />
              <Item text="Steam" />
              <Item text="Hot oil" />
              <Item text="Hot tar" />
              <Item text="Hot liquids" />
            </div>
          </div>

          {/* DANGERS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. Dangers of Burns
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-red-50 p-5">
                <h3 className="text-xl font-bold text-red-700">
                  ⚠️ Shock
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  The handout states that shock develops because plasma leaks
                  out of the circulatory system into the burnt area.
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-700">
                  🦠 Infection
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  There is a risk of infection because the skin is damaged and
                  its protection against microorganisms is reduced.
                </p>
              </div>
            </div>
          </div>

          {/* CLASSIFICATION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. Classification of Burns
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  A. Area
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  The handout classifies burns according to the area involved
                  and states that burns over 30% should be hospitalized as a
                  priority.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  B. Severity
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  The handout describes a superficial burn as involving the
                  skin with blister formation and describes other burns as
                  deep burns.
                </p>
              </div>
            </div>
          </div>

          {/* FIRST AID */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              6. First Aid Management
            </h2>

            <div className="mt-5 space-y-3">
              <Step
                no="1"
                text="Put out the fire by pouring water or wrapping the casualty in a blanket, as described in the handout."
              />

              <Step
                no="2"
                text="Do not allow a person whose clothing is on fire to run about."
              />

              <Step
                no="3"
                text="Immerse the burnt part in cold water or hold the affected area under running cold water."
              />

              <Step
                no="4"
                text="The handout specifies keeping the burnt part in cold water for 15–20 minutes or until the pain disappears."
              />

              <Step
                no="5"
                text="If required, use a cold wet clean cloth."
              />

              <Step
                no="6"
                text="Cover the affected area with sterile material or freshly laundered linen."
              />

              <Step
                no="7"
                text="Remove rings, bracelets, shoes and other tight articles."
              />

              <Step
                no="8"
                text="Arrange immediate hospital treatment."
              />
            </div>
          </div>

          {/* DO NOT */}
          <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-200">
            <h2 className="text-2xl font-extrabold text-red-700">
              ❌ Do Not
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>✕ Do not put oil, lotions or ointments on the burn.</p>
              <p>✕ Do not pull away clothing stuck to the burnt area.</p>
              <p>✕ Do not handle the casualty unnecessarily.</p>
            </div>
          </div>

          {/* CHEMICAL BURNS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              🧪 7. Chemical Burns
            </h2>

            <div className="mt-5 space-y-3">
              <Item text="Remove contaminated clothing carefully after soaking it with water." />
              <Item text="Take care not to contaminate yourself." />
              <Item text="Flood the affected area with water for 10–15 minutes, as stated in the handout." />
            </div>

            <div className="mt-5 rounded-xl bg-amber-50 p-5">
              <p className="font-bold text-amber-800">
                Course Handout Note
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                The supplied handout additionally mentions soda bicarbonate
                for acid and vinegar for alkali. This is presented here only
                as content from the supplied course handout.
              </p>
            </div>
          </div>

          {/* ELECTRICAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              ⚡ 8. Electrical Accidents
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Electrical accidents may cause burns and other serious effects.
              The handout describes electrical burns as potentially deep,
              including at the points of entrance and exit.
            </p>

            <div className="mt-5 space-y-3">
              <Step
                no="1"
                text="Switch off the electric current or unplug the electrical supply."
              />

              <Step
                no="2"
                text="Avoid the use of water while the electrical source remains live."
              />

              <Step
                no="3"
                text="If the supply cannot be switched off, the handout describes separating the casualty from the live wire using a long dry wooden stick while standing on a non-conductor."
              />

              <Step
                no="4"
                text="Use rubber gloves if available, as stated in the handout."
              />

              <Step
                no="5"
                text="After isolation from the electrical source, assess the casualty and provide the resuscitation measures described in the course material if required."
              />

              <Step
                no="6"
                text="Treat shock and burns and arrange medical assistance."
              />
            </div>
          </div>

          {/* ELECTRIC WARNING */}
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <h2 className="text-xl font-extrabold text-amber-800">
              ⚠️ Electrical Safety
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Do not directly touch a casualty who is still in contact with a
              live electrical source. The electrical supply must first be
              isolated.
            </p>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Burns — injuries from dry heat and other listed causes.</p>
              <p>✓ Scalds — injuries caused by moist heat.</p>
              <p>✓ Main dangers — shock and infection.</p>
              <p>✓ Cool the burnt area as described in the handout.</p>
              <p>✓ Do not pull off clothing stuck to a burn.</p>
              <p>✓ Chemical burns require careful decontamination.</p>
              <p>✓ Isolate electrical supply before touching the casualty.</p>
              <p>✓ Arrange medical treatment for serious injuries.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-07"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 07
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-09"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 09: Rescue & Transport →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 font-medium leading-6 text-slate-700">
      ✓ {text}
    </div>
  );
}

function Step({
  no,
  text,
}: {
  no: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
        {no}
      </div>

      <p className="leading-7 text-slate-700">
        {text}
      </p>
    </div>
  );
}