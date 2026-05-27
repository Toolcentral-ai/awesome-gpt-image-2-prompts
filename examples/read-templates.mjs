#!/usr/bin/env node
import fs from "node:fs";
const bundle = JSON.parse(fs.readFileSync(new URL("../data/gpt-image-2-prompts.json", import.meta.url), "utf8"));
console.log(`Loaded ${bundle.templates.length} templates generated at ${bundle.generatedAt}`);
for (const item of bundle.templates.filter((template) => template.previewImageUrl).slice(0, 5)) console.log(`- [${item.category}] ${item.title}: ${item.previewImageUrl}`);
