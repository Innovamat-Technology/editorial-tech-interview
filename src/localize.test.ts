import { expect, it } from "vitest";
import glossary from "../fixtures/glossary.json";
import sheet from "../fixtures/sheet.json";
import { FakeTranslator } from "./fake-translator";

it("el FakeTranslator responde", async () => {
  const response = await new FakeTranslator().translate(sheet.slice(0, 2), glossary);

  expect(response).toHaveProperty("translations");
});

it.todo("localize traduce todos los Segments");
