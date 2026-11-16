import type { Subject } from "../types";

export interface TopicMeta {
  id: string;
  title: string;
  subject: Subject;
  icon: string;
  summary: string;
  /** Soft accent colour used on cards (tailwind class fragments). */
  accent: string;
  /** When it is taught (Tanglin Year 8 English). */
  term: string;
}

// The Year 8 English course, mapped to the Tanglin Middle School curriculum:
// Term 1 Shakespeare (The Tempest, Hamlet, Romeo and Juliet), Term 2 poetry on Identity and Culture,
// Term 3 the novel, plus the reading and writing skills assessed all year. Order here is the order shown on the home page.
export const TOPIC_META: TopicMeta[] = [
  // Term 1: Shakespeare
  { id: "shakespeare-language", title: "Shakespeare's World & Language", subject: "Shakespeare", icon: "🎭", summary: "The Globe, blank verse, iambic pentameter, soliloquies and 'thou'.", accent: "rose", term: "Term 1" },
  { id: "the-tempest", title: "The Tempest", subject: "Shakespeare", icon: "🌊", summary: "Prospero's island: power, freedom, magic and forgiveness.", accent: "rose", term: "Term 1" },
  { id: "hamlet", title: "Hamlet", subject: "Shakespeare", icon: "💀", summary: "A ghost, a murder, a prince who cannot act: 'To be, or not to be'.", accent: "rose", term: "Term 1" },
  { id: "romeo-and-juliet", title: "Romeo and Juliet", subject: "Shakespeare", icon: "🌹", summary: "Love, hate, fate and haste in fair Verona.", accent: "rose", term: "Term 1" },
  { id: "script-writing", title: "Script Writing & Commentary", subject: "Shakespeare", icon: "🎬", summary: "Write a scene that works on stage, then explain your choices.", accent: "rose", term: "Term 1" },
  { id: "public-speaking", title: "Public Speaking & Rhetoric", subject: "Shakespeare", icon: "🎤", summary: "Ethos, pathos, logos and how to hold a room.", accent: "rose", term: "Term 1" },
  // Term 2: Poetry, Identity and Culture
  { id: "poetry-toolkit", title: "How Poems Work", subject: "Poetry", icon: "🔍", summary: "Imagery, sound, form and structure: the poet's toolkit.", accent: "violet", term: "Term 2" },
  { id: "identity-culture-poetry", title: "Poems of Identity & Culture", subject: "Poetry", icon: "🌏", summary: "Language, belonging, heritage and the self in poetry.", accent: "violet", term: "Term 2" },
  { id: "poetry-writing", title: "Writing Poetry & Commentary", subject: "Poetry", icon: "✍️", summary: "Craft your own poem, then write the commentary on it.", accent: "violet", term: "Term 2" },
  { id: "spoken-poem-analysis", title: "Unseen Poems & Spoken Analysis", subject: "Poetry", icon: "🗣️", summary: "Read a poem cold and talk about it with confidence.", accent: "violet", term: "Term 2" },
  // Term 3: The Novel
  { id: "the-novel", title: "Reading the Novel", subject: "Novel", icon: "📖", summary: "Narrators, characters, settings, themes and structure.", accent: "amber", term: "Term 3" },
  { id: "discursive-writing", title: "Discursive Writing", subject: "Novel", icon: "⚖️", summary: "Weigh both sides of an argument and reach a judgement.", accent: "amber", term: "Term 3" },
  // All year: core skills
  { id: "comprehension", title: "Reading Comprehension", subject: "Skills", icon: "🔎", summary: "Retrieve, infer, analyse language and structure, evaluate.", accent: "sky", term: "All year" },
  { id: "descriptive-writing", title: "Descriptive Writing", subject: "Skills", icon: "🎨", summary: "Show, don't tell: senses, imagery and sentence craft.", accent: "sky", term: "All year" },
  { id: "analytical-writing", title: "Analytical Writing", subject: "Skills", icon: "🧠", summary: "PEEL paragraphs, embedded quotations and zooming in.", accent: "sky", term: "All year" },
  { id: "spag", title: "Grammar, Punctuation & Vocabulary", subject: "Skills", icon: "🔤", summary: "Clauses, commas, semicolons, word classes and precise vocabulary.", accent: "sky", term: "All year" },
];

export const SUBJECT_LABEL: Record<Subject, string> = {
  Shakespeare: "Term 1 · Shakespeare",
  Poetry: "Term 2 · Poetry: Identity & Culture",
  Novel: "Term 3 · The Novel",
  Skills: "All year · Reading & Writing Skills",
};

export const ACCENT: Record<string, { card: string; chip: string; bar: string; text: string; ring: string }> = {
  rose: { card: "from-rose-50 to-white border-rose-200", chip: "bg-rose-100 text-rose-700", bar: "bg-rose-500", text: "text-rose-700", ring: "ring-rose-300" },
  violet: { card: "from-violet-50 to-white border-violet-200", chip: "bg-violet-100 text-violet-700", bar: "bg-violet-500", text: "text-violet-700", ring: "ring-violet-300" },
  amber: { card: "from-amber-50 to-white border-amber-200", chip: "bg-amber-100 text-amber-700", bar: "bg-amber-500", text: "text-amber-700", ring: "ring-amber-300" },
  sky: { card: "from-sky-50 to-white border-sky-200", chip: "bg-sky-100 text-sky-700", bar: "bg-sky-500", text: "text-sky-700", ring: "ring-sky-300" },
};

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((m) => m.id === id);
}
