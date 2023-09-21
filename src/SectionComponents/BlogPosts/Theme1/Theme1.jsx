import React from 'react'

import latesNewsImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNews.png'
import latesNewsMidImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNewsMid.png'
import BlogPostsCards from '../BlogPostCards/BlogPostsCards'
import { LatestArticlesSubContainer, LatestArticlesTopHeading } from './BlogPostsTheme1.style'

const BlogPostTheme1 = () => {

    const BlogPostData = [
        {
            id: 0,
            img: latesNewsImg,
            heading: "11 rules of UI/UX to improve your skills in modern days",
            description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
        },
        {
            id: 1,
            img: latesNewsMidImg,
            heading: "11 rules of UI/UX to improve your skills in modern days",
            description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
        },
        {
            id: 2,
            img: latesNewsImg,
            heading: "11 rules of UI/UX to improve your skills in modern days",
            description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
        }
    ]

    return (
        <>
            <div className='latestArticles-main-container'>
                <LatestArticlesTopHeading>
                    <h1>Latest News/Articles</h1>
                    <h2>Subheading</h2>
                </LatestArticlesTopHeading>
                <LatestArticlesSubContainer>
                    {BlogPostData.map((item, key) => {
                        return (
                            <React.Fragment key={key}>
                                <BlogPostsCards img={item.img} description={item.description} heading={item.heading} />
                            </React.Fragment>
                        )
                    })
                    }
                </LatestArticlesSubContainer>
            </div>
        </>
    )
}

export default BlogPostTheme1