import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  `;
export const MainContent = styled.div`
     {
      & h2 {
        font-family: "Kohinoor Bangla";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
        font-style: normal;
        letter-spacing: inherit;
        word-spacing: inherit;
        text-align: center;
      }
      & p {
        font-family: "Kohinoor Bangla";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: rgba(32, 32, 32, 0.4);
        letter-spacing: inherit;
        word-spacing: inherit;
        text-align: center;
        margin-top: 8px;
      }
    }
  `;
export const Button = styled.button`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    background: #0c63fb;
    border-radius: 24px;
    letter-spacing: inherit;
    word-spacing: inherit;
    text-align: center;
    margin-top: 36px;
    border: none;
    padding: 12px;
    max-width: 190px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      background: #2f4819;
      color: #fff;
    }
  `;
export const MainImage = styled.div`
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    max-height: 320px;
    height: auto;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;