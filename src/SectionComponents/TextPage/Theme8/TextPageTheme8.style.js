import styled from "styled-components";

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;

  // @media screen and (max-width: 800px) {
  //   margin-bottom: 50px;
  //   gap: 10px;
  // }

  h2 {
    font-size:36px;
    font-weight: 600;
    line-height: 54px;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
`;
export const InnerMainText = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 20px;
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

  h2 {
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  color:#202020;
`;