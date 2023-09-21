import React from "react";
import { GalleryWrapper, ServicesWrap, ImageWrap } from './GalleryTheme12.style'
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { SwiperSlide } from "swiper/react";
import Slider from "../../../SectionCommon/Slider/Slider";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import { dummyImg } from "@/Constant/constants";
const GalleryTheme12 = ({ children }) => {
    const data = children;
    const style = {
        ServicesData: data.data,
        GalleryWrapper: data.custom_section_editable[0].style,
        ImageWrap: data.custom_section_editable[1].style,
        imgStyle: data.custom_section_editable[2].style,

    }

    return (
        <MediaGallery sectionName={"ManageGallery"} manageText={"Manage Gallery"} showGridOptions={false} fieldName={"image"} fieldIdLabel={"id"} data={data} arrayofImages={false}>
            <GalleryWrapper item={style.GalleryWrapper}>
                <Slider {...data}>
                    {style.ServicesData.map((val, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <ImageWrap item={style.ImageWrap}>
                                    <ImageElement src={val.image} style={style.imgStyle} defaultImage={dummyImg} />
                                </ImageWrap>
                            </SwiperSlide>
                        )
                    })}
                </Slider>
                {/* <Swiper {...setting}>
            </Swiper> */}
            </GalleryWrapper>
        </MediaGallery>
    )
};
export default GalleryTheme12;