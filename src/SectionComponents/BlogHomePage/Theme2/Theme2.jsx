import React from 'react'
import CardImage1 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg1.png"
import CardImage2 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg2.png"
import CardImage3 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg3.png"
import Image from 'next/image'

import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"

import { BottomContainerButton, CardBottomContent, CardButton, CardContainer, CardContent, CardHeadContainer, CardHeading, CardImages, CategoriesBottomContainer, CategoriesSubContainer, CategoriesTopContainer, CategoriesTopHeading, HeadContainer, LineInner } from './BlogHomeTheme2.style'
import Slider from '@/SectionCommon/Slider/Slider'
import { SwiperSlide } from 'swiper/react';
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement'
import useEcomSelectRoute from '@/TemplateCustomHooks/EcomSelectRoute'
import { useSelector } from 'react-redux'
import useAppNavigate from '@/CustomHooks/useAppNavigate'

const BolgHomeTheme2 = ({ children }) => {
    const data = children;
    const latestBlogData = data.data;
    const industry = "Ecommerce";
    const history = useAppNavigate();
    // console.log(latestBlogData, "blogsDatablogsDatablogsData");

    let style = {
        CategoriesTopContainer: data.custom_section_editable[0].style,
        LatestBolgTopHeading: data?.custom_section_editable[1],
        HeadContainer: data?.custom_section_editable[2].style,
        LineInner: data?.custom_section_editable[3].style,
        CategoriesSubContainer: data?.custom_section_editable[4].style,
        ArrowColor: data?.sliderSetting,
        CardContainer: data?.custom_section_editable[5].style,
        CardImages: data?.custom_section_editable[6].style,
        CardImagesImage: data?.custom_section_editable[7].style,
        CardContent: data?.custom_section_editable[8].style,
        CardHeading: data?.custom_section_editable[9],
        CardHeadContainer: data?.custom_section_editable[10].style,
        CardBottomContent: data?.custom_section_editable[11],
        RightContainerButton: data?.custom_section_editable[12],
        ForwardIcon: data?.custom_section_editable[13].style,
        CategoriesBottomContainer: data?.custom_section_editable[14].style,
        BottomContainerButton: data?.custom_section_editable[15]
    }

    const { blogsSuccess,preview, categoryData } = useSelector((state) => {
        return {
            preview: state.ecommerceTemplate.preview,
            blogsSuccess: state.instituteblogs.getWesbiteBlogList.success,
            categoryData: state.instituteblogs.getWesbiteBlogList.categoryData
        }
    })

    const [selectEcomRouteForPreview] = useEcomSelectRoute();
    // const [selectServiceRouteForPreview] = useServiceSelectRoute();


    const handleSeeMore = () => {
        // if (preview) {
        //     if (industry === "Ecommerce") {
        //         selectEcomRouteForPreview('/blog-categories', "");
        //     }
        //     else if (industry === "Services") {
        //         // selectServiceRouteForPreview('/blog-categories', "");
        //     }
        // }
        // else {
        //     history('/blog-categories');
        // }
        history('/blog-categories');
    }

    const handlePreviewCategory = (slug) => {
        // if (preview) {
        //     if (industry === "Ecommerce") {
        //         selectEcomRouteForPreview(`/blog-categories/${slug}`, slug);
        //     }
        //     else if (industry === "Services") {
        //         // selectServiceRouteForPreview(`/blog-categories/${slug}`, slug);
        //     }
        // }
        // else {
        //     history(`/blog-categories/${slug}`);
        // }
        history(`/blogcategory/${slug}`);
    }

    return (
        <>
            <CategoriesTopContainer item={style.CategoriesTopContainer}>
                <Text tagType={style.LatestBolgTopHeading.tagType}
                    style={style?.LatestBolgTopHeading.style}
                    text={style?.LatestBolgTopHeading.text} />
                <HeadContainer item={style?.HeadContainer}>
                    <LineInner item={style?.LineInner}></LineInner>
                </HeadContainer>
            </CategoriesTopContainer>
            <CategoriesSubContainer item={style.CategoriesSubContainer}
                itemArrow={style.ArrowColor}>
                <Slider {...data}>
                    {
                        latestBlogData && latestBlogData.length > 0 && latestBlogData.map((item, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <CardContainer item={style.CardContainer} onClick={() => handlePreviewCategory(item?.url_slug)}>
                                            <CardImages item={style.CardImages}>
                                                <ImageElement src={item?.category_cover_image?.src && item?.category_cover_image?.src} alt={item?.category_cover_image?.alt} style={style.CardImagesImage} />
                                            </CardImages>
                                            <CardContent item={style.CardContent}
                                                itemSvg={style.ForwardIcon}>
                                                <Text tagType={style.CardHeading.tagType}
                                                    style={style.CardHeading.style}
                                                    text={item?.category_title} />
                                                <CardHeadContainer item={style.CardHeadContainer} />
                                                <Text tagType={style.CardBottomContent.tagType}
                                                    style={style.CardBottomContent.style}
                                                    text={
                                                        item?.category_desc && item?.category_desc?.length > 140 ?
                                                            `${item?.category_desc.slice(0, 140)}... ` :
                                                            item?.category_desc
                                                    }
                                                />
                                                {
                                                    item?.category_desc && item?.category_desc?.length > 140 ? (
                                                        <Button style={style?.RightContainerButton.style}>
                                                            {style?.RightContainerButton?.text}
                                                            <ForwardIcon />
                                                        </Button>
                                                    ) : ""
                                                }
                                            </CardContent>
                                        </CardContainer>


                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Slider>

            </CategoriesSubContainer >
            <CategoriesBottomContainer item={style.CategoriesBottomContainer}>
                <HeadContainer item={style.CardHeadContainer} />
                {
                    blogsSuccess && categoryData && categoryData.length > 3 ? (
                        <Button
                            onClick={handleSeeMore}
                            text={style.BottomContainerButton.text}
                            style={style.BottomContainerButton.style}
                        />
                    ) : ""
                }
            </CategoriesBottomContainer>
        </>
    )
};

export default BolgHomeTheme2