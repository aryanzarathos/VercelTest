// import FromContactHero from '../../ContactUs/TheTranquill/formContactHero';
import React from 'react';
import { BannerCoverSection, BannerCoverSectionImage, CenterOfExcellence, CenterOfExcellenceHead, SectionHeroBorderBottom, SectionHeroBorderBottomL, SectionHeroBorderBottomM, SectionHeroBorderBottomR } from "./NoticeTheme2.style";
import Image from "next/image";
import DefaultImage from "../../../Assets/SectionComponent/Images/Notice/default-bg.jpg";

const NoticeTheme2 = () => {
    return (
        <React.Fragment>
            <CenterOfExcellence>
                <CenterOfExcellenceHead>
                    {/* <h2>Center of Excellence</h2>
            <h3>Be a part of us</h3> */}
                    <h2>Center Of Excellence</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, natus?</h3>
                </CenterOfExcellenceHead>
                <p className='sun-editor-output'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quibusdam sed quam nihil tempora dicta enim optio sint itaque!</p>
                <BannerCoverSection>
                    <BannerCoverSectionImage>
                        <Image src={DefaultImage} alt="" />
                        <SectionHeroBorderBottom>
                            <SectionHeroBorderBottomL></SectionHeroBorderBottomL>
                            <SectionHeroBorderBottomM></SectionHeroBorderBottomM>
                            <SectionHeroBorderBottomR></SectionHeroBorderBottomR>
                        </SectionHeroBorderBottom>
                    </BannerCoverSectionImage>
                </BannerCoverSection>
            </CenterOfExcellence>

            {/* <FromContactHero /> */}
        </React.Fragment >
    )
}

export default NoticeTheme2