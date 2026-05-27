# Awesome GPT Image 2 Prompts / GPT Image 2 提示词集合

[English](#english) | [中文](#中文)

[简体中文](README_zh.md) · [繁體中文](README_zh-TW.md) · [日本語](README_ja-JP.md) · [한국어](README_ko-KR.md) · [ไทย](README_th-TH.md) · [Tiếng Việt](README_vi-VN.md) · [हिन्दी](README_hi-IN.md) · [Español](README_es-ES.md) · [Español (Latinoamérica)](README_es-419.md) · [Deutsch](README_de-DE.md) · [Français](README_fr-FR.md) · [Italiano](README_it-IT.md) · [Português (Brasil)](README_pt-BR.md) · [Português](README_pt-PT.md) · [Türkçe](README_tr-TR.md)

<a id="english"></a>

## English

Curated GPT Image 2 prompt templates and category metadata for building image-generation workflows, prompt galleries, and agent skills.

Primary prompt site: https://model-prompt-lab.com/models/gpt-image-2/prompts

Semantic gallery search: https://imagepromptgallery.com/models/gpt-image-2/prompts?q=photography

The category links below intentionally use `q=<category>` instead of the old `categories=<category>` format. The gallery search endpoint understands these category terms semantically and can recall matching GPT Image 2 cases accurately.

### Repository Contents

- Prompt templates: 7,429
- Source categories: 42
- Generated at: `2026-05-25T02:06:15.665Z`
- Schema version: `2026-05-24`

### Files

- `data/gpt-image-2-prompts.json`: full enriched prompt bundle with prompt text, variables, preview images, tags, input modes, references, and attribution fields.
- `data/categories.json`: category groups, counts, semantic gallery search URLs, and the prompt slugs attached to each category.
- `data/source-prompts.json`: compact source prompt index.
- `docs/source-gallery.md`: bilingual category index for quick browsing.
- `schema/gpt-image-2-prompt.schema.json`: JSON schema for prompt records.
- `skills/gpt-image-2-prompts/SKILL.md`: agent skill for using this dataset in prompt-writing workflows.

### Category Navigation

| Group | Category | Templates | Search |
|---|---|---:|---|
| Other | GPT Image 2 Prompt | 104 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| Style | Photography | 3174 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=photography) |
| Style | Illustration | 1988 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=illustration) |
| Style | Cinematic / Film Still | 1639 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| Style | Anime / Manga | 1486 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=anime-manga) |
| Style | Minimalism | 1021 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=minimalism) |
| Style | 3D Render | 848 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=3d-render) |
| Style | Retro / Vintage | 669 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=retro-vintage) |
| Style | Cyberpunk / Sci-Fi | 533 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| Style | Sketch / Line Art | 422 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| Style | Comic / Graphic Novel | 256 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| Style | Watercolor | 254 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=watercolor) |
| Style | Ink / Chinese Style | 245 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| Style | Chibi / Q-Style | 198 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| Style | Isometric | 105 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=isometric) |
| Style | Pixel Art | 96 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=pixel-art) |
| Style | Oil Painting | 80 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=oil-painting) |
| Subjects | Character | 2741 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=character) |
| Subjects | Text / Typography | 2104 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=text-typography) |
| Subjects | Portrait / Selfie | 1788 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| Subjects | Influencer / Model | 1233 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=influencer-model) |
| Subjects | Product | 883 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=product) |
| Subjects | Architecture / Interior | 856 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=architecture-interior) |
| Subjects | Diagram / Chart | 749 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=diagram-chart) |
| Subjects | Cityscape / Street | 724 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cityscape-street) |
| Subjects | Group / Couple | 720 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=group-couple) |
| Subjects | Landscape / Nature | 696 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=landscape-nature) |
| Subjects | Animal / Creature | 562 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=animal-creature) |
| Subjects | Fashion Item | 547 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=fashion-item) |
| Subjects | Abstract / Background | 474 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=abstract-background) |
| Subjects | Food / Drink | 452 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=food-drink) |
| Subjects | Vehicle | 262 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=vehicle) |
| Use Cases | Social Media Post | 2344 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=social-media-post) |
| Use Cases | Poster / Flyer | 2225 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=poster-flyer) |
| Use Cases | Product Marketing | 1917 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=product-marketing) |
| Use Cases | Comic / Storyboard | 1126 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| Use Cases | Game Asset | 1010 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=game-asset) |
| Use Cases | Infographic / Edu Visual | 973 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| Use Cases | Profile / Avatar | 806 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=profile-avatar) |
| Use Cases | App / Web Design | 637 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=app-web-design) |
| Use Cases | E-commerce Main Image | 216 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| Use Cases | YouTube Thumbnail | 123 | [Search](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

### Usage Notes

- Use `data/gpt-image-2-prompts.json` when you need complete prompt records.
- Use `data/categories.json` when you need category navigation or semantic search links.
- Keep source case URLs and attribution fields when reusing prompts or images.
- Prefer the Model Prompt Lab page for browsing the current GPT Image 2 prompt collection.

<a id="中文"></a>

## 中文

本仓库整理 GPT Image 2 提示词模板、分类元数据，适合用于图片生成工作流、提示词导航、案例检索和 agent skill。

主提示词站点：https://model-prompt-lab.com/models/gpt-image-2/prompts

语义检索入口：https://imagepromptgallery.com/models/gpt-image-2/prompts?q=photography

下面的分类链接统一使用 `q=<category>`，不再使用旧的 `categories=<category>`。该入口支持语义理解，直接使用原有分类词即可准确召回对应 GPT Image 2 case。

### 仓库内容

- 提示词模板：7,429
- 来源分类：42
- 生成时间：`2026-05-25T02:06:15.665Z`
- Schema 版本：`2026-05-24`

### 文件说明

- `data/gpt-image-2-prompts.json`：完整增强提示词数据，包含 prompt 文本、变量、预览图、标签、输入模式、参考图和归因字段。
- `data/categories.json`：分类分组、数量、语义检索链接，以及每个分类下的 prompt slug。
- `data/source-prompts.json`：精简来源提示词索引。
- `docs/source-gallery.md`：中英文分类索引。
- `schema/gpt-image-2-prompt.schema.json`：prompt 记录 JSON schema。
- `skills/gpt-image-2-prompts/SKILL.md`：用于提示词编写流程的 agent skill。

### 分类导航

| 分组 | 分类 | 模板数 | 检索 |
|---|---|---:|---|
| Other | GPT Image 2 Prompt | 104 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| Style | Photography | 3174 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=photography) |
| Style | Illustration | 1988 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=illustration) |
| Style | Cinematic / Film Still | 1639 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| Style | Anime / Manga | 1486 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=anime-manga) |
| Style | Minimalism | 1021 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=minimalism) |
| Style | 3D Render | 848 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=3d-render) |
| Style | Retro / Vintage | 669 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=retro-vintage) |
| Style | Cyberpunk / Sci-Fi | 533 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| Style | Sketch / Line Art | 422 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| Style | Comic / Graphic Novel | 256 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| Style | Watercolor | 254 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=watercolor) |
| Style | Ink / Chinese Style | 245 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| Style | Chibi / Q-Style | 198 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| Style | Isometric | 105 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=isometric) |
| Style | Pixel Art | 96 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=pixel-art) |
| Style | Oil Painting | 80 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=oil-painting) |
| Subjects | Character | 2741 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=character) |
| Subjects | Text / Typography | 2104 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=text-typography) |
| Subjects | Portrait / Selfie | 1788 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| Subjects | Influencer / Model | 1233 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=influencer-model) |
| Subjects | Product | 883 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=product) |
| Subjects | Architecture / Interior | 856 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=architecture-interior) |
| Subjects | Diagram / Chart | 749 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=diagram-chart) |
| Subjects | Cityscape / Street | 724 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=cityscape-street) |
| Subjects | Group / Couple | 720 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=group-couple) |
| Subjects | Landscape / Nature | 696 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=landscape-nature) |
| Subjects | Animal / Creature | 562 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=animal-creature) |
| Subjects | Fashion Item | 547 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=fashion-item) |
| Subjects | Abstract / Background | 474 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=abstract-background) |
| Subjects | Food / Drink | 452 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=food-drink) |
| Subjects | Vehicle | 262 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=vehicle) |
| Use Cases | Social Media Post | 2344 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=social-media-post) |
| Use Cases | Poster / Flyer | 2225 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=poster-flyer) |
| Use Cases | Product Marketing | 1917 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=product-marketing) |
| Use Cases | Comic / Storyboard | 1126 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| Use Cases | Game Asset | 1010 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=game-asset) |
| Use Cases | Infographic / Edu Visual | 973 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| Use Cases | Profile / Avatar | 806 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=profile-avatar) |
| Use Cases | App / Web Design | 637 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=app-web-design) |
| Use Cases | E-commerce Main Image | 216 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| Use Cases | YouTube Thumbnail | 123 | [检索](https://imagepromptgallery.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

### 使用建议

- 需要完整 prompt 记录时使用 `data/gpt-image-2-prompts.json`。
- 需要分类导航或语义检索链接时使用 `data/categories.json`。
- 复用提示词或图片时保留来源 case URL 和归因字段。
- 浏览当前 GPT Image 2 提示词集合时优先使用 Model Prompt Lab 页面。
