import DefaultImage from "../../../Assets/SectionComponent/Images/AboutUs/default-bg.jpg";
import ImageViewer from '../../../CommonComponents/ImageViewer';
import { AboutHeroSection, SectionContent, SectionHead, SectionDescription, ViewMoreSection, ViewMoreButton, SectionImage, SectionHeroBorderBottom, SectionHeroBorderBottomL, SectionHeroBorderBottomM, SectionHeroBorderBottomR } from './styles'
const AboutTheme13 = () => {
    return (

        <AboutHeroSection>
            <SectionContent>
                <SectionHead>
                    <h2>A Great Place to Receive Care </h2>
                    <h3>Welcome to The Tranquill</h3>
                </SectionHead>
                <SectionDescription>
                    <p
                        className="sun-editor-output"
                        dangerouslySetInnerHTML={{
                            __html: false
                                ? ''
                                : "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
                        }}
                    ></p>
                </SectionDescription>
                <ViewMoreSection>
                    <ViewMoreButton >
                        Learn More
                    </ViewMoreButton>
                </ViewMoreSection>
            </SectionContent>


            <SectionImage>
                {false ? (
                    <video src={'./video_one.mp4'} controls alt="" ></video>
                ) : false ? (
                    <iframe
                        title="youtube video" src={'./video_one.mp4'} frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : true ? (
                    <>
                        <ImageViewer
                            className="MIW-BannerImgPreview"
                            // object={}
                            defaultImage={DefaultImage}
                        />
                        <SectionHeroBorderBottom>
                            <SectionHeroBorderBottomL></SectionHeroBorderBottomL>
                            <SectionHeroBorderBottomM></SectionHeroBorderBottomM>
                            <SectionHeroBorderBottomR></SectionHeroBorderBottomR>
                        </SectionHeroBorderBottom>
                    </>
                ) : (
                    <video src="./video_one.mp4" alt=""></video>
                )}

                <SectionHeroBorderBottom>
                    <SectionHeroBorderBottomL></SectionHeroBorderBottomL>
                    <SectionHeroBorderBottomM></SectionHeroBorderBottomM>
                    <SectionHeroBorderBottomR></SectionHeroBorderBottomR>
                </SectionHeroBorderBottom>
            </SectionImage>

        </AboutHeroSection>

    );
}

export default AboutTheme13