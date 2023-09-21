import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import FormInput from '../../../SectionCommon/Form/FormInput';
import FormError from '../../../CommonComponents/Form/FormError';
import moment from 'moment';
import { Aside, BackButton, BookAppointmentGrid, BookBtn, BookingCard, MobileLabel, ShiftWrap, BookingParaWrap, BreadcrumbDiv, CalendarWrap, Col, Column, PhoneInputWrap, FormFieldwrap, FromWrapper, InputCustomType, Label, InputRadio, Slot, Term, Time, TimeCard, Dots, Timetable, UserBreadcrumbWrap, WebsiteBookAppoinmentWrapper, SlotAvailable } from './ServiceListTheme2.style';
import Breadcrumbs from '@/SectionCommon/Breadcrumbs';
import BreadcrumbsItem from '@/SectionCommon/Breadcrumbs/BreadcrumbsItem';
import Link from 'next/link';
import IconSunrise from "../../../Assets/SectionComponent/Icons/icon-Sunrise.svg";
import Sunset from "../../../Assets/SectionComponent/Icons/Sunset.svg";
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import { useDispatch, useSelector } from 'react-redux';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { useRouter } from 'next/router';
import Auth from '@/Classes/Auth';
import { getAllSlot, getSingleServiceDetail, resetGetAllSlot, resetPostAppointmentDetail, postAppointmentCart } from '@/store/actions/bookAppointment';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import ValidationUtils from '../../../Classes/ValidationUtils';
import ValidationFile from '../../../Classes/ValidationFile';

