"use client";

import Link from "next/link";

export default function PSTTopic08() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 08
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Emergency Radio Equipment
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Portable VHF radio, EPIRB and SART used for distress
            communication, locating survivors and search and rescue.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* OVERVIEW */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Emergency Radio Equipment
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Emergency radio equipment helps survivors communicate with
            rescue units and assists search and rescue services in
            locating a ship or survival craft in distress.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <p className="text-xl font-bold text-blue-900">
                Portable VHF
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Voice communication
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <p className="text-xl font-bold text-blue-900">
                EPIRB
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Distress alert & location
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5 text-center">
              <p className="text-xl font-bold text-blue-900">
                SART
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Radar locating device
              </p>
            </div>

          </div>
        </section>

        {/* PORTABLE RADIO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            8.1 Portable Radio Apparatus for Survival Craft
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Portable VHF transceivers allow voice communication between
            survivors in survival craft and searching vessels.
          </p>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-bold text-blue-900">
              VHF Channel 16
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              The handout states that the equipment should provide
              operation on VHF Channel 16, the radiotelephone distress
              and calling channel, and at least one other channel.
            </p>
          </div>
        </section>

        {/* PORTABLE VHF REQUIREMENTS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Portable VHF – Performance Requirements
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Capable of operation by unskilled personnel.",
              "Can be operated by personnel wearing gloves.",
              "Capable of single-handed operation except for channel changing.",
              "Designed to withstand a drop onto a hard surface from 1 metre.",
              "Watertight to a depth of 1 metre for at least 5 minutes.",
              "Not unduly affected by seawater or oil.",
              "No sharp projections that may damage the survival craft.",
              "Small in size and weight.",
              "Suitable for the noise conditions expected in a survival craft.",
              "Provision for attachment to the user's clothing.",
              "Highly visible yellow/orange or suitably marked.",
              "Resistant to deterioration from prolonged sunlight exposure.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-slate-50 p-4"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EPIRB */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            8.2 EPIRB
          </h2>

          <p className="mt-1 font-semibold text-blue-700">
            Emergency Position Indicating Radio Beacon
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            The essential purpose of an EPIRB signal is to help determine
            the position of survivors during Search and Rescue (SAR)
            operations.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                406 MHz
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Used with the COSPAS-SARSAT satellite search and rescue
                system.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                121.5 MHz
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The handout describes this as the homing signal used to
                assist rescue units approaching the distress position.
              </p>
            </div>

          </div>
        </section>

        {/* EPIRB OPERATION */}
        <section className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            How EPIRB Works
          </h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>1. EPIRB transmits a distress signal.</p>
            <p>2. COSPAS-SARSAT satellites detect the signal.</p>
            <p>
              3. Signal information is relayed to a Local User Terminal
              (LUT).
            </p>
            <p>
              4. The information is processed to determine the beacon
              location.
            </p>
            <p>
              5. The alert is passed through the Mission Control Centre
              (MCC).
            </p>
            <p>
              6. The appropriate Rescue Coordination Centre or SAR
              authority receives the information.
            </p>
            <p>7. Search and Rescue action can then be initiated.</p>
          </div>
        </section>

        {/* EPIRB ACTIVATION */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            EPIRB Activation
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            According to the handout, the EPIRB may be carried into a
            survival craft and operated in the water. It may also be
            activated manually.
          </p>

          <div className="mt-5 rounded-xl bg-white/10 p-5">
            <p className="font-bold text-yellow-300">
              Float-Free Arrangement
            </p>

            <p className="mt-2 leading-7 text-blue-100">
              The handout describes an EPIRB installation with a
              hydrostatic release arrangement. If the vessel sinks, the
              beacon can be released, rise to the surface and activate
              automatically.
            </p>
          </div>
        </section>

        {/* EPIRB FEATURES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            EPIRB – Important Features
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Designed to float upright in calm water.",
              "Highly visible in colour.",
              "Fitted with retro-reflective material.",
              "Can be manually activated.",
              "Can be carried into a survival craft.",
              "Handout specifies continuous transmission capability of not less than 48 hours.",
              "Once activated in an emergency, the handout advises keeping it operating until the emergency is over.",
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

        {/* SART */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            8.3 SART
          </h2>

          <p className="mt-1 font-semibold text-blue-700">
            Search and Rescue Radar Transponder
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            The handout describes SART as a GMDSS locating device used
            for locating ships in distress or their survival craft.
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-5">
            <p className="text-3xl font-bold text-blue-900">
              9 GHz
            </p>

            <p className="mt-2 text-slate-700">
              SART operates in the 9 GHz radar frequency band.
            </p>
          </div>
        </section>

        {/* HOW SART WORKS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            How SART Works
          </h2>

          <div className="mt-5 space-y-4">

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                1
              </div>
              <p className="pt-1 text-slate-700">
                SART is manually activated in a distress situation.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                2
              </div>
              <p className="pt-1 text-slate-700">
                A searching ship or aircraft radar interrogates the
                SART.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                3
              </div>
              <p className="pt-1 text-slate-700">
                The SART automatically responds to the radar signal.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                4
              </div>
              <p className="pt-1 text-slate-700">
                Its response appears on the searching radar display,
                helping rescuers determine the direction of the SART.
              </p>
            </div>

          </div>
        </section>

        {/* 12 BLIPS */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            SART Radar Display
          </h2>

          <div className="mt-5 text-center">
            <p className="text-5xl font-bold text-yellow-300">
              12
            </p>

            <p className="mt-2 text-lg font-semibold">
              Blips / Dots
            </p>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-100">
              The handout states that an interrogated SART produces a
              line of 12 blips on the radar screen extending outward
              from the SART position along its bearing.
            </p>
          </div>
        </section>

        {/* CLOSE RANGE */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            When the Rescue Craft Gets Closer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout states that when the searching craft approaches
            to about 1 mile from the SART, the radar blips change into
            wider arcs.
          </p>
        </section>

        {/* SART INDICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            SART Indication
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The SART provides a visual or audible indication of its
            operation and can inform survivors when it is being
            interrogated by radar.
          </p>
        </section>

        {/* COMPARISON */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            EPIRB vs SART
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">

              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3">Equipment</th>
                  <th className="p-3">Main Purpose</th>
                  <th className="p-3">System</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr className="border-b">
                  <td className="p-3 font-bold">EPIRB</td>
                  <td className="p-3">
                    Distress alert and locating survivors
                  </td>
                  <td className="p-3">
                    COSPAS-SARSAT satellite system
                  </td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="p-3 font-bold">SART</td>
                  <td className="p-3">
                    Helps rescue units locate survival craft
                  </td>
                  <td className="p-3">
                    9 GHz radar
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Portable VHF = communication • EPIRB = distress alert &
              position • SART = radar locating device • EPIRB uses
              COSPAS-SARSAT • SART works with 9 GHz radar and shows
              12 blips when interrogated.
            </strong>
          </p>
        </section>

        {/* PST COMPLETE */}
        <section className="rounded-2xl bg-green-700 p-6 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-100">
            SeaPrep Hub
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            PST Notes Completed ✓
          </h2>

          <p className="mt-2 text-green-100">
            You have completed all 8 Personal Survival Techniques topics.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-07"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Helicopter Assistance
          </Link>

          <Link
            href="/pst"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/practice-cbt"
            className="rounded-xl bg-green-700 px-5 py-3 text-center font-semibold text-white hover:bg-green-600"
          >
            Start PST Practice CBT →
          </Link>

        </div>

      </div>
    </main>
  );
}