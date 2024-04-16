import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
    const text = await readFile(`./public/content/${slug}.md`, "utf8");
    const { content, data: { title, seo_title, seo_desctiption } } = matter(text);
    const body = marked(content);
    return {slug, title, seo_title, seo_desctiption, body}
 }

 