"use client";

import Link from "next/link";

export default function FPFFTopic12() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 12
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Construction Requirements & Means of Escape
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Ship construction arrangements, fire divisions and safe
            means of escape during a fire emergency.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* BASIC PRINCIPLE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🛳️ Basic Principles
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fire prevention is considered at the ship construction
            stage itself. The handout identifies the following basic
            principles:
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Divide the ship into prescribed main vertical zones by thermal and structural boundaries.",
              "Separate accommodation spaces from the remainder of the ship by thermal and structural boundaries.",
              "Restrict the use of combustible materials.",
              "Detect fire in the zone of origin.",
              "Contain and extinguish fire in the zone of origin.",
              "Adequately protect means of escape and access for fire fighting.",
              "Keep fire-extinguishing appliances readily available.",
              "Minimize the possibility of ignition of flammable cargo vapours.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-red-50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FIRE DIVISIONS */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
            Structural Fire Protection
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Classification of Divisions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-red-700 p-6 text-center">
              <div className="text-4xl font-bold">A</div>
              <p className="mt-2 font-bold">A Class Division</p>
            </div>

            <div className="rounded-2xl bg-orange-600 p-6 text-center">
              <div className="text-4xl font-bold">B</div>
              <p className="mt-2 font-bold">B Class Division</p>
            </div>

            <div className="rounded-2xl bg-slate-600 p-6 text-center">
              <div className="text-4xl font-bold">C</div>
              <p className="mt-2 font-bold">C Class Division</p>
            </div>

          </div>
        </section>

        {/* A CLASS */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            A Class Divisions
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            These divisions are formed by bulkheads and decks.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Constructed of steel or other equivalent material.",
              "Suitably stiffened.",
              "Capable of preventing passage of smoke and flame to the end of a one-hour standard fire test.",
              "Insulated with approved non-combustible material.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-red-50 p-4 text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-orange-50 p-5">
              <p className="text-sm font-semibold text-orange-700">
                AVERAGE TEMPERATURE RISE
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-900">
                139°C
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-700">
                ANY ONE POINT
              </p>
              <p className="mt-2 text-3xl font-bold text-red-900">
                180°C
              </p>
            </div>

          </div>
        </section>

        {/* B CLASS */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-orange-900">
            B Class Divisions
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            These divisions are formed by bulkheads, decks, ceilings
            or linings.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Capable of preventing passage of flame to the end of the first half-hour of the standard fire test.",
              "Constructed of approved non-combustible material.",
              "Insulated as specified in the handout.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-orange-50 p-4 text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-yellow-50 p-5">
              <p className="text-sm font-semibold text-yellow-800">
                AVERAGE TEMPERATURE RISE
              </p>
              <p className="mt-2 text-3xl font-bold text-yellow-900">
                139°C
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-5">
              <p className="text-sm font-semibold text-orange-800">
                ANY ONE POINT
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-900">
                220°C
              </p>
            </div>

          </div>
        </section>

        {/* C CLASS */}
        <section className="rounded-2xl border-l-4 border-slate-500 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            C Class Divisions
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            C Class divisions are constructed of approved
            non-combustible materials for bulkheads, ceilings and
            linings.
          </p>

          <div className="mt-5 rounded-xl bg-slate-100 p-5">
            <p className="font-semibold text-slate-800">
              They are not required to possess resistance to either
              flame or smoke.
            </p>
          </div>

          <p className="mt-4 text-slate-700">
            The handout also states that combustible veneers may be
            permitted within the regulations.
          </p>
        </section>

        {/* COMPARISON */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            A, B & C Division – Quick Comparison
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Division</th>
                  <th className="p-3">Material</th>
                  <th className="p-3">Fire Test / Requirement</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr className="border-b">
                  <td className="p-3 font-bold">A</td>
                  <td className="p-3">
                    Steel or equivalent
                  </td>
                  <td className="p-3">
                    Prevent smoke & flame for 1 hour
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">B</td>
                  <td className="p-3">
                    Approved non-combustible material
                  </td>
                  <td className="p-3">
                    Prevent flame for first 30 minutes
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold">C</td>
                  <td className="p-3">
                    Approved non-combustible material
                  </td>
                  <td className="p-3">
                    No specified resistance to flame or smoke
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* MEANS OF ESCAPE */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            🚪 Means of Escape
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Stairways and ladders are arranged to provide a ready means
            of escape from accommodation spaces and spaces where crew
            are normally employed to:
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-bold">
            <span className="rounded-xl bg-white px-4 py-3">
              Accommodation / Work Space
            </span>

            <span>→</span>

            <span className="rounded-xl bg-white px-4 py-3">
              Escape Route
            </span>

            <span>→</span>

            <span className="rounded-xl bg-white px-4 py-3">
              Open Deck
            </span>

            <span>→</span>

            <span className="rounded-xl bg-green-700 px-4 py-3 text-white">
              Lifeboats / Liferafts
            </span>
          </div>
        </section>

        {/* ACCOMMODATION ESCAPE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Escape from Accommodation
          </h2>

          <div className="mt-5 space-y-3">

            <div className="rounded-xl bg-red-50 p-4">
              <strong>Two Escapes:</strong> At all accommodation
              levels, at least two widely separated means of escape
              should be provided from each restricted space or group
              of spaces.
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <strong>Below Lowest Open Deck:</strong> Main escape is
              a stairway; the second escape may be a trunk or stairway.
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <strong>Above Lowest Open Deck:</strong> Escape may be
              by stairways, doors to an open deck, or a combination.
            </div>

          </div>
        </section>

        {/* MACHINERY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            ⚙️ Escape from Machinery Spaces
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout describes two means of escape from machinery
            spaces of Category A.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-600">
                OPTION 1
              </p>

              <h3 className="mt-2 font-bold text-red-900">
                Two Steel Ladders
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Two sets of steel ladders, as widely separated as
                possible, lead towards doors in the upper part of the
                space and then to a safe/open deck.
              </p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-bold text-orange-600">
                OPTION 2
              </p>

              <h3 className="mt-2 font-bold text-orange-900">
                Ladder + Steel Door
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                One steel ladder leads to an upper door, with an
                additional steel door in the lower part of the space,
                well separated from the ladder.
              </p>
            </div>

          </div>
        </section>

        {/* PROTECTED ENCLOSURE */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            Protected Escape Enclosure
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Where specified in the handout, a protected ladder
            enclosure should provide continuous fire shelter to a safe
            position outside the machinery space.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-sm font-semibold text-slate-500">
              MINIMUM INTERNAL DIMENSION
            </p>

            <p className="mt-2 text-3xl font-bold text-red-900">
              800 mm × 800 mm
            </p>

            <p className="mt-2 text-slate-600">
              Emergency lighting is also required.
            </p>
          </div>
        </section>

        {/* RO-RO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🚗 Escape from Ro-Ro Spaces
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            At least two means of escape should be provided in ro-ro
            spaces where crew are normally employed.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The escape routes should provide safe escape to lifeboat
            and liferaft embarkation decks and should be located at the
            fore and aft ends of the space.
          </p>
        </section>

        {/* ESCAPE MARKING */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            💡 Marking of Escape Routes
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Escape routes, including stairways and exits, should be
            marked by lighting or photoluminescent strip indicators.
          </p>

          <div className="mt-5 rounded-xl bg-white/10 p-5 text-center">
            <p className="text-sm text-slate-300">
              HEIGHT ABOVE DECK
            </p>

            <p className="mt-2 text-3xl font-bold">
              Not More Than 300 mm
            </p>
          </div>

          <p className="mt-4 leading-7 text-slate-300">
            Markings should continue along the escape route, including
            angles and intersections, so that escape routes and exits
            can be readily identified.
          </p>
        </section>

        {/* GENERAL ESCAPE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            General Escape Requirements
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Provide an escape route from every normally occupied space to an assembly station.",
              "The route should be as direct as possible.",
              "Cabin-to-stairway routes should have minimum changes in direction.",
              "It should not be necessary to cross from one side of the ship to the other to reach an escape route.",
              "From passenger spaces, it should not be necessary to climb more than two decks up or down to reach an assembly station or open deck.",
              "External routes should lead from open decks to survival-craft embarkation stations.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-green-600">✓</span>
                <p className="leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* KEEP CLEAR */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            ⚠️ Keep Escape Routes Clear
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Escape routes should not be obstructed by furniture or
            other objects.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            When the ship is underway, routes should be kept clear of
            cleaning carts, bedding, luggage and boxes of goods.
          </p>
        </section>

        {/* SAFE ESCAPE */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🗺️ Instructions for Safe Escape
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Decks should be sequentially numbered starting with
            <strong> “1” at the tank top or lowest deck</strong>.
            Numbers should be prominently displayed at stair landings
            and lift lobbies.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <h3 className="font-bold text-blue-900">
              “You Are Here” Plan
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Simple mimic plans showing the “you are here” position
              and escape routes marked by arrows should be displayed
              inside cabin doors and in public spaces.
            </p>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              A Class → 1-hour smoke & flame protection • B Class →
              first 30 minutes flame protection • C Class →
              non-combustible construction • Normally provide two
              widely separated escape routes • Machinery-space escape
              uses steel ladders / protected routes • Escape-route
              markings ≤ 300 mm above deck • Keep all escape routes
              clear.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-11"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Classification of Fires
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-13"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Fire Fighting Appliances →
          </Link>

        </div>

      </div>
    </main>
  );
}