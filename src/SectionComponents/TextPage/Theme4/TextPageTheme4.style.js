import styled from "styled-components";

export const BlogTextLR = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 120px;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 50px;
}
`;
export const TextLT = styled.div`
  width: 45%;
  padding-right: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  h2 {
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`;
export const Button = styled.button`
  width: 122.16px;
  height: 36px;
  color:#000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background-color:#E5E5E5;
  border: 1px solid #000000;
  &:hover{
    cursor: pointer;
    background-color: #7a7a7a;
    color: #FFFFFF;
    transition: all 1s;
  }
`;
export const TextRT = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color:rgba(32, 32, 32, 0.6);
    font-weight: 400;
    width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`;
