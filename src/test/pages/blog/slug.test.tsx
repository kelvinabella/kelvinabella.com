import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Post, { getStaticProps, getStaticPaths } from "~/pages/blog/[slug]";

// https://github.com/facebook/jest/issues/5579#issuecomment-397406174
jest.mock("~/helpers/markdown-to-html", () => ({
  __esModule: true,
  default: () => Promise.resolve("This is my first post on this site."),
}));

jest.mock("~/helpers/api", () => ({
  __esModule: true,
  getPostBySlug: () => ({
    title: "Hello new portfolio site!",
    date: "2020-06-28T00:17:07.322Z",
    slug: "hello-world",
    author: {
      name: "Kelvin Abella",
      picture: "/assets/blog/authors/kelvs.jpg",
    },
    coverImage: "/assets/blog/hello-world/cover.jpg",
    ogImage: {
      url: "/assets/blog/hello-world/cover.jpg",
    },
  }),
  getAllPosts: () => [
    {
      title: "Hello new portfolio site!",
      date: "2020-06-28T00:17:07.322Z",
      slug: "hello-world",
      tags: "blogging, random",
      author: {
        name: "Kelvin Abella",
        picture: "/assets/blog/authors/kelvs.jpg",
      },
      coverImage: "/assets/blog/hello-world/cover.jpg",
      excerpt: "This is my first post on this site.",
    },
  ],
}));

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Blog page", () => {
  it("renders Post correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Post
          post={{
            title: "Hello new portfolio site!",
            date: "2020-06-28T00:17:07.322Z",
            slug: "/blog/hello-world",
            author: {
              name: "Kelvin Abella",
              picture: "/assets/blog/authors/kelvs.jpg",
            },
            coverImage: "/assets/blog/hello-world/cover.jpg",
            excerpt: "This is my first post on this site.",
            ogImage: {
              url: "/assets/blog/hello-world/cover.jpg",
            },
            content: "This is my first post on this site.",
          }}
        />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // https://stackoverflow.com/questions/58490318/how-do-you-write-jest-tests-for-getinitialprops
  it("populates the post from API", async () => {
    const { props } = await getStaticProps({
      params: { slug: "/blog/hello-world" },
    });
    expect(props).toEqual({
      post: {
        title: "Hello new portfolio site!",
        date: "2020-06-28T00:17:07.322Z",
        slug: "hello-world",
        author: {
          name: "Kelvin Abella",
          picture: "/assets/blog/authors/kelvs.jpg",
        },
        coverImage: "/assets/blog/hello-world/cover.jpg",
        ogImage: {
          url: "/assets/blog/hello-world/cover.jpg",
        },
        content: "This is my first post on this site.",
      },
    });
  });

  it("populates parses path correctly", async () => {
    const { paths } = await getStaticPaths();
    expect(paths).toEqual([
      {
        params: {
          slug: "hello-world",
        },
      },
    ]);
  });
});
