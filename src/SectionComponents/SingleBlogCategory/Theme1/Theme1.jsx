import React, { useEffect, useState } from 'react'
import SearchIcon from "../../../Assets/SectionComponent/Images/BolgCategories/SearchIcon.svg"
// import LatestBlogImg from "../../../Assets/Images/BolgCategories/LatestBlogImg.png"
import CardImage1 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg1.png"
import FeaturedBlogsTopImg from '../../../Assets/SectionComponent/Images/BolgCategories/FeaturedBlogsTopImg.png'
import FeaturedBlogsBottomImg from '../../../Assets/SectionComponent/Images/BolgCategories/FeaturedBlogsBottomImg.png'
import LikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/LikeButton.svg'
import DisLikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/DisLikeButton.svg'
import CopyButton from '../../../Assets/SectionComponent/Images/BolgCategories/CopyButton.svg'
import ShareButton from '../../../Assets/SectionComponent/Images/BolgCategories/ShareButton.svg'
import CommentButton from '../../../Assets/SectionComponent/Images/BolgCategories/CommentButton.svg'
import Image from 'next/image'
import { BlogCategoriesTopContainer, BolgCategoriesSubContainer, BottomMidSectionImgContainer, BottomSection, CardHeadContainer, CategoriesHeadingButton, CategoriesHeadingContainer, CategoriesTopHeading, FeaturedBlogsSubContainer, HeadContainer, HeadingSearchSection, ImgContainerContent, ImgContainerHeading, LineInner, MidSection, MidSectionContent, MidSectionHeading, RightContainerContent, SubBottomContainer, SubLeftContainer, SubTopContainer, TopSection, TopSectionImageConatainer, TopSectionImgContent } from './SingleBlogCategoryTheme1.style'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import { showToast } from '@/store/actions/successmessagepopup'
import { useRouter } from 'next/router'
import useShare from '@/CustomHooks/useShare'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import { useDispatch, useSelector } from 'react-redux'
import SharePopUp from "../../../CommonComponents/SharePopUp/index"
import { getSingleCategoryData, getWebsiteCategory, getWebsiteCategoryBlogsSearch } from '@/store/actions/instituteblogs/Instituteblog'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'


