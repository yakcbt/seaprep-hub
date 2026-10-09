
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";

export const runtime = "nodejs";

const COURSES = [
  "PST",
  "FPFF",
  "PSSR",
  "EFA",
  "STSDSD",
  "GSK",
  "MEK",
];

export async function POST(request: NextRequest) {
  try {
    const raw = await request.text();

    if (raw.length > 4096) {
      return NextResponse.json(
        { error: "Request is too large" },
        { status: 413 }
      );
    }

    const data = JSON.parse(raw);

    const candidateName = data.candidate_name;
    const rollNo = data.roll_no;
    const course = data.course;
    const score = data.score;
    const totalQuestions = data.total_questions;

    if (
      typeof candidateName !== "string" ||
      typeof rollNo !== "string" ||
      typeof course !== "string" ||
      !Number.isInteger(score) ||
      !Number.isInteger(totalQuestions)
    ) {
      return NextResponse.json(
        { error: "Invalid result details" },
        { status: 400 }
      );
    }

    const name = candidateName.trim();
    const roll = rollNo.trim();

    if (
      !name ||
      !roll ||
      name.length > 100 ||
      roll.length > 40 ||
      !COURSES.includes(course)
    ) {
      return NextResponse.json(
        { error: "Invalid candidate or course" },
        { status: 400 }
      );
    }

    const expectedQuestions =
      course === "GSK" || course === "MEK" ? 50 : 30;

    if (
      totalQuestions !== expectedQuestions ||
      score < 0 ||
      score > totalQuestions
    ) {
      return NextResponse.json(
        { error: "Invalid score" },
        { status: 400 }
      );
    }

    const percentage =
      Math.round((score / totalQuestions) * 10000) / 100;

    const result = percentage >= 60 ? "PASS" : "FAIL";

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("cbt_results")
      .insert({
        candidate_name: name,
        roll_no: roll,
        course,
        score,
        total_questions: totalQuestions,
        percentage,
        result,
      });

    if (error) {
      console.error("Result insert failed:", error.message);

      return NextResponse.json(
        { error: "Could not save result" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Result saved successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
