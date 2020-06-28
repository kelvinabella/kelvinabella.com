import styled from "styled-components";
import Layout from "../components/layout";
import media from "../styles/media";
import Link from "next/link";
import GithubSVG from "../components/icons/github.svg";
import LinkedinSVG from "../components/icons/linkedin.svg";
import GmailSVG from "../components/icons/gmail.svg";

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledWrapper = styled.div`
  max-width: 800px;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  ${media.bigDesktop`width: 90%;`}
`;

//put a div in the hero that can be tilted like in react spring
const HeroOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Caveat", cursive;
  h1 {
    display: inline-block;
    overflow: visible;
    width: 100%;
    flex: 0 auto;
    font-size: 4em;
    font-weight: 400;
    text-align: center;
    ${media.thone`font-size: 2em;`}
  }

  span {
    font-weight: 700;
  }
`;

const HeroTwo = styled.div`
  h1 {
    position: relative;
    font-size: 3.5em;
    line-height: 58px;
    font-weight: 400;
    text-align: center;
    font-family: "Lato", sans-serif;
    ${media.thone`font-size: 2em;`}
    ${media.phablet`
      font-size: 1.5em;
      line-height: 35px;
    `}
  }

  span {
    padding-right: 5px;
    padding-left: 5px;
    background: linear-gradient(
      transparent 10%,
      #495867 10%,
      #495867 100%,
      transparent 90%
    );
    color: #fff;
    font-weight: 300;
    text-align: justify;
  }
`;

const HorizontalBar = styled.div`
  width: 27%;
  position: relative;
  display: inline-block;
  min-height: 5px;
  margin-left: 0px;
  margin: 11px 0;
  padding-bottom: 0px;
  border-bottom: 3px solid #fe6056;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  min-height: 40vh;
  ${media.tablet`
     justify-content: center;
  `}
`;

const StyledCallToAction = styled.div`
  margin: 2em 0 4em 0;
  font-size: 15px;

  ${media.tablet`
    margin: 2em 0 4em 0;
  `}

  a {
    padding: 0 20px;
    height: 25px;
  }

  a::before,
  a::after {
    position: absolute;
    width: 25px;
    height: 1px;
    background: ${(props) => props.theme.text.dark};
    content: "";
    opacity: 0.2;
    transition: all 0.3s;
    pointer-events: none;
  }

  .dark-mode & a::before,
  .dark-mode & a::after {
    background: ${(props) => props.theme.text.light};
  }

  a:hover {
    opacity: 0.9;
  }

  a::before {
    top: 0;
    left: 0;
    transform: rotate(90deg);
    transform-origin: 0 0;
  }

  a::after {
    right: 0;
    bottom: 0;
    transform: rotate(90deg);
    transform-origin: 100% 0;
  }

  a:hover::before,
  a:hover::after,
  a:focus::before,
  a:focus::after {
    opacity: 1;
  }

  a:hover::before,
  a:focus::before {
    left: 50%;
    transform: rotate(0deg) translateX(-50%);
  }

  a:hover::after,
  a:focus::after {
    right: 50%;
    transform: rotate(0deg) translateX(50%);
  }
`;

const StyledSVG = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;

  svg {
    height: 1.5em;
    width: 100%;
    fill: ${(props) => props.theme.text.dark};
  }

  .dark-mode & svg {
    fill: ${(props) => props.theme.text.light};
  }

  ${media.tablet`
    width: 40%;
    svg {
      height: 1.1em;
    }
  `}
`;

// https://www.justinewargnier.com/
// https://simpleicons.org/
//TODO: animate full stack dev text switch using react springs
export default function Home() {
  return (
    <Layout>
      <section>
        <StyledContainer>
          <StyledWrapper>
            <HeroWrapper>
              <HeroOne>
                <h1>
                  Hello, <span>my name is Kelvin.</span>
                </h1>
                <HorizontalBar />
              </HeroOne>
              <HeroTwo>
                <h1>
                  I am a <span>full-stack developer</span> and an open source
                  enthusiast.
                </h1>
              </HeroTwo>
            </HeroWrapper>
            <StyledCallToAction>
              <Link href="/about">
                <a>Learn more about me</a>
              </Link>
            </StyledCallToAction>
            <StyledSVG>
              <a href="https://github.com/kelvinabella">
                <GithubSVG />
              </a>
              <a href="https://www.linkedin.com/in/kelvinabella">
                <LinkedinSVG />
              </a>
              <a href="mailto:abellakelvin.ka@gmail.com">
                <GmailSVG />
              </a>
            </StyledSVG>
          </StyledWrapper>
        </StyledContainer>
      </section>
    </Layout>
  );
}
