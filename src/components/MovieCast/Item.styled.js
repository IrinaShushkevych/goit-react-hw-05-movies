import styled from "@emotion/styled";

export const Item = styled.li`
  // width: 100%;
  display: flex;
  flex-direction: column;
  width: calc((100% - 2 * 30px) / 2);
  margin-right: 30px;
  max-width: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-radius: 6px;
  background-color: rgb(90, 84, 84);
  box-shadow: 12px 10px 12px 0px rgba(99, 103, 104, 0.6);
  transform: scale(1);
  transition: 250ms linear;

  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 30px) / 4);
    margin-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    width: calc((100% - 6 * 30px) / 6);
    margin-right: 30px;
  }

  // &:hover,
  // &:focus {
  //   transform: scale(1.1);
  //   box-shadow: 16px 14px 16px 0px rgb(113 131 136 / 60%);
  // }
`;
