"use client";

import Link from "next/link";

export default function PSTTopic07() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 07
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Helicopter Assistance
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Preparation, communication, evacuation and safe helicopter
            pickup during rescue operations at sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Helicopter Rescue at Sea
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Helicopter rescue at sea requires skill and careful
            coordination, particularly in fog, poor visibility or rough
            sea conditions.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The ship's crew must prepare the vessel and rescue area
            before the helicopter approaches.
          </p>
        </section>

        {/* PREPARATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            7.1 Preparation for Helicopter Assistance
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Remove loose gear and rubbish from the operating deck area.",
              "Secure lifting gear and other equipment.",
              "Prepare and clearly identify the helicopter operating point.",
              "Lower radio aerials in the vicinity when required.",
              "Provide an indication of wind direction.",
              "Keep an emergency party standing by.",
              "Prepare fire hoses with spray nozzles.",
              "Prepare foam fire extinguishers.",
              "Provide adequate lighting for operations in darkness.",
              "Establish communication with the helicopter.",
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

        {/* ROTOR WARNING */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            ⚠ Helicopter Hazard
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The operating area must be kept clear. Contact between the
            helicopter rotor blades and ship structures or equipment
            could cause a serious accident.
          </p>
        </section>

        {/* COMMUNICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Communication with Helicopter
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Communication should be established between the ship or
            survival craft and the helicopter crew before and during the
            rescue operation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Ship
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Adjust the ship's speed and heading as required to
                minimize movement during the operation.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-bold text-blue-900">
                Survival Craft
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Stream the sea anchor or drogue and use paddles when
                necessary to help control the craft.
              </p>
            </div>

          </div>
        </section>

        {/* HOIST SIGNALS */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Helicopter Hoisting Signals
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-xl font-bold text-red-300">
                DO NOT HOIST
              </p>

              <p className="mt-2 leading-7 text-blue-100">
                Arms extended horizontally with fingers together and
                thumbs pointing down.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-xl font-bold text-green-300">
                HOIST
              </p>

              <p className="mt-2 leading-7 text-blue-100">
                The handout describes the hoisting indication with the
                arm raised and thumb up.
              </p>
            </div>

          </div>

          <p className="mt-5 text-sm leading-6 text-blue-100">
            If the survivor gives the hoisting signal personally, the
            handout instructs the survivor to raise one arm while
            holding the lifting strop with the other.
          </p>
        </section>

        {/* EVACUATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            7.2 Evacuation from Ship & Survival Craft
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Obey instructions given by the helicopter crew.",
              "Keep watch on the winch wire during hoisting.",
              "Prevent the wire from becoming fouled with ship rigging or survival craft.",
              "Keep the helicopter operating area clear.",
              "Keep prepared firefighting equipment protected from fouling the helicopter operation.",
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

        {/* STATIC ELECTRICITY */}
        <section className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            ⚡ Static Electricity – Important
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The PST handout warns personnel not to touch the helicopter
            hoist wire at deck level because of static electricity.
          </p>

          <p className="mt-3 font-bold text-red-700">
            Follow the helicopter crew's instructions before handling
            any lifting equipment.
          </p>
        </section>

        {/* PICKUP */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            7.3 Helicopter Pickup
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Helicopter pickup may be carried out from the ship's deck or
            directly from the water. The winching area should provide
            maximum possible manoeuvrability for the helicopter.
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-5">
            <h3 className="font-bold text-blue-900">
              Lifting Strop
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              A lifting strop is lowered from the helicopter on the
              winch wire. For a helpless, sick or injured person, a
              helicopter crew member may descend to assist with the
              pickup.
            </p>
          </div>
        </section>

        {/* STROP */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Using the Helicopter Lifting Strop
          </h2>

          <div className="mt-5 space-y-4">

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                1
              </div>
              <p className="pt-1 text-slate-700">
                Wait until the lifting strop is ready and cleared for
                use by the helicopter crew.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                2
              </div>
              <p className="pt-1 text-slate-700">
                Put your head and both arms through the loop of the
                lifting strop.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                3
              </div>
              <p className="pt-1 text-slate-700">
                Position the strop under the armpits with the padded
                section across the back.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                4
              </div>
              <p className="pt-1 text-slate-700">
                Tighten the strop using the toggle as described in the
                handout.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                5
              </div>
              <p className="pt-1 text-slate-700">
                When secure and ready for pickup, give the appropriate
                signal to the helicopter winchman.
              </p>
            </div>

          </div>
        </section>

        {/* HARNESS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            7.4 Correct Use of Helicopter Harness
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout refers to a Neil Robertson stretcher fitted with
            a harness for rescue of an injured or helpless casualty.
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p>✓ Ensure the harness is properly secured.</p>
            <p>✓ Check the securing arrangements around the casualty.</p>
            <p>✓ Ensure the safety lock is correctly in position.</p>
            <p>
              ✓ Initially take the weight on the harness to check its
              adjustment before continuing the lift.
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
              Clear deck → Secure loose gear → Prepare firefighting
              equipment → Establish communication → Follow helicopter
              instructions → Beware of hoist wire/static electricity →
              Fit lifting strop correctly → Give hoist signal.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-06"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Survival at Sea
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-08"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Emergency Radio Equipment →
          </Link>

        </div>

      </div>
    </main>
  );
}