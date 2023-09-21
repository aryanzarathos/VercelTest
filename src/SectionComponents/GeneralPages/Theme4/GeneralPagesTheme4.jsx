import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 60%;
  margin-top: 61px;

  @media screen and (max-width : 600px){
    width: 100%;
  }
`;

export const HeaderTopHeading = styled.h3`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  text-transform: capitalize;
  color: #202020;
`;

export const HeaderContent = styled.p`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  margin-top: 8px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  color: #202020;
`;

export const GeneralPageTheme4TopContainer = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 122px;

  @media screen and (max-width: 1024px) {
    gap: 60px;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const TopImgContainer = styled.figure`
  width: 100%;
  height: 338px;
  /* height: 100%; */

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const TopContentContainer = styled.figcaption`
  width: 72%;

  h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
    color: #202020;
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #202020;
    margin-top: 8px;
  }

  button{
    margin-top: 24px;
    background: #000000;
    color: rgba(255, 255, 255, 1);
    padding: 10px 36px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const GeneralPageTheme4SubContainer = styled.div`
  margin: 36px 0px 43px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SubImgContainer = styled.div`
  width: 100%;
  height: 227px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
