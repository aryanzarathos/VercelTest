import React, { useEffect } from 'react'
import LikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/LikeButton.svg'
import DisLikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/DisLikeButton.svg'
import CopyButton from '../../../Assets/SectionComponent/Images/BolgCategories/CopyButton.svg'
import ShareButton from '../../../Assets/SectionComponent/Images/BolgCategories/ShareButton.svg'
import CommentButton from '../../../Assets/SectionComponent/Images/BolgCategories/CommentButton.svg'
import { BottomMidSectionImgContainer, BottomSection, CategoriesTopHeading, FeaturedBlogsSubContainer, FeaturedBlogsTopContainer, HeadContainer, ImgContainerContent, ImgContainerHeading, LineInner, MidSection, MidSectionContent, MidSectionHeading, SubBottomContainer, SubTopContainer, TopSection, TopSectionImageConatainer, TopSectionImgContent } from './BlogHomeTheme4.style'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import { showToast } from '@/store/actions/successmessagepopup'
import useEcomSelectRoute from '@/TemplateCustomHooks/EcomSelectRoute'
import { useDispatch, useSelector } from 'react-redux'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import useShare from '@/CustomHooks/useShare'
import SharePopUp from '@/CommonComponents/SharePopUp'

const BlogHomeTheme4 = ({ children, preview, industry }) => {
  const data = children;
  const latestBlogData = data.data;
  let style = {
    FeaturedBlogsTopContainer: data?.custom_section_editable[0].style,
    LatestBolgTopHeading: data?.custom_section_editable[1],
    HeadContainer: data?.custom_section_editable[2].style,
    LineInner: data?.custom_section_editable[3].style,
    FeaturedBlogsSubContainer: data?.custom_section_editable[4].style,
    SubTopContainer: data?.custom_section_editable[5].style,
    TopSection: data?.custom_section_editable[6].style,
    TopSectionImageConatainer: data?.custom_section_editable[7].style,
    TopSectionImage: data?.custom_section_editable[8].style,
    TopSectionImgContent: data?.custom_section_editable[9].style,
    ImgContainerHeading: data?.custom_section_editable[10],
    ImgContainerContent: data?.custom_section_editable[11],
    MidSection: data?.custom_section_editable[12].style,
    MidSectionHeading: data?.custom_section_editable[13],
    MidSectionContent: data?.custom_section_editable[14],
    BottomSection: data?.custom_section_editable[15].style,
    LikeButton: data?.custom_section_editable[16].style,
    DisLikeButton: data?.custom_section_editable[17].style,
    CommentButton: data?.custom_section_editable[18].style,
    ShareButton: data?.custom_section_editable[19].style,
    CopyButton: data?.custom_section_editable[20].style,
    BottomMidSectionImgContainer: data?.custom_section_editable[21].style,
    BottomMidSectionImg: data?.custom_section_editable[22].style,
  }

  const dispatch = useDispatch();
  const history = useAppNavigate();

  let shareURL = window.location.host;

  const [shareUrl, copyToClipBoard, copySuccess] = useShare();

  // const imageArray = [bottomPic1, bottomPic2, bottomPic3, bottomPic4, bottomPic5, bottomPic6
  //   , bottomPic7, bottomPic8, bottomPic9, bottomPic10]

  const { blogsSuccess, featureData, subdomainuser, user } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      blogsSuccess: state.instituteblogs.getWesbiteBlogList.success,
      featureData: state.instituteblogs.getWesbiteBlogList.featureData
    }
  })

  const [selectEcomRouteForPreview] = useEcomSelectRoute();

  const handlePreviewBlog = (slug) => {
    // if (preview) {
    //   if (industry === "Ecommerce") {
    //     selectEcomRouteForPreview(`/blog-details/${slug}`, slug);
    //   }
    //   else if (industry === "Services") {
    //     // selectServiceRouteForPreview(`/blog-details/${slug}`, slug);
    //   }
    // } else {
    //   history(`/blog-details/${slug}`);
    // }


    history(`/blog-details/${slug}`);
  }

  useEffect(() => {
    if (copySuccess) {
      dispatch(showToast("Copied Successfully!"));
    }
  }, [copySuccess, dispatch])

  // const handleLikeButton = (id) => {
  //   let userID = AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id
  //   dispatch(likeBlogData(userID, id, true));
  // }

  // const handleUnLikeButton = (id) => {
  //   let userID = AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id
  //   dispatch(unlikeBlogData(userID, id, true));
  // }

  return (
    <>
      <FeaturedBlogsTopContainer item={style.FeaturedBlogsTopContainer}>
        <Text tagType={style.LatestBolgTopHeading.tagType}
          style={style?.LatestBolgTopHeading.style}
          text={style?.LatestBolgTopHeading.text} />
        <HeadContainer item={style?.HeadContainer}>
          <LineInner item={style?.LineInner}></LineInner>
        </HeadContainer>
      </FeaturedBlogsTopContainer>
      <FeaturedBlogsSubContainer item={style.FeaturedBlogsSubContainer}>
        {
          latestBlogData && latestBlogData?.length > 0 ?
            latestBlogData.map((data, index) => {
              return (
                <SubTopContainer item={style.SubTopContainer} key={index}>
                  <TopSection item={style.TopSection} onClick={() => handlePreviewBlog(data?.url_slug)}>
                    <TopSectionImageConatainer item={style.TopSectionImageConatainer}>
                      <ImageElement src={data?.blog_image?.src} style={style.TopSectionImage} />
                    </TopSectionImageConatainer>
                    <TopSectionImgContent item={style.TopSectionImgContent}>
                      <Text tagType={style.ImgContainerHeading.tagType}
                        style={style.ImgContainerHeading.style}
                        text={data.authotData && data.authotData?.length > 0 ? data.authotData[0]?.name : ""} />
                      <Text tagType={style.ImgContainerContent.tagType}
                        style={style.ImgContainerContent.style}
                        text={data?.authotData && data?.authotData?.length > 0 ? data?.authotData[0]?.description : ""} />
                    </TopSectionImgContent>
                  </TopSection>
                  <MidSection item={style.MidSection} onClick={() => handlePreviewBlog(data?.url_slug)}>
                    <Text tagType={style.MidSectionHeading.tagType}
                      style={style.MidSectionHeading.style}
                      text={data?.title} />
                    <Text tagType={style.MidSectionContent.tagType}
                      style={style.MidSectionContent.style}
                      dangerouslySetInnerHTML={{
                        __html:
                          data.content?.length > 700 ?
                            `${data.content.slice(0, 700)}... ` : data.content,
                      }}
                    />
                  </MidSection>
                  <BottomSection item={style.BottomSection}
                    itemLike={style.LikeButton}
                    itemDisLike={style.DisLikeButton}
                    itemComment={style.CommentButton}
                    itemShare={style.ShareButton}
                    itemCopy={style.CopyButton}>
                    {
                      // <LikeButton className="likeButton"/>
                      // <DisLikeButton className="dislikeButton" />
                      // <CommentButton className="commontButton" />
                    }
                    <ShareButton className="shareButton" />
                    <CopyButton className="copyButton" onClick={() => copyToClipBoard()} />
                  </BottomSection>
                </SubTopContainer>
              )
            })
            :
            <SubBottomContainer item={style.SubTopContainer}>
              <TopSection item={style.TopSection}>
                <TopSectionImageConatainer item={style.TopSectionImageConatainer}>
                  {/* <Image src={FeaturedBlogsTopImg} alt="Profile Img" /> */}
                  <ImageElement src={data.data[0].image} style={style.TopSectionImage} />
                </TopSectionImageConatainer>
                <TopSectionImgContent item={style.TopSectionImgContent}>
                  <Text tagType={style.ImgContainerHeading.tagType}
                    style={style.ImgContainerHeading.style}
                    text={style.ImgContainerHeading.text} />
                  <Text tagType={style.ImgContainerContent.tagType}
                    style={style.ImgContainerContent.style}
                    text={style.ImgContainerContent.text} />
                </TopSectionImgContent>
              </TopSection>
              <MidSection item={style.MidSection}>
                <Text tagType={style.MidSectionHeading.tagType}
                  style={style.MidSectionHeading.style}
                  text={style.MidSectionHeading.text} />
                {/* <MidSectionHeading>Should I go for HealthifyMe to lose weight?</MidSectionHeading> */}
                <BottomMidSectionImgContainer item={style.BottomMidSectionImgContainer}>
                  {/* <ImageElement src={data.data[1].image} style={style.BottomMidSectionImg} />
                 <Image src={FeaturedBlogsBottomImg} alt="FeaturedBlogsBottomImg" /> */}
                </BottomMidSectionImgContainer>
              </MidSection>
              <BottomSection
                item={style.BottomSection}
                itemShare={style.ShareButton}
                itemCopy={style.CopyButton}
              >
                {
                  // <LikeButton className="likeButton" />
                  // <DisLikeButton className="dislikeButton" />
                  // <CommentButton className="commontButton" />
                }
                <ShareButton className="shareButton">
                  <SharePopUp
                    HideText={true}
                    shareUrl={`${shareURL}/blog/${data?.url_slug}`}
                    textName={"Blog"}
                    shareBtnClass="button btn-sm btn-container primary w-600 "
                    shareiconclass="i-s primary shareBtn"
                  />
                </ShareButton>
                <CopyButton className="copyButton" />
              </BottomSection>
            </SubBottomContainer>
        }
      </FeaturedBlogsSubContainer>
    </>
  )
}

export default BlogHomeTheme4