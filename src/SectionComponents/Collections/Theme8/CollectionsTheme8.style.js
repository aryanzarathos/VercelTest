import styled from "styled-components";

export const MainSection = styled.section``;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 21px;
    justify-content: center;
    max-width: 1174px;
    width: 100%;
    margin: 0 auto;
    h5 {
      text-transform: capitalize;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #093351;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-align: left;
      margin-top: 9px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      text-transform: capitalize;
      letter-spacing: inherit;
      word-spacing: inherit;
      margin-top: 8px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
    }
  `;
export const ProductContent = styled.div`
    width: 100%;
  `;

export const MainImage = styled.div`
    max-width: 279px;
    width: 100%;
    height: 417px;
    @media screen and (max-width: 1359px) {
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