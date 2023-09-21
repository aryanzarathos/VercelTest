import Image from 'next/image.js';
import React from 'react'
import { useState } from 'react';
import data from "../data";
import { FacilitiesDescription, FacilitiesHeroGrid, FacilitiesHeroSection, FacilitiesImage, FacilitiesItem, FacilitiesMenuButton, FacilitiesMenuTab, FacilitiesMenuTabItem, FacilitiesMenuTabWrap, ImgBottomBorder, LineInner, OurFacilitesButton } from './FacilitiesSetion.style';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';

const FacilitiesSection = ({ ShowButton }) => {

  const [currentPage, SetCurrentPage] = useState("Opthalmology");
  const getCurrentPage = (currentPage) => {
    SetCurrentPage(currentPage);
  };

  return (
    <MediaGallery sectionName={"ManageFacilities"} manageText={"Manage Facilities"} arrayofImages={false} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data} >
      <FacilitiesHeroSection>
        {data.map(({ FacilitiesTitleList, FacilitiesContent }, index) => (
          <FacilitiesHeroGrid key={index}>
            <FacilitiesMenuTabWrap>
              <FacilitiesMenuTab>
                <React.Fragment>
                  {FacilitiesTitleList.map((data, index) => (
                    <FacilitiesMenuTabItem key={index}>
                      <FacilitiesMenuButton
                        currentPage={currentPage}
                        data={data}
                        type="button"
                        onClick={() => getCurrentPage(data)}
                      >
                        {data}
                      </FacilitiesMenuButton>
                    </FacilitiesMenuTabItem>
                  ))}
                </React.Fragment>
              </FacilitiesMenuTab>
            </FacilitiesMenuTabWrap>

            <div className='facilities-menu-tabContent'>
              {FacilitiesContent.filter(
                (item) => item.title === currentPage
              ).map(({ id, title, description, image }) => (
                <FacilitiesItem key={id}>
                  <FacilitiesDescription>
                    <h4>{title}</h4>
                    <p> {description}</p>
                  </FacilitiesDescription>

                  <FacilitiesImage>
                    <Image src={image} alt="OpthalmologyImg" />
                    <ImgBottomBorder>
                      <LineInner></LineInner>
                    </ImgBottomBorder>
                    {
                      ShowButton ?
                        <OurFacilitesButton>BOOK APPOINTMENT</OurFacilitesButton>
                        : ""
                    }
                  </FacilitiesImage>
                </FacilitiesItem>
              ))}
            </div>
          </FacilitiesHeroGrid>
        ))}
      </FacilitiesHeroSection>
    </MediaGallery>

  )
}

export default FacilitiesSection