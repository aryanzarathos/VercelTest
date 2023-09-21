import styled from "styled-components";

export const MainSection = styled.section``;
export const HeaderText = styled.div`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    h3 {
      font-family: "Futura";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      text-transform: capitalize;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-align: center;
      margin-bottom: 24px;
    }
    p {
      font-family: "Futura";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-align: center;
      margin-bottom: 24px;
    }
  `;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));
    gap: 20px;
    grid-template-rows: 220px 220px 220px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  `;
export const MainImage = styled.div`
    @media screen and (min-width: 600px) and (max-width: 768px) {
      height: 450px;
      overflow: hidden;
    }
    @media screen and (max-width: 599px) {
      height: 300px;
      overflow: hidden;
    }
    img {
      width: 100%;
      max-height: 100%;
      max-width: 100%;
      object-position: center;
      aspect-ratio: 1/1;
    }
    :nth-child(2) {
      grid-row-start: 1;
      grid-column-start: 2;
      grid-row-end: 3;
      @media screen and (max-width: 768px) {
        grid-column-start: auto;
        grid-row-end: 2;
      }
    }
  `;