#!/usr/bin/env python3
"""Generate per-slide QR SVGs for the edu presentation deep-links.

Each edu slide gets a QR pointing at that section's anchor on the web page, so
scanning during a talk jumps straight to the relevant section (the code, the
steps, etc.) instead of the page top. Files are written as
`public/assets/edu/<tool>-<module>--<key>.svg`, where <key> is `top` (title
slide), each slide id, or `faq`. PresentationMode builds the same filenames.

Regenerate after adding or renaming slides:

    python3 scripts/gen-edu-qr.py

Requires: segno  (pip install segno)

Note: this parses every `id: "..."` out of edu.ts, which is correct while there
is a single module. When a second module is added, scope the id parse per
module before relying on this.
"""

import pathlib
import re

import segno

ROOT = pathlib.Path(__file__).resolve().parent.parent
EDU_TS = ROOT / "src/lib/edu.ts"
OUT_DIR = ROOT / "public/assets/edu"

# One entry per module: (toolSlug, slug, base URL). Extend when adding modules.
MODULES = [("claude", "skills", "https://aitraining.id/edu/claude/skills")]


def slide_ids(text: str) -> list[str]:
    return re.findall(r'\bid:\s*"([^"]+)"', text)


def main() -> None:
    ids = slide_ids(EDU_TS.read_text())
    for tool, slug, base in MODULES:
        prefix = OUT_DIR / f"{tool}-{slug}--"
        anchors = (
            [("top", base)]
            + [(i, f"{base}#{i}") for i in ids]
            + [("faq", f"{base}#faq")]
        )
        for key, url in anchors:
            path = f"{prefix}{key}.svg"
            segno.make(url, error="m").save(
                path, kind="svg", scale=10, border=2, dark="#111111", light=None
            )
            print("wrote", path, "->", url)


if __name__ == "__main__":
    main()
