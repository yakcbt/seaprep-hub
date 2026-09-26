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
    question: "What is the general emergency alarm signal on board ship?",
    options: [
      "One long blast",
      "Seven short blasts followed by one long blast",
      "Three short blasts",
      "Continuous ringing only",
    ],
    answer: 1,
  },
  {
    question: "Where is the general alarm system activation point located?",
    options: [
      "Engine room",
      "Galley",
      "Navigation bridge",
      "Steering gear room",
    ],
    answer: 2,
  },
  {
    question: "What should crew members do when the general alarm is sounded?",
    options: [
      "Return to cabin",
      "Proceed to designated muster station",
      "Leave the ship immediately",
      "Go to engine room",
    ],
    answer: 1,
  },
  {
    question: "What informs crew members about their emergency duties?",
    options: [
      "Cargo plan",
      "Muster list",
      "Deck logbook",
      "Engine logbook",
    ],
    answer: 1,
  },
  {
    question: "What is a muster station?",
    options: [
      "Cargo loading point",
      "Designated meeting point during an emergency",
      "Navigation station",
      "Engine control station",
    ],
    answer: 1,
  },
  {
    question: "The Muster List should be ready:",
    options: [
      "After departure",
      "Before the ship proceeds to sea",
      "Only during drills",
      "After an emergency",
    ],
    answer: 1,
  },
  {
    question: "Where may the Muster List be displayed?",
    options: [
      "Bridge only",
      "Engine room only",
      "Cabins only",
      "Conspicuous locations on board",
    ],
    answer: 3,
  },
  {
    question: "Which is an objective of a shipboard emergency plan?",
    options: [
      "Increase cargo quantity",
      "Minimize damage to property and environment",
      "Reduce crew numbers",
      "Increase ship speed",
    ],
    answer: 1,
  },
  {
    question: "Which situation may be included in a contingency plan?",
    options: [
      "Fire",
      "Collision",
      "Grounding",
      "All of these",
    ],
    answer: 3,
  },
  {
    question: "Emergency alarms on ships may be:",
    options: [
      "Audible only",
      "Visual only",
      "Audible and visual",
      "Written only",
    ],
    answer: 2,
  },

  {
    question: "Good shipboard human relationships depend strongly on:",
    options: [
      "Isolation",
      "Teamwork and communication",
      "Competition between crew",
      "Avoiding all communication",
    ],
    answer: 1,
  },
  {
    question: "Discrimination may damage:",
    options: [
      "Team cohesion",
      "Ship paint",
      "Cargo capacity",
      "Propeller speed",
    ],
    answer: 0,
  },
  {
    question: "On multinational ships, what may cause misunderstanding?",
    options: [
      "Cultural bias and language barriers",
      "Correct communication",
      "Team activities",
      "Mutual support",
    ],
    answer: 0,
  },
  {
    question: "Effective leaders should use their authority to:",
    options: [
      "Intimidate crew",
      "Manipulate crew",
      "Guide and protect",
      "Demand personal favours",
    ],
    answer: 2,
  },
  {
    question: "Which can reduce the negative effects of isolation?",
    options: [
      "Avoiding everyone",
      "Social interaction and mutual support",
      "Increasing conflict",
      "Stopping communication",
    ],
    answer: 1,
  },

  {
    question: "Fatigue can impair:",
    options: [
      "Judgment",
      "Ship stability",
      "Radio frequency",
      "Cargo capacity",
    ],
    answer: 0,
  },
  {
    question: "Fatigue may increase:",
    options: [
      "Self-control",
      "Irritability",
      "Rest",
      "Concentration",
    ],
    answer: 1,
  },
  {
    question: "A fatigued person may:",
    options: [
      "Always make better decisions",
      "Misinterpret comments",
      "Never become irritated",
      "Need less sleep",
    ],
    answer: 1,
  },
  {
    question: "A proper sleep routine helps prevent:",
    options: [
      "Fatigue-related behavioural issues",
      "Ship corrosion",
      "Cargo damage only",
      "Propeller vibration",
    ],
    answer: 0,
  },
  {
    question: "Compliance with hours of work and rest is important for:",
    options: [
      "Preventing fatigue",
      "Increasing noise",
      "Reducing accommodation",
      "Increasing cargo",
    ],
    answer: 0,
  },

  {
    question: "MLC stands for:",
    options: [
      "Marine Loading Code",
      "Maritime Labour Convention",
      "Marine Labour Certificate",
      "Maritime Loading Convention",
    ],
    answer: 1,
  },
  {
    question: "The MLC 2006 entered into force on:",
    options: [
      "20 August 2013",
      "1 January 2006",
      "20 August 2006",
      "1 January 2013",
    ],
    answer: 0,
  },
  {
    question: "Under MLC, employment or work on board below what age is prohibited?",
    options: [
      "14 years",
      "15 years",
      "16 years",
      "18 years",
    ],
    answer: 2,
  },
  {
    question: "Night work is generally prohibited for seafarers under:",
    options: [
      "16 years",
      "17 years",
      "18 years",
      "21 years",
    ],
    answer: 2,
  },
  {
    question: "A seafarer must hold what before beginning work on a ship?",
    options: [
      "Valid medical certificate",
      "Driving licence",
      "Tourist visa only",
      "Cargo certificate",
    ],
    answer: 0,
  },
  {
    question: "The normal maximum validity of a seafarer's medical certificate is:",
    options: [
      "6 months",
      "1 year",
      "2 years",
      "5 years",
    ],
    answer: 2,
  },
  {
    question: "For a seafarer under 18, maximum medical certificate validity is:",
    options: [
      "6 months",
      "1 year",
      "2 years",
      "5 years",
    ],
    answer: 1,
  },
  {
    question: "A seafarer should be allowed to review the employment agreement:",
    options: [
      "After signing only",
      "Before signing",
      "Only after joining ship",
      "Only after completing voyage",
    ],
    answer: 1,
  },
  {
    question: "Seafarers should be paid:",
    options: [
      "Only after leaving ship",
      "Regularly and in full",
      "Only once a year",
      "Only when requested",
    ],
    answer: 1,
  },
  {
    question: "The minimum annual leave with pay stated in the handout is:",
    options: [
      "1 day per month",
      "2 days per month",
      "2.5 calendar days per month",
      "5 days per month",
    ],
    answer: 2,
  },

  {
    question: "Seafarers have a right to:",
    options: [
      "Repatriation under specified circumstances",
      "Ignore employment agreements",
      "Ignore safety rules",
      "Refuse every shipboard duty",
    ],
    answer: 0,
  },
  {
    question: "Shipboard accommodation should promote:",
    options: [
      "Health and well-being",
      "Cargo loading",
      "Engine power",
      "Fuel consumption",
    ],
    answer: 0,
  },
  {
    question: "Food and drinking water on board should be:",
    options: [
      "Limited regardless of voyage",
      "Of appropriate quality, nutritional value and quantity",
      "Provided only to officers",
      "Purchased by crew every day",
    ],
    answer: 1,
  },
  {
    question: "Food during the period of engagement should be:",
    options: [
      "Provided free of charge",
      "Paid for daily by seafarer",
      "Available only in port",
      "Provided only to officers",
    ],
    answer: 0,
  },
  {
    question: "Ships should carry a medicine chest and:",
    options: [
      "Medical equipment and medical guide",
      "Only cargo documents",
      "Only navigation charts",
      "Only spare ropes",
    ],
    answer: 0,
  },

  {
    question: "Violence is the intentional use of:",
    options: [
      "Physical force or power",
      "Navigation equipment",
      "Cargo equipment",
      "Communication equipment",
    ],
    answer: 0,
  },
  {
    question: "Harassment is unwanted conduct that may cause:",
    options: [
      "Humiliation, offense or distress",
      "Improved morale",
      "Better teamwork",
      "More rest",
    ],
    answer: 0,
  },
  {
    question: "Bullying is:",
    options: [
      "Repeated unreasonable behaviour creating a risk to health and safety",
      "Normal shipboard training",
      "An emergency drill",
      "A navigation procedure",
    ],
    answer: 0,
  },
  {
    question: "Sexual harassment includes:",
    options: [
      "Unwelcome sexual advances",
      "Normal safety instruction",
      "Emergency communication",
      "Muster drill",
    ],
    answer: 0,
  },
  {
    question: "Sexual assault involves:",
    options: [
      "Non-consensual sexual contact or behaviour",
      "Normal disagreement",
      "Safety training",
      "Work allocation",
    ],
    answer: 0,
  },

  {
    question: "The low level of the continuum of harm may include:",
    options: [
      "Teasing, jokes or exclusion",
      "Physical assault only",
      "Fire fighting",
      "Emergency drills",
    ],
    answer: 0,
  },
  {
    question: "The severe end of the continuum of harm may include:",
    options: [
      "Normal conversation",
      "Physical violence or sexual assault",
      "Safety meetings",
      "Team activities",
    ],
    answer: 1,
  },
  {
    question: "Early recognition of harassment is important because it can:",
    options: [
      "Prevent escalation",
      "Increase conflict",
      "Stop emergency alarms",
      "Increase fatigue",
    ],
    answer: 0,
  },
  {
    question: "Which shipboard factor may contribute to conflict?",
    options: [
      "Confined spaces",
      "Multicultural crews",
      "Long working hours",
      "All of these",
    ],
    answer: 3,
  },
  {
    question: "The ship should maintain what approach to violence and harassment?",
    options: [
      "Ignore minor incidents",
      "Zero-tolerance policy",
      "No reporting system",
      "Private retaliation",
    ],
    answer: 1,
  },

  {
    question: "Physical violence may include:",
    options: [
      "Hitting, pushing, slapping or kicking",
      "Reading a safety notice",
      "Giving normal instructions",
      "Attending a drill",
    ],
    answer: 0,
  },
  {
    question: "A warning sign of violence or harassment may be:",
    options: [
      "Declining morale",
      "Increased tension",
      "Frequent transfer requests",
      "All of these",
    ],
    answer: 3,
  },
  {
    question: "If direct intervention is safe, it should be:",
    options: [
      "Calm and professional",
      "Aggressive",
      "Violent",
      "Secretive",
    ],
    answer: 0,
  },
  {
    question: "If a harassment situation appears threatening, a seafarer should:",
    options: [
      "Ignore it",
      "Contact an officer or responsible person",
      "Start a fight",
      "Spread rumours",
    ],
    answer: 1,
  },
  {
    question: "An internal harassment report may be made to:",
    options: [
      "Immediate supervisor, Safety Officer or DPA",
      "Passengers only",
      "Port shop",
      "Cargo receiver only",
    ],
    answer: 0,
  },
  {
    question: "A key principle of trauma-informed response is:",
    options: [
      "Safety",
      "Retaliation",
      "Public accusation",
      "Pressure",
    ],
    answer: 0,
  },
];

