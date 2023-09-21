import styled from "styled-components";

export const MainSection = styled.section`
    background: rgba(1, 132, 255, 0.05);
    padding: 12px;
  `;
export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
  `;

export const PersonalInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    @media screen and (max-width: 480px) {
      flex-direction: column;
      gap: 12px;
    }
  `;
export const PersonalInfoData = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    svg {
      display: block;
      path {
        fill: #0184ff;
        transition: all 0.3s;
      }
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #0184ff;
      text-align: left;
      text-transform: lowercase;
      letter-spacing: inherit;
      word-spacing: inherit;
      cursor: default;
      transition: all 0.3s;
    }
    :hover p {
      color: red;
    }
    :hover svg {
      path {
        fill: red;
      }
    }
  `;
export const InfoIcon = styled.div``;
export const RightText = styled.div`
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
      letter-spacing: inherit;
      word-spacing: inherit;
      text-transform: inherit;
      text-align: left;
      @media screen and (max-width: 991px) {
        text-align: center;
      }
      span {
        color: #055deb;
        font-weight: 600;
      }
    }
  `;