import Image from "next/image";
import DefaultImage from "../../../Assets/SectionComponent/Images/Facilities/default-bg.jpg";
import { FacilitiesDescription, FacilitiesHeroGrid, FacilitiesHeroHead, FacilitiesHeroSection, FacilitiesImage, FacilitiesItem, FacilitiesMenuButton, FacilitiesMenuTab, FacilitiesMenuTabContent, FacilitiesMenuTabItem, FacilitiesViewAllButton, SectionHeroBorderBottom, SectionHeroBorderBottomL, SectionHeroBorderBottomM, SectionHeroBorderBottomR, ViewMoreButton, ViewMoreSection, ViewMoreSectionDivider } from "./FacilitiesTheme5.style";


const FacilitiesTheme5 = () => {
    return (
        <FacilitiesHeroSection>
            <FacilitiesHeroHead>
                <h2>School’s Facilities</h2>
                <h3>servicesubhead</h3>
            </FacilitiesHeroHead>
            <FacilitiesHeroGrid>
                <FacilitiesMenuTab>
                    <>
                        <FacilitiesMenuTabItem>
                            <FacilitiesMenuButton type='button' className='active'>Radiology</FacilitiesMenuButton>
                        </FacilitiesMenuTabItem>
                        <FacilitiesMenuTabItem>
                            <FacilitiesMenuButton type='button'>Opthalmology</FacilitiesMenuButton>
                        </FacilitiesMenuTabItem>
                        <FacilitiesMenuTabItem>
                            <FacilitiesMenuButton type='button'>Pathology</FacilitiesMenuButton>
                        </FacilitiesMenuTabItem>
                    </>
                    <FacilitiesMenuTabItem>
                        <FacilitiesViewAllButton onClick={""} type='button'>View All</FacilitiesViewAllButton>
                    </FacilitiesMenuTabItem>

                </FacilitiesMenuTab>

                <FacilitiesMenuTabContent>
                    <FacilitiesItem>
                        <FacilitiesDescription>
                            <h4>Radiology</h4>
                            {/* <p>  {item.details ? item.details : "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"}</p> */}
                            <p>1st & only Cath Lab (Innova IGS530, GE-USA) in North India with wide detector & tilt table, suitable for both Cardio-Vascular & Neuro Interventional procedures with advanced 3D imaging & CT like images.</p>

                            <ViewMoreSection>
                                <ViewMoreSectionDivider></ViewMoreSectionDivider>
                                <ViewMoreButton onClick={""}>
                                    Read More
                                </ViewMoreButton>
                            </ViewMoreSection>
                        </FacilitiesDescription>

                        <FacilitiesImage>
                            <Image
                                src={DefaultImage}
                                alt=""
                            />
                            <SectionHeroBorderBottom>
                                <SectionHeroBorderBottomL></SectionHeroBorderBottomL>
                                <SectionHeroBorderBottomM></SectionHeroBorderBottomM>
                                <SectionHeroBorderBottomR></SectionHeroBorderBottomR>
                            </SectionHeroBorderBottom>
                        </FacilitiesImage>
                    </FacilitiesItem>

                </FacilitiesMenuTabContent>
            </FacilitiesHeroGrid>
        </FacilitiesHeroSection>
    )
}

export default FacilitiesTheme5