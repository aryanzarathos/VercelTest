import Default2 from "../../../Assets/SectionComponent/Images/Announcement/defaultImage3.png";
import Image from 'next/image';
import { AnnouncementHomeHeroSection, AnnouncementHomeHero, AnnouncementHomeHeroHead, AnnouncementItem, AnnouncementImage, AnnouncementCaption, AnnouncementHeroGrid, ViewMoreAnnouncementButton, ViewMoreButtonSection } from './AnnouncementTheme4.style'

const AnnouncementTheme4 = () => {

    return (
        <AnnouncementHomeHeroSection>
            <AnnouncementHomeHero>
                <AnnouncementHomeHeroHead>
                    <h2>Announcement</h2>
                </AnnouncementHomeHeroHead>
                <AnnouncementHeroGrid>
                    <AnnouncementItem>
                        <AnnouncementImage>
                            <Image src={Default2} alt="" />
                        </AnnouncementImage>
                        <AnnouncementCaption>
                            <h6>Parent Teacher Meeting on 5th June </h6>
                        </AnnouncementCaption>
                    </AnnouncementItem>
                </AnnouncementHeroGrid>
                <ViewMoreButtonSection>
                    <ViewMoreAnnouncementButton >
                        View All
                    </ViewMoreAnnouncementButton>
                </ViewMoreButtonSection>
            </AnnouncementHomeHero>
        </AnnouncementHomeHeroSection>
    )
}

export default AnnouncementTheme4