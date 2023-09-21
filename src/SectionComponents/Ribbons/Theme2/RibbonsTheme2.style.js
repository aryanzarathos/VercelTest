import styled from "styled-components";

export const MainSection = styled.section`
    background: rgba(1, 132, 255, 0.05);
    padding: 9px;
  `;
export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    @media screen and (max-width: 575px) {
      flex-direction: column;
      gap: 12px;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: inherit;
      text-align: left;
      cursor: default;
      color: #000000;
      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }
  `;
export const Button = styled.button`
    padding: 7px 24px;
    border: 1px solid #000000;
    border-radius: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    letter-spacing: inherit;
    word-spacing: inherit;
    text-transform: inherit;
    transition: all 0.3s;
    background: transparent;
    cursor: pointer;
    :hover {
      background: #000;
      color: #fff;
    }
  `;