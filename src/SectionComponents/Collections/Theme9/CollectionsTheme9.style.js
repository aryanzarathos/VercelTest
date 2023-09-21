import styled from "styled-components";

export const MainSection = styled.section``;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(378px, 1fr));
    grid-gap: 21px;
    justify-content: center;
    max-width: 1174px;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 991px) and (max-width: 1208px) {
      grid-template-columns: repeat(auto-fit, minmax(311px, 1fr));
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
      text-align: left;
      margin-top: 16px;
      width: 100%;
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
    display: grid;
    grid-template-columns: 280px auto;
    gap: 20px;
    @media screen and (min-width: 601px) and (max-width: 1208px) {
      grid-template-columns: 200px auto;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: auto;
      gap: 0px;
    } ;
  `;

export const MainImage = styled.div`
    max-width: 280px;
    width: 100%;
    height: 277px;
    @media screen and (min-width: 601px) and (max-width: 1208px) {
      width: 200px;
      height: 200px;
      max-width: 100%;
    }
    @media screen and (max-width: 600px) {
      max-width: 100%;
      max-height: 100%;
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

export const Button = styled.button`
    padding-top: 12px;
    padding-bottom: 11px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    letter-spacing: inherit;
    word-spacing: inherit;
    width: 100%;
    text-transform: uppercase;
    margin-top: 36px;
    border: 1px solid #000000;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #000;
      color: #fff;
    }
    @media screen and (min-width: 601px) and (max-width: 1208px) {
      width: fit-content;
      padding-left: 20px;
      padding-right: 20px;
    }
  `;
export const PrdoductDescription = styled.div``;
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