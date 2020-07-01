import styled from "styled-components";

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

  ${({ theme }) => theme.thone`font-size: 0.7em;`}
`;

export default function Footer() {
  return (
    <StyleFooter>
      <span>
        <span>
          powered by&nbsp;
          <a href="https://nextjs.org">Next.js</a>
          &nbsp;and&nbsp;
          <a href="https://reactjs.org">React</a>
        </span>
        <span>
          &nbsp;|&nbsp;built by&nbsp;
          <a href="https://kelvs.me">Kelvin Abella</a>
          &nbsp;with &hearts;
        </span>
      </span>
    </StyleFooter>
  );
}
