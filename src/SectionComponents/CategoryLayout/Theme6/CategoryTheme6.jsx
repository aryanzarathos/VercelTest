import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Default1 from "../../../Assets/SectionComponent/Images/Category/default1.png";
import Default2 from "../../../Assets/SectionComponent/Images/Category/default2.png";
import Default3 from "../../../Assets/SectionComponent/Images/Category/default3.png";
import Image from 'next/image';
import { CategoryPageSection, CategoryPageHead, CategoryPageGrid, CategoryNotAvilable, CategoryItem, CategoryImage, CategoryCaption } from './styles'
const CategoryTheme6 = () => {
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
            <CategoryPageSection>
                <CategoryPageHead>
                    <h2>Our Categories</h2>
                    <h3>Always Caring</h3>
                </CategoryPageHead>

                {data.length ?
                    <CategoryPageGrid>
                        {
                            data.map((item, key) => {
                                return (
                                    <CategoryItem key={key}>
                                        <CategoryImage>
                                            <Image src={item.img} alt="" />
                                        </CategoryImage>
                                        <CategoryCaption>
                                            <h6>{item.desc}</h6>
                                        </CategoryCaption>
                                    </CategoryItem>
                                );
                            })
                        }
                    </CategoryPageGrid> :
                    <CategoryPageGrid>
                        <CategoryItem>
                            <CategoryImage>
                                <Image src={Default1} alt="" />
                            </CategoryImage>
                            <CategoryCaption>
                                <h6>Neurology</h6>
                            </CategoryCaption>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryImage>
                                <Image src={Default2} alt="" />
                            </CategoryImage>
                            <CategoryCaption>
                                <h6>Bones</h6>
                            </CategoryCaption>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryImage>
                                <Image src={Default3} alt="" />
                            </CategoryImage>
                            <CategoryCaption>
                                <h6>Oncology</h6>
                            </CategoryCaption>
                        </CategoryItem>
                    </CategoryPageGrid>
                }
            </CategoryPageSection>
        </React.Fragment>
    )
}

export default CategoryTheme6