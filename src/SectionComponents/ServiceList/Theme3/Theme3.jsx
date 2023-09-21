import React, { useEffect, useRef } from 'react';
import done from "../../../Assets/SectionComponent/Images/ServiceList/success_gif.gif";
import { GifFrame, InnerWrapper, ThankYouWrapper } from './ServiceListTheme3.style';
import Image from 'next/image';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { useDispatch } from 'react-redux';
import { activateProfile } from '@/store/actions/myprofile';

const ServiceListTheme3 = ({ children }) => {
    const data = children;
    const timerRef = useRef();
    const navigate = useAppNavigate();
    const dispatch = useDispatch()
    const style = {
        ThankYouWrapper: data?.custom_section_editable[0].style,
        InnerWrapper: data?.custom_section_editable[1].style,
        BookingConfirmPara: data?.custom_section_editable[2],
        ThankuPara: data?.custom_section_editable[3],
        ViewBtn: data?.custom_section_editable[4],
        GifFrame: data?.custom_section_editable[5].style,
        ImageStyle: data?.custom_section_editable[6].style,
        ImageData: data?.data,
    }

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            navigate('/my-personal-details');

            dispatch(activateProfile("My Bookings"))
        }, 5000);

        return () => clearTimeout(timerRef.current);
    }, [navigate]);

    const NavigateHandle = () => {
        dispatch(activateProfile("My Bookings"))
        navigate('/my-personal-details');
    }

    return (
        <>

            <ThankYouWrapper item={style?.ThankYouWrapper}>
                <InnerWrapper item={style?.InnerWrapper}>
                    <Text
                        text={style?.BookingConfirmPara?.text}
                        tagType={style?.BookingConfirmPara?.tagType}
                        style={style?.BookingConfirmPara?.style}
                    />
                    <GifFrame item={style?.GifFrame}>
                        <ImageElement src={done} style={style?.ImageStyle} alt="" />
                    </GifFrame>
                    <Text
                        text={style?.ThankuPara?.text}
                        tagType={style?.ThankuPara?.tagType}
                        style={style?.ThankuPara?.style}
                    />
                    <Button
                        text={style.ViewBtn.text}
                        style={style.ViewBtn.style}
                        onClick={NavigateHandle}
                    />
                </InnerWrapper>
            </ThankYouWrapper>
        </>

    )
}

export default ServiceListTheme3

