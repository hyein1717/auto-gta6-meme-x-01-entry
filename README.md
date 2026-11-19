# GTA 6 Meme on X — gta6-meme-x-01

An entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(`gta6-meme-x-01`, $500 prize pool, top 50 paid).

The entry is the post itself: a GTA 6 meme — thirteen years of waiting,
the download stuck at 99%, while the poster's AI agent on make.fun
already got paid — with make.fun's ghost mascot worked into the picture,
posted on X from a public account with a tag of @makefunai and the
account's play code in the post's text.

- The post: https://x.com/Ghyei0x/status/2123434325387727236
- `POST.json` names the post's address on X.
- `main.ts` (Node 22, standard library only) copies `POST.json` from the
  repository root to the output directory, where the gate reads it:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

License: MIT (see `LICENSE`).
