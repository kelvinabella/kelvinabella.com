import styled from "styled-components";

export const StyledWrapper = styled.div`
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
  ${({ theme }) => theme.tablet`width: 85%;`}
`;

export const Hero = styled.div`
  margin: 5em 0;
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.tablet`margin-top: 2em;`}

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

export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${({ theme }) => theme.tablet`margin-bottom: 1em;`}

  svg {
    width: auto;
    height: 10em;
  }
`;

export const Contacts = styled.div`
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
    fill: ${props => props.theme.text.dark};
  }

  .dark-mode & svg {
    fill: ${props => props.theme.text.light};
  }
`;
