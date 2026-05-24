---
name: image-prompt-templates
description: Use public Image Prompt Gallery templates to write production-ready GPT Image 2 prompts with variables and attribution.
---

# Image Prompt Templates

Use this skill when a user asks for image-generation prompts, GPT Image 2 prompt ideas, prompt templates, style prompts, or reusable prompt variables.

## Workflow

1. Read `data/image-prompt-templates.json`.
2. Match the user request against `category`, `tags`, `inputMode`, and prompt text.
3. Select 1-3 relevant templates.
4. Replace `{argument name="..." default="..."}` values with user-specific details.
5. Return:
   - final prompt,
   - variable table,
   - recommended input mode,
   - attribution links from `source.caseUrl`.

## Guardrails

- Keep attribution links when publishing or sharing derivatives.
- For commercial use, inspect the linked Image Prompt Gallery case and source attribution first.
- Do not invent unsupported reference-image requirements; use `referenceImageCount`.
- If no template matches, combine the closest category with the user request and label it as a derivative prompt.
