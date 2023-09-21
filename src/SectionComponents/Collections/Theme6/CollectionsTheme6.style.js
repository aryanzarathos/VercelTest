import styled from "styled-components";

export const MainSection = styled.section``;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 21px;
    justify-content: center;
    max-width: 1174px;
    width: 100%;
    margin: 0 auto;
    h5 {
      font-family: "Futura";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      text-transform: capitalize;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-align: left;
      margin-top: 16px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      font-family: "Futura";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 27px;
      text-transform: capitalize;
      color: #bc4c2a;
      letter-spacing: inherit;
      word-spacing: inherit;
      margin-top: 8px;
    }
  `;
export const ProductContent = styled.div`
    width: 100%;
  `;

export const MainImage = styled.div`
    max-width: 378px;
    width: 100%;
    height: 374px;
    @media screen and (max-width: 1208px) {
      width: 100%;
      max-width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `;


export const MainHeader = styled.div`
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

      margin-top: 30px;
    }
    h5 {
      font-family: "Futura";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      text-transform: capitalize;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-align: center;
      width: 100%;
      margin-bottom: 36px;
    }
  `;