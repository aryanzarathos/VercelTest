import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    background: #efefef;
    @media screen and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  `;
export const MainContent = styled.div`
     {
      & h2 {
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        font-family: "Coustard";
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 67px;
        text-align: center;
        color: #000000;
        @media screen and (max-width: 485px) {
          line-height: inherit;
          font-size: 35px;
        }
      }
      & p {
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        font-family: "Clash Grotesk";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #000000;
        margin-top: 10px;
        max-width: 498px;
      }
    }
  `;
export const Button = styled.button`
    background: #000000;
    border-radius: 14px;
    word-spacing: inherit;
    margin-top: 48px;
    margin-bottom: 10px;
    padding-top: 16px;
    padding-bottom: 16px;
    max-width: 180px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
    font-family: "Clash Grotesk";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: inherit;
    color: #ffffff;
    &:hover {
      background: #2f4819;
      box-shadow: -15px 15px 20px rgba(0, 0, 0, 0.1);
      color: #fff;
    }
    @media screen and (max-width: 485px) {
      margin-top: 20px;
    }
  `;
export const MainImage = styled.div`
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    height: auto;
    max-height: 397px;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
      max-height: 250px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;
