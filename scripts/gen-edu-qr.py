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
"""

from __future__ import annotations

import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
EDU_TS = ROOT / "src/lib/edu.ts"
OUT_DIR = ROOT / "public/assets/edu"

# One entry per live module: (toolSlug, slug, base URL).
MODULES = [
    ("claude", "skills", "https://aitraining.id/edu/claude/skills"),
    ("claude", "mcp", "https://aitraining.id/edu/claude/mcp"),
    ("claude", "cowork", "https://aitraining.id/edu/claude/cowork"),
    ("claude", "subagent", "https://aitraining.id/edu/claude/subagent"),
    ("claude", "agent-team", "https://aitraining.id/edu/claude/agent-team"),
    ("n8n", "node", "https://aitraining.id/edu/n8n/node"),
    ("git", "dasar", "https://aitraining.id/edu/git/dasar"),
    ("git", "untuk-ai-agent", "https://aitraining.id/edu/git/untuk-ai-agent"),
]


def module_slide_ids(text: str, tool_slug: str, module_slug: str) -> list[str]:
    """Pull slide ids from one EduModule block only (not the whole file)."""
    pattern = (
        rf'toolSlug:\s*"{re.escape(tool_slug)}"\s*,\s*'
        rf"[\s\S]*?"
        rf'slug:\s*"{re.escape(module_slug)}"\s*,'
        rf"[\s\S]*?"
        rf"slides:\s*\[([\s\S]*?)\]\s*,\s*faqs:"
    )
    match = re.search(pattern, text)
    if not match:
        raise SystemExit(
            f"Could not find slides for {tool_slug}/{module_slug} in edu.ts"
        )
    return re.findall(r'\bid:\s*"([^"]+)"', match.group(1))


def main() -> None:
    text = EDU_TS.read_text()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for tool, slug, base in MODULES:
        ids = module_slide_ids(text, tool, slug)
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
    import segno

    main()
