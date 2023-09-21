import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
  `;
export const MainContent = styled.div`
     {
      & h2 {
        letter-spacing: inherit;
        word-spacing: inherit;
        text-align: center;
        text-transform: Capitallize;
        max-width: 282px;
        margin: 0 auto;
        margin-bottom: 24px;
        font-family: "Archivo";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: #000000;
      }
      & p {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        letter-spacing: inherit;
        word-spacing: inherit;
        color: rgba(32, 32, 32, 0.4);
        text-transform: none;
      }
    }
  `;
export const Button = styled.button`
    font-family: "Poppins";
    font-style: normal;
    letter-spacing: inherit;
    text-transform: captialize;
    word-spacing: inherit;
    margin-top: 48px;
    margin-bottom: 10px;
    padding: 12px;
    max-width: 190px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    background: #ef4e1d;
    border-radius: 24px;
    &:hover {
      background: #2f4819;
      color: #fff;
    }
  `;
export const MainImage = styled.div`
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    height: auto;
    max-height: 219px;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
    }
    img {
      width: auto;
      height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;