export type Segment = { id: string; text: string };
export type GlossaryEntry = { source: string; target: string };

export interface Translator {
  /**
   * Traduce los Segments de castellano a inglés de Estados Unidos.
   *
   * Al modelo se le pide `{ translations: { id: string; text: string }[] }`,
   * pero es un LLM: la respuesta no está validada.
   */
  translate(segments: Segment[], glossary: GlossaryEntry[]): Promise<unknown>;
}
