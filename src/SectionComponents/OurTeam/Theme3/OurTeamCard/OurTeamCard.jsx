import React from 'react'
import { ImgContainerSecond, OurTeamImgContainerSecond, TeamAboutSectionSecond } from './OurTeamCard.style'
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement'
import Text from '../../../../SectionsLayout/Elements/TextElement/Text'
import { dummyUserImg2 } from '@/Constant/constants'
const OurTeamCard = ({ style, item }) => {
    return (
        <>
            <OurTeamImgContainerSecond item={style.OurTeamImgContainerSecond}>
                <ImgContainerSecond item={style.ImgContainerSecond}>
                    <ImageElement src={item?.profileurl} style={style.ImageStyle} defaultImage={dummyUserImg2} />
                </ImgContainerSecond>
                <TeamAboutSectionSecond item={style.TeamAboutSectionSecond}>
                    <Text text={item?.designation} tagType={style.Text.tagType} style={style.Text.style} />
                    <Text text={item?.fullname} tagType={style.Text1.tagType} style={style.Text1.style} />
                    <Text dangerouslySetInnerHTML={{
                        __html:
                            item?.description?.length > 180 ?
                                `${item?.description.slice(0, 180)}... 
                    `: item?.description,
                    }} tagType={style.Text2.tagType} style={style.Text2.style} />
                </TeamAboutSectionSecond>
            </OurTeamImgContainerSecond>

        </>
    )
}

export default OurTeamCard
