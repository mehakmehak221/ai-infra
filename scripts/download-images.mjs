#!/usr/bin/env node
/**
 * Tech-only Full HD images (1920×1080) from Pexels CDN.
 * Each file = unique, verified tech photo (dashboards, code, servers, teams).
 * Run: node scripts/download-images.mjs
 */
import { createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { pipeline } from "stream/promises";
import { get } from "https";
import { stat } from "fs/promises";

const UA = "Mozilla/5.0 (compatible; AIInfra/1.0)";
const PARAMS = "auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";

/** filename → Pexels photo ID → subject */
const MAP = {
  "hero-main.jpg": {
    id: 7567443,
    label: "AI neural network visualization (hero background)",
  },
  "hero-bg.jpg": {
    id: 325229,
    label: "Server room / data center racks (legacy)",
  },
  "hero.jpg": {
    id: 3861969,
    label: "Analytics charts on laptop screen",
  },
  "solution.jpg": {
    id: 3184292,
    label: "Team reviewing data on monitors",
  },
  "how-it-works.jpg": {
    id: 1181263,
    label: "Developer coding on MacBook",
  },
  "developer-tech.jpg": {
    id: 4974915,
    label: "Developers working on laptops in modern office",
  },
  "cta.jpg": {
    id: 1148820,
    label: "Global cloud network connectivity",
  },
  "feature-analytics.jpg": {
    id: 669619,
    label: "Programming and data on screen",
  },
  "feature-routing.jpg": {
    id: 7567443,
    label: "AI neural network visualization",
  },
  "feature-gpu.jpg": {
    id: 442150,
    label: "Server hardware and cables",
  },
  "feature-prompts.jpg": {
    id: 574071,
    label: "Code editor on laptop",
  },
  "feature-alerts.jpg": {
    id: 3862632,
    label: "Business analytics dashboard",
  },
  "feature-cloud.jpg": {
    id: 1148820,
    label: "Global network / cloud connectivity",
  },
};

function pexelsUrl(photoId) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?${PARAMS}`;
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    get(url, { headers: { "User-Agent": UA } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        const next = res.headers.location;
        if (!next) return reject(new Error("Redirect without location"));
        get(next, { headers: { "User-Agent": UA } }, (r2) =>
          pipeline(r2, createWriteStream(dest)).then(resolve).catch(reject),
        );
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      pipeline(res, createWriteStream(dest)).then(resolve).catch(reject);
    }).on("error", reject);
  });
}

await mkdir("public/images", { recursive: true });

for (const [file, { id, label }] of Object.entries(MAP)) {
  const dest = `public/images/${file}`;
  const url = pexelsUrl(id);
  try {
    await download(url, dest);
    const { size } = await stat(dest);
    if (size < 50_000) {
      throw new Error(`File too small (${size} bytes) — likely not a real image`);
    }
    console.log(`✓ ${file} ← Pexels ${id} (${label}, ${Math.round(size / 1024)}KB)`);
  } catch (e) {
    console.error(`✗ ${file}:`, e.message);
  }
}
