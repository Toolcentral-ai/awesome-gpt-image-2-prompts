#!/usr/bin/env node
import fs from "node:fs";

const bundle = JSON.parse(fs.readFileSync(new URL("../data/image-prompt-templates.json", import.meta.url), "utf8"));
console.log(`Loaded ${bundle.templates.length} templates generated at ${bundle.generatedAt}`);
for (const item of bundle.templates.slice(0, 5)) {
  console.log(`- [${item.category}] ${item.title}: ${item.source.caseUrl}`);
}
