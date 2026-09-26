"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  answer: number;
};

const QUESTION_COUNT = 50;
const EXAM_TIME = 60 * 60;

const questionBank: Question[] = [
  // =========================
  // SHIP TERMINOLOGY
  // =========================
  {
    id: 1,
    topic: "Ship Terminology",
    question: "What is the forward end of a ship called?",
    options: ["Stern", "Bow", "Port", "Starboard"],
    answer: 1,
  },
  {
    id: 2,
    topic: "Ship Terminology",
    question: "What is the after end of a ship called?",
    options: ["Bow", "Bridge", "Stern", "Forecastle"],
    answer: 2,
  },
  {
    id: 3,
    topic: "Ship Terminology",
    question:
      "When looking forward, which side of the ship is called port?",
    options: ["Right side", "Left side", "Upper side", "Lower side"],
    answer: 1,
  },
  {
    id: 4,
    topic: "Ship Terminology",
    question:
      "When looking forward, which side of the ship is called starboard?",
    options: ["Left side", "Right side", "Aft side", "Bottom side"],
    answer: 1,
  },
  {
    id: 5,
    topic: "Ship Terminology",
    question: "What does 'amidships' generally refer to?",
    options: [
      "The middle region of the ship",
      "Only the bow",
      "Only the stern",
      "The anchor chain",
    ],
    answer: 0,
  },
  {
    id: 6,
    topic: "Ship Terminology",
    question: "What is the main purpose of the bridge on a ship?",
    options: [
      "Cooking food",
      "Navigation and control of the ship",
      "Storing anchor cable",
      "Treating sewage",
    ],
    answer: 1,
  },

  // =========================
  // SHIP CONSTRUCTION
  // =========================
  {
    id: 7,
    topic: "Ship Construction",
    question:
      "Which major structural member runs along the bottom centreline of a ship?",
    options: ["Keel", "Mast", "Funnel", "Hatch cover"],
    answer: 0,
  },
  {
    id: 8,
    topic: "Ship Construction",
    question: "What is the hull of a ship?",
    options: [
      "The main body of the vessel",
      "Only the propeller",
      "Only the mast",
      "Only the bridge equipment",
    ],
    answer: 0,
  },
  {
    id: 9,
    topic: "Ship Construction",
    question: "What is a bulkhead?",
    options: [
      "A vertical partition inside a ship",
      "A mooring rope",
      "A type of anchor",
      "A navigation light",
    ],
    answer: 0,
  },
  {
    id: 10,
    topic: "Ship Construction",
    question: "What is the purpose of a watertight bulkhead?",
    options: [
      "To help limit the spread of flooding",
      "To increase propeller speed",
      "To operate the anchor",
      "To lubricate machinery",
    ],
    answer: 0,
  },
  {
    id: 11,
    topic: "Ship Construction",
    question: "What is a deck?",
    options: [
      "A horizontal structural surface of a ship",
      "A mooring rope",
      "An engine valve",
      "A type of paint",
    ],
    answer: 0,
  },
  {
    id: 12,
    topic: "Ship Construction",
    question: "Frames in a ship mainly help to:",
    options: [
      "Support and give shape to the hull",
      "Generate electricity",
      "Operate the radar",
      "Purify fuel",
    ],
    answer: 0,
  },

  // =========================
  // ANCHORING
  // =========================
  {
    id: 13,
    topic: "Anchoring",
    question: "What is the main purpose of an anchor?",
    options: [
      "To hold the vessel in position on the seabed",
      "To increase engine speed",
      "To steer the vessel",
      "To generate electricity",
    ],
    answer: 0,
  },
  {
    id: 14,
    topic: "Anchoring",
    question: "Which equipment is commonly used to handle the anchor cable?",
    options: ["Windlass", "Lifeboat", "Radar", "Purifier"],
    answer: 0,
  },
  {
    id: 15,
    topic: "Anchoring",
    question: "What connects the anchor to the ship?",
    options: [
      "Anchor cable or chain",
      "Fire hose",
      "Electrical cable only",
      "Cargo net",
    ],
    answer: 0,
  },
  {
    id: 16,
    topic: "Anchoring",
    question: "What is a hawse pipe associated with?",
    options: [
      "Anchor and anchor cable",
      "Fresh-water tank",
      "Main engine piston",
      "Liferaft painter",
    ],
    answer: 0,
  },
  {
    id: 17,
    topic: "Anchoring",
    question:
      "Why should personnel keep clear of an anchor cable under heavy load?",
    options: [
      "Because of snap-back and moving-equipment hazards",
      "Because it becomes electrically charged",
      "Because it always becomes cold",
      "There is no hazard",
    ],
    answer: 0,
  },

  // =========================
  // MOORING
  // =========================
  {
    id: 18,
    topic: "Mooring",
    question: "What is the purpose of mooring lines?",
    options: [
      "To secure a ship alongside or to a mooring",
      "To start the main engine",
      "To pump bilge water",
      "To operate navigation lights",
    ],
    answer: 0,
  },
  {
    id: 19,
    topic: "Mooring",
    question:
      "Which fitting is commonly used for securing mooring lines on deck?",
    options: ["Bitts", "Injector", "Piston", "Sea chest"],
    answer: 0,
  },
  {
    id: 20,
    topic: "Mooring",
    question: "What is a fairlead used for?",
    options: [
      "To guide a mooring line in the required direction",
      "To extinguish a fire",
      "To measure temperature",
      "To purify lubricating oil",
    ],
    answer: 0,
  },
  {
    id: 21,
    topic: "Mooring",
    question: "What is a mooring winch used for?",
    options: [
      "Handling mooring lines",
      "Cooking food",
      "Measuring water depth",
      "Launching a liferaft manually only",
    ],
    answer: 0,
  },
  {
    id: 22,
    topic: "Mooring",
    question: "What is a snap-back zone?",
    options: [
      "An area where a parted or released line may recoil dangerously",
      "A safe sleeping area",
      "An engine cooling space",
      "A navigation zone",
    ],
    answer: 0,
  },
  {
    id: 23,
    topic: "Mooring",
    question:
      "What should a crew member do regarding a line under heavy tension?",
    options: [
      "Keep clear of the line and snap-back danger areas",
      "Stand over the line",
      "Sit on the line",
      "Hold the line with bare hands",
    ],
    answer: 0,
  },

  // =========================
  // ROPES & KNOTS
  // =========================
  {
    id: 24,
    topic: "Ropes & Knots",
    question: "What is a bowline commonly used to form?",
    options: [
      "A fixed loop",
      "A permanent wire splice only",
      "An anchor chain",
      "A steel plate joint",
    ],
    answer: 0,
  },
  {
    id: 25,
    topic: "Ropes & Knots",
    question: "What is the purpose of whipping a rope?",
    options: [
      "To help prevent the rope end from fraying",
      "To increase engine power",
      "To measure rope length",
      "To paint the rope",
    ],
    answer: 0,
  },
  {
    id: 26,
    topic: "Ropes & Knots",
    question: "What is a splice used for?",
    options: [
      "Joining rope or forming an eye by interweaving strands",
      "Measuring temperature",
      "Starting a pump",
      "Cleaning a fuel filter",
    ],
    answer: 0,
  },
  {
    id: 27,
    topic: "Ropes & Knots",
    question:
      "Before using a rope for an important operation, it should be:",
    options: [
      "Inspected for damage and deterioration",
      "Covered with paint",
      "Placed near a hot surface",
      "Cut into short pieces",
    ],
    answer: 0,
  },
  {
    id: 28,
    topic: "Ropes & Knots",
    question:
      "Which is a serious safety concern when handling ropes under tension?",
    options: [
      "Snap-back",
      "Fresh-water production",
      "Compass error",
      "Fuel viscosity",
    ],
    answer: 0,
  },

  // =========================
  // CARGO
  // =========================
  {
    id: 29,
    topic: "Cargo Operations",
    question: "What is cargo securing intended to prevent?",
    options: [
      "Unwanted movement of cargo",
      "Engine cooling",
      "Anchor dragging",
      "Battery discharge",
    ],
    answer: 0,
  },
  {
    id: 30,
    topic: "Cargo Operations",
    question:
      "Why can shifting cargo be dangerous?",
    options: [
      "It can affect vessel stability and cause damage or injury",
      "It always improves stability",
      "It increases battery voltage",
      "It cleans the cargo hold",
    ],
    answer: 0,
  },
  {
    id: 31,
    topic: "Cargo Operations",
    question:
      "What should personnel avoid when cargo is being lifted?",
    options: [
      "Standing under a suspended load",
      "Wearing PPE",
      "Following instructions",
      "Keeping a safe distance",
    ],
    answer: 0,
  },
  {
    id: 32,
    topic: "Cargo Operations",
    question:
      "What does SWL commonly mean in lifting operations?",
    options: [
      "Safe Working Load",
      "Ship Water Level",
      "Safety Wire Length",
      "Standard Working Light",
    ],
    answer: 0,
  },
  {
    id: 33,
    topic: "Cargo Operations",
    question:
      "Lifting equipment should be used:",
    options: [
      "Within its permitted working load and according to procedures",
      "Beyond its rated capacity",
      "Without inspection",
      "Only when damaged",
    ],
    answer: 0,
  },

  // =========================
  // NAVIGATION / LIGHTS
  // =========================
  {
    id: 34,
    topic: "Navigation Basics",
    question: "What colour is the port sidelight?",
    options: ["Green", "Red", "White", "Yellow"],
    answer: 1,
  },
  {
    id: 35,
    topic: "Navigation Basics",
    question: "What colour is the starboard sidelight?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: 2,
  },
  {
    id: 36,
    topic: "Navigation Basics",
    question: "What colour is a normal sternlight?",
    options: ["Red", "Green", "White", "Blue"],
    answer: 2,
  },
  {
    id: 37,
    topic: "Navigation Basics",
    question: "What is a compass used for?",
    options: [
      "Determining direction",
      "Measuring engine oil pressure",
      "Pumping ballast",
      "Securing cargo",
    ],
    answer: 0,
  },
  {
    id: 38,
    topic: "Navigation Basics",
    question: "What is radar mainly used for?",
    options: [
      "Detecting targets and assisting navigation",
      "Lubricating machinery",
      "Purifying fuel",
      "Handling mooring ropes",
    ],
    answer: 0,
  },

  // =========================
  // SAFETY
  // =========================
  {
    id: 39,
    topic: "Shipboard Safety",
    question: "What is the main purpose of PPE?",
    options: [
      "To help protect personnel from workplace hazards",
      "To increase ship speed",
      "To replace all safe procedures",
      "To operate the main engine",
    ],
    answer: 0,
  },
  {
    id: 40,
    topic: "Shipboard Safety",
    question: "Why should passageways and escape routes be kept clear?",
    options: [
      "To allow safe movement and emergency escape",
      "To provide storage space",
      "To increase vessel draft",
      "To reduce engine RPM",
    ],
    answer: 0,
  },
  {
    id: 41,
    topic: "Shipboard Safety",
    question: "What should you do when you discover a serious fire?",
    options: [
      "Raise the alarm and follow the ship's emergency procedure",
      "Hide the fire",
      "Ignore it",
      "Open all nearby fuel valves",
    ],
    answer: 0,
  },
  {
    id: 42,
    topic: "Shipboard Safety",
    question: "What is the purpose of a muster list?",
    options: [
      "To show assigned emergency duties and stations",
      "To show only meal times",
      "To record fuel consumption",
      "To measure ship speed",
    ],
    answer: 0,
  },
  {
    id: 43,
    topic: "Shipboard Safety",
    question:
      "Before entering a designated enclosed space, personnel should:",
    options: [
      "Follow the vessel's enclosed-space entry procedure and permit requirements",
      "Enter immediately without informing anyone",
      "Use a cigarette to test the atmosphere",
      "Enter alone without communication",
    ],
    answer: 0,
  },
  {
    id: 44,
    topic: "Shipboard Safety",
    question: "Good housekeeping helps prevent:",
    options: [
      "Slips, trips and other accidents",
      "Navigation",
      "Radio communication",
      "Propeller rotation",
    ],
    answer: 0,
  },

  // =========================
  // DECK MAINTENANCE
  // =========================
  {
    id: 45,
    topic: "Deck Maintenance",
    question: "Why is rust removed from steel surfaces?",
    options: [
      "To prepare and protect the surface against corrosion",
      "To increase corrosion",
      "To increase ship draft",
      "To make ropes heavier",
    ],
    answer: 0,
  },
  {
    id: 46,
    topic: "Deck Maintenance",
    question:
      "Before painting a steel surface, it should generally be:",
    options: [
      "Properly prepared, clean and suitable for coating",
      "Covered in loose rust",
      "Covered in oil",
      "Kept permanently wet",
    ],
    answer: 0,
  },
  {
    id: 47,
    topic: "Deck Maintenance",
    question: "What is corrosion?",
    options: [
      "Deterioration of material due to chemical or electrochemical reaction",
      "A navigation technique",
      "A type of mooring rope",
      "A lifeboat drill",
    ],
    answer: 0,
  },

  // =========================
  // WATCHKEEPING
  // =========================
  {
    id: 48,
    topic: "Watchkeeping",
    question:
      "During watchkeeping, an unusual or unsafe condition should be:",
    options: [
      "Reported promptly to the responsible officer or supervisor",
      "Ignored",
      "Hidden",
      "Recorded only after several days",
    ],
    answer: 0,
  },
  {
    id: 49,
    topic: "Watchkeeping",
    question:
      "Why is a proper watch handover important?",
    options: [
      "To pass relevant information about the ship, duties and conditions",
      "To avoid communication",
      "To stop all ship operations",
      "To change the vessel's name",
    ],
    answer: 0,
  },
  {
    id: 50,
    topic: "Watchkeeping",
    question:
      "A rating on watch should follow:",
    options: [
      "Standing orders, instructions and safe working procedures",
      "Only personal preference",
      "Instructions from unauthorised visitors",
      "No procedures",
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

export default function GSKPracticeCBT() {
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

  const selectAnswer = (
    questionId: number,
    optionIndex: number
  ) => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (answers[question.id] === question.answer) {
        return score + 1;
      }

      return score;
    }, 0);
  };

  const handleSubmit = () => {
    const unanswered =
      questions.length - Object.keys(answers).length;

    const message =
      unanswered > 0
        ? `You still have ${unanswered} unanswered question(s). Submit test anyway?`
        : "Are you sure you want to submit the test?";

    if (window.confirm(message)) {
      setSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const restartTest = () => {
    setQuestions(shuffleQuestions(questionBank));
    setAnswers({});
    setCurrent(0);
    setTimeLeft(EXAM_TIME);
    setSubmitted(false);
    setStarted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          Loading GSK Practice CBT...
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
              SeaPrep Hub • GP Rating
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              GSK Practice CBT
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Test your General Ship Knowledge with
              50 multiple-choice practice questions.
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
              <Info
                title="Question Type"
                value="Multiple Choice"
              />
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <h3 className="font-extrabold text-blue-950">
                Before You Start
              </h3>

              <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                <li>
                  ✓ Select one answer for each question.
                </li>
                <li>
                  ✓ Use Previous and Next to move between questions.
                </li>
                <li>
                  ✓ Use the question navigator to jump to any question.
                </li>
                <li>
                  ✓ Question order changes on each attempt.
                </li>
                <li>
                  ✓ The test automatically submits when time finishes.
                </li>
                <li>
                  ✓ Full answer review is available after submission.
                </li>
              </ul>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-extrabold text-white transition hover:bg-orange-600"
            >
              Start GSK Practice CBT →
            </button>

            <Link
              href="/gsk"
              className="mt-4 block text-center font-bold text-blue-900 hover:underline"
            >
              ← Back to GSK Notes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // =========================
  // RESULT SCREEN
  // =========================

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              GSK Practice CBT
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
              Pass mark: 60% • Correct: {score} •
              Wrong/Unanswered: {questions.length - score}
            </p>

            <button
              onClick={restartTest}
              className="mt-7 rounded-xl bg-orange-500 px-7 py-3 font-bold text-white hover:bg-orange-600"
            >
              Try Again
            </button>
          </div>

          {/* ANSWER REVIEW */}
          <div className="mt-10">
            <h2 className="text-3xl font-extrabold text-blue-950">
              Answer Review
            </h2>

            <p className="mt-2 text-slate-600">
              Check your answers and revise the topics where
              you made mistakes.
            </p>

            <div className="mt-6 space-y-5">
              {questions.map((question, index) => {
                const selected = answers[question.id];

                const correct =
                  selected === question.answer;

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
                      {question.options.map(
                        (option, optionIndex) => {
                          const isCorrect =
                            optionIndex ===
                            question.answer;

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
                              {String.fromCharCode(
                                65 + optionIndex
                              )}
                              . {option}

                              {isCorrect && (
                                <span className="ml-2">
                                  ✓ Correct Answer
                                </span>
                              )}

                              {isSelected &&
                                !isCorrect && (
                                  <span className="ml-2">
                                    ✗ Your Answer
                                  </span>
                                )}
                            </div>
                          );
                        }
                      )}
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
              href="/gsk"
              className="inline-block rounded-xl bg-blue-950 px-7 py-3 font-bold text-white hover:bg-blue-900"
            >
              ← Back to GSK Notes
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

  const answeredCount =
    Object.keys(answers).length;

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
              GSK Practice CBT
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
                Question {current + 1} of{" "}
                {questions.length}
              </p>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-900">
                {question.topic}
              </span>
            </div>

            <h2 className="mt-6 text-xl font-extrabold leading-8 text-blue-950 md:text-2xl">
              {question.question}
            </h2>

            <div className="mt-7 space-y-3">
              {question.options.map(
                (option, index) => {
                  const selected =
                    answers[question.id] === index;

                  return (
                    <button
                      key={option}
                      onClick={() =>
                        selectAnswer(
                          question.id,
                          index
                        )
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
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span className="font-semibold text-slate-700">
                        {option}
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* PREVIOUS / NEXT */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    Math.max(0, prev - 1)
                  )
                }
                disabled={current === 0}
                className="rounded-xl border border-blue-950 px-5 py-3 font-bold text-blue-950 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Previous
              </button>

              {current <
              questions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrent((prev) =>
                      Math.min(
                        questions.length - 1,
                        prev + 1
                      )
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
            Submit GSK Practice Test
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

              const active =
                index === current;

              return (
                <button
                  key={q.id}
                  onClick={() =>
                    setCurrent(index)
                  }
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
            You can change your answer any time
            before submitting the test.
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
      <span
        className={`h-5 w-5 rounded ${className}`}
      />

      <span>{text}</span>
    </div>
  );
}