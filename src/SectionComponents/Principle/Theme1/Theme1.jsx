import PrincipalProfile from "../../../Assets/SectionComponent/Images/Principle/PrincipalProfile.svg";
import { PrincipalDeskHomeHero, PrincipalDeskHomeHeroSection, PrincipalProfileContent, PrincipalProfileImage, ViewMoreButtonSection, ViewMoreMessageButton } from "./PrincipleTheme1.style";
import Image from "next/image";

const PrincipalTheme1 = () => {


    const handleViewMoreButton = () => {

    };

    return (
        <PrincipalDeskHomeHeroSection>
            <PrincipalDeskHomeHero>
                <PrincipalProfileImage>
                    <PrincipalProfile />
                </PrincipalProfileImage>
                <PrincipalProfileContent>
                    <h4>
                        Bhupinder Kumar
                    </h4>
                    <h5>
                        Owner
                    </h5>
                    <p className="sun-editor-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </PrincipalProfileContent>
            </PrincipalDeskHomeHero>
            <ViewMoreButtonSection>
                <ViewMoreMessageButton onClick={handleViewMoreButton}>
                    View More
                </ViewMoreMessageButton>
            </ViewMoreButtonSection>
        </PrincipalDeskHomeHeroSection>
    );
};

export default PrincipalTheme1;
