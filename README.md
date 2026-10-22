# Editorial Tech · Live technical interview

Repo for the implementation part of the interview.

## Before the interview

You need Node 22.18 or later and [pnpm](https://pnpm.io/installation).

```sh
pnpm install
pnpm test
```

If `pnpm test` passes, you're ready. If something fails, let us know before the interview.

## What's inside

| Path | Contents |
|---|---|
| `fixtures/sheet.json` | The rows of a sheet in Spanish, as Segments with an id and a text. |
| `fixtures/glossary.json` | Terms confirmed by the content team, with their translation. |
| `src/` | Yours. Structure it however you like. `src/index.ts` is the entry point. |

TypeScript and Vitest are already set up. Add any dependency you need.

## Your task

Build the core of the tool we designed together in the first part of the interview.

Given the Segments of a sheet, the tool translates them into the given language with an LLM, and reports:

- the translation of every Segment it could translate;
- the Segments it couldn't translate, and why;

A response is only valid if it contains every Segment exactly once and nothing else. When a response isn't valid, apply what we designed.

The tool must work with a real LLM. Your tests must not call it: write the tests that give you confidence the tool handles a bad response.

### The LLM

At the start of this part we'll give you an Anthropic API key. It only works during the interview.

### If you have time left

In this order:

1. Build a simple web ui that allows the user to upload a sheet and shows the translation.
2. Check that the inline tags in a Segment (`<s1>…</s1>`) come back in its translation, each exactly once.
3. Warn when a translation doesn't use the glossary term.
4. A CLI that takes a sheet file and exits with a non-zero code if anything failed.

You don't have to finish everything. We care about how you think, the questions you ask and how you check that what you build works.

You can use AI, the internet and any tools you normally use.
