import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    gap: 92px;
    background: #e7fff8;
    position: relative;
    & .downImage {
      position: absolute;
      bottom: 0;
      width: 100%;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    @media screen and (max-width: 992px) {
      padding: 10px;
      gap: 45px;
    }
    @media screen and (max-width: 601px) {
      flex-wrap: wrap;
      padding: 10px;
      gap: 0px;
    }
  `;

export const MainContent = styled.div`
    @media screen and (max-width: 601px) {
      width: 100%;
      text-align: center;
      order: 1;
    }
    & h2 {
      word-spacing: inherit;
      margin: 0 auto;
      letter-spacing: inherit;
      text-transform: inherit;
      text-align: left;
      font-family: "Code Bold";
      font-style: normal;
      font-weight: 700;
      font-size: 80px;
      line-height: 82px;
      color: #000000;
      max-width: 384px;
      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        font-size: 60px;
        line-height: 62px;
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 55px;
        line-height: 57px;
      }
      @media screen and (min-width: 602px) and (max-width: 768px) {
        font-size: 45px;
        line-height: 42px;
      }
      @media screen and (max-width: 601px) {
        text-align: center;
        line-height: inherit;
        font-size: 35px;
      }
    }
    & p {
      word-spacing: inherit;
      text-transform: inherit;
      margin-top: 25px;
      max-width: 351px;
      letter-spacing: inherit;
      font-family: "Clash Grotesk";
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 26px;
      color: #989898;
      @media screen and (max-width: 601px) {
        text-align: center;
        line-height: inherit;
        font-size: 25px;
        max-width: 100%;
      }
    }
  `;

export const MainImage = styled.div`
    max-width: 703px;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
      height: auto;
      order: 2;
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
    margin-top: 25px;
    padding: 13px;
    max-width: 180px;
    width: 100%;
    color: #fff;
    background: #6bb67f;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    font-family: "Clash Grotesk";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
    &:hover {
      background: #000;
      color: #fff;
    }
    @media screen and (max-width: 601px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;
