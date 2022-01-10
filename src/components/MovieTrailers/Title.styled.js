import styled from "@emotion/styled";

export const Title = styled.p`
  font-size: 26px;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const TitleParagraph = styled.p`
  font-size: 16px;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid wheat;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
