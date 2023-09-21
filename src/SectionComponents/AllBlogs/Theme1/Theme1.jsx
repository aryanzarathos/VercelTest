import React from 'react'
import PaginationTheme1 from '../../Pagination/Theme1/Theme1'
import SearchIcon from "../../../Assets/SectionComponent/Images/BolgCategories/SearchIcon.svg"
import BlogPostsCards from "../../BlogPosts/BlogPostCards/BlogPostsCards"
import latesNewsImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNews.png'
import latesNewsMidImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNewsMid.png'
import { BlogCategoriesSubContainer, BlogCategoriesTopContainer, CardContainer, CardContent, CardHeadContainer, CardImages, CategoriesHeadingButton, CategoriesHeadingContainer, CategoriesTopHeading, HeadContainer, HeadingCover, HeadingSearchSection, LineInner } from './AllBlogsTheme1.style'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"



const AllBlogsTheme1 = ({ children }) => {
    const data = children;


    let style = {
        BlogCategoriesTopContainer: data?.custom_section_editable[0].style,
        CategoriesTopHeading: data?.custom_section_editable[1],
        HeadContainer: data?.custom_section_editable[2].style,
        LineInner: data?.custom_section_editable[3].style,
        CategoriesHeadingContainer: data?.custom_section_editable[4].style,
        HeadingSearchSection: data?.custom_section_editable[5].style,
        SearchIcon: data?.custom_section_editable[6].style,
        CategoriesHeadingButton: data?.custom_section_editable[7].style,
        BlogCategoriesSubContainer: data?.custom_section_editable[8].style,
        GridCount: data?.style,
        CardContainer: data?.custom_section_editable[9].style,
        CardImages: data?.custom_section_editable[10].style,
        CardImagesImage: data?.custom_section_editable[11].style,
        CardContent: data?.custom_section_editable[12].style,
        HeadingCover: data?.custom_section_editable[13].style,
        CardHeading: data?.custom_section_editable[14],
        CardHeadContainer: data?.custom_section_editable[15].style,
        CardBottomContent: data?.custom_section_editable[16],
        RightContainerButton: data?.custom_section_editable[17],
        PaginationContainer: data?.custom_section_editable[18].style,
        PrivButton: data?.custom_section_editable[19].style,
        Prev: data?.custom_section_editable[20].style,
        PaginationNumber: data?.custom_section_editable[21].style,
        Number: data?.custom_section_editable[22].style,
        NextButton: data?.custom_section_editable[23].style,
        Next: data?.custom_section_editable[24].style,
    }
    
    return (
        <>
            <BlogCategoriesTopContainer item={style.BlogCategoriesTopContainer}>
                <CategoriesHeadingContainer item={style.CategoriesHeadingContainer}>
                    <Text tagType={style.CategoriesTopHeading.tagType}
                        style={style?.CategoriesTopHeading.style}
                        text={style?.CategoriesTopHeading.text} />
                    <HeadingSearchSection item={style.HeadingSearchSection}
                        itemSearch={style.SearchIcon}>
                        <SearchIcon />
                        <CategoriesHeadingButton placeholder='Search'
                            type="search" item={style.CategoriesHeadingButton} />
                    </HeadingSearchSection>
                </CategoriesHeadingContainer>
                <HeadContainer item={style?.HeadContainer}>
                    <LineInner item={style?.LineInner}></LineInner>
                </HeadContainer>
            </BlogCategoriesTopContainer>
            <BlogCategoriesSubContainer item={style?.BlogCategoriesSubContainer}
                gridCount={style.GridCount}>
                {
                    data.data.map((data, index) => (
                        <>
                            <CardContainer item={style.CardContainer} key={index}>
                                <CardImages item={style.CardImages}>
                                    <ImageElement src={data.image} style={style.CardImagesImage} />
                                </CardImages>
                                <CardContent item={style.CardContent}>
                                    <HeadingCover item={style.HeadingCover}>
                                        <Text tagType={style.CardHeading.tagType}
                                            style={style.CardHeading.style}
                                            text={data.heading} />
                                    </HeadingCover>
                                    <CardHeadContainer item={style.CardHeadContainer} />

                                    <Text tagType={style.CardBottomContent.tagType}
                                        style={style.CardBottomContent.style}
                                        text={data.description} />
                                    <Button style={style?.RightContainerButton.style}>
                                        {style?.RightContainerButton?.text}
                                    </Button>
                                </CardContent>
                            </CardContainer>
                        </>
                    ))

                }
            </BlogCategoriesSubContainer>
            <PaginationTheme1 style={style} />
            {/* 

            <BlogCategoriesTopContainer>
                <CategoriesHeadingContainer>
                    <CategoriesTopHeading>Blogs</CategoriesTopHeading>
                    <HeadingSearchSection>
                        <SearchIcon fill={'#667479'} height={17} width={17} />
                        <CategoriesHeadingButton placeholder='Search' type="search" />
                    </HeadingSearchSection>
                </CategoriesHeadingContainer>
                <HeadContainer>
                    <LineInner></LineInner>
                </HeadContainer>
            </BlogCategoriesTopContainer>
            <BlogCategoriesSubContainer>
                {
                    BlogCategoriesData.map((data) => (
                        <>
                            < BlogPostsCards
                                id={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                            />
                        </>
                    ))

                }
            </BlogCategoriesSubContainer> */}
            {/* <PaginationTheme1 /> */}
        </>
    )
}

export default AllBlogsTheme1