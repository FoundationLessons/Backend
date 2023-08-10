import { readFile, writeFile } from "fs/promises";

let template = await readFile(new URL("template.html", import.meta.url), 'utf-8')

template = template.replace(`{Name}`, "Jamoliddin")
template = template.replace(`{Hobbies}`, "Coding, Writing, Design")
template = template.replace(`{Dreams}`, "Being A Pro Coder")

await writeFile(new URL('inde.html', import.meta.url), template)