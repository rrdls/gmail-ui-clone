import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: TB;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
`;

const SvgCSS = css`
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
`;
export const Left = styled.div`
  flex: 1.18;
  ${SvgCSS};
  display: flex;
  align-items: center;
  padding-left: 20px;
  svg:nth-child(2) {
    width: 40px;
    height: 40px;
    fill: var(--gmail-red);
  }
  h1 {
    font-size: 20px;
  }
`;
export const Center = styled.div`
  flex: 3.5;
  display: flex;
  align-items: center;
  ${SvgCSS};
`;
export const Right = styled.div`
  flex: 2;
  ${SvgCSS};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  svg:nth-child(4) {
    width: 40px;
    height: 40px;
    fill: var(--gmail-red);
  }
`;
