import styled from "styled-components";

export const InfoIcon = styled.div``;

export const SocialLinks = styled.div`
    display: flex;
    gap: 15px;
    svg {
      display: block;
      path {
        transition: all 0.3s;
      }
      :hover {
        path {
          fill: red;
        }
      }
    }
  `;
export const MainSection = styled.section`
    background: #eeeeee;
    padding: 12px;
  `;
export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media screen and (max-width: 580px) {
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
        transition: all 0.3s;
      }
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #202020;
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