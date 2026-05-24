---
name: image-prompt-templates
description: Use public Image Prompt Gallery templates to write production-ready GPT Image 2 prompts with variables and attribution. Supports English and Chinese.
---

# Image Prompt Templates / 图像提示词模板

[English](#english) | [中文](#中文)

<a id="english"></a>

## English

Use this skill when a user asks for image-generation prompts, GPT Image 2 prompt ideas, prompt templates, style prompts, or reusable prompt variables.

### Workflow

1. Read `data/image-prompt-templates.json`.
2. Match the user request against `category`, `tags`, `inputMode`, and prompt text.
3. Select 1-3 relevant templates.
4. Replace `{argument name="..." default="..."}` values with user-specific details.
5. Return:
   - final prompt,
   - variable table,
   - recommended input mode,
   - attribution links from `source.caseUrl`.

### Guardrails

- Keep attribution links when publishing or sharing derivatives.
- For commercial use, inspect the linked Image Prompt Gallery case and source attribution first.
- Do not invent unsupported reference-image requirements; use `referenceImageCount`.
- If no template matches, combine the closest category with the user request and label it as a derivative prompt.

<a id="中文"></a>

## 中文

当用户需要图像生成提示词、GPT Image 2 prompt 灵感、提示词模板、风格提示词或可复用变量时，使用本 skill。

### 工作流程

1. 读取 `data/image-prompt-templates.json`。
2. 按用户需求匹配 `category`、`tags`、`inputMode` 和 prompt 文本。
3. 选择 1-3 条相关模板作为参考。
4. 用用户的具体需求替换 `{argument name="..." default="..."}` 变量值。
5. 输出：
   - 最终 prompt，
   - 变量表，
   - 推荐输入模式，
   - 来自 `source.caseUrl` 的归因链接。

### 约束

- 发布或分享派生内容时保留归因链接。
- 商业使用前先检查 Image Prompt Gallery 对应 case 和来源归因。
- 不要编造不支持的参考图要求；以 `referenceImageCount` 为准。
- 如果没有完全匹配的模板，可以组合最接近的分类与用户需求，并标记为 derivative prompt。
