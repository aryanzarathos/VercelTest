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
        word-spacing: inherit;
        margin: 0 auto;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 34px;
        text-align: center;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #565872;
        max-width: 282px;
      }
    }
  `;
export const Button = styled.button`
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
    background: #000000;
    box-shadow: -15px 15px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
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
    max-height: 240px;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;
