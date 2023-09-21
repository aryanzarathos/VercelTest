import styled from "styled-components";

export const MessageDeskHomeHero = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 56px;
  margin-bottom: 48px;
  &:nth-child(odd) {
    grid-template-columns: auto 1fr;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  &:nth-child(even) {
    grid-template-columns: 1fr auto;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .profile-image {
      order: 2;
      @media screen and (max-width: 768px) {
        order: unset;
      }
    }
    .profile-content {
      padding: 0 16px 0 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MessageDeskHeroSection = styled.div`
  margin-top: 48px;
  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #1F2B6C;
    letter-spacing:inherit;
  }
  h5 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #1F2B6C;
    letter-spacing:inherit;
  }
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
  }
  ul {
    padding-top: 32px;
    padding-left: 16px;
    @media screen and (max-width: 768px) {
      padding-left: 24px;
    }
    li {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 196.4%;
        letter-spacing: 0.02em;
        color: #202020;
      list-style-type: disc;
      &:first-child {
        margin-left: -20px;
        list-style-type: none;
        margin-bottom: 8px;
      }
    }
  }

  position: relative;
  width: 100%;


`;
export const MessageProfileImage = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    max-width: 363px;
    min-width: 363px;
    max-height: 363px;
    min-height: 363px;
    height: 100%;
    display: block;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
    }
  }
`;

export const MessageProfileContent = styled.div`
  height: 100%;
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 16px 0 56px;
  @media screen and (max-width: 768px) {
    padding: 0 8px 0 0;
    overflow-y: "auto" ;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #006f9c;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #f48631;
  }
`;