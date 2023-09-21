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
      margin-top: 4px;
    }
  `;
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 36px;
    width: 100%; ;
  `;
export const BlogCard = styled.div`
    overflow: hidden;
    background: #eeeeee;
    cursor: pointer;
  `;
export const BlogImage = styled.div`
    width: 100%;
    height: 303px;
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: center;
    }
  `;
export const BlogContent = styled.div`
    padding: 16px;
    h5 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-transform: capitalize;
      color: #000000;
      letter-spacing: inherit;
      word-spacing: inherit;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 21px;
      color: rgba(32, 32, 32, 0.6);
      letter-spacing: inherit;
      word-spacing: inherit;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-top: 8px;
    }
  `;