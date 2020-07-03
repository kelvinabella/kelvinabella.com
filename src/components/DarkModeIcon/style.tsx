import styled from "styled-components";
import { animated } from "react-spring";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;
  min-width: 93.563px;
  ${({ theme }) => theme.tablet`
    display:none;
    min-width: unset;
    flex: 0 1 20%;
    margin-left: 35px;
    `}
`;

export const AnimatedSpan = styled(animated.span)`
  display: inherit;
  svg {
    width: auto;
    height: 1.5em;
    cursor: pointer;
    fill: ${props => props.theme.text.dark};
    .dark-mode & {
      fill: ${props => props.theme.text.light};
    }
  }
`;
