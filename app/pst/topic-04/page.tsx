"use client";

import Link from "next/link";

export default function PSTTopic04() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 04
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Survival Craft & Rescue Boats
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Lifeboats, liferafts and rescue boats used for survival,
            evacuation and recovery of persons at sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Survival Craft
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Survival craft provide a means of survival after abandoning
            a vessel. The PST handout covers lifeboats, liferafts and
            rescue boats.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {["Lifeboat", "Liferaft", "Rescue Boat"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 p-5 text-center font-bold text-blue-900"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* LIFEBOAT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            4.1 Lifeboats
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Lifeboats are constructed to provide adequate stability and
            freeboard when carrying their full complement of persons and
            equipment.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Lifeboats have rigid hulls.",
              "They must have adequate stability in a seaway.",
              "They must have sufficient strength for safe launching.",
              "They must be capable of carrying their full complement of persons and equipment.",
              "Hull and rigid covers are fire-retarding and non-combustible.",
              "Seating is fitted as low as practicable inside the lifeboat.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-blue-50 p-4"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIFEBOAT ACCESS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Access into Lifeboats
          </h2>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              ✓ Passenger-ship lifeboats are arranged for rapid boarding
              by their full complement.
            </li>

            <li>
              ✓ Cargo-ship lifeboats are arranged so their full
              complement can board within the time specified in the
              handout.
            </li>

            <li>
              ✓ A boarding ladder can be used to assist persons in the
              water to enter the lifeboat.
            </li>

            <li>
              ✓ Arrangements allow a helpless person to be brought
              aboard from the sea or on a stretcher.
            </li>

            <li>
              ✓ Walking surfaces are provided with a non-skid finish.
            </li>
          </ul>
        </section>

        {/* BUOYANCY */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Lifeboat Buoyancy
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Lifeboats must have inherent buoyancy or suitable inherently
            buoyant material sufficient to keep the lifeboat afloat with
            its permitted complement.
          </p>
        </section>

        {/* LIFERAFT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            4.2 Liferafts
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Liferafts are designed to provide survival protection after
            abandonment and to withstand demanding conditions at sea.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Sea Exposure
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The handout specifies construction capable of
                withstanding 30 days afloat in sea conditions.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Canopy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A canopy protects occupants from exposure to weather,
                seawater, wind, heat and cold.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Rainwater
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Means are provided for collecting rainwater.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Ventilation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Entrances allow ventilation while helping protect
                occupants from seawater, wind and cold.
              </p>
            </div>

          </div>
        </section>

        {/* IMPORTANT NUMBERS */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Important Liferaft Figures
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-3xl font-bold text-yellow-300">
                30 Days
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Exposure afloat
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-3xl font-bold text-yellow-300">
                18 m
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Drop condition stated in handout
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <p className="text-3xl font-bold text-yellow-300">
                6 Persons
              </p>
              <p className="mt-2 text-sm text-blue-100">
                Minimum approved capacity stated
              </p>
            </div>

          </div>
        </section>

        {/* LIFERAFT EQUIPMENT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Liferaft Equipment
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout lists survival and signalling equipment carried
            with a liferaft, including:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Buoyant Rescue Quoit",
              "Safety Knife",
              "Buoyant Bailer",
              "Sponges",
              "Sea Anchors",
              "Buoyant Paddles",
              "First Aid Outfit",
              "Whistle",
              "Smoke Signals",
              "Rocket Parachute Flares",
              "Hand Flares",
              "Waterproof Torch",
              "Radar Reflector",
              "Signalling Mirror",
              "Life-Saving Signals",
              "Fishing Tackle",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* MARKINGS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Liferaft Container Markings
          </h2>

          <div className="mt-4 space-y-2 text-slate-700">
            <p>• Maker's name or trademark</p>
            <p>• Serial number</p>
            <p>• Approving authority</p>
            <p>• Permitted number of persons</p>
            <p>• SOLAS marking</p>
            <p>• Type of emergency pack</p>
            <p>• Date last serviced</p>
            <p>• Length of painter</p>
            <p>• Maximum permitted stowage height</p>
            <p>• Launching instructions</p>
          </div>
        </section>

        {/* RESCUE BOAT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            4.3 Rescue Boat
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Rescue boats are intended for recovering persons from the
            water, assisting survival craft and carrying out rescue
            operations.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Construction
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Rescue boats may be rigid, inflated or a combination of
                both.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Capacity
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                They must be capable of carrying at least five seated
                persons and one person lying down.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Speed
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The handout specifies capability of manoeuvring at up
                to 6 knots and maintaining that speed for at least
                4 hours.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Rescue Function
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                It must have sufficient mobility and manoeuvrability to
                retrieve persons from the water and assist liferafts.
              </p>
            </div>

          </div>
        </section>

        {/* PURPOSE */}
        <section className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Main Functions of a Rescue Boat
          </h2>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✓ Recover persons from the water.</li>
            <li>✓ Marshal liferafts.</li>
            <li>✓ Tow liferafts when required.</li>
            <li>✓ Carry out rescue operations at sea.</li>
          </ul>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Lifeboat = survival and evacuation • Liferaft = inflatable
              survival craft • Rescue Boat = recovery and assistance.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-03"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Evacuation
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-05"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Life-Saving Appliances →
          </Link>

        </div>

      </div>
    </main>
  );
}