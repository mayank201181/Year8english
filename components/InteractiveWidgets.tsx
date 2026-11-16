"use client";

// Poetry and writing-skills explorables, combined with the Shakespeare/drama
// ones from Explorables.tsx into EXPLORABLES_ALL for the per-topic
// Interactive tab. Every key here is referenced by a topic's extras.

import { EXPLORABLES } from "./Explorables";
import { DeviceSpotter } from "./widgets/DeviceSpotter";
import { PoemForge } from "./widgets/PoemForge";
import { PeelBuilder } from "./widgets/PeelBuilder";
import { ArgumentScales } from "./widgets/ArgumentScales";
import { SentenceMixer } from "./widgets/SentenceMixer";

export const EXPLORABLES_ALL: Record<string, React.FC> = {
  ...EXPLORABLES,
  "device-spotter": DeviceSpotter,
  "poem-forge": PoemForge,
  "peel-builder": PeelBuilder,
  "argument-scales": ArgumentScales,
  "sentence-mixer": SentenceMixer,
};