const QUESTIONS_PER_TEST = 30;
const TEST_TIME = 30 * 60;
const PASS_PERCENTAGE = 60;

function shuffleQuestions(items: Question[]) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, QUESTIONS_PER_TEST);
}

export default function PSSRPracticeCBT() {
  const questions = useMemo(() => shuffleQuestions(questionBank), []);

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS_PER_TEST).fill(null)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TEST_TIME);
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / QUESTIONS_PER_TEST) * 100);
  const passed = percentage >= PASS_PERCENTAGE;

  function submitTest() {
    if (submitted) return;

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft, submitted]);

  function selectAnswer(optionIndex: number) {
    if (submitted) return;

    setAnswers((previous) => {
      const updated = [...previous];
      updated[currentQuestion] = optionIndex;
      return updated;
    });
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  const answeredCount = answers.filter(
    (answer) => answer !== null
  ).length;

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-cyan-900 text-white">
          <div className="mx-auto max-w-5xl px-5 py-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
              PSSR Practice CBT
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Test Result
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">
          <section className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="text-5xl">
              {passed ? "🎉" : "📘"}
            </div>

            <h2
              className={`mt-3 text-3xl font-bold ${
                passed ? "text-green-700" : "text-red-700"
              }`}
            >
              {passed ? "PASS" : "FAIL"}
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  SCORE
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {score} / {QUESTIONS_PER_TEST}
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  PERCENTAGE
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {percentage}%
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  PASS MARK
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  60%
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-900">
              📝 Answer Review
            </h2>

            <div className="mt-6 space-y-5">
              {questions.map((question, questionIndex) => {
                const selected = answers[questionIndex];
                const isCorrect = selected === question.answer;

                return (
                  <div
                    key={questionIndex}
                    className={`rounded-xl border p-5 ${
                      isCorrect
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <p className="font-bold text-slate-900">
                      {questionIndex + 1}. {question.question}
                    </p>

                    <p className="mt-3 text-sm text-slate-700">
                      Your Answer:{" "}
                      <span
                        className={
                          isCorrect
                            ? "font-bold text-green-700"
                            : "font-bold text-red-700"
                        }
                      >
                        {selected !== null
                          ? question.options[selected]
                          : "Not Answered"}
                      </span>
                    </p>

                    {!isCorrect && (
                      <p className="mt-2 text-sm text-slate-700">
                        Correct Answer:{" "}
                        <span className="font-bold text-green-700">
                          {question.options[question.answer]}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/pssr"
              className="rounded-xl border border-cyan-200 bg-white px-6 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
            >
              ← Back to PSSR
            </Link>

            <Link
              href="/efa"
              className="rounded-xl bg-cyan-900 px-6 py-3 text-center font-semibold text-white hover:bg-cyan-800"
            >
              Next Course: EFA →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
                SeaPrep Hub
              </p>

              <h1 className="mt-1 text-2xl font-bold">
                PSSR Practice CBT
              </h1>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3 text-center">
              <p className="text-xs font-semibold uppercase text-cyan-200">
                Time Remaining
              </p>
              <p
                className={`text-2xl font-bold ${
                  timeLeft <= 300 ? "text-red-300" : "text-white"
                }`}
              >
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

          {/* QUESTION AREA */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-cyan-900">
                Question {currentQuestion + 1} of {QUESTIONS_PER_TEST}
              </p>

              <p className="text-sm font-semibold text-slate-500">
                Answered: {answeredCount}/{QUESTIONS_PER_TEST}
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-cyan-700 transition-all"
                style={{
                  width: `${
                    ((currentQuestion + 1) / QUESTIONS_PER_TEST) * 100
                  }%`,
                }}
              />
            </div>

            <h2 className="mt-7 text-xl font-bold leading-8 text-slate-900">
              {currentQuestion + 1}. {question.question}
            </h2>

            <div className="mt-6 space-y-3">
              {question.options.map((option, optionIndex) => {
                const selected =
                  answers[currentQuestion] === optionIndex;

                return (
                  <button
                    key={optionIndex}
                    type="button"
                    onClick={() => selectAnswer(optionIndex)}
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                      selected
                        ? "border-cyan-700 bg-cyan-50 ring-2 ring-cyan-100"
                        : "border-slate-200 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${
                        selected
                          ? "bg-cyan-800 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>

                    <span className="pt-1 font-medium text-slate-700">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  setCurrentQuestion((previous) =>
                    Math.max(previous - 1, 0)
                  )
                }
                disabled={currentQuestion === 0}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Previous
              </button>

              {currentQuestion < QUESTIONS_PER_TEST - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestion((previous) =>
                      Math.min(
                        previous + 1,
                        QUESTIONS_PER_TEST - 1
                      )
                    )
                  }
                  className="rounded-xl bg-cyan-900 px-5 py-3 font-semibold text-white hover:bg-cyan-800"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitTest}
                  className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                >
                  Submit Test
                </button>
              )}
            </div>
          </section>

          {/* QUESTION NAVIGATOR */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm lg:sticky lg:top-5">
            <h2 className="font-bold text-slate-900">
              Question Navigator
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {answeredCount} of {QUESTIONS_PER_TEST} answered
            </p>

            <div className="mt-5 grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const answered = answers[index] !== null;
                const active = currentQuestion === index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentQuestion(index)}
                    className={`flex h-10 items-center justify-center rounded-lg text-sm font-bold transition ${
                      active
                        ? "bg-cyan-900 text-white ring-2 ring-cyan-300"
                        : answered
                        ? "bg-green-100 text-green-800"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-cyan-900" />
                Current Question
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-green-100" />
                Answered
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-slate-100" />
                Not Answered
              </div>
            </div>

            <button
              type="button"
              onClick={submitTest}
              className="mt-6 w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white hover:bg-green-800"
            >
              Submit Test
            </button>

            <Link
              href="/pssr"
              className="mt-3 block text-center text-sm font-semibold text-cyan-800 hover:underline"
            >
              ← Back to PSSR
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}