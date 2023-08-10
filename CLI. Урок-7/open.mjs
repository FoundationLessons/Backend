#! /usr/bin/env node

import { readFile, writeFile } from "fs/promises";
import readline from "readline-sync";
import open from "open";

(async () => {
  try {
    let template = await readFile(new URL("template.html", import.meta.url), 'utf-8');
    template = template.replace(`{Title}`, "Just Test");

    const fileName = readline.question("FileName: ");
    const filePath = new URL(`${fileName}`, import.meta.url);
    
    await writeFile(filePath, template);
    console.log(`File "${fileName}" created successfully.`);

    await open(filePath.href);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
