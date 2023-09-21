import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import img1 from "./DummyImg2.jpg";
import CheckboxInput from "../../../Form/CheckboxInput";
import SelectDropDown from "../../../SelectDropdown";
import { useSelector } from "react-redux";
import { useOutsideClick } from "rooks";
import Img3 from "./DummyImg3.jpg";
import SwitchLayout from "./SwitchLayout/SwitchLayout";
import SwitchLayoutDropdown from "./SwitchLayout/SwitchLayout";
// import VideoIcon from "../../../../Assets/SiteEditor/Icons/Reposition/Icon-videoCamera.svg";
// import ColorIcon from "../../../../Assets/SiteEditor/Icons/Reposition/Icon-Color.svg";

const ElementsWrapper = styled.div`
  // padding-bottom: 16px;
  .formfieldwrap {
    label {
      span {
        font-family: "Poppins", sans-serif;
      }
    }
    input[type=checkbox]{
      accent-color: #3758f9;
        &:hover{
          filter: opacity(0.8);
      }
    }
  }
`;
const BlockElementsWrapper = styled.div`
  margin: 12px 0 0;
  h5,
  p {
    font-family: "Poppins", sans-serif;
  }
`;



const ElementsFoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 8px;
`;


const CheckBoxListWrapper = styled.div`
 height: auto;
//  height: 71px;
  // overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  /* input[type='checkbox'] {
   
      accent-color: red;
      

    &:hover {
    accent-color: red;
  
    }

    
  } */

