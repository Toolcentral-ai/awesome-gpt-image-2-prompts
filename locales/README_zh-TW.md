# GPT Image 2 Prompts — 繁體中文

[English](../README.md)

本倉庫整理 GPT Image 2 提示詞模板與分類中繼資料，適合用於圖片生成工作流、提示詞導覽、案例檢索和 agent skill。

主要提示詞站點: https://model-prompt-lab.com/models/gpt-image-2/prompts

語義搜尋示例: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

分類連結統一使用 `q=<分類詞>`，不再使用舊的 `categories=<分類詞>`。Model Prompt Lab 搜尋入口支援語義召回，可以直接使用原有分類詞找到對應 GPT Image 2 case。

## 倉庫內容

- 提示詞模板: 7,902
- 來源分類: 70
- 生成時間: `2026-05-27T16:53:33.984453998Z`
- Schema 版本: `2026-05-24`

## 檔案說明

- `../data/gpt-image-2-prompts.json`：完整增強提示詞資料，包含 prompt 文字、變數、預覽圖、標籤、輸入模式、參考圖和歸因欄位。
- `../data/categories.json`：分類分組、數量、語義搜尋連結，以及每個分類下的 prompt slug。
- `../data/source-prompts.json`：精簡來源提示詞索引。
- `../docs/source-gallery.md`：中英文分類索引。
- `../schema/gpt-image-2-prompt.schema.json`：prompt 記錄 JSON schema。
- `../skills/gpt-image-2-prompts/SKILL.md`：用於提示詞編寫流程的 agent skill。

## 分類導覽

| Group | Category | Templates | Search |
|---|---|---:|---|
| 风格 | 性感 | 100 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sexy) |
| Use Case | Social Media | 3216 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media) |
| Style | Cinematic | 3181 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic) |
| Use Case | Poster | 2849 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster) |
| Use Case | Concept Art | 2353 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=concept-art) |
| Style | Illustration | 2308 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| Use Case | Advertising | 2182 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=advertising) |
| Use Case | Character Design | 2035 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character-design) |
| Category | Portrait & Character | 1995 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-character) |
| Scene | Outdoor | 1893 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=outdoor) |
| Style | Anime | 1671 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime) |
| Scene | Studio | 1669 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=studio) |
| Use Case | Brand Visual | 1617 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=brand-visual) |
| Scene | Close-up | 1605 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=close-up) |
| Category | Graphic & Poster | 1595 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=graphic-poster) |
| Category | Anime & Game | 1440 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-game) |
| Style | Editorial | 1355 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=editorial) |
| Style | Minimalist | 1099 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalist) |
| Style | Cute & Playful | 1087 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cute-playful) |
| Style | Studio Lighting | 986 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=studio-lighting) |
| Scene | City | 974 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=city) |
| Scene | Night | 906 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=night) |
| Style | Vintage | 875 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vintage) |
| Category | Product & Commercial | 860 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-commercial) |
| Category | Illustration & Art | 793 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration-art) |
| Style | Natural Light | 766 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=natural-light) |
| Style | Dark Moody | 757 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=dark-moody) |
| Style | Luxury | 718 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=luxury) |
| Use Case | Education | 694 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=education) |
| Use Case | Moodboard | 692 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=moodboard) |
| Style | 3D Render | 677 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| Category | Fashion & Beauty | 614 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-beauty) |
| Scene | Street | 572 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=street) |
| Scene | Fantasy World | 538 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fantasy-world) |
| Style | Futuristic | 465 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=futuristic) |
| Scene | Sunset | 455 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sunset) |
| Style | Surreal | 391 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=surreal) |
| Use Case | App / UI | 346 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-ui) |
| Scene | Tabletop | 335 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=tabletop) |
| Style | Watercolor | 319 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| Scene | Home | 302 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=home) |
| Style | Cyberpunk | 284 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk) |
| Use Case | Product Mockup | 280 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-mockup) |
| Use Case | E-commerce | 250 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce) |
| Use Case | Presentation | 243 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=presentation) |
| Style | Flat Illustration | 220 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=flat-illustration) |
| Category | Other Inspiration | 202 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=other-inspiration) |
| Style | Documentary | 198 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=documentary) |
| Category | Landscape & Nature | 179 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| Use Case | Wallpaper | 179 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=wallpaper) |
| Scene | Mountain | 171 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=mountain) |
| Scene | Futuristic City | 143 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=futuristic-city) |
| Scene | Forest | 137 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=forest) |
| Scene | Restaurant | 134 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=restaurant) |
| Use Case | Book Cover | 130 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=book-cover) |
| Scene | Bedroom | 125 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=bedroom) |
| Category | Interior & Architecture | 112 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=interior-architecture) |
| Scene | Office | 111 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=office) |
| Use Case | Website Hero | 111 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=website-hero) |
| Category | Food & Beverage | 103 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-beverage) |
| Style | Pixel Art | 103 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| Style | Isometric | 98 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| Scene | Beach | 89 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=beach) |
| Scene | Space | 80 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=space) |
| Style | Oil Painting | 70 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| Scene | Living Room | 69 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=living-room) |
| Use Case | Album Cover | 50 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=album-cover) |
| Scene | Kitchen | 48 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=kitchen) |
| Scene | Underwater | 34 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=underwater) |
| Scene | Transparent Background | 25 | [Search](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=transparent-background) |

