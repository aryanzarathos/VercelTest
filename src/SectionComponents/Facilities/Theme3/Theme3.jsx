import Image from "next/image";
import ComputerFacilities1 from "../../../Assets/SectionComponent/Images/Facilities/School_facilities.png";
import { Divider, Facility, FacilityHead, FacilityHeading, FacilityList, FacilityListItem, FacilityListItemContent, FacilityListItemImage, FacilitySection } from "./FacilitiesTheme3.style";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";

const FacilitiesTheme3 = () => {
    const backgroundColor = "#fff";

    return (
        <MediaGallery sectionName={"ManageFacilities"} manageText={"Manage Facilities"} arrayofImages={false} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data} >

            <FacilitySection>
                <Facility>
                    <FacilityHead>
                        <h2>School’s Facilities</h2>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, accusantium.</h3>

                    </FacilityHead>
                    <FacilityList>
                        <FacilityListItem>
                            <FacilityListItemImage>
                                <Image src={ComputerFacilities1} alt="" />
                            </FacilityListItemImage>
                            <FacilityListItemContent itemProps={`rgba${backgroundColor}`}>
                                <FacilityHeading>
                                    <h4>Computer Laboratory</h4>
                                </FacilityHeading>
                                <ul>
                                    <li className='sun-editor-wrap'>A fully-fledged computer laboratory has been established with a sufficient number of computer sets and able teachers run the computer classes efficiently.</li>
                                </ul>
                            </FacilityListItemContent>
                        </FacilityListItem>

                    </FacilityList>
                </Facility>
            </FacilitySection>
        </MediaGallery>
    )
}

export default FacilitiesTheme3