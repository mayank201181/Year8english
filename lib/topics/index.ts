import type { Topic } from "../types";
import { TOPIC_META } from "./_meta";

import { shakespeareLanguage } from "./shakespeare-language";
import { theTempest } from "./the-tempest";
import { hamlet } from "./hamlet";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { scriptWriting } from "./script-writing";
import { publicSpeaking } from "./public-speaking";
import { poetryToolkit } from "./poetry-toolkit";
import { identityCulturePoetry } from "./identity-culture-poetry";
import { poetryWriting } from "./poetry-writing";
import { spokenPoemAnalysis } from "./spoken-poem-analysis";
import { theNovel } from "./the-novel";
import { discursiveWriting } from "./discursive-writing";
import { comprehension } from "./comprehension";
import { descriptiveWriting } from "./descriptive-writing";
import { analyticalWriting } from "./analytical-writing";
import { spag } from "./spag";

const REGISTRY: Record<string, Topic> = {
  "shakespeare-language": shakespeareLanguage,
  "the-tempest": theTempest,
  "hamlet": hamlet,
  "romeo-and-juliet": romeoAndJuliet,
  "script-writing": scriptWriting,
  "public-speaking": publicSpeaking,
  "poetry-toolkit": poetryToolkit,
  "identity-culture-poetry": identityCulturePoetry,
  "poetry-writing": poetryWriting,
  "spoken-poem-analysis": spokenPoemAnalysis,
  "the-novel": theNovel,
  "discursive-writing": discursiveWriting,
  "comprehension": comprehension,
  "descriptive-writing": descriptiveWriting,
  "analytical-writing": analyticalWriting,
  "spag": spag,
};

/** All topics in curriculum order. */
export const ALL_TOPICS: Topic[] = TOPIC_META.map((m) => REGISTRY[m.id]).filter(Boolean);

export function getTopic(id: string): Topic | undefined {
  return REGISTRY[id];
}

export function topicIds(): string[] {
  return TOPIC_META.map((m) => m.id);
}
