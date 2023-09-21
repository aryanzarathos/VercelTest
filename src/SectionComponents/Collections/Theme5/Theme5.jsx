import React from 'react'
import FacilitiesSection from '../../Facilities/FacilitiesSection/FacilitiesSection'
import { HeadingContent, Thme2HeadingConatiner, TopHeading } from './CollectionsThem5.style'

const CollectionsTheme5 = () => {
    return (
        <>
            <Thme2HeadingConatiner>
                <TopHeading>Collections 2  Orthopedics</TopHeading>
                <h2>Subheading</h2>
                <HeadingContent>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below. The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment.</HeadingContent>
            </Thme2HeadingConatiner>
            <>
                <FacilitiesSection ShowButton={true} />
            </>
        </>
    )
}

export default CollectionsTheme5