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
    question: "What is the main objective of Personal Survival Techniques training?",
    options: [
      "Cargo handling",
      "To survive at sea in the event of ship abandonment",
      "Engine maintenance",
      "Navigation",
    ],
    answer: 1,
  },
  {
    question: "Which is an essential requirement for survival at sea?",
    options: [
      "Strong will to survive",
      "Avoid training",
      "Ignore emergency procedures",
      "Work alone",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a survival craft?",
    options: ["Lifejacket", "Lifeboat", "Immersion suit", "Lifebuoy"],
    answer: 1,
  },
  {
    question: "Which of the following is listed as a survival craft in the handout?",
    options: ["Life raft", "Fire hose", "Fire blanket", "SCBA"],
    answer: 0,
  },
  {
    question: "Every vessel must carry a ship-specific SOLAS Training Manual as required by:",
    options: [
      "SOLAS Chapter I",
      "SOLAS Chapter II",
      "SOLAS Chapter III",
      "SOLAS Chapter V",
    ],
    answer: 2,
  },
  {
    question: "What is the general emergency alarm signal?",
    options: [
      "One long blast",
      "At least seven short blasts followed by one long blast",
      "Three short blasts",
      "Continuous whistle only",
    ],
    answer: 1,
  },
  {
    question: "The fire alarm mentioned in the PST handout is:",
    options: [
      "Continuous ringing of ship's bell or fire alarm",
      "One short blast",
      "Seven long blasts",
      "Two long blasts",
    ],
    answer: 0,
  },
  {
    question: "The abandon ship signal normally consists of:",
    options: [
      "A verbal order by the Master",
      "One short whistle",
      "Three bells",
      "A red light",
    ],
    answer: 0,
  },
  {
    question: "Who prepares the Muster List?",
    options: ["Bosun", "Chief Cook", "Master", "AB"],
    answer: 2,
  },
  {
    question: "Which information is contained in the Muster List?",
    options: [
      "Crew emergency duties",
      "Ship's food menu",
      "Crew salary",
      "Cargo invoice only",
    ],
    answer: 0,
  },
  {
    question: "Where is the Muster List displayed?",
    options: [
      "Only in Master's cabin",
      "Important places including bridge and engine room",
      "Only in galley",
      "Only on deck",
    ],
    answer: 1,
  },
  {
    question: "Abandoning ship should be:",
    options: [
      "The first action",
      "A last resort",
      "Done without Master's order",
      "Done during every emergency",
    ],
    answer: 1,
  },
  {
    question: "According to the handout, the number one lifesaving unit at sea is:",
    options: [
      "Life raft",
      "Lifejacket",
      "The ship herself",
      "Rescue boat",
    ],
    answer: 2,
  },
  {
    question: "On hearing the general emergency alarm, crew should proceed to:",
    options: [
      "Galley",
      "Muster station",
      "Cabin and sleep",
      "Engine workshop",
    ],
    answer: 1,
  },
  {
    question: "During preparation for abandoning ship, the lifejacket should be:",
    options: [
      "Left in the cabin",
      "Carried in a bag",
      "Worn en route to the muster station",
      "Given to another person",
    ],
    answer: 2,
  },
  {
    question: "At the muster station, personnel should:",
    options: [
      "Leave immediately",
      "Stand for head count and further instructions",
      "Jump into the sea",
      "Remove their lifejackets",
    ],
    answer: 1,
  },
  {
    question: "Which is important during ship abandonment?",
    options: [
      "Panic",
      "Discipline and adherence to orders",
      "Running without instructions",
      "Ignoring the boat in-charge",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a personal life-saving appliance?",
    options: ["Lifejacket", "Fire pump", "Fire hose", "CO₂ bottle"],
    answer: 0,
  },
  {
    question: "An immersion suit should be capable of being donned without assistance within:",
    options: ["1 minute", "2 minutes", "5 minutes", "10 minutes"],
    answer: 1,
  },
  {
    question: "An immersion suit should allow a wearer to jump from a height of not less than:",
    options: ["1.5 m", "2.5 m", "4.5 m", "10 m"],
    answer: 2,
  },
  {
    question: "An immersion suit should turn a wearer from face-down to face-up within:",
    options: ["5 seconds", "15 seconds", "30 seconds", "60 seconds"],
    answer: 0,
  },
  {
    question: "Thermal Protective Aids reduce:",
    options: [
      "Convective and evaporative heat loss",
      "Ship speed",
      "Radio range",
      "Water pressure",
    ],
    answer: 0,
  },
  {
    question: "A Thermal Protective Aid should cover:",
    options: [
      "Only the head",
      "Only legs",
      "Whole body except face",
      "Only hands",
    ],
    answer: 2,
  },
  {
    question: "A TPA should be removable in water within how long if it impairs swimming?",
    options: ["30 seconds", "1 minute", "2 minutes", "10 minutes"],
    answer: 2,
  },
  {
    question: "When jumping into water wearing a lifejacket, the handout states a height not more than:",
    options: ["2 m", "3 m", "4.5 m", "8 m"],
    answer: 2,
  },
  {
    question: "Before jumping into water with a lifejacket, feet should be:",
    options: [
      "Wide apart",
      "Kept together",
      "Crossed",
      "Moved continuously",
    ],
    answer: 1,
  },
  {
    question: "When jumping into water, you should:",
    options: [
      "Look straight ahead",
      "Look directly down",
      "Remove the lifejacket",
      "Jump head first",
    ],
    answer: 0,
  },
  {
    question: "If possible, the handout says to jump from which side?",
    options: ["Leeward", "Windward", "Bow only", "Stern only"],
    answer: 1,
  },
  {
    question: "After entering the water, unnecessary swimming should be avoided because it:",
    options: [
      "Wastes body heat and energy",
      "Increases buoyancy",
      "Improves visibility",
      "Inflates the lifejacket",
    ],
    answer: 0,
  },
  {
    question: "Smoking in a survival craft is:",
    options: ["Recommended", "Not allowed", "Required", "Allowed at night"],
    answer: 1,
  },
  {
    question: "Lifeboats are numbered from:",
    options: [
      "Aft to forward",
      "Forward to aft",
      "Port to starboard",
      "Bridge to engine room",
    ],
    answer: 1,
  },
  {
    question: "Odd-numbered lifeboats are located on:",
    options: ["Port", "Starboard", "Forward only", "Aft only"],
    answer: 1,
  },
  {
    question: "Even-numbered lifeboats are located on:",
    options: ["Starboard", "Port", "Bridge deck", "Forecastle"],
    answer: 1,
  },
  {
    question: "A life raft painter should:",
    options: [
      "Be pulled out for inspection regularly",
      "Never be pulled out of the container unnecessarily",
      "Be cut before launching",
      "Be painted",
    ],
    answer: 1,
  },
  {
    question: "A person should never stand on a life raft container because:",
    options: [
      "It may crack and allow water inside",
      "It may start the engine",
      "It activates EPIRB",
      "It damages the whistle",
    ],
    answer: 0,
  },
  {
    question: "A life raft container should not be rolled on deck because:",
    options: [
      "The life raft may shift inside the container",
      "It becomes heavier",
      "It changes colour",
      "The painter becomes longer",
    ],
    answer: 0,
  },
  {
    question: "Which equipment should never be painted according to the handout?",
    options: [
      "Life raft HRU",
      "Deck",
      "Bulkhead",
      "Handrail",
    ],
    answer: 0,
  },
  {
    question: "On joining a ship, a crew member should find the shortest route from cabin to:",
    options: [
      "Galley",
      "Muster station",
      "Cargo hold",
      "Ship office",
    ],
    answer: 1,
  },
  {
    question: "Crew members should know their:",
    options: [
      "Boat station and fire station",
      "Salary only",
      "Cabin number only",
      "Meal time only",
    ],
    answer: 0,
  },
  {
    question: "Which item should NOT be carried for survival according to the handout?",
    options: ["Spare clothing", "Knife", "Alcohol", "Polythene bags"],
    answer: 2,
  },
  {
    question: "Float-free life-saving equipment should be stowed so that:",
    options: [
      "It cannot surface",
      "Nothing obstructs it from surfacing",
      "It is locked permanently",
      "It remains underwater",
    ],
    answer: 1,
  },
  {
    question: "Which is included in survival training?",
    options: [
      "Use of pyrotechnics",
      "Use of immersion suits",
      "Use of emergency radio equipment",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which equipment is included in emergency radio equipment in the PST handout?",
    options: ["EPIRB", "Fire hose", "SCBA", "Fire blanket"],
    answer: 0,
  },
  {
    question: "EPIRB stands for:",
    options: [
      "Emergency Position Indicating Radio Beacon",
      "Emergency Personal Internal Rescue Boat",
      "Electronic Position Indicator Rescue Bell",
      "Emergency Portable Inflatable Rescue Buoy",
    ],
    answer: 0,
  },
  {
    question: "Helicopter rescue procedures are included in which PST subject area?",
    options: [
      "Helicopter Assistance",
      "Fire Prevention",
      "Cargo Handling",
      "Ship Construction",
    ],
    answer: 0,
  },
  {
    question: "Before an emergency occurs, a seafarer should:",
    options: [
      "Know emergency duties beforehand",
      "Wait to read the Muster List during the emergency",
      "Ignore drills",
      "Avoid familiarization",
    ],
    answer: 0,
  },
  {
    question: "Safety drills should be:",
    options: [
      "As realistic as possible",
      "Avoided at sea",
      "Only theoretical",
      "Conducted only for officers",
    ],
    answer: 0,
  },
  {
    question: "Before entering an enclosed space, the handout says it should be:",
    options: [
      "Ventilated and certified safe",
      "Closed completely",
      "Filled with smoke",
      "Entered immediately",
    ],
    answer: 0,
  },
  {
    question: "When working at height, a seafarer should use:",
    options: [
      "Safety harness or safety belt",
      "Life raft painter",
      "Fire blanket",
      "EPIRB",
    ],
    answer: 0,
  },
  {
    question: "The PST course emphasizes the importance of:",
    options: [
      "Training and drills",
      "Avoiding emergency practice",
      "Working without procedures",
      "Ignoring leadership",
    ],
    answer: 0,
  },
];

function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items];

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


const TEST_TIME = 30 * 60;

export default function PSTPracticeCBT() {
  const [mounted, setMounted] = useState(false);
  const questions = useMemo(
    () => shuffle(questionBank).slice(0, 30),
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
  const [timeLeft, setTimeLeft] = useState(TEST_TIME);
const [candidateName, setCandidateName] = useState("");
const [rollNo, setRollNo] = useState("");
const [testStarted, setTestStarted] = useState(false);
  useEffect(() => {
    if (!testStarted || submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted, testStarted]);

  const selectAnswer = (optionIndex: number) => {
    if (submitted) return;

    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);
  };

  const score = questions.reduce((total, q, index) => {
    return total + (answers[index] === q.answer ? 1 : 0);
  }, 0);

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const passed = percentage >= 60;

  const answered = answers.filter(
    (answer) => answer !== null
  ).length;
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
        course: "PST",
        score: score,
        total_questions: questions.length,
      }),
    });

    if (!response.ok) {
      throw new Error("Result save failed");
    }

    console.log("PST result saved successfully");
  } catch (error) {
    console.error("PST result saving error:", error);
  }
};
useEffect(() => {
  if (!submitted) return;

  void saveResult();
}, [submitted]);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
const startTest = () => {
  if (!candidateName.trim() || !rollNo.trim()) {
    alert("Please enter Candidate Name andif (!mounted) { Roll No.");
    return;
  }

  setTestStarted(true);
};
  const submitTest = () => {
    const ok = window.confirm(
      "Are you sure you want to submit the PST Practice CBT?"
    );

    if (!ok) return;

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
          PST Practice CBT
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

          <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              PST Practice CBT
            </p>
<div className="mt-4 rounded-lg bg-blue-50 p-4 text-left">
  <p className="font-semibold text-gray-800">
    Candidate Name: {candidateName}
  </p>
  <p className="font-semibold text-gray-800">
    Roll No: {rollNo}
  </p>
</div>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Test Result
            </h1>

            <div className="mt-6 text-6xl font-bold text-blue-900">
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
              Passing Mark: 60%
            </p>
          </section>

          <h2 className="mt-8 text-2xl font-bold text-slate-900">
            Answer Review
          </h2>

          <div className="mt-5 space-y-4">
            {questions.map((q, index) => {
              const correct =
                answers[index] === q.answer;

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
                        : q.options[
                            answers[index] as number
                          ]}
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
              href="/pst"
              className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-center font-semibold text-blue-800"
            >
              ← PST Topics
            </Link>

            <Link
              href="/"
              className="rounded-xl bg-blue-900 px-6 py-3 text-center font-semibold text-white"
            >
              SeaPrep Hub Home
            </Link>
          </div>

        </div>
      </main>
    );
  }

  const q = questions[current];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            SeaPrep Hub • PST
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Practice CBT
              </h1>

              <p className="mt-2 text-blue-100">
                30 Random Questions • 30 Minutes • Pass 60%
              </p>
            </div>

            <div
              className={`rounded-xl px-5 py-3 text-center ${
                timeLeft <= 300
                  ? "bg-red-600"
                  : "bg-white/10"
              }`}
            >
              <p className="text-xs font-semibold uppercase">
                Time Left
              </p>

              <p className="text-2xl font-bold">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* STATUS */}
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Question
            </p>
            <p className="text-xl font-bold text-blue-900">
              {current + 1} / {questions.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Answered
            </p>
            <p className="text-xl font-bold text-green-700">
              {answered}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Remaining
            </p>
            <p className="text-xl font-bold text-orange-700">
              {questions.length - answered}
            </p>
          </div>
        </div>

        {/* QUESTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-blue-600">
            QUESTION {current + 1}
          </p>

          <h2 className="mt-2 text-xl font-bold leading-8 text-slate-900">
            {q.question}
          </h2>

          <div className="mt-6 space-y-3">
            {q.options.map((option, index) => {
              const selected =
                answers[current] === index;

              return (
                <button
                  key={option}
                  onClick={() => selectAnswer(index)}
                  className={`w-full rounded-xl border p-4 text-left font-semibold transition ${
                    selected
                      ? "border-blue-700 bg-blue-50 text-blue-900"
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

        {/* PREVIOUS NEXT */}
        <div className="mt-5 flex gap-3">
          <button
            onClick={() =>
              setCurrent((c) => Math.max(0, c - 1))
            }
            disabled={current === 0}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setCurrent((c) =>
                Math.min(questions.length - 1, c + 1)
              )
            }
            disabled={
              current === questions.length - 1
            }
            className="flex-1 rounded-xl bg-blue-900 px-4 py-3 font-semibold text-white disabled:opacity-40"
          >
            Next →
          </button>
        </div>

        {/* NAVIGATOR */}
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
                    ? "bg-blue-900 text-white"
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
        <button
          onClick={submitTest}
          className="mt-6 w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-bold text-white hover:bg-green-800"
        >
          Submit PST Practice Test
        </button>

        <div className="mt-5 text-center">
          <Link
            href="/pst"
            className="font-semibold text-blue-800 hover:underline"
          >
            ← Back to PST Topics
          </Link>
        </div>

      </div>
    </main>
  );
}