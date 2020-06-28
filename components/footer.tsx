import styled from "styled-components";
import media from "../styles/media";

const StyleFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 3em;
  font-size: 12px;
  text-align: center;
  color: #999;

  a {
    text-decoration: underline;
    color: #8ccbff;
  }

  ${media.thone`font-size: 0.7em;`}
`;

export default function Footer() {
  return (
    <StyleFooter>
      <span>
        <span>
          powered by <a href="https://nextjs.org"> Next.js </a> and{" "}
          <a href="https://reactjs.org"> React </a>
        </span>
        <span>
          {" "}
          | built by <a href="https://kelvs.me"> Kelvin Abella </a> with
          &hearts;
        </span>
      </span>
    </StyleFooter>
  );
}
