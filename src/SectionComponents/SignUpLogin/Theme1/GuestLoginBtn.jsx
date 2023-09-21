import React from 'react'
import { styled } from 'styled-components';
import LongArrowIcon from "../../../Assets/SectionComponent/Icons/rightLongArrow.svg"
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import Storage from '@/Classes/Storage';
import Auth from '@/Classes/Auth';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const GuestLoginBtn = ({ children }) => {
    const data = children;

    const navigate = useAppNavigate();
    
    const OrPart = styled.div`
    text-align:${({ item }) => item?.desktop?.textAlign};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    position:${({ item }) => item?.desktop?.position};
    &:after{
        position: ${({ item }) => item?.desktop?.after?.position};
        content: ${({ item }) => item?.desktop?.after?.content};
        width: ${({ item }) => item?.desktop?.after?.width};
        height: ${({ item }) => item?.desktop?.after?.height};
        background: ${({ item }) => item?.desktop?.after?.background};
        left: ${({ item }) => item?.desktop?.after?.left};
        top: ${({ item }) => item?.desktop?.after?.top};
        transform: ${({ item }) => item?.desktop?.after?.transform};
    }
    `;
    const SpanText = styled.span`
        display: ${({ item }) => item?.desktop?.display};
        background: ${({ item }) => item?.desktop?.background};
        padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
        padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
        padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
        padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
        position: ${({ item }) => item?.desktop?.position};
        z-index: ${({ item }) => item?.desktop?.zIndex};
        font-family: ${({ item }) => item?.desktop?.fontFamily};
        font-style: ${({ item }) => item?.desktop?.fontStyle};
        font-weight: ${({ item }) => item?.desktop?.fontWeight};
        font-size: ${({ item }) => item?.desktop?.fontSize};
        line-height: ${({ item }) => item?.desktop?.lineHeight};
        text-align: ${({ item }) => item?.desktop?.textAlign};
        color: ${({ item }) => item?.desktop?.color};
    `;
    const GuestLoginBtnWrapper = styled.div`
    position:${({ item }) => item?.desktop?.position};
    button{
        svg{
            fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
            transition: ${({ itemSvg }) => itemSvg?.desktop?.transition};
        }
        &:hover{
            svg{
            fill: ${({ itemSvg }) => itemSvg?.desktop?.hover?.fill};

            }
        }
    }
    `;

    let style = {
        OrPart: data?.custom_section_editable[0].style,
        SpanText: data?.custom_section_editable[1].style,
        GuestBtn: data?.custom_section_editable[2],
        GuestLoginBtnWrapper: data?.custom_section_editable[3].style,
        LongArrowIcon: data?.custom_section_editable[4].style,
    }
    const GuestLoginOnClick = () => {
        navigate("/shipping-address")
    }
    return (
        <>
            {
                Storage.alive("__GUESTLOGINBUTTON__") && (!Auth.isLogin() && AppLinkUrl.privateDomain() || !Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) &&
                <GuestLoginBtnWrapper item={style.GuestLoginBtnWrapper}
                    itemSvg={style.LongArrowIcon}>

                    <OrPart item={style?.OrPart}>
                        <SpanText item={style?.SpanText}>or</SpanText>
                    </OrPart>
                    <Button style={style.GuestBtn.style} onClick={GuestLoginOnClick}>
                        {style.GuestBtn.text}
                        <LongArrowIcon />
                    </Button>
                </GuestLoginBtnWrapper>
            }
        </>
    )
}

export default GuestLoginBtn
