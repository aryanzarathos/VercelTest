import React, { useEffect, useRef, useState } from 'react'

import Quote from '../../../Assets/SectionComponent/Icons/Quotecollon.svg'
import Image from 'next/image'
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import { CardImgWrapper, CardWrap, CardWrapper, ContainerMain, NameWrapper, ProfileWrapper } from './TestimonialTheme9.style'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Slider from '@/SectionCommon/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import UsaEpay from '@/CommonComponents/UsaEpay/UsaEpay'
import { dummyUserImg2 } from '@/Constant/constants'
import MediaGallery from '@/CommonComponents/MediaGalleryEditor'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
import { useSelector } from 'react-redux'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'

const TestimonialTheme9 = ({ children }) => {

  const data = children;
  const testimonialList = useSelector((state) => state.testimonial.TestimonialList.data);

  const [TestimonialData, setListData] = useState([]);

  const tabsData = {
    tabs: ["Grid", "Text", "Button"],
    content:
    {
      Grid: {
        renderTab: "Grid",
      },

      Text: {
        renderTab: "Text",
      },
      Button: {
        renderTab: "Button",
      },

    }

  }
  const style = {
    ContainerMain: data?.custom_section_editable[0]?.style,
    HeadingPara: data?.custom_section_editable[1],
    Headingquery: data?.custom_section_editable[2],
    CardWrapper: data?.custom_section_editable[3]?.style,
    CardWrap: data?.custom_section_editable[4]?.style,
    ProfileWrapper: data?.custom_section_editable[5]?.style,
    CardImgWrapper: data?.custom_section_editable[6]?.style,
    ImageTestimonial: data?.custom_section_editable[7]?.style,
    NameWrapper: data?.custom_section_editable[8]?.style,
    NameHolder: data?.custom_section_editable[9],
    Organization: data?.custom_section_editable[10],
    Quote: data?.custom_section_editable[11]?.style,
    Desc: data?.custom_section_editable[12],
    GridCount: data.style,
    ObjectView: data?.style?.desktop?.objectView,
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
    <MediaGallery manageText={"Manage Testimonial"} sectionName={"ManageTestimonial"} tabs={tabsData} arrayofImages={true} fieldName={"productPicture"} fieldIdLabel={"_id"} data={data}>

      {AppLinkUrl?.isEditor() ?
        TestimonialData && TestimonialData?.length ?
          <ContainerMain item={style.ContainerMain}>

            {
              style?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                <CardWrapper item={style.CardWrapper} itemProp1={style.GridCount}>
                  {
                    TestimonialData.map((item, index) => {
                      return (
                        <CardWrap item={style.CardWrap} key={index}>
                          <ProfileWrapper item={style.ProfileWrapper} item1={style.Quote}>
                            <CardImgWrapper item={style.CardImgWrapper}>
                              <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                            </CardImgWrapper>
                            <NameWrapper item={style.NameWrapper}>
                              <Text tagType={style.NameHolder.tagType} style={style.NameHolder.style}>{item.name}</Text>
                              <Text tagType={style.Organization.tagType} style={style.Organization.style}>{item?.designation ? `- ${item?.designation}` : ''}</Text>
                            </NameWrapper>
                            <Quote className={"logo"} />
                          </ProfileWrapper>
                          {
                            //   <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                            //     __html:
                            //       item?.message?.length > 180 ?
                            //         `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //   }} ></Text>
                          }
                          <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                            __html: item?.message,
                          }} ></Text>
                        </CardWrap>
                      )
                    }
                    )}
                </CardWrapper> :
                <Slider {...data}>
                  {
                    TestimonialData.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <CardWrap item={style.CardWrap} key={index}>
                            <ProfileWrapper item={style.ProfileWrapper} item1={style.Quote}>
                              <CardImgWrapper item={style.CardImgWrapper}>
                                <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                              </CardImgWrapper>
                              <NameWrapper item={style.NameWrapper}>
                                <Text tagType={style.NameHolder.tagType} style={style.NameHolder.style}>{item.name}</Text>
                                <Text tagType={style.Organization.tagType} style={style.Organization.style}>{item?.designation ? `- ${item?.designation}` : ''}</Text>
                              </NameWrapper>
                              <Quote className={"logo"} />
                            </ProfileWrapper>
                            {

                              //     <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                              //       __html:
                              //         item?.message?.length > 180 ?
                              //           `${item?.message?.slice(0, 180)}... 
                              // `: item?.message,
                              //     }} ></Text>
                            }
                            <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }} ></Text>
                          </CardWrap>
                        </SwiperSlide>
                      )
                    }
                    )}
                </Slider>
            }

          </ContainerMain> :
          <RecordNotFound />
        :
        data?.data && data?.data?.length ?
          <ContainerMain item={style.ContainerMain}>

            {
              style?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                <CardWrapper item={style.CardWrapper} itemProp1={style.GridCount}>
                  {
                    data?.data.map((item, index) => {
                      return (
                        <CardWrap item={style.CardWrap} key={index}>
                          <ProfileWrapper item={style.ProfileWrapper} item1={style.Quote}>
                            <CardImgWrapper item={style.CardImgWrapper}>
                              <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                            </CardImgWrapper>
                            <NameWrapper item={style.NameWrapper}>
                              <Text tagType={style.NameHolder.tagType} style={style.NameHolder.style}>{item.name}</Text>
                              <Text tagType={style.Organization.tagType} style={style.Organization.style}>{item?.designation ? `- ${item?.designation}` : ''}</Text>
                            </NameWrapper>
                            <Quote className={"logo"} />
                          </ProfileWrapper>
                          {
                            //   <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                            //     __html:
                            //       item?.message?.length > 180 ?
                            //         `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //   }} ></Text>
                          }
                          <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                            __html: item?.message,
                          }} ></Text>
                        </CardWrap>
                      )
                    }
                    )}
                </CardWrapper> :
                <Slider {...data}>
                  {
                    data?.data.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <CardWrap item={style.CardWrap} key={index}>
                            <ProfileWrapper item={style.ProfileWrapper} item1={style.Quote}>
                              <CardImgWrapper item={style.CardImgWrapper}>
                                <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                              </CardImgWrapper>
                              <NameWrapper item={style.NameWrapper}>
                                <Text tagType={style.NameHolder.tagType} style={style.NameHolder.style}>{item.name}</Text>
                                <Text tagType={style.Organization.tagType} style={style.Organization.style}>{item?.designation ? `- ${item?.designation}` : ''}</Text>
                              </NameWrapper>
                              <Quote className={"logo"} />
                            </ProfileWrapper>
                            {

                              //     <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                              //       __html:
                              //         item?.message?.length > 180 ?
                              //           `${item?.message?.slice(0, 180)}... 
                              // `: item?.message,
                              //     }} ></Text>
                            }
                            <Text tagType={style.Desc.tagType} style={style.Desc.style} dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }} ></Text>
                          </CardWrap>
                        </SwiperSlide>
                      )
                    }
                    )}
                </Slider>
            }

          </ContainerMain> :
          <RecordNotFound />
      }
    </MediaGallery>
  )
}

export default TestimonialTheme9
