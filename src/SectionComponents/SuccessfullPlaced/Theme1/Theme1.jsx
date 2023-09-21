import React, { useEffect, useRef, useState } from 'react'
import SuccessIcon from '../../../Assets/SectionComponent/Images/SuccessfullPlaced/btn-icon.svg'
import Link from 'next/link';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import { Colored, ExploreBtn, LinkToOrder, SuccessfullContainer, SuccessfullGif, SuccessfullMsg, ThnkYouMsg } from './SuccessfullPlaced.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement"
import { useParams } from 'react-router-dom';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import useDownTimer from '@/CustomHooks/useTimer';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import { useRouter } from 'next/router';

const SuccessfullPlacedTheme1 = ({ children }) => {

  let style = {
    successfullContainer: children.custom_section_editable[0].style,
    SuccessfullMsg: children.custom_section_editable[1].style,
    Colored: children.custom_section_editable[2].style,
    SuccessfullGif: children.custom_section_editable[3].style,
    SuccessImg: children.custom_section_editable[4].style,
    ThnkYouMsg: children.custom_section_editable[5],
    ExploreBtn: children.custom_section_editable[6].style,
    SuccessIconFill: children.custom_section_editable[7].style,
    SuccessIconHeight: children.custom_section_editable[7].style,
    SuccessIconWidth: children.custom_section_editable[7].style,
    ViewOrder: children.custom_section_editable[8],
    SuccessfullImgUrl: children.data[0]?.src,
  }
  const timeRef = useRef()
  const navigate = useAppNavigate();
  // const { status, status?.index[1] } = useParams();

  const [redirectTo, setRedirectTo] = useState("");
  const [timer, setTimer] = useDownTimer();
  const router = useRouter();
  const status = router.query;

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
        navigate(`/my-orders`);
      } else {
        navigate(`/guest-orders-details/${status?.index[1]}`)
      }
    }, [5000])

    return () => {
      clearTimeout(timeRef.current);
    };
  }, [navigate])

  const orderpageHandle = (item) => {
    // console.log("line 53", item)
    navigate(item)
  }

  return (
    <SuccessfullContainer item={style.successfullContainer}>
      {
        status?.index[0] === "true" || status?.index[0] === "success" ?
          <SuccessfullMsg item={style.SuccessfullMsg}>
            Your order has been <Colored item={style.Colored}> placed successfully.</Colored>
          </SuccessfullMsg> : <SuccessfullMsg item={style.SuccessfullMsg}>
            Your order has <Colored item={style.Colored}>  been Unsuccessful. </Colored>
          </SuccessfullMsg>
      }
      <SuccessfullGif item={style.SuccessfullGif}>
        <ImageElement src={style.SuccessfullImgUrl} alt={"Success"} style={style.SuccessImg} />
      </SuccessfullGif>
      <Text tagType={style.ThnkYouMsg.tagType} style={style.ThnkYouMsg.style} text={style.ThnkYouMsg.text}></Text>
      <Button style={style.ExploreBtn} onClick={() => orderpageHandle("/shop")}>
        Explore More
        <SuccessIcon fill={style.SuccessIconFill.desktop.fill} width={style.SuccessIconFill.desktop.widht} height={style.SuccessIconFill.desktop.height} />
      </Button>

      {
        (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?

          <ButtonElement style={style.ViewOrder.style} onClick={() => orderpageHandle("/my-orders")} text={"View Orders"} />
          :
          <ButtonElement style={style.ViewOrder.style} onClick={() => orderpageHandle(`/guest-orders-details/${status?.index[1]}`)} text={"View Orders"} />
      }

    </SuccessfullContainer >
  )
}

export default SuccessfullPlacedTheme1;