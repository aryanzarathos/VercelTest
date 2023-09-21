import React from 'react';
import DefaultImage from "../../../Assets/SectionComponent/Images/OurTeam/default-bg.jpg";
import { TeamAlbumHomeCard, TeamAlbumHomeCardOverlay, TeamAlbumHomeList, TeamAlbumPageHead, TeamPageSection, ViewProfileButton, ViewProfileButtonSection } from './OurTeamTheme14.style';
import Image from 'next/image';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';



const OurTeamTheme14 = () => {
    return (
        <React.Fragment>
            <MediaGallery manageText={"Manage Team"} sectionName={"ManageTeam"} fieldName={"profileurl"} fieldIdLabel={"_id"} data={children}>

                <TeamPageSection>
                    <TeamAlbumPageHead>
                        <h2>Our Doctors</h2>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</h3>

                    </TeamAlbumPageHead>
                    <TeamAlbumHomeList>
                        <TeamAlbumHomeCard onClick={""}>
                            <Image src={DefaultImage} alt="" />
                            <TeamAlbumHomeCardOverlay>
                                <h6 title={"Dr.Davinder Sabherwal"}>{"Dr. Davinder Sabherwal"}</h6>
                                <p title={"Neurology"}>{"Neurology"}</p>
                            </TeamAlbumHomeCardOverlay>
                            <ViewProfileButtonSection>
                                <ViewProfileButton>
                                    View Profile
                                </ViewProfileButton>
                            </ViewProfileButtonSection>
                        </TeamAlbumHomeCard>
                    </TeamAlbumHomeList>
                </TeamPageSection>
            </MediaGallery>
        </React.Fragment>
    )
}

export default OurTeamTheme14