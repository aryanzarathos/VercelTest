import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Default1 from "../../../Assets/SectionComponent/Images/Category/default1.png";
import Default2 from "../../../Assets/SectionComponent/Images/Category/default2.png";
import Default3 from "../../../Assets/SectionComponent/Images/Category/default3.png";
import React from 'react';
import Image from 'next/image';
import { CatergoryHomeHeroSection, CatergoryHomeHero, CatergoryHomeHeroHead, CatergoryItem, CatergoryImage, CatergoryCaption, CategoryHeroGrid, ViewMoreSection, ViewMoreSectionDivider, ViewMoreButton } from './styles'
const CategoryTheme7 = () => {
    const settingsCategorycategoryHero = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6 > 3 ? 3 : 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const data = [
        {
            img: Default1,
            desc: 'Neurology'
        },
        {
            img: Default2,
            desc: 'Bones'
        },
        {
            img: Default3,
            desc: 'Oncology'
        },
    ]

    return (
        <React.Fragment>
            <CatergoryHomeHeroSection>
                <CatergoryHomeHero>
                    <CatergoryHomeHeroHead>
                        <h2>Our Categories</h2>
                        <h3>Always Caring</h3>
                    </CatergoryHomeHeroHead>
                    <CategoryHeroGrid>
                        {data?.length > 0 ?
                            <Slider {...settingsCategorycategoryHero}>
                                {data.map((item, key) => {
                                    return (
                                        <CatergoryItem key={key}>
                                            <CatergoryImage>
                                                <Image src={item.img} alt="" />
                                            </CatergoryImage>
                                            <CatergoryCaption>
                                                <h6>{item.desc}</h6>
                                            </CatergoryCaption>
                                        </CatergoryItem>
                                    );
                                })}
                            </Slider>
                            :

                            <Slider {...settingsCategorycategoryHero}>
                                <CatergoryItem>
                                    <CatergoryImage>
                                        <Image src={Default1} alt="" />
                                    </CatergoryImage>
                                    <CatergoryCaption>
                                        <h6>Neurology</h6>
                                    </CatergoryCaption>
                                </CatergoryItem>
                                <CatergoryItem>
                                    <CatergoryImage>
                                        <img src={Default2} alt="" />
                                    </CatergoryImage>
                                    <CatergoryCaption>
                                        <h6>Bones</h6>
                                    </CatergoryCaption>
                                </CatergoryItem>
                            </Slider>
                        }
                    </CategoryHeroGrid>
                    <ViewMoreSection>
                        <ViewMoreSectionDivider></ViewMoreSectionDivider>
                        <ViewMoreButton >
                            View All
                        </ViewMoreButton>
                    </ViewMoreSection>
                </CatergoryHomeHero>
            </CatergoryHomeHeroSection>
        </React.Fragment>
    )
}

export default CategoryTheme7