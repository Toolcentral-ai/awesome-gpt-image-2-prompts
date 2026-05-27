# GPT Image 2 Prompts — 简体中文

[English](../README.md)

本仓库整理 GPT Image 2 提示词模板和分类元数据，适合用于图片生成工作流、提示词导航、案例检索和 agent skill。

主提示词站点: https://model-prompt-lab.com/models/gpt-image-2/prompts

语义检索示例: https://model-prompt-lab.com/models/gpt-image-2/prompts?q=photography

分类链接统一使用 `q=<分类词>`，不再使用旧的 `categories=<分类词>`。Model Prompt Lab 检索入口支持语义召回，可以直接使用原有分类词找到对应 GPT Image 2 case。

## 仓库内容

- 提示词模板: 7,902
- 来源分类: 70
- 生成时间: `2026-05-27T16:53:33.984453998Z`
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
| 风格 | 性感 | 100 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sexy) |
| 用途 | 社媒内容 | 3216 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=social-media) |
| 风格 | 电影感 | 3181 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cinematic) |
| 用途 | 海报 | 2849 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=poster) |
| 用途 | 概念设计 | 2353 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=concept-art) |
| 风格 | 插画 | 2308 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration) |
| 用途 | 广告 | 2182 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=advertising) |
| 用途 | 角色设计 | 2035 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=character-design) |
| 分类 | 人像角色 | 1995 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=portrait-character) |
| 场景 | 户外 | 1893 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=outdoor) |
| 风格 | 动漫 | 1671 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime) |
| 场景 | 影棚 | 1669 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=studio) |
| 用途 | 品牌视觉 | 1617 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=brand-visual) |
| 场景 | 特写 | 1605 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=close-up) |
| 分类 | 平面海报 | 1595 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=graphic-poster) |
| 分类 | 动漫游戏 | 1440 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=anime-game) |
| 风格 | 编辑大片 | 1355 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=editorial) |
| 风格 | 极简 | 1099 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=minimalist) |
| 风格 | 可爱趣味 | 1087 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cute-playful) |
| 风格 | 棚拍光 | 986 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=studio-lighting) |
| 场景 | 城市 | 974 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=city) |
| 场景 | 夜晚 | 906 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=night) |
| 风格 | 复古 | 875 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=vintage) |
| 分类 | 产品商业 | 860 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-commercial) |
| 分类 | 插画艺术 | 793 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=illustration-art) |
| 风格 | 自然光 | 766 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=natural-light) |
| 风格 | 暗调氛围 | 757 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=dark-moody) |
| 风格 | 奢华 | 718 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=luxury) |
| 用途 | 教育图解 | 694 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=education) |
| 用途 | 灵感板 | 692 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=moodboard) |
| 风格 | 3D 渲染 | 677 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=3d-render) |
| 分类 | 时尚美妆 | 614 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fashion-beauty) |
| 场景 | 街头 | 572 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=street) |
| 场景 | 幻想世界 | 538 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=fantasy-world) |
| 风格 | 未来感 | 465 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=futuristic) |
| 场景 | 日落 | 455 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=sunset) |
| 风格 | 超现实 | 391 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=surreal) |
| 用途 | 应用 UI | 346 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=app-ui) |
| 场景 | 桌面 | 335 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=tabletop) |
| 风格 | 水彩 | 319 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=watercolor) |
| 场景 | 家居 | 302 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=home) |
| 风格 | 赛博朋克 | 284 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=cyberpunk) |
| 用途 | 产品样机 | 280 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=product-mockup) |
| 用途 | 电商 | 250 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=ecommerce) |
| 用途 | 演示文稿 | 243 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=presentation) |
| 风格 | 扁平插画 | 220 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=flat-illustration) |
| 分类 | 其他灵感 | 202 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=other-inspiration) |
| 风格 | 纪实 | 198 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=documentary) |
| 分类 | 风景自然 | 179 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=landscape-nature) |
| 用途 | 壁纸 | 179 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=wallpaper) |
| 场景 | 山地 | 171 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=mountain) |
| 场景 | 未来城市 | 143 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=futuristic-city) |
| 场景 | 森林 | 137 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=forest) |
| 场景 | 餐厅 | 134 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=restaurant) |
| 用途 | 书籍封面 | 130 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=book-cover) |
| 场景 | 卧室 | 125 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=bedroom) |
| 分类 | 室内建筑 | 112 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=interior-architecture) |
| 场景 | 办公室 | 111 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=office) |
| 用途 | 网站首屏 | 111 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=website-hero) |
| 分类 | 食物饮品 | 103 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=food-beverage) |
| 风格 | 像素艺术 | 103 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=pixel-art) |
| 风格 | 等距视角 | 98 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=isometric) |
| 场景 | 海滩 | 89 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=beach) |
| 场景 | 太空 | 80 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=space) |
| 风格 | 油画 | 70 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=oil-painting) |
| 场景 | 客厅 | 69 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=living-room) |
| 用途 | 专辑封面 | 50 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=album-cover) |
| 场景 | 厨房 | 48 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=kitchen) |
| 场景 | 水下 | 34 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=underwater) |
| 场景 | 透明背景 | 25 | [检索](https://model-prompt-lab.com/models/gpt-image-2/prompts?q=transparent-background) |

## 真实案例图片

下面示例直接引用 Model Prompt Lab 真实 case 和 CDN 预览图，确保提示词预览与线上 case 数据保持一致。

| 预览 | Case | 分类 |
|---|---|---|
| [![VR Headset Exploded View Poster](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13460-vr-headset-exploded-view.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=dXYP5cwOWNS3STeojOxlV7Nmp7c%3D)](https://model-prompt-lab.com/cases/vr-headset-exploded-view-gpt-image-2) | [VR Headset Exploded View Poster](https://model-prompt-lab.com/cases/vr-headset-exploded-view-gpt-image-2) | Product & Commercial |
| [![Anime Martial Arts Battle Illustration](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13467-anime-martial-arts-battle-dojo.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=4R1rKwGczmJDWwQT5oO6%2Fvj%2Fxy0%3D)](https://model-prompt-lab.com/cases/anime-martial-arts-battle-dojo-gpt-image-2) | [Anime Martial Arts Battle Illustration](https://model-prompt-lab.com/cases/anime-martial-arts-battle-dojo-gpt-image-2) | Anime & Game |
| [![3D Stone Staircase Evolution Infographic](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13491-3d-stone-staircase-evolution.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=gEJOMABqywDiHP6ySNwSgZ29TgA%3D)](https://model-prompt-lab.com/cases/3d-stone-staircase-evolution-gpt-image-2) | [3D Stone Staircase Evolution Infographic](https://model-prompt-lab.com/cases/3d-stone-staircase-evolution-gpt-image-2) | Illustration & Art |
| [![Illustrated City Food Map](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13515-illustrated-city-food-map.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=oPO7SUilMqwmk3%2FTq6etFp6Tuc0%3D)](https://model-prompt-lab.com/cases/illustrated-city-food-map-gpt-image-2) | [Illustrated City Food Map](https://model-prompt-lab.com/cases/illustrated-city-food-map-gpt-image-2) | Graphic & Poster |
| [![Momotaro Explainer Slide in Hybrid Style](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/13983-momotaro-irasutoya-hybrid-slide.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=%2FzSu3aW5dZpmmRymNgZMyO0D0o4%3D)](https://model-prompt-lab.com/cases/momotaro-irasutoya-hybrid-slide-gpt-image-2) | [Momotaro Explainer Slide in Hybrid Style](https://model-prompt-lab.com/cases/momotaro-irasutoya-hybrid-slide-gpt-image-2) | Graphic & Poster |
| [![E-commerce Live Stream UI Mockup](https://cdn.imagepromptgallery.com/static-assets/gpt-image-2/cases/14036-ecommerce-live-stream-mockup.jpg?OSSAccessKeyId=LTAI5tPvQxtV7iuMWKdnos9n&Expires=2095245364&Signature=xzvSquEjErBTSIbnXaN%2FAiDw8jc%3D)](https://model-prompt-lab.com/cases/ecommerce-live-stream-mockup-gpt-image-2) | [E-commerce Live Stream UI Mockup](https://model-prompt-lab.com/cases/ecommerce-live-stream-mockup-gpt-image-2) | Graphic & Poster |

## 使用建议

- 需要完整 prompt 记录时使用 `../data/gpt-image-2-prompts.json`。
- 需要分类导航或语义检索链接时使用 `../data/categories.json`。
- 复用提示词或图片时保留来源 case URL 和归因字段。
- 浏览当前 GPT Image 2 提示词集合时优先使用 Model Prompt Lab 页面。
