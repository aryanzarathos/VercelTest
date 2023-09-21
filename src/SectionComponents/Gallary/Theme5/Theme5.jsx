import React from "react";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme5.style";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import { dummyImg } from "@/Constant/constants";
import Slider from "@/SectionCommon/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";

const GallaryTheme5 = ({ children }) => {
  const data = children;
  const style = {
    MainSection: data?.custom_section_editable[0]?.style,
    MainContent: data?.custom_section_editable[1]?.style,
    ImageStyle: data?.custom_section_editable[2]?.style,
    MainImage: data?.custom_section_editable[3]?.style,
    GallaryData: data?.data,
    objectView: data?.style?.desktop?.objectView,
    GridCount: data?.style
  }

  return (
    <>
      <MediaGallery sectionName={"ManageGallery"} uploadLimit={"noLimit"} multiSelect={true} manageText={"Manage Gallery"} fieldName={"image"} fieldIdLabel={"id"} data={data} arrayofImages={false}>

        <MainSection item={style?.MainSection}>
          {
            style.objectView.toLowerCase()  === "grid" ?
              <MainContent item={style?.MainContent} gridCount={style?.GridCount}>
                {style?.GallaryData?.map((value) => {
                  const { image, id } = value;
                  return (
                    <>
                      <MainImage key={id} item={style?.MainImage}>
                        <ImageElement src={image} style={style?.ImageStyle} defaultImage={dummyImg} />
                      </MainImage>
                    </>
                  );
                })}
              </MainContent> :
              <Slider {...data}>
                {style.GallaryData?.map((value, key) => {
                  const { image, id } = value;
                  return (
                    <SwiperSlide key={key}>
                      <MainImage item={style?.MainImage}>
                        <ImageElement src={value.image} style={style.ImageStyle} defaultImage={dummyImg} />
                      </MainImage>
                    </SwiperSlide>
                  )
                })}
              </Slider>
          }
        </MainSection>
      </MediaGallery>
    </>
  );
};

export default GallaryTheme5;
