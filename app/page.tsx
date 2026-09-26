import Link from "next/link";

const stcwCourses = [
  {
    code: "PST",
    name: "Personal Survival Techniques",
    icon: "🛟",
  },
  {
    code: "FPFF",
    name: "Fire Prevention & Fire Fighting",
    icon: "🔥",
  },
  {
    code: "PSSR",
    name: "Personal Safety & Social Responsibilities",
    icon: "🚤",
  },
  {
    code: "EFA",
    name: "Elementary First Aid",
    icon: "⛑️",
  },
  {
    code: "STSDSD",
    name: "Security Training for Seafarers",
    icon: "🛡️",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* TOP BAR */}
      <div className="bg-blue-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-1 px-5 py-2 text-center text-xs sm:flex-row">
          <p>Knowledge for a Safer, Stronger Maritime Future</p>
          <p>Free Maritime Study Portal • No Login • No Payment</p>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-2xl text-white">
              ⚓
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-blue-950">
                SeaPrep Hub
              </h1>
              <p className="text-xs font-semibold tracking-widest text-slate-500">
                STCW • GP RATING • MCQ • CBT
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#home" className="text-blue-700 hover:text-blue-900">
              Home
            </a>

            <a href="#stcw" className="hover:text-blue-700">
              STCW Notes
            </a>

            <a href="#gp-rating" className="hover:text-blue-700">
              GP Rating
            </a>

            <a href="#practice" className="hover:text-blue-700">
              MCQ Practice
            </a>

            <a href="#practice" className="hover:text-blue-700">
              CBT Test
            </a>

            <a href="#about" className="hover:text-blue-700">
              About
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-blue-950"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ship-hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/75 to-blue-950/20" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 text-white">

          <div className="max-w-2xl">

            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your Maritime Study Partner
            </p>

            <h2 className="text-5xl font-extrabold leading-tight sm:text-6xl">
              SeaPrep Hub
            </h2>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Learn <span className="mx-2 text-cyan-300">•</span>
              Practice <span className="mx-2 text-cyan-300">•</span>
              Succeed
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Free notes, MCQs and CBT practice for STCW and GP Rating.
              Simple maritime learning — anytime, anywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#stcw"
                className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
              >
                📖 Explore Notes →
              </a>

              <a
                href="#practice"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 shadow-lg transition hover:bg-slate-100"
              >
                ▶ Start CBT Test →
              </a>

            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm sm:grid-cols-4">

              <div>
                <div className="text-2xl">🎓</div>
                <p className="mt-1 font-semibold">100% Free</p>
              </div>

              <div>
                <div className="text-2xl">📄</div>
                <p className="mt-1 font-semibold">No Login</p>
              </div>

              <div>
                <div className="text-2xl">👥</div>
                <p className="mt-1 font-semibold">For Students</p>
              </div>

              <div>
                <div className="text-2xl">⚓</div>
                <p className="mt-1 font-semibold">Study • Practice</p>
              </div>

            </div>

          </div>
        </div>
      </section>
      

      {/* STCW */}
      <section id="stcw" className="bg-slate-50 px-5 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <p className="font-bold text-blue-600">
              STCW BASIC SAFETY TRAINING
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-blue-950">
              📚 STCW Notes
            </h2>

            <p className="mt-2 text-slate-600">
              Study material for STCW basic safety training courses.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {stcwCourses.map((course) => (
              <div
                key={course.code}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-5xl">
                  {course.icon}
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  {course.code}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {course.name}
                </p>

            
  <div className="mt-5 flex flex-col gap-2">
  <Link
    href={`/${course.code.toLowerCase()}`}
    className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
  >
    Study Now →
  </Link>

{(course.code === "PST" ||
  course.code === "FPFF" ||
  course.code === "PSSR" ||
  course.code === "EFA" ||
  course.code === "STSDSD") && (
  <Link
    href={`/${course.code.toLowerCase()}/practice-cbt`}
    className="rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-700"
  >
    Start Practice CBT →
  </Link>
)}
</div>


              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GP RATING */}
      <section id="gp-rating" className="bg-white px-5 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold text-blue-600">
              GENERAL PURPOSE RATING
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
              ⚓ GP Rating Notes
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Build strong fundamentals in seamanship, ship knowledge,
              safety and basic marine engineering.
            </p>

          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">

            {/* GSK */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🚢
              </div>

              <h3 className="mt-4 text-3xl font-extrabold text-blue-950">
                GSK
              </h3>

              <p className="mt-1 font-semibold text-blue-600">
                General Ship Knowledge
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Seamanship basics, ship terminology, ropes and knots,
                deck equipment, navigation, cargo work and essential
                shipboard safety.
              </p>

              <Link
                href="/gsk"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Study GSK →
              </Link>

            </div>

            {/* MEK */}
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                ⚙️
              </div>

              <h3 className="mt-4 text-3xl font-extrabold text-blue-950">
                MEK
              </h3>

              <p className="mt-1 font-semibold text-orange-600">
                Marine Engineering Knowledge
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Marine diesel engines, machinery, valves, pumps,
                maintenance, safe working practices and basic marine
                engineering knowledge.
              </p>

              <Link
                href="/mek"
                className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Study MEK →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" className="bg-slate-50 px-5 py-16">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">

            <div className="text-5xl">
              📝
            </div>

            <h2 className="mt-4 text-2xl font-extrabold text-blue-950">
              MCQ Practice
            </h2>

            <p className="mt-2 text-slate-600">
              Practice important topic-wise multiple choice questions
              for quick revision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href="/gsk/practice-cbt"
                className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
              >
                GSK Practice →
              </Link>

              <Link
                href="/mek/practice-cbt"
                className="rounded-lg bg-white px-5 py-3 font-bold text-blue-700 shadow-sm hover:bg-slate-100"
              >
                MEK Practice →
              </Link>

            </div>

          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <div className="text-5xl">
              🖥️
            </div>

            <h2 className="mt-4 text-2xl font-extrabold text-blue-950">
              CBT Test
            </h2>

            <p className="mt-2 text-slate-600">
              Computer-based practice tests with timer, random questions,
              score and answer review.
            </p>

            <a
              href="#gp-rating"
              className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Start CBT Test →
            </a>

          </div>

        </div>
      </section>

      {/* WHY SEAPREP */}
      <section id="about" className="bg-white px-5 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-950">
              Why SeaPrep Hub?
            </h2>

            <p className="mt-2 text-slate-600">
              Simple maritime learning designed for students.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["📖", "Simple Notes", "Easy language for quick understanding."],
              ["🎨", "Visual Learning", "Colourful and student-friendly material."],
              ["✅", "Practice MCQs", "Revise important questions."],
              ["🖥️", "CBT Practice", "Prepare for computer-based tests."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-blue-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section className="px-5 pb-12">

        <div className="mx-auto max-w-7xl rounded-2xl bg-slate-100 px-6 py-6 text-center">

          <p className="text-lg font-semibold italic text-blue-950">
            ⚓ “Discipline at sea begins with knowledge on shore.”
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Study Today • Safer Tomorrow
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 px-5 py-10 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>
              <h2 className="text-2xl font-extrabold">
                ⚓ SeaPrep Hub
              </h2>

              <p className="mt-2 text-sm text-blue-200">
                Free Maritime Study Portal
              </p>

              <p className="text-sm text-blue-200">
                Learn • Practice • Succeed
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-blue-100">
              <a href="#home">Home</a>
              <a href="#stcw">STCW Notes</a>
              <a href="#gp-rating">GP Rating</a>
              <a href="#practice">MCQ</a>
              <a href="#practice">CBT Test</a>
              <a href="#about">About</a>
            </div>

          </div>

          <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-blue-200">

            <p>
              Educational Resource for Maritime Students
            </p>

            <p className="mt-2 font-semibold text-cyan-300">
              Prepared by: Saurav Kumar Das
            </p>

            <p className="mt-4 text-xs">
              © 2026 SeaPrep Hub. All rights reserved.
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}