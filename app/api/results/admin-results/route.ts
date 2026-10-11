
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "../../../../lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7);

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const adminUid = process.env.ADMIN_USER_ID;

    if (!url || !anonKey || !adminUid) {
      console.error("Admin API configuration missing");
      return NextResponse.json(
        { error: "Server configuration missing" },
        { status: 500 }
      );
    }

    const authClient = createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser(token);

    if (authError || !user || user.id !== adminUid) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("cbt_results")
      .select(
        "id,candidate_name,roll_no,course,score,total_questions,percentage,result,created_at"
      )
      .order("created_at", { ascending: false })
      .limit(1000);

    if (error) {
      console.error(error.message);
      return NextResponse.json(
        { error: "Could not load results" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      results: data ?? [],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7);
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const adminUid = process.env.ADMIN_USER_ID;

    if (!url || !anonKey || !adminUid) {
      return NextResponse.json(
        { error: "Server configuration missing" },
        { status: 500 }
      );
    }

    const authClient = createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: { user }, error: authError } =
      await authClient.auth.getUser(token);

    if (authError || !user || user.id !== adminUid) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const ids = body?.ids;

    if (
      !Array.isArray(ids) ||
      ids.length === 0 ||
      ids.length > 100 ||
      !ids.every(
        (id: unknown) =>
          (typeof id === "string" &&
            id.length > 0 &&
            id.length <= 100) ||
          (typeof id === "number" &&
            Number.isSafeInteger(id) &&
            id > 0)
      ) ||
      new Set(ids.map(String)).size !== ids.length
    ) {
      return NextResponse.json(
        { error: "Invalid result IDs" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("cbt_results")
      .delete()
      .in("id", ids)
      .select("id");

    if (error) {
      console.error("Delete results failed:", error.message);
      return NextResponse.json(
        { error: "Could not delete results" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      deletedCount: data?.length ?? 0,
    });
  } catch (error) {
    console.error("Admin delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
