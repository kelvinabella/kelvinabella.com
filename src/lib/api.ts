import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

type ProjectsAPI = {
  fork: boolean;
  name: string;
  htmlUrl: string;
  homepage: string;
  description: string;
};

type ProjectsUI = {
  name: string;
  githubUrl: string;
  homepage: string;
  technology: string;
  description: string;
};

export async function getLatestProjects() {
  let latestProjects: ProjectsUI[] = [];
  try {
    const res = await fetch(
      "https://api.github.com/users/kelvinabella/repos?sort=created&direction=desc&type=owner"
    );
    const projects: ProjectsAPI[] = await res.json();
    latestProjects = projects
      .filter(project => project.fork === false)
      .map((project: any) => {
        let description: string[] = [];
        if (project.description) {
          description = project.description.split(
            " This project is built using "
          );
        }
        return {
          name: project.name,
          githubUrl: project.html_url,
          homepage: project.homepage,
          technology: description[1] || "",
          description: description[0] || "",
        };
      });
  } catch (error) {
    // do nothing
  }

  return latestProjects;
}
