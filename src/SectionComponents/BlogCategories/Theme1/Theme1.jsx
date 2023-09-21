import React, { useCallback, useEffect, useState } from 'react'
import CardImage1 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg1.png"
import CardImage2 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg2.png"
import CardImage3 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg3.png"
import SearchIcon from "../../../Assets/SectionComponent/Images/BolgCategories/SearchIcon.svg"
import PaginationTheme1 from '../../Pagination/Theme1/Theme1'
import Image from 'next/image';
import Link from 'next/link';
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import { BlogCategoriesSubContainer, BlogCategoriesTopContainer, CardBottomContent, CardButton, CardContainer, CardContent, CardHeadContainer, CardHeading, CardImages, CategoriesHeadingButton, CategoriesHeadingContainer, CategoriesTopHeading, HeadContainer, HeadingSearchSection, LineInner } from './BolgCategoriesTheme1.style'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement'
import ValidationFile from '@/Classes/ValidationFile'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogItemList } from '@/store/actions/blog/blog'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import { getAllCategories, getAllLocalApiCategories } from '@/store/actions/instituteblogs/Instituteblog'
import { useRouter } from 'next/router'

const BlogCategoriesTheme1 = ({ children }) => {
    const data = children;
    const history = useAppNavigate();
    const dispatch = useDispatch();
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [FindSearch, setfindSearch] = useState(false);
    const { localApi, categorySuccess, categories, totalCount } = useSelector((state) => {
        return {
            BlogListData: state.ecommerceTemplate.BlogItemList.data,
            categorySuccess: state.instituteblogs.getCategoryLists.success,
            categories: state.instituteblogs.getCategoryLists.data,
            totalCount: state.instituteblogs.getCategoryLists.totalCount,
            localApi: state.instituteblogs.getCategoryLists.localApi
        };
    });
    let FinalData = categories;

    useEffect(() => {
        if (FindSearch) {
            if (AppLinkUrl.privateDomain()) {
                dispatch(getAllCategories("", "domain", AppLinkUrl.getHost(), searchTerm, currentPage, ""));
            }
            else {
                dispatch(getAllCategories("", "subdomain", AppLinkUrl.subdomain(), searchTerm, currentPage, ""));
            }
        } else {
            dispatch(getAllLocalApiCategories(data.data));
        }

    }, [FindSearch, searchTerm, data.data])


    let typing;
    const handleSearch = (e) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        clearTimeout(typing);
        typing = setTimeout(() => {
            const { pathname, query } = router;
            const updatedQuery = { ...query, search: value };
            router.push({ pathname, query: updatedQuery }, null, { shallow: true });
            setSearchTerm(value);
            setfindSearch(true)
        }, 500);
    };

    const handlePagination = (page) => {

        if (page) {
            setCurrentPage(page);
            if (AppLinkUrl.privateDomain()) {
                dispatch(getAllCategories("", "domain", AppLinkUrl.getHost(), searchTerm, page, ""));
            }
            else {
                dispatch(getAllCategories("", "subdomain", AppLinkUrl.subdomain(), searchTerm, page, ""));
            }
            setfindSearch(true)
            const updatedQuery = { ...router.query, page: page };
            router.push({
                pathname: router.pathname,
                query: updatedQuery,
            }, null, { shallow: true });
        }
    }

    const BlogCategoriesData = [
        {
            id: 0,
            img: CardImage1,
            heading: "Arcade of Games",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 1,
            img: CardImage2,
            heading: "Who killed Jessica?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 2,
            img: CardImage3,
            heading: "How to play suicide squad at home?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 3,
            img: CardImage1,
            heading: "Arcade of Games",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 4,
            img: CardImage2,
            heading: "Who killed Jessica?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 5,
            img: CardImage3,
            heading: "How to play suicide squad at home?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 6,
            img: CardImage1,
            heading: "Arcade of Games",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 7,
            img: CardImage2,
            heading: "Who killed Jessica?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 8,
            img: CardImage3,
            heading: "How to play suicide squad at home?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 9,
            img: CardImage1,
            heading: "Arcade of Games",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 10,
            img: CardImage2,
            heading: "Who killed Jessica?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        },
        {
            id: 11,
            img: CardImage3,
            heading: "How to play suicide squad at home?",
            description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
        }
    ]
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
        CardHeading: data?.custom_section_editable[13],
        CardHeadContainer: data?.custom_section_editable[14].style,
        CardBottomContent: data?.custom_section_editable[15],
        RightContainerButton: data?.custom_section_editable[16],
        ForwardIcon: data?.custom_section_editable[17].style,
        PaginationContainer: data?.custom_section_editable[18].style,
        PrivButton: data?.custom_section_editable[19].style,
        Prev: data?.custom_section_editable[20].style,
        PaginationNumber: data?.custom_section_editable[21].style,
        Number: data?.custom_section_editable[22].style,
        NextButton: data?.custom_section_editable[23].style,
        Next: data?.custom_section_editable[24].style,
    }

    const handlePreviewCategory = (slug) => {
        history(`/blogcategory/${slug}`);
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
                        <CategoriesHeadingButton
                            placeholder='Search...'
                            type="search"
                            item={style.CategoriesHeadingButton}
                            onKeyUp={handleSearch}
                            onChange={handleSearch}
                        />
                    </HeadingSearchSection>
                </CategoriesHeadingContainer>
                <HeadContainer item={style?.HeadContainer}>
                    <LineInner item={style?.LineInner}></LineInner>
                </HeadContainer>
            </BlogCategoriesTopContainer>
            <BlogCategoriesSubContainer item={style?.BlogCategoriesSubContainer}
                gridCount={style.GridCount}>
                {
                    categorySuccess && FinalData && FinalData.length > 0 ?
                        FinalData.map((item, key) => (
                            <>
                                <CardContainer item={style.CardContainer} key={key} onClick={() => handlePreviewCategory(item?.url_slug)}>
                                    <CardImages item={style.CardImages}>
                                        <ImageElement src={item?.category_cover_image?.src} alt={item?.category_cover_image?.alt} style={style.CardImagesImage} />
                                    </CardImages>
                                    <CardContent item={style.CardContent}
                                        itemSvg={style.ForwardIcon}>
                                        <Text tagType={style.CardHeading.tagType}
                                            style={style.CardHeading.style}
                                            text={item?.category_title} />
                                        <CardHeadContainer item={style.CardHeadContainer} />
                                        <Text tagType={style.CardBottomContent.tagType}
                                            style={style.CardBottomContent.style}
                                            text={item?.category_desc && item?.category_desc.length > 140 ?
                                                `${item?.category_desc.slice(0, 140)}... ` :
                                                item?.category_desc}
                                        />
                                        {
                                            item?.category_desc && item?.category_desc.length > 140 ?
                                                <Button
                                                    style={style?.RightContainerButton.style}>
                                                    {style?.RightContainerButton?.text}
                                                    <ForwardIcon />
                                                </Button>
                                                : ""
                                        }
                                    </CardContent>
                                </CardContainer>
                            </>
                        ))
                        : "No records Found."
                }
            </BlogCategoriesSubContainer>
            {
                totalCount > 0 ? <PaginationTheme1
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={totalCount ? totalCount : 0}
                    pageSize={12}
                    onPageChange={page => handlePagination(page)}
                    style={style}
                /> : ""
            }
        </>
    )
}

export default BlogCategoriesTheme1