import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bg.light};
  color: ${props => props.theme.text.dark};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  .dark-mode & {
    background-color: ${props => props.theme.bg.dark};
    color: ${props => props.theme.text.light};
  }
`;

export const LogoWrapper = styled.div<{ isMounted: boolean }>`
  width: max-content;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
`;
