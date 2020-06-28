import styled from "styled-components";
import Layout from "../components/layout";
import CatInSpaceSVG from "../components/icons/cat-in-space.svg";
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

  ${media.tablet`width: 100%;`}
`;

const StyledHero = styled.div`
  h1 {
    font-size: 2em;
  }
`;

export default function AMA() {
  return (
    <Layout>
      <StyledContainer>
        <StyledWrapper>
          <CatInSpaceSVG />
          <StyledHero>
            <h1>coming soon</h1>
          </StyledHero>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
}
