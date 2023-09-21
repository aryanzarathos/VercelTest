import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import FilterDropDown from '../FilterDropdown/FilterDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { PriceFilterChanges } from '@/store/actions/productList';
import { useRouter } from 'next/router';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import MultiRangeSlider from './PriceRange';

const PriceFilterWrapper = styled.div`
        margin-top: ${({ item }) => item.desktop.margin.marginTop};
        @media (max-width:767px) {
          margin-top: ${({ item }) => item.mobile.margin.marginTop};
        }
`
const PriceFilterContainer = styled.div`
          width: ${({ item }) => item.desktop.width};
          position: ${({ item }) => item.desktop.position};
`

const RangeSLider = styled.input`
            -webkit-appearance: ${({ item }) => item.desktop.appearance};
            appearance: ${({ item }) => item.desktop.appearance};
            border: ${({ item }) => item.desktop.border};
            width: ${({ item }) => item.desktop.width};
            position: ${({ item }) => item.desktop.position};
            left:${({ item }) => item.desktop.left};
            background: ${props => `linear-gradient(to right, #dadae5 ${(props.val1 / props.max) * 100}% , #003459 ${(props.val1 / props.max) * 100}%, #003459 ${(props.val2 / props.max) * 100}%, #dadae5 ${(props.val2 / props.max) * 100}%)`};
            
            
            &::-webkit-slider-runnable-track {
              width: ${({ item }) => item.desktop.webkit.sliderRunnableTrack.width};
              height: ${({ item }) => item.desktop.webkit.sliderRunnableTrack.height};
              border: ${({ item }) => item.desktop.webkit.sliderRunnableTrack.border};
              border-radius: ${({ item }) => item.desktop.webkit.sliderRunnableTrack.borderRadius};
              
            }
            
            &::-webkit-slider-thumb {
           -webkit-appearance:${({ item }) => item.desktop.webkit.slideThumb.appearance};
            appearance:${({ item }) => item.desktop.webkit.slideThumb.appearance};
            border:${({ item }) => item.desktop.webkit.slideThumb.border};
              height: ${({ item }) => item.desktop.webkit.slideThumb.height};
           width:${({ item }) => item.desktop.webkit.slideThumb.width};
            border-radius: ${({ item }) => item.desktop.webkit.slideThumb.borderRadius};
              background: #FFF;
          margin-top: ${({ item }) => item.desktop.webkit.slideThumb.marginTop};
          cursor: ${({ item }) => item.desktop.webkit.slideThumb.cursor};
            position: ${({ item }) => item.desktop.webkit.slideThumb.position};
            z-index: ${({ item }) => item.desktop.webkit.slideThumb.zIndex}; 
            outline: ${({ item }) => item.desktop.webkit.slideThumb.background} solid 2px;
            cursor: pointer;
            position: relative;
            z-index: 1;
          }

          &:focus {
            outline: none;
          }

          &:focus::-webkit-slider-runnable-track {
            background: ${({ item }) => item.desktop.webkit.sliderRunnableTrack.background};
            
          }

          &::-moz-range-track {
            width: ${({ item }) => item.desktop.webkit.rangeTrack.width};
            height: ${({ item }) => item.desktop.webkit.rangeTrack.height};
            background: ${({ item }) => item.desktop.webkit.rangeTrack.background};
            border: ${({ item }) => item.desktop.webkit.rangeTrack.border};
            border-radius: ${({ item }) => item.desktop.webkit.rangeTrack.borderRadius};
            
          }

        &::-moz-range-thumb {
            border: ${({ item }) => item.desktop.webkit.rangeThumb.border};
            height: ${({ item }) => item.desktop.webkit.rangeThumb.height};
            width: ${({ item }) => item.desktop.webkit.rangeThumb.width};
            border-radius: ${({ item }) => item.desktop.webkit.rangeThumb.borderRadius};
            background: ${({ item }) => item.desktop.webkit.rangeThumb.background};
            
          }

          /*hide the outline behind the border*/

        &:-moz-focusring {
            outline: ${({ item }) => item.desktop.webkit.focusring.outline};
            outline-offset: ${({ item }) => item.desktop.webkit.focusring.outlineOffset};
          }

        &::-ms-track {
            width: ${({ item }) => item.desktop.webkit.track.width};
            height: ${({ item }) => item.desktop.webkit.track.height};
            background: ${({ item }) => item.desktop.webkit.track.background};
            border-color: ${({ item }) => item.desktop.webkit.track.borderColor};
            border-width: ${({ item }) => item.desktop.webkit.track.borderWidth};
            color: ${({ item }) => item.desktop.webkit.track.color};
            z-index: ${({ item }) => item.desktop.webkit.track.zIndex};
            
          }

        &::-ms-fill-lower {
            background: ${({ item }) => item.desktop.webkit.fillLower.background};
            border-radius: ${({ item }) => item.desktop.webkit.fillLower.borderRadius};
            
          }

        &::-ms-fill-upper {
            background: ${({ item }) => item.desktop.webkit.fillUpper.background};
            border-radius:  ${({ item }) => item.desktop.webkit.fillUpper.borderRadius};
            
          }

        &::-ms-thumb {
            border: ${({ item }) => item.desktop.webkit.thumb.border};
            height: ${({ item }) => item.desktop.webkit.thumb.height};
            width: ${({ item }) => item.desktop.webkit.thumb.width};
            border-radius: ${({ item }) => item.desktop.webkit.thumb.borderRadius};
            background: ${({ item }) => item.desktop.webkit.thumb.background};
            
          }

        &:focus::-ms-fill-lower {
            background:${({ item }) => item.desktop.webkit.focusFillLower.background};
        }

        &:focus::-ms-fill-upper {
            background: ${({ item }) => item.desktop.webkit.focusFillUpper.background};
        }



`

const RangeLabel = styled.div`
        display: ${({ item }) => item.desktop.display};
        align-items: ${({ item }) => item.desktop.alignItems};
        justify-content: ${({ item }) => item.desktop.justifyContent};
        gap: ${({ item }) => item.desktop.gap};
        position:${({ item }) => item.desktop.position};
        top:${({ item }) => item.desktop.top};
`
const Label = styled.label`
      font-family: ${({ item }) => item.desktop.fontFamily};
      font-size: ${({ item }) => item.desktop.fontSize};
      line-height: ${({ item }) => item.desktop.lineHeight};
      font-weight: ${({ item }) => item.desktop.fontWeight};
      color: ${({ item }) => item.desktop.color};
`
const PriceValueWrap = styled.div`
      display: ${({ item }) => item.desktop.display};
      justify-content: ${({ item }) => item.desktop.justifyContent};
      align-items: ${({ item }) => item.desktop.alignItems};
      gap: ${({ item }) => item.desktop.gap};
      padding-top:${({ item }) => item.desktop.paddingTop};
      grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
`

const PriceValueMinWrap = styled.div`
            position: ${({ item }) => item.desktop.position};
            width: ${({ item }) => item.desktop.width};
`
const Input = styled.input`
        width: ${({ item }) => item.desktop.width};
        padding: ${({ item }) => item.desktop.padding};
        font-size: ${({ item }) => item.desktop.fontSize};
        font-weight: ${({ item }) => item.desktop.fontWeight};
        line-height:  ${({ item }) => item.desktop.lineHeight};
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

`;
const Paragraph = styled.p`
    font-size:${({ item }) => item.desktop.fontSize};
    font-weight: ${({ item }) => item.desktop.fontWeight};
    line-height: ${({ item }) => item.desktop.lineHeight};
    color:${({ item }) => item.desktop.color};
`
const PriceRangeToText = styled.div`
 width: ${({ item }) => item.desktop.width};
`
const PriceValueMaxWrap = styled.div`
            position: ${({ item }) => item.desktop.position};
            width: ${({ item }) => item.desktop.width};
`



const PriceSlider = ({ priceItem, minValue, maxValue, mobileFilter, getPriceValues }) => {

  const { productFilters } = useSelector((state) => {
    return {
      productFilters: state.productList?.productFilters?.data
    }
  });
  const router = useRouter()
  const [sliderMinValue, setSliderMinValue] = useState(productFilters?.price?.start ? productFilters?.price?.start : minValue);
  const [sliderMaxValue, setSliderMaxValue] = useState(productFilters?.price?.end ? productFilters?.price?.end : maxValue);
  // console.log("line 199", sliderMaxValue, sliderMinValue)
  const [isRange, setIsRange] = useState(false)
  const dispatch = useDispatch();
  // const getSliderMinValue = (minValue) => {
  //   setSliderMinValue(parseInt(minValue.target.value));
  //   debouncedAppearance(() => changePriceValues(minValue.target.value, sliderMaxValue))
  // }
  // const getSliderMaxValue = (maxValue) => {
  //   setSliderMaxValue(parseInt(maxValue.target.value));
  //   debouncedAppearance(() => changePriceValues(sliderMinValue, parseInt(maxValue.target.value)));
  // }
  // useEffect(() => {

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sliderMinValue, sliderMaxValue]);
  const changePriceValues = (min, max) => {
    min = parseInt(Math.ceil(min))
    max = parseInt(Math.ceil(max))
    //   if (sliderMaxValue - sliderMinValue <= 5) {
    //   // setSliderMinValue((sliderMaxValue - 50))
    //  if(sliderMaxValue - 5>=0) setSliderMinValue(sliderMaxValue - 5)
    // }
    // if(sliderMaxValue - sliderMinValue <= 1 && sliderMinValue>0){
    //   setSliderMaxValue()
    //   setSliderMinValue(sliderMinValue-1)
    // }
    setIsRange(true)
    if (mobileFilter) {
      getPriceValues(min, max)
    } else {
      dispatch(PriceFilterChanges({
        start: min,
        end: max
      }));
      const updatedQuery = { ...router.query, price: min + "-" + max };
      router.push({
        pathname: router.pathname,
        query: updatedQuery,
      }, null, { shallow: true });
    }

  }
  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    2000
  );
  const priceHandle = (e) => {
    const inputVal = e.target.value;
    let max = sliderMaxValue;
    let min = sliderMinValue;
    // console.log(inputVal,/^[0-9]*$/.test(inputVal),"inputVal")

    if (/^[0-9]*$/.test(inputVal)) {
      switch (e?.target?.name) {
        case "min-value": {
          setSliderMinValue(e?.target?.value);
          debouncedAppearance(() => {
            // console.log("line 252", parseInt(e?.target?.value) > parseInt(maxValue))
            if (parseInt(e?.target?.value) < parseInt(minValue)) {
              setSliderMinValue(minValue);
              min = minValue;
              // console.log("line 256", min)
            } else if (parseInt(e?.target?.value) >= parseInt(sliderMaxValue)) {
              setSliderMinValue(sliderMaxValue - 2);
              min = sliderMaxValue - 1;
            } else {
              setSliderMinValue(e?.target?.value);
              min = e?.target?.value;
            }
            debouncedAppearance(() => changePriceValues(min, max))
          })
          break;
        }
        case "max-value": {
          setSliderMaxValue(e?.target?.value);
          debouncedAppearance(() => {
            // console.log("line 252", parseInt(e?.target?.value) > parseInt(maxValue))
            if (parseInt(e?.target?.value) > parseInt(maxValue)) {
              setSliderMaxValue(parseInt(maxValue));
              max = parseInt(maxValue);
              // console.log("line 256", max)
            } else if (parseInt(e?.target?.value) <= parseInt(sliderMinValue)) {
              setSliderMaxValue(parseInt(sliderMinValue) + 2);
              max = parseInt(sliderMinValue) + 1;
            } else {
              setSliderMaxValue(e?.target?.value);
              max = e?.target?.value;
            }
            debouncedAppearance(() => changePriceValues(min, max))
          })
          break;
        }
        default: null;
      }
    }
    // console.log("line 265", min, "max", max)
  }

  const priceHandleWihtoutBlur = (e) => {
    switch (e?.target?.name) {
      case "min-value": {
        setSliderMinValue(e?.target?.value);
        if (mobileFilter) {
          getPriceValues(e?.target?.value, sliderMaxValue)
        }
        break;
      }
      case "max-value": {
        setSliderMaxValue(e?.target?.value);
        if (mobileFilter) {
          getPriceValues(sliderMinValue, e?.target?.value)
        }
        break;
      }
      default: null;
    }
  }

  const updatePriceRange = (min, max) => {
    min = parseInt(Math.ceil(min))
    max = parseInt(Math.ceil(max))
    setSliderMaxValue(max);
    setSliderMinValue(min)
    if (mobileFilter) {
      getPriceValues(min, max)
    } else {
      dispatch(PriceFilterChanges({
        start: min,
        end: max
      }));
      const updatedQuery = { ...router.query, price: min + "-" + max };
      router.push({
        pathname: router.pathname,
        query: updatedQuery,
      }, null, { shallow: true });
    }

  }


  return (
    <PriceFilterWrapper item={priceItem.PriceWrapper}>
      <PriceFilterContainer item={priceItem.PriceFilter}>
        <MultiRangeSlider
          RangestyleItems={priceItem}
          min={minValue}
          max={maxValue}
          minvalue={sliderMinValue}
          maxValue={sliderMaxValue}
          onChange={({ min, max }) => debouncedAppearance(() => updatePriceRange(min, max))}
          isRange={isRange}
          setIsRange={setIsRange}
        />
        {
          // <RangeSLider item={priceItem.PriceFilterInput} type="range" min={sliderMinValue < minValue ? sliderMinValue : minValue} max={maxValue} val1={sliderMinValue} val2={sliderMaxValue} value={sliderMinValue} onInput={(e) => getSliderMinValue(e)} />
          // <RangeSLider item={priceItem.PriceFilterInput} type="range" min={sliderMinValue < minValue ? sliderMinValue : minValue} max={maxValue} val1={sliderMinValue} val2={sliderMaxValue} value={sliderMaxValue} onInput={(e) => getSliderMaxValue(e)} />
        }
      </PriceFilterContainer>
      <RangeLabel item={priceItem.RangeLabel}>
        {
          minValue && <Label item={priceItem.PriceLabel}>Rs. {minValue ? Math.ceil(minValue) : 0}</Label>
        }
        {
          maxValue && <Label item={priceItem.PriceLabel}>Rs. {maxValue ? Math.ceil(maxValue) : 0}</Label>
        }
      </RangeLabel>
      <PriceValueWrap item={priceItem.InputWapper}>
        <PriceValueMinWrap item={priceItem.LeftInputWapper}>
          <Input item={priceItem.Input} type="text" id="min-value" name='min-value' value={(Math.ceil(sliderMinValue) === 0) ? "" : Math.ceil(sliderMinValue)} onChange={priceHandleWihtoutBlur} onBlur={priceHandle} />
        </PriceValueMinWrap>
        <PriceRangeToText item={priceItem.ParagraphWrap}>
          <Paragraph item={priceItem.Paragraph}>to</Paragraph>
        </PriceRangeToText>
        <PriceValueMaxWrap item={priceItem.LeftInputWapper}>
          <Input item={priceItem.Input} type="text" id="max-value" name="max-value" value={(Math.ceil(sliderMaxValue) === 0) ? "" : Math.ceil(sliderMaxValue)} onChange={priceHandleWihtoutBlur} onBlur={priceHandle} />
        </PriceValueMaxWrap>
      </PriceValueWrap>
    </PriceFilterWrapper>
  )
}

export default PriceSlider