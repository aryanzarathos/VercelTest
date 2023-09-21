import React, { useCallback, useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

const RangeSLider = styled.input`
    -webkit-appearance: ${({ item }) => item?.desktop?.appearance};
    appearance: ${({ item }) => item?.desktop?.appearance};
    -webkit-tap-highlight-color: transparent;
    pointer-events: none;
    position: ${({ item }) => item?.desktop?.position};
    height: 0;
    width: ${({ item }) => item?.desktop?.width};
    outline: none;

    &.thumb__zindex_3 {
        z-index: 3;
    }

    &.thumb__zindex_4 {
        z-index: 4;
    }

    &.thumb__zindex_5 {
        z-index: 5;
    }
  
 
    &::-webkit-slider-thumb {
        -webkit-appearance:${({ item }) => item.desktop.webkit.slideThumb.appearance};
        appearance:${({ item }) => item.desktop.webkit.slideThumb.appearance};
        -webkit-tap-highlight-color: transparent;
        background-color: #FFF;
        border:${({ item }) => item.desktop.webkit.slideThumb.border};
        border-radius: ${({ item }) => item.desktop.webkit.slideThumb.borderRadius};
        outline: ${({ item }) => item.desktop.webkit.slideThumb.background} solid 2px;
        cursor: ${({ item }) => item.desktop.webkit.slideThumb.cursor};
        height: ${({ item }) => item.desktop.webkit.slideThumb.height};
        width:${({ item }) => item.desktop.webkit.slideThumb.width};
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
    &::-moz-range-thumb {
        border: ${({ item }) => item.desktop.webkit.rangeThumb.border};
        height: ${({ item }) => item.desktop.webkit.rangeThumb.height};
        width: ${({ item }) => item.desktop.webkit.rangeThumb.width};
        border-radius: ${({ item }) => item.desktop.webkit.rangeThumb.borderRadius};
        background: ${({ item }) => item.desktop.webkit.rangeThumb.background};
        cursor: pointer;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`;
const SlideTrake = styled.div`
    position: relative;
    width: 100%;
`
const SlideRange = styled.div`
    border-radius: 3px;
    height: 4px;
    position: absolute;
    background-color: #003459;
    z-index: 2;
`
const Track = styled.div`
    position: absolute;
    background-color: #dadae5;
    width: 100%;
    z-index: 1;
    border-radius: 3px;
    height: 4px;
`
const RangeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MultiRangeSlider = ({ RangestyleItems, min, max, onChange, isRange, setIsRange, minvalue, maxValue }) => {
    const [minVal, setMinVal] = useState(parseInt(min));
    const [maxVal, setMaxVal] = useState(parseInt(max));
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // console.log(min, max, "sliderMinValue")
    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        // if min value change athan update the value
        if (isRange) {
            changeMin(minvalue);
            setIsRange(false)
        }
        // if min value change athan update the value
        if (isRange) {
            setIsRange(false)
            changeMax(maxValue)
        }
    }, [isRange]) // this is update mix max value than run the code

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent, minvalue]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent, maxValue]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal]);

    const changeMax = (value) => {
        value = Math.max(+value, minVal + 1);
        setMaxVal(parseInt(value));
        value = value.toString();
    }
    const changeMin = (value) => {
        value = Math.min(+value, maxVal - 1);
        setMinVal(parseInt(value));
        value = value.toString();
    }

    // console.log(RangestyleItems?.PriceFilterInput.desktop, 'styles')
    return (
        <RangeWrapper>
            <RangeSLider
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(e) => changeMin(e.target.value)}
                item={RangestyleItems?.PriceFilterInput}
                className={`thumb__zindex_3 ${minVal > max - 100 ? `thumb__zindex_5` : ""}`}
            />
            <RangeSLider
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                item={RangestyleItems?.PriceFilterInput}
                onChange={(e) => changeMax(e.target.value)}
                className={`thumb__zindex_4`}
            />
            <SlideTrake item={RangestyleItems?.PriceFilterInput} >
                <Track item={RangestyleItems?.PriceFilterInput} />
                <SlideRange item={RangestyleItems?.PriceFilterInput} ref={range} />
            </SlideTrake>
        </RangeWrapper>
    );
};

export default MultiRangeSlider;