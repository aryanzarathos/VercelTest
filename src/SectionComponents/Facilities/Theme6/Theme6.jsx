import React, { useEffect, useState } from 'react'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import { FacilitiesWrapper, FacilitiesWrap, FacilitiesImgWrap, FacilitiesDetailsWrap, FacilityMainWrapper } from './Theme6.style';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { dummyImg } from '@/Constant/constants';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { useSelector } from 'react-redux';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const Theme6 = ({ children }) => {

    const data = children;
    const list = useSelector((state) => state.services.list.data);

    const [ListData, setListData] = useState([]);

    const style = {
        FacilityMainWrapper: data.custom_section_editable[0].style,
        FacilitiesWrapper: data.custom_section_editable[1].style,
        FacilitiesWrap: data.custom_section_editable[2].style,
        FacilitiesImgWrap: data.custom_section_editable[3].style,
        ImgStyle: data.custom_section_editable[4].style,
        FacilitiesDetailsWrap: data.custom_section_editable[5].style,
        FacilitiesCount: data.custom_section_editable[6],
        FacilitiesHeading: data.custom_section_editable[7],
        FacilitiesDesc: data.custom_section_editable[8],
        FacilitiesWrapperStyle2: data.custom_section_editable[9].style,
        ReadMorebbtn: data.custom_section_editable[10],
        FacilitiesData: data.data,
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
    }, [data])

    return (
        <MediaGallery showOnlyTab={false} sectionName={"ManageFacilities"} manageText={"Manage Facilities"} arrayofImages={false} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data} >
            {
                AppLinkUrl?.isEditor() ?
                    ListData && ListData?.length ?
                        <React.Fragment>
                            <FacilityMainWrapper item={style.FacilityMainWrapper}>
                                {
                                    ListData?.map((value, key) => {
                                        return (
                                            <FacilitiesWrapper key={key} item={style.FacilitiesWrapper}
                                                item2={style.FacilitiesWrapperStyle2}
                                            >
                                                <FacilitiesWrap item={style.FacilitiesWrap} className='facilitiesWrap'>
                                                    <FacilitiesImgWrap item={style.FacilitiesImgWrap}>
                                                        <ImageElement defaultImage={dummyImg} src={value.thumbnail} style={style.ImgStyle} />
                                                    </FacilitiesImgWrap>
                                                    <FacilitiesDetailsWrap item={style.FacilitiesDetailsWrap}>
                                                        <Text
                                                            tagType={style.FacilitiesCount.tagType}
                                                            style={style.FacilitiesCount.style}
                                                            text={key < 9 ? `0${key + 1}` : key + 1}
                                                        />
                                                        <Text
                                                            tagType={style.FacilitiesHeading.tagType}
                                                            style={style.FacilitiesHeading.style}
                                                            text={value.title}
                                                        />
                                                        <Text
                                                            // dangerouslySetInnerHTML={{
                                                            //     __html:
                                                            //         value.details?.length > 180 ?
                                                            //             `${value.details.slice(0, 180)}... 
                                                            // `: value.details,
                                                            // }}
                                                            tagType={style.FacilitiesDesc.tagType}
                                                            style={style.FacilitiesDesc.style}
                                                            text={value.details}
                                                        />
                                                        {/* <Button
                                      style={style.ReadMorebbtn.style}
                                  /> */}
                                                    </FacilitiesDetailsWrap>
                                                </FacilitiesWrap>
                                            </FacilitiesWrapper>
                                        )
                                    })
                                }
                            </FacilityMainWrapper>

                        </React.Fragment>
                        :
                        <RecordNotFound />
                    :
                    data?.data && data?.data?.length ?
                        <React.Fragment>
                            <FacilityMainWrapper item={style.FacilityMainWrapper}>
                                {
                                    data?.data?.map((value, key) => {
                                        return (
                                            <FacilitiesWrapper key={key} item={style.FacilitiesWrapper}
                                                item2={style.FacilitiesWrapperStyle2}
                                            >
                                                <FacilitiesWrap item={style.FacilitiesWrap} className='facilitiesWrap'>
                                                    <FacilitiesImgWrap item={style.FacilitiesImgWrap}>
                                                        <ImageElement defaultImage={dummyImg} src={value.thumbnail} style={style.ImgStyle} />
                                                    </FacilitiesImgWrap>
                                                    <FacilitiesDetailsWrap item={style.FacilitiesDetailsWrap}>
                                                        <Text
                                                            tagType={style.FacilitiesCount.tagType}
                                                            style={style.FacilitiesCount.style}
                                                            text={key < 9 ? `0${key + 1}` : key + 1}
                                                        />
                                                        <Text
                                                            tagType={style.FacilitiesHeading.tagType}
                                                            style={style.FacilitiesHeading.style}
                                                            text={value.title}
                                                        />
                                                        <Text
                                                            // dangerouslySetInnerHTML={{
                                                            //     __html:
                                                            //         value.details?.length > 180 ?
                                                            //             `${value.details.slice(0, 180)}... 
                                                            // `: value.details,
                                                            // }}
                                                            tagType={style.FacilitiesDesc.tagType}
                                                            style={style.FacilitiesDesc.style}
                                                            text={value.details}
                                                        />
                                                        {/* <Button
                          style={style.ReadMorebbtn.style}
                      /> */}
                                                    </FacilitiesDetailsWrap>
                                                </FacilitiesWrap>
                                            </FacilitiesWrapper>
                                        )
                                    })
                                }
                            </FacilityMainWrapper>

                        </React.Fragment>
                        :
                        <RecordNotFound />
            }

        </MediaGallery>

    )
}

export default Theme6
