import { CardOverlay, CardOverlayAction, CardOverlayDetails, MiscellaneousCard, MiscellaneousPageDescription, MiscellaneousPageHead, MiscellaneousPageSection, OverlayDownloadButton } from './MiscTheme3.style';
import Image from 'next/image';
import DefaultImage from "../../../Assets/SectionComponent/Images/Notice/default-bg.jpg";


const MiscellaneousTheme3 = () => {
    return (
        <MiscellaneousPageSection>
            <MiscellaneousPageHead>
                <h2>Miscellaneous</h2>
                <h3>noticesubhead</h3>
                {/* <p>{(subheadersData && subheadersData['announcementsubhead']) || "Announcements"}</p> */}

            </MiscellaneousPageHead>
            <MiscellaneousPageDescription>

                <MiscellaneousCard>
                    <Image src={DefaultImage} alt="MiscellaneousPage" />
                    <CardOverlay>
                        <h6>New Announcement</h6>
                        <CardOverlayDetails>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </CardOverlayDetails>
                    </CardOverlay>
                </MiscellaneousCard>
                <MiscellaneousCard>
                    <Image src={DefaultImage} alt="Announcement" />
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
                </MiscellaneousCard>

            </MiscellaneousPageDescription>

        </MiscellaneousPageSection>
    )
}

export default MiscellaneousTheme3