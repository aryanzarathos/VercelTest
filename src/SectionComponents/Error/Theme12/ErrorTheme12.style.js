import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
    position: relative;
    overflow: hidden;
    gap: 10px;
    @media screen and (max-width: 485px) {
      padding: 10px;
    }
    @media screen and (max-width: 601px) {
      flex-wrap: wrap;
      padding: 10px;
    }
  `;

export const MainContent = styled.div`
    @media screen and (max-width: 601px) {
      width: 100%;
      text-align: center;
    }
    & h2 {
      word-spacing: inherit;
      margin: 0 auto;
      letter-spacing: inherit;
      text-transform: inherit;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      color: #000000;
      text-align: left;
      @media screen and (max-width: 601px) {
        text-align: center;
        line-height: inherit;
        font-size: 35px;
      }
    }
    & h4 {
      word-spacing: inherit;
      text-align: left;
      margin: 0 auto;
      letter-spacing: inherit;
      text-transform: inherit;
      margin-top: 15px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 38px;
      color: #000000;
      @media screen and (max-width: 601px) {
        text-align: center;
        line-height: inherit;
        font-size: 25px;
      }
    }
    & p {
      word-spacing: inherit;
      margin: 0 auto;
      text-transform: inherit;
      margin-top: 18px;
      max-width: 310px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: #4b4b4b;
      @media screen and (max-width: 601px) {
        text-align: center;
        line-height: inherit;
        font-size: 25px;
        max-width: 100%;
      }
    }
  `;

export const MainImage = styled.div`
    width: 526px;
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
        width: 100%;
        height: auto;
      }
    }
  `;
export const Button = styled.button`
    margin-top: 54px;
    padding: 13px;
    max-width: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
    gap: 11px;
    background: #2e77e9;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    & span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &:hover {
      background: #000;
      color: #fff;
    }
    @media screen and (max-width: 601px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;
