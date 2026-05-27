---
name: gpt-image-2-prompts-zh
description: 使用 GPT Image 2 提示词模板、语义分类页面链接和来源元数据，避免把大型 JSON 整体读入上下文。
---

# GPT Image 2 提示词

语言版本：[English](SKILL.md) | **中文**（当前文件）

当用户需要 GPT Image 2 提示词、模型分类、Model Prompt Lab 语义检索页面、视觉案例、可复用变量或来源归因时使用本 skill。

## 来源规则

- 只使用本仓库数据文件和公开的 Model Prompt Lab 页面 URL。
- 不要在回答、生成文档或提示词元数据中暴露公网 API 端点。
- 浏览和语义分类/搜索链接统一使用这个页面 URL 格式：

```text
https://model-prompt-lab.com/models/gpt-image-2/prompts?q=<search-term>
```

## 大文件规则

不要把 `data/gpt-image-2-prompts.json` 整体读入模型上下文。该文件约 64 MB / 113 万行。`data/categories.json` 约 3 MB，因为每个分类包含大量 template slug。

使用小范围、定向命令只提取当前回答需要的记录。优先读取顺序：

1. `data/source-prompts.json`：精简精选提示词和快速示例。
2. `README.md`、多语言 README 或 `docs/source-gallery.md`：人工可读的分类导航。
3. `data/categories.json`：仅在需要列分类或收集候选 slug 时读取。
4. `data/gpt-image-2-prompts.json`：只在已经缩小到少量 slug、标题、分类、标签或输入模式后读取。

## 快速流程

1. 识别用户意图：主体、风格、用途、输出语言、输入模式、是否需要参考图，以及是要成品提示词还是示例。
2. 从 README/分类索引中选择候选分类或搜索词。分类链接是语义检索页面，不是严格过滤器。
3. 用定向 Node 片段提取少量候选，只把 5-20 条候选带入上下文。
4. 选择 1-3 个最合适模板，再按 slug 或标题读取完整记录。
5. 用用户需求替换 `{argument name="..." default="..."}` 里的默认值。
6. 输出最终提示词和元数据：分类、输入模式、参考图要求、变量、可用预览图、来源 case 页面 URL、仓库归因。

## 常用命令

列出分类，不把 template slug 全部带入上下文：

```bash
node - <<'NODE'
const data = require("./data/categories.json");
for (const c of data.categories) {
  console.log(`${c.group}\t${c.title}\t${c.count}\t${c.galleryUrl}`);
}
NODE
```

搜索精简提示词索引：

```bash
node - <<'NODE'
const q = "photography";
const data = require("./data/source-prompts.json");
for (const p of data.prompts) {
  const haystack = [p.title, p.category, p.categorySlug, p.description, p.prompt].join(" ").toLowerCase();
  if (!haystack.includes(q.toLowerCase())) continue;
  console.log(JSON.stringify({
    title: p.title,
    category: p.category,
    categorySlug: p.categorySlug,
    tryUrl: p.tryUrl,
    primaryImageUrl: p.primaryImageUrl,
    description: p.description
  }, null, 2));
}
NODE
```

按分类、标签、标题或输入模式查找完整记录。保持 `limit` 较小：

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

按精确 slug 读取完整提示词：

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

## 选择规则

- 优先选择 `categoryDetail.title`、`tags` 和 `inputMode` 与用户任务匹配的模板。
- 用户需要视觉示例或风格参考时，优先选择有 `previewImageUrl` 的记录。
- 用 `referenceImageCount.min` 和 `referenceImageCount.max` 说明提示词是否需要 0 张、1 张或多张参考图。
- 中文回答优先使用 `titleLocalized.zh` 和 `promptLocalized.zh`；如果模型参数或变量名属于提示词契约，则保留英文。
- 不要把分类链接说成固定过滤器。它们是语义检索页面 URL，应使用 `q=<search-term>`。
- 保留来源归因。复用模板时包含 `source.caseUrl` 或 `tryUrl` 中的 Model Prompt Lab case 页面 URL。

## 输出格式

提示词编写类请求，输出：

- 最终提示词。
- 相比默认值修改过的变量。
- 输入模式和参考图要求。
- 分类和语义检索页面链接。
- 可用预览图 URL。
- 来源 case 页面 URL 和仓库归因。

浏览或推荐类请求，输出：

- 3-8 个简洁候选。
- 每个候选的分类、输入模式、预览图可用性和 case 页面 URL。
- 简短说明每个候选为什么匹配用户意图。
