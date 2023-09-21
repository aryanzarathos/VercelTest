import React, { useEffect, useState } from 'react'
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import { CardImgcontainer2, CardWrap, CardWrapper, ContainerMain, ProfileContainer2, TextWrap, Span } from './TestimonialTheme8.style';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Slider from '@/SectionCommon/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import { dummyUserImg2 } from '@/Constant/constants'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { useSelector } from 'react-redux';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';


const TestimonialTheme8 = ({ children }) => {

  const data = children;
  const testimonialList = useSelector((state) => state.testimonial.TestimonialList.data);

  const [TestimonialData, setListData] = useState([]);

  const style = {
    ContainerMain: data?.custom_section_editable[0]?.style,
    HeadingText: data?.custom_section_editable[1],
    CardWrapper: data?.custom_section_editable[2]?.style,
    CardWrap: data?.custom_section_editable[3]?.style,
    ProfileContainer: data?.custom_section_editable[4]?.style,
    CardImgcontainer: data?.custom_section_editable[5]?.style,
    ImageTestimonial: data?.custom_section_editable[6]?.style,
    TextWrap: data?.custom_section_editable[7]?.style,
    Name: data?.custom_section_editable[8]?.style,
    Organization: data?.custom_section_editable[9]?.style,
    Desc: data?.custom_section_editable[10]?.style,
    ObjectView: data?.style?.desktop?.objectView,
    GridCount: data.style,
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
    <MediaGallery manageText={"Manage Testimonial"} sectionName={"ManageTestimonial"} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data}>
      {AppLinkUrl?.isEditor() ?
        TestimonialData && TestimonialData?.length ?
          <ContainerMain item={style.ContainerMain}>
            {
              style?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                <CardWrapper item={style.CardWrapper} itemProp1={style.GridCount}>
                  {
                    TestimonialData.map((item, index) => (
                      <CardWrap item={style.CardWrap} key={index} >
                        <ProfileContainer2 item={style.ProfileContainer}>
                          <CardImgcontainer2 item={style.CardImgcontainer}>
                            <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                          </CardImgcontainer2>
                        </ProfileContainer2>
                        <TextWrap item={style.TextWrap}>
                          <Text style={style.Name}>{item.name}</Text>
                          {

                            //       <Text style={style.Organization}
                            //         dangerouslySetInnerHTML={{
                            //           __html:
                            //             item?.message?.length > 180 ?
                            //               `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //         }}
                            //       ></Text>
                          }
                          <Text style={style.Organization}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }}
                          ></Text>
                          <Text style={style.Desc}>{item?.designation ? `- ${item?.designation}` : ''} </Text>
                        </TextWrap>
                      </CardWrap>

                    ))
                  }
                </CardWrapper> :
                <Slider {...data}>{
                  TestimonialData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <CardWrap item={style.CardWrap} key={index} >
                        <ProfileContainer2 item={style.ProfileContainer}>
                          <CardImgcontainer2 item={style.CardImgcontainer}>
                            <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                          </CardImgcontainer2>
                        </ProfileContainer2>
                        <TextWrap item={style.TextWrap}>
                          <Text style={style.Name}>{item.name}</Text>
                          {

                            //         <Text style={style.Organization}
                            //           dangerouslySetInnerHTML={{
                            //             __html:
                            //               item?.message?.length > 180 ?
                            //                 `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //           }}
                            //         ></Text>
                          }
                          <Text style={style.Organization}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }}
                          ></Text>
                          <Text style={style.Desc}>{item?.designation ? `- ${item?.designation}` : ''} </Text>
                        </TextWrap>
                      </CardWrap>
                    </SwiperSlide>
                  ))}
                </Slider>
            }
          </ContainerMain>
          :
          <RecordNotFound />
        : data?.data && data?.data?.length ?
          <ContainerMain item={style.ContainerMain}>
            {
              style?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                <CardWrapper item={style.CardWrapper} itemProp1={style.GridCount}>
                  {
                    data?.data.map((item, index) => (
                      <CardWrap item={style.CardWrap} key={index} >
                        <ProfileContainer2 item={style.ProfileContainer}>
                          <CardImgcontainer2 item={style.CardImgcontainer}>
                            <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                          </CardImgcontainer2>
                        </ProfileContainer2>
                        <TextWrap item={style.TextWrap}>
                          <Text style={style.Name}>{item.name}</Text>
                          {

                            //       <Text style={style.Organization}
                            //         dangerouslySetInnerHTML={{
                            //           __html:
                            //             item?.message?.length > 180 ?
                            //               `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //         }}
                            //       ></Text>
                          }
                          <Text style={style.Organization}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }}
                          ></Text>
                          <Text style={style.Desc}>{item?.designation ? `- ${item?.designation}` : ''} </Text>
                        </TextWrap>
                      </CardWrap>

                    ))
                  }
                </CardWrapper> :
                <Slider {...data}>{
                  data?.data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <CardWrap item={style.CardWrap} key={index} >
                        <ProfileContainer2 item={style.ProfileContainer}>
                          <CardImgcontainer2 item={style.CardImgcontainer}>
                            <ImageElement style={style.ImageTestimonial} src={item.thumbnail} alt={item.alt} defaultImage={dummyUserImg2} />
                          </CardImgcontainer2>
                        </ProfileContainer2>
                        <TextWrap item={style.TextWrap}>
                          <Text style={style.Name}>{item.name}</Text>
                          {

                            //         <Text style={style.Organization}
                            //           dangerouslySetInnerHTML={{
                            //             __html:
                            //               item?.message?.length > 180 ?
                            //                 `${item?.message?.slice(0, 180)}... 
                            // `: item?.message,
                            //           }}
                            //         ></Text>
                          }
                          <Text style={style.Organization}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }}
                          ></Text>
                          <Text style={style.Desc}>{item?.designation ? `- ${item?.designation}` : ''} </Text>
                        </TextWrap>
                      </CardWrap>
                    </SwiperSlide>
                  ))}
                </Slider>
            }
          </ContainerMain>
          :
          <RecordNotFound />

      }

    </MediaGallery>

  )
}

export default TestimonialTheme8
