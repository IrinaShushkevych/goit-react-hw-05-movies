//created by Irina Shushkevych
import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  min-width: 100px;
  background-color: #3f51b5;
  margin: 20px;
  color: wheat;
  box-shadow: 2px 4px 12px 0px rgb(68 209 239 / 60%);
  transition: 250ms linear;
  &:hover,
  &:focus {
    background-color: #2042ff;
    box-shadow: 6px 8px 12px 0px rgb(68 209 239 / 60%);
  }
`;
