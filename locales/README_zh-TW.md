# GPT Image 2 Prompts — 繁體中文

[English](../README.md)

本倉庫整理 GPT Image 2 提示詞模板與分類中繼資料，適合用於圖片生成工作流、提示詞導覽、案例檢索和 agent skill。

主要提示詞站點: https://model-prompt-lab.com/models/gpt-image-2/prompts

語義搜尋示例: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

分類連結統一使用 `q=<分類詞>`，不再使用舊的 `categories=<分類詞>`。Model Prompt Lab 搜尋入口支援語義召回，可以直接使用原有分類詞找到對應 GPT Image 2 case。

## 倉庫內容

- 提示詞模板: 7,429
- 來源分類: 42
- 生成時間: `2026-05-25T02:06:15.665Z`
- Schema 版本: `2026-05-24`

## 檔案說明

- `../data/gpt-image-2-prompts.json`：完整增強提示詞資料，包含 prompt 文字、變數、預覽圖、標籤、輸入模式、參考圖和歸因欄位。
- `../data/categories.json`：分類分組、數量、語義搜尋連結，以及每個分類下的 prompt slug。
- `../data/source-prompts.json`：精簡來源提示詞索引。
- `../docs/source-gallery.md`：中英文分類索引。
- `../schema/gpt-image-2-prompt.schema.json`：prompt 記錄 JSON schema。
- `../skills/gpt-image-2-prompts/SKILL.md`：用於提示詞編寫流程的 agent skill。

## 分類導覽

| 分組 | 分類 | 模板數 | 搜尋 |
|---|---|---:|---|
| 其他 | GPT Image 2 提示詞 | 104 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| 風格 | 攝影 | 3174 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography) |
| 風格 | 插畫 | 1988 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| 風格 | 電影感 / 劇照 | 1639 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| 風格 | 動漫 / 漫畫 | 1486 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-manga) |
| 風格 | 極簡主義 | 1021 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalism) |
| 風格 | 3D 渲染 | 848 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| 風格 | 復古 | 669 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=retro-vintage) |
| 風格 | 賽博龐克 / 科幻 | 533 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| 風格 | 草圖 / 線稿 | 422 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| 風格 | 漫畫 / 圖像小說 | 256 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| 風格 | 水彩 | 254 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| 風格 | 水墨 / 中式風格 | 245 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| 風格 | Q 版 / 可愛風 | 198 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| 風格 | 等距視角 | 105 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| 風格 | 像素藝術 | 96 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| 風格 | 油畫 | 80 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| 主題 | 角色 | 2741 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character) |
| 主題 | 文字 / 排版 | 2104 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=text-typography) |
| 主題 | 肖像 / 自拍 | 1788 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| 主題 | 網紅 / 模特 | 1233 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=influencer-model) |
| 主題 | 產品 | 883 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product) |
| 主題 | 建築 / 室內 | 856 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=architecture-interior) |
| 主題 | 圖解 / 圖表 | 749 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=diagram-chart) |
| 主題 | 城市景觀 / 街景 | 724 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cityscape-street) |
| 主題 | 群像 / 情侶 | 720 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=group-couple) |
| 主題 | 風景 / 自然 | 696 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| 主題 | 動物 / 生物 | 562 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=animal-creature) |
| 主題 | 時尚單品 | 547 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-item) |
| 主題 | 抽象 / 背景 | 474 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=abstract-background) |
| 主題 | 食物 / 飲品 | 452 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-drink) |
| 主題 | 交通工具 | 262 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vehicle) |
| 使用場景 | 社群貼文 | 2344 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media-post) |
| 使用場景 | 海報 / 傳單 | 2225 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster-flyer) |
| 使用場景 | 產品行銷 | 1917 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-marketing) |
| 使用場景 | 漫畫 / 分鏡 | 1126 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| 使用場景 | 遊戲素材 | 1010 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=game-asset) |
| 使用場景 | 資訊圖表 / 教育視覺 | 973 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| 使用場景 | 個人檔案 / 頭像 | 806 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=profile-avatar) |
| 使用場景 | App / 網頁設計 | 637 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-web-design) |
| 使用場景 | 電商主圖 | 216 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| 使用場景 | YouTube 縮圖 | 123 | [搜尋](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

## 使用建議

- 需要完整 prompt 記錄時使用 `../data/gpt-image-2-prompts.json`。
- 需要分類導覽或語義搜尋連結時使用 `../data/categories.json`。
- 重用提示詞或圖片時保留來源 case URL 和歸因欄位。
- 瀏覽目前 GPT Image 2 提示詞集合時優先使用 Model Prompt Lab 頁面。
