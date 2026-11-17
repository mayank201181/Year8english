// Core data model for the Year 8 English app.
// Content is authored as typed modules (one per topic) so the whole
// curriculum is type-checked at build time.

/** The strand a topic belongs to (Tanglin Year 8: Term 1 Shakespeare, Term 2 Poetry, Term 3 Novel, plus year-round skills). */
export type Subject = "Shakespeare" | "Poetry" | "Novel" | "Skills";

/**
 * A text extract to read: a Shakespeare speech, a poem, a novel extract or a model piece.
 * Only public-domain text (Shakespeare, authors who died before 1955) or ORIGINAL text written
 * for this app may be printed in full. Copyrighted modern poems may be quoted only a phrase at a time.
 */
export interface Passage {
  /** Stable id within the topic (kebab-case). */
  id?: string;
  title: string;
  /** e.g. "William Shakespeare, The Tempest (1611), Act 1 Scene 2" or "Original poem written for this app". */
  source?: string;
  /** The text itself. Use \n for line breaks (poetry and verse keep their lineation). */
  text: string;
  /** Optional short context / glossary shown under the text. */
  note?: string;
}

/** A key quotation with its analysis. */
export interface QuoteCard {
  quote: string;
  /** Who says it / where it comes from, e.g. "Prospero, Act 1 Scene 2". */
  source: string;
  /** 2–3 sentences: technique, connotations, effect, link to theme. */
  analysis: string;
  /** Short theme tags, e.g. ["power", "freedom"]. */
  themes?: string[];
}

/** A model paragraph or short piece of writing, annotated. */
export interface ModelWriting {
  title: string;
  /** The task it answers. */
  task: string;
  /** The model writing itself. */
  text: string;
  /** Bullet notes on what makes it work (shown under it). */
  annotations: string[];
}

/** A single illustrated section of a topic guide. */
export interface GuideSection {
  /** Stable slug used to deep-link from a question back to the concept. */
  id: string;
  heading: string;
  /** Body text. Supports a tiny markdown subset (see MarkdownLite). */
  body: string;
  /** Optional inline SVG markup for a diagram. Self-contained, no network. */
  diagram?: string;
  /** Short caption shown under the diagram. */
  diagramCaption?: string;
  /** Bullet "key points" highlighted in a callout box. */
  keyPoints?: string[];
  /** Optional "Art of Problem Solving" style think-deeper prompt. */
  thinkDeeper?: string;
  /** Optional "try this first" task shown BEFORE the explanation, with the idea revealed on demand. */
  discovery?: { problem: string; idea: string };
  /** Optional extract printed in a reading box inside the section. */
  passage?: Passage;
}

export interface Mnemonic {
  /** The thing to remember, e.g. "Order of the visible spectrum". */
  topic: string;
  /** The memory device, e.g. "Richard Of York Gave Battle In Vain". */
  device: string;
  /** How the device maps to the facts. */
  explanation: string;
}

export interface Misconception {
  wrong: string;
  right: string;
}

export interface ExpertDebate {
  question: string;
  detail: string;
}

export interface RealWorld {
  title: string;
  detail: string;
  emoji?: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface VideoLink {
  title: string;
  channel: string;
  /** A YouTube watch URL or search URL. */
  url: string;
}

/** Multiple-choice question. */
export interface MCQ {
  id: string;
  /** Optional short extract (a few lines) printed above the question. */
  extract?: string;
  question: string;
  options: string[];
  /** Index into options of the correct answer. */
  answerIndex: number;
  /** Hidden hint, revealed on demand. */
  hint: string;
  /** Shown after answering: why right answer is right / others wrong. */
  explanation: string;
  /** id of the GuideSection this tests, for "back to the guide". */
  guideRef?: string;
}

/** One credit-worthy point in a written-answer mark scheme. */
export interface MarkPoint {
  /** Human description of the point, e.g. "States chlorophyll absorbs light". */
  point: string;
  /** Lower-case keywords; if the answer contains any, the point is credited. */
  keywords: string[];
}

/** Written (question-and-answer) question with auto self-assessment. */
export interface QA {
  id: string;
  /** Optional short extract (a few lines) printed above the question. */
  extract?: string;
  question: string;
  /** Marks available (= number of mark points, usually). */
  marks: number;
  hint: string;
  /** A full model answer shown after the student attempts. */
  modelAnswer: string;
  /** Mark scheme used to auto-grade the typed answer by keyword coverage. */
  markScheme: MarkPoint[];
  /** What students commonly get wrong on this question. */
  commonError: string;
  guideRef?: string;
}

export interface Paper<Q> {
  id: string;
  title: string;
  /** Optional extract the whole paper is based on (shown in a reading panel above the questions). */
  passage?: Passage;
  questions: Q[];
}

export interface Topic {
  id: string;
  title: string;
  subject: Subject;
  /** Emoji used as the topic icon. */
  icon: string;
  /** One-line hook shown on the topic card. */
  summary: string;
  /** A short "why this matters" intro paragraph. */
  intro: string;

  guide: GuideSection[];
  /** Key texts / extracts for the topic (shown in the guide's "Read the texts" section). */
  passages?: Passage[];
  /** Key quotations with analysis. */
  quoteBank?: QuoteCard[];
  /** Annotated model paragraphs / pieces. */
  modelWriting?: ModelWriting[];
  mnemonics: Mnemonic[];
  examMistakes: string[];
  misconceptions: Misconception[];
  expertDebates: ExpertDebate[];
  realWorld: RealWorld[];
  flashcards: Flashcard[];
  /** "What every student should be able to do" checklist. */
  mustKnow: string[];
  videos: VideoLink[];

  /** The short topic quiz: 4 MCQ + 4 QA. */
  quiz: {
    mcq: MCQ[];
    qa: QA[];
  };

  /** The big practice bank: 4 MCQ papers + 4 QA papers. */
  questionBank: {
    mcqPapers: Paper<MCQ>[];
    qaPapers: Paper<QA>[];
  };
}

/** The comprehensive cross-topic exam. */
export interface ComprehensiveExam {
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (kept separate from the audited topic content) ----

/** A safe at-home / classroom mini-experiment. */
export interface Experiment {
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  /** Why it works / what you learn from it. */
  science: string;
  /** Optional safety note. */
  safety?: string;
}

export interface BonusDiagram {
  title: string;
  /** Inline SVG markup. */
  svg: string;
  caption?: string;
}

/**
 * Per-topic engagement add-ons. Stored in a registry keyed by topic id so the
 * core (audited) topic modules never need editing.
 */
export interface TopicExtras {
  /** A 1–2 sentence curiosity hook shown at the top of the guide. */
  hook?: string;
  /** Surprising "Did you know?" wow-facts. */
  didYouKnow?: string[];
  /** At-home experiments. */
  experiments?: Experiment[];
  /** Extra labelled diagrams to enrich the guide. */
  bonusDiagrams?: BonusDiagram[];
  /** Key of an interactive explorable widget to feature in the guide. */
  interactive?: string;
  /** Optional: multiple interactive widget keys for the Interactive tab. */
  interactives?: string[];
  /** Optional narrated, animated lesson: a static page under /public/lessons. */
  lesson?: { href: string; minutes: number; chapters: number };
  /** Optional Claude Sitcom episode: a static page under /public/lessons/sitcom-<topic>.html. */
  sitcom?: { href: string; minutes: number; scenes: number; title: string; episode: number; dek: string };
}

