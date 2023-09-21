import React, { useEffect, useState } from 'react';
import Quote from '../../../Assets/SectionComponent/Icons/Quotecollon.svg';
import { CardRt, Circle, ContainerTestimonial, ContainerWrapper, LeftContainer, NameContainer, RightContainer } from './TestimonialTheme6.style';
import Slider from '@/SectionCommon/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { useSelector } from 'react-redux';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';



const TestimonialTheme6 = ({ children }) => {

  const data = children;
  const testimonialList = useSelector((state) => state.testimonial.TestimonialList.data);

  const [TestimonialData, setListData] = useState([]);

  const style = {
    ContainerTestimonial: data.custom_section_editable[0]?.style,
    LeftContainer: data.custom_section_editable[1]?.style,
    Heading: data.custom_section_editable[2],
    BoldHeading: data.custom_section_editable[3],
    RightContainer: data.custom_section_editable[4].style,
    CardRt: data.custom_section_editable[5].style,
    Circle: data.custom_section_editable[6].style,
    Name: data.custom_section_editable[7],
    Organization: data.custom_section_editable[8],
    desc: data.custom_section_editable[9],
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
    <MediaGallery showGridOptions={false} manageText={"Manage Testimonial"} sectionName={"ManageTestimonial"} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data}>

      {AppLinkUrl?.isEditor() ?
        TestimonialData && TestimonialData?.length ?
          <ContainerTestimonial item={style.ContainerTestimonial}>
            <RightContainer item={style.RightContainer}>

              <Slider {...data}>
                {
                  TestimonialData.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <CardRt item={style.CardRt}>
                          <Circle item={style.Circle}>
                            <Quote />
                          </Circle>
                          <Text style={style.Name.style}>{item.name}</Text>
                          <Text style={style.Organization.style}>{item?.designation}</Text>
                          <Text style={style.desc.style}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }} />

                          {
                            // <Text style={style.desc.style}
                            //   dangerouslySetInnerHTML={{
                            //     __html:
                            //       item?.message?.length > 180 ?
                            //         `${item?.message?.slice(0, 180)}... 
                            //         `: item?.message,
                            //   }} />

                          }
                        </CardRt>
                      </SwiperSlide>
                    )
                  })
                }
              </Slider>

            </RightContainer>
          </ContainerTestimonial>
          :
          <RecordNotFound />
        :
        data?.data && data?.data?.length ?
          <ContainerTestimonial item={style.ContainerTestimonial}>
            <RightContainer item={style.RightContainer}>

              <Slider {...data}>
                {
                  data?.data.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <CardRt item={style.CardRt}>
                          <Circle item={style.Circle}>
                            <Quote />
                          </Circle>
                          <Text style={style.Name.style}>{item.name}</Text>
                          <Text style={style.Organization.style}>{item?.designation}</Text>
                          <Text style={style.desc.style}
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }} />

                          {
                            // <Text style={style.desc.style}
                            //   dangerouslySetInnerHTML={{
                            //     __html:
                            //       item?.message?.length > 180 ?
                            //         `${item?.message?.slice(0, 180)}... 
                            //         `: item?.message,
                            //   }} />

                          }
                        </CardRt>
                      </SwiperSlide>
                    )
                  })
                }
              </Slider>

            </RightContainer>
          </ContainerTestimonial>
          :
          <RecordNotFound />
      }
    </MediaGallery>
  )
}

export default TestimonialTheme6;