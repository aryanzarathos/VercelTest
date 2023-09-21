import React, { useEffect } from 'react';
import IconSuccess from "../../../Assets/Icons/toastSuccessIcon.svg";
import IconError from "../../../Assets/Icons/toastErrorIcon.svg";
import IconWarning from "../../../Assets/Icons/toastWarningIcon.svg";
import IconCross from "../../../Assets/Icons/cross.svg"
import { CrossSpan, MessageToastContainer, ToastIcon, ToastParaText, ToastParaWrap, ToastWrap } from './toastTheme1Styke';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Toast = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.successmessagepopup)

    const handleClose = useCallback(() => {
        dispatch(hideToast())
    }, [dispatch])

    useEffect(() => {
        if (success.showToast) {
            setTimeout(handleClose, 3000)
        }
    }, [success, handleClose])




    // const [success, setSuccess] = useState({
    //     toastType: "warning",
    //     showToast: true
    // })

    // const handleClose = () => {
    //     setSuccess({
    //         ...success,
    //         showToast: false
    //     })
    // }
    return (
        <MessageToastContainer >
            {success.showToast &&
                <ToastWrap className={` ${success.toastType === "success" ? "successBorder" : success.toastType === 'error' ? "errorBorder" : success.toastType === "warning" ? "warningBorder" : ''}`}>
                    <ToastIcon >
                        {
                            success.toastType === 'success' ? <IconSuccess width={14} height={14} fill={"#1EBB1B"} />
                                : success.toastType === 'error' ? <IconError width={14} height={14} fill={"#C23934"} />
                                    : success.toastType === 'warning' ? <IconWarning width={14} height={14} fill={"#F2A544"} /> : ''
                        }

                    </ToastIcon>
                    <ToastParaWrap >
                        <ToastParaText className={`text-2xs w-400`}>{success.message}</ToastParaText>
                    </ToastParaWrap>
                    <CrossSpan onClick={handleClose}>
                        <IconCross width={10} height={10} fill={"#20202066"} />
                    </CrossSpan>
                </ToastWrap>
            }
        </MessageToastContainer>
    )
}

export default Toast