// Maps a question id to its topic from the id prefix alone (e.g. "ham-mcq-p1-q03" -> "hamlet"),
// so client code can attribute results without loading every question bank.
const PREFIX: Record<string, string> = {
  shk: "shakespeare-language",
  tmp: "the-tempest",
  ham: "hamlet",
  rj: "romeo-and-juliet",
  scr: "script-writing",
  spk: "public-speaking",
  ptk: "poetry-toolkit",
  idc: "identity-culture-poetry",
  pwr: "poetry-writing",
  spa: "spoken-poem-analysis",
  nov: "the-novel",
  dis: "discursive-writing",
  cmp: "comprehension",
  dsc: "descriptive-writing",
  anl: "analytical-writing",
  spg: "spag",
};

export function topicIdOfQid(qid: string): string | undefined {
  return PREFIX[qid.split("-")[0]];
}
