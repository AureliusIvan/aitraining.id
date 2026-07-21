# Assets — Claude / Subagent module

Screenshots for `/edu/claude/subagent`. The numbered PNGs are already wired to
`gif` blocks in `src/lib/edu.ts` and render as plain `<img>` in both web and
presentation mode.

## Screenshots (in slide order)

| File | Slide | Shows |
|------|-------|-------|
| `01-buat-folder-project.png` | `buat-folder` | Folder project `cahaya-topup` di File Explorer |
| `02-open-in-terminal.png` | `buka-terminal` | Klik kanan → Open in Terminal |
| `03-jalankan-claude.png` | `jalankan-claude` | PowerShell, perintah `claude` |
| `04-claude-code-siap.png` | `claude-siap` | Layar sambutan Claude Code |
| `05-minta-buat-subagent.png` | `minta-subagent` | Permintaan pembuatan subagent di kolom input |
| `06-subagent-selesai-dibuat.png` | `subagent-jadi` | Laporan Claude setelah subagent dibuat |
| `07-file-subagent-tersimpan.png` | `cek-file` | `price-checker.md` di `.claude/agents` |
| `08-cowork-satu-subagent.png` | `di-cowork` | Satu subagent berjalan di Claude Cowork |
| `09-cowork-lima-subagent-paralel.png` | `cowork-paralel` | Lima subagent paralel di Claude Cowork |

## Still to record

| File | Slide | Should show |
|------|-------|-------------|
| `10-jalankan-subagent.gif` | `jalankan-subagent` | Claude memanggil subagent `price-checker`, lalu tabel perbandingan harganya keluar sebagai hasil akhir |

Until that file exists the slide renders a labelled placeholder frame, so the
layout is already stable. When the clip is ready, drop it here and set the
`src` on the `gif` block in the `jalankan-subagent` slide:

```ts
src: "/assets/edu/claude-subagent/10-jalankan-subagent.gif",
```

Keep it short (5-10 detik) and looping. It is the module's payoff moment: the
whole build sequence ends at "a file exists", and this clip is what turns that
into a visible result.

## Redaction note

These screenshots came from a client training session. Usernames, the
organization name, and one marketplace list were blurred before the files
landed here. Re-check any NEW screenshot for machine names, `C:\Users\<nama>`
paths, window titles, and client names before adding it.
