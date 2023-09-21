import React, { useEffect, useState } from 'react'
import LatestBlogImg from "../../../Assets/SectionComponent/Images/BolgCategories/LatestBlogImg.png"
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import Image from 'next/image'
import { HeadContainer, LatestBolgSubContainer, LatestBolgTopContainer, LatestBolgTopHeading, LineInner, RightContainerButton, RightContainerContent, RightContainerTopHeading, SubLeftContainer, SubRightContainer } from './BlogHomeTheme1.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement'
import useEcomSelectRoute from '@/TemplateCustomHooks/EcomSelectRoute'
import useServiceSelectRoute from '@/TemplateCustomHooks/ServiceSelectRoute'
import { useDispatch, useSelector } from 'react-redux'
import useAppNavigate from '@/CustomHooks/useAppNavigate'

const BolgHomeTheme1 = ({ children }) => {
    const data = children;
    const industry = "Ecommerce";
    let style = {
        LatestBolgTopContainer: data?.custom_section_editable[0].style,
        LatestBolgTopHeading: data?.custom_section_editable[1],
        HeadContainer: data?.custom_section_editable[2].style,
        LineInner: data?.custom_section_editable[3].style,
        LatestBolgSubContainer: data?.custom_section_editable[4].style,
        SubLeftContainer: data?.custom_section_editable[5].style,
        SubLeftContainerImage: data?.custom_section_editable[6].style,
        SubRightContainer: data?.custom_section_editable[7].style,
        RightContainerTopHeading: data?.custom_section_editable[8],
        RightContainerContent: data?.custom_section_editable[9],
        RightContainerButton: data?.custom_section_editable[10],
        ForwardIcon: data?.custom_section_editable[11].style,
    }

    const history = useAppNavigate();
    const dispatch = useDispatch();

    const { blogsSuccess, preview, blogsData, } = useSelector((state) => {
        return {
            preview: state.ecommerceTemplate.preview,
            blogsSuccess: state.instituteblogs.getWesbiteBlogList.success,
            blogsData: state.instituteblogs.getWesbiteBlogList.blogData,
        }
    })


    // const [latestBlogData, setLatestBlogData] = useState({});

    const [selectEcomRouteForPreview] = useEcomSelectRoute();
    // const [selectServiceRouteForPreview] = useServiceSelectRoute();

    // useEffect(() => {
    //     if (blogsSuccess && blogsData && blogsData.length > 0) {
    //         setLatestBlogData(blogsData[0]);
    //     }
    // }, [blogsData, blogsSuccess])

    const handlePreviewBlog = (slug) => {
        if (slug) {
            // if (preview) {
            //     if (industry === "Ecommerce") {
            //         selectEcomRouteForPreview(`/blog-details/${slug}`, slug);
            //     }
            //     else if (industry === "Services") {
            //         // selectServiceRouteForPreview(`/blog/${slug}`, slug);
            //     }
            // } else {
            //     history(`/blog-details/${slug}`);
            // }
            history(`/blog-details/${slug}`);
        }
        else history('#');
    }

    const latestBlogData = data.data;



    return (
        <>
            <LatestBolgTopContainer item={style.LatestBolgTopContainer}>
                <Text tagType={style.LatestBolgTopHeading.tagType}
                    style={style?.LatestBolgTopHeading.style}
                    text={style?.LatestBolgTopHeading.text}
                />
                <HeadContainer item={style?.HeadContainer}>
                    <LineInner item={style?.LineInner}></LineInner>
                </HeadContainer>
            </LatestBolgTopContainer>
            <LatestBolgSubContainer onClick={() => handlePreviewBlog(latestBlogData[0]?.url_slug)} item={style?.LatestBolgSubContainer}>
                <SubLeftContainer item={style?.SubLeftContainer}>
                    <ImageElement src={latestBlogData[0]?.blog_image?.src} alt={latestBlogData[0]?.blog_image?.alt} style={style?.SubLeftContainerImage} />
                </SubLeftContainer>
                <SubRightContainer item={style.SubRightContainer}
                    itemSvg={style.ForwardIcon}>
                    <Text tagType={style?.RightContainerTopHeading.tagType}
                        style={style?.RightContainerTopHeading?.style}
                        text={latestBlogData[0] && latestBlogData[0]?.title ? latestBlogData[0]?.title : "Attack On Titans"} />
                    <Text tagType={style?.RightContainerContent?.tagType}
                        style={style?.RightContainerContent?.style}
                        dangerouslySetInnerHTML={{
                            __html:
                                latestBlogData[0] && latestBlogData[0]?.content ?
                                    latestBlogData[0]?.content?.length > 700 ?
                                        `${latestBlogData[0]?.content.slice(0, 700)}... 
                                    `: latestBlogData[0]?.content
                                    : latestBlogData[0]?.title ? ""
                                        : "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
                        }}
                    />
                    {
                        latestBlogData[0] && latestBlogData[0]?.content?.length > 270 ?
                            <Button style={style?.RightContainerButton.style}>
                                {style?.RightContainerButton?.text}
                                <ForwardIcon
                                    fill={style.ForwardIcon.fill}
                                    height={style.ForwardIcon.height}
                                    width={style.ForwardIcon.width} />
                            </Button> : ""
                    }
                </SubRightContainer>
            </LatestBolgSubContainer>
        </>
    )
}

export default BolgHomeTheme1