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
        letter-spacing: inherit;
        text-transform: none;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 75.6px;
        text-align: center;
        color: #000000;
        @media screen and (max-width: 602px) {
          line-height: inherit;
          font-size: 30px;
          margin-top: 10px;
        }
      }
    }
  `;
export const Button = styled.button`
    text-transform: inherit;
    word-spacing: inherit;
    margin-top: 40px;
    margin-bottom: 10px;
    padding: 7px;
    max-width: 240px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
    background: #202020;
    border-radius: 24px;
    letter-spacing: inherit;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 210%;
    text-align: center;
    color: #fff;
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
    max-height: 200px;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;
