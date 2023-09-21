import React, { useEffect, useState } from 'react'
import Modals from '../Modals';
import ModalBody from '../Modals/ModalsBody';
import { forwardRef } from 'react';
import styled from 'styled-components';
import FormInput from '../../CommonComponents/Form/FormInput'
import style from './UsaEpay.module.scss'
import FormError from '../../CommonComponents/Form/FormError';

import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import UsaEpayProcessPopup from './UsaEpayProcessPopup';
import UsaEpayProcessPopupInvalid from './UsaEpayProcessPopupInvalid';
import { useNavigate } from 'react-router-dom';
import Card from '../../Assets/images/cardmain.png'
import ValidationFile from '@/Classes/ValidationFile';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import BussinessLogo from '../../Assets/SectionComponent/Icons/bussiness_icon.png'
import CalenderIconCard from '../../Assets/SectionComponent/Icons/solar_card_outline.svg'
import Sucess from '../../Assets/SectionComponent/Icons/Success_gif.gif'
import RecieptIcon from '../../Assets/SectionComponent/Icons/receipt_long.svg'
import MasterCardIconCard from '../../Assets/SectionComponent/Icons/logos_mastercard.svg'
import Loader from '../../Assets/SectionComponent/Icons/loader_gif.gif'
import LockIcon from '../../Assets/SectionComponent/Icons/lock-outline.svg'
import VerifiedIcon from '../../Assets/SectionComponent/Icons/verified-check-linear.svg'
import UsaEpayIcon from '../../Assets/SectionComponent/Icons/usaepay.png'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import FormPayment from './FormPayment';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { resetSuccessPopUp, saveCardDetails } from '@/store/actions/createOrder';

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 25px;
`
const IconWrap = styled.figure`
    width: 48px;
    height: 48px;
    img{
        display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
    object-position: center;
    }
`
const Icon = styled.img`
display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
    object-position: center;
`
const LogoNamewrap = styled.div`
    
`
const AzlitTxt = styled.h2`
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 19.7075px;
    line-height: 24px;
    color: #127EF8;
`
const FashionTxt = styled.p`
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.7075px;
    line-height: 24px;
    color: #127EF8;
`
const CardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    @media screen and (max-width:767px){
        flex-wrap: wrap;
        justify-content: center;
    }
`
const CardLeftWrap = styled.div`
    width: 65%;
    @media screen and (max-width:767px){
        width: 100%;
    }
    .HolderInput{
        padding-left: 12px;
        height: 46px;
        margin-bottom: 32px;
    }
    .btnActive{
        background: #3758F9 !important;
    }
`
const CardRightWrap = styled.div`
    width: 35%;
    @media screen and (max-width:767px){
        width: 100%;
    }

`
const CardWrapMainRight = styled.div`
    background: #F2F7FF;
    border-radius: 16px;
    position: relative;
    width: 266px;
    
     
`
const AmountBottomWrap = styled.div`
    padding: 0px 20px 14px 20px;
`
const Span = styled.span`
    height: 5px;
    border-radius: 45px;
    width: 70%;
    background: #3758F9;
    display: block;
    position: absolute;
    top: 0px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
`


const MasterIcon = styled.i`
    background-image: url(${({ item }) => item});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    display: block;
    width: 23.98px;
    height: 14.58px;
`

const UserBottomDetail = styled.div`
    position: absolute;
    bottom: 60px;
    left: 20%;
`
const UserName = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    max-width: 150px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: rgba(32, 32, 32, 0.6);
    margin-bottom: 5px;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
const UserCardNumber = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
    margin-bottom: 20px;
    
`
const Border = styled.hr`
    border: 1px solid rgba(55, 88, 249, 0.2);
    filter: blur(1px);
`
const AmountLogoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    gap: 10px;
`
const AmountWrap = styled.div`
    
`
const AmounttxtPay = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: rgba(32, 32, 32, 0.4);
    margin-bottom: 5px;
`
const Amount = styled.h2`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000;
    display: flex;
    align-items: center;
`
const AmountLogo = styled.span`
    color: rgba(32, 32, 32, 0.6);
    font-weight: 400;
`
const Amountdecimal = styled.p`
    font-size: 12px;
`
const CardExpiryWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 150px;
    
`
const MonthYearWrap = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
    letter-spacing: 0.02em;
`
const Label = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    margin-bottom: 4px;
`
const LebelInfo = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: rgba(32, 32, 32, 0.4);
    margin-bottom: 17px;
