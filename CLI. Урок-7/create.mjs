#! /usr/bin/env node

import { readFile, writeFile } from "fs/promises";
import readline from "readline-sync";

(async () => {
  try {
    let template = await readFile(
      new URL("template.html", import.meta.url),
      "utf-8"
    );
    template = template.replace(`{Title}`, "Just Test");
    const fileName = readline.question("FileName: ");

    await writeFile(new URL(`${fileName}`, import.meta.url), template);
    console.log(`File "${fileName}" created successfully.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();

export default fileName;
