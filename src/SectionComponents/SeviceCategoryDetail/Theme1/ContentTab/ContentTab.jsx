import React from 'react'
import { BookButton, ContentLeftWrapperexport, ContentRightWrapper, ContentWrapper, HeadingWrapper, ImageWrapper, ParaWrapper } from './ContentTabStyled'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
const ContentTab = ({ data, style }) => {


    const history = useAppNavigate();

    const bookingHandle = (slug) => {
        if ((AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            history("/service-selection");
        }
        else {
            history("/login-signup");
        }
    }

    return (
        <>
            <ContentWrapper item={style.ContentWrapper.style}>
                <ContentLeftWrapperexport item={style.ContentLeftWrapperexport.style}>
                    <ImageWrapper item={style.ImageWrapper.style} >
                        <ImageElement src={data?.image?.src} style={style.image.style} alt={data?.image?.alt} />
                    </ImageWrapper>

                    {/* <BookButton item={style.BookButton.style} >
                        {data.btnText}
                    </BookButton> */}

                    <ButtonElement
                        tagType={style.BookButton.tagType}
                        text={`BOOK APPOINTMENT`}
                        style={style.BookButton.style}
                        onClick={() => bookingHandle(data._id)}
                    />
                </ContentLeftWrapperexport>

                <ContentRightWrapper item={style.ContentRightWrapper.style}>
                    <HeadingWrapper item={style.HeadingWrapper.style}>
                        <Text tagType={style.Heading.tagType} text={data?.title} style={style.Heading.style} />
                    </HeadingWrapper>
                    <ParaWrapper item={style.ParaWrapper.style}>
                        <Text tagType={style.Para.tagType} dangerouslySetInnerHTML={{ __html: data?.description }} style={style.Para.style} />
                        {
                            // <p>{data.para}</p>
                        }
                    </ParaWrapper>
                </ContentRightWrapper>
            </ContentWrapper>
        </>

    )
}

export default ContentTab