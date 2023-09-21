import AnchorElement from "../Elements/Anchor/AnchorElement/AchorElement";
import ImageElement from "../Elements/ImageElement/ImageElement";
// import TextElement from "../Elements/TextElement/TextElement";
import Text from "../Elements/TextElement/Text"
import ButtonElement from "../Elements/ButtonElement/ButtonElement";
import VideoElement from "../Elements/VideoElement/VideoElement";
import Map from "../Elements/Map";



export const RenderElements = (data, index) => {

  switch (data.tagType) {
    case "image":
      return <ImageElement src={data.src} alt={data.alt} style={data.style} index={index} customImage={true}  {...data} />
    case "video":
      return <VideoElement videoSrc={data.videoSrc} showPoster={data?.videoPosterToggle} poster={data.poster} style={data.style} index={index} customVideo={true}  {...data} />
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "span":
      return <Text text={data.text} tagType={data.tagType} style={data.style} DataCheck={data} CustomText={true} />
    case "a":
      return <AnchorElement text={data.text} link={data.link} style={data.style} {...data} />
    case "anchor":
      return <AnchorElement text={data.text} link={data.link} style={data.style} {...data} />
    case "button":
      return <ButtonElement text={data.text} index={index} style={data.style} {...data} customButton={true} />
    case "map":
      return <Map customFrame={true} style={data.style} index={index} {...data}  mapSrc={data.mapSrc} />
    default:
      return "default"

  }
}