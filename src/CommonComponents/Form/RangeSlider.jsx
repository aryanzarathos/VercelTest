import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RangeWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const FormInput = styled.input`
  position: relative;
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 100px;
  outline: none;
  margin: 20px 0;
  background: linear-gradient(
    to right,
    #3758f9,
    #3758f9 ${({ itemProp }) => itemProp}%,
    #eaeaea ${({ itemProp }) => itemProp}%,
    #eaeaea
  );
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.6);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const RangeCounterWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: -9px;
  width: fit-content;
  opacity:0;
  
  &.Show{
    opacity:1;
  }
`;
const RangeCounter = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  height: 20px;
  width: 26px;
  border-radius: 2px;
  font-weight: 400;
  font-size: 8px;
  line-height: 13px;
  background-color: #202020;
  text-align: center;
  color: #fff;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #202020;
  }
`;

// eslint-disable-next-line react/display-name
function RangeSlider({ minValue, maxValue, step, initialValue, onChange, percentageShow }) {
  const sliderRef = useRef(null);

  const [value, setValue] = useState(initialValue);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (isMouseDown) {
      sliderRef.current.classList.add("active");
      sliderRef.current.removeEventListener("mouseleave", handleMouseLeave);
    } else {
      sliderRef.current.classList.remove("active");
      sliderRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
  }, [isMouseDown]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const Position = value > 100 ? 100 + "%" : value + "%";
  const RangePosition = value > 100 ? 32.5 + "%" : 70 + value / 1.67 - value + "%";

  
  useEffect(()=>{
    setValue(initialValue);
  },[initialValue])

  const HandleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  

  return (
    <RangeWrapper>
      <FormInput
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        step={step}
        itemProp={value}
        onChange={(event) => { HandleChange(event) }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <RangeCounterWrap
        itemProp={`${value}%`}
        className={isMouseDown ? "Show" : ""}
        style={{ left: Position }}
      >
        <RangeCounter
          style={{
            left: RangePosition
          }}
        >
          {value}{percentageShow ? "%" : ""}
        </RangeCounter>
      </RangeCounterWrap>
    </RangeWrapper>
  );
}

RangeSlider.propTypes = {
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default RangeSlider;
