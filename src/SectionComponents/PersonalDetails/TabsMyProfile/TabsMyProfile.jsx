import React, { useState } from 'react';
// import Tabs from '../../../../../Common/Tabs/Tabs';
// import AppLink from '../../../../../Common/AppLink'
import { AddProfile, BtnDESK, BtnMBL, ContainerLeft, ContainerRight, Heading, LogoutBtn, LogoutContainer, LogoutSvg, MainContainer, MyProfielContainer, TabsIndex, UserImg } from './TabsMyProfile.style';
import Tabs from '../../../CommonComponents/Tabs/Tabs';
import Link from 'next/link';
import { Container } from '../../../SectionCommon/Containers/Container.styled';

const TabsMyProfile = ({ PersonalDetails, Orders, SavedAddress, OverFlow, MobileTabLink1, MobileTabLink2, MobileTabLink3 }) => {
    const [active, setActive] = useState("Personal Details");



    const getActiveTab = (currentTab) => {
        setActive(currentTab)

    }

    const Products_data = [
        {
            src: "#498773",
            sku: "#1000078",
            Product_name: "Enter Product name",
        },
        {
            src: "#498773",
            sku: "#1000078",
            Product_name: "Enter Product name",
        },
    ]

    return (
        <MyProfielContainer>
            <div className="addCss">
                <MainContainer>
                    <ContainerLeft>
                        <Heading>My profile</Heading>
                        <UserImg></UserImg>
                        <AddProfile>Add Profile Picture</AddProfile>
                        {/* Start Tabs */}
                        <TabsIndex>
                            <BtnDESK>
                                <Tabs
                                    valueState={true}
                                    activeTitle={(val) => setActive(val)}
                                    TabWrapperClass={'externalPage-tab-btn'}
                                    TabButtonClass={`TabsBtn button`}
                                    ActiveTabClass="TabsBtnActive"
                                    tabs={["Personal Details", "Orders", "Saved Address"]}
                                />
                            </BtnDESK>

                            <BtnMBL>
                                <button className='TabsBtn button' onClick={() => getActiveTab('personal-details')}>  <Link href={MobileTabLink1}>Personal Details</Link > </button>
                                <button className='TabsBtn button' onClick={() => getActiveTab('orders')}> <Link href={MobileTabLink2}>Orders</Link ></button>
                                <button className='TabsBtn button' onClick={() => getActiveTab('saved-address')}>  <Link href={MobileTabLink3}> Saved Address</Link ></button>
                            </BtnMBL>

                        </TabsIndex>
                        <LogoutContainer>
                            <Link href='#'>
                                <LogoutSvg></LogoutSvg>
                                <LogoutBtn>Logout</LogoutBtn>
                            </Link>
                        </LogoutContainer>
                    </ContainerLeft>

                    <ContainerRight className={OverFlow == false ? 'OverflowInitial' : ''}>
                        {
                            active === "Personal Details" ? PersonalDetails :
                                active === "Orders" ? Orders :
                                    active === "Saved Address" ? SavedAddress : ""
                        }
                    </ContainerRight>

                </MainContainer>
            </div>
        </MyProfielContainer>
    )
}

TabsMyProfile.defaultProps = {
    MobileTabLink1: "/",
    MobileTabLink2: "/",
    MobileTabLink3: "/",
}
export default TabsMyProfile