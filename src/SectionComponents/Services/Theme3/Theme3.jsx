import React from 'react';
// import neuroSurgeryImg from '../../Assets/Images/Services/neroSurgery.png'
import neuroSurgeryImg from '../../../Assets/SectionComponent/Images/Services/neroSurgery.png'
// import xRayImg from '../../Assets/Images/Services/xrayServices.png'
import xRayImg from '../../../Assets/SectionComponent/Images/Services/xrayServices.png'
// import mriImg from '../../Assets/Images/Services/mri.png'
import mriImg from '../../../Assets/SectionComponent/Images/Services/mri.png'
// import sonographyImg from '../../Assets/Images/Services/sonography.png'
import sonographyImg from '../../../Assets/SectionComponent/Images/Services/sonography.png'
// import pathLabsImg from '../../Assets/Images/Services/pathLabs.png'
import pathLabsImg from '../../../Assets/SectionComponent/Images/Services/pathLabs.png'
// import veterinaryImg from '../../Assets/Images/Services/veterinary.png'
import veterinaryImg from '../../../Assets/SectionComponent/Images/Services/veterinary.png'
import Image from 'next/image';
import { CollectionTopHeading, CollectionsSubContainer, SubContainerImg, SubImgContent } from './ServicesTheme3.style';



const ServicesTheme3 = () => {
  return (
    <>
      <CollectionTopHeading>Collections2</CollectionTopHeading>
      <CollectionsSubContainer>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={neuroSurgeryImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>Emergency</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={xRayImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>Surgery</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={mriImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>OPD</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={sonographyImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>Ultrasound</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={neuroSurgeryImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>Neuro Surgery</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={xRayImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>ECG</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={pathLabsImg} alt="" />
          </SubContainerImg>
          <SubImgContent>Path Labs</SubImgContent>
        </div>
        <div className='sub-container-content'>
          <SubContainerImg>
            <Image src={veterinaryImg} alt="img" />
          </SubContainerImg>
          <SubImgContent>Veterinary</SubImgContent>
        </div>
      </CollectionsSubContainer>
    </>
  )
}

export default ServicesTheme3