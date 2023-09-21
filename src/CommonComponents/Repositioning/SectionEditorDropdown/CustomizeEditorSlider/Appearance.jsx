import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import AddNewElement from "../../../UploadElements/AddNewElement";
import Img2 from "./DummyImg1.jpg";
import Img3 from "./DummyImg3.jpg";
import VideoIcon from "../../../../Assets/SiteEditor/Icons/Reposition/Icon-videoCamera.svg";
import ColorIcon from "../../../../Assets/SiteEditor/Icons/Reposition/Icon-Color.svg";
import GalleryIcon from "../../../../Assets/SiteEditor/Icons/Reposition/Icon-Gallery.svg";
import SelectDropDown from "../../../SelectDropdown";
import RangeSlider from "../../../Form/RangeSlider";
import InputColorPicker from "../../../ColorPicker";
import ColorPalette from "../../../ColorPalette";
import { useOutsideClick } from "rooks";
import { UppercaseFirstLetter } from "../../../../CommonFunctions/UpperCase";
import dynamic from "next/dynamic";
// import Uploader from "@/CommonComponents/ImageUploader";
const Uploader = dynamic(() => import("../../../ImageUploader"), { ssr: false })
const AppearanceWrappper = styled.div`
  position: relative;
  .apprincebtnwrap {
    background: rgba(1, 132, 255, 0.05);
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 22px;
    border-radius: 8rem;
    overflow: hidden;
    .buttons {
      border: none;
      padding: 6px 10px;
      &.ActiveBtn {
        background-color: #3758f9;
        color: #fff;
      }
    }
  }
`;
const UploadMediaWrap = styled.div`
  padding: 4px 0;
  margin-top: 12px;
`;
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  line-height: 13px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  margin-top: 12px;
  height: 156px;
  img{
    display: block;
    width: 100%;
    height: 100%;
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
  border:1px solid #EAEAEA;
  span {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CustomHead = styled.div`
  background: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  button {
    border: none;
    background: transparent;
  }
`;
const CustomColorPickerWraper = styled.div`
  position: absolute;
  top: 0;
  right: 322px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 12px;
`;
const AddTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
const OpacityOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 82px;
  margin-top: 12px;
  // margin-bottom: 12px;
  border-top: 1px solid #eaeaea;
  // border-bottom: 1px solid #eaeaea;
  p {
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
const ColorWrapper = styled.div`
  width: 139px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #202020;
    font-family: "Poppins", sans-serif;
  }
`;
const ColorPalletWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(32, 32, 32, 0.4);
  border-radius: 4px;
  padding: 6px;
  gap: 8px;
`;
const ColorCode = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: rgba(32, 32, 32, 0.8);
  padding-right: 8px;
  border-right: 1px solid rgba(32, 32, 32, 0.2);
`;
const ColorValue = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #202020;
`;
const ColorPallet = styled.div`
  background: ${({ itemProp }) => itemProp};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  width: 20px;
  height: 20px;
`;

const Appearance = ({ apiHitColor, apiHitOpacity, onUpload, appearanceValues, apiHitType }) => {
  const [fileUrl, setFileUrl] = useState("");
  const [videoShot, setVideoShot] = useState("")
  const colorPickerRef = useRef(null);
  const [ActiveBackgroundColor, setActiveBackgroundColor] = useState("");
  const [backgroundValues, setBackgroundValues] = useState("Color");
  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const uploaderRef = useRef(null);
  useOutsideClick(colorPickerRef, () => {
    if (displayColorPicker) setdisplayColorPicker(false);
  });

  const handleValueChange = (newValue) => {

    setRangeValue(newValue);

    switch (newValue) {
      case "10":
        apiHitOpacity(0.1);
        break;
      case "20":
        apiHitOpacity(0.2);
        break;
      case "30":
        apiHitOpacity(0.3);

        break;
      case "40":
        apiHitOpacity(0.4);

        break;
      case "50":
        apiHitOpacity(0.5);
        break;
      case "60":
        apiHitOpacity(0.6);
        break;
      case "70":
        apiHitOpacity(0.7);
        break;
      case "80":
        apiHitOpacity(0.8);
        break;
      case 90:
        apiHitOpacity(0.9);
        break;
      case "100":
        apiHitOpacity(1);
        break;
      default:
        apiHitOpacity(0);
        break;
    }
  };
  const HandleChangeBackground = (color) => {
    setActiveBackgroundColor(color);
    apiHitColor(color, backgroundValues)
  };




  let BackgroundValue = ["Color", "Image", "Video"];

  const selectBackgroundHandle = (val) => {
    apiHitType(val)
    setBackgroundValues(val);
    setActiveBackgroundColor("");
  };


  const CustomColorPickerhandle = () => {
    setdisplayColorPicker(true);
  };
  const CustomColorPickerClosehandle = () => {
    setdisplayColorPicker(false);
  };
  useEffect(() => {
    if (appearanceValues?.type) {
      setBackgroundValues(UppercaseFirstLetter(appearanceValues?.type))
    }
    if (appearanceValues?.range) {
      setRangeValue(appearanceValues?.range * 100)
    }
    if (appearanceValues?.backgroundColor) {
      setActiveBackgroundColor(appearanceValues?.backgroundColor)
    }
    if (appearanceValues?.valueSrc) {
      setFileUrl(appearanceValues?.valueSrc)
    }
    if (appearanceValues?.overlayOpacity) {
      setRangeValue(appearanceValues?.overlayOpacity * 100)
    }
  }, [appearanceValues])

  const RenderComponents = useMemo(() => {
    switch (backgroundValues) {
      case "Color":
        return (
          <React.Fragment>
            <SolidBackgroundWrap
              style={{ background: ActiveBackgroundColor? ActiveBackgroundColor :  "var(--global-color-penitentiary)"  }}
            >
              <span>
                <ColorIcon />
              </span>
            </SolidBackgroundWrap>
            <ColorWrapper>
              <p>Select Color</p>
              <ColorPalette
                colorCode={ActiveBackgroundColor ? ActiveBackgroundColor : "var(--global-color-penitentiary)"}
                paletteHandle={CustomColorPickerhandle}
              />
            </ColorWrapper>
          </React.Fragment>
        );
      case "Image":
        return (
          <React.Fragment>
            <ImageWrapper>
              <Image
                src={fileUrl ? fileUrl : Img2}
                alt="Ai images"
                className="img-fluid "
                height={156}
                width={156}
              />
              <span>
                <GalleryIcon />
              </span>
            </ImageWrapper>
            <UploadMediaWrap>
              <AddNewElement
                title={"Upload Media"}
                Layout={true}
                onClick={() => uploaderRef?.current?.open()}
              />
            </UploadMediaWrap>
          </React.Fragment>
        );
      case "Video":
        return (
          <React.Fragment>
            <ImageWrapper>
              {fileUrl ?
                <video key={videoShot} width="360" height={156}>
                  <source src={videoShot ? videoShot : `${fileUrl}#t=0.1`} type="video/mp4" />
                </video> :
                <Image
                  src={Img3}
                  alt="Ai images"
                  className="img-fluid"
                  width={156}
                  height={156}
                />}
              <span>
                <VideoIcon />
              </span>
            </ImageWrapper>
            <UploadMediaWrap>
              <AddNewElement
                title={"Upload Media"}
                Layout={true}
                onClick={() => uploaderRef?.current?.open()}
              />
            </UploadMediaWrap>
          </React.Fragment>
        );

      default:
        return;
    }
  }, [ActiveBackgroundColor, backgroundValues, fileUrl, videoShot]);

  return (
    <>
      <AppearanceWrappper>
        <SelectDropDown
          showValue={backgroundValues}
          values={BackgroundValue}
          handleSelect={(val) => selectBackgroundHandle(val)}
        />
        {RenderComponents}

        <OpacityOverlay>
          <p className="base text-2xs ">Overlay Opacity</p>
          <RangeSlider
            minValue={"0"}
            maxValue={"100"}
            step={"10"}
            initialValue={rangeValue}
            onChange={handleValueChange}
            percentageShow={false}
          />
        </OpacityOverlay>

      </AppearanceWrappper>
      {displayColorPicker && (
        <CustomColorPickerWraper ref={colorPickerRef}>
          <InputColorPicker
            value={ActiveBackgroundColor ? ActiveBackgroundColor : "var(--global-color-penitentiary)"}
            onclose={CustomColorPickerClosehandle}
            handleChange={(color) => HandleChangeBackground(color)}
          />
        </CustomColorPickerWraper>
      )}
      <Uploader
        size={5}
        maxWidth={400}
        minWidth={200}
        onclose={() => uploaderRef?.current?.close()}
        multiSelect={false}
        discartRef={uploaderRef}
        onUploaded={(val) => { setFileUrl(val.src); onUpload(val, backgroundValues); setVideoShot(`${val.src}#t=0.1`); }}
        uploadLimit={1}
        validationProp={
          backgroundValues === "Video" ? "onlyVideo" : "onlyImage"
        }
      />
    </>
  );
};

export default Appearance;
