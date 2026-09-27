import Link from "next/link";

export default function RopesKnotsPage() {
  const ropeTypes = [
    {
      icon: "🌿",
      title: "Natural Fibre Ropes",
      text: "Made from natural fibres such as manila, sisal and coir. They are affected by moisture, rot and mildew and require proper drying and storage.",
    },
    {
      icon: "🧵",
      title: "Synthetic Fibre Ropes",
      text: "Common synthetic ropes include nylon, polyester and polypropylene. They are strong, flexible and widely used onboard ships.",
    },
    {
      icon: "🪢",
      title: "Rope Construction",
      text: "Fibres are formed into yarns, yarns into strands, and strands are laid or braided together to form a rope.",
    },
  ];

  const knots = [
    {
      name: "Reef Knot",
      use: "Used to join two ends of rope of approximately equal size for light-duty purposes.",
    },
    {
      name: "Bowline",
      use: "Forms a fixed loop at the end of a rope that does not normally tighten under load.",
    },
    {
      name: "Clove Hitch",
      use: "A simple hitch commonly used to temporarily secure a rope around a post or rail.",
    },
    {
      name: "Sheet Bend",
      use: "Used to join two ropes, especially ropes of unequal size.",
    },
    {
      name: "Round Turn & Two Half Hitches",
      use: "Used to secure a rope to a post, ring or similar fitting.",
    },
    {
      name: "Rolling Hitch",
      use: "Used when a pull is required along another rope, wire or spar.",
    },
  ];

  const safety = [
    "Wear suitable PPE including safety helmet, gloves and safety shoes.",
    "Inspect ropes before use for cuts, abrasion, broken fibres and other damage.",
    "Never stand inside a bight or loop of rope.",
    "Keep clear of ropes and wires under tension.",
    "Stay clear of identified snap-back zones during mooring operations.",
    "Never wrap a rope around your hand, arm or body.",
    "Keep ropes away from sharp edges, oil, chemicals and excessive heat.",
    "Follow the officer's instructions during all rope-handling operations.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              SeaPrep Hub
            </h1>
            <p className="text-sm text-slate-400">
              General Ship Knowledge • GP Rating
            </p>
          </div>

          <Link
            href="/gsk"
            className="rounded-lg border border-cyan-400 px-4 py-2 font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            ← GSK Topics
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-cyan-400/20 bg-gradient-to-b from-blue-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center">
          <div className="text-6xl">🪢</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 03
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Ropes & Knots
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn rope types, basic rope construction, common knots,
            bends and hitches, rope care and essential safety precautions.
          </p>
        </div>
      </section>

      {/* Basic concept */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">
            📘 BASIC KNOWLEDGE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Ropes Used Onboard Ships
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Ropes are used onboard for mooring, securing equipment,
            lifting light loads and many general seamanship operations.
            A seafarer should be able to identify different ropes,
            understand their basic construction and use them safely.
          </p>
        </div>
      </section>

      {/* Rope types */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          ROPE BASICS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Types & Construction
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ropeTypes.map((rope) => (
            <div
              key={rope.title}
              className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-900 p-6"
            >
              <div className="text-4xl">{rope.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-cyan-300">
                {rope.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {rope.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Construction */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            🧵 ROPE CONSTRUCTION
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            How a Fibre Rope is Made
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Fibre", "The basic raw material."],
              ["02", "Yarn", "Fibres are twisted together to make yarn."],
              ["03", "Strand", "Yarns are twisted together to form strands."],
              ["04", "Rope", "Strands are laid or braided together to make rope."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5"
              >
                <p className="font-bold text-cyan-400">
                  STEP {number}
                </p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knots */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="font-bold text-cyan-400">
          🪢 SEAMANSHIP
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Common Knots, Bends & Hitches
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {knots.map((knot) => (
            <div
              key={knot.name}
              className="rounded-2xl border border-purple-400/20 bg-purple-500/10 p-6"
            >
              <div className="text-3xl">🪢</div>
              <h3 className="mt-3 text-xl font-bold text-purple-300">
                {knot.name}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {knot.use}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Whipping and splicing */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-6">
            <div className="text-4xl">🧵</div>
            <h2 className="mt-3 text-2xl font-bold text-cyan-300">
              Whipping
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Whipping is the binding of the end of a fibre rope with
              small twine to prevent the rope strands from opening or
              fraying.
            </p>
          </div>

          <div className="rounded-2xl border border-green-400/20 bg-slate-950 p-6">
            <div className="text-4xl">🔗</div>
            <h2 className="mt-3 text-2xl font-bold text-green-300">
              Splicing
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Splicing is a method of joining ropes or forming an eye
              by interweaving the strands of the rope. Common examples
              include eye splice and short splice.
            </p>
          </div>

        </div>
      </section>

      {/* Care */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">
          <p className="font-bold text-green-400">
            ✅ CARE & MAINTENANCE
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Take Care of Your Ropes
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Inspect ropes regularly before use.",
              "Keep ropes clean and properly stowed.",
              "Avoid dragging ropes over sharp or rough surfaces.",
              "Keep ropes away from harmful chemicals and oil.",
              "Protect ropes from unnecessary heat and sunlight.",
              "Dry wet natural-fibre ropes before long-term storage.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-950/60 p-4 text-slate-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-7">

          <p className="font-bold text-amber-400">
            ⚠️ SAFETY FIRST
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Rope Handling Safety
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {safety.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-amber-400/20 bg-slate-950/60 p-4"
              >
                <span className="mr-2 text-amber-400">⚠</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 text-center">
          <p className="text-xl font-bold text-red-400">
            🚫 NEVER FORGET
          </p>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-200">
            Never stand in a bight of rope or in the potential path of
            a rope if it parts under tension. Rope under heavy load can
            cause serious or fatal injury.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">

          <Link
            href="/gsk/deck-equipment"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 02
          </Link>

          <Link
            href="/gsk"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
          >
            All GSK Topics
          </Link>
<Link
  href="/gsk/life-saving-appliances"
  className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
>
  Next Topic →
</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center">
        <p className="font-bold">SeaPrep Hub</p>
        <p className="mt-2 text-sm text-slate-400">
          General Ship Knowledge • GP Rating Study Material
        </p>
        <p className="mt-4 font-semibold text-cyan-400">
          Prepared by: Saurav Kumar Das
        </p>
      </footer>

    </main>
  );
}