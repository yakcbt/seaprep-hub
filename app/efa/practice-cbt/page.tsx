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
    question: "What is the main purpose of First Aid?",
    options: [
      "To replace medical treatment",
      "To provide immediate assistance before medical help is available",
      "To perform surgery",
      "To prescribe medicines",
    ],
    answer: 1,
  },
  {
    question: "Which is an aim of First Aid?",
    options: [
      "To delay treatment",
      "To save life",
      "To increase pain",
      "To avoid medical care",
    ],
    answer: 1,
  },
  {
    question: "A good First Aider should be:",
    options: [
      "Panic-stricken",
      "A good observer",
      "Slow to act",
      "Unable to control a crowd",
    ],
    answer: 1,
  },
  {
    question: "Tight clothing around the neck and waist should be:",
    options: ["Tightened", "Removed completely", "Loosened", "Ignored"],
    answer: 2,
  },
  {
    question: "Severe bleeding should be controlled by:",
    options: [
      "Giving food",
      "Applying firm pressure",
      "Making the casualty walk",
      "Giving alcohol",
    ],
    answer: 1,
  },
  {
    question: "How many bones make up the vertebral column according to the handout?",
    options: ["23", "26", "33", "40"],
    answer: 2,
  },
  {
    question: "How many cervical vertebrae are there?",
    options: ["5", "7", "12", "14"],
    answer: 1,
  },
  {
    question: "How many pairs of ribs are present?",
    options: ["10", "11", "12", "14"],
    answer: 2,
  },
  {
    question: "Which type of muscle is the heart muscle?",
    options: ["Smooth only", "Cardiac", "Voluntary", "Skeletal"],
    answer: 1,
  },
  {
    question: "Which organ is described as the master organ?",
    options: ["Heart", "Liver", "Brain", "Kidney"],
    answer: 2,
  },
  {
    question: "How many chambers does the heart have?",
    options: ["2", "3", "4", "5"],
    answer: 2,
  },
  {
    question: "Normal adult pulse rate stated in the handout is:",
    options: [
      "20–30 per minute",
      "40–50 per minute",
      "70–80 per minute",
      "120–140 per minute",
    ],
    answer: 2,
  },
  {
    question: "Normal adult respiratory rate stated in the handout is:",
    options: [
      "4–8 per minute",
      "8–10 per minute",
      "16–20 per minute",
      "30–40 per minute",
    ],
    answer: 2,
  },
  {
    question: "The recovery position is used for a casualty who is:",
    options: [
      "Conscious and walking",
      "Unconscious but breathing and has a heartbeat",
      "Not breathing",
      "Standing normally",
    ],
    answer: 1,
  },
  {
    question: "One advantage of the recovery position is that it:",
    options: [
      "Blocks the airway",
      "Maintains an open airway",
      "Stops the heartbeat",
      "Prevents circulation",
    ],
    answer: 1,
  },
  {
    question: "Fowler's position is used for a casualty with:",
    options: [
      "Difficulty in breathing",
      "Burns of the back only",
      "Normal breathing",
      "Minor finger injury",
    ],
    answer: 0,
  },
  {
    question: "Prone position is described in the handout for:",
    options: [
      "Burns of the back",
      "A sprained ankle",
      "Minor bleeding",
      "Normal sleep",
    ],
    answer: 0,
  },
  {
    question: "Unconsciousness means:",
    options: [
      "Complete loss of consciousness",
      "Normal sleep only",
      "Normal alertness",
      "Increased appetite",
    ],
    answer: 0,
  },
  {
    question: "An unconscious casualty should be given food or drink:",
    options: ["Immediately", "Only water", "No", "Only hot drinks"],
    answer: 2,
  },
  {
    question: "If breathing has stopped, the handout directs the First Aider to:",
    options: [
      "Make the casualty walk",
      "Start artificial respiration",
      "Give food",
      "Wait for several hours",
    ],
    answer: 1,
  },
  {
    question: "ABC of CPR stands for:",
    options: [
      "Airway, Breathing, Circulation",
      "Air, Blood, Chest",
      "Alert, Breathing, Control",
      "Airway, Blood, Casualty",
    ],
    answer: 0,
  },
  {
    question: "In ABC, the letter A stands for:",
    options: ["Alert", "Airway clearance", "Artery", "Assessment only"],
    answer: 1,
  },
  {
    question: "In ABC, the letter B stands for:",
    options: ["Blood", "Burn", "Breathing", "Bandage"],
    answer: 2,
  },
  {
    question: "In ABC, the letter C stands for:",
    options: ["Casualty", "Circulation", "Cold", "Compression only"],
    answer: 1,
  },
  {
    question: "Basic Life Support is indicated in:",
    options: [
      "Airway obstruction",
      "Respiratory arrest",
      "Cardiac arrest",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Approximately how much blood does the human body contain according to the handout?",
    options: ["1 litre", "2 litres", "5 litres", "10 litres"],
    answer: 2,
  },
  {
    question: "Arterial blood is described as:",
    options: ["Bright red", "Dark blue", "Black", "Colourless"],
    answer: 0,
  },
  {
    question: "Venous bleeding is generally:",
    options: [
      "Bright red and spurting",
      "Dark red with a steady flow",
      "Colourless",
      "Always invisible",
    ],
    answer: 1,
  },
  {
    question: "Capillary bleeding generally has:",
    options: [
      "Slow but even flow",
      "Strong spurting flow",
      "No blood flow",
      "Only internal bleeding",
    ],
    answer: 0,
  },
  {
    question: "Bleeding from the surface of the body is called:",
    options: [
      "Internal bleeding",
      "External bleeding",
      "Cardiac bleeding",
      "Respiratory bleeding",
    ],
    answer: 1,
  },
  {
    question: "A decrease in blood volume causes:",
    options: [
      "Increase in blood pressure",
      "Decrease in blood pressure",
      "No change",
      "Increase in body height",
    ],
    answer: 1,
  },
  {
    question: "Which is a method listed in the handout for controlling external bleeding?",
    options: [
      "Direct pressure",
      "Running",
      "Hot-water bottle",
      "Giving alcohol",
    ],
    answer: 0,
  },
  {
    question: "A tourniquet is described as:",
    options: [
      "A strip of rubber or cloth used to control severe bleeding",
      "A medicine",
      "A breathing device",
      "A thermometer",
    ],
    answer: 0,
  },
  {
    question: "The handout limits tourniquet use to:",
    options: [
      "Minor scratches",
      "Severe life-threatening bleeding not controlled by other means",
      "Every wound",
      "Headache",
    ],
    answer: 1,
  },
  {
    question: "Shock is a state of:",
    options: [
      "Adequate tissue perfusion",
      "Inadequate tissue perfusion",
      "Normal circulation only",
      "Increased appetite",
    ],
    answer: 1,
  },
  {
    question: "Which can cause shock?",
    options: [
      "Severe injury",
      "Severe bleeding",
      "Severe burns",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which is a sign or symptom of shock?",
    options: [
      "Pale and cold skin",
      "Very strong normal condition",
      "Increased appetite",
      "Normal skin in every case",
    ],
    answer: 0,
  },
  {
    question: "A casualty in shock should be:",
    options: [
      "Reassured and comforted",
      "Made to run",
      "Given alcohol",
      "Allowed to smoke",
    ],
    answer: 0,
  },
  {
    question: "Which type of shock is associated with severe allergic reaction?",
    options: [
      "Cardiogenic",
      "Anaphylactic",
      "Haemorrhagic",
      "Electric",
    ],
    answer: 1,
  },
  {
    question: "Burns are described in the handout as injuries caused by:",
    options: ["Dry heat", "Moist heat only", "Cold water only", "Fresh air"],
    answer: 0,
  },
  {
    question: "Scalds are caused by:",
    options: ["Moist heat", "Dry sand", "Cold air", "Bandages"],
    answer: 0,
  },
  {
    question: "Which is a major danger of burns?",
    options: ["Shock", "Infection", "Both shock and infection", "None"],
    answer: 2,
  },
  {
    question: "For a burn, the handout states that the affected part should be kept in cold water for:",
    options: ["1–2 minutes", "5 minutes", "15–20 minutes", "2 hours"],
    answer: 2,
  },
  {
    question: "Before helping a casualty still in contact with electricity, first:",
    options: [
      "Pour water on the casualty",
      "Switch off the current",
      "Touch the casualty directly",
      "Give food",
    ],
    answer: 1,
  },
  {
    question: "Before transporting a casualty, severe haemorrhage should be:",
    options: ["Ignored", "Arrested", "Increased", "Left untreated"],
    answer: 1,
  },
  {
    question: "Transportation of a casualty should be:",
    options: [
      "Safe, steady and speedy",
      "Slow and unsafe",
      "Unplanned",
      "Delayed unnecessarily",
    ],
    answer: 0,
  },
  {
    question: "A bandage can be used to:",
    options: [
      "Hold a dressing in place",
      "Support a splint",
      "Support a body part",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Before entering an enclosed space, the handout requires:",
    options: [
      "Risk assessment",
      "No preparation",
      "Immediate entry",
      "Closing all ventilation",
    ],
    answer: 0,
  },
  {
    question: "An enclosed space should be checked using:",
    options: [
      "Oxygen analyzer and gas detector",
      "Compass only",
      "Ruler",
      "Stopwatch only",
    ],
    answer: 0,
  },
  {
    question: "Before enclosed-space entry, a proper ______ should be completed.",
    options: [
      "Permit to work and checklist",
      "Shopping list",
      "Passenger ticket",
      "Cargo invoice",
    ],
    answer: 0,
  },
];

const TOTAL_QUESTIONS = 30;
const TEST_TIME = 30 * 60;
const PASS_MARK = 18;

function shuffleQuestions(array: Question[]) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, TOTAL_QUESTIONS);
}

