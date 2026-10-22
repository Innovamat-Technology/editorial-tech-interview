import type { GlossaryEntry, Segment, Translator } from "./translator";

const EN: Record<string, string> = {
  s01: "Count the objects in the picture.",
  s02: "Build a tower with one linking cube of each color.",
  s03: "Order the numbers from least to greatest.",
  s04: "Place 7 on the number line.",
  s05: "Compara las dos cantidades.",
  s06: "Next",
  s07: "Read the problem <s1>twice</s1> before you start.",
  s08: "Material: number rod",
  s09: "",
  s10: "Check your answer with a partner.",
  s11: "Complete the pattern: 2, 4, 6, …",
  s12: "Color the even numbers on the hundred chart.",
  s13: "Represent the number 345 with base-ten blocks.",
  s14: "Back to start",
  s15: "Which number is missing?",
  s16: "Draw a 3 × 4 rectangle of squares.",
  s17: "Explain how you solved it.",
  s18: "Measure the table with the orange ruler.",
  s19: "Save changes",
  s20: "Group the counters in tens.",
  s21: "Subtract 15 from 40 using the number line.",
  s22: "Share 12 candies among 3 friends.",
  s23: "How many groups did you make?",
  s24: "Hint",
  s25: "Write the number that comes right after 99.",
  s26: "Find the multiples of 5 on the hundred chart.",
  s27: "42",
  s28: "Watch the video and answer the questions.",
  s29: "Estimated time: 10 minutes",
  s30: "Match each operation with its result.",
  s31: "Place the 5 number rod on the table.",
  s32: "Add the tens first, then the ones.",
  s33: "Submit answer",
  s34: "Build the number 128 with base-ten blocks.",
  s35: "Is it longer or shorter?",
  s36: "Work out double 25.",
  s37: "Use one linking cube for each unit.",
  s38: "The session has ended",
  s39: "Circle the correct answer.",
  s40: "Make an estimate before you count.",
};

/** Traductor determinista para tests. Se comporta como un LLM: no siempre bien. */
export class FakeTranslator implements Translator {
  async translate(segments: Segment[], _glossary: GlossaryEntry[]): Promise<unknown> {
    const translations = segments
      .filter((s) => !(s.id === "s13" && segments.length >= 3))
      .map((s) => ({ id: s.id, text: EN[s.id] ?? `[en] ${s.text}` }));

    if (segments.some((s) => s.id === "s22")) {
      translations.push({ id: "s22b", text: "Share them equally." });
    }
    if (segments.length >= 5) translations.reverse();

    return { translations };
  }
}
