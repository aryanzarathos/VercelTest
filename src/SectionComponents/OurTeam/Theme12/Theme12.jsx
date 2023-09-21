
import Image from "next/image";
import TeamPreview from "../../../Assets/SectionComponent/Images/OurTeam/Teacher.png"
import Team2 from "../../../Assets/SectionComponent/Images/OurTeam/Team2.svg";
import { CardOverlay, CardOverlayDetails, Divider, TeamAlbum, TeamAlbumCard, TeamAlbumHead, TeamAlbumList, TeamSection } from "./Theme12.style";

const OurTeamTheme12 = () => {
    const backgroundColor = "#fff";

    return (
        <TeamSection>
            <TeamAlbum>
                <TeamAlbumHead>
                    <h2>
                        Meet Our Teams
                    </h2>
                    <h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, explicabo.
                    </h3>
                </TeamAlbumHead>
                <TeamAlbumList>

                    <TeamAlbumCard >
                        <Image
                            src={TeamPreview}
                            alt=""
                        />
                        {/* <TeamAlbumCardOverlay>
                        <h4>{item.fullname ? item.fullname : ""}</h4>
                        <Divider />
                        <h5>{item.designation ? item.designation : ""}</h5>
                      </TeamAlbumCardOverlay> */}
                        <CardOverlay >
                            <h4>Shushant Singh</h4>
                            <Divider />
                            <h5>Software Engineer</h5>
                            <CardOverlayDetails >
                                <p className='sun-editor-wrap'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam corrupti odit dicta ex laudantium, rem labore quaerat incidunt provident consequuntur.
                                </p>
                            </CardOverlayDetails>
                        </CardOverlay>
                    </TeamAlbumCard>

                    {/* <TeamAlbumCard>
                                <img src={Team2} alt="" />
                                <CardOverlay>
                                    <h4> Rajat Kumar</h4>
                                    <Divider />
                                    <h5>Owner</h5>
                                    <CardOverlayDetails>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, atque.</p>
                                    </CardOverlayDetails>
                                </CardOverlay>
                            </TeamAlbumCard> */}

                </TeamAlbumList>
            </TeamAlbum>
        </TeamSection>
    );
};

export default OurTeamTheme12;
