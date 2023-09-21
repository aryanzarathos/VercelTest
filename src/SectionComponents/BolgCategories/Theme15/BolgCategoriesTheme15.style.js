import styled from "styled-components";

export const MainSection = styled.section``;
export const MainHeader = styled.div`
    text-align: center;
    max-width: 780px;
    width: 100%;
    margin: 20px auto;
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
      text-align: center;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: capitalize;
    }
  `;
export const BlogCard = styled.div`
    display: grid;
    grid-template-columns: 279px 1fr;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `;

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
    gap: 50px;

    @media screen and (min-width: 601px) and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `;
export const RightContent = styled.div`
    width: 100%;
    overflow: hidden;
    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-transform: capitalize;
      color: #000000;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      margin-bottom: 8px;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: rgba(32, 32, 32, 0.6);
      letter-spacing: inherit;
      word-spacing: inherit;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      margin-bottom: 4px;
    }
  `;
export const MainImage = styled.div`
    width: 100%;
    height: 177px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      max-width: 100%;
      max-height: 100%;
    }
  `;
export const Button = styled.button`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #000000;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.3s;
    &:hover {
      color: blue;
    }
  `;
