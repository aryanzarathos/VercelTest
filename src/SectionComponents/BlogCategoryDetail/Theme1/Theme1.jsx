import React, { useRef } from "react";
import { BlogCard, BlogContent, Button, MainContent, MainImage, BlogCategoryDetailContainer, HeaderBlogGridWrap, ImageContainer, TextWrap } from "./BlogCategoryDetail.style";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import ImageDummy from '../../../Assets/images/img/caring.png'
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const BlogCategoryDetail = ({ children }) => {

  const navigate = useAppNavigate();

  const data = children
  const BlogData =AppLinkUrl.isEditor()?
  [
    {
      _id: '64cbd431f6943e05c9adefba',
      isHide: false,
      isDeleted: false,
      business: '64cb4d9ae8581608055eed9e',
      owner: '64cb4d50e8581608055eed91',
      category_title: 'How to play suicide squad at home?',
      category_desc: 'A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging all ..',
      category_cover_image: {
        isDeleted: false,
        _id: '64cbd449a4ac90087bdb29d2',
        business: '64cb4d9ae8581608055eed9e',
        owner: '64cb4d50e8581608055eed91',
        src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxnYW1lfGVufDB8fHx8MTY5MTA3OTc0OXww&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Check out more about this mini computer at https://commodorepetmini.com\n\nThis is a glamour shot of the Commodore PET Mini, a DIY 3D-Printing project to build your very own, functional and cute Commodore PET Mini replica, probably one of the cutest retro-computers ever!',
        desc: '',
        alt: 'vintage gray game console and joystick',
        size: 0,
        key: '',
        type: 'img',
        createdAt: '2023-08-03T16:22:33.021Z',
        updatedAt: '2023-08-03T16:22:33.021Z',
        __v: 0
      },
      url_slug: 'how-to-play-suicide-squad-at-home-',
      createdAt: '2023-08-03T16:22:09.930Z',
      updatedAt: '2023-08-03T16:22:33.894Z',
      __v: 0,
      blogData: [
        {
          _id: '64cb4da3c3cec1054edca48a',
          status: 'publish',
          featured_Blog: true,
          seo_meta_keyword: [],
          totalLike: 0,
          isHide: false,
          uncategorized: false,
          isDeleted: false,
          business: '64cb4d9ae8581608055eed9e',
          user: '64cb4d50e8581608055eed91',
          title: 'Unleash Your Style: Uncover Unique Fashion at Loskra',
          content: '<p>Express your individuality with Loskra\'s distinctive clothing options.</p>',
          blog_image: {
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHxGYXNoaW9uJTIwdGlwcyUyMGFuZCUyMHRyZW5kc3xlbnwwfHx8fDE2OTA5NzQxMDB8MA&ixlib=rb-4.0.3&q=80&w=1080'
          },
          seo_meta_title: 'Unleash Your Style: Uncover Unique Fashion at Loskra',
          seo_meta_desc: '',
          url_slug: 'Unleash-Your-Style--Uncover-Unique-Fashion-at-Loskra',
          publish_date: '2023-08-03T16:24:54.736Z',
          category_id: '64cbd431f6943e05c9adefba',
          author: '64cb4da3c3cec1054edca488',
          createdAt: '2023-08-03T06:48:03.388Z',
          updatedAt: '2023-08-03T16:24:54.632Z',
          __v: 0,
          AuthorData: [
            {
              _id: '64cb4da3c3cec1054edca488',
              isDeleted: false,
              business: '64cb4d9ae8581608055eed9e',
              name: 'Loskra',
              description: '',
              createdAt: '2023-08-03T06:48:03.385Z',
              updatedAt: '2023-08-03T16:24:54.640Z',
              __v: 0
            }
          ]
        }
      ]
    }
  ]: data.data
  let style = {
    HeaderBlogGridWrap: data.custom_section_editable[0].style,
    ImageContainer: data.custom_section_editable[1].style,
    ImageElementTop: data.custom_section_editable[2],
    TextTop: data.custom_section_editable[3],
    MainContent: data.custom_section_editable[4].style,
    BlogCard: data.custom_section_editable[5].style,
    MainImage: data.custom_section_editable[6].style,
    ImageElement: data.custom_section_editable[7].style,
    Text1: data.custom_section_editable[8],
    Text2: data.custom_section_editable[9],
    BlogBtn: data.custom_section_editable[10].style,
    BlockHeading: data.custom_section_editable[11],


  }
  return (
    <>
      <Text tagType={style.BlockHeading?.tagType} style={style.BlockHeading.style} text={BlogData[0]?.category_title} />
      <HeaderBlogGridWrap item={style.HeaderBlogGridWrap}>
        <ImageContainer item={style.ImageContainer}>
          <ImageElement style={style.ImageElementTop.style} src={BlogData[0]?.category_cover_image} alt={style.ImageElementTop.alt} />
        </ImageContainer>
        <TextWrap>
          <Text style={style.TextTop.style}>{BlogData[0]?.category_desc}</Text>
        </TextWrap>
      </HeaderBlogGridWrap>
      <MainContent item={style.MainContent}>
        {BlogData[0]?.blogData && BlogData[0]?.blogData?.length ?
          BlogData[0]?.blogData?.map((value, key) => {

            return (
              <BlogCard key={key} item={style.BlogCard}>
                <MainImage item={style.MainImage}>
                  <ImageElement style={style.ImageElement} src={value?.blog_image} alt={value.alt} />
                </MainImage>
                <BlogContent>
                  <Text tagType={style.Text1.tagType} style={style.Text1.style}>{value?.title}</Text>
                  <Text dangerouslySetInnerHTML={{
                    __html:
                      value?.content > 180 ?
                        `${value?.content.slice(0, 180)}... ` : value?.content,
                  }} tagType={style.Text2.tagType} style={style.Text2.style} />
                  <Button onClick={() => navigate(`/blog-details/${value?.url_slug}`)}
                    item={style.BlogBtn}>{"Read More"}</Button>
                </BlogContent>
              </BlogCard>
            );
          }):""}
      </MainContent>
    </>
  );
};

export default BlogCategoryDetail;
