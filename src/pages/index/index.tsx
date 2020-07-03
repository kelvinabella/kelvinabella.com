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
} from "~/components/PageStyles/index/style";

// https://www.justinewargnier.com/
// https://simpleicons.org/
// TODO: animate full stack dev text switch using react springs
export default function Home() {
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
        </HeroWrapper>
        <CallToAction>
          <Link href="/about">
            <a>Learn more about me</a>
          </Link>
        </CallToAction>
        <Contact>
          <a href="https://github.com/kelvinabella">
            <GithubSVG />
          </a>
          <a href="https://www.linkedin.com/in/kelvinabella">
            <LinkedinSVG />
          </a>
          <a href="mailto:abellakelvin.ka@gmail.com">
            <GmailSVG />
          </a>
        </Contact>
      </Container>
    </Layout>
  );
}
