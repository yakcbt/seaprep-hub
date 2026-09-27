import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seaprep-hub.vercel.app";

  const pages = [
    "",
    "/pst",
    "/fpff",
    "/pssr",
    "/efa",
    "/stsdsd",
    "/gsk",
    "/mek",
    "/gsk/ship-familiarization",
    "/gsk/deck-equipment",
    "/gsk/ropes-knots",
    "/gsk/life-saving-appliances",
    "/gsk/fire-fighting-safety",
    "/gsk/cargo-cargo-gear",
    "/gsk/navigation-signals",
    "/gsk/seamanship",
        "/mek/marine-diesel-engine",
    "/mek/engine-components",
    "/mek/fuel-lubrication",
    "/mek/cooling-system",
    "/mek/pumps",
    "/mek/electrical-basics",
    "/mek/tools-maintenance",
    "/mek/engine-room-safety",
    "/mek/valves",
    "/mek/practice-cbt",
    "/gsk/practice-cbt",
    "/efa/topic-01",
"/efa/topic-02",
"/efa/topic-03",
"/efa/topic-04",
"/efa/topic-05",
"/efa/topic-06",
"/efa/topic-07",
"/efa/topic-08",
"/efa/topic-09",
"/efa/topic-10",
"/efa/practice-cbt",
...Array.from({ length: 15 }, (_, i) => `/fpff/topic-${String(i + 1).padStart(2, "0")}`),
"/fpff/practice-cbt",
...Array.from({ length: 9 }, (_, i) => `/pssr/topic-${String(i + 1).padStart(2, "0")}`),
"/pssr/practice-cbt",
...Array.from({ length: 8 }, (_, i) => `/pst/topic-${String(i + 1).padStart(2, "0")}`),
"/pst/practice-cbt",
...Array.from({ length: 12 }, (_, i) => `/stsdsd/topic-${String(i + 1).padStart(2, "0")}`),
"/stsdsd/practice-cbt",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
  }));
}