import React from 'react'
// import { Link } from 'react-router-dom'

// import forwardIcon from "../../Assets/Images/BlogPosts/forwardIcon.svg"
import ForwardIcon from "../../../Assets/SectionComponent/Images/BlogPosts/forwardIcon.svg"
import Link from 'next/link';
import Image from 'next/image';
import { ContentBottomButton, ContentLeftVerticleLine, ContentTopContent, ContentTopHeading, SubContainer, SubContainerContent, SubContinerImg } from './BlogPostCards.style';

const BlogPostsCards = ({ id, img, heading, description }) => {
    return (
        <>
            <SubContainer key={id}>
                <SubContinerImg>
                    <Image src={img} alt="img" />
                </SubContinerImg>
                <SubContainerContent>
                    <ContentLeftVerticleLine />
                    <ContentTopHeading>{heading}</ContentTopHeading>
                    <hr />
                    <ContentTopContent>
                        {
                            description
                        }
                    </ContentTopContent>
                    <Link href={""}><ContentBottomButton>Read more <ForwardIcon fill={'#000'} width={21} height={21} /></ContentBottomButton></Link>
                </SubContainerContent>
            </SubContainer>
        </>
    )
}

export default BlogPostsCards