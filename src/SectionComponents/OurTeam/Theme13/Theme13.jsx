import Team from "../../../Assets/SectionComponent/Images/OurTeam/Teacher.png"
import Team2 from "../../../Assets/SectionComponent/Images/OurTeam/Team2.svg";
import Image from "next/image";
import { CardOverlay, CardOverlayDetails, CardOverlayDivider, TeamAlbumHomeCard, TeamAlbumHomeHero, TeamAlbumHomeHeroHead, TeamAlbumHomeList, TeamHomeHeroSection, ViewMoreButtonSection, ViewMoreTeamButton } from "./Theme13.style";

const OurTeamTheme13 = () => {
    const handleViewMoreButton = () => {

    }
    return (
        <TeamHomeHeroSection>
            <TeamAlbumHomeHero>
                <TeamAlbumHomeHeroHead>
                    <h2>Meet Our Teams</h2>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cupiditate doloribus mollitia! Doloremque quaerat, impedit natus id sunt ipsa exercitationem.</h3>
                </TeamAlbumHomeHeroHead>
                <TeamAlbumHomeList>
                    <TeamAlbumHomeCard>
                        <Image src={Team} alt="" />
                        <CardOverlay>
                            <h4>Rajat Kumar</h4>
                            <CardOverlayDivider />
                            <h5>Owner</h5>

                            <CardOverlayDetails>
                                <p className='sun-editor-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, atque.</p>
                            </CardOverlayDetails>
                        </CardOverlay>

                    </TeamAlbumHomeCard>

                    {/* <TeamAlbumHomeCard>
                                <img src={Team2} alt="" />
                  
                                <CardOverlay>
                                    <h4> Rajat Kumar</h4>
                                    <CardOverlayDivider />
                                    <h5>Owner</h5>
                                    <CardOverlayDetails>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, atque.</p>
                                    </CardOverlayDetails>
                                </CardOverlay>
                            </TeamAlbumHomeCard> */}

                </TeamAlbumHomeList>
                <ViewMoreButtonSection>
                    <ViewMoreTeamButton onClick={() => handleViewMoreButton()}>
                        View More
                    </ViewMoreTeamButton>
                </ViewMoreButtonSection>
            </TeamAlbumHomeHero>
        </TeamHomeHeroSection>
    )
}

export default OurTeamTheme13