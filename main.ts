// Dad Joke Showdown — one joke, told the way dads tell them:
// a straight-faced setup, a beat of silence at the dash, then the pun
// dropped on the very last word. Every word earns its seat at the table.
// This program validates its single line and writes it to /output/entry.txt.

import { writeFileSync } from "node:fs";

const supperTableLine =
  "I brought a ladder to dinner — I heard the steaks were high.";

function checkSupperLine(line: string): void {
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${charCount}.`);
  }
  if (line.trim().length === 0) {
    throw new Error("Joke cannot be only whitespace.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Joke must fit on a single line.");
  }
}

checkSupperLine(supperTableLine);
writeFileSync("/output/entry.txt", supperTableLine, "utf8");
