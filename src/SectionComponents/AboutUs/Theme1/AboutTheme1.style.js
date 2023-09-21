import styled from "styled-components";

export const Section2 = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  @media screen and (max-width: 1300px) {
    gap: 10%;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 100px;
  }
`;
export const Section2Top = styled.div`
  width: 100%;
  margin-bottom: 24px;
  h1 {
    font-size: 51px;
    font-weight: 700;
    line-height: 62.17px;
    color: #000000;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
  }
`;
export const H6 = styled.h6`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: #4765f8;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;
export const Section2Btm = styled.div`
  width: 100%;
  display: flex;
  gap: 70px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 100px;
    margin-bottom: 100px;
  }
`;
export const Section2Img = styled.figure`
  border-radius: 24px;
  display: block;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: space-around;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const InnerImg = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
export const Section2Content = styled.div`
  width: 53%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 31px;
    width: 100%;
    color: #000000;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
