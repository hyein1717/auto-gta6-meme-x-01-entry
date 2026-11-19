// Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
// Node 22, standard library only.
//
// The entry is the post itself: a GTA 6 meme carrying make.fun's ghost
// mascot in its picture, posted on X from a public account with a tag of
// @makefunai and the account's play code in its text. POST.json at the
// repository root names that post's address on X.
//
// All this program has to do is hand the post's address to the gate: it
// copies POST.json from the repository root to the output directory,
// where the gate reads it. Nothing this program writes about the post
// is judged; the house reads the post from X and hands it to the judge.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the handed-in copy back and check it really names a post before
// reporting success: it must parse as JSON and carry a non-empty string
// `url`. A malformed copy fails here instead of at the gate.
let handedIn: { url?: unknown };
try {
  handedIn = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
} catch (err) {
  console.error(`POST.json in ${OUTPUT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof handedIn.url !== 'string' || handedIn.url.trim() === '') {
  console.error('POST.json does not carry a non-empty string `url` naming the post');
  process.exit(1);
}

console.log(`handed in post: ${handedIn.url}`);