const ServiceListTheme2 = ({ children }) => {
    const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data)
    const { users, insID, ownerID, getAllSlotdata, subdomainUsers,
        getSingleServiceDetaildata, businesstype, getSingleServiceDetailSuccess, Ownerdata } = useSelector(
            (state) => {
                return {
                    users: state.user,
                    Ownerdata: state.websiteTemplate.getTemplate.data,
                    subdomainUsers: state.subdomainuser,
                    insID: state.user.user_institute,
                    ownerID: state.user._id,
                    institute: state.user.user_institute,
                    businesstype: state.user.user_business_type,

                    getAllSlotdataSuccess: state.bookAppointment.getAllSlot.success,
                    getAllSlotdataLoading: state.bookAppointment.getAllSlot.loading,
                    getAllSlotdata: state.bookAppointment.getAllSlot.data,

                    getSingleServiceDetailSuccess: state.bookAppointment.getSingleService.success,
                    getSingleServiceDetailLoading: state.bookAppointment.getSingleService.loading,
                    getSingleServiceDetaildata: state.bookAppointment.getSingleService.data,
                }
            }
        );

    const history = useAppNavigate();

    let dispatch = useDispatch();
    const [timestart, setTimeStart] = useState(false);
    const [timeSlot, setTimeSlot] = useState("");
    const [myTime, setMyTime] = useState(new Date())
    const [endSlotTime, setEndSlotTime] = useState()
    const duration = 40
    const [cssDate, setCssDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState()
    const [bookingDateError, setBookingDateError] = useState(false);
    const [isLoggidin, setIsLoggidin] = useState(false);
    const [toggle, setIsToggle] = useState("Text")
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [countryCode, setCountryCode] = useState("91");
    // const [verifyIdentity, setVerifyIdenttity] = useState("");
    const [firstNameError, setFullNameError] = useState("");
    const [invalidEmailError, setInvalidEmailError] = useState(false);
    const [contactNumberError, setContactNumberError] = useState("");
    const [verifyIdentityError, setVerifyIdenttityError] = useState("");
    const [selectedTimeError, setSelectedTimeError] = useState(false);
    const [bookingSummary, setBookingSummary] = useState("")
    const [Stattic, setStattic] = useState("")
    const [StatticDate, setStatticDate] = useState("2022-08-25T07:14:54.349Z")
    const [bookingDate, setBookingDate] = useState(new Date());
    const [dateArray, setDateArray] = useState([]);
    const [allSolts, setAllSolts] = useState([]);
    const [weekDays, setWeekDays] = useState([]);
    const [slotsLeft, setSlotsLeft] = useState();
    const [emailError, setEmailError] = useState(false)

    const [summeryService, setSummeryService] = useState();
    const [summeryDuration, setSummeryDuration] = useState();
    const [summeryPrice, setSummeryPrice] = useState();


    const [firstLabel, setFirstLabel] = useState()
    const [secondLabel, setSecondLabel] = useState()
    const [thirdLabel, setThirdLabel] = useState()

    const [firstPlaceholder, setFirstPlaceholder] = useState()
    const [secondPlaceholder, setSecondPlaceholder] = useState()
    const [thirdPlaceholder, setThirdPlaceholder] = useState()

    const [fieldOne, setFieldOne] = useState("")
    const [fieldTwo, setFieldTwo] = useState("")
    const [fieldThree, setFieldThree] = useState("")

    const [fieldOneData, setFieldOneData] = useState("")
    const [fieldTwoData, setFieldTwoData] = useState("")
    const [fieldThreeData, setFieldThreeData] = useState("")

    const [fieldOneDataError, setFieldOneDataError] = useState(false)
    const [fieldTwoDataError, setFieldTwoDataError] = useState(false)
    const [fieldThreeDataError, setFieldThreeDataError] = useState(false)

    const [fieldValidationOne, setFieldValidationOne] = useState(false)
    const [fieldValidationTwo, setFieldValidationTwo] = useState(false)
    const [fieldValidationThree, setFieldValidationThree] = useState(false)
    const [serviceDisablefrom, setServiceDisablefrom] = useState(false)
    const [serviceDisableto, setServiceDisableto] = useState(false)

    // const { _id } = useParams();
    const router = useRouter();
    const paramsId = router.query;
    const _id = paramsId.index[0];

    // console.log(_id, "_id_id_id_id")
    // const { data, loading } = useSelector((state) => state.institutewebsite);

    useEffect(() => {
        if (Auth.isLogin() || Auth.isSubdomainLogin()) {
            setIsLoggidin(true);
            userFillData()
        } else {
            setIsLoggidin(false);
        }
    }, [users, subdomainUsers]);


    useEffect(() => {
        let data = {
            id: _id,
            userId: Ownerdata.owner
        }
        dispatch(getSingleServiceDetail(businessData._id, data))
    }, [dispatch, _id, businessData, Ownerdata])

    useEffect(() => {
        if (getSingleServiceDetailSuccess) {

            let StatticDays = {
                "Sunday": 0,
                "Monday": 1,
                "Tuesday": 2,
                "Wednesday": 3,
                "Thursday": 4,
                "Friday": 5,
                "Saturday": 6,
            }
            let Days = StatticDays[getSingleServiceDetaildata?.workingDays && getSingleServiceDetaildata?.workingDays[0]?.serviceDay]
            var curr = new Date();
            var first = curr.getDate() - curr.getDay();
            var last = first + 7;
            var lastday = new Date(curr.setDate(last));
            let latestDate = moment(lastday).format("YYYY/MM/DD")
            // dispatch(getAllSlot(_id, businessData._id, lastday, businesstype))


        }
    }, [getSingleServiceDetailSuccess])


    let StatticDays = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
    }
    let Days = StatticDays[getSingleServiceDetaildata?.workingDays && getSingleServiceDetaildata?.workingDays[0]?.serviceDay]
    let curr = new Date();
    let first = curr.getDate() - curr.getDay();
    let last = first + Days + 7;
    let lastday = new Date(curr.setDate(last));
    let latestDate = moment(lastday).format("YYYY/MM/DD")



    useEffect(() => {

        dispatch(getAllSlot(_id, businessData._id, bookingDate, businesstype))

    }, [insID, bookingDate, _id, businesstype])

    const tokenConditionCheck = () => {
        if (AppLinkUrl.subdomain()) {
            if (subdomainUsers.token) {
                return true
            }
        } else {
            if (users.token) {
                return true
            }
        }
    }
    const checkDayFunction = (day) => {
        if (day === "Sunday") {
            return 0;
        } else if (day === "Monday") {
            return 1;
        } else if (day === "Tuesday") {
            return 2;
        } else if (day === "Wednesday") {
            return 3;
        } else if (day === "Thursday") {
            return 4;
        } else if (day === "Friday") {
            return 5;
        } else if (day === "Saturday") {
            return 6;
        }
    }

    useEffect(() => {
        let array = []
        if (getSingleServiceDetaildata && getSingleServiceDetaildata.workingDays?.length > 0) {
            getSingleServiceDetaildata.workingDays.map((item) => {
                if (item.checked === true) {
                    array.push(checkDayFunction(item.serviceDay))
                }
            })
            setWeekDays([...array])
        }

        setFirstLabel(getSingleServiceDetaildata?.data?.firstLabel)
        setSecondLabel(getSingleServiceDetaildata?.data?.secondLabel)
        setThirdLabel(getSingleServiceDetaildata?.data?.thirdLabel)

        setFirstPlaceholder(getSingleServiceDetaildata?.data?.firstPlaceholder)
        setSecondPlaceholder(getSingleServiceDetaildata?.data?.secondPlaceholder)
        setThirdPlaceholder(getSingleServiceDetaildata?.data?.thirdPlaceholder)

        setFieldOne(getSingleServiceDetaildata?.data?.fieldOne)
        setFieldTwo(getSingleServiceDetaildata?.data?.fieldTwo)
        setFieldThree(getSingleServiceDetaildata?.data?.fieldThree)

        setFieldValidationOne(getSingleServiceDetaildata?.data?.fieldValidationOne)
        setFieldValidationTwo(getSingleServiceDetaildata?.data?.fieldValidationTwo)
        setFieldValidationThree(getSingleServiceDetaildata?.data?.fieldValidationThree)
        setSummeryService(getSingleServiceDetaildata?.data?.title)
        setSummeryPrice(getSingleServiceDetaildata?.data?.sessionPrice)

        setSummeryDuration(
            getSingleServiceDetaildata?.data?.hoursDuration && getSingleServiceDetaildata?.data?.duration ?
                `${getSingleServiceDetaildata?.data?.hoursDuration || 0} hour ${getSingleServiceDetaildata?.data?.duration || 0} mint.`
                : getSingleServiceDetaildata?.data?.hoursDuration ? `${getSingleServiceDetaildata?.data?.hoursDuration || 0} hour`
                    : getSingleServiceDetaildata?.data?.duration ? `${getSingleServiceDetaildata?.data?.duration || 0} mint.`
                        : ""
        )

        // serviceDisablefrom: "2022-09-04T18:30:00.000Z"
        // serviceDisableto: "2022-09-09T18:30:00.000Z
        setServiceDisablefrom(new Date(getSingleServiceDetaildata?.data?.serviceDisablefrom))
        setServiceDisableto(new Date(getSingleServiceDetaildata?.data?.serviceDisableto))
    }, [getSingleServiceDetaildata])


    useEffect(() => {
        if (getAllSlotdata && getAllSlotdata.length > 0) {
            getAllSlotdata.map((item) => {
                setAllSolts(item.slots)
            })
        }
    }, [getAllSlotdata])

    //TO GET PRE FILLED DATA WHEN USER IS LOGGED IN
    const userFillData = () => {
        if (AppLinkUrl.subdomain()) {
            setFullName(subdomainUsers.user_fullname)
            setEmail(subdomainUsers.user_email)
            setContactNumber(subdomainUsers.user_contact)
            setFullNameError(false);
            setContactNumberError(false);
        } else {
            setFullName(users.user_fullname)
            setEmail(users.user_email)
            setContactNumber(users.user_contact)
            setFullNameError(false);
            setContactNumberError(false);
        }

    }

    //VALIDATION ON INPUT VALUE IN FORMS
    const handlePersonalDetails = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        switch (inputName) {
            case "Booking_Date":
                setBookingDateError(ValidationUtils.isEmpty());
                break;
            case "Full_Name":
                setFullName(value);
                setFullNameError(ValidationUtils.isEmpty(value));
                break;

            case "Email_Address":
                setEmail(value);
                setInvalidEmailError(ValidationUtils.isEmpty(value));
                break;
            // case "Identity_Number":
            //   setVerifyIdenttity(value);
            //   // setVerifyIdenttityError(ValidationUtils.isEmpty(value));
            //   break;
            case "selectedTime":
                setSelectedTime(value);
                setSelectedTimeError(ValidationUtils.isEmpty(value));
                break;
            case "field_1":
                setFieldOneData(value);
                // setFieldOneDataError(ValidationUtils.isEmpty(value));
                break;
            case "field_2":
                setFieldTwoData(value);
                // setFieldTwoDataError(ValidationUtils.isEmpty(value));
                break;
            case "field_3":
                setFieldThreeData(value);
                // setFieldThreeDataError(ValidationUtils.isEmpty(value));
                break;
            default:
                return false;
        }
    }

    //FUNCTION ON TOGGLE BUTTON 
    const UploadHandler = (toggle) => {
        setIsToggle(toggle)
        if (toggle === "Text") {
            userFillData()
        }
        if (toggle === "someone") {
            setFullName("")
            setEmail("")
            setContactNumber("")
            setBookingDateError(false)
            setSelectedTimeError(false)
        }
    }

    //FUNCTION ON CONTACT NO.
    const handlePhoneInput = (inputValue, countryDetail) => {
        if (inputValue > 9) {
            let dialCode = countryDetail.dialCode;
            let mobile = inputValue.replace(dialCode, "");
            setContactNumber(mobile);
            setCountryCode(dialCode);
            setContactNumberError(ValidationUtils.isEmpty(mobile));
        }
    }
    const numberValidation = () => {
        let isValid = true
        if (contactNumber && countryCode === "91") {
            if (contactNumber.length < 10) {
                isValid = false
                setContactNumberError(true)
            } else {
                isValid = true
                setContactNumberError(false)
            }
        } else {
            isValid = false
        }

        return isValid
    }

    const validEmail = () => {
        let isValid = true
        if (email) {
            if (!ValidationUtils.isEmail(email)) {
                isValid = false
                setEmailError(true)
            } else {
                isValid = true
            }
        } else {
            isValid = true
        }
        return isValid
    }
    const appointmentDetails = {
        institute: businessData._id,
        owner: businessData?.owner,
        service: _id,
        user: AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id,
        booking_date: moment(bookingDate).add(331, "minutes"),
        booking_time: selectedTime,
        full_name: fullName,
        // category: category,
        // sub_category: subCategory,
        business: businessData._id,
        contact: contactNumber,
        email: email,
        countryCode: countryCode,
        // identity: verifyIdentity,
        bookingSlotId: slotsLeft,
        customFields: {
            fieldOneData: fieldOneData,
            fieldTwoData: fieldTwoData,
            fieldThreeData: fieldThreeData
        },
        userId: AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id,
        CartTotal: getSingleServiceDetaildata?.data?.sessionPrice,
    }


    //VALIDATION ON FORM INPUT
    const isFormValid = () => {
        return !ValidationFile.isEmpty(fullName)
            && !ValidationFile.isEmpty(bookingDate)
            && !ValidationFile.isEmpty(selectedTime)
            && !ValidationFile.isEmpty(email)
            && !ValidationFile.isEmpty(contactNumber)
    }
    const isfieldFormValid = () => {
        if (fieldValidationOne && ValidationUtils.isEmpty(fieldOneData)) {
            return false
        }
        if (fieldValidationTwo && ValidationUtils.isEmpty(fieldTwoData)) {
            return false
        }
        if (fieldValidationThree && ValidationUtils.isEmpty(fieldThreeData)) {
            return false
        }
        return true
    }

    function getDates(startDate, endDate) {
        const dates = []
        let currentDate = startDate
        const addDays = function (days) {
            const date = new Date(this.valueOf())
            date.setDate(date.getDate() + days)
            return date
        }
        while (currentDate <= endDate) {
            dates.push(currentDate)
            currentDate = addDays.call(currentDate, 1)
        }
        return dates
    }

    const handleSubmitButton = () => {
        !((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) && history('/login-signup');

        let numberValid = numberValidation()
        setContactNumberError(!numberValid)
        let emailValid = validEmail()
        setEmailError(!emailValid)

        if (isFormValid() && isfieldFormValid() && numberValid && emailValid) {

            dispatch(postAppointmentCart(businessData.business_category, appointmentDetails, history));
        } else {
            setFullNameError(true)
            setInvalidEmailError(true)
            setSelectedTimeError(true)
            setBookingDateError(true)
            setFieldOneDataError(fieldValidationOne)
            setFieldTwoDataError(fieldValidationTwo)
            setFieldThreeDataError(fieldValidationThree)
        }
    }

    const handleTiming = (item, key, timing) => {
        setTimeStart(key)
        setTimeSlot(timing)
        setSlotsLeft(item._id)
        if (timing === "morning") {
            setSelectedTime(item.startTime)
        } else if (timing === "evening") {
            setSelectedTime(item.startTime)
        }
    }

    useEffect(() => {
        return () => {
            dispatch(resetPostAppointmentDetail())
            dispatch(resetGetAllSlot())
        }
    }, [dispatch])

    const data = children;
    const style = {
        WebsiteBookAppoinmentWrapper: data.custom_section_editable[0].style,
        BreadcrumbDiv: data.custom_section_editable[1].style,
        UserBreadcrumbWrap: data.custom_section_editable[2].style,
        AppointmentPara: data.custom_section_editable[3],
        BreadcrumbsItem: data.custom_section_editable[4].style,
        BookAppointmentGrid: data.custom_section_editable[5].style,
        Aside: data.custom_section_editable[6].style,
        CalendarWrap: data.custom_section_editable[7].style,
        CalenderStyle: data.custom_section_editable[8].style,
        BookingCard: data.custom_section_editable[9].style,
        BoookingSumPara: data.custom_section_editable[10],
        BookingParaWrap: data.custom_section_editable[11].style,
        ServicePara: data.custom_section_editable[12],
        SheduleDate: data.custom_section_editable[13],
        SummeryDuration: data.custom_section_editable[14],
        SummeryPrice: data.custom_section_editable[15],
        Timetable: data.custom_section_editable[16].style,
        ShiftWrap: data.custom_section_editable[17].style,
        IconSunrise: data.custom_section_editable[18].style.desktop,
        ShiftPara: data.custom_section_editable[19],
        Col: data.custom_section_editable[20].style,
        Time: data.custom_section_editable[21].style,
        TimeCard: data.custom_section_editable[22].style,
        Dots: data.custom_section_editable[23].style,
        InputCustomType: data.custom_section_editable[24].style,
        Label: data.custom_section_editable[25].style,
        InputRadioStyle: data.custom_section_editable[26].style,
        FromWrapper: data.custom_section_editable[27].style,
        Column: data.custom_section_editable[28].style,
        labelStyles: data.custom_section_editable[29].style,
        InputStyles: data.custom_section_editable[30].style,
        MobileLabel: data.custom_section_editable[31].style,
        MobileInputStyle: data.custom_section_editable[32].style,
        BookBtn: data.custom_section_editable[33],
        LastPara: data.custom_section_editable[34],
        lastSecPara: data.custom_section_editable[35],
        TermsPara: data.custom_section_editable[36],
    }

    return (
        <React.Fragment>
            <WebsiteBookAppoinmentWrapper item={style.WebsiteBookAppoinmentWrapper}>
                <BreadcrumbDiv item={style.BreadcrumbDiv}>
                    <UserBreadcrumbWrap item={style.UserBreadcrumbWrap} item2={style.BreadcrumbsItem}>
                        <Text
                            text={style.AppointmentPara.text}
                            style={style.AppointmentPara.style}
                            tagType={style.AppointmentPara.tagType}
                        />
                        <Breadcrumbs classname={'Breadcrumbs-wrap'}>
                            <BreadcrumbsItem to="/" title="Home" />
                            <BreadcrumbsItem to={`/book-appointment/${_id}`} title="Book an Appointment" />
                        </Breadcrumbs>
                    </UserBreadcrumbWrap>
                    <Link href="/service-selection">
                        <BackButton onClick={() => history(-1)}><i className="icon-arrow">&#10132;</i> Back</BackButton>
                    </Link>

                </BreadcrumbDiv>

                {
                    getSingleServiceDetailSuccess &&
                        getSingleServiceDetaildata ? (
                        <BookAppointmentGrid item={style.BookAppointmentGrid}>
                            <Aside item={style.Aside}>
                                <CalendarWrap
                                    item={style.CalendarWrap}
                                    item2={style.CalenderStyle}
                                >
                                    {
                                        latestDate === "Invalid date" ? "" :
                                            <>
                                                <DatePicker
                                                    selectsRange
                                                    inline
                                                    selected={new Date(bookingDate)}
                                                    name='Booking_Date'
                                                    value={bookingDate}
                                                    onSelect={setBookingDate}
                                                    minDate={new Date()}
                                                    filterDate={(date) => [...weekDays].includes(date.getDay())}
                                                    excludeDates={getDates(new Date(serviceDisablefrom), new Date(serviceDisableto))}
                                                    dateFormat="Pp"
                                                />
                                                <FormError
                                                    show={bookingDateError && !bookingDate}
                                                    error="Booking date is required"
                                                />
                                            </>
                                    }
                                </CalendarWrap>

                                <BookingCard item={style.BookingCard}>
                                    <BookingParaWrap item={style.BookingParaWrap}>
                                        <Text
                                            text={style.BoookingSumPara.text}
                                            style={style.BoookingSumPara.style}
                                            tagType={style.BoookingSumPara.tagType}
                                        />
                                    </BookingParaWrap>
                                    <Text
                                        text={`service: ${summeryService}`}
                                        style={style.ServicePara.style}
                                        tagType={style.ServicePara.tagType}
                                    />
                                    <Text
                                        text={`${moment(bookingDate).format("DD MMMM YYYY, h:mm a")}  ${selectedTime}`}
                                        style={style.SheduleDate.style}
                                        tagType={style.SheduleDate.tagType}
                                    />
                                    <Text
                                        text={`Session Duration : ${summeryDuration}`}
                                        style={style.SummeryDuration.style}
                                        tagType={style.SummeryDuration.tagType}
                                    />
                                    <Text
                                        text={`Session Price : Rs ${summeryPrice}`}
                                        style={style.SummeryPrice.style}
                                        tagType={style.SummeryPrice.tagType}
                                    />
                                </BookingCard>
                            </Aside>

                            <Timetable item={style.Timetable}>
                                {
                                    getAllSlotdata && getAllSlotdata.length ?
                                        <React.Fragment>
                                            {
                                                allSolts.morning && allSolts.morning.length > 0 ? (
                                                    <ShiftWrap item={style.ShiftWrap}>
                                                        <IconSunrise height={style.IconSunrise.height} width={style.IconSunrise.width} />
                                                        <Text
                                                            text={style.ShiftPara.text}
                                                            style={style.ShiftPara.style}
                                                            tagType={style.ShiftPara.tagType}
                                                        />
                                                    </ShiftWrap>
                                                ) : ""
                                            }
                                            <Time item={style.Time}>
                                                {
                                                    allSolts && allSolts.morning && allSolts.morning.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => handleTiming(item, key, "morning")}
                                                            disabled={item.available === 0}
                                                            name="selectedTime"
                                                            style={{ desktop: { width: "auto", backgroundColor: "transparent" } }}
                                                        >
                                                            <Col item={style.Col}>
                                                                <TimeCard item={style.TimeCard} className={timestart === key && timeSlot === "morning" ? 'active' : ''}>
                                                                    <Dots item={style.Dots} > </Dots>
                                                                    {item.startTime.split(":")[1] === "0" ? (
                                                                        `${item.startTime.split(":")[0] + ":00"}`
                                                                    ) :
                                                                        item.startTime.split(":")[1].length === 1 ?
                                                                            (`${item.startTime.split(":")[0] + ":0" + item.startTime.split(":")[1]}`)
                                                                            :
                                                                            (
                                                                                item.startTime
                                                                            )
                                                                    }
                                                                </TimeCard>
                                                                <SlotAvailable>{item.available} Slots</SlotAvailable>
                                                            </Col>
                                                        </Button>
                                                    ))
                                                }
                                            </Time>

                                            {
                                                allSolts.evening && allSolts.evening.length > 0 ? (
                                                    <ShiftWrap item={style.ShiftWrap}>
                                                        <Sunset height={style.IconSunrise.height} width={style.IconSunrise.width} />
                                                        <Text
                                                            text={'Evening'}
                                                            style={style.ShiftPara.style}
                                                            tagType={style.ShiftPara.tagType}
                                                        />
                                                    </ShiftWrap>
                                                ) : ""
                                            }

                                            <Time item={style.Time}>
                                                {
                                                    allSolts && allSolts.evening && allSolts.evening.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            name="selectedTime"
                                                            onClick={() => handleTiming(item, key, "evening")}
                                                            disabled={item.available === 0}
                                                        >
                                                            <Col item={style.Col}>
                                                                <TimeCard item={style.TimeCard} className={timestart === key && timeSlot === "evening" ? 'active' : ''}>
                                                                    <Dots item={style.Dots} > </Dots>
                                                                    {item.startTime.split(":")[1] === "0" ? (
                                                                        `${item.startTime.split(":")[0] + ":00"}`
                                                                    ) :
                                                                        item.startTime.split(":")[1].length === 1 ?
                                                                            (`${item.startTime.split(":")[0] + ":0" + item.startTime.split(":")[1]}`)
                                                                            :
                                                                            (
                                                                                item.startTime
                                                                            )
                                                                    }
                                                                </TimeCard>
                                                                <div>{item.available} Slots</div>
                                                            </Col>
                                                        </Button>
                                                    ))
                                                }
                                                <FormError
                                                    show={selectedTimeError && !selectedTime}
                                                    error="Please Provide Date and Time"
                                                    className='visitorFormError mb-5'
                                                />
                                            </Time>
                                        </React.Fragment> :
                                        <div>
                                            <p className='no-slot-p'>No slots are available! Please select another date. </p>
                                        </div>
                                }

                                {
                                    tokenConditionCheck() ? (
                                        <InputCustomType item={style.InputCustomType} className="inline mb-40">
                                            <Label htmlFor='radio1' item={style.Label} className={toggle === "first" ? "active" : ""}>
                                                <InputRadio
                                                    type="radio"
                                                    defaultChecked={true}
                                                    name="user"
                                                    item={style.InputRadioStyle}
                                                    id={"radio1"}
                                                    checked={toggle === "Text"}
                                                    onChange={() => UploadHandler("Text")}
                                                />
                                                {users.user_fullname ? users.user_fullname : "Self"}
                                            </Label>
                                            <Label htmlFor='radio2' item={style.Label} className={toggle === "someone" ? "active" : ""}>
                                                <InputRadio
                                                    type="radio"
                                                    name="user"
                                                    item={style.InputRadioStyle}
                                                    id='radio2'
                                                    checked={toggle === "someone"}
                                                    onChange={() => UploadHandler("someone")}
                                                />
                                                Someone Else
                                            </Label>
                                        </InputCustomType>
                                    ) : ""
                                }

                                <FromWrapper item={style.FromWrapper}>
                                    <Column item={style.Column} >
                                        <FormFieldwrap>
                                            <FormInput
                                                type="text"
                                                name="Full_Name"
                                                label="Full Name*"
                                                placeholder="Enter your full name"
                                                labelPosition="top"
                                                LabelStyle={style.labelStyles}
                                                InputStyle={style.InputStyles}
                                                value={fullName}
                                                onChange={handlePersonalDetails}
                                                onKeyUp={handlePersonalDetails}
                                            />
                                            <FormError
                                                show={firstNameError && !fullName}
                                                error="Full name is required."
                                                className='visitorFormError'
                                            />
                                        </FormFieldwrap>
                                    </Column>
                                    <Column item={style.Column}>
                                        <FormFieldwrap>
                                            <FormInput
                                                type="text"
                                                name="Email_Address"
                                                label="Email Address*"
                                                placeholder="Enter your email address"
                                                labelPosition="top"
                                                LabelStyle={style.labelStyles}
                                                InputStyle={style.InputStyles}
                                                value={email}
                                                onChange={handlePersonalDetails}
                                                onKeyUp={handlePersonalDetails}
                                            />
                                            <FormError
                                                show={!email && invalidEmailError}
                                                error=" Email is required."
                                                className='visitorFormError'
                                            />
                                            <FormError
                                                show={email && emailError}
                                                error="Invalid Email."
                                            />

                                        </FormFieldwrap>
                                    </Column>
                                    <Column item={style.Column}>
                                        <FormFieldwrap>
                                            <MobileLabel item={style.MobileLabel}>
                                                Mobile Number*
                                            </MobileLabel>
                                            <PhoneInputWrap item={style.MobileInputStyle}>
                                                <PhoneInput
                                                    countryCodeEditable={false}
                                                    containerClass="form-group"
                                                    inputClass="form-control"
                                                    specialLabel
                                                    country={"in"}
                                                    value={`${countryCode} ${contactNumber} `}
                                                    inputProps={{
                                                        name: "phone",
                                                        required: true,
                                                        autoFocus: false,
                                                        placeholder: "Enter mobile",
                                                    }}
                                                    enableSearch
                                                    name="mobileNo"
                                                    searchPlaceholder="Search Country"
                                                    disableSearchIcon
                                                    onChange={(value, formattedValue) => {
                                                        handlePhoneInput(value, formattedValue);
                                                    }}
                                                    onKeyUp={(value, formattedValue) => {
                                                        handlePhoneInput(value, formattedValue);
                                                    }}
                                                />

                                                <FormError
                                                    show={!contactNumber && contactNumberError}
                                                    error="Contact number is required."
                                                    className='visitorFormError'
                                                />
                                                <FormError
                                                    show={contactNumber && countryCode === "91" && contactNumberError}
                                                    error="Invalid Contact."
                                                    className='visitorFormError'
                                                />
                                            </PhoneInputWrap>
                                        </FormFieldwrap>
                                    </Column>

                                    {fieldOne ? <Column item={style.Column}>
                                        <FormFieldwrap>
                                            <FormInput
                                                type="text"
                                                name="field_1"
                                                value={fieldOneData}
                                                onChange={handlePersonalDetails}
                                                onKeyUp={handlePersonalDetails}
                                                label={firstLabel}
                                                placeholder={firstPlaceholder}
                                            />
                                            <FormError
                                                show={!fieldOneData && fieldOneDataError}
                                                error="This Field is Required"
                                                className='visitorFormError'
                                            />
                                        </FormFieldwrap>
                                    </Column> : ""}

                                    {fieldTwo ? <Column item={style.Column}>
                                        <FormFieldwrap>
                                            <FormInput
                                                type="text"
                                                name="field_2"
                                                value={fieldTwoData}
                                                onChange={handlePersonalDetails}
                                                onKeyUp={handlePersonalDetails}
                                                label={secondLabel}
                                                placeholder={secondPlaceholder}
                                            />
                                            <FormError
                                                show={!fieldTwoData && fieldTwoDataError}
                                                error="This Field is Required"

                                                className='visitorFormError'
                                            />
                                        </FormFieldwrap>
                                    </Column> : ""}

                                    {fieldThree ? <Column item={style.Column}>
                                        <FormFieldwrap>
                                            <FormInput
                                                type="text"
                                                name="field_3"
                                                value={fieldThreeData}
                                                onChange={handlePersonalDetails}
                                                onKeyUp={handlePersonalDetails}
                                                label={thirdLabel}
                                                placeholder={thirdPlaceholder}
                                            />
                                            <FormError
                                                show={!fieldThreeData && fieldThreeDataError}
                                                error="This Field is Required"
                                                className='visitorFormError'
                                            />
                                        </FormFieldwrap>
                                    </Column> : ""}

                                </FromWrapper>
                                <Button
                                    text={businessData && businessData?.dynamic_header_button ? businessData?.dynamic_header_button : 'BOOK APPOINTMENT'}
                                    style={style.BookBtn.style}
                                    tagType={style.BookBtn.tagType}
                                    type="submit" className="button button-primary"
                                    onClick={handleSubmitButton}
                                />
                                <Term>
                                    <Text
                                        text={style.LastPara.text}
                                        style={style.LastPara.style}
                                        tagType={style.LastPara.tagType}
                                    />
                                    <Text
                                        text={`By booking this appointment, you agree to ${Ownerdata?.businessData?.business_name ? `${Ownerdata?.businessData?.business_name} ` : "Essura Pharmacy"}`}
                                        style={style.lastSecPara.style}
                                        tagType={style.lastSecPara.tagType}
                                    />
                                    <AnchorElement
                                        text={style.TermsPara.text}
                                        style={style.TermsPara.style}
                                    />

                                </Term>
                            </Timetable>
                        </BookAppointmentGrid>
                    ) : (
                        <h2>loading...</h2>
                    )
                }
            </WebsiteBookAppoinmentWrapper>
        </React.Fragment>
    );

}

export default ServiceListTheme2

