"use client";

import Link from "next/link";

export default function FPFFTopic10() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 10
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Fire / Smoke Detection & Fire Alarms
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Types, construction and working principles of fire
            detection systems used to detect smoke, flame and heat.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRO */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Fire Detection
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            According to the FPFF handout, there are three types of
            detectors:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-100 p-5 text-center">
              <div className="text-4xl">💨</div>
              <p className="mt-3 text-lg font-bold text-slate-900">
                Smoke Detector
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5 text-center">
              <div className="text-4xl">🌡️</div>
              <p className="mt-3 text-lg font-bold text-orange-900">
                Heat Sensor
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 text-center">
              <div className="text-4xl">🔥</div>
              <p className="mt-3 text-lg font-bold text-red-900">
                Flame Detector
              </p>
            </div>

          </div>
        </section>

        {/* SMOKE DETECTOR */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-2xl">
              💨
            </div>

            <div>
              <p className="text-sm font-bold text-red-600">
                DETECTOR 01
              </p>
              <h2 className="text-2xl font-bold text-red-900">
                Smoke Detector
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <h3 className="font-bold text-blue-900">
              Purpose
            </h3>

            <p className="mt-2 text-slate-700">
              To detect smoke present in the compartment.
            </p>
          </div>
        </section>

        {/* SMOKE CONSTRUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Smoke Detector – Construction
          </h2>

          <p className="mt-3 text-slate-700">
            The handout lists the following main parts:
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Base standard with neon lamp",
              "Alarm and control circuit",
              "Detector head with flash lamp and photo-electric cell",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-900 font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SMOKE OPERATION */}
        <section className="rounded-2xl border-l-4 border-slate-500 bg-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            How Does a Smoke Detector Work?
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When smoke is present, light is scattered onto the
            photo-electric cell and the alarm is triggered.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 font-bold text-slate-700">
            <span className="rounded-lg bg-white px-4 py-2">
              Smoke
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-4 py-2">
              Light Scattered
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-4 py-2">
              Photo-electric Cell
            </span>

            <span>→</span>

            <span className="rounded-lg bg-red-600 px-4 py-2 text-white">
              🔔 Alarm
            </span>
          </div>
        </section>

        {/* FLAME DETECTOR */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
              🔥
            </div>

            <div>
              <p className="text-sm font-bold text-red-600">
                DETECTOR 02
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Flame Detector
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-red-50 p-5">
            <h3 className="font-bold text-red-900">
              Purpose
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              When a flame of fire is present in the compartment, the
              sensor is activated and gives an alarm.
            </p>
          </div>
        </section>

        {/* FLAME CONSTRUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Flame Detector – Construction
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              "Standard base with neon lamp",
              "Time delay unit",
              "Amplifier",
              "Photo-electric cell and lenses",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-red-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}

          </div>
        </section>

        {/* FLAME OPERATION */}
        <section className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-900">
            Flame Detector – Principle of Operation
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Flickering radiation from the flame reaches the detector
            lenses. Infra-red rays pass through and are focused on the
            cell.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The signal from the cell goes to the amplifier and then to
            the time-delay unit, which triggers the alarm circuit.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 font-bold">
            <span className="rounded-lg bg-white px-3 py-2">
              🔥 Flame
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              IR Radiation
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Lenses
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Photo Cell
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Amplifier
            </span>

            <span>→</span>

            <span className="rounded-lg bg-red-600 px-3 py-2 text-white">
              🔔 Alarm
            </span>
          </div>
        </section>

        {/* HEAT SENSOR */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🌡️
            </div>

            <div>
              <p className="text-sm font-bold text-orange-600">
                DETECTOR 03
              </p>

              <h2 className="text-2xl font-bold text-red-900">
                Heat Sensor
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-orange-50 p-5">
            <h3 className="font-bold text-orange-900">
              Purpose
            </h3>

            <p className="mt-2 text-slate-700">
              To detect heat created by fire in the compartment.
            </p>
          </div>
        </section>

        {/* HEAT CONSTRUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">
            Heat Sensor – Construction
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Electric lead",
              "Bleed vent",
              "Diaphragm",
              "Bimetal cells",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-orange-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* HEAT OPERATION */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-orange-900">
            Heat Sensor – Principle of Operation
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            When the temperature in the compartment gradually
            increases due to fire, the air pressure inside also
            increases.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The diaphragm is compressed and closes the contact,
            causing the alarm to operate.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 font-bold">
            <span className="rounded-lg bg-white px-3 py-2">
              🔥 Fire
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Temperature Rises
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Pressure Rises
            </span>

            <span>→</span>

            <span className="rounded-lg bg-white px-3 py-2">
              Diaphragm
            </span>

            <span>→</span>

            <span className="rounded-lg bg-red-600 px-3 py-2 text-white">
              🔔 Alarm
            </span>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Detector Comparison
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Detector</th>
                  <th className="p-3">Detects</th>
                  <th className="p-3">Main Principle</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-3 font-bold">
                    Smoke Detector
                  </td>
                  <td className="p-3">Smoke</td>
                  <td className="p-3">
                    Scattered light reaches photo-electric cell
                  </td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">
                    Flame Detector
                  </td>
                  <td className="p-3">Flame</td>
                  <td className="p-3">
                    Infra-red radiation reaches photo-electric cell
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold">
                    Heat Sensor
                  </td>
                  <td className="p-3">Heat</td>
                  <td className="p-3">
                    Rise in temperature and pressure operates contact
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MEMORY */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Easy Way to Remember
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">💨</div>
              <p className="mt-2 font-bold">Smoke</p>
              <p className="mt-1 text-sm text-slate-300">
                Smoke Detector
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">🔥</div>
              <p className="mt-2 font-bold">Flame</p>
              <p className="mt-1 text-sm text-slate-300">
                Flame Detector
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 text-center">
              <div className="text-3xl">🌡️</div>
              <p className="mt-2 font-bold">Heat</p>
              <p className="mt-1 text-sm text-slate-300">
                Heat Sensor
              </p>
            </div>

          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Three detectors: Smoke Detector • Heat Sensor • Flame
              Detector. Smoke detector uses scattered light and a
              photo-electric cell • Flame detector responds to
              flickering radiation / infra-red rays • Heat sensor
              responds to increasing temperature and pressure and
              operates the alarm.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff/topic-09"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← Previous: Shipboard Fire Fighting
          </Link>

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-11"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Classification of Fires →
          </Link>

        </div>

      </div>
    </main>
  );
}