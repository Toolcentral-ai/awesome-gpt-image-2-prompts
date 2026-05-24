---
name: awesome-gpt-image-2-prompts
description: Use Image Prompt Gallery templates and YouMind source categories/featured images to write GPT Image 2 prompts. Supports English and Chinese.
---

# Awesome GPT Image 2 Prompts / GPT Image 2 提示词

## English

Use this skill when a user asks for GPT Image 2 prompts, source-style categories, featured visual examples, or reusable prompt variables.

1. Read `data/awesome-gpt-image-2-prompts.json`, `data/categories.json`, and `data/featured-prompts.json`.
2. Match by `categoryDetail.group`, `categoryDetail.title`, `tags`, `inputMode`, and prompt text.
3. Prefer `featured=true` and `featuredImagePath` when the user asks for polished visual references.
4. Replace `{argument name="..." default="..."}` values with user-specific details.
5. Return final prompt, variable table, input mode, reference image requirement, image link, IPG attribution, and source repo attribution.

## 中文

当用户需要 GPT Image 2 提示词、源仓库分类、精选视觉案例或可复用变量时，使用本 skill。

1. 读取 `data/awesome-gpt-image-2-prompts.json`、`data/categories.json` 和 `data/featured-prompts.json`。
2. 按 `categoryDetail.group`、`categoryDetail.title`、`tags`、`inputMode` 和 prompt 文本匹配。
3. 用户需要精良视觉参考时，优先选择 `featured=true` 且有 `featuredImagePath` 的模板。
4. 用用户需求替换 `{argument name="..." default="..."}` 变量值。
5. 输出最终 prompt、变量表、输入模式、参考图要求、图片链接、IPG 归因和源仓库归因。
