import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BoxBottomContent, BoxForwardImg, BoxTopContent, BoxTopHeading, SubContainerBox, SubLeftContent, SubRightContent } from './ServiceCard.style';


const ServiceCategoryCards = (props) => {
  return (
    <SubContainerBox key={props.data.id}>
      <SubLeftContent>
        <Image src={props.data.img} alt='img' />
      </SubLeftContent>
      <SubRightContent>
        <BoxTopContent>
          <BoxTopHeading>{props.data.Heading}</BoxTopHeading>
          <Link href={'#'}><BoxForwardImg></BoxForwardImg></Link>
        </BoxTopContent>
        <hr />
        <BoxBottomContent>{props.data.Description}</BoxBottomContent>
      </SubRightContent>
    </SubContainerBox>
  )
}

export default ServiceCategoryCards