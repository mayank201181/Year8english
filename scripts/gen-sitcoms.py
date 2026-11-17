#!/usr/bin/env python3
"""Regenerate lib/sitcoms.ts from every built Claude Sitcom episode (lessons/sitcom-<topic> + public/lessons)."""
import glob, json, os, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO, "lessons", "engine"))
from build import load_script  # noqa: E402

out = {}
for d in sorted(glob.glob(os.path.join(REPO, "lessons", "sitcom-*"))):
    folder = os.path.basename(d)
    if not os.path.exists(os.path.join(REPO, "public", "lessons", f"{folder}.html")):
        continue
    meta = load_script(folder).META
    tl = json.load(open(os.path.join(d, "timeline.json")))
    n = len(tl["chapters"])
    ep = int(re.search(r"Ep (\d+)", meta["kicker"]).group(1))
    words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    dek = meta["dek"].replace("{chapters}", words[n] if n < len(words) else str(n))
    out[meta.get("lab", folder[7:])] = dict(href=f"/lessons/{folder}.html", episode=ep, title=meta["name"], dek=dek,
                                            minutes=max(1, round(tl["total"] / 60)), chapters=n)
body = json.dumps(dict(sorted(out.items(), key=lambda kv: kv[1]["episode"])), indent=2, ensure_ascii=False)
src = open(os.path.join(REPO, "lib", "sitcoms.ts")).read()
src = re.sub(r"export const SITCOMS: Record<string, SitcomInfo> = [\s\S]*$", f"export const SITCOMS: Record<string, SitcomInfo> = {body};\n", src)
open(os.path.join(REPO, "lib", "sitcoms.ts"), "w").write(src)
print(f"lib/sitcoms.ts: {len(out)} episodes")
