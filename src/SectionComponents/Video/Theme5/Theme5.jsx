
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { AboutHeroSection, SectionHeroBorderBottom, SectionHeroBorderBottomL, SectionHeroBorderBottomM, SectionHeroBorderBottomR, SectionImage } from './VideoTheme5.style';

const Theme5 = () => {
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
    <>
      <AboutHeroSection>
        {
          <SectionImage>
            {true ? (
              <video
                // height="180"
                src={'./video_one.mp4'}
                controls
                // className="gallery-thumnail"
                alt=""
              ></video>
            ) :
              <iframe
                title="youtube video"
                src={'./video_one.mp4'}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>}
            <SectionHeroBorderBottom>
              <SectionHeroBorderBottomL></SectionHeroBorderBottomL>
              <SectionHeroBorderBottomM></SectionHeroBorderBottomM>
              <SectionHeroBorderBottomR></SectionHeroBorderBottomR>
            </SectionHeroBorderBottom>
          </SectionImage>
        }
      </AboutHeroSection>
    </>
  )
}

export default Theme5