`
const CardNumberInputWrap = styled.div`
    position: relative;
    width: 100%;
    height: 46px;
    margin-bottom: 24px;
    &.PositionIcon{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    right: 12px;
    top: 16px;
    z-index: 9;
    }
    .input-border-invalid{
        border: 1.5px solid #D93025;
        border-radius: 6px;
        &:focus{
            border: 1.5px solid #D93025; 
        }

    }
    .error{
    position: absolute;
    bottom: 8px;
    right: 5px;
    display: inline-block;
        
    }
    input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .cardNumberinput{
        height: 46px;
        padding:0 20px 0 60px;
        color: #000;
        &::placeholder{
        color: rgba(32, 32, 32, 0.4);
        }
        
    }
    .Icon_place{     
    display: block;
    position: absolute;
    left: 12px;
    top: 15px;
    z-index: 9;
    }
    .PositionIcon{
    position: absolute;
    display: block;
    object-fit: cover;
    width: 30px;
    height: 30px;
    right: 13px;
    top: 14px;
    z-index: 9;
    }
`
const CVVExpiryWrap = styled.div`
    display: flex;
    gap: 44px;
    align-items: flex-start;
    margin-bottom: 20px;
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
const DivWrap = styled.div`
    width: 50%;
    @media screen and (max-width:500px){
        width: 100%;
    }
    input{
        height: 46px;
    }
    .CvvInputfield{
        padding-left:35%;
    }
    input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
`
const InputWrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    .ExpireDateInput{
        padding-left: 35% ;
    }
`
const ButtonWrap = styled.div`
    display: block;
    @media screen and (max-width:767px){
        position: fixed;
        bottom: 0;
        left: 10px;
        right: 10px;
        z-index: 99;
    }
`
const Buton = styled.button`
    background: rgba(55, 88, 249, 0.3);
    border-radius: 6px;
    height: 46px;
    width: 100%;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFF;
    border: none;
    margin-bottom: 8px;
`
const SecuredWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    img{
        width: 51px;
    height: 16px;
    display: block;
    object-fit: contain;
    }
`
const CardWrapmain = styled.div`
    position: relative;    
`


