import React from 'react'
import PageNotFoundImg from "../../../Assets/SectionComponent/Images/PageNotFound/pageNotFound.png"
// import './pageNotFound.scss'
// import Image from 'next/image'
import { PageNotFoundSubContainer, SubContainerHeading, SubContainerImg } from './PageNotFoundTheme1.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import BackwardImg from "../../../Assets/SectionComponent/Images/PageNotFound/backward.svg"
import { dummyImg } from '@/Constant/constants'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
const PageNotFoundTheme1 = ({ children }) => {

  const data = children;
  const navigate = useAppNavigate();

  const style = {
    PageNotFoundSubContainer: data.custom_section_editable[0].style,
    SubContainerHeading: data.custom_section_editable[1].style,
    WeCannotPara: data.custom_section_editable[2],
    FindThisPara: data.custom_section_editable[3],
    SubContainerImg: data.custom_section_editable[4].style,
    PageNotfoundImg: data.custom_section_editable[5],
    SubBottomContent: data.custom_section_editable[6],
    goShopBtn: data.custom_section_editable[7].style,
    BackwardImg: data.custom_section_editable[8].style.desktop,
    // ghostImg: {
    //   "img": "https://bitbucket.org/hkchawla1/siteeditor/raw/5cb12f8fbe6785006b7e120ba4a1825090ab762d/src/Assets/SectionComponent/Images/PageNotFound/pageNotFound.png",
    //   "alt": "page not found"
    // },
  }
  return (
    <>
      <PageNotFoundSubContainer item={style.PageNotFoundSubContainer}>
        <SubContainerHeading item={style.SubContainerHeading}>
          <Text
            tagType={style.WeCannotPara.tagType}
            text={style.WeCannotPara.text}
            style={style.WeCannotPara.style}
          />
          <Text
            tagType={style.FindThisPara.tagType}
            text={style.FindThisPara.text}
            style={style.FindThisPara.style}
          />
        </SubContainerHeading>
        <SubContainerImg item={style.SubContainerImg}>
          <ImageElement src={PageNotFoundImg} defaultImage={PageNotFoundImg} style={style.PageNotfoundImg.style} />
          {/* <ImageElement src={style?.ghostImg?.img} alt={style?.ghostImg?.alt} style={style?.PageNotfoundImg?.style} /> */}
        </SubContainerImg>
        <Text
          tagType={style.SubBottomContent.tagType}
          text={style.SubBottomContent.text}
          style={style.SubBottomContent.style}
        />

        <ButtonElement style={style.goShopBtn} onClick={() => navigate("/shop")} >
          <BackwardImg height={style.BackwardImg.height} width={style.BackwardImg.width} fill={style.BackwardImg.fill} />
          Go to shop
        </ButtonElement>
      </PageNotFoundSubContainer>
    </ >
  )
}

export default PageNotFoundTheme1