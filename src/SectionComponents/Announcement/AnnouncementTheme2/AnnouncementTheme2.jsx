import { useRef } from "react";
import { useState } from "react";
import Modal from "../../../SectionCommon/Modal";
import ModalBody from "../../../SectionCommon/Modal/ModalBody";
import ModalHeader from "../../../SectionCommon/Modal/ModalHeader";
import Link from "next/link";
import { FeeStructureHomeHeroSection, FeeStructureHomeHero, FeeStructureHomeHeroHead, FeeStructureHomeHeroList, FeeStructureHomeHeroListItem, ViewMoreFaqsHeroSection, ViewMoreFaqsHeroButton, DownloadFileButton } from './AnnouncementTheme2.style'
const AnnouncementTheme2 = () => {
  const announcementRef = useRef(null);


  const [announcement, setAnnouncement] = useState("");

  const handleReadMoreButton = () => {
    setAnnouncement();
    announcementRef.current.open();
  };

  const handleDownload = () => {

  };

  const handleViewMoreButton = () => {

  };

  return (
    <FeeStructureHomeHeroSection>
      <FeeStructureHomeHero>
        <FeeStructureHomeHeroHead>
          <h2>Announcements</h2>

        </FeeStructureHomeHeroHead>
        <FeeStructureHomeHeroList>
          {false ?
            <FeeStructureHomeHeroListItem >
              <h6>Pre-Council Examination 2023 Time Table</h6>
              <button onClick={() => handleReadMoreButton()}>Read More</button>
            </FeeStructureHomeHeroListItem>


            :

            <>
              <FeeStructureHomeHeroListItem>
                <h6>Pre-Council Examination 2023 Time Table</h6>
                <button onClick={() => handleReadMoreButton()} >Read More</button>
              </FeeStructureHomeHeroListItem>
              <FeeStructureHomeHeroListItem>
                <h6>Monthly Tuition Fee Notice</h6>
                <button onClick={() => handleReadMoreButton()}>Read More</button>
              </FeeStructureHomeHeroListItem>
              <FeeStructureHomeHeroListItem>
                <h6>Class XI 2nd Monthly Test, 2022 Results</h6>
                <button onClick={() => handleReadMoreButton()}>Read More</button>
              </FeeStructureHomeHeroListItem>
              <FeeStructureHomeHeroListItem>
                <h6>Boarding Points of Private Vehicles</h6>
                <button onClick={() => handleReadMoreButton()}>Read More</button>
              </FeeStructureHomeHeroListItem>
              <FeeStructureHomeHeroListItem>
                <h6>Half Holiday (29th and 30th November, 2022)</h6>
                <button onClick={() => handleReadMoreButton()}>Read More</button>
              </FeeStructureHomeHeroListItem>
            </>
          }

          <ViewMoreFaqsHeroSection>
            <ViewMoreFaqsHeroButton onClick={() => handleViewMoreButton()}>
              View More
            </ViewMoreFaqsHeroButton>
          </ViewMoreFaqsHeroSection>
        </FeeStructureHomeHeroList>
      </FeeStructureHomeHero>
      <Modal ref={announcementRef} ModalsSize={'modal-s'}>
        <ModalHeader title={'Vacancy Open'} />
        <ModalBody className={'account-wrapper-body'}>
          <div className='account-wrapper'>
            <div className='accont-text-wrap'>
              <p className='sun-editor-wrap'>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            {
              <DownloadFileButton onClick={handleDownload}>Download File</DownloadFileButton>
            }

          </div>
        </ModalBody>
      </Modal>
    </FeeStructureHomeHeroSection>
  );
};

export default AnnouncementTheme2;
