import styled from "styled-components";

export const MainSection = styled.section`
    min-height: 100vh;
    background: #122638;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
export const MainContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1056px;
    margin: 0 auto;
    gap: 144px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    @media screen and (max-width: 1200px) {
      gap: 60px;
    }
    @media screen and (max-width: 991px) {
      flex-wrap: wrap;
      gap: 30px;
    }
    @media screen and (max-width: 601px) {
      gap: 10px;
    }
  `;
export const LeftContent = styled.div`
     {
      text-align: center;
      h1 {
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        font-family: "Concert One";
        font-style: normal;
        font-weight: 400;
        font-size: 302px;
        line-height: 235px;
        text-align: center;
        background: linear-gradient(180deg, #1b3044 26.17%, #122638 108.3%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        @media screen and (min-width: 1024px) and (max-width: 1200px) {
          font-size: 250px;
          line-height: 187px;
        }
        @media screen and (min-width: 991px) and (max-width: 1023px) {
          font-size: 180px;
          line-height: 113px;
        }
        @media screen and (max-width: 601px) {
          font-size: 180px;
          line-height: inherit;
        }
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
    background: #1a3f55;
    border-radius: 16px;
    border: none;
    margin-top: 18px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #fff;
    }
  `;
export const RightContent = styled.div`
     {
    }
  `;
export const RightImage = styled.div`
    max-width: 703px;
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
export const LeftSmallContent = styled.div`
     {
      transform: translateY(-80px);
      @media screen and (max-width: 601px) {
        transform: translateY(0px);
      }
      h5 {
        font-family: "Clash Grotesk";
        font-style: normal;
        font-weight: 400;
        font-size: 46px;
        line-height: 57px;
        text-align: center;
        max-width: 310px;
        color: #ffffff;
        margin: 0 auto;
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        @media screen and (max-width: 601px) {
          font-size: 30px;
          line-height: inherit;
        }
      }
      p {
        font-family: "Clash Grotesk";
        font-style: normal;
        font-weight: 200;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        margin-top: 18px;
        margin-left: auto;
        margin-right: auto;
        max-width: 380px;
        color: #ffffff;
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
      }
    }
  `;
