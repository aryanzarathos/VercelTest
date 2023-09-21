import React from 'react'
// import OurServicesSection from './OurServicesSection'
import { OurServicesHeadSection } from './ServicesTheme9.style'
import OurServicesSection from '../SevicesSection/ServicesSection'
import MediaGallery from '@/CommonComponents/MediaGalleryEditor'



const ServicesTheme9 = () => {


    return (
        <>
            <MediaGallery manageText={"Manage Services"} sectionName={"ManageServices"} fieldName={"image"} fieldIdLabel={"_id"} data={data}>

                <OurServicesHeadSection>
                    Our Services
                </OurServicesHeadSection>
                <OurServicesSection OurServicesImgButton={true} />
            </MediaGallery>
        </>
    )
}

export default ServicesTheme9