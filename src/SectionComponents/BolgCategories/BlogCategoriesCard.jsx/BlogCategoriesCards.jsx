import React from 'react'
import ForwardIcon from "../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"

import Link from 'next/link';
import Image from 'next/image';
import { CardBottomContent, CardButton, CardContainer, CardContent, CardHeading, CardImages, HeadContainer } from './BlogCategoriesCard.style';

const BlogCategoriesCards = ({ id, img, heading, description }) => {

  return (
    <>
      <CardContainer key={id}>
        <CardImages>
          <Image src={img} alt='CardImg' />
        </CardImages>
        <CardContent>
          <CardHeading>{heading}</CardHeading>
          <HeadContainer />
          <CardBottomContent>
            {
              description
            }
          </CardBottomContent>
          <Link href={''}><CardButton>Read Full<ForwardIcon fill={'rgba(0, 52, 89, 1);'} width={11} height={11} /></CardButton></Link>
        </CardContent>
      </CardContainer>
    </>
  )
}

export default BlogCategoriesCards