
// styled css

import styled from "styled-components";

export const MainImage = styled.div`
  position: relative;
  height: 360px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const MainContent = styled.div`
   {
    .slick-slider {
      .slick-dots {
        li {
          button {
            :before {
              font-size: 10px;
            }
          }
        }
      }
    }
    .slick-list {
      @media screen and (max-width: 768px) {
        height: 380px;
      }
    }
    .slick-slide {
      padding: 10px;
    }
    .slick-current {
      position: relative;
      transform: scaleY(1.05);
      transistion: all 0.3s;
    }
  }
`;
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
