"use client";

// Poetry, novel and writing-skills explorables, combined with the Shakespeare/drama
// ones from Explorables.tsx into EXPLORABLES_ALL for the per-topic
// Interactive tab. Every key here is referenced by a topic's extras.

import { EXPLORABLES } from "./Explorables";
import { DeviceSpotter } from "./widgets/DeviceSpotter";
import { PoemForge } from "./widgets/PoemForge";
import { PeelBuilder } from "./widgets/PeelBuilder";
import { ArgumentScales } from "./widgets/ArgumentScales";
import { SentenceMixer } from "./widgets/SentenceMixer";
import { TempestPowerLab } from "./widgets/TempestPowerLab";
import { HamletMindLab } from "./widgets/HamletMindLab";
import { IdentityVoiceLab } from "./widgets/IdentityVoiceLab";
import { UnseenPoemStudio } from "./widgets/UnseenPoemStudio";
import { NarratorLens } from "./widgets/NarratorLens";
import { ComprehensionDecoder } from "./widgets/ComprehensionDecoder";
import { ShowDontTellStudio } from "./widgets/ShowDontTellStudio";

export const EXPLORABLES_ALL: Record<string, React.FC> = {
  ...EXPLORABLES,
  "device-spotter": DeviceSpotter,
  "poem-forge": PoemForge,
  "peel-builder": PeelBuilder,
  "argument-scales": ArgumentScales,
  "sentence-mixer": SentenceMixer,
  "tempest-power": TempestPowerLab,
  "hamlet-mind": HamletMindLab,
  "identity-voice": IdentityVoiceLab,
  "unseen-poem": UnseenPoemStudio,
  "narrator-lens": NarratorLens,
  "comprehension-decoder": ComprehensionDecoder,
  "show-dont-tell": ShowDontTellStudio,
};
