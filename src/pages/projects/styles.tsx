import styled from "styled-components";

export const Apps = styled.div`
  margin-top: 4em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppCard = styled.div`
  width: 32%;
  padding: 1em;
  margin: 0 0 10px 0;
  min-height: 130px;
  border-radius: 0.5rem;
  background-color: #fffffe;
  font-family: "Lato", sans-serif;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.025);
  }
  ${({ theme }) => theme.tablet`width: 48%;`}
  ${({ theme }) => theme.thone`width: 100%;`}
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
`;

export const AppDetails = styled.div`
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

  p {
    width: 100%;
    font-size: 14px;
    margin-bottom: 0;
  }
  span {
    padding: 0 2px;
    color: #fff;
    font-family: "Fira Code", monospace;
    letter-spacing: 0.05em;
    font-size: 0.65rem;
    margin-top: 0.5em;
    margin-right: 0.25rem;
    margin-left: 0 !important;
    background-color: #22262e;
    border-radius: 2px;
  }
`;

export const AppLinks = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    margin-top: 0;
  }
`;
