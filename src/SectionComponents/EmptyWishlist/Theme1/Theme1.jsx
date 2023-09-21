import React from 'react'
import { PageNotFoundSubContainer, SubContainerHeading, SubContainerImg } from './EmptyCartTheme1.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import BackwardImg from "../../../Assets/SectionComponent/Images/PageNotFound/backward.svg"
import EmptyCart from './EmptyCart.json'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import EmptywishlistSvg from "../../../Assets/SectionComponent/Images/Wishlist/emptywishlist.svg"
const EmptyWishlisTheme1 = ({ style }) => {


  const navigate = useAppNavigate()
  const OnCLick = () => {
    navigate("/shop")
  }
  return (
    <>
      <PageNotFoundSubContainer item={style.PageNotFoundSubContainer.style}>
        <SubContainerHeading item={style.SubContainerHeading.style}>
          <Text
            tagType={style.WeCannotPara.tagType}
            text={style.WeCannotPara.text}
            style={style.WeCannotPara.style}
          />
        </SubContainerHeading>
        <SubContainerImg item={style.SubContainerImg.style}>
          {/* <ImageElement src={style.ghostImg.img} alt={style.ghostImg.alt} style={style.PageNotfoundImg.style} /> */}
          <EmptywishlistSvg />
        </SubContainerImg>
        <Text
          tagType={style.SubBottomContent.tagType}
          text={style.SubBottomContent.text}
          style={style.SubBottomContent.style}
        />

        <ButtonElement style={style.goShopBtn.style} onClick={() => OnCLick()}>
          <BackwardImg height={style.BackwardImg.style.desktop.height} width={style.BackwardImg.style.desktop.width} fill={style.BackwardImg.style.desktop.fill} />
          Go to shop
        </ButtonElement>
      </PageNotFoundSubContainer>
    </ >
  )
}

export default EmptyWishlisTheme1