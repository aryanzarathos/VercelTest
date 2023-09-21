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
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
        color: #000000;
        font-family: "Kohinoor Bangla";
        font-style: normal;
        letter-spacing: inherit;
        word-spacing: inherit;
        text-align: center;
      }
      & p {
        font-family: "Kohinoor Bangla";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: rgba(32, 32, 32, 0.4);
        letter-spacing: inherit;
        word-spacing: inherit;
        text-align: center;
        margin-top: 24px;
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
    letter-spacing: inherit;
    word-spacing: inherit;
    text-align: center;
    margin-top: 64px;
    background: #456329;
    border-radius: 24px;
    border: none;
    padding: 12px;
    max-width: 240px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background: #2f4819;
      color: #fff;
    }
  `;
export const MainImage = styled.div`
    margin-bottom: 25px;
    width: 100%;
    text-align: center;
    height: auto;
    max-height: 178px;
    @media screen and (max-width: 485px) {
      margin-bottom: 0;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;
