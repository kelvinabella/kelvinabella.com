import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 3em;
  min-height: calc(100vh - 7rem);

  svg {
    height: 20em;
    width: auto;
  }

  ${({ theme }) => theme.tablet`width: 100%;margin-top: 0;`}
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 1em;
`;

export const PostExcerpt = styled.div`
  margin-top: 0.75em;
  a {
    font-weight: 700;
    font-size: 1.25em;
  }

  p {
    margin: 5px 0;
    font-size: 1.15em;
  }

  span {
    font-size: 0.8rem;
    color: #686b78;
  }
  ${({ theme }) => theme.tablet`
    p {
      font-size: 0.90em;
    };
  `}
`;

export const PostContainer = styled.div`
  margin: 3em;
  max-width: 640px;
  width: 100%;
  ${({ theme }) => theme.desktop`margin: 0 1em 1em 1em;`}
  h1 {
    font-weight: 800;
    margin-bottom: 1em;
  }
  ${({ theme }) => theme.tablet`
  p{
    font-size: 0.90em;
  `}
`;
