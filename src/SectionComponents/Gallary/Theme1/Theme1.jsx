import React, { useRef, useState } from "react";
import { MainContent, MainImage, MainSection } from "./GallaryTheme1.style";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { SwiperSlide } from "swiper/react";
import Slider from "../../../SectionCommon/Slider/Slider";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import LightBox from "@/CommonComponents/LightBox";
import { dummyImg } from "@/Constant/constants";

const GallaryTheme1 = ({ children }) => {
  const data = children;
  const ref = useRef(null)
  const [selectedImage, setSelectedImage] = useState({})
  const style = {
    MainSection: data.custom_section_editable[0].style,
    MainContent: data.custom_section_editable[1].style,
    ImageStyle: data.custom_section_editable[2].style,
    MainImage: data.custom_section_editable[3].style,
    GallaryData: data.data,
    objectView: data.style.desktop.objectView,
  }
  const handleLightBox = (item) => {
    setSelectedImage(item)

    ref.current.open()

  }


  return (
    <MediaGallery sectionName={"ManageGallery"} uploadLimit={"noLimit"} multiSelect={true} manageText={"Manage Gallery"} fieldName={"image"} fieldIdLabel={"id"} data={data} arrayofImages={false}>
      <MainSection item={style.MainSection}>
        {
          style.objectView.toLowerCase() === "grid".toLowerCase() ?
            <MainContent item={style.MainContent} gridCount={data.style.desktop.gridCount}>
              {style.GallaryData?.map((value, key) => {
                return (
                  <MainImage key={key} item={style.MainImage} gridCount={data.style} item2={style.MainContent} onClick={() => handleLightBox(value.image)}>
                    <ImageElement src={value.image} style={style.ImageStyle} defaultImage={dummyImg} />
                  </MainImage>
                )
              })}
            </MainContent>
            :
            <Slider {...data}>
              {style.GallaryData?.map((value, key) => {
                return (
                  <SwiperSlide key={key}>
                    <MainImage item={style.MainImage} gridCount={data.style} item2={style.MainContent} onClick={() => handleLightBox(value.image)}>
                      <ImageElement src={value.image} style={style.ImageStyle} defaultImage={dummyImg} />
                    </MainImage>
                  </SwiperSlide>
                )
              })}
            </Slider>
        }

      </MainSection>
      <LightBox src={selectedImage} type="image" ref={ref} ClosePopUp={() => ref.current.close()} />
    </MediaGallery>
  );
};

export default GallaryTheme1;
