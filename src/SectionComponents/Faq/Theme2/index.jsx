import React, { useEffect, useState } from 'react'
// import { Container } from '../../../SectionCommon/Containers/Container.styled'
import faqdata from '../data.json'
import AeroImg from '../../../Assets/SectionComponent/Icons/faqArrowIcon.svg'

import { Description, FaqWrap, FaqWrapper, HeadingWrapper, MainConatainer, TitleWrapper, ToggleIcon } from './FaqTheme2.style'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import MediaGallery from '@/CommonComponents/MediaGalleryEditor'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
import { useSelector } from 'react-redux'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'

const FaqTheme2 = ({ children }) => {

    const data = children;

    const faqList = useSelector((state) => state.Faq.faqList.data);

    const [activeFaq, setActiveFaq] = useState(0);
    const [faqListData, setFaqListData] = useState([]);


    const clickHandle = (index) => {
        setActiveFaq(index === activeFaq ? null : index)
    }
    // const active = 0;

    let style = {
        MainConatainer: data?.custom_section_editable[0].style,
        FaqWrapper: data?.custom_section_editable[1].style,
        FaqWrap: data?.custom_section_editable[2].style,
        TitleWrapper: data?.custom_section_editable[3].style,
        TitleWrapperText: data?.custom_section_editable[4],
        AeroImg: data?.custom_section_editable[5].style,
        Description: data?.custom_section_editable[6].style,
        DescriptionText: data?.custom_section_editable[7],
    }

    useEffect(() => {
        if (data.data && data.data?.length && faqList && faqList?.length) {
            let array = [];
            let newData = {};
            for (let index = 0; index < data.data.length; index++) {
                const element = data.data[index];
                newData = faqList?.find((item) => item?._id === element?._id)
                if (newData) {
                    array.push(newData);
                }
            }
            setFaqListData([...array]);
        }
    }, [data])

    return (
        <MediaGallery sectionName={"ManageFaq"} manageText={"Manage Faq"} data={data} showSettings={false} showAltText={false}>
            {AppLinkUrl?.isEditor() ?
                faqListData && faqListData?.length ?
                    <MainConatainer item={style.MainConatainer}>
                        <FaqWrapper item={style?.FaqWrapper}>
                            {
                                faqListData.map((e, index) => {
                                    return (
                                        <FaqWrap key={index} item={style?.FaqWrap} >
                                            <TitleWrapper item={style?.TitleWrapper} onClick={() => { clickHandle(e._id) }}
                                                itemSvg={style?.AeroImg}>
                                                {/* <h1>{e.title}</h1> */}
                                                <Text tagType={style.TitleWrapperText.tagType}
                                                    style={style.TitleWrapperText.style}
                                                    text={e.title} />
                                                <AeroImg className={`${activeFaq === e._id && " rotate"} aero`} />
                                            </TitleWrapper>
                                            {
                                                <Description item={style.Description} className={activeFaq === e._id && 'show'}>
                                                    <Text tagType={style.DescriptionText.tagType}
                                                        style={style.DescriptionText.style}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                e.description,
                                                        }} />
                                                </Description>
                                            }
                                        </FaqWrap>
                                    )
                                })
                            }
                        </FaqWrapper>
                        {/* </Container> */}
                    </MainConatainer >
                    :
                    <RecordNotFound />
                :
                data?.data && data?.data?.length ?
                    <MainConatainer item={style.MainConatainer}>
                        <FaqWrapper item={style?.FaqWrapper}>
                            {
                                data?.data.map((e, index) => {
                                    return (
                                        <FaqWrap key={index} item={style?.FaqWrap} >
                                            <TitleWrapper item={style?.TitleWrapper} onClick={() => { clickHandle(e._id) }}
                                                itemSvg={style?.AeroImg}>
                                                {/* <h1>{e.title}</h1> */}
                                                <Text tagType={style.TitleWrapperText.tagType}
                                                    style={style.TitleWrapperText.style}
                                                    text={e.title} />
                                                <AeroImg className={`${activeFaq === e._id && " rotate"} aero`} />
                                            </TitleWrapper>
                                            {
                                                <Description item={style.Description} className={activeFaq === e._id && 'show'}>
                                                    <Text tagType={style.DescriptionText.tagType}
                                                        style={style.DescriptionText.style}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                e.description,
                                                        }} />
                                                </Description>
                                            }
                                        </FaqWrap>
                                    )
                                })
                            }
                        </FaqWrapper>
                        {/* </Container> */}
                    </MainConatainer >
                    :
                    <RecordNotFound />
            }

        </MediaGallery>
    )
}

export default FaqTheme2
