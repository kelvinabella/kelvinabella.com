import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Blog, { getStaticProps } from "~/pages/blog";

jest.mock("~/helpers/api", () => ({
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
  it("renders Blog correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Blog allPosts={[]} />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Blog correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Blog
          allPosts={[
            {
              title: "Hello new portfolio site!",
              date: "2020-06-28T00:17:07.322Z",
              slug: "hello-world",
              tags: "blogging, random",
              author: "Kelvin Abella",
              coverImage: "/assets/blog/hello-world/cover.jpg",
              excerpt: "This is my first post on this site.",
            },
          ]}
        />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // https://stackoverflow.com/questions/58490318/how-do-you-write-jest-tests-for-getinitialprops
  it("populates the allPosts from API", async () => {
    const { props } = await getStaticProps();

    expect(props).toEqual({
      allPosts: [
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
    });
  });
});
