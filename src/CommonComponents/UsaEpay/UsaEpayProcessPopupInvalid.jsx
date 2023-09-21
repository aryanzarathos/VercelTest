import React, { useEffect, useState } from 'react'
import Modals from '../Modals';
import ModalBody from '../Modals/ModalsBody';
import styled from 'styled-components'
import style from './UsaEpay.module.scss'
import Denie from '../../Assets/SectionComponent/Icons/Declined.gif'
import { useSelector } from 'react-redux'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
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

const UsaEpayProcessPopupInvalid = ({ processref, closeModal, empty }) => {

    return (
        <Modals className={style.AzlitePopupProcessContainer} ref={processref} Position="center" slide="center" ClosePopUp={() => closeModal()} ModalsSize={'modalXS'}>
            <ModalBody>
                <ProcessContainer>
                    <ProccessStatusDenie >Card Details Invalid!</ProccessStatusDenie>
                    <ImageElement className={"gif_wrap"} src={Denie} alt={"declined"} />
                    <ProcessInfo>Sorry, we couldn’t process your payment due to insufficient funds.</ProcessInfo>
                    <Buttontry onClick={() => {
                        closeModal();
                        empty()
                    }}>Try Again</Buttontry>
                </ProcessContainer>

            </ModalBody>
        </Modals>
    )
}

export default UsaEpayProcessPopupInvalid;