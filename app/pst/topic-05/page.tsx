"use client";

import Link from "next/link";

export default function PSTTopic05() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 05
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Personal Life-Saving Appliances
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-blue-100">
            Lifebuoys, lifejackets, immersion suits and thermal
            protective aids used for personal survival at sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* OVERVIEW */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Personal Life-Saving Appliances
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Lifebuoy"],
              ["02", "Lifejacket"],
              ["03", "Immersion Suit"],
              ["04", "Thermal Protective Aid"],
            ].map(([no, title]) => (
              <div
                key={title}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4"
              >
                <p className="text-sm font-bold text-blue-500">{no}</p>
                <p className="mt-1 font-bold text-blue-900">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIFEBUOY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            5.1 Lifebuoys
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A lifebuoy is made from inherently buoyant material and is
            designed to provide immediate buoyancy to a person in the
            water.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Outer Diameter", "Not more than 800 mm"],
              ["Inner Diameter", "Not less than 400 mm"],
              ["Minimum Mass", "Not less than 2.5 kg"],
              ["Drop Test", "Designed to withstand a 30 m drop"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4"
              >
                <p className="text-sm text-slate-500">{title}</p>
                <p className="mt-1 font-bold text-blue-900">{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            The handout also specifies a grab line around the
            circumference and requires lifebuoys to be readily available
            on both sides of the ship and on open decks.
          </p>
        </section>

        {/* LIFEBUOY ACCESSORIES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900">
            Lifebuoy Accessories
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl bg-amber-50 p-4">
              <h3 className="font-bold text-amber-900">
                Self-Igniting Light
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Designed so that it cannot be extinguished by water and
                provides a visible light signal.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4">
              <h3 className="font-bold text-amber-900">
                Self-Activating Smoke Signal
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                Emits highly visible smoke when floating in the water.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4">
              <h3 className="font-bold text-amber-900">
                Buoyant Lifeline
              </h3>
              <p className="mt-2 leading-6 text-slate-700">
                A buoyant line may be attached to a lifebuoy to assist
                recovery of a person from the water.
              </p>
            </div>

          </div>
        </section>

        {/* LIFEJACKET */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            5.2 Lifejacket
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A lifejacket is designed to provide buoyancy and help keep
            the wearer in a safe floating position.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Can be correctly donned within 1 minute after demonstration.",
              "Comfortable to wear.",
              "Allows the wearer to swim a short distance.",
              "Allows the wearer to board a survival craft.",
              "Fitted with a whistle secured by a cord.",
              "Provided with a lifejacket light.",
              "Designed to retain its required buoyancy after immersion.",
              "Inflatable types may inflate automatically on immersion and also have manual or oral inflation arrangements.",
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

        {/* JUMPING */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            Jumping into Water with a Lifejacket
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Whenever possible, board the survival craft without entering
            the water. If jumping becomes necessary, follow the trained
            procedure.
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p>✓ Ensure the lifejacket is securely fastened.</p>
            <p>✓ Check that the water below is clear.</p>
            <p>✓ Keep the feet together.</p>
            <p>✓ Hold the lifejacket firmly against the body.</p>
            <p>✓ Protect the nose and mouth as trained.</p>
            <p>✓ Look straight ahead during the jump.</p>
            <p>✓ Swim clear of the vessel after entering the water.</p>
            <p>✓ Avoid unnecessary swimming to conserve heat and energy.</p>
          </div>
        </section>

        {/* IMPORTANT NUMBER */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Important Lifejacket Figure
          </h2>

          <div className="mt-5 rounded-xl bg-white/10 p-6 text-center">
            <p className="text-4xl font-bold text-yellow-300">
              4.5 m
            </p>
            <p className="mt-2 text-blue-100">
              Jump height referred to in the PST handout for a person
              wearing a lifejacket.
            </p>
          </div>
        </section>

        {/* IMMERSION SUIT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            5.3 Immersion Suit
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            An immersion suit helps protect a survivor from exposure and
            loss of body heat in cold water. The handout describes
            insulated and non-insulated types.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Donning
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Capable of being unpacked and donned without assistance
                within 2 minutes.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Body Coverage
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Covers the whole body except the face, with protection
                for the hands.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Movement
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Allows the wearer to perform abandonment duties, swim a
                short distance and board a survival craft.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Visibility
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Highly visible and fitted with retro-reflective material.
              </p>
            </div>

          </div>
        </section>

        {/* IMMERSION IMPORTANT */}
        <section className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
          <h2 className="text-xl font-bold text-cyan-900">
            Immersion Suit – Remember
          </h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>✓ Don without assistance within 2 minutes.</p>
            <p>✓ Permits a jump from at least 4.5 m.</p>
            <p>✓ Allows climbing of a vertical ladder.</p>
            <p>✓ Allows swimming and boarding a survival craft.</p>
            <p>✓ Helps provide thermal protection.</p>
            <p>✓ Highly visible with retro-reflective material.</p>
          </div>
        </section>

        {/* TPA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            5.4 Thermal Protective Aids (TPA)
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A Thermal Protective Aid is made of waterproof material and
            is intended to reduce convective and evaporative heat loss
            from the wearer's body.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Made from waterproof material.",
              "Reduces heat loss from the body.",
              "Covers the whole body of a person wearing a lifejacket except the face.",
              "Designed for easy donning without assistance in a survival craft.",
              "Highly visible.",
              "Can be removed in the water if it interferes with the ability to swim.",
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

        {/* COMPARISON */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            Quick Comparison
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3">Equipment</th>
                  <th className="p-3">Main Purpose</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-3 font-semibold">Lifebuoy</td>
                  <td className="p-3">
                    Immediate buoyancy for a person in the water
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Lifejacket</td>
                  <td className="p-3">
                    Personal flotation and survival assistance
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-semibold">Immersion Suit</td>
                  <td className="p-3">
                    Protection from exposure and cold water
                  </td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold">TPA</td>
                  <td className="p-3">
                    Reduction of body heat loss
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
              Lifebuoy = person in water • Lifejacket = flotation •
              Immersion Suit = cold-water protection • TPA = reduce
              heat loss.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst/topic-04"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← Previous: Survival Craft
          </Link>

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            PST Topics
          </Link>

          <Link
            href="/pst/topic-06"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Survival at Sea →
          </Link>

        </div>

      </div>
    </main>
  );
}