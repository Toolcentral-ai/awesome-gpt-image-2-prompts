# GPT Image 2 Prompts — 简体中文

[English](../README.md)

本仓库整理 GPT Image 2 提示词模板和分类元数据，适合用于图片生成工作流、提示词导航、案例检索和 agent skill。

主提示词站点: https://model-prompt-lab.com/models/gpt-image-2/prompts

语义检索示例: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

分类链接统一使用 `q=<分类词>`，不再使用旧的 `categories=<分类词>`。Model Prompt Lab 检索入口支持语义召回，可以直接使用原有分类词找到对应 GPT Image 2 case。

## 仓库内容

- 提示词模板: 7,429
- 来源分类: 42
- 生成时间: `2026-05-25T02:06:15.665Z`
- Schema 版本: `2026-05-24`

## 文件说明

- `../data/gpt-image-2-prompts.json`：完整增强提示词数据，包含 prompt 文本、变量、预览图、标签、输入模式、参考图和归因字段。
- `../data/categories.json`：分类分组、数量、语义检索链接，以及每个分类下的 prompt slug。
- `../data/source-prompts.json`：精简来源提示词索引。
- `../docs/source-gallery.md`：中英文分类索引。
- `../schema/gpt-image-2-prompt.schema.json`：prompt 记录 JSON schema。
- `../skills/gpt-image-2-prompts/SKILL.md`：用于提示词编写流程的 agent skill。

## 分类导航

| 分组 | 分类 | 模板数 | 检索 |
|---|---|---:|---|
| 其他 | GPT Image 2 提示词 | 104 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=gpt-image-2-prompt) |
| 风格 | 摄影 | 3174 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography) |
| 风格 | 插画 | 1988 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| 风格 | 电影 / 电影剧照 | 1639 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic-film-still) |
| 风格 | 动漫 / 漫画 | 1486 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-manga) |
| 风格 | 极简主义 | 1021 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalism) |
| 风格 | 3D 渲染 | 848 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| 风格 | 复古 / 怀旧 | 669 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=retro-vintage) |
| 风格 | 赛博朋克 / 科幻 | 533 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk-sci-fi) |
| 风格 | 草图 / 线稿 | 422 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sketch-line-art) |
| 风格 | 漫画 / 图画小说 | 256 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-graphic-novel) |
| 风格 | 水彩画 | 254 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| 风格 | 水墨 / 中国风 | 245 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ink-chinese-style) |
| 风格 | Q 版 / Q 萌风 | 198 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=chibi-q-style) |
| 风格 | 等距 | 105 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| 风格 | 像素艺术 | 96 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| 风格 | 油画 | 80 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| 主体 | 角色 | 2741 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character) |
| 主体 | 文本 / 排版 | 2104 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=text-typography) |
| 主体 | 人像 / 自拍 | 1788 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-selfie) |
| 主体 | 网红 / 模特 | 1233 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=influencer-model) |
| 主体 | 产品 | 883 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product) |
| 主体 | 建筑 / 室内设计 | 856 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=architecture-interior) |
| 主体 | 图表 | 749 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=diagram-chart) |
| 主体 | 城市风光 / 街道 | 724 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cityscape-street) |
| 主体 | 团体 / 情侣 | 720 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=group-couple) |
| 主体 | 风景 / 自然 | 696 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| 主体 | 动物 / 生物 | 562 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=animal-creature) |
| 主体 | 时尚单品 | 547 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-item) |
| 主体 | 摘要 / 背景 | 474 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=abstract-background) |
| 主体 | 食品 / 饮料 | 452 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-drink) |
| 主体 | 车辆 | 262 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vehicle) |
| 使用场景 | 社交媒体帖子 | 2344 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media-post) |
| 使用场景 | 海报 / 传单 | 2225 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster-flyer) |
| 使用场景 | 产品营销 | 1917 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-marketing) |
| 使用场景 | 漫画 / 故事板 | 1126 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=comic-storyboard) |
| 使用场景 | 游戏素材 | 1010 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=game-asset) |
| 使用场景 | 信息图 / 教育视觉图 | 973 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=infographic-edu-visual) |
| 使用场景 | 个人资料 / 头像 | 806 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=profile-avatar) |
| 使用场景 | App / 网页设计 | 637 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-web-design) |
| 使用场景 | 电商主图 | 216 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce-main-image) |
| 使用场景 | YouTube 缩略图 | 123 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=youtube-thumbnail) |

## 使用建议

- 需要完整 prompt 记录时使用 `../data/gpt-image-2-prompts.json`。
- 需要分类导航或语义检索链接时使用 `../data/categories.json`。
- 复用提示词或图片时保留来源 case URL 和归因字段。
- 浏览当前 GPT Image 2 提示词集合时优先使用 Model Prompt Lab 页面。
