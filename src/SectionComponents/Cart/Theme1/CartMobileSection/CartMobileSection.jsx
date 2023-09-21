import React from 'react';
import { BtnContain, ShoppingCartMobile } from "./CartMobileSectionStyle";
import BackBtn from "../../../../Assets/SectionComponent/Images/Cart/backbtn.svg";
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import { useRouter } from 'next/router'

const CartMobileSection = ({ finalData, ...cartMobile }) => {
  const router = useRouter()
  const findLastIndex = router.asPath;
  const routeQuery = findLastIndex.split('/');
  const pathname = routeQuery[routeQuery.length - 1];

  return (
    <ShoppingCartMobile item={cartMobile.shoppingCartMobile.style}>
      <BtnContain item={cartMobile.btnContain.style} onClick={() => router.back()}>
        <BackBtn fill={cartMobile.backBtn.style.desktop.fill} height={cartMobile.backBtn.style.desktop.height} width={cartMobile.backBtn.style.desktop.width} />
        {/* <BackBtn></BackBtn> */}
        {/* <Text tagType={cartMobile.backBtnText.tagType} text={cartMobile.backBtnText.text} style={cartMobile.backBtnText.style} /> */}
        <Text tagType={cartMobile.backBtnText.tagType} text={pathname === "cart" ? "Shopping Cart" : pathname === "shipping-address" ? "Shipping Address" : pathname === "payment" ? "Payment" : "Payment"} style={cartMobile.backBtnText.style} />
      </BtnContain>
      <Text tagType={cartMobile.productCount.tagType} text={`${finalData?.length > 0 ? finalData?.length : "0"} Products`} style={cartMobile.productCount.style} />
    </ShoppingCartMobile>
  )
}

export default CartMobileSection