"use client";

import Link from "next/link";

export default function PSSRTopic09() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 09
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Prevention of Violence and Harassment
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Understanding, identifying, preventing and responding to
            violence, harassment, bullying, sexual harassment and
            sexual assault on board ship.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🛡️ Introduction
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Violence and harassment, including sexual harassment,
            bullying and sexual assault, are serious violations of
            human rights and professional conduct.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            They can undermine safety, discipline, morale and
            operational efficiency on board ships.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Every Seafarer
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Has the right to work in an environment free from
              intimidation, hostility and abuse.
            </p>
          </div>
        </section>

        {/* DEFINITIONS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📘 Important Definitions
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl border-l-4 border-red-600 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">
                Violence
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Intentional use of physical force or power, threatened
                or actual, resulting in or having a high likelihood of
                injury, psychological harm or deprivation.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
              <h3 className="font-bold text-orange-900">
                Harassment
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Unwanted conduct, behaviour or comments that cause
                humiliation, offense or distress.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-5">
              <h3 className="font-bold text-yellow-900">
                Bullying
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Repeated, unreasonable behaviour directed toward an
                individual or group that creates a risk to health
                and safety.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-purple-500 bg-purple-50 p-5">
              <h3 className="font-bold text-purple-900">
                Sexual Harassment
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Unwelcome sexual advances, requests for sexual favours,
                or other verbal or physical conduct of a sexual nature
                that creates a hostile or offensive work environment.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-slate-700 bg-slate-100 p-5">
              <h3 className="font-bold text-slate-900">
                Sexual Assault
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Any form of non-consensual sexual contact or behaviour.
              </p>
            </div>

          </div>
        </section>

        {/* WHO CAN BE AFFECTED */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            👥 Who Can Be Affected?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            These behaviours may occur between crew members of any rank
            or nationality. Both men and women can be victims or
            perpetrators.
          </p>
        </section>

        {/* CONTINUUM */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            📈 Continuum of Harm
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Harmful behaviour may begin with apparently minor acts and
            escalate into serious misconduct if it is not addressed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-yellow-50 p-5 text-center">
              <p className="font-bold text-yellow-900">
                MILD / LOW LEVEL
              </p>
              <p className="mt-3 text-slate-700">
                Teasing, jokes or exclusion
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-5 text-center">
              <p className="font-bold text-orange-900">
                MODERATE
              </p>
              <p className="mt-3 text-slate-700">
                Persistent bullying or verbal abuse
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-5 text-center">
              <p className="font-bold text-red-900">
                SEVERE
              </p>
              <p className="mt-3 text-slate-700">
                Physical violence or sexual assault
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Early Recognition is Important
            </p>
            <p className="mt-2 text-slate-700">
              Early recognition and intervention can help prevent
              escalation and further harm.
            </p>
          </div>
        </section>

        {/* SHIPBOARD CONTEXT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚢 Shipboard Context
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Life at sea presents particular challenges that may increase
            the possibility of conflict or misunderstanding.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Confined spaces",
              "Multicultural crews",
              "Long working hours",
              "Hierarchical structures",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-4 font-semibold text-slate-700"
              >
                ⚓ {item}
              </div>
            ))}
          </div>

          <p className="mt-5 font-semibold leading-7 text-cyan-900">
            Professional behaviour and respect must always prevail.
          </p>
        </section>

        {/* ZERO TOLERANCE */}
        <section className="rounded-2xl bg-red-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            🚫 Zero-Tolerance Approach
          </h2>

          <p className="mt-4 leading-7 text-red-100">
            The handout states that the ship should maintain a
            zero-tolerance policy for violence and harassment, supported
            by clear reporting procedures and the Master&apos;s
            commitment to enforcement.
          </p>
        </section>

        {/* OBLIGATIONS */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            ⚖️ Legal & Ethical Obligations
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The handout refers to STCW, MLC and the ISM Code in relation
            to shipboard responsibilities.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Promote safe and decent working conditions.",
              "Protect crew from harassment and violence.",
              "Take immediate and appropriate action when such behaviour is reported or observed.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-green-900"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONSEQUENCES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ⚠️ Consequences
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Violence and harassment can affect the victim, perpetrator,
            bystanders and the overall safety and performance of the ship.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["🩹", "Physical Harm", "Injury and other physical effects"],
              ["🧠", "Psychological Harm", "Fear, anxiety and emotional distress"],
              ["👥", "Social Effects", "Withdrawal and loss of confidence"],
              ["⚓", "Operational Effects", "Reduced performance and increased errors"],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-xl bg-slate-50 p-5"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 font-bold text-slate-900">
                  {title}
                </p>
                <p className="mt-1 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SAFETY EFFECT */}
        <section className="rounded-2xl bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🛟 Effects on Shipboard Safety
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Shipboard safety depends on teamwork, communication and
            trust. Violence and harassment can undermine these elements
            by creating fear, hostility and division among crew members.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5 text-center">
            <p className="text-lg font-bold text-orange-900">
              Fear + Stress + Distraction
            </p>
            <p className="mt-2 font-semibold text-slate-700">
              can increase the risk of operational mistakes and accidents.
            </p>
          </div>
        </section>

        {/* CONTRIBUTING FACTORS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🔍 Factors That May Contribute
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["⚖️", "Abuse of Power"],
              ["🌍", "Discrimination"],
              ["😟", "Stress"],
              ["🚢", "Isolation"],
              ["😴", "Fatigue"],
              ["🍺", "Drugs or Alcohol"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-xl bg-cyan-50 p-5 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 font-bold text-cyan-900">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABUSE OF POWER */}
        <section className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            ⚠️ Abuse of Power
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A ship operates under a strict chain of command. Abuse may
            occur when a person uses rank or influence to intimidate,
            coerce or exploit others.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The handout gives examples such as unfair allocation of
            duties, verbal humiliation and misuse of authority for
            personal or sexual favours.
          </p>
        </section>

        {/* STRESS FATIGUE */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            😴 Stress, Isolation & Fatigue
          </h2>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-white p-4">
              <strong>Stress:</strong>
              <span className="text-slate-700">
                {" "}Heavy workloads, tight schedules, homesickness,
                poor communication and interpersonal conflict may
                contribute to stress.
              </span>
            </div>

            <div className="rounded-xl bg-white p-4">
              <strong>Isolation:</strong>
              <span className="text-slate-700">
                {" "}Long periods away from family and limited social
                interaction may lead to loneliness and frustration.
              </span>
            </div>

            <div className="rounded-xl bg-white p-4">
              <strong>Fatigue:</strong>
              <span className="text-slate-700">
                {" "}May impair judgment, reduce self-control and
                increase irritability.
              </span>
            </div>
          </div>
        </section>

        {/* IDENTIFICATION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            👀 Identifying Violence & Harassment
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Physical violence – hitting, pushing, slapping or kicking.",
              "Verbal or psychological harassment – criticism, insults, humiliation, threats or intimidation.",
              "Bullying – repeated unreasonable behaviour or unfair treatment.",
              "Sexual harassment – unwelcome sexual advances, inappropriate touching or comments.",
              "Sexual assault – non-consensual sexual contact or coercion.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-4 font-semibold text-slate-700"
              >
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* WARNING SIGNS */}
        <section className="rounded-2xl bg-yellow-50 p-6">
          <h2 className="text-2xl font-bold text-yellow-900">
            🚩 Warning Signs
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Increased tension or hostility",
              "Exclusionary groups",
              "Frequent requests for transfer",
              "Declining morale or productivity",
              "Rumours or complaints",
              "Silence around an individual or incident",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 font-semibold text-slate-700"
              >
                🚩 {item}
              </div>
            ))}
          </div>
        </section>

        {/* REPORTING */}
        <section className="rounded-2xl bg-cyan-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            📢 Reporting & Intervention
          </h2>

          <p className="mt-4 leading-7 text-cyan-100">
            Every seafarer should know how and when to intervene and how
            to report incidents properly. The purpose is to stop harmful
            behaviour, protect affected persons and support a fair and
            confidential process.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Recognize inappropriate behaviour",
              "Protect safety",
              "Use proper reporting channels",
              "Maintain confidentiality",
              "Avoid spreading rumours",
              "Support a fair process",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/10 p-4 font-semibold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONFIDENTIALITY */}
        <section className="rounded-2xl bg-purple-50 p-6">
          <h2 className="text-2xl font-bold text-purple-900">
            🔐 Confidentiality & Sensitivity
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Reports should be handled through proper channels while
            respecting privacy and ensuring impartiality.
          </p>

          <p className="mt-3 font-semibold leading-7 text-purple-900">
            Spreading rumours or making public accusations can cause
            further harm.
          </p>
        </section>

        {/* TRAUMA INFORMED */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            💙 Trauma-Informed Response
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A trauma-informed response emphasizes safety, sensitivity,
            respect and support so that further harm is not caused
            during or after the response.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Safety",
              "Trustworthiness & Transparency",
              "Empowerment & Choice",
              "Collaboration & Support",
              "Cultural & Gender Sensitivity",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-cyan-50 p-4 text-center font-bold text-cyan-900"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • Violence and harassment can affect{" "}
              <strong>safety, discipline and morale</strong>.
            </p>

            <p>
              • Bullying is <strong>repeated unreasonable behaviour</strong>.
            </p>

            <p>
              • Sexual harassment involves{" "}
              <strong>unwelcome sexual conduct</strong>.
            </p>

            <p>
              • Sexual assault involves{" "}
              <strong>non-consensual sexual contact or behaviour</strong>.
            </p>

            <p>
              • Harm can progress from teasing and exclusion to bullying,
              physical violence or sexual assault.
            </p>

            <p>
              • Contributing factors include abuse of power,
              discrimination, stress, isolation, fatigue and{" "}
              <strong>drugs or alcohol</strong>.
            </p>

            <p>
              • Early identification and intervention can help prevent{" "}
              <strong>escalation</strong>.
            </p>

            <p>
              • Reports should be handled with{" "}
              <strong>confidentiality and sensitivity</strong>.
            </p>

            <p>
              • A respectful workplace supports teamwork,
              communication, trust and <strong>shipboard safety</strong>.
            </p>
          </div>
        </section>

        {/* COMPLETION */}
        <section className="rounded-2xl bg-green-700 p-6 text-center text-white">
          <div className="text-4xl">🎉</div>
          <h2 className="mt-3 text-2xl font-bold">
            PSSR Study Topics Completed
          </h2>
          <p className="mt-2 text-green-100">
            You have reached the final PSSR study topic.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-08"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: MLC 2006
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/practice-cbt"
            className="rounded-xl bg-green-700 px-5 py-3 text-center font-semibold text-white hover:bg-green-800"
          >
            Start PSSR Practice CBT →
          </Link>
        </div>

      </div>
    </main>
  );
}