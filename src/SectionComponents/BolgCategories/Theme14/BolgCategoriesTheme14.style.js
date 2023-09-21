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
export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      align-items: flex-start;
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  `;
export const MainImage = styled.div`
    width: 100%;
    height: 347px;
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  `;
export const RightContent = styled.div`
    width: 100%;
    overflow: hidden;
  `;
export const ProfileContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    h5 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: capitalize;
      color: rgba(32, 32, 32, 0.4);
    }
  `;
export const ProfileImage = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  `;
export const BlogContent = styled.div`
    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      text-transform: capitalize;
      color: #202020;
      letter-spacing: inherit;
      word-spacing: inherit;
      margin-bottom: 8px;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: inherit;
      text-transform: inherit;
      word-spacing: inherit;
      color: rgba(32, 32, 32, 0.6);
      margin-bottom: 16px;
    }
  `;