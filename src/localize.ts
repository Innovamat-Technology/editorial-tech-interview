import type { GlossaryEntry, Segment, Translator } from "./translator";

// Defínelo tú.
export type LocalizeResult = unknown;

export async function localize(
  segments: Segment[],
  options: { batchSize: number; glossary: GlossaryEntry[] },
  translator: Translator,
): Promise<LocalizeResult> {
  throw new Error("Not implemented");
}
