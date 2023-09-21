import styled from "styled-components";

export const MainSection = styled.section``;
export const MainContent = styled.div`
    min-height: 100vh;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;
export const LeftContent = styled.div`
    background: #aef2ff;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;     
    padding-top: 90px;
    @media screen and (max-width:768px){
        padding-top:20px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      @media screen and (max-width: 601px) {
        max-width: 100%;
        height: auto;
      }
  `;

export const RightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    h3 {
      font-family: "Clash Grotesk";
      font-style: normal;
      font-weight: 300;
      font-size: 46px;
      line-height: 57px;
      text-align: center;
      max-width: 303px;
      margin-top: 50px;
      color: #000000;
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 768px) {
        margin-top: 20px;
      }
    }
    p {
      font-family: "Clash Grotesk";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 26px;
      text-align: center;
      margin-top: 32px;
      color: #b0b0b0;
      margin-left: auto;
      margin-right: auto;
      max-width: 380px;
      width: 100%;
    }
  `;
export const MainImage = styled.div`
    max-width: 308px;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
      height: auto;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      @media screen and (max-width: 601px) {
        max-width: 100%;
        height: auto;
      }
    }
  `;
export const Button = styled.button`
    font-family: "Clash Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    max-width: 180px;
    width: 100%;
    color: #ffffff;
    padding-top: 16px;
    padding-bottom: 15px;
    background: #000000;
    border: none;
    margin-top: 31px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #fff;
    }
  `;