export default function EFAPracticeCBT() {
  const questions = useMemo(() => shuffleQuestions(questionBank), []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(TOTAL_QUESTIONS).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(TEST_TIME);
  const [submitted, setSubmitted] = useState(false);

 const score: number = answers.reduce<number>((total, answer, index) => {
  if (answer === questions[index]?.answer) {
    return total + 1;
  }

  return total;
}, 0);

  const answeredCount = answers.filter((answer) => answer !== null).length;

  const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);

  const passed = score >= PASS_MARK;

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  function selectAnswer(optionIndex: number) {
    if (submitted) return;

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  }

  function submitTest() {
    const confirmSubmit = window.confirm(
      `You have answered ${answeredCount} of ${TOTAL_QUESTIONS} questions. Submit test?`
    );

    if (confirmSubmit) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-600 p-8 text-center text-white shadow-lg">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-100">
              Elementary First Aid
            </p>

            <h1 className="mt-2 text-3xl font-extrabold">
              Practice CBT Result
            </h1>

            <div className="mx-auto mt-7 grid max-w-2xl gap-4 sm:grid-cols-3">
              <ResultBox label="Score" value={`${score}/30`} />
              <ResultBox label="Percentage" value={`${percentage}%`} />
              <ResultBox
                label="Result"
                value={passed ? "PASS" : "FAIL"}
              />
            </div>

            <div className="mt-6">
              <span
                className={`inline-block rounded-full px-6 py-3 text-lg font-extrabold ${
                  passed
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {passed
                  ? "✓ Congratulations — PASS"
                  : "✕ Result — FAIL"}
              </span>
            </div>

            <p className="mt-4 text-sm text-emerald-50">
              Pass Mark: 18 out of 30 (60%)
            </p>
          </div>

          {/* ANSWER REVIEW */}
          <div className="mt-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Answer Review
            </h2>

            <p className="mt-2 text-slate-600">
              Review your answers and the correct answers below.
            </p>

            <div className="mt-6 space-y-5">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const correct = userAnswer === question.answer;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border p-6 shadow-sm ${
                      correct
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold leading-6 text-slate-900">
                        {index + 1}. {question.question}
                      </h3>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                          correct
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {correct ? "CORRECT" : "WRONG"}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm">
                      <p className="text-slate-700">
                        <strong>Your Answer:</strong>{" "}
                        {userAnswer !== null
                          ? question.options[userAnswer]
                          : "Not Answered"}
                      </p>

                      <p className="font-semibold text-green-700">
                        Correct Answer:{" "}
                        {question.options[question.answer]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/efa"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-center font-bold text-white hover:bg-emerald-700"
            >
              ← Back to EFA
            </Link>

            <Link
              href="/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:bg-slate-100"
            >
              SeaPrep Hub Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-4 py-7 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/efa"
              className="text-sm font-semibold text-emerald-100 hover:text-white"
            >
              ← Back to EFA
            </Link>

            <h1 className="mt-3 text-3xl font-extrabold">
              EFA Practice CBT
            </h1>

            <p className="mt-1 text-sm text-emerald-100">
              30 Random Questions • Pass Mark 60%
            </p>
          </div>

          <div className="rounded-xl bg-white/15 px-6 py-3 text-center backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
              Time Left
            </p>

            <p
              className={`mt-1 text-3xl font-extrabold ${
                timeLeft <= 300 ? "text-yellow-300" : "text-white"
              }`}
            >
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_280px]">

          {/* QUESTION AREA */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
                  Question {currentQuestion + 1} of {TOTAL_QUESTIONS}
                </span>

                <span className="text-sm font-semibold text-slate-500">
                  Answered: {answeredCount}/{TOTAL_QUESTIONS}
                </span>
              </div>

              <h2 className="mt-6 text-xl font-extrabold leading-8 text-slate-900">
                {question.question}
              </h2>

              <div className="mt-6 space-y-3">
                {question.options.map((option, index) => {
                  const selected =
                    answers[currentQuestion] === index;

                  return (
                    <button
                      key={index}
                      onClick={() => selectAnswer(index)}
                      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                        selected
                          ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-100"
                          : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold ${
                          selected
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="font-medium text-slate-700">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* PREVIOUS / NEXT */}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200 pt-6">
                <button
                  onClick={() =>
                    setCurrentQuestion((prev) =>
                      Math.max(0, prev - 1)
                    )
                  }
                  disabled={currentQuestion === 0}
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                </button>

                {currentQuestion < TOTAL_QUESTIONS - 1 ? (
                  <button
                    onClick={() =>
                      setCurrentQuestion((prev) =>
                        Math.min(TOTAL_QUESTIONS - 1, prev + 1)
                      )
                    }
                    className="rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={submitTest}
                    className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
                  >
                    Submit Test
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={submitTest}
              className="mt-5 w-full rounded-xl bg-red-600 px-6 py-4 text-lg font-extrabold text-white shadow-sm hover:bg-red-700"
            >
              Submit Test
            </button>
          </div>

          {/* QUESTION NAVIGATOR */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-5">
            <h3 className="text-lg font-extrabold text-slate-900">
              Question Navigator
            </h3>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const answered = answers[index] !== null;
                const active = currentQuestion === index;

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`flex h-10 items-center justify-center rounded-lg text-sm font-bold transition ${
                      active
                        ? "bg-slate-900 text-white ring-2 ring-slate-300"
                        : answered
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
              <Legend
                className="bg-emerald-600"
                text="Answered"
              />
              <Legend
                className="bg-slate-100"
                text="Not Answered"
              />
              <Legend
                className="bg-slate-900"
                text="Current Question"
              />
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-slate-700">
              <p>
                <strong>Total:</strong> 30 Questions
              </p>
              <p className="mt-1">
                <strong>Time:</strong> 30 Minutes
              </p>
              <p className="mt-1">
                <strong>Pass:</strong> 18/30
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ResultBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/15 p-5 backdrop-blur">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
        {label}
      </p>
      <p className="mt-2 text-2xl font-extrabold">{value}</p>
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
      <span className={`h-4 w-4 rounded ${className}`} />
      <span className="text-slate-600">{text}</span>
    </div>
  );
}