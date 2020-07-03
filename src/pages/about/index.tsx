/* eslint-disable react/no-array-index-key */
import Layout from "~/components/Layout";
import { Container } from "~/components/PageStyles/common/style";
import {
  Hero,
  AboutMe,
  ImageContainer,
  Skills,
} from "~/components/PageStyles/about/style";

export default function About() {
  const skills = [
    // { color: "25A3DA", name: "basic web design" },
    // { color: "25A3DA", name: "software development" },
    // { color: "25A3DA", name: "software testing" },
    { color: "F05032", name: "git" },
    { color: "E34F26", name: "HTML5" },
    { color: "1572B6", name: "CSS3" },
    { color: "CC6699", name: "SASS" },
    { color: "F7DF1E", name: "JavaScript" },
    { color: "0769AD", name: "jQuery" },
    { color: "339933", name: "Node.js" },
    { color: "61DAFB", name: "React" },
    { color: "000000", name: "Next.js" },
    { color: "4FC08D", name: "Vue.js" },
    { color: "3776AB", name: "Python" },
    { color: "A8B9CC", name: "C" },
    { color: "239120", name: "C Sharp" },
    { color: "5C2D91", name: ".NET" },
    { color: "CC2927", name: "Microsoft SQL Server" },
    { color: "47A248", name: "MongoDB" },
    { color: "336791", name: "PostgreSQL" },
    { color: "DC382D", name: "Redis" },
    { color: "2496ED", name: "Docker" },
  ];
  return (
    <Layout siteTitle="About">
      <Container>
        <Hero>
          <AboutMe>
            <h1>About me</h1>
            <p>
              Hello! I&apos;m Kelvin, my friends call me kelvs. I&apos;m
              currently based in Abu Dhabi, UAE.
            </p>
            <p>
              I like building things on the web using JavaScript and React.
              I&apos;m self-directed and motivated full-stack software developer
              experienced in working effectively in dynamic environments.
            </p>
            <p>
              I am hardworking software development professional driven to
              increase team effectiveness. Highly organized, professional,
              resourceful and flexible with eagerness to learn new technologies
              and tools.
            </p>
          </AboutMe>
          <ImageContainer>
            <div>
              <div>
                <div />
              </div>
              <div>
                <h2>Kelvs</h2>
              </div>
            </div>
          </ImageContainer>
        </Hero>

        <Skills>
          <h1>Skills and Libraries</h1>
          <div>
            {skills.map((skill, key) => (
              <span key={key}>
                <img
                  src={`https://img.shields.io/badge/-${skill.name}-${
                    skill.color || "1AA6E4"
                  }.svg?logo=${skill.name}&style=flat&logoColor=fff`}
                  alt={skill.name}
                />
              </span>
            ))}
          </div>
        </Skills>
      </Container>
    </Layout>
  );
}