`;
const ButtonWrappper = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 12px;
  .switch_button {
    width: 100%;
    padding: 7px 20px;
    font-family: "Poppins", sans-serif;
    color: #202020;
    background: #ffffff;
    border-radius: 18px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    border: 1px solid rgba(32, 32, 32, 0.6);
    transition: 0.3s ease-in-out;
    &.active {
      background: #3758f9;
      color: #ffffff;
      border-color: #3758f9;
    }
    &:hover {
      background: #3758f9;
      color: #ffffff;
      border-color: #3758f9;
    }
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  line-height: 0;
  width: 100%;
  height:156px;
  margin-bottom: 15px;
  overflow: hidden;
  
  .img-fluid {
    max-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

  }
  span {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const SolidBackgroundWrap = styled.div`
  height: 156px;
  margin-top: 12px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 15px;
  span {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Elements = ({ hideShowElement, handleGridElement, sectionType, sliderObj, apiHitType, variationName, appearanceValues, selectSliderPosition }) => {
  const [positionState, setPositionState] = useState(false);
  const positionRef = useRef(null)

  const { eventData, websiteTemplateData } = useSelector((state) => {
    return {
      eventData: state.editor.selectedIndexAndId,
      websiteTemplateData: state.websiteTemplate.getTemplate.data
    };
  });
  const [elementValues, setElementValues] = useState({
    showButton: true,
    showHeading: true,
    showSubHeading: true
  })
  const SwitchHandle = () => {
    setPositionState(true);
  };

  const handleBlockElements = (e, val) => {
    setElementValues({ ...elementValues, [val]: e.target.checked })
    hideShowElement(e, val)
  }
  useOutsideClick(positionRef, () => {
    if (positionState) setPositionState(false)
  })

  useEffect(() => {
    if (appearanceValues) {
      setElementValues({
        showButton: appearanceValues?.showButton,
        showHeading: appearanceValues?.showHeading,
        showSubHeading: appearanceValues?.showSubHeading
      })
    }
  }, [appearanceValues])

  return (
    <ElementsWrapper>
      {
        appearanceValues?.type === "image" ? (
          <React.Fragment>
            <ImageWrapper>
              <Image src={appearanceValues?.valueSrc ? appearanceValues?.valueSrc : img1} alt="Ai images" className="img-fluid " layout={`fill`} />
            </ImageWrapper>
          </React.Fragment>
        ) : appearanceValues?.type === "color" ? (
          <React.Fragment>
            <SolidBackgroundWrap
              style={{ backgroundColor: appearanceValues?.backgroundColor }}
            >
              <span>
                {/* <ColorIcon /> */}
              </span>
            </SolidBackgroundWrap>
          </React.Fragment>
        ) : appearanceValues?.type === "video" ? (
          <React.Fragment>
            <ImageWrapper>
              {appearanceValues?.valueSrc ?
                <video width="360" height={156}>
                  <source src={`${appearanceValues?.valueSrc}#t=0.1`} type="video/mp4" />
                </video> :
                <Image
                  src={Img3}
                  alt="Ai images"
                  className="img-fluid"
                  width={156}
                  height={156}
                />}
              <span>
                {/* <VideoIcon /> */}
              </span>
            </ImageWrapper>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ImageWrapper>
              <Image src={img1} alt="Ai images" className="img-fluid " layout={`fill`} />
            </ImageWrapper>
          </React.Fragment>
        )
      }

      <ButtonWrappper>
        {["Banner", "RichText", "ContactUs", "AboutUs", "CallToAction", "Slider"].includes(sectionType) && variationName !== "AboutUsTheme4" && <button
          className={`switch_button ${positionState ? "active" : ""}`}
          onClick={() => SwitchHandle()}
        >
          Switch layout
        </button>}
      </ButtonWrappper>
      <BlockElementsWrapper>
        <h5 className="text-xxs base mb-5 ">Block elements</h5>
        <p className="text-3xs gray mb-10">
          Select which element should be displayed
        </p>
        {sectionType === "Slider" ?
          <React.Fragment>
            <div className="formfieldwrap" >
              <CheckboxInput
                LabelClass="mb-5 g-5 inline base text-2xs"
                label={"Block Heading"}
                onChange={(e) => handleBlockElements(e, "showHeading")}
                checked={elementValues['showHeading']}
                className="text-xxs base"
              />
            </div>
            <div className="formfieldwrap" >
              <CheckboxInput
                LabelClass="mb-5 g-5 inline base text-2xs"
                label={"Block SubHeading"}
                onChange={(e) => handleBlockElements(e, "showSubHeading")}
                checked={elementValues['showSubHeading']}
                className="text-xxs base"
              />
            </div>
            <div className="formfieldwrap" >
              <CheckboxInput
                LabelClass="mb-5 g-5 inline base text-2xs"
                label={"Block Button"}
                onChange={(e) => handleBlockElements(e, "showButton")}
                checked={elementValues['showButton']}
                className="text-xxs base"
              />
            </div>
          </React.Fragment>
          :
          <CheckBoxListWrapper>
            {websiteTemplateData?.data[eventData?.mainContainerIndex].data ?
              websiteTemplateData?.data[eventData?.mainContainerIndex]?.data?.map((container, key) => {
                return (
                  <React.Fragment key={key}>
                    {container?.data && container?.data.length &&
                      container?.data?.map((sectionData, sectionKey) => {
                        return (
                          <React.Fragment key={sectionKey}>

                            {sectionData?.data?.length && sectionData?.data?.map((gridData, gridKey) => {
                              return (<React.Fragment key={sectionKey}>
                                {
                                  gridData?.type === "static" &&
                                  <div className="formfieldwrap" >
                                    <CheckboxInput
                                      LabelClass="mb-5 g-5 inline base text-2xs"
                                      label={"Dynamic Block"}
                                      onChange={(e) => handleGridElement(e, { containerIndex: key, gridIndex: gridKey, sectionIndex: sectionKey, elementIndex: "", gridId: gridData._id, }, gridData)}
                                      checked={gridData?.gridShow}
                                      className="text-xxs base"
                                    />
                                  </div>
                                }
                                {gridData?.data?.length && gridData?.data?.map((element, elementKey) => {
                                  return (
                                    <React.Fragment
                                      key={elementKey}
                                    >
                                      {gridData?.type === "custom" &&
                                        <div className="formfieldwrap" >
                                          <CheckboxInput
                                            LabelClass="mb-5 g-5 inline base text-2xs"
                                            label={element?.name ? element?.name : element?.text}
                                            onChange={(e) => hideShowElement(e, { containerIndex: key, gridIndex: gridKey, sectionIndex: sectionKey, elementIndex: elementKey, gridId: gridData._id, }, gridData)}
                                            checked={element?.show}
                                            className="text-xxs base"
                                          />
                                        </div>}
                                    </React.Fragment>
                                  );
                                })}
                              </React.Fragment>);
                            })}
                          </React.Fragment>
                        );
                      })}
                  </React.Fragment>
                );
              }) : ""}

          </CheckBoxListWrapper>}
      </BlockElementsWrapper>

      {/* <ElementsFoot>
        <button className="button btn-xs text-gray btn-o-silver btn-oval" onClick={() => setBannderEdit(false)} >
          Cancel
        </button>
        <button className="button btn-xs button-primary btn-oval">Save</button>
      </ElementsFoot> */}

      {positionState && (
        <SwitchLayoutDropdown
          ref={positionRef}
          setPositionState={() => setPositionState(false)}
          SettingType={sectionType}
          sliderPos={appearanceValues?.alignItems}
          variationName={variationName}
          selectSliderPosition={selectSliderPosition}
        />
      )}
    </ElementsWrapper>
  );
};

export default Elements;
