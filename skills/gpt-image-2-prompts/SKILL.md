---
name: gpt-image-2-prompts
description: Use GPT Image 2 prompt templates, semantic category links, and source metadata to write GPT Image 2 prompts. Supports English and Chinese.
---

# GPT Image 2 Prompts / GPT Image 2 提示词

## English

Use this skill when a user asks for GPT Image 2 prompts, model-specific categories, semantic gallery searches, visual examples, or reusable prompt variables.

1. Read `data/gpt-image-2-prompts.json` and `data/categories.json`.
2. Match by `categoryDetail.group`, `categoryDetail.title`, `tags`, `inputMode`, and prompt text.
3. Prefer templates with preview images when the user asks for visual references.
4. Replace `{argument name="..." default="..."}` values with user-specific details.
5. Return final prompt, variable table, input mode, reference image requirement, image link, source case attribution, and repository attribution.

## 中文

当用户需要 GPT Image 2 提示词、模型分类、语义检索链接、视觉案例或可复用变量时，使用本 skill。

1. 读取 `data/gpt-image-2-prompts.json` 和 `data/categories.json`。
2. 按 `categoryDetail.group`、`categoryDetail.title`、`tags`、`inputMode` 和 prompt 文本匹配。
3. 用户需要视觉参考时，优先选择有预览图的模板。
4. 用用户需求替换 `{argument name="..." default="..."}` 变量值。
5. 输出最终 prompt、变量表、输入模式、参考图要求、图片链接、来源 case 归因和仓库归因。
