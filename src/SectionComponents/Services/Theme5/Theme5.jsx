import React from 'react'
import { ServicesSectionHeading } from './ServicesTheme5.style';
import FacilitiesSection from '../../Facilities/FacilitiesSection/FacilitiesSection';

const ServicesTheme5 = () => {
    return (
        <>
            <ServicesSectionHeading>
                Our Services
            </ServicesSectionHeading>
            <>
                <FacilitiesSection ShowButton={true} />
            </>
        </>
    )
}

export default ServicesTheme5