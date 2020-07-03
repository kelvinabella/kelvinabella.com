/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import Layout from "~/components/Layout";
import GithubSVG from "~/components/Icons/Github";
import OpenLinkSVG from "~/components/Icons/OpenLink";
import {
  Apps,
  AppCard,
  AppDetails,
  AppLinks,
} from "~/components/PageStyles/projects/style";
import { Container, HorizontalBar } from "~/components/PageStyles/common/style";

type ProjectsAPI = {
  fork: boolean;
  name: string;
  html_url: string;
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

export const getStaticProps = async () => {
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

  return {
    props: {
      latestProjects,
    },
  };
};

// https://sindresorhus.com/apps
export default function Projects({
  latestProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [appList] = useState(latestProjects);
  // TODO: Implement pagination.
  return (
    <Layout siteTitle="Projects">
      <Container>
        <Apps>
          {appList.map(app => (
            <AppCard key={app.name}>
              {/* <img src={app.imgUrl}></img> */}
              <AppLinks>
                <HorizontalBar />
                <span>
                  {app.homepage && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={app.homepage}
                    >
                      <OpenLinkSVG />
                    </a>
                  )}
                  {app.githubUrl && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={app.githubUrl}
                    >
                      <GithubSVG />
                    </a>
                  )}
                </span>
              </AppLinks>
              <AppDetails>
                <h2>{app.name}</h2>
                {app.technology.split(",").map((el, index) => (
                  <span key={index}>{el.trim()}</span>
                ))}
                <p>{app.description}</p>
              </AppDetails>
            </AppCard>
          ))}
        </Apps>
      </Container>
    </Layout>
  );
}
