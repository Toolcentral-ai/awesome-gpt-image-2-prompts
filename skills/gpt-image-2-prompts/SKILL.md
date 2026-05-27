---
name: gpt-image-2-prompts
description: Use GPT Image 2 prompt templates, semantic category links, and source metadata without loading the full large JSON bundle into context.
---

# GPT Image 2 Prompts / GPT Image 2 提示词

Use this skill when a user asks for GPT Image 2 prompts, model-specific categories, semantic Model Prompt Lab searches, visual examples, reusable prompt variables, or source attribution.

本 skill 适用于用户需要 GPT Image 2 提示词、模型分类、语义检索链接、视觉案例、可复用变量或来源归因的场景。

## Large File Rule / 大文件规则

Do not read `data/gpt-image-2-prompts.json` directly into the model context. It is about 64 MB / 1.13M lines. `data/categories.json` is about 3 MB because every category contains many template slugs.

不要把 `data/gpt-image-2-prompts.json` 整体读入上下文。该文件约 64 MB / 113 万行。`data/categories.json` 约 3 MB，因为每个分类包含大量 template slug。

Use small, targeted commands to extract only the records needed for the current answer. Prefer these files in this order:

1. `data/source-prompts.json` for a small curated prompt set and quick examples.
2. `README.md`, `locales/README_zh.md`, or `docs/source-gallery.md` for human-readable category navigation.
3. `data/categories.json` only to list categories or collect candidate slugs.
4. `data/gpt-image-2-prompts.json` only after you have narrowed to a small set of slugs, titles, categories, tags, or input modes.

## Fast Workflow / 快速流程

1. Identify the user's intent: subject, style, use case, language, input mode, need for reference images, and whether they need a ready-to-run prompt or examples.
2. Pick category candidates from the README/category index. The Model Prompt Lab category URL format is:

```text
https://model-prompt-lab.com/models/gpt-image-2/prompts?q=<category>
```

3. Extract a small candidate list with a Node snippet. Return only 5-20 candidates to the model context.
4. Select 1-3 best templates and fetch full records by slug or title.
5. Replace `{argument name="..." default="..."}` values with user-specific details.
6. Return the final prompt plus metadata: category, input mode, reference image requirement, variables, preview image if available, source case URL, and repository attribution.

## Useful Commands / 常用命令

List all categories without loading template slugs:

```bash
node - <<'NODE'
const data = require("./data/categories.json");
for (const c of data.categories) {
  console.log(`${c.group}\t${c.title}\t${c.count}\t${c.galleryUrl}`);
}
NODE
```

Search the compact prompt index:

```bash
node - <<'NODE'
const q = "photography";
const data = require("./data/source-prompts.json");
for (const p of data.prompts) {
  const haystack = [p.title, p.category, p.categorySlug, p.description, p.prompt].join(" ").toLowerCase();
  if (haystack.includes(q.toLowerCase())) {
    console.log(JSON.stringify({
      title: p.title,
      category: p.category,
      categorySlug: p.categorySlug,
      tryUrl: p.tryUrl,
      primaryImageUrl: p.primaryImageUrl,
      description: p.description
    }, null, 2));
  }
}
NODE
```

Find full records by category, tag, title, or input mode. Keep `limit` small:

```bash
node - <<'NODE'
const q = "product marketing";
const limit = 8;
const data = require("./data/gpt-image-2-prompts.json");
const matches = [];
for (const p of data.templates) {
  const haystack = [
    p.title,
    p.category,
    p.categoryDetail?.group,
    p.categoryDetail?.title,
    ...(p.tags || []),
    p.inputMode,
    p.prompt
  ].join(" ").toLowerCase();
  if (!haystack.includes(q.toLowerCase())) continue;
  matches.push({
    slug: p.slug,
    title: p.title,
    category: p.category,
    inputMode: p.inputMode,
    variables: (p.variables || []).map((v) => v.name),
    refs: p.referenceImageCount,
    previewImageUrl: p.previewImageUrl,
    caseUrl: p.source?.caseUrl
  });
  if (matches.length >= limit) break;
}
console.log(JSON.stringify(matches, null, 2));
NODE
```

Fetch a full prompt by exact slug:

```bash
node - <<'NODE'
const slug = "saas-ai-dashboard-landing-page-gpt-image-2";
const data = require("./data/gpt-image-2-prompts.json");
const item = data.templates.find((p) => p.slug === slug);
if (!item) throw new Error(`not found: ${slug}`);
console.log(JSON.stringify({
  title: item.title,
  category: item.category,
  inputMode: item.inputMode,
  prompt: item.prompt,
  variables: item.variables,
  referenceImageCount: item.referenceImageCount,
  previewImageUrl: item.previewImageUrl,
  highQualityImageUrl: item.highQualityImageUrl,
  caseUrl: item.source?.caseUrl,
  attribution: item.source?.attribution
}, null, 2));
NODE
```

## Selection Guidance / 选择规则

- Prefer templates whose `categoryDetail.title`, `tags`, and `inputMode` match the user's actual task.
- Prefer records with `previewImageUrl` when the user asks for visual examples or style references.
- Use `referenceImageCount.min` and `referenceImageCount.max` to explain whether the prompt expects no image, one image, or multiple images.
- For Chinese answers, prefer `titleLocalized.zh` and `promptLocalized.zh` when available, but keep important model parameters and variable names in English if they are part of the prompt contract.
- Do not present category links as fixed filters. They are semantic search URLs and should use `q=<category>`.
- Keep source attribution. When reusing a template, include the Model Prompt Lab case URL from `source.caseUrl` or `tryUrl`.

## Output Shape / 输出格式

For prompt-writing requests, return:

- Final prompt.
- Variables changed from defaults.
- Input mode and reference image requirement.
- Category and semantic search link.
- Preview image URL if available.
- Source case URL and repository attribution.

For browsing or recommendation requests, return:

- 3-8 concise candidates.
- Category, input mode, preview image availability, and case URL for each.
- A short reason each candidate matches the user's intent.
