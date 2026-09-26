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
    question: "What does SSO stand for?",
    options: [
      "Ship Safety Officer",
      "Ship Security Officer",
      "Sea Security Operator",
      "Safety Security Officer",
    ],
    answer: 1,
  },
  {
    question: "What does SSP stand for?",
    options: [
      "Ship Security Plan",
      "Ship Safety Programme",
      "Sea Security Plan",
      "Ship Security Procedure",
    ],
    answer: 0,
  },
  {
    question: "What does DOS stand for?",
    options: [
      "Department of Security",
      "Declaration of Safety",
      "Declaration of Security",
      "Document of Ship",
    ],
    answer: 2,
  },
  {
    question: "What does CSR stand for?",
    options: [
      "Continuous Security Record",
      "Continuous Synopsis Record",
      "Company Security Report",
      "Crew Safety Record",
    ],
    answer: 1,
  },
  {
    question: "How many security levels are there?",
    options: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "At Security Level 1, what type of measures are maintained?",
    options: [
      "No security measures",
      "Minimum appropriate protective security measures",
      "Emergency-only measures",
      "Maximum military measures",
    ],
    answer: 1,
  },
  {
    question: "Security Level 2 requires:",
    options: [
      "Reduced security measures",
      "Additional protective measures",
      "No access control",
      "Cancellation of the SSP",
    ],
    answer: 1,
  },
  {
    question: "Security Level 3 requires:",
    options: [
      "Only normal measures",
      "No special action",
      "Further specific protective measures",
      "Removal of access control",
    ],
    answer: 2,
  },
  {
    question: "Which document contains shipboard security instructions?",
    options: ["SSP", "CSR", "Crew List", "Cargo Manifest"],
    answer: 0,
  },
  {
    question: "Who may complete a Declaration of Security on behalf of a ship?",
    options: [
      "Any passenger",
      "Master or SSO",
      "Cook only",
      "Stevedore",
    ],
    answer: 1,
  },
  {
    question: "What is an important purpose of gangway watch?",
    options: [
      "Control access to the ship",
      "Prepare food",
      "Check engine oil",
      "Operate cargo cranes",
    ],
    answer: 0,
  },
  {
    question: "Security documents should be available on board:",
    options: [
      "Only during inspection",
      "Only in port",
      "At all times",
      "Only during drills",
    ],
    answer: 2,
  },
  {
    question: "Which is a security record mentioned in the handout?",
    options: [
      "Security incidents",
      "Entertainment programme",
      "Menu card",
      "Engine paint record",
    ],
    answer: 0,
  },
  {
    question: "Which equipment can be used for ship security monitoring?",
    options: ["CCTV", "Coffee machine", "Microwave", "Refrigerator"],
    answer: 0,
  },
  {
    question: "What does SSAS refer to?",
    options: [
      "Ship Security Alert System",
      "Ship Safety Alarm Service",
      "Sea Security Access System",
      "Ship Search Alarm Signal",
    ],
    answer: 0,
  },
  {
    question: "A limitation of CCTV mentioned in the handout is:",
    options: [
      "Unlimited coverage",
      "Limited area of coverage",
      "It requires no monitoring",
      "It cannot be damaged",
    ],
    answer: 1,
  },
  {
    question: "A metal detector primarily detects:",
    options: [
      "Presence of metal",
      "Identity of a person",
      "Type of explosive",
      "Cargo weight",
    ],
    answer: 0,
  },
  {
    question: "Security equipment should be maintained as part of:",
    options: [
      "Planned Maintenance System",
      "Catering plan",
      "Crew recreation plan",
      "Cargo sales plan",
    ],
    answer: 0,
  },
  {
    question: "Testing of security equipment should follow:",
    options: [
      "Manufacturer's instructions",
      "Passenger instructions",
      "Random assumptions",
      "No instructions",
    ],
    answer: 0,
  },
  {
    question: "Calibration of security equipment should be carried out:",
    options: [
      "At set intervals",
      "Never",
      "Only after an attack",
      "Only before scrapping",
    ],
    answer: 0,
  },
  {
    question: "Physical searches should preserve:",
    options: [
      "Basic human dignity",
      "Only speed",
      "Cargo quantity",
      "Commercial secrecy only",
    ],
    answer: 0,
  },
  {
    question: "Which device is described as non-intrusive for a personal body search?",
    options: [
      "Hand-held metal detector",
      "Hammer",
      "Crowbar",
      "Fire hose",
    ],
    answer: 0,
  },
  {
    question: "A ship search should be conducted according to:",
    options: [
      "A specific plan",
      "No plan",
      "Passenger choice",
      "Random selection only",
    ],
    answer: 0,
  },
  {
    question: "Searchers should maintain contact with search controllers by:",
    options: [
      "Walkie-talkies/radio",
      "Letters",
      "Notice board only",
      "Hand signals only",
    ],
    answer: 0,
  },
  {
    question: "Search parties may work:",
    options: [
      "In pairs",
      "Only alone",
      "Only with passengers",
      "Without communication",
    ],
    answer: 0,
  },
  {
    question: "Which is an example of a place of concealment on a ship?",
    options: [
      "Ventilation ducts",
      "Open sea only",
      "Ship's wake only",
      "Navigation chart only",
    ],
    answer: 0,
  },
  {
    question: "Suspicious behaviour should be recognized:",
    options: [
      "On a non-discriminatory basis",
      "Only by nationality",
      "Only by age",
      "Only by rank",
    ],
    answer: 0,
  },
  {
    question: "Which may be considered suspicious behaviour?",
    options: [
      "Unknown persons photographing vessels or facilities",
      "Crew attending normal muster",
      "Master reading a chart",
      "Cook preparing food",
    ],
    answer: 0,
  },
  {
    question: "Security drills should normally be conducted at least once every:",
    options: [
      "3 months",
      "3 years",
      "5 years",
      "10 years",
    ],
    answer: 0,
  },
  {
    question:
      "If more than 25% of vessel personnel are changed under the condition described in the handout, a security drill should be conducted within:",
    options: ["1 week", "6 months", "1 year", "2 years"],
    answer: 0,
  },
  {
    question: "Security exercises should be carried out at least:",
    options: [
      "Once each calendar year",
      "Once every 10 years",
      "Only after an attack",
      "Never",
    ],
    answer: 0,
  },
  {
    question: "The maximum interval stated between security exercises is:",
    options: ["18 months", "36 months", "5 years", "10 years"],
    answer: 0,
  },
  {
    question: "Security exercises should test:",
    options: [
      "Communications and coordination",
      "Cooking ability",
      "Entertainment",
      "Cabin decoration",
    ],
    answer: 0,
  },
  {
    question: "Which can be a type of security exercise?",
    options: [
      "Tabletop simulation",
      "Cooking competition",
      "Sports day",
      "Movie screening",
    ],
    answer: 0,
  },
  {
    question: "Which is included in security contingency planning?",
    options: [
      "Hijacking or seizure of the ship",
      "Changing the menu",
      "Painting cabins",
      "Crew recreation",
    ],
    answer: 0,
  },
  {
    question: "Which security activity must be controlled?",
    options: [
      "Access to the vessel",
      "Television programme",
      "Crew haircut",
      "Meal preference",
    ],
    answer: 0,
  },
  {
    question: "Restricted areas should be monitored to ensure access by:",
    options: [
      "Authorized persons only",
      "Everyone",
      "Passengers only",
      "Visitors only",
    ],
    answer: 0,
  },
  {
    question: "Piracy is described in the handout as:",
    options: [
      "A maritime security problem",
      "A weather condition",
      "A cargo document",
      "A navigation instrument",
    ],
    answer: 0,
  },
  {
    question: "The handout refers to which convention for the definition of piracy?",
    options: ["UNCLOS", "MARPOL only", "MLC only", "COLREG only"],
    answer: 0,
  },
  {
    question: "The IMO anti-piracy project mentioned in the handout began in:",
    options: ["1998", "1948", "1960", "2025"],
    answer: 0,
  },
  {
    question: "ReCAAP relates to cooperation against:",
    options: [
      "Piracy and armed robbery against ships",
      "Marine pollution only",
      "Fire fighting only",
      "Cargo calculation",
    ],
    answer: 0,
  },
  {
    question: "The Djibouti Code of Conduct is associated with:",
    options: [
      "Repression of piracy and armed robbery against ships",
      "Food hygiene",
      "Engine maintenance",
      "Passenger entertainment",
    ],
    answer: 0,
  },
  {
    question: "BMP in the anti-piracy chapter refers to:",
    options: [
      "Best Management Practices",
      "Basic Marine Painting",
      "Bridge Manning Programme",
      "Boat Maintenance Plan",
    ],
    answer: 0,
  },
  {
    question: "Before entering a piracy-risk area, the ship should carry out:",
    options: [
      "A ship-specific risk assessment",
      "No planning",
      "Only catering inspection",
      "Only paint inspection",
    ],
    answer: 0,
  },
  {
    question: "Before a high-risk passage, the handout recommends reviewing:",
    options: [
      "SSA and SSP",
      "Only menu card",
      "Only crew recreation plan",
      "Only cargo invoice",
    ],
    answer: 0,
  },
  {
    question: "Which is important for early detection of a piracy threat?",
    options: [
      "Effective lookout",
      "Closing all bridge windows and ignoring traffic",
      "Reducing watchkeeping",
      "Stopping radar watch",
    ],
    answer: 0,
  },
  {
    question: "During a pirate attack, personnel should first follow:",
    options: [
      "The ship's pre-prepared contingency plan",
      "Passenger suggestions",
      "No procedure",
      "The catering plan",
    ],
    answer: 0,
  },
  {
    question: "Which system may be activated during a pirate attack?",
    options: ["SSAS", "Galley exhaust", "Fresh-water pump only", "Cabin TV"],
    answer: 0,
  },
  {
    question: "The handout states that a Mayday call may be made on:",
    options: [
      "VHF Channel 16",
      "VHF Channel 1 only",
      "Television channel",
      "No radio channel",
    ],
    answer: 0,
  },
  {
    question: "Which characteristic may increase a ship's vulnerability to pirate attack?",
    options: [
      "Low freeboard",
      "Effective lookout",
      "Good planning",
      "Proper security measures",
    ],
    answer: 0,
  },
];

