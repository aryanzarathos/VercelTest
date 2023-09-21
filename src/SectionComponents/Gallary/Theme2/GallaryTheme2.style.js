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
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    @media screen and (max-width: 1408px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  `;

export const MainImage = styled.div`
    width: 100%;
    height: 378px;
    @media screen and (max-width: 991px) {
      height: 281px;
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
