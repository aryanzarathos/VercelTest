import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesWrap, ImageWrap, DetailWrap, PriceBtnWrap, SwiperOurServices } from './Theme13.style'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { SwiperSlide } from "swiper/react";
import Slider from '@/SectionCommon/Slider/Slider';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { dummyImg } from '@/Constant/constants';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
const Theme12 = ({ children }) => {

    const data = children;
    const history = useAppNavigate();
    const style = {
        gridType: data.gridType,
        MainSection: data.custom_section_editable[0].style,
        HeadingText: data.custom_section_editable[1],
        DescriptionText: data.custom_section_editable[2],
        PriceText: data.custom_section_editable[3],
        ViewMoreBtn: data.custom_section_editable[4],
        ServicesContainer: data.custom_section_editable[5].style,
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
            {style.ServicesData && style.ServicesData?.length ?
                <ServicesContainer item={style.MainSection} >
                    {
                        style.objectView.toLowerCase() === 'grid'.toLowerCase() ?
                            <ServicesWrapper item={style.ServicesWrapper} gridCount={style.gridCount}>
                                {style.ServicesData.map((val, key) => {
                                    return (
                                        <ServicesWrap item={style.ServicesWrap} key={key} onClick={() => serviceCategoryHandle(val.urlSlug)}>
                                            <Text
                                                tagType={style.HeadingText.tagType}
                                                style={style.HeadingText.style}
                                                text={val.title}
                                            />
                                            <ImageWrap item={style.ImageWrap}>
                                                <ImageElement
                                                    src={val?.image}
                                                    style={style.imageStyle}
                                                    defaultImage={dummyImg}
                                                />
                                            </ImageWrap>
                                            <DetailWrap item={style.DetailWrap}>
                                                <Text
                                                    tagType={style.DescriptionText.tagType}
                                                    style={style.DescriptionText.style}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            val.description?.length > 180 ?
                                                                `${val.description?.slice(0, 180)}... 
                                                `: val.description,
                                                    }}
                                                />
                                            </DetailWrap>
                                            <PriceBtnWrap item={style.PriceBtnWrap}>
                                                <Text
                                                    tagType={style.PriceText.tagType}
                                                    style={style.PriceText.style}
                                                    text={val.sessionPrice}
                                                />
                                                <Button
                                                    style={style.ViewMoreBtn.style}
                                                    text={style.ViewMoreBtn.text}
                                                />
                                            </PriceBtnWrap>
                                        </ServicesWrap>
                                    )
                                })}
                            </ServicesWrapper>
                            :

                            <SwiperOurServices item={style.SwiperOurServices} >
                                <Slider {...data}>
                                    {style.ServicesData.map((val, key) => {
                                        return (
                                            <SwiperSlide key={key}>
                                                <ServicesWrap item={style.ServicesWrap} onClick={() => serviceCategoryHandle(val.urlSlug)}>
                                                    <DetailWrap item={style.DetailWrap}>
                                                        <Text
                                                            tagType={style.HeadingText.tagType}
                                                            style={style.HeadingText.style}
                                                            text={val.title}
                                                        />
                                                        <ImageWrap item={style.ImageWrap}>
                                                            <ImageElement
                                                                src={val?.image}
                                                                style={style.imageStyle}
                                                                defaultImage={dummyImg}
                                                            />
                                                        </ImageWrap>
                                                        <Text
                                                            tagType={style.DescriptionText.tagType}
                                                            style={style.DescriptionText.style}
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    val.description?.length > 180 ?
                                                                        `${val.description?.slice(0, 180)}... 
                                                        `: val.description,
                                                            }}
                                                        />
                                                    </DetailWrap>
                                                    <PriceBtnWrap item={style.PriceBtnWrap}>
                                                        <Text
                                                            tagType={style.PriceText.tagType}
                                                            style={style.PriceText.style}
                                                            text={val.sessionPrice}
                                                        />
                                                        <Button
                                                            style={style.ViewMoreBtn.style}
                                                            text={style.ViewMoreBtn.text}
                                                        />
                                                    </PriceBtnWrap>
                                                </ServicesWrap>

                                            </SwiperSlide>
                                        )
                                    })}
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
