// One Star for Monday — make.fun bounty entry.
// Writes a single-line, one-star review of Monday as if it were a
// restaurant to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A weary diner's complaint: Monday as a restaurant. A bad table, cold
// coffee, and a bill that arrives as meetings before lunch. Tightened:
// "then" carries the escalation better than "and ... with".
const REVIEW =
  "One star. Monday sat me at the worst table, served cold coffee, then billed me five meetings before lunch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
console.log(REVIEW);
