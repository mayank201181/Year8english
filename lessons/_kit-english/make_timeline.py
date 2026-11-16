"""Writes timeline.json for the kit test: every line 3 s (plus its pause), no audio."""
import importlib.util, json, os
D = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("s", os.path.join(D, "script.py")); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
t, chs = 0.6, []
for ch in m.CHAPTERS:
    st = t
    if ch.get("card", True):
        t += 1.8
    lines = []
    for l in ch["lines"]:
        e = {"id": l["id"], "start": round(t, 3), "end": round(t + 3, 3), "cap": l["cap"]}
        if l.get("who"):
            e["who"] = l["who"]
        lines.append(e)
        t += 3 + l.get("pause", 0) + 0.3
    t += 0.9
    chs.append({"id": ch["id"], "title": ch["title"], "short": ch["short"], "card": ch.get("card", True), "start": round(st, 3), "end": round(t, 3), "lines": lines})
json.dump({"voice": "none", "speed": 1, "chapters": chs, "total": round(t, 3)}, open(os.path.join(D, "timeline.json"), "w"), indent=1)
print("total", round(t, 1))
