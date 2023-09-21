
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { AboutHeroSection, SectionGrid, SectionGridLeft, SectionHead, SectionDescription, ViewMoreSection, ViewMoreButton } from './styles'

const Theme11 = () => {
    const dispatch = useDispatch();
    const history = useRouter();

    const handleViewMoreButton = () => {
        if (preview) {
            //   dispatch(selectRouteForPreview("/aboutus", true))
        }
        else {
            history("/aboutus")
        }
    }

    return (
        <AboutHeroSection>
            <SectionGrid>
                <SectionGridLeft>
                    <SectionHead>
                        <h2>About Us</h2>
                        <h3>Changing lives, one student at a time.</h3>
                    </SectionHead>
                    <SectionDescription>
                        <p className='sun-editor-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </SectionDescription>
                    <ViewMoreSection>
                        <ViewMoreButton onClick={handleViewMoreButton}>
                            View More
                        </ViewMoreButton>
                    </ViewMoreSection>
                </SectionGridLeft>
            </SectionGrid>
        </AboutHeroSection>
    )
}

export default Theme11