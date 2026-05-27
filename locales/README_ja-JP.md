# GPT Image 2 Prompts — 日本語

[English](../README.md)

このリポジトリは、GPT Image 2 のプロンプトテンプレートとカテゴリメタデータを整理したものです。画像生成ワークフロー、プロンプトナビゲーション、ケース検索、agent skill に利用できます。

メインのプロンプトサイト: https://model-prompt-lab.com/models/gpt-image-2/prompts

セマンティック検索の例: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

カテゴリリンクは古い `categories=<category>` ではなく `q=<category>` を使います。Model Prompt Lab の検索はカテゴリ語を意味的に解釈し、対応する GPT Image 2 case を呼び出せます。

## リポジトリ内容

- プロンプトテンプレート: 7,429
- ソースカテゴリ: 42
- 生成日時: `2026-05-25T02:06:15.665Z`
- Schema バージョン: `2026-05-24`

## ファイル

- `../data/gpt-image-2-prompts.json`: full enriched prompt bundle with prompt text, variables, preview images, tags, input modes, references, and attribution fields.
- `../data/categories.json`: category groups, counts, semantic Model Prompt Lab search URLs, and the prompt slugs attached to each category.
- `../data/source-prompts.json`: compact source prompt index.
- `../docs/source-gallery.md`: bilingual category index for quick browsing.
- `../schema/gpt-image-2-prompt.schema.json`: JSON schema for prompt records.
- `../skills/gpt-image-2-prompts/SKILL.md`: agent skill for using this dataset in prompt-writing workflows.

## カテゴリナビゲーション

| グループ | カテゴリ | テンプレート数 | 検索 |
|---|---|---:|---|
| Other | GPT Image 2 Prompt | 104 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| Style | Photography | 3174 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography) |
| Style | Illustration | 1988 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| Style | Cinematic / Film Still | 1639 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| Style | Anime / Manga | 1486 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-manga) |
| Style | Minimalism | 1021 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalism) |
| Style | 3D Render | 848 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| Style | Retro / Vintage | 669 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=retro-vintage) |
| Style | Cyberpunk / Sci-Fi | 533 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| Style | Sketch / Line Art | 422 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| Style | Comic / Graphic Novel | 256 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| Style | Watercolor | 254 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| Style | Ink / Chinese Style | 245 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| Style | Chibi / Q-Style | 198 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| Style | Isometric | 105 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| Style | Pixel Art | 96 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| Style | Oil Painting | 80 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| Subjects | Character | 2741 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character) |
| Subjects | Text / Typography | 2104 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=text-typography) |
| Subjects | Portrait / Selfie | 1788 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| Subjects | Influencer / Model | 1233 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=influencer-model) |
| Subjects | Product | 883 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product) |
| Subjects | Architecture / Interior | 856 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=architecture-interior) |
| Subjects | Diagram / Chart | 749 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=diagram-chart) |
| Subjects | Cityscape / Street | 724 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cityscape-street) |
| Subjects | Group / Couple | 720 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=group-couple) |
| Subjects | Landscape / Nature | 696 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| Subjects | Animal / Creature | 562 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=animal-creature) |
| Subjects | Fashion Item | 547 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-item) |
| Subjects | Abstract / Background | 474 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=abstract-background) |
| Subjects | Food / Drink | 452 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-drink) |
| Subjects | Vehicle | 262 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vehicle) |
| Use Cases | Social Media Post | 2344 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media-post) |
| Use Cases | Poster / Flyer | 2225 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster-flyer) |
| Use Cases | Product Marketing | 1917 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-marketing) |
| Use Cases | Comic / Storyboard | 1126 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| Use Cases | Game Asset | 1010 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=game-asset) |
| Use Cases | Infographic / Edu Visual | 973 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| Use Cases | Profile / Avatar | 806 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=profile-avatar) |
| Use Cases | App / Web Design | 637 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-web-design) |
| Use Cases | E-commerce Main Image | 216 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| Use Cases | YouTube Thumbnail | 123 | [検索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

## 利用メモ

- Use `../data/gpt-image-2-prompts.json` when you need complete prompt records.
- Use `../data/categories.json` when you need category navigation or semantic search links.
- Keep source case URLs and attribution fields when reusing prompts or images.
- Prefer the Model Prompt Lab page for browsing the current GPT Image 2 prompt collection.
