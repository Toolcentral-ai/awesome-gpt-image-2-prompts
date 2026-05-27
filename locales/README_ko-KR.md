# GPT Image 2 Prompts — 한국어

[English](../README.md)

이 저장소는 GPT Image 2 프롬프트 템플릿과 카테고리 메타데이터를 정리합니다. 이미지 생성 워크플로, 프롬프트 탐색, 사례 검색, agent skill에 사용할 수 있습니다.

메인 프롬프트 사이트: https://model-prompt-lab.com/models/gpt-image-2/prompts

의미 기반 검색 예시: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

카테고리 링크는 기존 `categories=<category>` 대신 `q=<category>` 형식을 사용합니다. Model Prompt Lab 검색은 카테고리 단어를 의미적으로 이해해 관련 GPT Image 2 case를 찾습니다.

## 저장소 내용

- 프롬프트 템플릿: 7,429
- 소스 카테고리: 42
- 생성 시각: `2026-05-25T02:06:15.665Z`
- Schema 버전: `2026-05-24`

## 파일

- `../data/gpt-image-2-prompts.json`: full enriched prompt bundle with prompt text, variables, preview images, tags, input modes, references, and attribution fields.
- `../data/categories.json`: category groups, counts, semantic Model Prompt Lab search URLs, and the prompt slugs attached to each category.
- `../data/source-prompts.json`: compact source prompt index.
- `../docs/source-gallery.md`: bilingual category index for quick browsing.
- `../schema/gpt-image-2-prompt.schema.json`: JSON schema for prompt records.
- `../skills/gpt-image-2-prompts/SKILL.md`: agent skill for using this dataset in prompt-writing workflows.

## 카테고리 탐색

| 그룹 | 카테고리 | 템플릿 수 | 검색 |
|---|---|---:|---|
| Other | GPT Image 2 Prompt | 104 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| Style | Photography | 3174 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography) |
| Style | Illustration | 1988 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| Style | Cinematic / Film Still | 1639 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| Style | Anime / Manga | 1486 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-manga) |
| Style | Minimalism | 1021 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalism) |
| Style | 3D Render | 848 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| Style | Retro / Vintage | 669 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=retro-vintage) |
| Style | Cyberpunk / Sci-Fi | 533 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| Style | Sketch / Line Art | 422 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| Style | Comic / Graphic Novel | 256 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| Style | Watercolor | 254 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| Style | Ink / Chinese Style | 245 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| Style | Chibi / Q-Style | 198 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| Style | Isometric | 105 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| Style | Pixel Art | 96 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| Style | Oil Painting | 80 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| Subjects | Character | 2741 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character) |
| Subjects | Text / Typography | 2104 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=text-typography) |
| Subjects | Portrait / Selfie | 1788 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| Subjects | Influencer / Model | 1233 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=influencer-model) |
| Subjects | Product | 883 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product) |
| Subjects | Architecture / Interior | 856 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=architecture-interior) |
| Subjects | Diagram / Chart | 749 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=diagram-chart) |
| Subjects | Cityscape / Street | 724 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cityscape-street) |
| Subjects | Group / Couple | 720 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=group-couple) |
| Subjects | Landscape / Nature | 696 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| Subjects | Animal / Creature | 562 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=animal-creature) |
| Subjects | Fashion Item | 547 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-item) |
| Subjects | Abstract / Background | 474 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=abstract-background) |
| Subjects | Food / Drink | 452 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-drink) |
| Subjects | Vehicle | 262 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vehicle) |
| Use Cases | Social Media Post | 2344 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media-post) |
| Use Cases | Poster / Flyer | 2225 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster-flyer) |
| Use Cases | Product Marketing | 1917 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-marketing) |
| Use Cases | Comic / Storyboard | 1126 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| Use Cases | Game Asset | 1010 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=game-asset) |
| Use Cases | Infographic / Edu Visual | 973 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| Use Cases | Profile / Avatar | 806 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=profile-avatar) |
| Use Cases | App / Web Design | 637 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-web-design) |
| Use Cases | E-commerce Main Image | 216 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| Use Cases | YouTube Thumbnail | 123 | [검색](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

## 사용 메모

- Use `../data/gpt-image-2-prompts.json` when you need complete prompt records.
- Use `../data/categories.json` when you need category navigation or semantic search links.
- Keep source case URLs and attribution fields when reusing prompts or images.
- Prefer the Model Prompt Lab page for browsing the current GPT Image 2 prompt collection.
