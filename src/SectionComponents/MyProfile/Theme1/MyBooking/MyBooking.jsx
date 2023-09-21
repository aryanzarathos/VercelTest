import React, { useContext, useEffect, useRef, useState } from 'react'
import { MyBookingWrapper, Table, Thead, Tbody, NameWrap, ServiceWrap, TimeWrap, ActionWrap, Recordfound, Loading } from './MyBooking.style'
import MyBookingPopUp from './MyBookingPopUp/MyBookingPopUp'
import { MyProfile } from '../Theme1';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import BackBtnImg from '../../../../../src/Assets/SectionComponent/Icons/backBtn.svg'
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMainServiceList, getuserBookingList } from '@/store/actions/bookAppointment';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import moment from 'moment/moment';
import { BackBtn } from '../Orders/Orders.style';
import { ButtonElement } from '@/SectionsLayout/Elements/ButtonElement/ButtonStyle';
import { activateProfile } from '@/store/actions/myprofile';
const MyBooking = () => {
    const settingRef = useRef(null);
    const ActionHandleOpen = () => {
        settingRef.current.open();
    };
    const ActionHandleClose = () => {
        settingRef.current.close();
    };
    const data = useContext(MyProfile);

    const style = {
        MyBookingWrapper: data?.custom_section_editable[155]?.style,
        Table: data?.custom_section_editable[156]?.style,
        Thead: data?.custom_section_editable[157]?.style,
        trStyle: data?.custom_section_editable[158]?.style,
        thStyle: data?.custom_section_editable[159]?.style,
        TbodyTR: data?.custom_section_editable[160]?.style,
        TbodyTD: data?.custom_section_editable[161]?.style,
        Name: data?.custom_section_editable[162],
        DatePara: data?.custom_section_editable[163],
        ServicePara: data?.custom_section_editable[164],
        ServiceUserName: data?.custom_section_editable[165],
        TimeSlotPara: data?.custom_section_editable[166],
        UpcomingPara: data?.custom_section_editable[167],
        CancelBtnStyle: data?.custom_section_editable[168],
        RescheduleBtnStyle: data?.custom_section_editable[169],
        BackBtnImg: data?.custom_section_editable[150],
        ProductBackBtnSvg: data?.custom_section_editable[69]?.style,
        ProductBackBtnLink: data?.custom_section_editable[68]?.style,
        ProductBackBtnText: data?.custom_section_editable[70]?.style,
        ProductBackBtn: data?.custom_section_editable[67]?.style

    }

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [serviceIDArr, setServiceIDArr] = useState([]);
    const { institute, users, getBookingListData, serviceListData, getBookingListSuccess, businesstype, subdomainInstitute, subdomainUserID, subdomainBusinesstype } = useSelector((state) => {
        return {
            users: state.user,
            institute: state.user.user_institute,
            businesstype: state.user.user_business_type,
            subdomainInstitute: state.subdomainuser.user_institute,
            subdomainUserID: state.subdomainuser._id,
            subdomainBusinesstype: state.subdomainuser.user_business_type,
            serviceListloading: state.bookAppointment.getallServiceList.loading,
            serviceListsuccess: state.bookAppointment.getallServiceList.success,
            serviceListData: state.bookAppointment.getallServiceList.data,
            getBookingListLoading: state.bookAppointment.getusermylist.loading,
            getBookingListData: state.bookAppointment.getusermylist.data,
            getBookingListSuccess: state.bookAppointment.getusermylist.success,
            // edituserBookingListData: state.bookAppointmentUserside.edituserBookingList.data,
            // edituserBookingListSuccess: state.bookAppointmentUserside.edituserBookingList.success,
        };
    })
    const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data);
    const finalData = AppLinkUrl.isEditor() ? [
        {
            _id: '64cb9f76afdd8a08e365daa1',
            isStatus: 'Pending',
            emailNotify: 'No',
            isDeleted: false,
            booking_date: '2023-08-03T18:07:43.628Z',
            user: '64cb9f3e2498526fb4768cdb',
            booking_time: '10:00',
            business: '64c5529b18c35506c9d46344',
            contact: '8130643515',
            countryCode: '91',
            full_name: 'Muskaan',
            owner: '64c4fc21b8849e081d1b9cb7',
            payment_success: false,
            service: {
                _id: '64ca0120afdd8a08e365bf30',
                isDeleted: false,
                isActive: true,
                isHide: false,
                visibleOneSite: true,
                markAsFeatured: true,
                fieldOne: false,
                fieldTwo: false,
                fieldThree: false,
                fieldValidationOne: false,
                fieldValidationTwo: false,
                fieldValidationThree: false,
                allowClientsOnline: true,
                metaKeywords: [
                    ''
                ],
                unCategorized: false,
                owner: '64c4fc21b8849e081d1b9cb7',
                business: '64c5529b18c35506c9d46344',
                title: 'Neuro Surgery',
                description: '<p>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:<br><br>1st &amp; only Cath Lab (Innova IGS530, GE-USA) in North India with wide detector &amp; tilt table, suitable for both Cardio-Vascular &amp; Neuro Interventional procedures with advanced 3D imaging &amp; CT like images.<br><br>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:<br></p>',
                image: {
                    isDeleted: false,
                    _id: '64ca0101038f6b0809954894',
                    business: '64c5529b18c35506c9d46344',
                    owner: '64c4fc21b8849e081d1b9cb7',
                    src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxOZXVybyUyMFN1cmdlcnl8ZW58MHx8fHwxNjkwOTYwMTI1fDA&ixlib=rb-4.0.3&q=80&w=1080',
                    title: null,
                    desc: '',
                    alt: 'two men wearing blue lab coats',
                    size: 0,
                    key: '',
                    type: 'img',
                    createdAt: '2023-08-02T07:08:49.585Z',
                    updatedAt: '2023-08-02T07:08:49.585Z',
                    __v: 0
                },
                hoursDuration: 1,
                duration: 5,
                sessionPrice: 1000,
                main_category: '64c5595456be09085cab6917',
                slots: 10,
                serviceDisablefrom: null,
                serviceDisableto: null,
                firstPlaceholder: '',
                secondPlaceholder: '',
                thirdPlaceholder: '',
                metaTitle: '',
                metaDescription: '',
                urlSlug: 'Neuro-Surgery',
                createdAt: '2023-08-02T07:09:20.004Z',
                updatedAt: '2023-08-02T07:09:20.004Z',
                __v: 0
            },
            createdAt: '2023-08-03T12:37:10.637Z',
            updatedAt: '2023-08-03T12:37:10.637Z',
            servicename: 'Neuro Surgery'
        }
    ] : getBookingListData
    useEffect(() => {
        if (AppLinkUrl.privateDomain()) {
            dispatch(getAllMainServiceList(businessData._id, businessData.type))
        } else {
            dispatch(getAllMainServiceList(businessData._id, businessData.type))
        }

    }, [])

    useEffect(() => {
        if (AppLinkUrl.privateDomain()) {
            dispatch(getuserBookingList(users._id, [serviceIDArr], businesstype));
        } else {
            dispatch(getuserBookingList(subdomainUserID, [serviceIDArr], subdomainBusinesstype));
        }

    }, []);


    useEffect(() => {
        if (serviceListData && serviceListData.length > 0) {
            let array = []
            serviceListData && serviceListData.map((item) => {
                array.push(item._id)
            })
            setServiceIDArr([...array])
        }
    }, [serviceListData])

    // const filterValues = ["sortOrder"];
    // const selectGroup = [
    //     "upcomming",
    //     "Recent to Old",
    //     "Old to Recent"]

    // const SingleSelectHandel = (value) => {
    //     let inputValue = e.target.value;
    //     const inputValue = value
    //     switch (inputValue) {
    //         case "upcomming":
    //             dispatch(getUserBookingListSort(AppLinkUrl.privateDomain() ? users._id : subdomainUserID, "Upcomming", [serviceIDArr], AppLinkUrl.privateDomain() ? businesstype : subdomainBusinesstype));
    //             break;
    //         case "Recent to Old":
    //             dispatch(getUserBookingListSort(AppLinkUrl.privateDomain() ? users._id : subdomainUserID, "rto", [serviceIDArr], AppLinkUrl.privateDomain() ? businesstype : subdomainBusinesstype));
    //             break;
    //         case "Old to Recent":
    //             dispatch(getUserBookingListSort(AppLinkUrl.privateDomain() ? users._id : subdomainUserID, "otr", [serviceIDArr], AppLinkUrl.privateDomain() ? businesstype : subdomainBusinesstype));
    //             break;
    //         default:
    //             dispatch(getuserBookingList(AppLinkUrl.privateDomain() ? users._id : subdomainUserID, [serviceIDArr], AppLinkUrl.privateDomain() ? businesstype : subdomainBusinesstype));
    //     }
    // };

    // useEffect(() => {
    //     if (searchTerm) {
    //         dispatch(getBookinguserListSearch(AppLinkUrl.privateDomain() ? users._id : subdomainUserID, [serviceIDArr], searchTerm, AppLinkUrl.privateDomain() ? businesstype : subdomainBusinesstype));
    //     }
    // }, [dispatch, users, searchTerm]);

    // let typing;
    // const searchInputHandel = (evt) => {
    //     evt.preventDefault();
    //     clearTimeout(typing);
    //     typing = setTimeout(() => {
    //         setSearchTerm(evt.target.value);
    //     }, 400);
    //     if (!evt.target.value) {
    //         clearTimeout(typing);
    //         setSearchTerm("");
    //     }
    // };

    const stylesButton = {
        display: "flex",
        fontSize: "16px",
        borderStyle: "none",
        alignItems: "center",
        gap: "12px",
        background: "transparent"
    }

    return (
        <React.Fragment>
            <BackBtn item={style?.ProductBackBtn} itemProductBackBtnSvg={style?.ProductBackBtnSvg}>
                <ButtonElement onClick={() => dispatch(activateProfile(""))} style={stylesButton}>
                    <BackBtnImg fill={style?.BackBtnImg} />
                    <Text tagType={data?.custom_section_editable[70]?.tagType}
                        style={style?.ProductBackBtnText}
                        text={"My Bookings"} />
                </ButtonElement>
            </BackBtn>

            <MyBookingWrapper
                item={style.MyBookingWrapper}
                Table={style.Table}
                TbodyTR={style.TbodyTR}
                TbodyTD={style.TbodyTD}
                Thead={style.Thead}
                trStyle={style.trStyle}
                thStyle={style.thStyle}
            >
                <table>
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Service</th>
                            <th>Time Slot</th>
                            {

                                // <th>Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {getBookingListSuccess || AppLinkUrl.isEditor() ?
                            (finalData && finalData.length ?
                                (
                                    finalData.map((item, key) => {

                                        return (
                                            <tr key={key}>
                                                <td >
                                                    <NameWrap>
                                                        <Text
                                                            text={item.full_name}
                                                            style={style.Name.style}
                                                            tagType={style.Name.tagType}
                                                        />
                                                        <Text
                                                            text={moment(item.booking_date).format("DD-MM-YYYY")}
                                                            style={style.DatePara.style}
                                                            tagType={style.DatePara.tagType}
                                                        />
                                                    </NameWrap>
                                                </td>
                                                <td>
                                                    <ServiceWrap>
                                                        {
                                                            // <Text
                                                            //     text={style.ServicePara.text}
                                                            //     style={style.ServicePara.style}
                                                            //     tagType={style.ServicePara.tagType}
                                                            // />

                                                        }
                                                        <Text
                                                            text={item.servicename}
                                                            style={style.ServicePara.style}
                                                            tagType={style.ServiceUserName.tagType}
                                                        />
                                                    </ServiceWrap>
                                                </td>
                                                <td>
                                                    <TimeWrap>
                                                        <Text
                                                            text={
                                                                item.booking_time.split(":")[1] === "0" ? (
                                                                    `${item.booking_time.split(":")[0] + ":00"}`
                                                                ) :
                                                                    item.booking_time.split(":")[1].length === 1 ?
                                                                        (`${item.booking_time.split(":")[0] + ":0" + item.booking_time.split(":")[1]}`)
                                                                        :
                                                                        (
                                                                            item.booking_time
                                                                        )
                                                            }
                                                            style={style.TimeSlotPara.style}
                                                            tagType={style.TimeSlotPara.tagType}
                                                        />
                                                        {/* Classes for States ---->>>> upcoming , rejected , completed */}
                                                        <Text
                                                            text={item.isStatus === "Pending" && item?.payment_success == true ? "Upcomming" : item?.payment_success == false ? "Transaction Failed" : item.isStatus}
                                                            style={style.UpcomingPara.style}
                                                            tagType={style.UpcomingPara.tagType}
                                                            className={`upcoming ${item.isStatus === "Rejected" ? "rejected" : ""}  ${item.isStatus === "Accepted" ? "completed" : ""}`}
                                                        />
                                                    </TimeWrap>
                                                </td>
                                                {

                                                    // <td>
                                                    //     <ActionWrap>
                                                    //         <Button
                                                    //             text={style.CancelBtnStyle.text}
                                                    //             style={style.CancelBtnStyle.style}
                                                    //             onClick={ActionHandleOpen}
                                                    //         />
                                                    //         <Button
                                                    //             text={style.RescheduleBtnStyle.text}
                                                    //             style={style.RescheduleBtnStyle.style}
                                                    //             onClick={ActionHandleOpen}
                                                    //         />
                                                    //         {/* <button onClick={ActionHandleOpen}>Cancel</button> */}
                                                    //         {/* <button >Reschedule</button> */}
                                                    //     </ActionWrap>
                                                    // </td>
                                                }
                                            </tr>
                                        )
                                    })
                                ) : <Recordfound colSpan={4}>No Records Found.</Recordfound>
                            ) : <Loading colSpan={4}>Loading...</Loading>
                        }
                    </tbody>
                </table>
                <MyBookingPopUp ModalsRef={settingRef} onClose={ActionHandleClose} />
            </MyBookingWrapper >
        </React.Fragment>
    )
}

export default MyBooking
