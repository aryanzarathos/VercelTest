import React, { useEffect, useState } from 'react'
import ModalBody from '../Modals/ModalsBody';
import Modals from '../Modals';
import styled from 'styled-components'
import style from './UsaEpay.module.scss'
import Loader from '../../Assets/SectionComponent/Icons/loader_gif.gif'
import Sucess from '../../Assets/SectionComponent/Icons/Success_gif.gif'
import Denie from '../../Assets/SectionComponent/Icons/Declined.gif'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { resetErrorPopUp, resetSuccessPopUp } from '@/store/actions/createOrder';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
const ProcessContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .gif_wrap{
        height: 92px;
    width: 92px;
    display: block;
    object-fit: cover;
    }
`
const ProccessStatus = styled.h1`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #3758F9;
    text-align: center;
`
const ProccessStatusDenie = styled.h1`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #D93025;
    text-align: center;
`
const GifLoader = styled.img`
    height: 92px;
    width: 92px;
    display: block;
    object-fit: cover;
`
const ProcessInfo = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(32, 32, 32, 0.4);
    .clicklink{
        color: #3758F9;
        cursor: pointer;
    }
`
const Buttontry = styled.button`
    background: #3758F9;
    border-radius: 6px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
    padding: 13px 61px;
    margin-top: 20px;

`

const UsaEpayProcessPopup = ({ processref, closeModal, closeMainPopup, empty, successUrl }) => {
    const [Process, setProcess] = useState(false)
    const [paymentError, setPaymentError] = useState(false)

    const dispatch = useDispatch()

    const { payememtSuccessExist, payememtErrorExist
    } = useSelector((state) => {
        return {
            payememtSuccessExist: state.saveCard.successModal,
            payememtErrorExist: state.saveCard.ErrorPopUp,
        };
    })
    const history = useAppNavigate();

    // dispatch(resetSuccessPopUp())
    // dispatch(resetErrorPopUp())
    function handleNavigate() {
        closeMainPopup()
        processref.current.close()
        setProcess(false);
        dispatch(resetSuccessPopUp())
        dispatch(resetErrorPopUp())
        window.open(successUrl)
    }
    const [allDone, setAllDone] = useState(false)
    useEffect(() => {
        if (payememtSuccessExist) {
            const timer = setTimeout(() => {
                if (!payememtErrorExist) {
                    setAllDone(true)
                    setProcess(true);
                } else {
                    setProcess(false)
                    setPaymentError(true)
                }
            }, 5000);
            processref.current.open()
            return () => clearTimeout(timer);
        }
    }, [payememtErrorExist, payememtSuccessExist, processref])
    useEffect(() => {
        if (allDone) {
            const timer = setTimeout(() => {
                window.location.href = successUrl
            }, 5000);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allDone])


    return (
        <Modals className={style.AzlitePopupProcessContainer} ref={processref} Position="center" slide="center" ClosePopUp={() => closeModal()} ModalsSize={'modalXS'}>
            <ModalBody>
                <ProcessContainer>
                    <ProccessStatus>{Process && !paymentError ? "Payment Successful!" : "Payment Processing"}</ProccessStatus>

                    <ImageElement className={"gif_wrap"} src={Process ? Sucess : paymentError ? Denie : Loader} alt={"loader"} />
                    {
                        paymentError ?
                            <ProccessStatusDenie >Payment Denied!</ProccessStatusDenie> : ""
                    }
                    {
                        paymentError ? <>
                            <ProcessInfo>Sorry, we couldn’t process your payment due to insufficient funds.</ProcessInfo>
                            <Buttontry onClick={() => {
                                empty();
                                closeModal()
                            }}>Try Again</Buttontry></>

                            : ""
                    }
                    <ProcessInfo>{Process && !paymentError ? <span>To go to the merchant site <span className='clicklink' onClick={(() => handleNavigate())}>click here.</span> </span> : Process && !paymentError ? <span>Please wait while your transaction is processing.It may take a little while.</span> : ""}</ProcessInfo>

                </ProcessContainer>

            </ModalBody>
        </Modals>
    )
}

export default UsaEpayProcessPopup;