import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import { Container } from '../../../../SectionCommon/Containers/Container.styled'
// import Tabs from '../../../CommonComponents/Tabs/Tabs';
// import AppLink from '../../../../../../Common/AppLink'


import PersonalDetailsForm from '../PersonalDetail/PersonalDetails';
import Orders from '../Orders/Orders';
// import SavedAddressTheme1 from '../../SavedAddress/Theme1';
import Sidebar from '../Sidebar/Sidebar';
import Address from '../Address/Address';
// import Breadcrumbs from '../../../CommonComponent/Breadcrumbs';
import Filters from '../../../Filters';
import { ContainerRytMain, ContainerRight, MainContainer, MyProfileContainer } from './Desktop.style';
import { MyProfile } from '../Theme1';
import useMyProfile from '@/TemplateCustomHooks/useMyProfile';
import { useSelector } from 'react-redux';
import MyBooking from '../MyBooking/MyBooking';


const MyProfileDesktop = ({ OverFlow }) => {

    const data = useContext(MyProfile);

    const { activeProfile } = useSelector((state) => {
        return {
            activeProfile: state.myProfile.activeProfile
        }
    });


    const [active, setActive] = useState("Personal Details");

    const [openCropper, uploadProfileImage, userProfileImage, removeProfileImage, handleProfileOnChange, Active, clickHandler,
        handleSelectGender, gender, fullname, emailAddress, contactNumber, countryCode, handlePhoneInput, dob,
        disabledEmail, handleVerifyEmailButton, verifyState, emailError, isError, valueIsValid, errorMessage, successMessage, success,
        disabledContact, error, handleVerifyCancelButton, handleVerifyContactButton, handleChangeButton, handleCancelButton, handleSaveButton,
        setVerifyState, subdomainuser, verifyOtpoading, resetAll, isSubmit, setdisabledContact, setdisabledEmail] = useMyProfile();



    const getActiveTab = (currentTab) => {
        setActive(currentTab)

    }

    let styles = {
        MyProfileContainer: data?.custom_section_editable[0]?.style,
        MainContainer: data?.custom_section_editable[1]?.style,
        ContainerRight: data?.custom_section_editable[2]?.style,
        ContainerRytMain: data?.custom_section_editable[154]?.style,
    }
    return (
        <MyProfileContainer item={styles?.MyProfileContainer}>

            <MainContainer item={styles?.MainContainer}>
                <Sidebar activeProfile={activeProfile} openCropper={openCropper} uploadProfileImage={uploadProfileImage} userProfileImage={userProfileImage}
                    removeProfileImage={removeProfileImage} />
                <ContainerRytMain item={styles.ContainerRytMain}>
                    <ContainerRight className={OverFlow === false ? 'OverflowInitial' : ''} item={styles?.ContainerRight}>
                        {/* {  active === "Personal Details" ? <PersonalDetailsForm /> :
                            active === "Orders" ? <Orders /> :
                                active === "Saved Address" ? <Address /> : ""} */}

                        {activeProfile === "Personal Details" ?
                            <PersonalDetailsForm
                                handleProfileOnChange={handleProfileOnChange} Active={Active} clickHandler={clickHandler} handlePhoneInput={handlePhoneInput} dob={dob}
                                handleSelectGender={handleSelectGender} gender={gender} fullname={fullname} emailAddress={emailAddress} contactNumber={contactNumber} countryCode={countryCode}
                                disabledEmail={disabledEmail} handleVerifyEmailButton={handleVerifyEmailButton} verifyState={verifyState} emailError={emailError} isError={isError} valueIsValid={valueIsValid}
                                errorMessage={errorMessage} successMessage={successMessage} success={success}
                                disabledContact={disabledContact} error={error} handleVerifyCancelButton={handleVerifyCancelButton} handleVerifyContactButton={handleVerifyContactButton} handleChangeButton={handleChangeButton}
                                handleCancelButton={handleCancelButton} handleSaveButton={handleSaveButton} setVerifyState={setVerifyState} subdomainuser={subdomainuser} verifyOtpoading={verifyOtpoading} resetAll={resetAll}
                                isSubmit={isSubmit} setdisabledContact={setdisabledContact} setdisabledEmail={setdisabledEmail}
                            /> :
                            activeProfile === "Orders" ? <Orders /> :
                                activeProfile === "My Bookings" ? <MyBooking /> :
                                    activeProfile === "Saved Address" ?
                                        <Address />
                                        :
                                        <PersonalDetailsForm
                                            handleProfileOnChange={handleProfileOnChange} Active={Active} clickHandler={clickHandler} handlePhoneInput={handlePhoneInput} dob={dob}
                                            handleSelectGender={handleSelectGender} gender={gender} fullname={fullname} emailAddress={emailAddress} contactNumber={contactNumber} countryCode={countryCode}
                                            disabledEmail={disabledEmail} handleVerifyEmailButton={handleVerifyEmailButton} verifyState={verifyState} emailError={emailError} isError={isError} valueIsValid={valueIsValid}
                                            errorMessage={errorMessage} successMessage={successMessage} success={success}
                                            disabledContact={disabledContact} error={error} handleVerifyCancelButton={handleVerifyCancelButton} handleVerifyContactButton={handleVerifyContactButton} handleChangeButton={handleChangeButton}
                                            handleCancelButton={handleCancelButton} handleSaveButton={handleSaveButton} setVerifyState={setVerifyState} subdomainuser={subdomainuser} verifyOtpoading={verifyOtpoading} resetAll={resetAll}
                                            isSubmit={isSubmit} setdisabledContact={setdisabledContact} setdisabledEmail={setdisabledEmail}
                                        />
                        }
                    </ContainerRight>
                </ContainerRytMain>
            </MainContainer>

        </MyProfileContainer>
    )
}

export default MyProfileDesktop