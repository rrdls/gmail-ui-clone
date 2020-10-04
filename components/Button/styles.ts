import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid red; */
  padding: 15px 0px 10px 18px;
  > button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    width: 140px;
    height: 50px;
    border: none;
    border-radius: 100px;
    background-color: var(--white);
    font-weight: 800;
    cursor: pointer;
    > svg {
      width: 30px;
      height: 30px;
    }
  }
`;
