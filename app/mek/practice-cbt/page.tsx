"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  topic: string;
};

const QUESTION_COUNT = 50;
const EXAM_TIME = 60 * 60; // 60 minutes

const questionBank: Question[] = [
  // =========================
  // DIESEL ENGINE
  // =========================
  {
    id: 1,
    topic: "Marine Diesel Engine",
    question: "What is the main purpose of a marine diesel engine?",
    options: [
      "To produce mechanical power",
      "To produce fresh water",
      "To cool the engine room",
      "To purify fuel",
    ],
    answer: 0,
  },
  {
    id: 2,
    topic: "Marine Diesel Engine",
    question: "Which stroke draws fresh air into a four-stroke diesel engine?",
    options: [
      "Compression stroke",
      "Power stroke",
      "Suction stroke",
      "Exhaust stroke",
    ],
    answer: 2,
  },
  {
    id: 3,
    topic: "Marine Diesel Engine",
    question: "During which stroke is the air compressed in a four-stroke diesel engine?",
    options: [
      "Suction",
      "Compression",
      "Exhaust",
      "Power",
    ],
    answer: 1,
  },
  {
    id: 4,
    topic: "Marine Diesel Engine",
    question: "What causes ignition of fuel in a diesel engine?",
    options: [
      "Spark plug",
      "High temperature of compressed air",
      "Battery",
      "Cooling water",
    ],
    answer: 1,
  },
  {
    id: 5,
    topic: "Marine Diesel Engine",
    question: "How many crankshaft revolutions complete one four-stroke cycle?",
    options: ["One", "Two", "Three", "Four"],
    answer: 1,
  },
  {
    id: 6,
    topic: "Marine Diesel Engine",
    question: "A two-stroke engine completes one cycle in how many crankshaft revolutions?",
    options: ["One", "Two", "Three", "Four"],
    answer: 0,
  },

  // =========================
  // ENGINE COMPONENTS
  // =========================
  {
    id: 7,
    topic: "Engine Components",
    question: "Which component moves up and down inside the cylinder liner?",
    options: ["Crankshaft", "Piston", "Flywheel", "Camshaft"],
    answer: 1,
  },
  {
    id: 8,
    topic: "Engine Components",
    question: "What connects the piston to the crankshaft?",
    options: [
      "Connecting rod",
      "Cylinder liner",
      "Flywheel",
      "Exhaust valve",
    ],
    answer: 0,
  },
  {
    id: 9,
    topic: "Engine Components",
    question: "What is the main function of piston rings?",
    options: [
      "To drive the fuel pump",
      "To provide sealing and control lubricating oil",
      "To cool sea water",
      "To rotate the camshaft",
    ],
    answer: 1,
  },
  {
    id: 10,
    topic: "Engine Components",
    question: "Which engine component converts reciprocating motion into rotary motion?",
    options: ["Piston ring", "Cylinder head", "Crankshaft", "Injector"],
    answer: 2,
  },
  {
    id: 11,
    topic: "Engine Components",
    question: "What is the function of engine bearings?",
    options: [
      "To support moving shafts and reduce friction",
      "To inject fuel",
      "To cool exhaust gas",
      "To filter fuel",
    ],
    answer: 0,
  },
  {
    id: 12,
    topic: "Engine Components",
    question: "The cylinder liner provides a working surface for which component?",
    options: ["Flywheel", "Piston", "Fuel pump", "Alternator"],
    answer: 1,
  },

  // =========================
  // PUMPS
  // =========================
  {
    id: 13,
    topic: "Pumps",
    question: "What is the purpose of a pump?",
    options: [
      "To move liquid",
      "To generate electricity",
      "To produce compressed air only",
      "To measure temperature",
    ],
    answer: 0,
  },
  {
    id: 14,
    topic: "Pumps",
    question: "What is the main rotating part of a centrifugal pump?",
    options: ["Piston", "Impeller", "Valve seat", "Filter"],
    answer: 1,
  },
  {
    id: 15,
    topic: "Pumps",
    question: "What does priming a centrifugal pump mean?",
    options: [
      "Heating the pump",
      "Filling the pump and suction line with liquid and removing air",
      "Increasing motor speed",
      "Closing all valves",
    ],
    answer: 1,
  },
  {
    id: 16,
    topic: "Pumps",
    question: "Which of the following is a positive displacement pump?",
    options: [
      "Centrifugal pump",
      "Gear pump",
      "Axial fan",
      "Turbocharger",
    ],
    answer: 1,
  },
  {
    id: 17,
    topic: "Pumps",
    question: "A positive displacement pump should normally NOT be operated with:",
    options: [
      "The discharge valve closed",
      "Lubricating oil present",
      "The suction valve open",
      "A relief valve fitted",
    ],
    answer: 0,
  },
  {
    id: 18,
    topic: "Pumps",
    question: "Which is a common sign of pump cavitation?",
    options: [
      "Abnormal noise and vibration",
      "Improved efficiency",
      "Lower electrical voltage only",
      "Cleaner lubricating oil",
    ],
    answer: 0,
  },

  // =========================
  // VALVES
  // =========================
  {
    id: 19,
    topic: "Valves",
    question: "Which valve is commonly suitable for regulating flow?",
    options: [
      "Globe valve",
      "Gate valve",
      "Check valve",
      "Relief valve only",
    ],
    answer: 0,
  },
  {
    id: 20,
    topic: "Valves",
    question: "A gate valve is mainly used for:",
    options: [
      "Isolation",
      "Measuring pressure",
      "Filtering fuel",
      "Generating electricity",
    ],
    answer: 0,
  },
  {
    id: 21,
    topic: "Valves",
    question: "Which valve prevents reverse flow?",
    options: [
      "Gate valve",
      "Globe valve",
      "Check valve",
      "Butterfly valve",
    ],
    answer: 2,
  },
  {
    id: 22,
    topic: "Valves",
    question: "What is the main purpose of a relief valve?",
    options: [
      "To protect against excessive pressure",
      "To increase temperature",
      "To increase fuel viscosity",
      "To measure engine speed",
    ],
    answer: 0,
  },
  {
    id: 23,
    topic: "Valves",
    question: "Which valve commonly uses a rotating disc?",
    options: [
      "Butterfly valve",
      "Globe valve",
      "Needle bearing",
      "Relief valve",
    ],
    answer: 0,
  },
  {
    id: 24,
    topic: "Valves",
    question: "A ball valve is commonly operated by:",
    options: [
      "A quarter turn",
      "Ten complete turns",
      "A piston stroke",
      "An electric fuse",
    ],
    answer: 0,
  },

  // =========================
  // FUEL & LUBRICATION
  // =========================
  {
    id: 25,
    topic: "Fuel & Lubrication",
    question: "What is the purpose of a fuel filter?",
    options: [
      "To remove contamination from fuel",
      "To heat cooling water",
      "To generate electricity",
      "To measure RPM",
    ],
    answer: 0,
  },
  {
    id: 26,
    topic: "Fuel & Lubrication",
    question: "What is the function of a fuel injector?",
    options: [
      "To atomise and inject fuel into the combustion chamber",
      "To pump sea water",
      "To cool bearings",
      "To generate compressed air",
    ],
    answer: 0,
  },
  {
    id: 27,
    topic: "Fuel & Lubrication",
    question: "What is a main function of lubricating oil?",
    options: [
      "Increase friction",
      "Reduce friction and wear",
      "Increase exhaust temperature",
      "Stop cooling-water flow",
    ],
    answer: 1,
  },
  {
    id: 28,
    topic: "Fuel & Lubrication",
    question: "Which component circulates lubricating oil through the system?",
    options: [
      "L.O. pump",
      "Fuel injector",
      "Sea chest",
      "Exhaust valve",
    ],
    answer: 0,
  },
  {
    id: 29,
    topic: "Fuel & Lubrication",
    question: "Low lubricating oil pressure can result in:",
    options: [
      "Serious engine damage",
      "Better lubrication",
      "Improved cooling automatically",
      "Higher battery voltage",
    ],
    answer: 0,
  },
  {
    id: 30,
    topic: "Fuel & Lubrication",
    question: "Oil spilled on the engine-room deck creates which hazard?",
    options: [
      "Only a noise hazard",
      "Fire and slip hazards",
      "Only an electrical advantage",
      "No hazard",
    ],
    answer: 1,
  },

  // =========================
  // COOLING SYSTEM
  // =========================
  {
    id: 31,
    topic: "Cooling System",
    question: "Why does a diesel engine require cooling?",
    options: [
      "To remove unwanted heat",
      "To increase friction",
      "To increase exhaust smoke",
      "To stop lubrication",
    ],
    answer: 0,
  },
  {
    id: 32,
    topic: "Cooling System",
    question: "What is the purpose of a heat exchanger?",
    options: [
      "To transfer heat between fluids",
      "To generate electricity",
      "To inject fuel",
      "To increase engine RPM",
    ],
    answer: 0,
  },
  {
    id: 33,
    topic: "Cooling System",
    question: "What does a sea-water strainer do?",
    options: [
      "Helps prevent debris entering the cooling system",
      "Produces fuel",
      "Measures voltage",
      "Lubricates bearings",
    ],
    answer: 0,
  },
  {
    id: 34,
    topic: "Cooling System",
    question: "What can a blocked sea-water strainer cause?",
    options: [
      "Reduced cooling-water flow",
      "Higher battery capacity",
      "Improved lubrication",
      "Lower fuel consumption automatically",
    ],
    answer: 0,
  },
  {
    id: 35,
    topic: "Cooling System",
    question: "Fresh water in a common engine cooling system normally:",
    options: [
      "Circulates through the engine",
      "Is injected into the cylinder as fuel",
      "Lubricates the crankshaft directly",
      "Operates the electrical switchboard",
    ],
    answer: 0,
  },
  {
    id: 36,
    topic: "Cooling System",
    question: "What should you avoid doing to a hot pressurised cooling system?",
    options: [
      "Opening it suddenly",
      "Monitoring temperature",
      "Checking for leakage visually",
      "Reporting high temperature",
    ],
    answer: 0,
  },

  // =========================
  // ELECTRICAL BASICS
  // =========================
  {
    id: 37,
    topic: "Electrical Basics",
    question: "What is the unit of voltage?",
    options: ["Ampere", "Ohm", "Volt", "Watt-hour only"],
    answer: 2,
  },
  {
    id: 38,
    topic: "Electrical Basics",
    question: "What is the unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Metre"],
    answer: 1,
  },
  {
    id: 39,
    topic: "Electrical Basics",
    question: "What is the unit of electrical resistance?",
    options: ["Ohm", "Ampere", "Volt", "Pascal"],
    answer: 0,
  },
  {
    id: 40,
    topic: "Electrical Basics",
    question: "Which formula represents Ohm's Law?",
    options: ["V = I × R", "V = I + R", "R = V × I only", "P = R ÷ V"],
    answer: 0,
  },
  {
    id: 41,
    topic: "Electrical Basics",
    question: "A battery normally supplies:",
    options: ["DC", "AC only", "Steam", "Compressed air"],
    answer: 0,
  },
  {
    id: 42,
    topic: "Electrical Basics",
    question: "What does an electric motor convert?",
    options: [
      "Electrical energy into mechanical energy",
      "Mechanical energy into electrical energy",
      "Heat into fuel",
      "Water into lubricating oil",
    ],
    answer: 0,
  },

  // =========================
  // ENGINE ROOM SAFETY
  // =========================
  {
    id: 43,
    topic: "Engine Room Safety",
    question: "What should be done with an oil spill in the engine room?",
    options: [
      "Clean it promptly using the proper procedure",
      "Leave it until the next watch",
      "Cover it with paper",
      "Ignore it",
    ],
    answer: 0,
  },
  {
    id: 44,
    topic: "Engine Room Safety",
    question: "Before machinery maintenance, the machinery should be:",
    options: [
      "Safely stopped and isolated as required",
      "Run at maximum speed",
      "Left running unattended",
      "Heated as much as possible",
    ],
    answer: 0,
  },
  {
    id: 45,
    topic: "Engine Room Safety",
    question: "Why are machinery guards fitted?",
    options: [
      "To help protect personnel from moving parts",
      "To increase fuel consumption",
      "To increase noise",
      "To heat the machinery",
    ],
    answer: 0,
  },
  {
    id: 46,
    topic: "Engine Room Safety",
    question: "Emergency escape routes should always be:",
    options: [
      "Clear and accessible",
      "Used for tool storage",
      "Blocked during maintenance",
      "Locked from both sides",
    ],
    answer: 0,
  },

  // =========================
  // TOOLS & MAINTENANCE
  // =========================
  {
    id: 47,
    topic: "Tools & Maintenance",
    question: "Which tool is commonly used for tightening nuts and bolts?",
    options: ["Spanner", "Paint brush", "Thermometer", "Torch only"],
    answer: 0,
  },
  {
    id: 48,
    topic: "Tools & Maintenance",
    question: "Which instrument can accurately measure external and internal dimensions?",
    options: [
      "Vernier caliper",
      "Hammer",
      "Screwdriver",
      "Pipe wrench only",
    ],
    answer: 0,
  },
  {
    id: 49,
    topic: "Tools & Maintenance",
    question: "Preventive maintenance is carried out mainly to:",
    options: [
      "Reduce the chance of equipment failure",
      "Increase machinery damage",
      "Avoid all inspections",
      "Increase oil leakage",
    ],
    answer: 0,
  },
  {
    id: 50,
    topic: "Tools & Maintenance",
    question: "After maintenance, machinery guards should be:",
    options: [
      "Correctly refitted before operation",
      "Thrown away",
      "Left on the workshop floor",
      "Removed permanently",
    ],
    answer: 0,
  },
];

