// One-star review of something essential — make.fun entry.
//
// Writes a single deadpan one-star review of sleep to /output/entry.txt.
// Deterministic: no network, no input files, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "Sleep costs eight hours a night and I still wake up tired. No refund. One star.";

const out =
  process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, REVIEW, "utf8");
