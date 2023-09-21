import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesWrap, ImageWrap, DetailWrap, PriceBtnWrap, SwiperOurServices, } from './Theme12.style'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Slider from '@/SectionCommon/Slider/Slider';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { dummyImg } from '@/Constant/constants';
const Theme12 = ({ children }) => {
    const data = children;

    const history = useAppNavigate();

    const style = {
        gridType: data.gridType,
        ServicesContainer: data.custom_section_editable[0].style,
        MainSection: data.custom_section_editable[1].style,
        HeadingText: data.custom_section_editable[2],
        DescriptionText: data.custom_section_editable[3],
        PriceText: data.custom_section_editable[4],
        ViewMoreBtn: data.custom_section_editable[5],

        ServicesWrapper: data.custom_section_editable[6].style,
        ServicesWrap: data.custom_section_editable[7].style,
        ImageWrap: data.custom_section_editable[8].style,
        imageStyle: data.custom_section_editable[9].style,
        DetailWrap: data.custom_section_editable[10].style,
        PriceBtnWrap: data.custom_section_editable[11].style,
        SwiperOurServices: data.custom_section_editable[12].style,
        ServicesData: data.data,
        objectView: data.style.desktop.objectView,
        gridCount: data.style,
    }


    const serviceCategoryHandle = (slug) => {
        history(`/service-details/${slug}`);
        // history(`service-category/${slug}`);

    }

    return (
        <MediaGallery manageText={"Manage Services"} sectionName={"ManageServices"} fieldName={"image"} fieldIdLabel={"_id"} data={data}>
            {data.data && data.data?.length ?
                <ServicesContainer item={style.ServicesContainer} >
                    {
                        style.objectView.toLowerCase() === 'grid'.toLowerCase() ?
                            <ServicesWrapper item={style.ServicesWrapper} gridCount={style.gridCount}>
                                {
                                    data.data.map((val, key) => {
                                        return (
                                            <ServicesWrap item={style.ServicesWrap} key={key} onClick={() => serviceCategoryHandle(val.urlSlug)}>
                                                <ImageWrap item={style.ImageWrap}>
                                                    <ImageElement
                                                        src={val?.image?.src}
                                                        style={style.imageStyle}
                                                        defaultImage={dummyImg}
                                                    />
                                                </ImageWrap>
                                                <DetailWrap item={style.DetailWrap}>
                                                    <Text
                                                        tagType={style.HeadingText.tagType}
                                                        style={style.HeadingText.style}
                                                        text={val?.title}
                                                    />
                                                    <Text dangerouslySetInnerHTML={{
                                                        __html:
                                                            val.description?.length > 180 ?
                                                                `${val.description.slice(0, 180)}... 
                                                                       `: val.description,
                                                    }} tagType={style.DescriptionText.tagType} style={style.DescriptionText.style} />
                                                </DetailWrap>
                                                <PriceBtnWrap item={style.PriceBtnWrap}>
                                                    <Text
                                                        tagType={style.PriceText.tagType}
                                                        style={style.PriceText.style}
                                                        text={val?.sessionPrice ? <span>&#8377; {val?.sessionPrice}</span> : ""}
                                                    />
                                                    <Button
                                                        style={style.ViewMoreBtn.style}
                                                        text={style.ViewMoreBtn.text}
                                                    />
                                                </PriceBtnWrap>
                                            </ServicesWrap>
                                        )
                                    })
                                }
                            </ServicesWrapper>
                            :
                            <SwiperOurServices item={style.SwiperOurServices} >
                                <Slider {...data}>
                                    {
                                        data.data.map((val, key) => {
                                            return (
                                                <SwiperSlide key={key} onClick={() => serviceCategoryHandle(val.urlSlug)}>
                                                    <ServicesWrap item={style.ServicesWrap} >
                                                        <DetailWrap item={style.DetailWrap}>
                                                            <ImageWrap item={style.ImageWrap}>
                                                                <ImageElement
                                                                    src={val?.image}
                                                                    style={style.imageStyle}
                                                                    defaultImage={dummyImg}
                                                                />
                                                            </ImageWrap>
                                                            <Text
                                                                tagType={style.HeadingText.tagType}
                                                                style={style.HeadingText.style}
                                                                text={val?.title}
                                                            />
                                                            <Text dangerouslySetInnerHTML={{
                                                                __html:
                                                                    val.description?.length > 180 ?
                                                                        `${val.description.slice(0, 180)}... 
                                                                           `: val.description,
                                                            }} tagType={style.DescriptionText.tagType} style={style.DescriptionText.style} />
                                                        </DetailWrap>
                                                        <PriceBtnWrap item={style.PriceBtnWrap}>
                                                            <Text
                                                                tagType={style.PriceText.tagType}
                                                                style={style.PriceText.style}
                                                                text={val?.sessionPrice ? <span>&#8377; {val?.sessionPrice}</span> : ""}
                                                            />
                                                            <Button
                                                                style={style.ViewMoreBtn.style}
                                                                text={style.ViewMoreBtn.text}
                                                            />
                                                        </PriceBtnWrap>
                                                    </ServicesWrap>

                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Slider>
                            </SwiperOurServices>
                    }
                </ServicesContainer>
                :
                <RecordNotFound />
            }
        </MediaGallery>
    )
}

export default Theme12
