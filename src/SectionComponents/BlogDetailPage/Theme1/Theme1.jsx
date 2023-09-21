import React from 'react'
import BlogViewImg from '../../../Assets/SectionComponent/Images/BolgCategories/BlogViewImg.png'
import FaceBookIcon from '../../../Assets/SectionComponent/Images/BolgCategories/FaceBookIcon.svg'
import TwiterIcon from '../../../Assets/SectionComponent/Images/BolgCategories/TwiterIcon.svg'
import MailIcon from '../../../Assets/SectionComponent/Images/BolgCategories/MailIcon.svg'
import InstagramIcon from '../../../Assets/SectionComponent/Images/BolgCategories/InstagramIcon.svg'
import Image from 'next/image'
import { BlogViewHeadContainer, BlogViewTopContainer, BlogviewSubContainer, ImgContainerContent, ImgContainerHeading, InnerContainer, InnerTopContent, InnerTopHeading, SubContainerContent, SubImgContainer, TopSection, TopSectionIcons, TopSectionImageConatainer, TopSectionImgContent } from './BlogDetailPageTheme1.style'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement'
import useShare from '@/CustomHooks/useShare'
import { useRouter } from 'next/router'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import default1 from '../../../Assets/images/default1.png'
const BlogCategoriesTheme8 = ({ children }) => {
    const data = children;
    const DetailData = AppLinkUrl.isEditor() ?
        {
            _id: '64ca06efc3cec1054edc997b',
            status: 'publish',
            featured_Blog: false,
            seo_meta_keyword: [],
            totalLike: 0,
            isHide: false,
            uncategorized: false,
            isDeleted: false,
            business: '64c5529b18c35506c9d46344',
            user: '64c4fc21b8849e081d1b9cb7',
            title: 'Real talk from a UX researcher',
            content: '<p>Hi there! It’s been more than a year since I joined Google as a Software Engineer. A lot has happened over the last year. So the Therefore, here’s another story with snippets of my journey so far at Google.<br></p><p>Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you &amp; a small Noogler team work on a project using Google’s tools, processes and methodologies.<br><br>After getting my Noogler hat &amp; the successful completion of GTI, I joined Google Cloud organisation and my onboarding was virtual. It took me some time to get acquainted with the cool “Google infrastructure” and honestly the first few weeks were quite overwhelming. Nevertheless, my team mates were supportive and helped me settle in. I really appreciate how everyone here respects Google’s values.<br><br>If you’re in the same boat, give yourself some time and things will start making sense. You’ll get sufficient time for onboarding and everyone around you will be happy to help! Don’t hesitate to ask.<br><br>Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you &amp; a small Noogler team work on a project using Google’s tools, processes and methodologies.<br><br>After getting my Noogler hat &amp; the successful completion of GTI, I joined Google Cloud organisation and my onboarding was virtual. It took me some time to get acquainted with the cool “Google infrastructure” and honestly the first few weeks were quite overwhelming. Nevertheless, my team mates were supportive and helped me settle in. I really appreciate how everyone here respects Google’s values.<br><br>If you’re in the same boat, give yourself some time and things will start making sense. You’ll get sufficient time for onboarding and everyone around you will be happy to help! Don’t hesitate to ask.<br><br>Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you &amp; a small Noogler team work on a project using Google’s tools, processes and methodologies.<br></p>',
            blog_image: {
                isDeleted: false,
                _id: '64ca06ee038f6b08099548ae',
                business: '64c5529b18c35506c9d46344',
                owner: '64c4fc21b8849e081d1b9cb7',
                src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxfHxSZWFsJTIwdGFsayUyMGZyb20lMjBhJTIwVVglMjByZXNlYXJjaGVyfGVufDB8fHx8MTY5MDk2MTY0Mnww&ixlib=rb-4.0.3&q=80&w=1080',
                title: null,
                desc: '',
                alt: 'woman placing sticky notes on wall',
                size: 0,
                key: '',
                type: 'img',
                createdAt: '2023-08-02T07:34:06.848Z',
                updatedAt: '2023-08-02T07:34:06.848Z',
                __v: 0
            },
            seo_meta_title: 'Real talk from a UX researcher',
            seo_meta_desc: '',
            url_slug: 'real-talk-from-a-ux-researcher',
            author: '64ca06cdc3cec1054edc996a',
            category_id: '64ca0649c3cec1054edc98c7',
            publish_date: '2023-08-02T07:34:07.996Z',
            createdAt: '2023-08-02T07:34:07.549Z',
            updatedAt: '2023-08-02T07:34:07.549Z',
            __v: 0,
            category: [
                {
                    _id: '64ca0649c3cec1054edc98c7',
                    isHide: false,
                    isDeleted: false,
                    business: '64c5529b18c35506c9d46344',
                    owner: '64c4fc21b8849e081d1b9cb7',
                    category_title: 'Who killed Jessica?',
                    category_desc: 'A wide range of reviews & blogs of video games from around the world.  Also indulging all',
                    category_cover_image: {
                        isDeleted: false,
                        _id: '64ca0647038f6b08099548a8',
                        business: '64c5529b18c35506c9d46344',
                        owner: '64c4fc21b8849e081d1b9cb7',
                        src: 'https://images.unsplash.com/photo-1519246309905-94879c224c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHx3aG8lMjBraWxsZWQlMjBqZXNpY2F8ZW58MHx8fHwxNjkwOTYxNDc0fDA&ixlib=rb-4.0.3&q=80&w=1080',
                        title: null,
                        desc: '',
                        alt: 'two red and blue LED signages',
                        size: 0,
                        key: '',
                        type: 'img',
                        createdAt: '2023-08-02T07:31:19.726Z',
                        updatedAt: '2023-08-02T07:31:19.726Z',
                        __v: 0
                    },
                    url_slug: 'who-killed-jessica-',
                    createdAt: '2023-08-02T07:31:21.130Z',
                    updatedAt: '2023-08-02T07:31:21.130Z',
                    __v: 0
                }
            ],
            liked: [],
            disLiked: [],
            authotData: [
                {
                    _id: '64ca06cdc3cec1054edc996a',
                    isDeleted: false,
                    business: '64c5529b18c35506c9d46344',
                    name: 'Sakshi Pandey',
                    description: 'Manager at Amazon (company)',
                    createdAt: '2023-08-02T07:33:33.211Z',
                    updatedAt: '2023-08-02T07:33:33.211Z',
                    __v: 0
                }
            ]
        }
        : data.data[0];

    const router = useRouter();
    const blogSlug = router.query;

    let style = {
        BlogViewHeadContainer: data?.custom_section_editable[0].style,
        InnerContainer: data?.custom_section_editable[1].style,
        InnerTopHeading: data?.custom_section_editable[2],
        InnerTopContent: data?.custom_section_editable[3],
        BlogViewTopContainer: data?.custom_section_editable[4].style,
        TopSection: data?.custom_section_editable[5].style,
        TopSectionImageConatainer: data?.custom_section_editable[6].style,
        TopSectionImage: data?.custom_section_editable[7].style,
        TopSectionImgContent: data?.custom_section_editable[8].style,
        ImgContainerHeading: data?.custom_section_editable[9],
        ImgContainerContent: data?.custom_section_editable[10],
        BlogviewSubContainer: data.custom_section_editable[11].style,
        SubContainerContent: data.custom_section_editable[12],
        SubImgContainer: data.custom_section_editable[13].style,
        SubImgContainerImage: data.custom_section_editable[14].style,
        SubContainerCont: data.custom_section_editable[15],
    }

    return (
        <>
            <BlogViewHeadContainer item={style.BlogViewHeadContainer}>
                <InnerContainer item={style.InnerContainer}>
                    <Text tagType={style.InnerTopHeading.tagType}
                        style={style.InnerTopHeading.style}
                        text={DetailData?.title} />
                    <Text tagType={style.InnerTopContent.tagType}
                        style={style.InnerTopContent.style}
                        text={DetailData && DetailData.authotData && DetailData.authotData.length > 0 ? `by ${DetailData.authotData[0]?.name}` : ""} />
                </InnerContainer>
            </BlogViewHeadContainer>
            <>
                <BlogViewTopContainer item={style.BlogViewTopContainer} >
                    <TopSection item={style.TopSection}>
                        <TopSectionImageConatainer item={style.TopSectionImageConatainer}>
                            <ImageElement 
                            src={DetailData?.blog_image?.src} 
                            alt={DetailData?.blog_image?.alt}
                            style={style?.TopSectionImage}
                            defaultImage={default1.src}
                              />
                        </TopSectionImageConatainer>
                        <TopSectionImgContent item={style.TopSectionImgContent}>
                            <Text tagType={style.ImgContainerHeading.tagType}
                                style={style.ImgContainerHeading.style}
                                text={DetailData && DetailData?.authotData && DetailData?.authotData?.length > 0 ? `${DetailData.authotData[0]?.name}` : ""}
                            />
                            <Text tagType={style.ImgContainerContent.tagType}
                                style={style.ImgContainerContent.style}
                                text={DetailData && DetailData?.authotData && DetailData?.authotData?.length > 0 ? `${DetailData?.authotData[0]?.description}` : ""}
                            />
                        </TopSectionImgContent>
                    </TopSection>

                </BlogViewTopContainer>
                <BlogviewSubContainer item={style.BlogviewSubContainer}>
                    <Text tagType={style.SubContainerContent.tagType}
                        style={style.SubContainerContent.style}
                        dangerouslySetInnerHTML={{
                            __html:
                                DetailData && DetailData?.content,
                        }}
                    />
                    {/* 
                        <SubContainerContent>
                            Hi there! It’s been more than a year since I joined Google as a Software Engineer. A lot has happened over the last year. So the Therefore, here’s another story with snippets of my journey so far at Google.
                        </SubContainerContent> 
                        <SubContainerContent>
                            Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you & a small Noogler team work on a project using Google’s tools, processes and methodologies.

                            After getting my Noogler hat & the successful completion of GTI, I joined Google Cloud organisation and my onboarding was virtual. It took me some time to get acquainted with the cool “Google infrastructure” and honestly the first few weeks were quite overwhelming. Nevertheless, my team mates were supportive and helped me settle in. I really appreciate how everyone here respects Google’s values.

                            If you’re in the same boat, give yourself some time and things will start making sense. You’ll get sufficient time for onboarding and everyone around you will be happy to help! Don’t hesitate to ask.

                            Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you & a small Noogler team work on a project using Google’s tools, processes and methodologies.

                            After getting my Noogler hat & the successful completion of GTI, I joined Google Cloud organisation and my onboarding was virtual. It took me some time to get acquainted with the cool “Google infrastructure” and honestly the first few weeks were quite overwhelming. Nevertheless, my team mates were supportive and helped me settle in. I really appreciate how everyone here respects Google’s values.

                            If you’re in the same boat, give yourself some time and things will start making sense. You’ll get sufficient time for onboarding and everyone around you will be happy to help! Don’t hesitate to ask.

                            Well, it all starts with a 3-week Google Technical Immersion(GTI) program. It’s the very first thing every new hire goes through before working with their actual team. All the new hires in APAC region fly to Singapore for an exciting 3 weeks event. But, it has been made virtual for quite some time now, courtesy COVID. Here, you & a small Noogler team work on a project using Google’s tools, processes and methodologies.

                        </SubContainerContent> 
                    */}
                </BlogviewSubContainer>
            </>
        </>
    )
}

export default BlogCategoriesTheme8