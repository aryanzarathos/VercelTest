import Image from 'next/image';
import React, { useState } from 'react'
import ourServicesData from '../ourServicesData';
import { HeadingContent, OurServicesButton, OurServicesContent, OurServicesGridContainer, OurServicesHeadSection, OurServicesItem, OurServicesItemContentContainer, OurServicesItemHeading, OurServicesMainContainer, OurServicesMenuButton, OurServicesMenuTab, OurservicesImage, OurservicesMenuTabItem, OurservicesMenuTabWrap } from './ServicesTheme11.style';

const ServicesTheme11 = (OurServicesImgButton) => {

  const [currentPage, SetCurrentPage] = useState("Neuro Surgery");
  const getCurrentPage = (currentPage) => {
    SetCurrentPage(currentPage);
  };

  return (
    <>
      <OurServicesHeadSection>
        <HeadingContent>Our</HeadingContent> Services
      </OurServicesHeadSection>
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
                  <OurservicesImage>
                    <Image src={image} alt="Neuro Surgery" />
                    {
                      OurServicesImgButton ?
                        <OurServicesButton>BOOK APPOINTMENT</OurServicesButton>
                        : ""
                    }
                  </OurservicesImage>
                  <OurServicesItemContentContainer>
                    <OurServicesItemHeading>{title}</OurServicesItemHeading>
                    <OurServicesContent> {description}</OurServicesContent>
                  </OurServicesItemContentContainer>
                </OurServicesItem>
              ))}
            </div>
          </OurServicesGridContainer>
        ))}
      </OurServicesMainContainer>
    </>
  )
}

export default ServicesTheme11