## 真實案例圖片

下面示例直接引用 Model Prompt Lab 真實 case 和 CDN 預覽圖，確保提示詞預覽與線上 case 資料保持一致。

| 預覽 | Case | 分類 |
|---|---|---|
| [![VR Headset Exploded View Poster](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13460-vr-headset-exploded-view.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=dXYP5cwOWNS3STeojOxlV7Nmp7c%3D)](https://model-prompt-lab.com/cases/vr-headset-exploded-view-gpt-image-2) | [VR Headset Exploded View Poster](https://model-prompt-lab.com/cases/vr-headset-exploded-view-gpt-image-2) | Product & Commercial |
| [![Anime Martial Arts Battle Illustration](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13467-anime-martial-arts-battle-dojo.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=4R1rKwGczmJDWwQT5oO6%2Fvj%2Fxy0%3D)](https://model-prompt-lab.com/cases/anime-martial-arts-battle-dojo-gpt-image-2) | [Anime Martial Arts Battle Illustration](https://model-prompt-lab.com/cases/anime-martial-arts-battle-dojo-gpt-image-2) | Anime & Game |
| [![3D Stone Staircase Evolution Infographic](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13491-3d-stone-staircase-evolution.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=gEJOMABqywDiHP6ySNwSgZ29TgA%3D)](https://model-prompt-lab.com/cases/3d-stone-staircase-evolution-gpt-image-2) | [3D Stone Staircase Evolution Infographic](https://model-prompt-lab.com/cases/3d-stone-staircase-evolution-gpt-image-2) | Illustration & Art |
| [![Illustrated City Food Map](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13515-illustrated-city-food-map.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=oPO7SUilMqwmk3%2FTq6etFp6Tuc0%3D)](https://model-prompt-lab.com/cases/illustrated-city-food-map-gpt-image-2) | [Illustrated City Food Map](https://model-prompt-lab.com/cases/illustrated-city-food-map-gpt-image-2) | Graphic & Poster |
| [![Momotaro Explainer Slide in Hybrid Style](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13983-momotaro-irasutoya-hybrid-slide.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=%2FzSu3aW5dZpmmRymNgZMyO0D0o4%3D)](https://model-prompt-lab.com/cases/momotaro-irasutoya-hybrid-slide-gpt-image-2) | [Momotaro Explainer Slide in Hybrid Style](https://model-prompt-lab.com/cases/momotaro-irasutoya-hybrid-slide-gpt-image-2) | Graphic & Poster |
| [![E-commerce Live Stream UI Mockup](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/14036-ecommerce-live-stream-mockup.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=xzvSquEjErBTSIbnXaN%2FAiDw8jc%3D)](https://model-prompt-lab.com/cases/ecommerce-live-stream-mockup-gpt-image-2) | [E-commerce Live Stream UI Mockup](https://model-prompt-lab.com/cases/ecommerce-live-stream-mockup-gpt-image-2) | Graphic & Poster |

## 使用建議

- 需要完整 prompt 記錄時使用 `../data/gpt-image-2-prompts.json`。
- 需要分類導覽或語義搜尋連結時使用 `../data/categories.json`。
- 重用提示詞或圖片時保留來源 case URL 和歸因欄位。
- 瀏覽目前 GPT Image 2 提示詞集合時優先使用 Model Prompt Lab 頁面。
