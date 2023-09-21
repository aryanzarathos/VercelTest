import styled from "styled-components";

export const MainSection = styled.section``;
export const MainHeader = styled.div`
    max-width: 780px;
    width: 100%;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    h5 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: capitalize;
      margin-bottom: 4px;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: capitalize;
    }
  `;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 36px;
    margin-top: 20px;
  `;

const BlogCard = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 24px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;
const MainImage = styled.div`
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `;
const BlogContent = styled.div`
    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      width: 100%;

      text-transform: capitalize;
      color: #000000;
      letter-spacing: inherit;
      word-spacing: inherit;
      margin-bottom: 8px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-transform: inherit;
      color: rgba(32, 32, 32, 0.6);
      letter-spacing: inherit;
      word-spacing: inherit;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      margin-bottom: 16px;
    }
  `;
const Button = styled.button`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    padding: 8px 21px;
    background: transparent;
    border: 1px solid #000000;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #000000;
      color: #fff;
    }
  `;