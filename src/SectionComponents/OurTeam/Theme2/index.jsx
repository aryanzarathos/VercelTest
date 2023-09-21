import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import { ContainerFirst, MainTeamWrapper, } from './OurTeamTheme2.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Slider from '../../../SectionCommon/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import OurTeamTheme2Card from './Theme2';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { useSelector } from 'react-redux';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';




const OurTeamTheme2 = ({ children }) => {

    const data = children;
    const faculties = useSelector((state) => state.manageFaculty.facultyList.data);

    const [ListData, setListData] = useState([]);

    const style = {
        MainTeamWrapper: children.custom_section_editable[0].style,
        ContainerFirst: children.custom_section_editable[1].style,
        OurTeamImgContainerFirst: children.custom_section_editable[2].style,
        ImgContainerSecond: children.custom_section_editable[3].style,
        ImageStyle: children.custom_section_editable[4].style,
        TeamAboutSection: children.custom_section_editable[5].style,
        Text: children.custom_section_editable[6],
        Text1: children.custom_section_editable[7],
        Text2: children.custom_section_editable[8],
        data: children.data,
        gridCount: children.style,
        objectView: children.style.desktop.objectView,
    }

    useEffect(() => {
        if (data.data && data.data?.length && faculties && faculties?.length) {
            let array = [];
            let newData = {};
            for (let index = 0; index < data.data.length; index++) {
                const element = data.data[index];
                newData = faculties?.find((item) => item?._id === element?._id)
                if (newData) {
                    array.push(newData);
                }
            }
            setListData([...array]);
        }
    }, [data])

    return (
        <MediaGallery manageText={"Manage Team"} sectionName={"ManageTeam"} fieldName={"profileurl"} fieldIdLabel={"_id"} data={children}>
            {AppLinkUrl?.isEditor() ?
                ListData && ListData?.length ?
                    <MainTeamWrapper item={style.MainTeamWrapper} >
                        {
                            style.objectView.toLowerCase() === "grid".toLowerCase() ?
                                <ContainerFirst item={style.ContainerFirst} gridCount={style.gridCount}>
                                    {
                                        ListData.map((item, i) => {
                                            return (
                                                <>

                                                    <OurTeamTheme2Card item={item} key={i} style={style} />
                                                </>
                                            )
                                        })
                                    }
                                </ContainerFirst> :

                                <Slider {...children}>
                                    {
                                        ListData.map((item, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <OurTeamTheme2Card item={item} style={style} />
                                                </SwiperSlide>

                                            )
                                        })
                                    }

                                </Slider>
                        }
                    </MainTeamWrapper>
                    :
                    <RecordNotFound text={'No Records Found...'} />
                :
                data?.data && data?.data?.length ?
                    <MainTeamWrapper item={style.MainTeamWrapper} >
                        {
                            style.objectView.toLowerCase() === "grid".toLowerCase() ?
                                <ContainerFirst item={style.ContainerFirst} gridCount={style.gridCount}>
                                    {
                                        data?.data.map((item, i) => {
                                            return (
                                                <>

                                                    <OurTeamTheme2Card item={item} key={i} style={style} />
                                                </>
                                            )
                                        })
                                    }
                                </ContainerFirst> :

                                <Slider {...children}>
                                    {
                                        data?.data.map((item, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <OurTeamTheme2Card item={item} style={style} />
                                                </SwiperSlide>

                                            )
                                        })
                                    }

                                </Slider>
                        }
                    </MainTeamWrapper>
                    :
                    <RecordNotFound text={'No Records Found...'} />
            }
        </MediaGallery>
    )
}

export default OurTeamTheme2