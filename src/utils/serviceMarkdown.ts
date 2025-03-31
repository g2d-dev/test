import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const servicesDirectory = join(process.cwd(), "markdown/services");

export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory);
}

export function getServiceBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(servicesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | object;
  };

  const items: any = {};

  function processImages(content: string) {
    // Remplace les chemins d'image par des balises HTML d'image
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = processImages(content);
    }

    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllServices(fields: string[] = []) {
  const slugs = getServiceSlugs();
  const services = slugs
    .map((slug) => getServiceBySlug(slug, fields))
    // Trie les services par ID
    .sort((service1, service2) => (service1.id < service2.id ? -1 : 1));

  return services;
}
