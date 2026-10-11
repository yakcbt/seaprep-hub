
"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type CBTResult = {
  id: string | number;
  candidate_name: string;
  roll_no: string;
  course: string;
  score: number;
  total_questions: number;
  percentage: number;
  result: string;
  created_at: string;
};

const courses = [
  "ALL",
  "PST",
  "FPFF",
  "PSSR",
  "EFA",
  "STSDSD",
  "GSK",
  "MEK",
];

const inputStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  background: "white",
  color: "#0f172a",
  minWidth: 155,
};

const cardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 12,
  padding: 22,
  border: "1px solid #e2e8f0",
};

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase configuration missing");
  }

  return createClient(url, key);
}

export default function AdminDashboard() {
  const [results, setResults] = useState<CBTResult[]>([]);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  async function getToken() {
    const supabase = getSupabaseClient();

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
      window.location.replace("/admin");
      throw new Error("Please login again");
    }

    return session.access_token;
  }

  async function loadResults() {
    try {
      setLoading(true);
      setError("");

      const token = await getToken();

      const response = await fetch(
        "/api/results/admin-results",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (response.status === 401 ||
          response.status === 403) {
        setResults([]);
        window.location.replace("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to load results"
        );
      }

      setResults(data.results || []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadResults();
  }, []);

  // ADMIN LOGOUT
  async function handleLogout() {
    if (loggingOut || deleting) return;

    try {
      setLoggingOut(true);
      setError("");

      const supabase = getSupabaseClient();

      const { error: logoutError } =
        await supabase.auth.signOut();

      if (logoutError) {
        throw logoutError;
      }

      setResults([]);
      setSelected([]);

      window.location.replace("/admin");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Logout failed. Please try again."
      );
      setLoggingOut(false);
    }
  }

  const filtered = useMemo(() => {
    return results.filter((item) => {
      const text = search.trim().toLowerCase();

      const matchesSearch =
        item.candidate_name
          .toLowerCase()
          .includes(text) ||
        item.roll_no
          .toLowerCase()
          .includes(text);

      const matchesCourse =
        course === "ALL" ||
        item.course === course;

      const matchesStatus =
        status === "ALL" ||
        item.result === status;

      return (
        matchesSearch &&
        matchesCourse &&
        matchesStatus
      );
    });
  }, [results, search, course, status]);

  const passed = results.filter(
    (item) => item.result === "PASS"
  ).length;

  const failed = results.filter(
    (item) => item.result === "FAIL"
  ).length;

  const uniqueStudents = new Set(
    results.map((item) =>
      item.roll_no.trim().toLowerCase()
    )
  ).size;

  const visibleIds = filtered.map(
    (item) => String(item.id)
  );

  const allVisibleSelected =
    visibleIds.length > 0 &&
    visibleIds.every((id) =>
      selected.includes(id)
    );

  function toggleOne(id: string) {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter(
            (value) => value !== id
          )
        : [...previous, id]
    );
  }

  function toggleAllVisible() {
    if (allVisibleSelected) {
      setSelected((previous) =>
        previous.filter(
          (id) => !visibleIds.includes(id)
        )
      );
    } else {
      setSelected((previous) => [
        ...new Set([
          ...previous,
          ...visibleIds,
        ]),
      ]);
    }
  }

  async function deleteResults(ids: string[]) {
    if (
      ids.length === 0 ||
      deleting ||
      loggingOut
    ) {
      return;
    }

    if (ids.length > 100) {
      setError(
        "Maximum 100 results can be deleted at once."
      );
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to permanently delete ${ids.length} result(s)? This cannot be undone.`
    );

    if (!confirmed) return;

    const typed = window.prompt(
      `To confirm deletion of ${ids.length} result(s), type DELETE:`
    );

    if (typed !== "DELETE") {
      setMessage("Deletion cancelled.");
      return;
    }

    try {
      setDeleting(true);
      setError("");
      setMessage("");

      const token = await getToken();

      const response = await fetch(
        "/api/results/admin-results",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ids }),
        }
      );

      const data = await response.json();

      if (response.status === 401 ||
          response.status === 403) {
        window.location.replace("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Delete failed"
        );
      }

      setSelected([]);

      setMessage(
        `${data.deletedCount ?? 0} result(s) deleted successfully.`
      );

      await loadResults();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to delete results"
      );
    } finally {
      setDeleting(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        color: "#0f172a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        className="no-print"
        style={{
          background: "#082c50",
          color: "white",
          padding: "22px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 26,
            }}
          >
            SeaPrep Hub
          </h1>

          <p style={{ marginBottom: 0 }}>
            CBT Result Management Dashboard
          </p>
        </div>

        <button
          type="button"
          onClick={() => void handleLogout()}
          disabled={loggingOut || deleting}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "12px 22px",
            fontSize: 14,
            fontWeight: "bold",
            cursor:
              loggingOut || deleting
                ? "not-allowed"
                : "pointer",
          }}
        >
          {loggingOut
            ? "Logging out..."
            : "Logout"}
        </button>
      </header>

      <section
        style={{ padding: "30px 5%" }}
      >
        <div
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <h2>Admin Dashboard</h2>

          <button
            onClick={() => window.print()}
            disabled={
              loading ||
              !!error ||
              loggingOut
            }
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 8,
              padding: "12px 22px",
              cursor: "pointer",
            }}
          >
            Print Results
          </button>
        </div>

        {loading && (
          <p>Loading results...</p>
        )}

        {error && (
          <p
            className="no-print"
            style={{ color: "#dc2626" }}
          >
            Error: {error}
          </p>
        )}

        {message && (
          <p
            className="no-print"
            style={{ color: "#15803d" }}
          >
            {message}
          </p>
        )}

        {!loading && !error && (
          <>
            <div
              className="no-print"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
                marginBottom: 25,
              }}
            >
              <div style={cardStyle}>
                <p>Total Students</p>
                <h2>{uniqueStudents}</h2>
              </div>

              <div style={cardStyle}>
                <p>Total Exams</p>
                <h2>{results.length}</h2>
              </div>

              <div style={cardStyle}>
                <p>Passed</p>
                <h2
                  style={{ color: "#16a34a" }}
                >
                  {passed}
                </h2>
              </div>

              <div style={cardStyle}>
                <p>Failed</p>
                <h2
                  style={{ color: "#dc2626" }}
                >
                  {failed}
                </h2>
              </div>
            </div>

            <div
              className="no-print"
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 22,
              }}
            >
              <input
                style={inputStyle}
                placeholder="Search Name / Roll No"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <select
                style={inputStyle}
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                  setSelected([]);
                }}
              >
                {courses.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item === "ALL"
                      ? "All Courses"
                      : item}
                  </option>
                ))}
              </select>

              <select
                style={inputStyle}
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setSelected([]);
                }}
              >
                <option value="ALL">
                  All Results
                </option>
                <option value="PASS">
                  PASS
                </option>
                <option value="FAIL">
                  FAIL
                </option>
              </select>
            </div>

            <div
              className="no-print"
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: 18,
              }}
            >
              <span>
                <strong>
                  {selected.length}
                </strong>{" "}
                selected
              </span>

              <button
                disabled={
                  selected.length === 0 ||
                  deleting ||
                  loggingOut
                }
                onClick={() =>
                  void deleteResults(selected)
                }
                style={{
                  padding: "11px 18px",
                  border: "none",
                  borderRadius: 8,
                  color: "white",
                  background:
                    selected.length === 0 ||
                    deleting
                      ? "#94a3b8"
                      : "#dc2626",
                  cursor: "pointer",
                }}
              >
                {deleting
                  ? "Deleting..."
                  : "Delete Selected"}
              </button>

              <button
                onClick={() =>
                  setSelected([])
                }
                disabled={
                  deleting ||
                  loggingOut ||
                  selected.length === 0
                }
                style={{
                  padding: "11px 18px",
                  border:
                    "1px solid #cbd5e1",
                  borderRadius: 8,
                  background: "white",
                  color: "#0f172a",
                }}
              >
                Clear Selection
              </button>
            </div>

            <div
              style={{
                ...cardStyle,
                overflowX: "auto",
              }}
            >
              <h3>
                Student Examination Results
              </h3>

              <p>
                Showing {filtered.length} of{" "}
                {results.length} records
              </p>

              <table
                style={{
                  width: "100%",
                  borderCollapse:
                    "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#e2e8f0",
                    }}
                  >
                    <th
                      className="no-print"
                      style={{
                        padding: 12,
                      }}
                    >
                      <input
                        type="checkbox"
                        aria-label="Select all visible results"
                        checked={
                          allVisibleSelected
                        }
                        onChange={
                          toggleAllVisible
                        }
                        disabled={deleting}
                      />
                    </th>

                    {[
                      "S.No.",
                      "Student Name",
                      "Roll No.",
                      "Course",
                      "Score",
                      "Percentage",
                      "Result",
                      "Date",
                    ].map((heading) => (
                      <th
                        key={heading}
                        style={{
                          padding: 12,
                          textAlign: "left",
                          borderBottom:
                            "1px solid #cbd5e1",
                        }}
                      >
                        {heading}
                      </th>
                    ))}

                    <th
                      className="no-print"
                      style={{
                        padding: 12,
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map(
                    (item, index) => (
                      <tr key={item.id}>
                        <td
                          className="no-print"
                          style={{
                            padding: 12,
                          }}
                        >
                          <input
                            type="checkbox"
                            aria-label={`Select ${item.candidate_name}`}
                            checked={selected.includes(
                              String(item.id)
                            )}
                            onChange={() =>
                              toggleOne(
                                String(item.id)
                              )
                            }
                            disabled={
                              deleting
                            }
                          />
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {index + 1}
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {
                            item.candidate_name
                          }
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {item.roll_no}
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {item.course}
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {item.score}/
                          {
                            item.total_questions
                          }
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {item.percentage}%
                        </td>

                        <td
                          style={{
                            padding: 12,
                            color:
                              item.result ===
                              "PASS"
                                ? "#16a34a"
                                : "#dc2626",
                            fontWeight: "bold",
                          }}
                        >
                          {item.result}
                        </td>

                        <td
                          style={{
                            padding: 12,
                          }}
                        >
                          {item.created_at
                            ? new Date(
                                item.created_at
                              ).toLocaleString(
                                "en-IN"
                              )
                            : "-"}
                        </td>

                        <td
                          className="no-print"
                          style={{
                            padding: 12,
                          }}
                        >
                          <button
                            disabled={
                              deleting ||
                              loggingOut
                            }
                            onClick={() =>
                              void deleteResults([
                                String(item.id),
                              ])
                            }
                            style={{
                              background:
                                "#dc2626",
                              color: "white",
                              border: "none",
                              borderRadius: 6,
                              padding:
                                "8px 12px",
                              cursor: "pointer",
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>

              {filtered.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    padding: 20,
                  }}
                >
                  No results found.
                </p>
              )}
            </div>
          </>
        )}
      </section>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }

          body,
          main {
            background: white !important;
          }

          table {
            font-size: 11px !important;
          }

          th,
          td {
            border: 1px solid #ccc;
          }

          thead {
            display: table-header-group;
          }
        }
      `}</style>
    </main>
  );
}
