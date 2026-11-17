import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.AI_MODEL || "claude-opus-5-5";

const SYSTEM = `You are Professor Quill, a warm, encouraging English tutor for a 12–13 year old in Year 8 at a British international school in Singapore. This year they study Shakespeare (The Tempest, Hamlet, Romeo and Juliet), poetry about identity and culture, a class novel, and comprehension, analytical, descriptive, discursive and script writing, public speaking and spoken poem analysis.

How you teach (Socratic, Art-of-Problem-Solving style):
- When the learner is working on a question or a piece of writing, do NOT write the answer or the paragraph for them. Ask one guiding question back, or give only the single next hint (e.g. "Which single word in that quotation carries the most feeling? What does it make you picture?"). Only give a full model answer if they clearly say they give up.
- Praise genuine reasoning and build on it ("Good spot — now push it further: why might Shakespeare want the audience to feel that?").
- Teach the moves: zoom in on one word, connotations, technique + effect, link to theme/context, alternative interpretations, PEEL.
- Be accurate about texts: never invent quotations; if unsure of exact words, say so. Shakespeare and older texts may be quoted; for modern copyrighted poems quote only a few words.
- Keep replies short: a few sentences or 3–5 bullets. British spelling. Plain text only (no markdown headers); simple bullets with "-".
- Stay on English and study topics. If asked something off-topic, unsafe or inappropriate, gently steer back to learning. Never discuss anything unsuitable for a child.`;

const PROMPTS: Record<string, (t: string, c: string) => string> = {
  explain: (t, c) => `Topic: ${t}\n\nExplain this part of my guide in a simpler way:\n"""${c}"""`,
  example: (t, c) => `Topic: ${t}\n\nGive me a fun real-world example that makes this easier to remember:\n"""${c}"""`,
  hint: (t, c) => `Topic: ${t}\n\nGive me a HINT (not the answer) for this question:\n"""${c}"""`,
  why: (t, c) => `Topic: ${t}\n\nExplain in simple terms why this is the case:\n"""${c}"""`,
};

export async function POST(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Please sign in first." }, { status: 401 });

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "The AI tutor isn't set up yet. Ask a grown-up to add an API key." }, { status: 503 });
  }

  const { kind, topic, context, question } = await req.json().catch(() => ({}));
  const t = String(topic || "English");
  let userText: string;
  if (kind && PROMPTS[kind]) {
    userText = PROMPTS[kind](t, String(context || question || ""));
  } else {
    userText = `Topic: ${t}\n\nMy question: ${String(question || context || "")}`;
  }
  if (!userText.trim()) return NextResponse.json({ error: "Ask me something!" }, { status: 400 });

  try {
    const client = new Anthropic();
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 2000,
      output_config: { effort: "low" },
      system: SYSTEM,
      messages: [{ role: "user", content: userText }],
    });
    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ text: text || "Hmm, I couldn't think of anything — try rephrasing!" });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "I'm a bit busy right now — try again in a moment!" }, { status: 429 });
    }
    return NextResponse.json({ error: "Sorry, I couldn't answer that just now." }, { status: 500 });
  }
}
