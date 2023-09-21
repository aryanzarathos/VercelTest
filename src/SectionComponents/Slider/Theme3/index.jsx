import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MobileBanner from "./MobileBanner/MobileBanner";
import DesktopBanner from "./DesktopBanner/DesktopBanner";
const Banner = styled.div`
  position: relative;
  width: 100%;
  .slick-dots {
    bottom: 8px;
    .slick-active {
      margin: 0;
      button {
        &::before {
          font-size: 12px;
          color: rgb(52, 63, 100);
        }
      }
    }
    button {
      &::before {
        font-size: 12px;
        color:#000;
      }
    }
  }
  .slick-slide {
    visibility: hidden;
  }
  .slick-slide {
    &.slick-active {
      visibility: visible;
    }
  }
  .slick-prev {
    content: "";
    width: 1.3rem;
    height: 1.3rem;
    border-right: 2px solid rgb(52, 63, 100);
    border-bottom: 2px solid rgb(52, 63, 100);
    z-index: 1;
    margin-left: 3.5rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    @media screen and (max-width: 992px) {
      margin-left: 2.5rem;
    }
    @media screen and (max-width: 468px) {
      width: 1rem;
      height: 1rem;
    }
    &::before {
      color: transparent;
    }
    &:hover {
      border-right: 2px solid rgb(52, 63, 100);
      border-bottom: 2px solid rgb(52, 63, 100);
    }
  }
  .slick-next {
    content: "";
    width: 1.3rem;
    height: 1.3rem;
    border-left: 2px solid rgb(52, 63, 100);
    border-bottom: 2px solid rgb(52, 63, 100);
    z-index: 1;
    margin-right: 3.5rem;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    @media screen and (max-width: 992px) {
      margin-right: 2.5rem;
    }
    @media screen and (max-width: 468px) {
      width: 1rem;
      height: 1rem;
    }
    &::before {
      color: transparent;
    }
    &:hover {
      border-left: 2px solid rgb(52, 63, 100);
      border-bottom: 2px solid rgb(52, 63, 100);
    }
  }
`;

const SliderTheme3 = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Banner>
      <React.Fragment>
        {
          windowSize.width <= 768 ?
            <MobileBanner />
            :
            <DesktopBanner />
        }
      </React.Fragment>

    </Banner>
  );
};

export default SliderTheme3;
