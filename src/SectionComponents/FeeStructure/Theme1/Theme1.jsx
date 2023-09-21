import React from 'react';
import { FeeStructureHomeHero, FeeStructureHomeHeroDescription, FeeStructureHomeHeroHead, FeeStructureHomeHeroSection, ViewMoreFeeStructureHeroButton } from './FeeStructureTheme1.style';
// import DefaultAdmissionImage from "../defaultImage.svg";


const FeeStructureTheme1 = () => {
    return (
        <React.Fragment>
            <FeeStructureHomeHeroSection>
                <FeeStructureHomeHero>
                    <FeeStructureHomeHeroHead>
                        <h2>Fee Structures</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga.</h3>

                    </FeeStructureHomeHeroHead>
                    <FeeStructureHomeHeroDescription>
                        <h6>You can pay your fee by Cheque, UPI or Bank Transfer</h6>
                        <ViewMoreFeeStructureHeroButton>
                            View Fee Structure
                        </ViewMoreFeeStructureHeroButton>
                    </FeeStructureHomeHeroDescription>
                </FeeStructureHomeHero>
            </FeeStructureHomeHeroSection>
        </React.Fragment>
    )
}

export default FeeStructureTheme1