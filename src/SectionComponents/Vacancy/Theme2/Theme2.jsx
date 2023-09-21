import DefaultVacancyImage from "../../../Assets/SectionComponent/Images/Vacancy/defaultImage.svg";
import DefaultVacancyImage1 from "../../../Assets/SectionComponent/Images/Vacancy/Admissions.png";
import { VacancyCard, VacancyCardOverlay, VacancyDescription, VacancyHomeHero, VacancyHomeHeroDescription, VacancyHomeHeroHead, VacancyHomeHeroSection, ViewMoreVacancyHeroButton, ViewMoreVacancyHeroSection } from "./vacancy2.style";
import Image from "next/image";


const VacancyTheme2 = () => {

    const handleViewMoreButton = () => {

    };

    return (
        <VacancyHomeHeroSection>
            <VacancyHomeHero>
                <VacancyHomeHeroHead>
                    <h2>Vacancy</h2>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, eaque?</h3>


                </VacancyHomeHeroHead>
                <VacancyHomeHeroDescription>
                    <VacancyCard>
                        <Image src={DefaultVacancyImage1} alt="vacancy" />
                        <VacancyCardOverlay>
                            <h6>Physics Teacher</h6>
                            <VacancyDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, quidem.</VacancyDescription>
                        </VacancyCardOverlay>
                    </VacancyCard>

                    {/* <VacancyCard>
                                    <img src={DefaultVacancyImage} alt="vacancy" />
                                    <VacancyCardOverlay>
                                        <h6>lorem ipsum</h6>
                                    </VacancyCardOverlay>
                                </VacancyCard> */}

                </VacancyHomeHeroDescription>
                <ViewMoreVacancyHeroSection>
                    <ViewMoreVacancyHeroButton onClick={() => handleViewMoreButton()}>
                        View More
                    </ViewMoreVacancyHeroButton>
                </ViewMoreVacancyHeroSection>
            </VacancyHomeHero>
        </VacancyHomeHeroSection>
    );
};

export default VacancyTheme2;
