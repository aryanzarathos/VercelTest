import MediaGallery from '@/CommonComponents/MediaGalleryEditor'
import { FaqsHomeHeroSection, FaqsHomeHero, FaqsHomeHeroHead, FaqsHomeHeroDescription, FaqList, FaqListItem, ViewMoreFaqsHeroSection, ViewMoreFaqsHeroButton, data } from './FaqTheme6.style'

const FaqTheme6 = () => {

    return (
        <MediaGallery sectionName={"ManageFaq"} manageText={"Manage Faq"} data={data} showSettings={false} showAltText={false}>

            <FaqsHomeHeroSection>
                <FaqsHomeHero>
                    <FaqsHomeHeroHead>
                        <h2>{"Frequently Asked Questions"}</h2>
                    </FaqsHomeHeroHead>
                    <FaqsHomeHeroDescription>
                        <FaqList>
                            {
                                data && data.length ?
                                    data.slice(0, 3).map((item, key) => {
                                        return (
                                            <FaqListItem key={key}>
                                                <h6>{item.title}</h6>
                                                <p className='sun-editor-wrap'

                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            item.description,
                                                    }}></p>
                                            </FaqListItem>
                                        )
                                    }) :
                                    <FaqListItem>
                                        <h6>New Faq</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </FaqListItem>
                            }


                        </FaqList>
                    </FaqsHomeHeroDescription>
                    <ViewMoreFaqsHeroSection>
                        <ViewMoreFaqsHeroButton onClick={() => handleViewMoreButton()}>
                            View More
                        </ViewMoreFaqsHeroButton>
                    </ViewMoreFaqsHeroSection>
                </FaqsHomeHero>
            </FaqsHomeHeroSection>
        </MediaGallery>
    )
}

export default FaqTheme6