/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import styled from "styled-components";
import Layout from "~/components/Layout";
import GithubSVG from "~/components/Icons/Github";
import OpenLinkSVG from "~/components/Icons/OpenLink";

const StyledContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledWrapper = styled.div`
  max-width: 968px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
  margin: 3em 5em;
  ${({ theme }) => theme.tablet`margin: 1.5em;`}
  ${({ theme }) => theme.thone`margin: 0.5em;`}
`;

const StyledAppCard = styled.div`
  width: 32%;
  display: block;
  min-height: 150px;
  border-radius: 0.5rem;
  background-color: #fffffe;
  font-family: "Lato", sans-serif;
  margin: 0 0 10px 0;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  transition: transform 0.2s;
  padding: 1em;

  &:hover {
    transform: scale(1.025);
  }

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    width: 100%;
    max-height: 200px;
  }

  ${({ theme }) => theme.tablet`width: 48%;`}
  ${({ theme }) => theme.thone`width: 100%;`}
`;

const StyledDetails = styled.div`
  color: ${props => props.theme.text.dark};
  display: flex;
  flex-wrap: wrap;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25em;
    width: 100%;
  }
  a {
    padding: 0 5px;
    svg {
      height: 1rem;
      fill: #a0aec0;
    }
  }
  a:hover svg {
    fill: #000;
  }
  p {
    width: 100%;
    font-size: 14px;
  }
`;

const StyleSpan = styled.span`
  font-family: "Fira Code", monospace;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  margin-right: 0.25rem;
  padding: 0 3px;
  margin-left: 0 !important;
  margin-top: 0.5em;
  color: #fff;
  background-color: #22262e;
  border-radius: 2px;
`;

const StyledAppsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHero = styled.div`
  padding: 0 0.25em;
`;

const HorizontalBar = styled.div`
  display: block;
  width: 90px;
  max-width: 90%;
  min-height: 5px;
  margin-left: 0px;
  margin-bottom: 3em;
  border-bottom: 3px solid #fe6056;
`;

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
    <Layout>
      <StyledContainer>
        <StyledWrapper>
          <StyledHero>
            <HorizontalBar />
          </StyledHero>
          <StyledAppsDiv>
            {appList.map(app => (
              <StyledAppCard key={app.name}>
                {/* <img src={app.imgUrl}></img> */}
                <StyledDetails>
                  <h2>
                    {app.name}
                    <div>
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
                    </div>
                  </h2>
                  {app.technology.split(",").map((el, index) => (
                    <StyleSpan key={index}>{el.trim()}</StyleSpan>
                  ))}
                  <p>{app.description}</p>
                </StyledDetails>
              </StyledAppCard>
            ))}
          </StyledAppsDiv>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
