# GIF slots — Claude / Skills module

Drop the recorded GIFs here, then set the matching `src` on the `gif` block in
`src/lib/edu.ts` (the block already carries the caption + a description of what
the clip should show). Until a `src` is set, the page renders a labelled
placeholder frame, so the layout is stable before the real clips land.

Expected files (names are a suggestion, match them to the `src` you set):

| File | Shows |
|------|-------|
| `slash-menu.gif` | Mengetik `/` di Claude sampai daftar skill muncul, lalu memilih satu |
| `run-skill.gif`  | Menjalankan satu skill dari awal sampai hasilnya keluar |
| `create-skill.gif` | Membuat folder skill + `SKILL.md` lalu memanggilnya lewat `/` |

Keep each clip short (5-10 detik), looping, and recorded on a light/clean
Claude window so it reads well on the bright slide background.
