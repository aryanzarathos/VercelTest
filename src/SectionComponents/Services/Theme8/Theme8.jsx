
import React, { useState } from 'react';
import ArrowIcon from "../../../Assets/SectionComponent/Images/Services/forwardArrow.PNG";
import { BackIcon, BackText, BackToCategory, BackToHomeButton, BackToHomeButtonWrap, LeftArrowIcon, ServiceNoFound, ServicePageDetailsDescription, ServicePageDetailsGrid, ServicePageDetailsHead, ServicePageDetailsItem, ServicePageDetailsMenuButton, ServicePageDetailsMenuTab, ServicePageDetailsMenuTabContent, ServicePageDetailsMenuTabItem, ServicePageDetailsMenuTabWrap, ServicePageDetailsSection } from './ServicesTheme8.style';
import Image from 'next/image';

const ServiceTheme8 = () => {
    return (
        <React.Fragment>
            <ServicePageDetailsSection>
                <ServicePageDetailsHead>
                    <h2>{"Service"}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam incidunt dignissimos corporis quam vero labore itaque inventore impedit ab?</p>

                    <BackToCategory type="button" onClick={""}>
                        <BackIcon>
                            <Image src={ArrowIcon} alt="back icon" />
                        </BackIcon>
                        <BackText>
                            Back
                        </BackText>
                    </BackToCategory>
                </ServicePageDetailsHead>

                <ServicePageDetailsGrid>
                    <ServicePageDetailsMenuTabWrap>
                        <ServicePageDetailsMenuTab>
                            <ServicePageDetailsMenuTabItem >
                                <ServicePageDetailsMenuButton type='button' className={""} onClick={""}>{"Home"}</ServicePageDetailsMenuButton>
                            </ServicePageDetailsMenuTabItem>
                        </ServicePageDetailsMenuTab>
                    </ServicePageDetailsMenuTabWrap>
                    <ServicePageDetailsMenuTabContent>
                        <ServicePageDetailsItem>
                            <ServicePageDetailsDescription>
                                <h4>{"home"}</h4>
                                {/* <p>  {item.details ? item.details : "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"}</p> */}
                                <p className='sun-editor-output'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis voluptate soluta voluptatum, iure esse odit similique! Libero, voluptas sequi eum consequatur facere eveniet quas possimus ratione. Qui, vel natus?</p>
                                {/* <p>{serviceDetails?.description}</p> */}
                            </ServicePageDetailsDescription>

                        </ServicePageDetailsItem>
                    </ServicePageDetailsMenuTabContent>
                </ServicePageDetailsGrid>
                {/* <ServiceNoFound>
                    <h2>No service found</h2>
                    <Image src={NoRecordFile} alt="No Record Found" />
                    <BackToHomeButtonWrap>
                        <BackToHomeButton type='button' onClick={BackToCategoryHandle}>
                            <LeftArrowIcon>&#10132;</LeftArrowIcon>
                            Go to Home Page
                        </BackToHomeButton>
                    </BackToHomeButtonWrap>
                </ServiceNoFound> */}
            </ServicePageDetailsSection>
        </React.Fragment>
    )
}

export default ServiceTheme8