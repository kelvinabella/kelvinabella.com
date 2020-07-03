import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 40vh;
  ${({ theme }) => theme.tablet`justify-content: center;`}
`;

// TODO: put a div in the hero that can be tilted like in react spring
export const HeroOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Caveat", cursive;
  h1 {
    display: inline-block;
    overflow: visible;
    width: 100%;
    flex: 0 auto;
    font-size: 4em;
    font-weight: 400;
    text-align: center;
    ${({ theme }) => theme.thone`font-size: 2em;`}
  }
  span {
    font-weight: 700;
  }
`;

export const HeroTwo = styled.div`
  h1 {
    position: relative;
    font-size: 3.5em;
    font-weight: 400;
    text-align: center;
    line-height: 58px;
    font-family: "Lato", sans-serif;
    ${({ theme }) => theme.thone`font-size: 2em;`}
    ${({ theme }) => theme.phablet`
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

export const CallToAction = styled.div`
  margin: 2em 0 4em 0;
  font-size: 15px;
  ${({ theme }) => theme.tablet`margin: 2em 0 4em 0;`}
  a {
    padding: 0 20px;
    height: 25px;
  }
  a::before,
  a::after {
    position: absolute;
    width: 25px;
    height: 1px;
    background: ${props => props.theme.text.dark};
    content: "";
    opacity: 0.2;
    transition: all 0.3s;
    pointer-events: none;
  }
  .dark-mode & a::before,
  .dark-mode & a::after {
    background: ${props => props.theme.text.light};
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

export const Contact = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  svg {
    height: 1.5em;
    width: 100%;
    fill: ${props => props.theme.text.dark};
  }
  .dark-mode & svg {
    fill: ${props => props.theme.text.light};
  }
  ${({ theme }) => theme.tablet`
    width: 40%;
    svg {
      height: 1.1em;
    }
  `}
`;
