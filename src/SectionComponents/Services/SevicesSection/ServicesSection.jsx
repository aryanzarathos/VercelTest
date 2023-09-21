import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import ourServicesData from '../ourServicesData';
import { FacilitiesImage, ImgBottomBorder, LineInner, OurFacilitesButton, OurServicesContent, OurServicesGridContainer, OurServicesItem, OurServicesItemContentContainer, OurServicesItemHeading, OurServicesMainContainer, OurServicesMenuButton, OurServicesMenuTab, OurservicesMenuTabItem, OurservicesMenuTabWrap } from './ServicesSection.style';

const OurServicesSection = (OurServicesImgButton) => {

  const [currentPage, SetCurrentPage] = useState("Neuro Surgery");
  const getCurrentPage = (currentPage) => {
    SetCurrentPage(currentPage);
  };

  return (
    <OurServicesMainContainer>
      {ourServicesData.map(({ ServicesTitleList, ServicesContent }, index) => (
        <OurServicesGridContainer key={index}>
          <OurservicesMenuTabWrap>
            <OurServicesMenuTab>
              <React.Fragment>
                {ServicesTitleList.map((data, index) => (
                  <OurservicesMenuTabItem key={index}>
                    <OurServicesMenuButton
                      currentPage={currentPage}
                      data={data}
                      type="button"
                      onClick={() => getCurrentPage(data)}
                    >
                      {data}
                    </OurServicesMenuButton>
                  </OurservicesMenuTabItem>
                ))}
              </React.Fragment>
            </OurServicesMenuTab>
          </OurservicesMenuTabWrap>
          <div className='facilities-menu-tabContent'>
            {ServicesContent.filter(
              (item) => item.title === currentPage
            ).map(({ id, title, description, image }) => (
              <OurServicesItem key={id}>
                <OurServicesItemHeading>{title}</OurServicesItemHeading>
                <OurServicesItemContentContainer>
                  <OurServicesContent> {description}</OurServicesContent>
                  <FacilitiesImage>
                    <Image src={image} alt="Neuro Surgery" />
                    <ImgBottomBorder>
                      <LineInner></LineInner>
                    </ImgBottomBorder>
                    {
                      OurServicesImgButton ?
                        <OurFacilitesButton>BOOK APPOINTMENT</OurFacilitesButton>
                        : ""
                    }
                  </FacilitiesImage>
                </OurServicesItemContentContainer>
              </OurServicesItem>
            ))}
          </div>
        </OurServicesGridContainer>
      ))}
    </OurServicesMainContainer>
  )
}

export default OurServicesSection