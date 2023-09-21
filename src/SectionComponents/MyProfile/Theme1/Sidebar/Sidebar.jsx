import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// import Tabs from '../../../../../../Common/Tabs/Tabs'
import ProfileImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile.svg';
// import ProfileImg2 from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile1.webp';
import LogoutImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/logout.svg'
import Link from 'next/link';
import Tabs from '../../../../CommonComponents/Tabs/Tabs';
import Image from 'next/image';
import { AddProfile, ContainerLeft, Heading, LogoutBtn, LogoutContainer, ProfileImage, TabsIndex } from './Sidebar.style';
import { useContext } from 'react';
import { MyProfile } from '../Theme1';
import Text from "../../../../SectionsLayout/Elements/TextElement/Text"
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import AnchorElement from '../../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Uploader from '@/CommonComponents/ImageUploader';
import Auth from '@/Classes/Auth';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
// import Icons from '@/Iocns/icons'

const Sidebar = ({ openCropper, uploadProfileImage, activeProfile, userProfileImage, removeProfileImage }) => {
    const navigate = useAppNavigate();
    const data = useContext(MyProfile);
    const cropperRef = useRef();

    const logoutHandler = () => {
        Auth.logout()
        navigate("/");
    };

    const [active, setActive] = useState("Personal Details");


    let styles = {
        ContainerLeft: data?.custom_section_editable[3]?.style,
        Heading: data?.custom_section_editable[4]?.style,
        ProfileImage: data?.custom_section_editable[5]?.style,
        UserProfileImage: data?.custom_section_editable[6]?.style,
        UserProfileSvg: data?.custom_section_editable[7]?.style,
        AddProfile: data?.custom_section_editable[8]?.style,
        AddProfileButton: data?.custom_section_editable[9]?.style,
        TabsIndex: data?.custom_section_editable[10]?.style,
        TabWrapperClass: data?.custom_section_editable[11]?.style,
        TabButtonClass: data?.custom_section_editable[12]?.style,
        LogoutContainer: data?.custom_section_editable[13]?.style,
        LogoutContainerLink: data?.custom_section_editable[14]?.style,
        LogOutSvg: data?.custom_section_editable[15]?.style,
        LogoutBtn: data?.custom_section_editable[16],
    }
    return (
        <ContainerLeft item={styles?.ContainerLeft}>
            <Text tagType={data?.custom_section_editable[4]?.tagType} style={styles?.Heading} text={data?.custom_section_editable[4]?.text} />
            {/* <Heading></Heading> */}

            <ProfileImage item={styles?.ProfileImage} itemProfileSvg={styles?.UserProfileSvg}>
                {
                    userProfileImage?.src ?
                        // <ImageViewer object={userProfileImage} />
                        <ImageElement src={userProfileImage} style={styles?.UserProfileImage} alt={"user Image"} />
                        :
                        <ProfileImg />
                }
            </ProfileImage>

            <AddProfile item={styles?.AddProfile}>
                {userProfileImage ?
                    <Button text={'Remove Picture'} style={styles.AddProfileButton} onClick={removeProfileImage} />
                    :
                    <Button text={'Add Profile Picture'} style={styles.AddProfileButton} onClick={() => openCropper(cropperRef)} />
                }
            </AddProfile>
            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => cropperRef?.current?.close()}
                multiSelect={false} discartRef={cropperRef} onUploaded={(val) => uploadProfileImage(val)} uploadLimit={1} />

            {/* Start Tabs */}
            <TabsIndex item={styles?.TabsIndex} itemTabWrapper={styles?.TabWrapperClass} itemTabButton={styles?.TabButtonClass}>
                <Tabs
                    valueState={true}
                    clearState={true}
                    defaultValue={activeProfile}
                    activeTitle={(val) => setActive(val)}
                    TabWrapperClass={'externalPage-tab-btn'}
                    TabButtonClass={`TabsBtn button`}
                    ActiveTabClass="TabsBtnActive"
                    tabs={["Personal Details", "Orders", "Saved Address", "My Bookings"]}
                />
            </TabsIndex>
            <LogoutContainer item={styles?.LogoutContainer} itemLogoutSvg={styles?.LogOutSvg}>
                <Button style={styles?.LogoutContainerLink} onClick={logoutHandler} >
                    <LogoutImg />
                    <Text text={'Logout'} style={styles?.LogoutBtn.style} />
                </Button>
            </LogoutContainer>
        </ContainerLeft>
    )
}

export default Sidebar