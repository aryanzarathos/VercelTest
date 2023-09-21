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
        letter-spacing: 4px;
        word-spacing: inherit;
        text-align: center;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 34px;
        text-align: center;
        text-transform: uppercase;
        color: #565872;
        max-width: 282px;
        margin: 0 auto;
      }
    }
  `;
export const Button = styled.button`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    word-spacing: inherit;
    text-align: center;
    margin-top: 48px;
    background: #fb8133;
    border: 1px solid #fb8133;
    box-shadow: -15px 15px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 12px;
    max-width: 190px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background: #2f4819;
      color: #fff;
      border: 1px solid #2f4819;
    }
  `;
export const MainImage = styled.div`
    margin-bottom: 48px;
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