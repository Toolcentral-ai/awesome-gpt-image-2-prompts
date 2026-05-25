#!/usr/bin/env node
import fs from "node:fs";
const bundle = JSON.parse(fs.readFileSync(new URL("../data/gpt-image-2-prompts.json", import.meta.url), "utf8"));
const featured = JSON.parse(fs.readFileSync(new URL("../data/featured-prompts.json", import.meta.url), "utf8"));
console.log(`Loaded ${bundle.templates.length} templates generated at ${bundle.generatedAt}`);
console.log(`Featured prompts: ${featured.count}`);
for (const item of bundle.templates.filter((template) => template.featured).slice(0, 5)) console.log(`- [${item.category}] ${item.title}: ${item.previewImageUrl}`);
