/* eslint-disable react/jsx-one-expression-per-line */
import Link from "next/link";
import Layout from "~/components/Layout";
import GmailSVG from "~/components/Icons/Gmail";
import GithubSVG from "~/components/Icons/Github";
import LinkedinSVG from "~/components/Icons/LinkedIn";
import { Container, HorizontalBar } from "~/components/PageStyles/common/style";
import {
  HeroWrapper,
  HeroOne,
  HeroTwo,
  CallToAction,
  Contact,
  FeaturedProjects,
  AppBox,
  H1,
} from "~/components/PageStyles/index/style";

// https://www.justinewargnier.com/
// https://simpleicons.org/
// TODO: animate full stack dev text switch using react springs
export default function Home() {
  const featuredProject = [
    {
      name: "kelvinabella.com",
      url: "https://kelvinabella.com",
      imgAlt: "kelvinabella.com",
      imgUrl: "/images/projects/kelvinabella.com.png",
      tags: ["React", "Next"],
      description: "This is my latest portfolio built with next and react.",
    },
    {
      name: "crwn-clothing",
      url: "https://crwn-clothing-live-kelvs.herokuapp.com/",
      imgAlt: "crwn-clothing",
      imgUrl: "/images/projects/crwn-clothing.png",
      tags: ["React", "Redux"],
      description: "Full e-commerce app with stripe and OAuth.",
    },
    {
      name: "portfolio-gastby",
      url: "https://kelvstudio.netlify.app/",
      imgAlt: "portfolio-gastby",
      imgUrl: "/images/projects/gatsby-portfolio.png",
      tags: ["React", "Gatsby"],
      description: "Personal portfolio built with gatsby and react.",
    },
  ];
  return (
    <Layout>
      <Container>
        <HeroWrapper>
          <HeroOne>
            <h1>
              Hello,&nbsp;
              <span>my name is Kelvin.</span>
            </h1>
            <HorizontalBar />
          </HeroOne>
          <HeroTwo>
            <h1>
              I&apos;m a <span>full&#8209;stack developer</span>
              &nbsp;and an open source enthusiast.
            </h1>
          </HeroTwo>
          <CallToAction>
            <Link href="/about">
              <a>Learn more about me</a>
            </Link>
          </CallToAction>
          <Contact>
            <a aria-label="Github" href="https://github.com/kelvinabella">
              <GithubSVG />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/kelvinabella"
            >
              <LinkedinSVG />
            </a>
            <a aria-label="Email To" href="mailto:abellakelvin.ka@gmail.com">
              <GmailSVG />
            </a>
          </Contact>
        </HeroWrapper>
        <HorizontalBar />
        <H1>Featured Projects</H1>
        <FeaturedProjects>
          {featuredProject.map(featured => (
            <AppBox key={featured.name}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={featured.url}
                aria-label={featured.imgAlt}
              >
                <img alt={featured.imgAlt} src={featured.imgUrl} />
              </a>
              <div>
                <h2>{featured.name}</h2>
                {featured.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
                <p>{featured.description}</p>
              </div>
            </AppBox>
          ))}
        </FeaturedProjects>
        <CallToAction>
          <Link href="/projects">
            <a>View more</a>
          </Link>
        </CallToAction>
      </Container>
    </Layout>
  );
}
