# Editorial Tech · Prova tècnica

Repo para la parte de implementación de la entrevista. El enunciado te lo daremos durante la sesión.

## Antes de la entrevista

Necesitas Node 20 o superior y [pnpm](https://pnpm.io/installation).

```sh
pnpm install
pnpm test
```

Si `pnpm test` pasa, ya estás listo. Si algo falla, escríbenos antes de la entrevista.

## Qué hay dentro

| Fichero | Contenido |
|---|---|
| `fixtures/sheet.json` | Las filas de una hoja en castellano, como Segments. |
| `fixtures/glossary.json` | Términos confirmados por el equipo de contenido. |
| `src/translator.ts` | La interfaz `Translator`, que representa al LLM. |
| `src/fake-translator.ts` | Un `Translator` falso para trabajar sin llamar a un modelo real. |
| `src/localize.ts` | La función que implementarás. |
| `src/localize.test.ts` | Un test de ejemplo. |

Durante la entrevista puedes usar IA, internet y las herramientas que uses normalmente.
