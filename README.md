# Image Prompt Templates / 图像提示词模板

[English](#english) | [中文](#中文)

<a id="english"></a>

## English

Open image prompt templates derived from public Image Prompt Gallery cases. The data is designed for agents, prompt tooling, examples, and community reuse.

- Source site: https://imagepromptgallery.com
- Templates: 7289
- Generated at: 2026-05-24T18:07:24.600Z
- Schema version: 2026-05-24

### What is included

- Reusable GPT Image 2 prompt text
- Prompt variables parsed from `{argument name="..." default="..."}` blocks
- Category and tag metadata
- Input mode and reference-image requirements
- Public IPG case URL for attribution

### What is not included

This repository does not include private ingestion logic, review tooling, ranking logic, growth playbooks, Dovoo callback internals, admin credentials, or production database snapshots.

### Data files

- `data/image-prompt-templates.json` — complete template bundle
- `data/categories.json` — category summary
- `schema/image-prompt-template.schema.json` — JSON Schema for the bundle
- `skills/image-prompt-templates/SKILL.md` — bilingual agent skill for prompt generation

### Top categories

- General prompt: 4637
- Poster design: 1209
- Portrait photography: 652
- Product Marketing: 293
- Comic / Storyboard: 271
- Infographic: 218
- E-commerce Main Image: 8
- App UI Design: 1

### Quick usage

```bash
node examples/read-templates.mjs
```

### Attribution

Each template includes `source.caseUrl`. Keep the case URL when reusing a prompt or publishing derivative examples. Some prompts are derived from third-party public sources curated by Image Prompt Gallery; check the linked case and source attribution before commercial use.

### License

Code, schema, examples, and skill files are released under MIT. Prompt data is provided for reuse with attribution to Image Prompt Gallery and the linked source case.

<a id="中文"></a>

## 中文

本仓库提供从 Image Prompt Gallery 公开 case 派生的图像提示词模板，面向 agent、提示词工具、示例项目和社区复用。

- 来源站点：https://imagepromptgallery.com
- 模板数量：7289
- 生成时间：2026-05-24T18:07:24.600Z
- Schema 版本：2026-05-24

### 包含内容

- 可复用的 GPT Image 2 提示词文本
- 从 `{argument name="..." default="..."}` 解析出的提示词变量
- 分类与标签元数据
- 输入模式与参考图数量要求
- 用于归因的公开 IPG case 链接

### 不包含内容

本仓库不包含私有入库逻辑、审核工具、排序逻辑、增长 playbook、Dovoo callback 内部实现、管理后台凭据或生产数据库快照。

### 数据文件

- `data/image-prompt-templates.json`：完整模板数据包
- `data/categories.json`：分类聚合
- `schema/image-prompt-template.schema.json`：数据包 JSON Schema
- `skills/image-prompt-templates/SKILL.md`：中英文双语 agent skill

### 主要分类

- General prompt: 4637
- Poster design: 1209
- Portrait photography: 652
- Product Marketing: 293
- Comic / Storyboard: 271
- Infographic: 218
- E-commerce Main Image: 8
- App UI Design: 1

### 快速使用

```bash
node examples/read-templates.mjs
```

### 归因

每条模板都包含 `source.caseUrl`。复用提示词或发布派生示例时，请保留该 case 链接。部分提示词来自 Image Prompt Gallery 策展的第三方公开来源；商业使用前请检查链接 case 与来源归因。

### 许可

代码、schema、示例和 skill 文件使用 MIT 许可。提示词数据可在保留 Image Prompt Gallery 与对应 case 链接归因的前提下复用。
