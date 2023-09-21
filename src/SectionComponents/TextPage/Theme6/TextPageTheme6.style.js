import styled from "styled-components";

export const SectionGray = styled.div`
  display: flex;
  flex-direction: column;
  height: 424px;
  background-color:#EAEAEA;
  gap: 20px;
  padding: 0px 100px 0px 100px;
  justify-content: center;
  margin-bottom: 120px;

  @media screen and (max-width: 1200px) {
    height: auto;
    gap: 15px;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 50px 20px 50px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 600px) {
    gap: 10px;
    padding: 10px;
  }

  h2 {
    font-size:36px;
    font-weight: 600;
    line-height: 54px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color:rgba(32, 32, 32, 0.6);
    font-weight: 400;
    width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`;
export const Line = styled.span`
  width: 96px;
  height: 4px;
  background-color:#202020;
`;