import React, { useEffect, useState } from 'react'
import Quote from '../../../Assets/SectionComponent/Images/Testimonial/InvertedQuote.svg'
// import { list } from '../data'
import Image from 'next/image';
import { AboutWraper, CardWrap, CardWrapper, ClientName, ContainerMain, Desc, HeadingWrapper, ImageWrapper, QuatationMark, QuatationMarkContainer } from './TestimonialTheme7.style';
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Slider from '../../../SectionCommon/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { MediaGalleryEditor } from '@/CommonComponents/MediaGalleryEditor/MediaGalleryStyle';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import { dummyUserImg2 } from '@/Constant/constants'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { useSelector } from 'react-redux';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const TestimonialTheme7 = ({ children }) => {

  const data = children;
  const testimonialList = useSelector((state) => state.testimonial.TestimonialList.data);

  const [ListData, setListData] = useState([]);

  let styles = {
    ContainerMain: data?.custom_section_editable[0]?.style,
    HeadingWrapper: data?.custom_section_editable[1]?.style,
    HeadingWrapperH1: data?.custom_section_editable[2]?.style,
    CardWrapper: data?.custom_section_editable[3]?.style,
    ImageWrapperImage: data?.custom_section_editable[4]?.style,
    CardWrap: data?.custom_section_editable[5]?.style,
    ImageWrapper: data?.custom_section_editable[6]?.style,
    AboutWraper: data?.custom_section_editable[7]?.style,
    AboutWraperH3: data?.custom_section_editable[8]?.style,
    AboutWraperP: data?.custom_section_editable[9]?.style,
    QuatationMarkContainer: data?.custom_section_editable[10]?.style,
    QuatationMarkContainerSvg: data?.custom_section_editable[11]?.style,
    postPara: data?.custom_section_editable[12],
    ObjectView: data?.style?.desktop?.objectView,
    GridCount: data?.style
  }

  useEffect(() => {
    if (data.data && data.data?.length && testimonialList && testimonialList?.length) {
      let array = [];
      let newData = {};
      for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        newData = testimonialList?.find((item) => item?._id === element?._id)
        if (newData) {
          array.push(newData);
        }
      }
      setListData([...array]);
    }
  }, [data])

  return (
    <>
      <MediaGallery manageText={"Manage Testimonial"} sectionName={"ManageTestimonial"} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data}>
        {AppLinkUrl?.isEditor() ?
          ListData && ListData?.length ?
            <ContainerMain item={styles?.ContainerMain}>

              {
                styles?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                  <CardWrapper item={styles?.CardWrapper} gridCount={styles?.GridCount}>
                    {ListData.map((item, index) => {
                      return (
                        <CardWrap key={index} item={styles?.CardWrap}>
                          <ImageWrapper item={styles?.ImageWrapper}>
                            <ImageElement src={item?.thumbnail} style={styles?.ImageWrapperImage} defaultImage={dummyUserImg2} />

                            <QuatationMarkContainer item={styles?.QuatationMarkContainer}
                              itemQuoteSvg={styles?.QuatationMarkContainerSvg}>
                              <Quote />
                            </QuatationMarkContainer>
                          </ImageWrapper>
                          <AboutWraper item={styles?.AboutWraper}>
                            <Text tagType={data?.custom_section_editable[8]?.tagType}
                              style={styles?.AboutWraperH3}
                              text={item?.name} />

                            <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP}
                              dangerouslySetInnerHTML={{
                                __html: item?.message
                              }} />

                            {
                              //     <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP}
                              //       dangerouslySetInnerHTML={{
                              //         __html:
                              //           item?.message?.length > 180 ?
                              //             `${item?.message?.slice(0, 180)}... 
                              // `: item?.message,
                              //       }} />

                            }
                            <Text text={item?.designation ? `- ${item?.designation}` : ''} style={styles.postPara?.style} tagType={styles.postPara?.tagType} />
                          </AboutWraper>
                        </CardWrap>

                      )
                    })
                    }
                  </CardWrapper>
                  :
                  <Slider {...data}>
                    {ListData.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>

                          <CardWrap item={styles?.CardWrap}>
                            <ImageWrapper item={styles?.ImageWrapper}>
                              <ImageElement src={item?.thumbnail} style={styles?.ImageWrapperImage} defaultImage={dummyUserImg2} />
                              {/* <Image src={item.image} alt="img" /> */}
                              <QuatationMarkContainer item={styles?.QuatationMarkContainer}
                                itemQuoteSvg={styles?.QuatationMarkContainerSvg}>
                                <Quote />
                              </QuatationMarkContainer>
                            </ImageWrapper>
                            <AboutWraper item={styles?.AboutWraper}>
                              <Text tagType={data?.custom_section_editable[8]?.tagType}
                                style={styles?.AboutWraperH3}
                                text={item?.name} />
                              <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP} dangerouslySetInnerHTML={{
                                __html: item?.message
                              }} />
                              {
                                // <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP} dangerouslySetInnerHTML={{
                                //   __html:
                                //     item?.message?.length > 180 ?
                                //       `${item?.message?.slice(0, 180)}... 
                                //   `: item?.message,
                                // }} />
                              }
                              <Text text={item?.designation} style={styles.postPara?.style} tagType={styles.postPara?.tagType} />
                            </AboutWraper>
                          </CardWrap>
                        </SwiperSlide>

                      )
                    })
                    }
                  </Slider>}
            </ContainerMain>
            :
            <RecordNotFound />
          : data?.data && data?.data?.length ?
            <ContainerMain item={styles?.ContainerMain}>

              {
                styles?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                  <CardWrapper item={styles?.CardWrapper} gridCount={styles?.GridCount}>
                    {data?.data.map((item, index) => {
                      return (
                        <CardWrap key={index} item={styles?.CardWrap}>
                          <ImageWrapper item={styles?.ImageWrapper}>
                            <ImageElement src={item?.thumbnail} style={styles?.ImageWrapperImage} defaultImage={dummyUserImg2} />

                            <QuatationMarkContainer item={styles?.QuatationMarkContainer}
                              itemQuoteSvg={styles?.QuatationMarkContainerSvg}>
                              <Quote />
                            </QuatationMarkContainer>
                          </ImageWrapper>
                          <AboutWraper item={styles?.AboutWraper}>
                            <Text tagType={data?.custom_section_editable[8]?.tagType}
                              style={styles?.AboutWraperH3}
                              text={item?.name} />

                            <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP}
                              dangerouslySetInnerHTML={{
                                __html: item?.message
                              }} />

                            {
                              //     <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP}
                              //       dangerouslySetInnerHTML={{
                              //         __html:
                              //           item?.message?.length > 180 ?
                              //             `${item?.message?.slice(0, 180)}... 
                              // `: item?.message,
                              //       }} />

                            }
                            <Text text={item?.designation ? `- ${item?.designation}` : ''} style={styles.postPara?.style} tagType={styles.postPara?.tagType} />
                          </AboutWraper>
                        </CardWrap>

                      )
                    })
                    }
                  </CardWrapper>
                  :
                  <Slider {...data}>
                    {data?.data.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>

                          <CardWrap item={styles?.CardWrap}>
                            <ImageWrapper item={styles?.ImageWrapper}>
                              <ImageElement src={item?.thumbnail} style={styles?.ImageWrapperImage} defaultImage={dummyUserImg2} />
                              {/* <Image src={item.image} alt="img" /> */}
                              <QuatationMarkContainer item={styles?.QuatationMarkContainer}
                                itemQuoteSvg={styles?.QuatationMarkContainerSvg}>
                                <Quote />
                              </QuatationMarkContainer>
                            </ImageWrapper>
                            <AboutWraper item={styles?.AboutWraper}>
                              <Text tagType={data?.custom_section_editable[8]?.tagType}
                                style={styles?.AboutWraperH3}
                                text={item?.name} />
                              <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP} dangerouslySetInnerHTML={{
                                __html: item?.message
                              }} />
                              {
                                // <Text tagType={data?.custom_section_editable[9]?.tagType} style={styles?.AboutWraperP} dangerouslySetInnerHTML={{
                                //   __html:
                                //     item?.message?.length > 180 ?
                                //       `${item?.message?.slice(0, 180)}... 
                                //   `: item?.message,
                                // }} />
                              }
                              <Text text={item?.designation} style={styles.postPara?.style} tagType={styles.postPara?.tagType} />
                            </AboutWraper>
                          </CardWrap>
                        </SwiperSlide>

                      )
                    })
                    }
                  </Slider>}
            </ContainerMain>
            :
            <RecordNotFound />
        }
      </MediaGallery>
    </>
  )
}

export default TestimonialTheme7
