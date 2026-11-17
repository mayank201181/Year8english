import type { TopicExtras } from "../types";

// Engagement extras for Reading the Novel.
export const theNovelExtras: TopicExtras = {
  interactive: "narrator-lens",
  interactives: ["narrator-lens", "tension-graph"],
  hook:
    "Charles Dickens’s readers sometimes waited a whole week to find out what happened next, because his novels came out one instalment at a time. What tricks did novelists use to make sure people came back, and why do the same tricks still work on you when a series ends on a cliffhanger?",
  didYouKnow: [
    "A Christmas Carol was published on 19 December 1843, and its first print run of 6,000 copies had sold out by Christmas Eve.",
    "Great Expectations first appeared in weekly parts in Dickens’s own magazine, All the Year Round, in 1860 and 1861, so every instalment needed a reason to buy the next.",
    "Dickens rewrote the ending of Great Expectations after the novelist Edward Bulwer-Lytton persuaded him that his original, sadder ending was too bleak. Readers still argue about which ending is better.",
    "Charlotte Brontë published Jane Eyre in 1847 under the male-sounding pen name ‘Currer Bell’; her sisters Emily and Anne became ‘Ellis’ and ‘Acton’ Bell.",
    "The word ‘scrooge’ is now in English dictionaries as a common noun meaning a miser: a fictional character became part of the language.",
    "Robert Louis Stevenson is said to have written the first draft of Strange Case of Dr Jekyll and Mr Hyde in about three days in 1885 (it was published in January 1886). According to family accounts, he burned that draft after his wife Fanny criticised it, then rewrote the story from scratch.",
  ],
  experiments: [
    {
      title: "Plot your class novel’s tension graph",
      emoji: "📈",
      materials: ["Your class novel", "A large sheet of paper or the tension-graph tool", "Coloured pens", "Sticky notes"],
      steps: [
        "Draw a horizontal line for the chapters (time) and a vertical line for tension from 0 to 10.",
        "For each chapter, give a tension score and plot a point. Join the points.",
        "Label the exposition, rising action, climax, falling action and resolution on your graph.",
        "Put a sticky note with one short quotation at each peak and each low point.",
        "Compare your graph with Freytag’s pyramid: where does your novel follow it, and where does it break the pattern?",
      ],
      science:
        "Turning a whole novel into a picture shows you its structure at a glance, which is exactly what whole-novel essays ask for. You will notice that writers vary tension deliberately: quiet chapters let readers recover before the next peak, and the climax rarely comes at the very end. The quotations you attach become your revision bank of evidence from across the book.",
    },
    {
      title: "One scene, three narrators",
      emoji: "🎥",
      materials: ["A short, dramatic scene from your class novel (half a page)", "Paper and pen", "A family member or friend to listen"],
      steps: [
        "Rewrite the scene in the first person from the main character’s point of view.",
        "Rewrite it again from a different character’s first-person point of view.",
        "Rewrite it a third time with an all-knowing omniscient narrator who can see everyone’s thoughts.",
        "Read all three versions aloud to your listener and ask which felt most tense, which most sympathetic, and which revealed most.",
        "Write two sentences explaining why the novelist chose the perspective they actually used.",
      ],
      science:
        "Changing the narrator changes what the reader knows and feels, even when the events are identical. Doing it yourself makes the effect of narrative perspective obvious, and gives you precise language for analysis: intimacy, limited knowledge, dramatic irony and distance.",
    },
    {
      title: "Character evidence detective",
      emoji: "🕵️",
      materials: ["Your class novel", "A notebook divided into five columns: Speech, Thoughts, Effect on others, Actions, Looks", "Highlighters"],
      steps: [
        "Choose one major character.",
        "As you read, copy short quotations about them into the correct STEAL column, with the chapter number.",
        "When you finish, star the three quotations that come from the beginning, the turning point and the end.",
        "Write one sentence for each starred quotation explaining what it shows about how the character has changed.",
      ],
      science:
        "Sorting evidence by method trains you to notice how characterisation works rather than just what a character is like. Recording chapter numbers lets you show development across the novel, which is what separates a strong essay from one that only analyses the opening.",
    },
  ],
};