// eslint-disable-next-line react/display-name
const UsaEpay = forwardRef(({ closeModal, getbusinessInfoData, addressTab, setAddData, handleDataSuccess, totalPrice, successUrl }, ref) => {

    const symbolsArr = [",", " ", '"', `'`, "!", "@", "`", "~", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ".", "<", ">", "/", "?", ":", ";", "{", "}", "[", "]", `|`, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const processref = useRef();
    const validProcessRef = useRef();
    const dispatch = useDispatch()
    const cardnumberlength = 19;
    const [cardNumber, setcardNumber] = useState("")
    const [realCardNumber, setrealCardNumber] = useState("")

    const [cardType, setCardType] = useState("")

    const [Month, setMonth] = useState("")
    const [MonthError, setMonthError] = useState(false)

    const [YEAR, setYEAR] = useState("")
    const [YEARError, setYEARError] = useState(false)

    const [Name, setName] = useState("")

    const [cvv, setCvv] = useState("")

    const [addressTabData, setAddressTabData] = useState({})

    const debounce = useDebounceFunction(
        (callback) => callback(),
        2000
    );

    const { saveCardLoading, saveCardLoaded, saveCardData, payememtSuccessExist
    } = useSelector((state) => {
        return {
            saveCardLoading: state.saveCard.loading,
            saveCardLoaded: state.saveCard.success,
            saveCardData: state.saveCard.data,
            payememtSuccessExist: state.saveCard.successModal,

        };
    })


    const HandleSuccess = () => {
        const valid = checkValidation()
        let argsData = {}
        if (valid) {
            argsData = {
                "creditcard": {
                    "cardholder": Name,
                    "cardnumber": realCardNumber,
                    "expiration": `${Month}${YEAR}`,
                    "cvc": cvv,
                },
                gateway: "usaepay"
            }
        }
        handleDataSuccess(argsData)
    }

    const CloseSuccess = () => {
        processref.current.close();
    }
    const CloseErrSuccess = () => {
        validProcessRef.current.close();
    }
    function handleCardNumber(e) {
        const value = e.target.value
        const formattedValue = value.replace(/-/g, '').match(/.{1,4}/g)?.join('-') || '';
        if (formattedValue.length <= 19) {
            setcardNumber(formattedValue);
            setrealCardNumber(formattedValue.split("-").join(""))
            checkValidation()
        }
    }
    const checkCardType = () => {
        const amexReg = {
            reg: new RegExp("^3[47][0-9]{13}$"),
            image: "amex"
        }
        const masterREgex = {
            reg: new RegExp("^5[1-5][0-9]{14}$"),
            image: "master"
        }
        const visRegex = {
            reg: new RegExp("^4[0-9]{12}(?:[0-9]{3})?$"),
            image: "visa"
        }
        const cardArr = [amexReg, masterREgex, visRegex]
        for (let i = 0; cardArr.length > i; i++) {
            if (cardArr[i].reg.test(realCardNumber)) {
                setCardType(cardArr[i].image)
            }
        }

    }
    useEffect(() => {
        checkCardType()
    }, [realCardNumber])
    function handleCvv(e) {
        const value = e.target.value
        if (value.toString().length <= 4) {
            setCvv(value)
            checkValidation()
        }
    }
    const handleChangeMonth = (e) => {
        const value = e.target.value
        if (value.toString().length <= 2 && value <= 12) {
            setMonth(value);
            checkValidation()
        }
    };

    const handleChangeYear = (e) => {
        const value = e.target.value
        if (value.toString().length <= 2) {
            setYEAR(value);
        }
        checkValidation()
    }

    const isDateGreaterThanCurrent = () => {
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        const inputYear = parseInt(YEAR, 10);
        const inputMonth = parseInt(Month, 10);
        if (inputYear > currentYear) {
            setYEARError(false)
        } else if (inputYear === currentYear && inputMonth >= currentMonth) {
            setYEARError(false)
        } else {
            setYEARError(true)
        }
        checkValidation()
    };
    useEffect(() => {
        if (Month.toString().length > 0 && YEAR.toString().length > 0) {
            isDateGreaterThanCurrent()
        }
    }, [Month, YEAR])

    function checkValidation() {
        if (ValidationFile.isNotEmpty(realCardNumber) && ValidationFile.isNotEmpty(Name) && ValidationFile.isNotEmpty(Month) && ValidationFile.isNotEmpty(YEAR) && ValidationFile.isNotEmpty(cvv) && !YEARError) {
            return true
        } else {
            return false
        }
    }
    const [addressTabExist, setAddressTabExist] = useState(addressTab)


    const closePopup = () => {
        EmptyDetails()
        closeModal()
    }

    const [cardValidated, setCardValidated] = useState(false)
    function EmptyDetails() {
        setcardNumber("")
        setrealCardNumber("")
        setCardType("")
        setYEAR("")
        setName("")
        setMonth("")
        setCvv("")
        setMonthError(false)
        setYEARError(false)
        setCardValidated(false)
        setAddressTabExist(addressTab)
    }
    function handleApiHit() {
        const isValid = checkValidation()
        const argsData = {
            "business": getbusinessInfoData?._id,
            "command": "cc:save",
            "creditcard": {
                "cardholder": Name,
                "number": realCardNumber,
                "expiration": `${Month}${YEAR}`,
                "cvc": cvv,
                "avs_street": "",
                "avs_zip": ""
            }
        }
        if (isValid) {
            debounce(() =>
                dispatch(saveCardDetails(argsData))
            )
        }
    }
    useEffect(() => {
        if (!saveCardLoading && saveCardLoaded && saveCardData) {
            if (saveCardData?.result != "Error") {
                setCardValidated(true)
            } else {
                setCardValidated(false)
                validProcessRef.current.open()
            }
        }
    }, [saveCardLoading, saveCardLoaded, saveCardData])

    const closeMainPopup = () => {
        ref.current.close()
        EmptyDetails()
    }
    return (
        <React.Fragment>
            <Modals className={style.paymentPopupContainer} ref={ref} Position="center" slide="center" ClosePopUp={() => closePopup()} ModalsSize={'modalL'}>
                <ModalBody>
                    <LogoWrap>
                        <IconWrap>
                            <ImageElement src={getbusinessInfoData?.business_logo?.src ? getbusinessInfoData?.business_logo?.src : BussinessLogo} alt={"logo-image"} />
                        </IconWrap>
                        <LogoNamewrap>
                            <AzlitTxt>{getbusinessInfoData?.business_name}</AzlitTxt>
                        </LogoNamewrap>
                    </LogoWrap>
                    {addressTabExist &&
                        <FormPayment addressTab={setAddressTabExist} setAddressTabData={setAddressTabData} />

                    }
                    {!addressTabExist &&
                        <CardWrap>
                            <CardLeftWrap>
                                <Label>Card Number</Label>
                                <LebelInfo>Enter the 16-digit card number on the card</LebelInfo>
                                <CardNumberInputWrap>
                                    {
                                        cardNumber?.length === cardnumberlength ?
                                            <MasterCardIconCard
                                                className={'Icon_place'}
                                                item={cardType}
                                            /> : <CalenderIconCard
                                                className={'Icon_place'}
                                            />
                                    }
                                    {
                                        false ? <ImageElement className='PositionIcon' src={Loader} alt='ddd' /> : <VerifiedIcon className='PositionIcon' />
                                    }
                                    <FormInput
                                        placeholder={'2412 - 7512 - 3412 - 3456'}
                                        className={`cardNumberinput ${false ? "input-border-invalid" : ""}`}
                                        type={"text"}
                                        maxLength={19}
                                        value={cardNumber}
                                        onChange={(q) => {
                                            handleCardNumber(q);
                                            handleApiHit()
                                        }}
                                        onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                                    />
                                    <FormError />
                                </CardNumberInputWrap>
                                <CVVExpiryWrap>
                                    <DivWrap>
                                        <Label>CVV Number</Label>
                                        <LebelInfo>Enter the 3 or 4 digit number on the card</LebelInfo>
                                        <FormInput
                                            placeholder={"CVV"}
                                            className={"CvvInputfield"}
                                            type={"number"}
                                            value={cvv}
                                            onChange={(e) => {
                                                handleCvv(e);
                                                handleApiHit()
                                            }}
                                            onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}

                                        />
                                        <FormError />

                                    </DivWrap>
                                    <DivWrap>
                                        <Label> Expiry Date </Label>
                                        <LebelInfo>Enter the expiration date of the card</LebelInfo>
                                        <InputWrap>
                                            <FormInput
                                                placeholder={"MM"}
                                                className={"ExpireDateInput"}
                                                type={"number"}
                                                value={Month}
                                                onChange={(e) => {
                                                    handleChangeMonth(e);
                                                    handleApiHit()
                                                }}
                                                onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}

                                            />
                                            <FormError error="Enter a valid Month" show={MonthError} />


                                            <FormInput
                                                placeholder={"YY"}
                                                className={"ExpireDateInput"}
                                                type={"number"}
                                                value={YEAR}
                                                onChange={(e) => {
                                                    handleChangeYear(e);
                                                    handleApiHit()

                                                }}
                                                onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}

                                            />
                                            <FormError error="Enter a Valid Year" show={YEARError} />


                                        </InputWrap>
                                    </DivWrap>
                                </CVVExpiryWrap>
                                <Label>Card Holder Name</Label>
                                <LebelInfo>Enter the name on the card</LebelInfo>
                                <FormInput
                                    placeholder={"eg. JOHN DOE"}
                                    className={"HolderInput"}
                                    value={Name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        handleApiHit()
                                    }}
                                />
                                <ButtonWrap>
                                    <Buton className={`${cardValidated ? "btnActive" : ""}`} disabled={!cardValidated} onClick={() => HandleSuccess()}>Pay Now</Buton>
                                    <SecuredWrap><LockIcon /><LebelInfo>Secured by</LebelInfo><ImageElement src={UsaEpayIcon} alt={'USA e Pay'} /></SecuredWrap>
                                </ButtonWrap>
                            </CardLeftWrap>
                            <CardRightWrap>
                                <CardWrapMainRight>
                                    <Span />
                                    <CardWrapmain>
                                        <ImageElement src={Card} alt={"card"} />
                                        <UserBottomDetail>
                                            <UserName>{Name ? Name : "John Doe"}</UserName>
                                            <UserCardNumber>
                                                <span> &#8729;&nbsp;&#8729;&nbsp;&#8729;&nbsp;&#8729; </span>
                                                {cardNumber?.length === cardnumberlength ? cardNumber?.slice(15, 20) : "XXXX"}
                                            </UserCardNumber>
                                            <CardExpiryWrap><MonthYearWrap> {Month ? Month.slice(0, 2) : "MM"}&#8725;{YEAR ? YEAR.slice(0, 4) : "YY"}</MonthYearWrap>
                                                {
                                                    cardNumber?.length === cardnumberlength ? <MasterCardIconCard
                                                        item={cardType}
                                                    /> : <CalenderIconCard />
                                                }
                                            </CardExpiryWrap>
                                        </UserBottomDetail>
                                    </CardWrapmain>

                                    <AmountBottomWrap>
                                        <Border />
                                        <AmountLogoWrap>
                                            <AmountWrap>
                                                <AmounttxtPay>You have to pay</AmounttxtPay>
                                                <Amount><AmountLogo>&#36;&nbsp;</AmountLogo>{totalPrice}</Amount>
                                            </AmountWrap>
                                            <RecieptIcon />
                                        </AmountLogoWrap>
                                    </AmountBottomWrap>

                                </CardWrapMainRight>
                            </CardRightWrap>

                        </CardWrap>
                    }

                </ModalBody>
            </Modals>
            <UsaEpayProcessPopup closeModal={CloseSuccess} processref={processref} closeMainPopup={closeMainPopup} empty={EmptyDetails} successUrl={successUrl} />
            <UsaEpayProcessPopupInvalid closeModal={CloseErrSuccess} processref={validProcessRef} empty={EmptyDetails} />
        </React.Fragment>
    )
})

export default UsaEpay;