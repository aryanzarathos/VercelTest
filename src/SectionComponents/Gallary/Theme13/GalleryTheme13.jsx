import React from "react";
import { GalleryWrapper, GalleryWrap, ImageWrap, SliderImageWrap } from './GalleryTheme13.style'
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { SwiperSlide } from "swiper/react";
import Slider from "../../../SectionCommon/Slider/Slider";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import { dummyImg } from "@/Constant/constants";
const GalleryTheme12 = ({ children }) => {
    const data = children;
    const style = {
        GalleryData: data.data,
        GalleryWrapper: data.custom_section_editable[0].style,
        ImageWrap: data.custom_section_editable[1].style,
        imgStyle: data.custom_section_editable[2].style,
        GalleryWrap: data.custom_section_editable[3].style,
        SliderImageWrap: data.custom_section_editable[4].style,
        objectView: data.style.desktop.objectView,
        gridCount: data.style,


    }


    return (
        <MediaGallery sectionName={"ManageGallery"} uploadLimit={5} manageText={"Manage Gallery"} showOnlyTab="Image Setting" fieldName={"image"} fieldIdLabel={"id"} data={data} arrayofImages={false}>
            <GalleryWrapper item={style.GalleryWrapper}>
                {
                        <GalleryWrap item={style.GalleryWrap} gridCount={style.gridCount}>
                            {style.GalleryData.map((val, key) => {
                                return (
                                    <ImageWrap item={style.ImageWrap} item2={style.GalleryWrap} key={key}>
                                        <ImageElement src={val.image} style={style.imgStyle} defaultImage={dummyImg} />
                                    </ImageWrap>
                                )
                            })}
                        </GalleryWrap>
              
                }
            </GalleryWrapper>
        </MediaGallery>
    )
};
export default GalleryTheme12;