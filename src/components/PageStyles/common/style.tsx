import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  max-width: 868px;
  width: auto;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 7rem);
  ${({ theme }) => theme.desktop`margin: 3em; max-width: 100%;`}
  ${({ theme }) => theme.tablet`margin: 3em 1em;`}
`;

export const HorizontalBar = styled.div`
  width: 27%;
  position: relative;
  display: inline-block;
  min-height: 5px;
  margin-left: 0px;
  margin: 11px 0;
  padding-bottom: 0px;
  border-bottom: 3px solid #fe6056;
`;
