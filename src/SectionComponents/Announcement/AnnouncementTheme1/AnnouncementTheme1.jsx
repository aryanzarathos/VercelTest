import DefaultImage from "../../../Assets/SectionComponent/Images/Announcement/Admissions.png"
import DefaultImage1 from "../../../Assets/SectionComponent/Images/Announcement/defaultImage1.jpg"
import Image from 'next/image';
import { AnnouncementSection, Announcement, AnnouncementHead, AnnouncementDescription, AnnouncementCard, CardOverlay, CardOverlayDetails, Divider, CardOverlayAction, OverlayDownloadButton } from './AnnouncementTheme1.style'
const AnnouncementTheme1 = () => {

  return (
    <AnnouncementSection>
      <Announcement>
        <AnnouncementHead>
          <h2>Announcement</h2>
          <h3>Stay updated with our latest announcements.</h3>

        </AnnouncementHead>
        <AnnouncementDescription>
          <AnnouncementCard>
            <Image src={DefaultImage1} alt="Announcement" />
            <CardOverlay>
              <h6>New Announcement</h6>
              <CardOverlayDetails>
                <Divider />
                <CardOverlayAction>
                  <OverlayDownloadButton onClick={() => handleDownload(item)}>Download File</OverlayDownloadButton>
                </CardOverlayAction>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </CardOverlayDetails>
            </CardOverlay>
          </AnnouncementCard>
          {/* } */}

        </AnnouncementDescription>
      </Announcement>
    </AnnouncementSection>
  )
}

export default AnnouncementTheme1