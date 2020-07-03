import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 3em;
  ${({ theme }) => theme.desktop`
    flex-direction: column-reverse;
    align-items: center;
  `}
  ${({ theme }) => theme.tablet`margin-top: 0;`}
`;

export const ImageContainer = styled.div`
  margin-top: 3.5em;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.tablet` margin-top: 0;`}
  & > div {
    position: relative;
    width: 180px;
    height: 180px;
    box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
      0 40px 77px 0 rgba(0, 0, 0, 0.22);
    overflow: visible;

    div:nth-child(1) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #503282;

      div {
        width: 100%;
        height: 100%;
        background-image: url("https://kelvs.me/images/kelvs.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        -webkit-filter: url("#duotone");
        filter: url("#duotone");
      }
    }

    div:nth-child(2) {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 10%;
      margin-left: 10%;
      border: 10px solid #fff;
      font-family: "Josefin Sans", sans-serif;

      h2 {
        position: absolute;
        top: 0.4em;
        left: 1.15em;
        margin: 0;
        font-size: 5em;
        line-height: 1;
        letter-spacing: 0;
        color: #000;
        opacity: 0.15;
        transform: rotate(90deg);
        ${({ theme }) => theme.tablet`display:none;`}
      }
    }
  }
`;

export const AboutMe = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 3em;
  h1 {
    margin-bottom: 0.5em;
    font-weight: 900;
  }
  ${({ theme }) => theme.desktop`margin-top: 3em; width: 70%;`}
  ${({ theme }) => theme.tablet`
    width: 100%;
    margin: 3em 0 0 0;
    h1{
      text-align: center;
    }
  `}
`;

export const Skills = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-top: 5em;
  text-align: center;
  ${({ theme }) => theme.tablet`margin-top: 3em;`}
  h1 {
    font-weight: 900;
  }
  div {
    margin: 2em auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    span {
      padding: 0 10px;
      margin: 0.25em;

      img {
        height: 1.5em;
        width: auto;
      }
    }
    ${({ theme }) => theme.desktop`width:75%;`};
    ${({ theme }) => theme.tablet`width:100%;`}
  }
`;
