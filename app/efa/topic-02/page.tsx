"use client";

import Link from "next/link";

export default function EFATopic02() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/efa"
            className="text-sm font-semibold text-emerald-100 hover:text-white"
          >
            ← Back to EFA
          </Link>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-100">
            Elementary First Aid • Topic 02
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            🫀 Body Structure and Functions
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Basic understanding of the human body and its systems is important
            when giving first aid on board ship.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-7">

          {/* INTRODUCTION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              1. Introduction
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Treatment of illness on board ship requires some understanding
              of the anatomy and physiology of the human body.
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              The human body can be compared with a factory in which different
              departments perform different functions in coordination.
              Functioning of all the departments is essential.
            </p>
          </div>

          {/* SKELETON */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              2. The Skeleton System
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The human body consists of the head, trunk and limbs. The
              skeleton forms the framework of the body.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoCard
                title="💀 Skull"
                text="The skull has seven bones and the face has fourteen bones. The lower jaw or mandible can move."
              />

              <InfoCard
                title="🦴 Vertebral Column"
                text="The backbone is composed of 33 small bones called vertebrae."
              />

              <InfoCard
                title="🫁 Ribs"
                text="There are 12 ribs on each side."
              />

              <InfoCard
                title="🦴 Sternum"
                text="The breastbone or sternum is a flat bone forming the front of the thoracic cage."
              />

              <InfoCard
                title="🦴 Clavicle"
                text="The collarbone extends from the sternum to the shoulder."
              />

              <InfoCard
                title="🦴 Scapula"
                text="The shoulder blade or scapula is a thin flat bone forming part of the shoulder girdle."
              />
            </div>
          </div>

          {/* VERTEBRAL COLUMN */}
          <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
            <h2 className="text-2xl font-extrabold text-emerald-800">
              🦴 Vertebral Column
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Fact label="Cervical vertebrae" value="7" />
              <Fact label="Thoracic vertebrae" value="12" />
              <Fact label="Lumbar vertebrae" value="5" />
              <Fact label="Total vertebrae" value="33" />
            </div>
          </div>

          {/* LIMB BONES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              3. Bones of the Limbs
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  Upper Limb
                </h3>

                <div className="mt-3 space-y-2 text-slate-700">
                  <p>• Arm — Humerus</p>
                  <p>• Forearm — Radius and Ulna</p>
                  <p>• Wrist — 8 small bones</p>
                  <p>• Hand — 19 bones</p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  Lower Limb
                </h3>

                <div className="mt-3 space-y-2 text-slate-700">
                  <p>• Thigh — Femur</p>
                  <p>• Leg — Tibia and Fibula</p>
                  <p>• Ankle — 7 small bones</p>
                  <p>• Foot — 19 bones</p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-emerald-50 p-5">
              <h3 className="font-bold text-emerald-800">
                Hip Bone
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                There are two hip bones attached to the sacrum. Each hip bone
                is made of three bones — ilium, ischium and pubic bone.
              </p>
            </div>
          </div>

          {/* JOINTS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              4. The Joints
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bones are joined to one another by ligaments. Joints may be
              movable or immovable.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Hinge Joint"
                text="Movement in one plane, such as the knee and elbow."
              />

              <InfoCard
                title="Ball & Socket"
                text="Movement in all planes, such as the shoulder."
              />

              <InfoCard
                title="Limited Movement"
                text="Some joints allow only a small degree of movement, such as the wrist."
              />
            </div>
          </div>

          {/* MUSCLES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              5. The Muscles
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Muscles cover the bones. Muscles attached to bones cross over
              joints and produce movement when they contract.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="💪 Voluntary Muscles"
                text="Can be contracted at will and are also called striated muscles."
              />

              <InfoCard
                title="🔄 Involuntary Muscles"
                text="Cannot be contracted at will. They are also called smooth muscles."
              />

              <InfoCard
                title="❤️ Cardiac Muscle"
                text="The muscle of the heart is a special type of involuntary muscle."
              />
            </div>
          </div>

          {/* SKIN */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              6. Skin
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The body is covered by skin. Under the skin lies a layer of fat
              which acts as insulation.
            </p>

            <div className="mt-4 space-y-2 text-slate-700">
              <p>• Protects underlying tissues from mechanical injury.</p>
              <p>• Helps maintain body temperature.</p>
              <p>• Functions as an excretory organ through sweating.</p>
            </div>
          </div>

          {/* BRAIN */}
          <div className="rounded-2xl bg-teal-50 p-6 ring-1 ring-teal-200">
            <h2 className="text-2xl font-extrabold text-teal-800">
              🧠 Brain
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The brain is the master organ. It receives information from
              organs of special senses, controls movement, interprets
              sensation, regulates body activities and generates memory and
              thoughts.
            </p>
          </div>

          {/* CARDIOVASCULAR */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              7. Cardiovascular System
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The cardiovascular system includes the heart and blood vessels.
              The heart has four chambers.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Upper Chambers"
                text="The upper two chambers are called atria."
              />

              <InfoCard
                title="Lower Chambers"
                text="The lower two chambers are called ventricles."
              />

              <InfoCard
                title="Tricuspid Valve"
                text="Located between the right atrium and right ventricle."
              />

              <InfoCard
                title="Mitral Valve"
                text="The bicuspid or mitral valve is on the left side of the heart."
              />
            </div>

            <div className="mt-5 rounded-xl bg-red-50 p-5">
              <p className="font-bold text-red-800">
                Normal Pulse Rate
              </p>
              <p className="mt-1 text-2xl font-extrabold text-red-700">
                70–80 per minute
              </p>
            </div>
          </div>

          {/* RESPIRATORY */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              8. Respiratory System
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The respiratory system consists of the lungs and respiratory
              tract including the nose, pharynx, larynx, trachea, bronchi and
              bronchioles.
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              Bronchioles finally break into small sacs called alveoli.
              Gaseous exchange occurs between air in the alveoli and blood in
              the pulmonary capillaries.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-5">
              <p className="font-bold text-blue-800">
                Normal Adult Respiratory Rate
              </p>
              <p className="mt-1 text-2xl font-extrabold text-blue-700">
                16–20 per minute
              </p>
            </div>
          </div>

          {/* OTHER SYSTEMS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-emerald-700">
              9. Other Body Systems
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoCard
                title="🍽️ Digestive System"
                text="Includes the stomach, small intestine, large intestine, rectum and glands such as the salivary glands, liver and pancreas."
              />

              <InfoCard
                title="💧 Urinary System"
                text="Consists of kidneys, ureters, urinary bladder and urethra."
              />

              <InfoCard
                title="⚙️ Endocrine System"
                text="Glands secrete hormones into the bloodstream to regulate body activities and functions."
              />

              <InfoCard
                title="👶 Reproductive System"
                text="Consists of the gonads, reproductive tract and hormones needed for sexual reproduction."
              />

              <InfoCard
                title="🛡️ Immune System"
                text="Protects the body from disease-causing organisms."
              />

              <InfoCard
                title="👁️ Special Sense Organs"
                text="Special sense organs are linked with the nervous system."
              />
            </div>
          </div>

          {/* QUICK REVISION */}
          <div className="rounded-2xl bg-emerald-700 p-7 text-white shadow-lg">
            <h2 className="text-2xl font-extrabold">
              📌 Quick Revision
            </h2>

            <div className="mt-4 space-y-2 text-emerald-50">
              <p>✓ Vertebral column — 33 vertebrae.</p>
              <p>✓ 12 ribs on each side.</p>
              <p>✓ Heart — 4 chambers.</p>
              <p>✓ Normal pulse — 70–80 per minute.</p>
              <p>✓ Normal adult respiration — 16–20 per minute.</p>
              <p>✓ Voluntary, involuntary and cardiac muscles.</p>
              <p>✓ Brain is described as the master organ.</p>
              <p>✓ Immune system protects against disease-causing organisms.</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/efa/topic-01"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Topic 01
            </Link>

            <Link
              href="/efa"
              className="text-center font-semibold text-emerald-700 hover:underline"
            >
              EFA Topics
            </Link>

            <Link
              href="/efa/topic-03"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Topic 03: Positioning of Casualty →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4">
      <span className="font-semibold text-slate-700">{label}</span>
      <span className="text-xl font-extrabold text-emerald-700">{value}</span>
    </div>
  );
}