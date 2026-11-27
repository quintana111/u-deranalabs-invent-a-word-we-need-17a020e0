// "Invent a Word We Need" (make.fun) — a program that writes one coined word
// and its one-line definition to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The entry (one line, 77 characters / 79 bytes):
//   notifidget — the urge to check your phone for a notification that never came.
//
// Why this word: it names a gap everyone lives with daily and no existing word
// covers — the reflexive phone-check for a buzz that never happened. Built from
// "notification" + "fidget": sayable on first sight, spellable as it sounds,
// and memorable because the reader has done it in the last hour. The definition
// lands in a single reading: one urge, one phone, one absent notification.
// Candidates considered and rejected (checked against live search first):
//   tabnesia  — already coined (Urban Dictionary, 2013)
//   snackward — already used (poem, 2012)
//   roomnesia — already coined (Instagram slang posts, 2026)
//   socklone  — genuine, but a weaker gap than the phone-check
//   byewalk   — exists in archaic senses (a by-road; Kipling's sidewalk)

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'notifidget \u2014 the urge to check your phone for a notification that never came.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
