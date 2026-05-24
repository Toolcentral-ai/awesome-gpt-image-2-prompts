# Image Prompt Templates

Open image prompt templates derived from public Image Prompt Gallery cases. The data is designed for agents, prompt tooling, examples, and community reuse.

- Source site: https://imagepromptgallery.com
- Templates: 7289
- Generated at: 2026-05-24T17:55:03.009Z
- Schema version: 2026-05-24

## What is included

- Reusable GPT Image 2 prompt text
- Prompt variables parsed from `{argument name="..." default="..."}` blocks
- Category and tag metadata
- Input mode and reference-image requirements
- Public IPG case URL for attribution

## What is not included

This repository does not include private ingestion logic, review tooling, ranking logic, growth playbooks, Dovoo callback internals, admin credentials, or production database snapshots.

## Data files

- `data/image-prompt-templates.json` — complete template bundle
- `data/categories.json` — category summary
- `schema/image-prompt-template.schema.json` — JSON Schema for the bundle
- `skills/image-prompt-templates/SKILL.md` — agent skill for prompt generation

## Top categories

- General prompt: 4637
- Poster design: 1209
- Portrait photography: 652
- Product Marketing: 293
- Comic / Storyboard: 271
- Infographic: 218
- E-commerce Main Image: 8
- App UI Design: 1

## Quick usage

```bash
node examples/read-templates.mjs
```

## Attribution

Each template includes `source.caseUrl`. Keep the case URL when reusing a prompt or publishing derivative examples. Some prompts are derived from third-party public sources curated by Image Prompt Gallery; check the linked case and source attribution before commercial use.

## License

Code, schema, examples, and skill files are released under MIT. Prompt data is provided for reuse with attribution to Image Prompt Gallery and the linked source case.
