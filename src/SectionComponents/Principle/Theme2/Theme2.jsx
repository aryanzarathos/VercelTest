import React from "react";
import { MessageDeskHeroSection, MessageDeskHomeHero, MessageProfileContent, MessageProfileImage } from "./PrincipleTheme2.style";
import PrincipalProfile from "../../../Assets/SectionComponent/Images/Principle/PrincipalProfile.svg";



const PrincipalTheme2 = () => {
    return (
        <MessageDeskHeroSection>
            <React.Fragment>
                <MessageDeskHomeHero>
                    <MessageProfileImage>
                        <PrincipalProfile />
                    </MessageProfileImage>
                    <MessageProfileContent>
                        <h4> Dr. Davinder Sabherwal</h4>
                        <h5>Neurology</h5>
                        <p>
                            Dr. Davinder Sabherwal having the total expertise spanning
                            over 45 years, expert in dealing with complicated cases of
                            Chest and critical care. He is trained and worked at UK top
                            elite hospitals for 10 years such as Royal Berkshire Hospital
                            and St. Lukes Hospital. He is current heading the Department
                            of Medicine and caring 10 beds ICU which is equipped with
                            world class infrastructure and equipments such as ventilator
                            from Drager Company.
                        </p>
                        <ul>
                            <li>Qualification</li>
                            <li>M.B.B.S</li>
                            <li>M.R.C.P.</li>
                            <li>D.T.M&H (ENG)</li>
                            <li>M D.T.C.D (Cardiff)</li>
                        </ul>
                    </MessageProfileContent>
                </MessageDeskHomeHero>
            </React.Fragment>
        </MessageDeskHeroSection>
    );
};

export default PrincipalTheme2;
