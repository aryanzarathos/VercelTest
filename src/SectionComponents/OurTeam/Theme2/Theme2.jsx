import React from 'react'
import { ImgContainer, OurTeamImgContainerFirst, TeamAboutSection } from './OurTeamTheme2.style';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import { dummyUserImg2 } from '@/Constant/constants';

const OurTeamTheme2Card = ({ item, style }) => {
  return (
    <>

      <OurTeamImgContainerFirst itemProp={style.OurTeamImgContainerFirst}>
        <ImgContainer itemProp={style.ImgContainerSecond}>
          <ImageElement src={item.profileurl} style={style.ImageStyle} defaultImage={dummyUserImg2} />
        </ImgContainer>
        <TeamAboutSection itemProp={style.TeamAboutSection}>
          <Text text={item.designation} tagType={style.Text.tagType} style={style.Text.style} />
          <Text text={item.fullname} tagType={style.Text1.tagType} style={style.Text1.style} />
          <Text dangerouslySetInnerHTML={{
            __html:
              item.description?.length > 180 ?
                `${item.description.slice(0, 180)}... 
                    `: item.description,
          }} tagType={style.Text2.tagType} style={style.Text2.style} />
        </TeamAboutSection>
      </OurTeamImgContainerFirst>

    </>
  )
}

export default OurTeamTheme2Card