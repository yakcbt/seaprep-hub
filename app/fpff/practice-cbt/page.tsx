"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const questionBank: Question[] = [
  {
    question: "Which three elements form the fire triangle?",
    options: [
      "Fuel, Heat and Oxygen",
      "Fuel, Water and Air",
      "Heat, Foam and Oxygen",
      "Fuel, CO₂ and Heat",
    ],
    answer: 0,
  },
  {
    question: "What percentage of oxygen by volume is present in air?",
    options: ["15%", "18%", "21%", "25%"],
    answer: 2,
  },
  {
    question: "Removing air from a fire is called:",
    options: ["Cooling", "Starving", "Smothering", "Heating"],
    answer: 2,
  },
  {
    question: "Removing heat from a fire is called:",
    options: ["Cooling", "Smothering", "Starving", "Inhibiting"],
    answer: 0,
  },
  {
    question: "Removing burning material from the surroundings is called:",
    options: ["Cooling", "Starving", "Smothering", "Ventilation"],
    answer: 1,
  },
  {
    question: "Which is listed as a source of heat / ignition?",
    options: [
      "Chemical source",
      "Electrical source",
      "Mechanical source",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Fuel flowing through a pipe may generate:",
    options: [
      "Static electricity",
      "Fresh water",
      "Steam only",
      "Carbon dioxide",
    ],
    answer: 0,
  },
  {
    question: "The main biological source of ignition mentioned in the handout is:",
    options: [
      "Sea water",
      "Ship's personnel",
      "Cargo hold",
      "Fire pump",
    ],
    answer: 1,
  },
  {
    question: "What is the best approach to fire safety according to the handout?",
    options: [
      "Fight every fire with water",
      "Prevention is always better than cure",
      "Wait for shore assistance",
      "Open all ventilation",
    ],
    answer: 1,
  },
  {
    question: "Fire drills should be conducted:",
    options: [
      "Only after an accident",
      "At regular intervals",
      "Only in port",
      "Only once a year",
    ],
    answer: 1,
  },
  {
    question: "A fire patrol is mainly maintained to:",
    options: [
      "Prepare food",
      "Identify fire hazards",
      "Operate the main engine",
      "Check cargo documents",
    ],
    answer: 1,
  },
  {
    question: "Which is a common fire hazard in an engine room?",
    options: [
      "Oil leakage onto hot surfaces",
      "Fresh drinking water",
      "Clean steel plates",
      "Navigation charts",
    ],
    answer: 0,
  },
  {
    question: "The fire alarm described in the handout is:",
    options: [
      "Continuous ringing of ship's bell",
      "One short blast",
      "Two short blasts",
      "One long whistle only",
    ],
    answer: 0,
  },
  {
    question: "Who is overall in charge during a shipboard fire emergency?",
    options: [
      "Chief Cook",
      "Master",
      "Bosun",
      "Electrician",
    ],
    answer: 1,
  },
  {
    question: "Which location is the controlling station during a shipboard fire emergency?",
    options: [
      "Galley",
      "Bridge",
      "Paint store",
      "Bosun store",
    ],
    answer: 1,
  },
  {
    question: "Which team is the first to tackle the emergency?",
    options: [
      "Emergency Team",
      "First Aid Team",
      "Technical Team",
      "Support Team",
    ],
    answer: 0,
  },
  {
    question: "A fire control plan displays:",
    options: [
      "Fire protection facilities",
      "Crew salaries",
      "Cargo invoices",
      "Food menu",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a fire detector?",
    options: [
      "Smoke detector",
      "Heat sensor",
      "Flame detector",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "A smoke detector in the handout works using:",
    options: [
      "Photo-electric cell",
      "Water pressure",
      "Steam turbine",
      "Fuel pump",
    ],
    answer: 0,
  },
  {
    question: "Which detector responds to flame radiation?",
    options: [
      "Smoke detector",
      "Flame detector",
      "Pressure gauge",
      "Bilge alarm",
    ],
    answer: 1,
  },
  {
    question: "Class A fire mainly involves:",
    options: [
      "Solid combustible materials",
      "Flammable gases only",
      "Metals only",
      "Electrical wiring only",
    ],
    answer: 0,
  },
  {
    question: "Which extinguishing medium is associated with cooling?",
    options: ["Water", "CO₂", "Foam only", "Halon only"],
    answer: 0,
  },
  {
    question: "Foam mainly extinguishes fire by:",
    options: ["Heating", "Smothering", "Sparking", "Ventilation"],
    answer: 1,
  },
  {
    question: "Before fighting an electrical equipment fire, the first action should be:",
    options: [
      "Apply water jet",
      "De-energize the equipment",
      "Open ventilation",
      "Add fuel",
    ],
    answer: 1,
  },
  {
    question: "CO₂ is particularly useful around electrical equipment because it is:",
    options: [
      "A conductor",
      "Non-conducting",
      "A fuel",
      "A metal powder",
    ],
    answer: 1,
  },
  {
    question: "A Class divisions are capable of preventing passage of smoke and flame for:",
    options: ["15 minutes", "30 minutes", "1 hour", "2 hours"],
    answer: 2,
  },
  {
    question: "B Class divisions prevent passage of flame for the first:",
    options: ["10 minutes", "20 minutes", "30 minutes", "60 minutes"],
    answer: 2,
  },
  {
    question: "Portable fire extinguishers are mainly intended for:",
    options: [
      "Early stages of a fire",
      "Abandoning ship",
      "Navigation",
      "Cargo loading",
    ],
    answer: 0,
  },
  {
    question: "The CABA full charge stated in the handout is:",
    options: ["50 bar", "100 bar", "150 bar", "200 bar"],
    answer: 3,
  },
  {
    question: "The CABA warning whistle stated in the handout operates at:",
    options: ["25 bar", "50 bar", "100 bar", "150 bar"],
    answer: 1,
  },
  {
    question: "According to the earlier handout section, approximately how much time remains at the 50 bar warning?",
    options: ["2 minutes", "5 minutes", "8 minutes", "15 minutes"],
    answer: 2,
  },
  {
    question: "ELSA is primarily used for:",
    options: [
      "Fire fighting",
      "Emergency escape",
      "Cargo loading",
      "Welding",
    ],
    answer: 1,
  },
  {
    question: "PASS stands for:",
    options: [
      "Personal Alert Safety System",
      "Portable Air Supply System",
      "Personal Alarm Smoke Sensor",
      "Pressure Air Safety Set",
    ],
    answer: 0,
  },
  {
    question: "Air cylinders mentioned in Chapter 15 must be hydrostatically tested every:",
    options: ["1 year", "2 years", "5 years", "10 years"],
    answer: 2,
  },
  {
    question: "Which cylinder sizes are listed for open-circuit SCBA?",
    options: [
      "2 L, 3 L and 4 L",
      "4 L, 6 L and 6.8 L",
      "5 L, 10 L and 15 L",
      "6 L, 8 L and 12 L",
    ],
    answer: 1,
  },
  {
    question: "What is the SCBA duration formula given in the handout?",
    options: [
      "(Volume × Pressure ÷ 40) − 10",
      "Volume + Pressure × 10",
      "Pressure ÷ Volume",
      "Volume × 10",
    ],
    answer: 0,
  },
  {
    question: "A 6 litre cylinder at 300 bar gives what working duration using the handout formula?",
    options: ["25 minutes", "30 minutes", "35 minutes", "45 minutes"],
    answer: 2,
  },
  {
    question: "The international shore coupling internal diameter stated in the handout is:",
    options: ["50 mm", "64 mm", "100 mm", "178 mm"],
    answer: 1,
  },
  {
    question: "The outside diameter of the international shore coupling stated in the handout is:",
    options: ["64 mm", "100 mm", "150 mm", "178 mm"],
    answer: 3,
  },
  {
    question: "Before operating a CO₂ flooding system, personnel should:",
    options: [
      "Remain inside the compartment",
      "Evacuate the compartment",
      "Start ventilation",
      "Open all doors",
    ],
    answer: 1,
  },
  {
    question: "Before releasing CO₂, ventilation should be:",
    options: ["Started", "Stopped", "Increased", "Ignored"],
    answer: 1,
  },
  {
    question: "Excess fire-fighting water inside a ship may affect:",
    options: [
      "Ship stability",
      "Compass colour",
      "Radio frequency",
      "Ship's name",
    ],
    answer: 0,
  },
  {
    question: "Smothering-effect fixed systems listed in the handout include:",
    options: [
      "CO₂ and foam",
      "Sprinkler only",
      "Water jet only",
      "Sand only",
    ],
    answer: 0,
  },
  {
    question: "Cooling-effect fixed systems include:",
    options: [
      "Sprinklers / pressure spray",
      "Halon only",
      "DCP only",
      "CO₂ only",
    ],
    answer: 0,
  },
  {
    question: "Inhibitor-effect systems include:",
    options: [
      "Halon and powders",
      "Water and foam",
      "Sand and water",
      "Steam only",
    ],
    answer: 0,
  },
  {
    question: "During a fire drill, the handout states that how many fire hoses/nozzles should be rigged?",
    options: ["One", "Two", "Three", "Four"],
    answer: 1,
  },
  {
    question: "Which equipment should be checked during a fire drill?",
    options: [
      "Fireman's outfit and rescue equipment",
      "Only galley utensils",
      "Only cargo documents",
      "Only navigation lights",
    ],
    answer: 0,
  },
  {
    question: "One pull on the CABA lifeline means:",
    options: [
      "How are you? / I am fine",
      "Move ahead",
      "Come out immediately",
      "Time is over",
    ],
    answer: 0,
  },
  {
    question: "Two pulls by the CABA wearer mean:",
    options: [
      "I want to move ahead — slack the line",
      "I am injured",
      "Fire is extinguished",
      "Start the pump",
    ],
    answer: 0,
  },
  {
    question: "Continuous pulling of the lifeline indicates:",
    options: [
      "Normal condition",
      "Emergency",
      "Move ahead slowly",
      "Cylinder is full",
    ],
    answer: 1,
  },
];

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function shuffleQuestionOptions(question: Question): Question {
  const correctAnswer = question.options[question.answer];

  const options = shuffle(question.options);

  return {
    ...question,
    options,
    answer: options.indexOf(correctAnswer),
  };
}


export default function FPFFPracticeCBT() {
  const [mounted, setMounted] = useState(false);
  
const questions = useMemo(
  () => shuffle(questionBank).slice(0, 30).map(shuffleQuestionOptions),
  []
);

useEffect(() => {
  setMounted(true);
}, []);

  


  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(30).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
const [candidateName, setCandidateName] = useState("");
const [rollNo, setRollNo] = useState("");
const [testStarted, setTestStarted] = useState(false);

const [timeLeft, setTimeLeft] = useState(30 * 60);

useEffect(() => {
  if (!testStarted || submitted) return;

  if (timeLeft <= 0) {
    setSubmitted(true);
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((time) => Math.max(0, time - 1));
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, submitted, testStarted]);

  const selectAnswer = (index: number) => {
    if (submitted) return;

    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const score = questions.reduce((total, q, index) => {
    return total + (answers[index] === q.answer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 60;
const saveResult = async () => {
  try {
    const response = await fetch("/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidate_name: candidateName.trim(),
        roll_no: rollNo.trim(),
        course: "FPFF",
        score: score,
        total_questions: questions.length,
      }),
    });

    if (!response.ok) {
      throw new Error("Result save failed");
    }

    console.log("FPFF result saved successfully");
  } catch (error) {
    console.error("FPFF result saving error:", error);
  }
};

useEffect(() => {
  if (!submitted) return;

  void saveResult();
}, [submitted]);
const startTest = () => {
  if (!candidateName.trim() || !rollNo.trim()) {
    alert("Please enter Candidate Name and Roll No.");
    return;
  }

  setTestStarted(true);
};

  const submitTest = () => {
    if (!confirm("Are you sure you want to submit the test?")) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
if (!mounted) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p>Loading Practice CBT...</p>
    </main>
  );
}

if (!testStarted) {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-900 text-center">
          FPFF Practice CBT
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Enter your details to start the examination
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            startTest();
          }}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Candidate Name"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Roll No."
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-900 p-3 font-semibold text-white"
          >
            Start CBT
          </button>
        </form>
      </div>
    </main>
  );
}

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              FPFF Practice CBT
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Test Result
            </h1>
<div className="mt-4 rounded-lg bg-blue-50 p-4 text-left">
  <p className="font-semibold text-gray-800">
    Candidate Name: {candidateName}
  </p>
  <p className="font-semibold text-gray-800">
    Roll No: {rollNo}
  </p>
</div>
            <div className="mt-6 text-6xl font-bold text-red-900">
              {score}/{questions.length}
            </div>

            <p className="mt-2 text-xl font-semibold text-slate-600">
              {percentage}%
            </p>

            <div
              className={`mx-auto mt-5 max-w-xs rounded-xl p-4 text-2xl font-bold ${
                passed
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {passed ? "PASS" : "FAIL"}
            </div>

            <p className="mt-4 text-slate-600">
              Passing mark: 60%
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-slate-900">
            Answer Review
          </h2>

          <div className="mt-5 space-y-4">
            {questions.map((q, index) => {
              const correct = answers[index] === q.answer;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    correct
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="font-bold text-slate-900">
                    {index + 1}. {q.question}
                  </p>

                  <p className="mt-3 text-sm text-slate-700">
                    Your Answer:{" "}
                    <strong>
                      {answers[index] === null
                        ? "Not Answered"
                        : q.options[answers[index] as number]}
                    </strong>
                  </p>

                  <p className="mt-1 text-sm font-semibold text-green-800">
                    Correct Answer: {q.options[q.answer]}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/fpff"
              className="rounded-xl border border-red-200 bg-white px-6 py-3 text-center font-semibold text-red-800"
            >
              ← FPFF Topics
            </Link>

            <Link
              href="/"
              className="rounded-xl bg-red-900 px-6 py-3 text-center font-semibold text-white"
            >
              SeaPrep Hub Home
            </Link>
          </div>

        </div>
      </main>
    );
  }

  const q = questions[current];
  const answered = answers.filter((a) => a !== null).length;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            SeaPrep Hub • FPFF
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Practice CBT
          </h1>

          <p className="mt-2 text-red-100">
            30 Random Questions • Pass Mark 60%
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* PROGRESS */}
        <div className="mb-5 grid gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">Question</p>
            <p className="text-xl font-bold text-red-900">
              {current + 1} / {questions.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">Answered</p>
            <p className="text-xl font-bold text-green-700">
              {answered}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">Remaining</p>
            <p className="text-xl font-bold text-orange-700">
              {questions.length - answered}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
  <p className="text-sm text-slate-500">Time Left</p>
  <p className="text-xl font-bold text-blue-900">
    {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
    {String(timeLeft % 60).padStart(2, "0")}
  </p>
</div>
        </div>

        {/* QUESTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-red-600">
            QUESTION {current + 1}
          </p>

          <h2 className="mt-2 text-xl font-bold leading-8 text-slate-900">
            {q.question}
          </h2>

          <div className="mt-6 space-y-3">
            {q.options.map((option, index) => {
              const selected = answers[current] === index;

              return (
                <button
                  key={option}
                  onClick={() => selectAnswer(index)}
                  className={`w-full rounded-xl border p-4 text-left font-semibold transition ${
                    selected
                      ? "border-red-700 bg-red-50 text-red-900"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="mt-5 flex gap-3">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setCurrent((c) => Math.min(questions.length - 1, c + 1))
            }
            disabled={current === questions.length - 1}
            className="flex-1 rounded-xl bg-red-900 px-4 py-3 font-semibold text-white disabled:opacity-40"
          >
            Next →
          </button>
        </div>

        {/* QUESTION NAVIGATOR */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="font-bold text-slate-900">
            Question Navigator
          </h3>

          <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-10 rounded-lg font-bold ${
                  current === index
                    ? "bg-red-900 text-white"
                    : answers[index] !== null
                    ? "bg-green-100 text-green-800"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>

        {/* SUBMIT */}
        <div className="mt-6">
          <button
            onClick={submitTest}
            className="w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-bold text-white hover:bg-green-800"
          >
            Submit Practice Test
          </button>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/fpff"
            className="font-semibold text-red-800 hover:underline"
          >
            ← Back to FPFF Topics
          </Link>
        </div>

      </div>
    </main>
  );
}