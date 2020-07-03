import styled from "styled-components";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 8px 8px;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1em;
  font-weight: 600;
  color: ${props => props.theme.text.dark};
  .dark-mode & {
    color: ${props => props.theme.text.light};
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  max-width: 868px;
  ${({ theme }) => theme.tablet`justify-content: space-between;`}
`;
