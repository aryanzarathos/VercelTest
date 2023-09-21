import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../../../SectionCommon/Slider/Slider";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { FacilitiesWrapper, FacilitiesWrap, ImageWrap, ContentWrap } from './Theme7.style'
import Text from "../../../SectionsLayout/Elements/TextElement/Text";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import RightArrowSvg from '../../../Assets/SectionComponent/Icons/rightArrowSvg.svg'
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import RecordNotFound from "@/CommonComponents/RecordNotFound/RecordNotFound";
import { dummyImg } from "@/Constant/constants";
import { useSelector } from "react-redux";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const Theme7 = ({ children }) => {

    const data = children;
    const list = useSelector((state) => state.services.list.data);

    const [ListData, setListData] = useState([]);

    const style = {
        FacilitiesData: data.data,
        FacilitiesWrapper: data.custom_section_editable[0].style,
        ImageWrap: data.custom_section_editable[1].style,
        ImgStyle: data.custom_section_editable[2].style,
        headingPara: data.custom_section_editable[3],
        descPara: data.custom_section_editable[4],
        ReadMoreBtn: data.custom_section_editable[5],
        readMprePara: data.custom_section_editable[6],
        arrowSvg: data.custom_section_editable[7].style.desktop,
        FacilitiesWrap: data.custom_section_editable[8].style,
        arrowColor: data.sliderSetting.arrowColor,
        arrowBgcolor: data.sliderSetting.customNavigation.arrowBgcolor
    }

    useEffect(() => {
        if (data.data && data.data?.length && list && list?.length) {
            let array = [];
            let newData = {};
            for (let index = 0; index < data.data.length; index++) {
                const element = data.data[index];
                newData = list?.find((item) => item?._id === element?._id)
                if (newData) {
                    array.push(newData);
                }
            }
            setListData([...array]);
        }
    }, [data,list])

    return (
        <MediaGallery sectionName={"ManageFacilities"} manageText={"Manage Facilities"} arrayofImages={false} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data} >
           <React.Fragment>
            {
                AppLinkUrl?.isEditor()?
                ListData && ListData?.length ?
                <FacilitiesWrapper item={style.FacilitiesWrapper} arrowBgcolor={style.arrowBgcolor} arrowColor={style.arrowColor}>
                    <Slider {...data}>
                        {ListData.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <FacilitiesWrap item={style.FacilitiesWrap}>
                                        <ContentWrap>
                                            <ImageWrap item={style.ImageWrap}>
                                                <ImageElement
                                                    src={value.thumbnail}
                                                    style={style.ImgStyle}
                                                    defaultImage={dummyImg}
                                                />
                                            </ImageWrap>
                                            <Text
                                                tagType={style.headingPara.tagType}
                                                style={style.headingPara.style}
                                                text={value.title}
                                            />
                                            <Text 
                                            // dangerouslySetInnerHTML={{
                                            //     __html:
                                            //         value.details?.length > 180 ?
                                            //             `${value.details.slice(0, 180)}... 
                                            //                 `: value.details,
                                            // }}
                                            text={value.details}
                                             tagType={style.descPara.tagType}
                                                style={style.descPara.style} />
                                        </ContentWrap>
                                        {/* <Button style={style.ReadMoreBtn.style} showBoth={true} text={style.ReadMoreBtn.text} >
                                         
                                            <RightArrowSvg
                                                height={style.arrowSvg.height}
                                                width={style.arrowSvg.width}
                                                fill={style.arrowSvg.fill}
                                            />

                                        </Button> */}
                                    </FacilitiesWrap>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Slider>
                </FacilitiesWrapper>
                :
                <RecordNotFound />:
                data?.data && data?.data?.length ?
                <FacilitiesWrapper item={style.FacilitiesWrapper} arrowBgcolor={style.arrowBgcolor} arrowColor={style.arrowColor}>
                    <Slider {...data}>
                        {data?.data.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <FacilitiesWrap item={style.FacilitiesWrap}>
                                        <ContentWrap>
                                            <ImageWrap item={style.ImageWrap}>
                                                <ImageElement
                                                    src={value.thumbnail}
                                                    style={style.ImgStyle}
                                                    defaultImage={dummyImg}
                                                />
                                            </ImageWrap>
                                            <Text
                                                tagType={style.headingPara.tagType}
                                                style={style.headingPara.style}
                                                text={value.title}
                                            />
                                            <Text 
                                            // dangerouslySetInnerHTML={{
                                            //     __html:
                                            //         value.details?.length > 180 ?
                                            //             `${value.details.slice(0, 180)}... 
                                            //                 `: value.details,
                                            // }} 
                                            text={value.details}
                                            tagType={style.descPara.tagType}
                                                style={style.descPara.style} />
                                        </ContentWrap>
                                        {/* <Button style={style.ReadMoreBtn.style} showBoth={true} text={style.ReadMoreBtn.text} >
                                         
                                            <RightArrowSvg
                                                height={style.arrowSvg.height}
                                                width={style.arrowSvg.width}
                                                fill={style.arrowSvg.fill}
                                            />

                                        </Button> */}
                                    </FacilitiesWrap>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Slider>
                </FacilitiesWrapper>
                :
                <RecordNotFound />
            }
           </React.Fragment>
           

        </MediaGallery>
    )
}
export default Theme7