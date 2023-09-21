import styled from "styled-components";

export const MainSection = styled.section``;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
    grid-template-rows: 279px 279px;
    gap: 20px;
    overflow: hidden;
    @media screen and (max-width: 1400px) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    @media screen and (max-width: 1284px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `;
export const MainImage = styled.div`
    :first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      @media screen and (max-width: 600px) {
        grid-column-end: 1;
        grid-row-end: 1;
      }
    }
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      aspect-ratio: 1/1;
      object-position: center;
    }
  `;
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