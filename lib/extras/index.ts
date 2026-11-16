import type { TopicExtras } from "../types";
import { shakespeareLanguageExtras } from "./shakespeare-language";
import { theTempestExtras } from "./the-tempest";
import { hamletExtras } from "./hamlet";
import { romeoAndJulietExtras } from "./romeo-and-juliet";
import { scriptWritingExtras } from "./script-writing";
import { publicSpeakingExtras } from "./public-speaking";
import { poetryToolkitExtras } from "./poetry-toolkit";
import { identityCulturePoetryExtras } from "./identity-culture-poetry";
import { poetryWritingExtras } from "./poetry-writing";
import { spokenPoemAnalysisExtras } from "./spoken-poem-analysis";
import { theNovelExtras } from "./the-novel";
import { discursiveWritingExtras } from "./discursive-writing";
import { comprehensionExtras } from "./comprehension";
import { descriptiveWritingExtras } from "./descriptive-writing";
import { analyticalWritingExtras } from "./analytical-writing";
import { spagExtras } from "./spag";

export const EXTRAS: Record<string, TopicExtras> = {
  "shakespeare-language": shakespeareLanguageExtras,
  "the-tempest": theTempestExtras,
  "hamlet": hamletExtras,
  "romeo-and-juliet": romeoAndJulietExtras,
  "script-writing": scriptWritingExtras,
  "public-speaking": publicSpeakingExtras,
  "poetry-toolkit": poetryToolkitExtras,
  "identity-culture-poetry": identityCulturePoetryExtras,
  "poetry-writing": poetryWritingExtras,
  "spoken-poem-analysis": spokenPoemAnalysisExtras,
  "the-novel": theNovelExtras,
  "discursive-writing": discursiveWritingExtras,
  "comprehension": comprehensionExtras,
  "descriptive-writing": descriptiveWritingExtras,
  "analytical-writing": analyticalWritingExtras,
  "spag": spagExtras,
};

const EMPTY: TopicExtras = {};
export function getExtras(id: string): TopicExtras {
  return EXTRAS[id] ?? EMPTY;
}
