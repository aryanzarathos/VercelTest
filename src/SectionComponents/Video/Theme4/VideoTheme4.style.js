import styled from "styled-components";

export const PlayImage = styled.button`
  position: absolute;
  bottom: -50%;
  left: 50%;
  height: 47px;
  width: 47px;
  border: 2px solid #fff;
  transform: translate(-50%, 50%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.6s;
  z-index: 3;
  background: transparent;
`;
export const MainSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  .overlay {
    .check {
      &::after {
        display: none;
      }
    }
  }
`;
export const MainVideo = styled.div`
  width: 100%;
  position: relative;
  height: 191px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    height: 230px;
  }
  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 0px;
    height: 100%;
    max-height: 0px;
    width: 100%;
    background: rgba(32, 32, 32, 0.6);
    opacity: 0.5;
  }
  &:hover::after {
    max-height: 100%;
  }
  &:hover {
    .btn {
      bottom: 50%;
    }
  }
`;
export const MainContent = styled.div`
  h2 {
    font-family: "Futura";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    color: #202020;
    margin-top: 12px;
    letter-spacing: inherit;
    word-spacing: inherit;
  }
  p {
    font-family: "Futura";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-transform: capitalize;
    color: rgba(32, 32, 32, 0.6);
    letter-spacing: inherit;
    word-spacing: inherit;
    margin-top: 12px;
  }
`;