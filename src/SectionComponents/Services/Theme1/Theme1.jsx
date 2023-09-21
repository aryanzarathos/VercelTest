import React from 'react';

import neuroSurgeryImg from '../../../Assets/SectionComponent/Images/Services/neroSurgery.png'
import xRayImg from '../../../Assets/SectionComponent/Images/Services/xrayServices.png'
import mriImg from '../../../Assets/SectionComponent/Images/Services/mri.png'
import sonographyImg from '../../../Assets/SectionComponent/Images/Services/sonography.png'
import Image from 'next/image';
import { ServicesSubContainer, ServicesTopHeading, SubContinerImg, SubImgContent } from './ServicesTheme1.style';
// import './services.scss'


const ServicesTheme1 = () => {
    return (
        <>
            <ServicesTopHeading>Services</ServicesTopHeading>
            <ServicesSubContainer>
                <div className='sub-container-content'>
                    <SubContinerImg>
                        <Image src={neuroSurgeryImg} alt="img" />
                    </SubContinerImg>
                    <SubImgContent>Neuro Surgery</SubImgContent>
                </div>
                <div className='sub-container-content'>
                    <SubContinerImg>
                        <Image src={xRayImg} alt="img" />
                    </SubContinerImg>
                    <SubImgContent>X-ray</SubImgContent>
                </div>
                <div className='sub-container-content'>
                    <SubContinerImg>
                        <Image src={mriImg} alt="img" />
                    </SubContinerImg>
                    <SubImgContent>MRI</SubImgContent>
                </div>
                <div className='sub-container-content'>
                    <SubContinerImg>
                        <Image src={sonographyImg} alt="img" />
                    </SubContinerImg>
                    <SubImgContent>Sonography</SubImgContent>
                </div>
            </ServicesSubContainer>
        </>
    )
}

export default ServicesTheme1