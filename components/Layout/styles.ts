import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 256px auto 60px;
  grid-template-rows: 64px auto;
  grid-template-areas:
    "TB TB TB"
    "LSB M RSB ";
  background-color: var(--primary);
  color: var(--white);
`;
