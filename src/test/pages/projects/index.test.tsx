import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Projects, { getStaticProps } from "~/pages/projects";

jest.mock("~/helpers/api", () => ({
  getLatestProjects: () =>
    Promise.resolve([
      {
        name: "kelvinabella.com",
        githubUrl: "https://kelvinabella.com",
        homepage: "https://kelvinabella.com",
        technology: "react",
        description: "description",
      },
    ]),
}));

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Projects page", () => {
  it("renders Projects correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Projects latestProjects={[]} />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Projects correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Projects
          latestProjects={[
            {
              name: "kelvinabella.com",
              githubUrl: "https://kelvinabella.com",
              homepage: "https://kelvinabella.com",
              technology: "react",
              description: "description",
            },
          ]}
        />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // https://stackoverflow.com/questions/58490318/how-do-you-write-jest-tests-for-getinitialprops
  it("populates the latestProjects from API", async () => {
    const { props } = await getStaticProps();

    expect(props).toEqual({
      latestProjects: [
        {
          name: "kelvinabella.com",
          githubUrl: "https://kelvinabella.com",
          homepage: "https://kelvinabella.com",
          technology: "react",
          description: "description",
        },
      ],
    });
  });
});