const SingleBlogCategoryTheme1 = ({ children }) => {
  const data = children;
  const childrenCategoryData = data?.data[0];
  const categorydataMain = data?.data;
  const history = useAppNavigate();
  const dispatch = useDispatch();

  const router = useRouter();
  const shareURL = router.asPath;
  const categorySlug = router.query;

  const { singleCategoryData, singleCategorySuccess, subdomainuser, user } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      singleCategoryData: state.instituteblogs.getSingleCategory.data,
      singleCategorySuccess: state.instituteblogs.getSingleCategory.success,
    }
  })

  const [shareUrl, copyToClipBoard, copySuccess] = useShare();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryData, setcategoryData] = useState({});
  const [searchFind, setSearchFind] = useState(false);



  let style = {
    BlogCategoriesTopContainer: data?.custom_section_editable[0].style,
    CategoriesTopHeading: data?.custom_section_editable[1],
    HeadContainer: data?.custom_section_editable[2].style,
    LineInner: data?.custom_section_editable[3].style,
    CategoriesHeadingContainer: data?.custom_section_editable[4].style,
    HeadingSearchSection: data?.custom_section_editable[5].style,
    SearchIcon: data?.custom_section_editable[6].style,
    CategoriesHeadingButton: data?.custom_section_editable[7].style,
    BolgCategoriesSubContainer: data?.custom_section_editable[8].style,
    SubLeftContainer: data?.custom_section_editable[9].style,
    SubLeftContainerImage: data?.custom_section_editable[10].style,
    RightContainerContent: data?.custom_section_editable[11].style,
    RightContainerTopHeading: data?.custom_section_editable[12],
    RightContainerContentText: data?.custom_section_editable[13],
    RightContainerButton: data?.custom_section_editable[14],
    ForwardIcon: data?.custom_section_editable[15].style,

    FeaturedBlogsSubContainer: data?.custom_section_editable[16].style,
    SubTopContainer: data?.custom_section_editable[17].style,
    TopSection: data?.custom_section_editable[18].style,
    TopSectionImageConatainer: data?.custom_section_editable[19].style,
    TopSectionImage: data?.custom_section_editable[20].style,
    TopSectionImgContent: data?.custom_section_editable[21].style,
    ImgContainerHeading: data?.custom_section_editable[22],
    ImgContainerContent: data?.custom_section_editable[23],
    MidSection: data?.custom_section_editable[24].style,
    MidSectionHeading: data?.custom_section_editable[25],
    MidSectionContent: data?.custom_section_editable[26],
    BottomSection: data?.custom_section_editable[27].style,
    LikeButton: data?.custom_section_editable[28].style,
    DisLikeButton: data?.custom_section_editable[29].style,
    CommentButton: data?.custom_section_editable[30].style,
    ShareButton: data?.custom_section_editable[31].style,
    CopyButton: data?.custom_section_editable[32].style,
    BottomMidSectionImgContainer: data?.custom_section_editable[33].style,
    BottomMidSectionImg: data?.custom_section_editable[34].style,
    CardHeadContainer: data?.custom_section_editable[35].style,

  }
  useEffect(() => {
    if (searchFind) {
      if (AppLinkUrl.privateDomain()) {
        dispatch(getWebsiteCategoryBlogsSearch("domain", AppLinkUrl.getHost(), childrenCategoryData?._id, searchTerm));
      }
      else {
        dispatch(getWebsiteCategoryBlogsSearch("subdomain", AppLinkUrl.subdomain(), childrenCategoryData?._id, searchTerm));
      }
    } else {
      dispatch(getWebsiteCategory(categorydataMain));
    }
  }, [searchFind, searchTerm])



  useEffect(() => {
    if (singleCategorySuccess && singleCategoryData && singleCategoryData.length) {
      setcategoryData(singleCategoryData[0]);
    }
  }, [singleCategoryData, singleCategorySuccess])

  let typing;
  const handleSearch = (e) => {
    let inputValue = e.target.value
    clearTimeout(typing);
    typing = setTimeout(() => {
      setSearchTerm(inputValue);
      setSearchFind(true);
    }, 400);
  }

  const handlePreviewBlog = (slug) => {
    history(`/blog-details/${slug}`);
  }
  useEffect(() => {
    if (copySuccess) {
      dispatch(showToast("Copied Successfully!", "Eblouiussante_Toast"));
    }
  }, [copySuccess, dispatch])

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
              placeholder='Search'
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

      <BolgCategoriesSubContainer item={style?.BolgCategoriesSubContainer}>
        <SubLeftContainer item={style?.SubLeftContainer}>
          <ImageElement src={categoryData?.category_cover_image?.src} alt={categoryData?.category_cover_image?.alt} style={style?.SubLeftContainerImage} />
        </SubLeftContainer>
        <RightContainerContent item={style.RightContainerContent}
          itemSvg={style.ForwardIcon}>
          <Text tagType={style?.RightContainerContentText?.tagType}
            style={style?.RightContainerContentText?.style}
            text={categoryData?.category_desc} />
        </RightContainerContent>
      </BolgCategoriesSubContainer>
      <CardHeadContainer item={style.CardHeadContainer} />
      <FeaturedBlogsSubContainer item={style.FeaturedBlogsSubContainer}>
        {categoryData?.blogData && categoryData?.blogData?.length > 0 ?
          categoryData?.blogData?.map((item, key) => {
            return (
              <SubTopContainer item={style.SubTopContainer} key={key} >
                <TopSection item={style.TopSection} onClick={() => handlePreviewBlog(item?.url_slug)}>
                  <TopSectionImageConatainer item={style.TopSectionImageConatainer}>
                    <ImageElement src={item?.blog_image?.src} alt={item?.blog_image?.alt} style={style.TopSectionImage} />
                  </TopSectionImageConatainer>
                  <TopSectionImgContent item={style.TopSectionImgContent}>
                    <Text tagType={style.ImgContainerHeading.tagType}
                      style={style.ImgContainerHeading.style}
                      text={item?.AuthorData && item?.AuthorData?.length > 0 ? item?.AuthorData[0]?.name : ""}
                    />
                    <Text tagType={style.ImgContainerContent.tagType}
                      style={style.ImgContainerContent.style}
                      text={item?.AuthorData && item?.AuthorData?.length > 0 ? item?.AuthorData[0]?.description : ""} />
                  </TopSectionImgContent>
                </TopSection>
                <MidSection item={style.MidSection} onClick={() => handlePreviewBlog(item?.url_slug)}>
                  <Text tagType={style.MidSectionHeading.tagType}
                    style={style.MidSectionHeading.style}
                    text={item.title} />
                  {/* <MidSectionHeading>Should I go for HealthifyMe to lose weight?</MidSectionHeading> */}
                  {/* <MidSectionContent>
                  Yes one should surely give it a try.. 3 reasons why I ll recommend it is because 1. daily calorie intake in line to Indian meals consumed. I have used several apps but none of them had the Indian foods spilt at calorie level I found a new-in-box pair of Swarovski Crystal Spider earrings in the room safe at a hotel in Barcelona. The mat in bottom of the safe was raised and the earrings were tucked underneath. The manager contacted the previous new-in-box pair of Swarovski Crystal Spider earrings in the room.....
                </MidSectionContent> */}
                  <Text tagType={style.MidSectionContent.tagType}
                    style={style.MidSectionContent.style}
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.content.length > 700 ?
                          `${item?.content.slice(0, 700)}... ` : item?.content,
                    }}
                  />
                </MidSection>
                <BottomSection
                  item={style.BottomSection}
                  // itemLike={style.LikeButton}
                  // itemDisLike={style.DisLikeButton}
                  // itemComment={style.CommentButton}
                  itemShare={style.ShareButton}
                  itemCopy={style.CopyButton}
                >
                  {
                    //  <LikeButton className="likeButton" />
                    // <DisLikeButton className="dislikeButton" />
                    // <CommentButton className="commontButton" />
                  }
                  <ShareButton className="shareButton">
                    <SharePopUp
                      HideText={true}
                      shareUrl={`${shareURL}/blog/${item?.url_slug}`}
                      textName={"Blog"}
                    />
                  </ShareButton>
                  <CopyButton className="copyButton" onClick={() => copyToClipBoard()} />
                </BottomSection>
              </SubTopContainer>
            );
          }) : (
            "No Blogs Found."
          )
        }
        {
          // <SubBottomContainer item={style.SubTopContainer}>
          //   <TopSection item={style.TopSection}>
          //     <TopSectionImageConatainer item={style.TopSectionImageConatainer}>
          //       {/* <Image src={FeaturedBlogsTopImg} alt="Profile Img" /> */}
          //       <ImageElement src={data.data[0].image} style={style.TopSectionImage} />
          //     </TopSectionImageConatainer>
          //     <TopSectionImgContent item={style.TopSectionImgContent}>
          //       <Text tagType={style.ImgContainerHeading.tagType}
          //         style={style.ImgContainerHeading.style}
          //         text={style.ImgContainerHeading.text} />
          //       <Text tagType={style.ImgContainerContent.tagType}
          //         style={style.ImgContainerContent.style}
          //         text={style.ImgContainerContent.text} />
          //     </TopSectionImgContent>
          //   </TopSection>
          //   <MidSection item={style.MidSection}>
          //     <Text tagType={style.MidSectionHeading.tagType}
          //       style={style.MidSectionHeading.style}
          //       text={style.MidSectionHeading.text} />
          //     {/* <MidSectionHeading>Should I go for HealthifyMe to lose weight?</MidSectionHeading> */}
          //     <BottomMidSectionImgContainer item={style.BottomMidSectionImgContainer}>
          //       <ImageElement src={data.data[1].image} style={style.BottomMidSectionImg} />
          //       {/* <Image src={FeaturedBlogsBottomImg} alt="FeaturedBlogsBottomImg" /> */}
          //     </BottomMidSectionImgContainer>
          //   </MidSection>
          //   <BottomSection item={style.BottomSection}
          //     itemLike={style.LikeButton}
          //     itemDisLike={style.DisLikeButton}
          //     itemComment={style.CommentButton}
          //     itemShare={style.ShareButton}
          //     itemCopy={style.CopyButton}>
          //     <LikeButton className="likeButton" />
          //     <DisLikeButton className="dislikeButton" />
          //     <CommentButton className="commontButton" />
          //     <ShareButton className="shareButton" />
          //     <CopyButton className="copyButton" />
          //   </BottomSection>
          // </SubBottomContainer>
        }
      </FeaturedBlogsSubContainer>
    </>
  )
}

export default SingleBlogCategoryTheme1