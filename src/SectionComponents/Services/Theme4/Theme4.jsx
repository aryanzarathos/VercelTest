import React from 'react'
// import Pagination from '../Pagination'

//Images:
// import laboratoryImg from "../../Assets/Images/Services/laboratory.png"
import laboratoryImg from "../../../Assets/SectionComponent/Images/Services/laboratory.png"
// import emergencyImg from "../../Assets/Images/Services/emergency.png"
import emergencyImg from "../../../Assets/SectionComponent/Images/Services/emergency.png"
// import xrayImg from "../../Assets/Images/Services/xray.png"
import xrayImg from "../../../Assets/SectionComponent/Images/Services/xray.png"
// import orthopedics from "../../Assets/Images/Services/orthopedics.png"
import orthopedics from "../../../Assets/SectionComponent/Images/Services/orthopedics.png"
// import proctology from "../../Assets/Images/Services/proctology.png"
import proctology from "../../../Assets/SectionComponent/Images/Services/proctology.png"
import ServiceCategoryCards from '../ServiceCategoryCard/ServiceCategoryCards'
import { CategoriesSectionHeading, SectionSubContainer } from './ServiceTheme4.style'
import Pagination from '../../Pagination'



const ServicesTheme4 = () => {
    const data = [
        {
            id: 0,
            Heading: "Laboratory",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: laboratoryImg
        },
        {
            id: 1,
            Heading: "Emergency",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: emergencyImg
        },
        {
            id: 2,
            Heading: "X- ray",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: xrayImg
        },
        {
            id: 3,
            Heading: "Orthopedics",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: orthopedics
        },
        {
            id: 4,
            Heading: "Proctology",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: proctology
        },
        {
            id: 5,
            Heading: "Laparsocpy",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: laboratoryImg
        },
        {
            id: 6,
            Heading: "Gynaecology",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: emergencyImg
        },
        {
            id: 7,
            Heading: "ENT",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: xrayImg
        },
        {
            id: 8,
            Heading: "Urology",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: orthopedics
        },
        {
            id: 9,
            Heading: "Dentistry",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...",
            img: proctology
        },
    ]
    return (
        <>
            <CategoriesSectionHeading>
                Categories 2
            </CategoriesSectionHeading>
            <>
                <SectionSubContainer >
                    {
                        data.map((data, index) => (
                            <ServiceCategoryCards data={data} key={index} />
                        ))
                    }
                </SectionSubContainer>
                <Pagination />
            </>
        </>
    )
}

export default ServicesTheme4