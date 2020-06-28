import styled from "styled-components";
import Layout from "../components/layout";
import media from "../styles/media";

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
  align-content: flex-start;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
  margin: 3em 5em;
  ${media.desktop`margin: 3em;`}
  ${media.tablet`margin: 3em 1em;`}
`;

const StyledImageContainer = styled.div`
  margin-top: 3.5em;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSquare = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
    0 40px 77px 0 rgba(0, 0, 0, 0.22);
  overflow: visible;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #503282;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://kelvs.me/static/photo.edb1199e.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  -webkit-filter: url("#duotone");
  filter: url("#duotone");
`;

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 10%;
  margin-left: 10%;
  border: 10px solid #fff;
  font-family: "Josefin Sans", sans-serif;
`;

const StyledH2 = styled.h2`
  position: absolute;
  top: -0.5em;
  left: -0.3em;
  margin: 0;
  font-size: 8em;
  line-height: 1;
  letter-spacing: 0;
  color: #000;
  opacity: 0.15;

  ${media.desktop`left: -0.7em;`}
  ${media.tablet`font-size: 6em;`}
`;

const StyledHeroOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 3em;
  ${media.desktop`
    flex-direction: column-reverse;
    align-items: center;
  `}
  ${media.tablet`margin-top: 0;`}
`;

const StyledAboutMeContent = styled.div`
  margin: 0 3em;
  width: 50%;
  height: 100%;
  h1 {
    margin-bottom: 0.5em;
    font-weight: 900;
  }

  ${media.desktop`
    margin-top: 4em;
    margin: 0;
    width: 100%;
    margin-top: 3em;
    h1{
      text-align: center;
    }
  `}
`;

const StyledSkillContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-top: 5em;
  text-align: center;
  h1 {
    font-weight: 900;
  }
  ${media.tablet`margin-top: 3em;`}
`;

// TODO: Change skills like in github CI icons. https://github.com/denoland/rusty_v8 https://github.com/unicodeveloper/awesome-nextjs
const StyledSkillsWrapper = styled.div`
  margin: 2em auto;
  flex-wrap: wrap;
  display: flex;
  width: 50%;
  justify-content: center;
  span {
    font-size: 1em;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 2em;
    padding: 0 10px;
    line-height: 22px;
    color: #0366d6;
    white-space: nowrap;
    background-color: #f1f8ff;
    margin: 0.25em;
  }

  ${media.desktop`width:100%;`};
`;

export default function About() {
  return (
    <Layout siteTitle="About">
      <StyledContainer>
        <StyledWrapper>
          <StyledHeroOne>
            <StyledAboutMeContent>
              <h1>About me</h1>
              <p>
                Hello! I'm Kelvin, my friends call me kelvs. I'm currently based
                in Abu Dhabi, UAE.
              </p>
              <p>
                I like building things on the web using JavaScript and React.
                I'm self-directed and motivated full-stack software developer
                experienced in working effectively in dynamic environments.
              </p>
              <p>
                I am hardworking software development professional driven to
                increase team effectiveness. Highly organized, professional,
                resourceful and flexible with eagerness to learn new
                technologies and tools.
              </p>
            </StyledAboutMeContent>

            <StyledImageContainer>
              <StyledSquare>
                <StyledImageWrapper>
                  <StyledImage />
                </StyledImageWrapper>
                <StyledDiv>
                  <StyledH2>Kelvs</StyledH2>
                </StyledDiv>
              </StyledSquare>
            </StyledImageContainer>
          </StyledHeroOne>

          <StyledSkillContainer>
            <h1>Skills and Proficiency</h1>
            <StyledSkillsWrapper>
              <span>basic web design</span>
              <span>software testing</span>
              <span>git</span>
              <span>HTML5/CSS3/SASS</span>
              <span>javascript/es6</span>
              <span>jQuery</span>
              <span>Node.js/Express</span>
              <span>React.js</span>
              <span>Vue.js</span>
              <span>C</span>
              <span>C#</span>
              <span>.NET Core</span>
              <span>Python</span>
              <span>SQL</span>
              <span>PL/SQL</span>
              <span>MS SQL</span>
              <span>MongoDB</span>
              <span>Postgres</span>
              <span>Redis</span>
              <span>Docker</span>
            </StyledSkillsWrapper>
          </StyledSkillContainer>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
