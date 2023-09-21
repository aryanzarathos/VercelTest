import React from 'react'
import blogcat1 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat1.png";
import blogcat2 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat2.png";
import blogcat3 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat3.png";
import blogcat4 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat4.png";
import Image from 'next/image';
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import { BlogMainWrapper, BlogCard, BlogContent, BlogImageWrap, MainContent } from './BolgCategoriesTheme9.style';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import Slider from '@/SectionCommon/Slider/Slider';
import { SwiperSlide } from "swiper/react";
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { dummyImg } from '@/Constant/constants';

const BlogCategoriesTheme9 = ({ children }) => {

    const data = children;
    const history = useAppNavigate();
    const style = {
        BlogMainWrapper: children?.custom_section_editable[0]?.style,
        MainContent: children?.custom_section_editable[1]?.style,
        BlogCard: children?.custom_section_editable[2]?.style,
        BlogImageWrap: children?.custom_section_editable[3]?.style,
        imageStyle: children?.custom_section_editable[4]?.style,
        BlogContent: children?.custom_section_editable[5]?.style,
        blogTitle: children?.custom_section_editable[6],
        blogDesc: children?.custom_section_editable[7],
        objectView: data.style.desktop.objectView,
        gridCount: data.style,
        BlogDatas: data.data,
    }

    const Redirect = (slug) => {
        history(`/blog-details/${slug}`);
    }
    console.log(style.objectView, "grid view")


    const DefaultImg = [blogcat1, blogcat2, blogcat3, blogcat4]
    return (
        <MediaGallery sectionName={"ManageBlogs"} manageText={"Manage Blog"} data={data} >
            {style.BlogDatas && style.BlogDatas?.length > 0 ?
                <BlogMainWrapper item={style.BlogMainWrapper}>
                    {style.objectView.toLowerCase() === "grid" ?
                        <MainContent item={style.MainContent} gridCount={style.gridCount}>
                            {
                                style.BlogDatas?.map((val, key) => {
                                    return (
                                        <BlogCard key={key} item={style.BlogCard} onClick={() => Redirect(val?.url_slug)} >
                                            <BlogImageWrap item={style.BlogImageWrap} >
                                                <ImageElement
                                                    src={val?.blog_image}
                                                    style={style.imageStyle}
                                                    defaultImage={dummyImg}
                                                />
                                            </BlogImageWrap>
                                            <BlogContent item={style.BlogContent} paraStyle={style.blogDesc.style}>
                                                <Text
                                                    tagType={style.blogTitle.tagType}
                                                    text={val.title}
                                                    style={style.blogTitle.style}
                                                />
                                                <Text className="blogDec" dangerouslySetInnerHTML={{
                                                    __html:
                                                        val?.content > 180 ?
                                                            `${val?.content.slice(0, 180)}... ` : val?.content,

                                                }} tagType={style.blogDesc.tagType} style={style.blogDesc.style} />
                                            </BlogContent>
                                        </BlogCard>
                                    )
                                })
                            }
                        </MainContent>
                        :
                        <Slider {...data}>
                            {style.BlogDatas.map((val, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <BlogCard key={key} item={style.BlogCard} onClick={() => Redirect(val?.url_slug)} >
                                            <BlogImageWrap item={style.BlogImageWrap} >
                                                <ImageElement
                                                    src={val?.blog_image}
                                                    style={style.imageStyle}
                                                    defaultImage={dummyImg}
                                                />
                                            </BlogImageWrap>
                                            <BlogContent item={style.BlogContent}>
                                                <Text
                                                    tagType={style.blogTitle.tagType}
                                                    text={val.title}
                                                    style={style.blogTitle.style}
                                                />
                                                <Text dangerouslySetInnerHTML={{
                                                    __html:
                                                        val?.content > 180 ?
                                                            `${val?.content.slice(0, 180)}... ` : val?.content,
                                                }} tagType={style.blogDesc.tagType} style={style.blogDesc.style} />
                                            </BlogContent>
                                        </BlogCard>
                                    </SwiperSlide>
                                )
                            })}
                        </Slider>
                    }
                </BlogMainWrapper>
                :
                <RecordNotFound />
            }

        </MediaGallery>
    )
}

export default BlogCategoriesTheme9
