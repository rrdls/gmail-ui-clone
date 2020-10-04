import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  /* width: 200px; */
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0px 8px 0px 15px;

  input {
    width: 100%;
    border: none;
    background-color: var(--secondary);
    color: var(--white);
    font-size: 14px;
  }
  input:focus {
    background-color: var(--white);
    color: var(--primary);
    transition: 0.3s;
  }

  &:focus-within {
    transition: 0.3s;
    background-color: var(--white);
    color: var(--primary);
    svg {
      path {
        fill: var(--primary);
      }
    }
  }
`;
