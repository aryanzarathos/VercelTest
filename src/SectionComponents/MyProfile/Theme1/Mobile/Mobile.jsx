import React, { useContext, useRef } from 'react'
import styled from 'styled-components';
// import AppLink from '../../../../../../Common/AppLink';
import ProfileImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile.svg';
// import ProfileImg2 from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile1.webp';
import LogoutImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/logout.svg';
import Link from 'next/link';
import Image from 'next/image';
import { AddProfile, BtnMBL, ContainerLeft, Heading, LogoutBtn, LogoutButton, LogoutContainer, ProfileImage, TabsIndex } from './Mobile.style';
import { MyProfile } from '../Theme1';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import AnchorElement from '../../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import { useDispatch, useSelector } from 'react-redux';
import useMyProfile from '@/TemplateCustomHooks/useMyProfile';
import Uploader from '@/CommonComponents/ImageUploader';
import { activateProfile } from '@/store/actions/myprofile';
import Orders from '../Orders/Orders';
import PersonalDetails from '../PersonalDetail/PersonalDetails';
import Address from '../Address/Address';
import MyBooking from '../MyBooking/MyBooking';
import Auth from '@/Classes/Auth';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const MyProfileMobile = () => {
  const navigate = useAppNavigate();
  const cropperRef = useRef();
  const dispatch = useDispatch();

  const { activeProfile } = useSelector((state) => {
    return {
      activeProfile: state.myProfile.activeProfile
    }
  });

  const [openCropper, uploadProfileImage, userProfileImage, removeProfileImage, handleProfileOnChange, Active, clickHandler,
    handleSelectGender, gender, fullname, emailAddress, contactNumber, countryCode, handlePhoneInput, dob,
    disabledEmail, handleVerifyEmailButton, verifyState, emailError, isError, valueIsValid, errorMessage, successMessage, success,
    disabledContact, error, handleVerifyCancelButton, handleVerifyContactButton, handleChangeButton, handleCancelButton, handleSaveButton,
    setVerifyState, subdomainuser, verifyOtpoading, resetAll, isSubmit, setdisabledContact, setdisabledEmail] = useMyProfile();

  const data = useContext(MyProfile);
  let styles = {
    MobileContainerLeft: data?.custom_section_editable[135]?.style,
    MobileHeading: data?.custom_section_editable[136]?.style,
    MobileProfileImage: data?.custom_section_editable[137]?.style,
    MobileUserProfileImage: data?.custom_section_editable[138]?.style,
    MobileUserProfileSvg: data?.custom_section_editable[139]?.style,
    MobileAddProfile: data?.custom_section_editable[140]?.style,
    MobileAddProfileButton: data?.custom_section_editable[141]?.style,
    MoblieTabsIndex: data?.custom_section_editable[142]?.style,
    MoblieTabsIndexLink: data?.custom_section_editable[143]?.style,
    MoblieTabsIndexButton: data?.custom_section_editable[144]?.style,
    MobileLogoutContainer: data?.custom_section_editable[145]?.style,
    MobileLogoutContainerLink: data?.custom_section_editable[146]?.style,
    MobileLogOutSvg: data?.custom_section_editable[147]?.style,
    MobileLogoutBtn: data?.custom_section_editable[148]?.style,
  }

  const handleActive = (title) => {
    dispatch(activateProfile(title))
  }
  const logoutHandler = () => {
    Auth.logout();
    navigate("/");
  };
  return (
    <React.Fragment>
      {activeProfile === "Personal Details" ?
        <PersonalDetails mobileView={true}
          handleProfileOnChange={handleProfileOnChange} Active={Active} clickHandler={clickHandler} handlePhoneInput={handlePhoneInput} dob={dob}
          handleSelectGender={handleSelectGender} gender={gender} fullname={fullname} emailAddress={emailAddress} contactNumber={contactNumber} countryCode={countryCode}
          disabledEmail={disabledEmail} handleVerifyEmailButton={handleVerifyEmailButton} verifyState={verifyState} emailError={emailError} isError={isError} valueIsValid={valueIsValid}
          errorMessage={errorMessage} successMessage={successMessage} success={success}
          disabledContact={disabledContact} error={error} handleVerifyCancelButton={handleVerifyCancelButton} handleVerifyContactButton={handleVerifyContactButton} handleChangeButton={handleChangeButton}
          handleCancelButton={handleCancelButton} handleSaveButton={handleSaveButton} setVerifyState={setVerifyState} subdomainuser={subdomainuser} verifyOtpoading={verifyOtpoading} resetAll={resetAll}
          isSubmit={isSubmit} setdisabledContact={setdisabledContact} setdisabledEmail={setdisabledEmail}
        />
        : activeProfile === "Orders" ? <Orders mobileView={true}
        /> :
          activeProfile === "My Bookings" ? <MyBooking />
            : activeProfile === "Saved Address" ?
              <Address mobileView={true} /> :
              <ContainerLeft item={styles?.MobileContainerLeft}>
                {/* <Heading>My profile</Heading> */}
                <Text tagType={data?.custom_section_editable[136]?.tagType}
                  style={styles?.MobileHeading}
                  text={data?.custom_section_editable[136]?.text} />
                {/* <UserImg></UserImg> */}

                <ProfileImage item={styles?.MobileProfileImage} itemProfileSvg={styles?.MobileUserProfileSvg}>
                  {
                    userProfileImage?.src ?
                      // <ImageViewer object={userProfileImage} />
                      <ImageElement src={userProfileImage} style={styles?.UserProfileImage} alt={"user Image"} />
                      :
                      <ProfileImg />
                  }
                </ProfileImage>

                {/* <AddProfile>Add Profile Picture</AddProfile> */}


                {userProfileImage ?
                  <>
                    <AddProfile item={styles?.MobileAddProfile}>
                      <Button text={'Remove Picture'} style={styles.MobileAddProfileButton} onClick={removeProfileImage} />
                    </AddProfile>
                    <AddProfile item={styles?.MobileAddProfile}>
                      <Button text={'Save Picture'} style={styles.MobileAddProfileButton} onClick={() => handleSaveButton()} />
                    </AddProfile>
                  </>
                  :
                  <AddProfile item={styles?.MobileAddProfile}>
                    <Button text={'Add Profile Picture'} style={styles.MobileAddProfileButton} onClick={() => openCropper(cropperRef)} />
                  </AddProfile>
                }
                <Uploader size={5}
                  accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                  onclose={() => cropperRef?.current?.close()}
                  multiSelect={false} discartRef={cropperRef} onUploaded={(val) => uploadProfileImage(val)} uploadLimit={1} />

                {/* Start Tabs */}
                <TabsIndex item={styles?.MoblieTabsIndex}>
                  <AnchorElement link="/my-personal-details" style={styles?.MoblieTabsIndexLink}>
                    <Button style={styles?.MoblieTabsIndexButton} text={"Personal Details"} onClick={() => handleActive("Personal Details")} />
                  </AnchorElement>
                  <AnchorElement link="/my-personal-details" style={styles?.MoblieTabsIndexLink}>
                    <Button style={styles?.MoblieTabsIndexButton} text={"Orders"} onClick={() => handleActive("Orders")} />
                  </AnchorElement>
                  <AnchorElement link="/my-personal-details" style={styles?.MoblieTabsIndexLink}>
                    <Button style={styles?.MoblieTabsIndexButton} text={"Saved Address"} onClick={() => handleActive("Saved Address")} />
                  </AnchorElement>
                  <AnchorElement link="/my-personal-details" style={styles?.MoblieTabsIndexLink}>
                    <Button style={styles?.MoblieTabsIndexButton} text={"My Bookings"} onClick={() => handleActive("My Bookings")} />
                  </AnchorElement>
                </TabsIndex>
                <LogoutContainer item={styles?.MobileLogoutContainer} itemLogoutSvg={styles?.MobileLogOutSvg}>
                  <LogoutButton onClick={logoutHandler} item={styles?.MobileLogoutContainerLink}>
                    <LogoutImg />
                    <LogoutBtn item={styles?.MobileLogoutBtn} >Logout</LogoutBtn>
                  </LogoutButton>
                </LogoutContainer>
              </ContainerLeft>
      }
    </React.Fragment>
  )
}

export default MyProfileMobile
