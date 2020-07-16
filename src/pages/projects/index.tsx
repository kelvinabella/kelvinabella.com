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
import { getLatestProjects } from "~/helpers/api";

export const getStaticProps = async () => {
  const latestProjects = await getLatestProjects();
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
                      aria-label="Open Link"
                    >
                      <OpenLinkSVG />
                    </a>
                  )}
                  {app.githubUrl && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={app.githubUrl}
                      aria-label="Github"
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
