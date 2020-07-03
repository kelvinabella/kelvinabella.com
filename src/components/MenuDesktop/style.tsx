import styled from "styled-components";

export const MenuDesktopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.tablet`display:none;`}
`;

export const LinkWrapper = styled.span<{ isActive: boolean }>`
  a {
    text-align: center;
    margin: 0 2px;
    padding: 8px 32px;
    border-radius: 4px;
    background: ${props => (props.isActive ? "rgba(0,122,255, 0.1)" : "none")};
    color: ${props => (props.isActive ? "#007AFF" : "#050505")};
  }
  a:hover {
    color: #007aff;
    background: ${props => props.theme.hover.light};
  }
  .dark-mode & a {
    color: ${props => props.theme.text.light};
    background: ${props => (props.isActive ? props.theme.hover.dark : "none")};
    &:hover {
      background: ${props => props.theme.hover.dark};
    }
  }
`;
