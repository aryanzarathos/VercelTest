import Announcement1 from "../../../Assets/SectionComponent/Images/Announcement/announcement-1.jpg"
import Announcement2 from "../../../Assets/SectionComponent/Images/Announcement/announcement-2.jpg"
import Image from 'next/image';
import { AnnouncementSection, Announcement, AnnouncementHead, AnnouncementDescription, AnnouncementCard, CardOverlay, CardOverlayDetails, CardOverlayAction, OverlayDownloadButton } from './AnnouncementTheme3.style'
const AnnouncementTheme3 = () => {

    const handleDownload = (item) => {
        window.open(item.attachment?.src, '_blank');
    }


    return (
        <AnnouncementSection>
            <Announcement>
                <AnnouncementHead>
                    <h2>Announcements</h2>
                    <h3>Notice Board</h3>

                    {/* <p>{(subheadersData && subheadersData['announcementsubhead']) || "Announcements"}</p> */}

                </AnnouncementHead>
                <AnnouncementDescription>

                    <AnnouncementCard>
                        <Image src={Announcement1} alt="Announcement" />
                        {/* <ImageViewer
                            object={item?.thumbnail}
                            defaultImage={DefaultImage}
                        /> */}
                        <CardOverlay>
                            <h6>New Announcement</h6>
                            <CardOverlayDetails>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </CardOverlayDetails>
                        </CardOverlay>
                    </AnnouncementCard>
                    <AnnouncementCard>
                        <Image src={Announcement2} alt="Announcement" />
                        <CardOverlay>
                            <h6>New Announcement</h6>
                            <CardOverlayDetails>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </CardOverlayDetails>
                            <CardOverlayAction>
                                <OverlayDownloadButton>Download File</OverlayDownloadButton>
                            </CardOverlayAction>
                        </CardOverlay>
                    </AnnouncementCard>


                    {/* <AnnouncementCard>
              <Image src={DefaultImage2} alt="Announcement" />
              <CardOverlay>

                <h6>List of Holidays</h6>
                <CardOverlayDetails>
                  <p>Lörem ipsum spest moras terakade simonade. Nesk
                    lukrod suprack fiss. Osk vögetyck. Cirkulent megakrati kvasir.
                  </p>
                  <p>
                    Dining pock, och prefögisk. Saligt tesade, med krora sass megans. Bespektigt mifism cancelkultur yliga. Öktig astrokemi.
                    Lament lan nyras i fuvalagt esk. Senera speren, innan myr i dians nebingen.
                  </p>
                  <p>
                    Bens sepöskade prerågen. Antis pepobelt antesäl rera.
                  </p>
                  <p>
                    Böpreledes mytokemi. Spenade nimosäska och öng. Sev agisk, i saning jag sul mins. Krovis repiras, bioskapet. </p>
                </CardOverlayDetails>
                <CardOverlayAction>
                  <OverlayDownloadButton>Download File</OverlayDownloadButton>
                </CardOverlayAction>
              </CardOverlay>
            </AnnouncementCard> */}
                </AnnouncementDescription>
            </Announcement>
        </AnnouncementSection>
    )
}

export default AnnouncementTheme3