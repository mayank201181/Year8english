"use client";

// Interactive "explorables" for Year 8 English: small, self-contained widgets
// the learner plays with (no network, no extra dependencies). Each is
// registered under a key; a topic's extras list the keys it shows on its
// Interactive tab. Shared building blocks (Frame, Slider, Chip…) live in
// ./widgets/ui. This file holds the Shakespeare and drama widgets;
// InteractiveWidgets.tsx adds the poetry and writing-skills ones.

import { MeterTapper } from "./widgets/MeterTapper";
import { ConnotationZoom } from "./widgets/ConnotationZoom";
import { TensionGraph } from "./widgets/TensionGraph";
import { ScriptFormatter } from "./widgets/ScriptFormatter";
import { RhetoricMeter } from "./widgets/RhetoricMeter";

export { Frame, Slider } from "./widgets/ui";

export const EXPLORABLES: Record<string, React.FC> = {
  "meter-tapper": MeterTapper,
  "connotation-zoom": ConnotationZoom,
  "tension-graph": TensionGraph,
  "script-formatter": ScriptFormatter,
  "rhetoric-meter": RhetoricMeter,
};
