// styled css

import styled from "styled-components";

export const MainSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
