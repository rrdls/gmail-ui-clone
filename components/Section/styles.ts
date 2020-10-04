import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid var(--border);

  > h2 {
    padding: 20px 0px 0px 20px;
    font-size: 14px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 0;
  button {
    display: inline-flex;
    align-items: center;
    /* justify-content: space-between; */
    background-color: var(--primary);
    border: none;
    color: var(--white);
    font-size: 14px;
    width: 230px;
    height: 35px;
    padding: 0px 20px;
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
    svg {
      margin-right: 20px;
      path {
        fill: var(--icons);
      }
    }

    &:hover {
      background-color: var(--secondary);
    }
  }
`;