function shuffle<T>(items: T[]) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default function STSDSDPracticeCBT() {
  const questions = useMemo(
    () =>
      shuffle(questionBank)
        .slice(0, 30)
        .map((q) => ({
          ...q,
          options: q.options.map((option, index) => ({
            option,
            originalIndex: index,
          })),
        }))
        .map((q) => ({
          ...q,
          options: shuffle(q.options),
        })),
    []
  );

  const [candidateName, setCandidateName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(30).fill(null)
  );
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const calculateScore = () =>
    answers.reduce<number>((total, selected, index) => {
      if (selected === null) return total;

      const selectedOption = questions[index].options[selected];

      return selectedOption.originalIndex === questions[index].answer
        ? total + 1
        : total;
    }, 0);

  const [finalScore, setFinalScore] = useState(0);

  const submitTest = () => {
    if (!candidateName.trim() || !rollNo.trim()) {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setShowError(false);
    setFinalScore(calculateScore());
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      if (!candidateName.trim() || !rollNo.trim()) {
        setShowError(true);
        return;
      }

      setFinalScore(calculateScore());
      setSubmitted(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft, submitted, candidateName, rollNo, answers, questions]);

  const selectAnswer = (optionIndex: number) => {
    if (submitted) return;

    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const answered = answers.filter((answer) => answer !== null).length;

  const passMark = 18;
  const passed = finalScore >= passMark;
  const percentage = Math.round((finalScore / 30) * 100);

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              STSDSD Practice CBT
            </p>

            <h1 className="mt-2 text-3xl font-extrabold">
              Test Result
            </h1>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ResultBox label="Candidate Name" value={candidateName} />
              <ResultBox label="Roll No." value={rollNo} />
              <ResultBox label="Score" value={`${finalScore} / 30`} />
              <ResultBox label="Percentage" value={`${percentage}%`} />
            </div>

            <div
              className={`mt-6 rounded-2xl p-5 text-center text-3xl font-extrabold ${
                passed
                  ? "bg-emerald-500/20 text-emerald-100"
                  : "bg-red-500/20 text-red-100"
              }`}
            >
              {passed ? "PASS" : "FAIL"}
            </div>

            <p className="mt-3 text-center text-sm text-slate-200">
              Passing Mark: 18 / 30 (60%)
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Answer Review
            </h2>

            <div className="mt-5 space-y-5">
              {questions.map((question, qIndex) => {
                const selectedIndex = answers[qIndex];
                const selectedOption =
                  selectedIndex !== null
                    ? question.options[selectedIndex]
                    : null;

                const correctOption = question.options.find(
                  (option) => option.originalIndex === question.answer
                );

                const correct =
                  selectedOption?.originalIndex === question.answer;

                return (
                  <div
                    key={qIndex}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="font-extrabold text-slate-900">
                      {qIndex + 1}. {question.question}
                    </p>

                    <p
                      className={`mt-3 font-semibold ${
                        correct ? "text-emerald-700" : "text-red-700"
                      }`}
                    >
                      Your Answer:{" "}
                      {selectedOption
                        ? selectedOption.option
                        : "Not Answered"}
                    </p>

                    {!correct && (
                      <p className="mt-2 font-semibold text-emerald-700">
                        Correct Answer: {correctOption?.option}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <Link
              href="/stsdsd"
              className="rounded-xl bg-cyan-700 px-7 py-3 font-bold text-white hover:bg-cyan-800"
            >
              Back to STSDSD Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[current];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-5 py-8 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/stsdsd"
            className="text-sm font-semibold text-cyan-100 hover:text-white"
          >
            ← Back to STSDSD
          </Link>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
                STSDSD
              </p>

              <h1 className="mt-1 text-3xl font-extrabold">
                Practice CBT
              </h1>

              <p className="mt-2 text-slate-200">
                30 Random Questions • 30 Minutes • Pass Mark 60%
              </p>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3 text-center">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Time Remaining
              </p>

              <p className="text-2xl font-extrabold">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto max-w-6xl">
          {showError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">
              Please enter Candidate Name and Roll No. before submitting the
              test.
            </div>
          )}

          <div className="mb-7 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Candidate Name *
              </label>

              <input
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Enter candidate name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Roll No. *
              </label>

              <input
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="Enter roll number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="font-bold text-cyan-700">
                  Question {current + 1} of 30
                </p>

                <p className="text-sm font-semibold text-slate-500">
                  Answered: {answered}/30
                </p>
              </div>

              <h2 className="mt-5 text-xl font-extrabold leading-8 text-slate-900">
                {question.question}
              </h2>

              <div className="mt-6 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[current] === optionIndex;

                  return (
                    <button
                      key={`${option.option}-${optionIndex}`}
                      onClick={() => selectAnswer(optionIndex)}
                      className={`w-full rounded-xl border p-4 text-left font-semibold transition ${
                        selected
                          ? "border-cyan-700 bg-cyan-50 text-cyan-900"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="mr-3 font-extrabold">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option.option}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                  disabled={current === 0}
                  className="rounded-lg border border-slate-300 px-5 py-3 font-bold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                </button>

                {current < 29 ? (
                  <button
                    onClick={() =>
                      setCurrent((value) => Math.min(29, value + 1))
                    }
                    className="rounded-lg bg-cyan-700 px-6 py-3 font-bold text-white hover:bg-cyan-800"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={submitTest}
                    className="rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
                  >
                    Submit Test
                  </button>
                )}
              </div>
            </section>

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-extrabold text-slate-900">
                Question Navigator
              </h3>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {questions.map((_, index) => {
                  const isCurrent = current === index;
                  const isAnswered = answers[index] !== null;

                  return (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-10 rounded-lg text-sm font-bold ${
                        isCurrent
                          ? "bg-cyan-700 text-white"
                          : isAnswered
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="font-bold text-emerald-700">
                    Answered:
                  </span>{" "}
                  {answered}
                </p>

                <p>
                  <span className="font-bold text-slate-600">
                    Remaining:
                  </span>{" "}
                  {30 - answered}
                </p>
              </div>

              <button
                onClick={submitTest}
                className="mt-6 w-full rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
              >
                Submit Test
              </button>
            </aside>
          </div>
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
    <div className="rounded-xl bg-white/10 p-4">
      <p className="text-sm text-cyan-100">{label}</p>
      <p className="mt-1 text-xl font-extrabold">{value}</p>
    </div>
  );
}