function shuffleQuestions(items: Question[]) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, QUESTION_COUNT);
}

export default function MEKPracticeCBT() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setQuestions(shuffleQuestions(questionBank));
  }, []);

  useEffect(() => {
    if (!started || submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setSubmitted(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, submitted, timeLeft]);

  const selectAnswer = (questionId: number, optionIndex: number) => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return answers[question.id] === question.answer
        ? score + 1
        : score;
    }, 0);
  };

  const handleSubmit = () => {
    const unanswered = questions.length - Object.keys(answers).length;

    const message =
      unanswered > 0
        ? `You still have ${unanswered} unanswered question(s). Submit test anyway?`
        : "Are you sure you want to submit the test?";

    if (window.confirm(message)) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const restartTest = () => {
    setQuestions(shuffleQuestions(questionBank));
    setAnswers({});
    setCurrent(0);
    setTimeLeft(EXAM_TIME);
    setSubmitted(false);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const score = calculateScore();

  const percentage =
    questions.length > 0
      ? Math.round((score / questions.length) * 100)
      : 0;

  const passed = percentage >= 60;

  if (questions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-xl font-bold">
          Loading MEK Practice CBT...
        </p>
      </main>
    );
  }

  // =========================
  // START SCREEN
  // =========================

  if (!started) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              SeaPrep Hub • MEK
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              MEK Practice CBT
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Test your Marine Engineering Knowledge with a
              50-question computer-based practice examination.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-2xl font-extrabold text-blue-950">
              📝 Test Instructions
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Info title="Questions" value="50" />
              <Info title="Time" value="60 Minutes" />
              <Info title="Pass Mark" value="60%" />
              <Info title="Question Type" value="Multiple Choice" />
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <h3 className="font-extrabold text-blue-950">
                Before You Start
              </h3>

              <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                <li>✓ Select one answer for each question.</li>
                <li>✓ You can move between questions using Previous and Next.</li>
                <li>✓ Use the question navigator to jump to any question.</li>
                <li>✓ Questions are shown in random order on each attempt.</li>
                <li>✓ The test will automatically submit when time finishes.</li>
                <li>✓ Your correct answers and mistakes will appear after submission.</li>
              </ul>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-extrabold text-white transition hover:bg-orange-600"
            >
              Start MEK Practice CBT →
            </button>

            <Link
              href="/mek"
              className="mt-4 block text-center font-bold text-blue-900 hover:underline"
            >
              ← Back to MEK Notes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // =========================
  // RESULT + REVIEW
  // =========================

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              MEK Practice CBT
            </p>

            <h1 className="mt-3 text-4xl font-black">
              Test Completed
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Your Score
            </p>

            <p className="mt-3 text-6xl font-black text-blue-950">
              {score}/{questions.length}
            </p>

            <p className="mt-3 text-2xl font-bold text-slate-700">
              {percentage}%
            </p>

            <div
              className={`mx-auto mt-5 inline-block rounded-full px-8 py-3 text-xl font-black ${
                passed
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {passed ? "PASS" : "FAIL"}
            </div>

            <p className="mt-5 text-slate-600">
              Pass mark: 60% • Correct: {score} • Wrong/Unanswered:{" "}
              {questions.length - score}
            </p>

            <button
              onClick={restartTest}
              className="mt-7 rounded-xl bg-orange-500 px-7 py-3 font-bold text-white hover:bg-orange-600"
            >
              Try Again
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-extrabold text-blue-950">
              Answer Review
            </h2>

            <p className="mt-2 text-slate-600">
              Review every question and compare your answer with the correct answer.
            </p>

            <div className="mt-6 space-y-5">
              {questions.map((question, index) => {
                const selected = answers[question.id];
                const correct = selected === question.answer;

                return (
                  <div
                    key={question.id}
                    className={`rounded-2xl border p-6 ${
                      correct
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-black text-blue-950">
                        Question {index + 1}
                      </span>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">
                        {question.topic}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {question.question}
                    </h3>

                    <div className="mt-5 space-y-2">
                      {question.options.map((option, optionIndex) => {
                        const isCorrect =
                          optionIndex === question.answer;

                        const isSelected =
                          optionIndex === selected;

                        let className =
                          "rounded-xl border border-slate-200 bg-white p-3";

                        if (isCorrect) {
                          className =
                            "rounded-xl border border-green-400 bg-green-100 p-3 font-bold text-green-800";
                        } else if (isSelected) {
                          className =
                            "rounded-xl border border-red-400 bg-red-100 p-3 font-bold text-red-800";
                        }

                        return (
                          <div
                            key={option}
                            className={className}
                          >
                            {String.fromCharCode(65 + optionIndex)}.{" "}
                            {option}

                            {isCorrect && (
                              <span className="ml-2">
                                ✓ Correct Answer
                              </span>
                            )}

                            {isSelected && !isCorrect && (
                              <span className="ml-2">
                                ✗ Your Answer
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {selected === undefined && (
                      <p className="mt-4 font-bold text-red-700">
                        You did not answer this question.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/mek"
              className="inline-block rounded-xl bg-blue-950 px-7 py-3 font-bold text-white hover:bg-blue-900"
            >
              ← Back to MEK Notes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // =========================
  // CBT SCREEN
  // =========================

  const question = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <main className="min-h-screen bg-slate-100">
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
              SeaPrep Hub
            </p>

            <h1 className="font-extrabold">
              MEK Practice CBT
            </h1>
          </div>

          <div className="flex gap-3">
            <div className="rounded-xl bg-white/10 px-4 py-2 text-center">
              <p className="text-xs text-slate-300">
                Answered
              </p>

              <p className="font-black">
                {answeredCount}/{questions.length}
              </p>
            </div>

            <div
              className={`rounded-xl px-4 py-2 text-center ${
                timeLeft <= 300
                  ? "bg-red-600"
                  : "bg-orange-500"
              }`}
            >
              <p className="text-xs font-bold">
                Time Left
              </p>

              <p className="font-black">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1fr_300px]">
        {/* QUESTION */}
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-extrabold text-orange-600">
                Question {current + 1} of {questions.length}
              </p>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-900">
                {question.topic}
              </span>
            </div>

            <h2 className="mt-6 text-xl font-extrabold leading-8 text-blue-950 md:text-2xl">
              {question.question}
            </h2>

            <div className="mt-7 space-y-3">
              {question.options.map((option, index) => {
                const selected =
                  answers[question.id] === index;

                return (
                  <button
                    key={option}
                    onClick={() =>
                      selectAnswer(question.id, index)
                    }
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-blue-700 bg-blue-50 ring-2 ring-blue-200"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-black ${
                        selected
                          ? "bg-blue-950 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-semibold text-slate-700">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                onClick={() =>
                  setCurrent((prev) => Math.max(0, prev - 1))
                }
                disabled={current === 0}
                className="rounded-xl border border-blue-950 px-5 py-3 font-bold text-blue-950 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Previous
              </button>

              {current < questions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrent((prev) =>
                      Math.min(questions.length - 1, prev + 1)
                    )
                  }
                  className="rounded-xl bg-blue-950 px-6 py-3 font-bold text-white hover:bg-blue-900"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-extrabold text-white hover:bg-orange-600"
          >
            Submit MEK Practice Test
          </button>
        </div>

        {/* NAVIGATOR */}
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
          <h3 className="text-lg font-extrabold text-blue-950">
            Question Navigator
          </h3>

          <div className="mt-5 grid grid-cols-5 gap-2">
            {questions.map((q, index) => {
              const answered =
                answers[q.id] !== undefined;

              const active = index === current;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrent(index)}
                  className={`h-10 rounded-lg text-sm font-bold ${
                    active
                      ? "bg-orange-500 text-white ring-2 ring-orange-200"
                      : answered
                      ? "bg-green-100 text-green-800"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <Legend
              className="bg-orange-500"
              text="Current Question"
            />

            <Legend
              className="bg-green-100"
              text="Answered"
            />

            <Legend
              className="bg-slate-100"
              text="Not Answered"
            />
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            You can change an answer any time before submitting the test.
          </div>
        </aside>
      </section>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-bold text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-xl font-black text-blue-950">
        {value}
      </p>
    </div>
  );
}

function Legend({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-5 w-5 rounded ${className}`} />
      <span>{text}</span>
    </div>
  );
}