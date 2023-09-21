import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    background: #e8e8e8;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 485px) {
      padding: 10px;
    }
  `;
export const AbsoluteImages = styled.div`
     {
      .oneImage {
        position: absolute;
        top: -71px;
        right: -80px;
      }
      .twoImage {
        position: absolute;
        bottom: 0px;
        left: 0px;
      }
      .threeImage {
        position: absolute;
        bottom: 0;
        left: 0;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      .fouthImage {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: rotateY(180deg);
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  `;

export const MainContent = styled.div`
     {
      & h2 {
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        font-family: "Clash Grotesk";
        font-style: normal;
        font-weight: 400;
        font-size: 68px;
        line-height: 84px;
        text-align: center;
        color: #6784ce;
        @media screen and (max-width: 485px) {
          line-height: inherit;
          font-size: 35px;
        }
      }
      & p {
        word-spacing: inherit;
        margin: 0 auto;
        letter-spacing: inherit;
        text-transform: inherit;
        margin-top: 11px;
        max-width: 399px;
        font-family: "Clash Grotesk";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #b0b0b0;
      }
    }
  `;

export const MainImage = styled.div`
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    height: auto;
    max-height: 388px;
    @media screen and (max-width: 485px) {
      margin-bottom: 10px;
      max-height: 340px;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;
