//created by Irina Shushkevych
import styled from "@emotion/styled";

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 36%;
    margin: 0;
    margin-right: 30px;
  }
`;
