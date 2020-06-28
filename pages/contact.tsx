import styled from "styled-components";
import Layout from "../components/layout";
import GithubSVG from "../components/icons/github.svg";
import LinkedinSVG from "../components/icons/linkedin.svg";
import GmailSVG from "../components/icons/gmail.svg";
import ContactSVG from "../components/icons/contact.svg";
import media from "../styles/media";

const StyledContainer = styled.section`
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

  svg {
    height: 20em;
    width: auto;
  }

  ${media.tablet`width: 85%;`}
`;

const StyledHeroOne = styled.div`
  margin: 5em 0;
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  a {
    color: #63d2ff;
    padding: 7px 0px;
    font-weight: 700;
    font-size: 18px;
    position: relative;
    border-radius: 4px;
    transition: all ease 0.3s;
  }

  a:hover {
    color: #63d2ff;
  }

  a::after {
    content: "";
    width: 0px;
    height: 2px;
    background: #63d2ff;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    transition: all ease 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
`;

const StyledHeroTwo = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  margin: 1em;

  a {
    display: flex;
    align-content: center;
    margin: 5px 0;
  }

  span {
    margin: 0 10px;
  }

  svg {
    height: 1.5em !important;
    width: auto;
    fill: ${(props) => props.theme.text.dark};
  }

  .dark-mode & svg {
    fill: ${(props) => props.theme.text.light};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${media.tablet`margin-bottom: 1em;`}

  svg {
    height: 10em;
  }
`;

// https://deab.ru/#contacts
export default function Contact() {
  return (
    <Layout>
      <StyledContainer>
        <StyledWrapper>
          <StyledHeroOne>
            <h1>Let's make great products together!</h1>
            <div className="button">
              <a rel="nofollow" href="mailto:abellakelvin.ka@gmail.com">
                Tell about your project
              </a>
            </div>
          </StyledHeroOne>
          <ContactWrapper>
            <StyledHeroTwo>
              <a href="mailto:abellakelvin.ka@gmail.com">
                <span>
                  <GmailSVG />
                </span>{" "}
                <span>abellakelvin.ka@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/kelvinabella">
                <span>
                  <LinkedinSVG />
                </span>{" "}
                <span>Kelvin Abella</span>
              </a>
              <a href="https://github.com/kelvinabella">
                <span>
                  <GithubSVG />
                </span>{" "}
                <span>kelvinabella</span>
              </a>
            </StyledHeroTwo>
            <ContactSVG />
          </ContactWrapper>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
