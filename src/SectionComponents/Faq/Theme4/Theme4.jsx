import React, { useEffect, useState } from "react";
// import { Container } from "../../../SectionCommon/Containers/Container.styled";
import faqdata from "../data.json";
import { Description, FaqWrap, FaqWrapper, HeadingWrapper, MainConatainer, MainContent, TitleWrapper } from "./FaqTheme4.style";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import RecordNotFound from "@/CommonComponents/RecordNotFound/RecordNotFound";
import { useSelector } from "react-redux";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const FaqTheme4 = ({ children }) => {
console.log("about us theme 4")
  const data = children;
  const faqList = useSelector((state) => state.Faq.faqList.data);

  const [activeFaq, setActiveFaq] = useState(-1);
  const [faqListData, setFaqListData] = useState([]);

  const clickHandle = (index) => {
    setActiveFaq(index === activeFaq ? -1 : index);
  };

  let style = {
    MainConatainer: data?.custom_section_editable[0]?.style,
    MainContent: data?.custom_section_editable[1]?.style,
    MainContentH1: data?.custom_section_editable[2],
    MainContentP: data?.custom_section_editable[3],
    HeadingWrapper: data?.custom_section_editable[4].style,
    FaqWrapper: data?.custom_section_editable[5].style,
    FaqWrap: data?.custom_section_editable[6].style,
    TitleWrapper: data?.custom_section_editable[7].style,
    TitleWrapperText: data?.custom_section_editable[8],
    Description: data?.custom_section_editable[9].style,
    DescriptionText: data?.custom_section_editable[10],
  }

  useEffect(() => {
    if (data.data && data.data?.length && faqList && faqList?.length) {
      let array = [];
      let newData = {};
      for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        newData = faqList?.find((item) => item?._id === element?._id)
        if (newData) {
          array.push(newData);
        }
      }
      setFaqListData([...array]);
    }
  }, [data])

  return (
    <MediaGallery sectionName={"ManageFaq"} manageText={"Manage Faq"} data={data} showSettings={false} showAltText={false} >
      {AppLinkUrl?.isEditor() ?
        faqListData && faqListData?.length ?
          <MainConatainer item={style.MainConatainer} >
            {/* <Container> */}
            <MainContent item={style.MainContent}>
              {/* <HeadingWrapper item={style?.HeadingWrapper}>
                <Text tagType={style?.MainContentH1.tagType}
                  style={style?.MainContentH1?.style}
                  text={style?.MainContentH1?.text} />
                <Text tagType={style?.MainContentP.tagType}
                  style={style?.MainContentP?.style}
                  text={style?.MainContentP?.text} />
                {/* <p>Have questions? We’re here to help</p> */}
              {/* </HeadingWrapper> */ } 
              <FaqWrapper item={style?.FaqWrapper}>
                {faqListData.map((e, index) => {
                  return (
                    <FaqWrap item={style?.FaqWrap}
                      onClick={() => {
                        clickHandle(e._id);
                      }}
                      key={index}
                    >
                      <TitleWrapper item={style?.TitleWrapper}>
                        <Text tagType={style?.TitleWrapperText.tagType}
                          style={style?.TitleWrapperText?.style}
                          text={e.title} />
                      </TitleWrapper>
                      {

                        <Description item={style.Description} className={activeFaq === e._id && 'show'}>
                          <Text tagType={style.DescriptionText.tagType}
                            style={style.DescriptionText.style}
                            dangerouslySetInnerHTML={{
                              __html:
                                e.description,
                            }} />
                        </Description>
                      }
                    </FaqWrap>
                  );
                })}
              </FaqWrapper>
            </MainContent>
            {/* </Container> */}
          </MainConatainer>
          :
          <RecordNotFound />
        :
        data?.data && data?.data?.length ?
          <MainConatainer item={style.MainConatainer} >
            {/* <Container> */}
            <MainContent item={style.MainContent}>
              {/* <HeadingWrapper item={style?.HeadingWrapper}>
                <Text tagType={style?.MainContentH1.tagType}
                  style={style?.MainContentH1?.style}
                  text={style?.MainContentH1?.text} />
                <Text tagType={style?.MainContentP.tagType}
                  style={style?.MainContentP?.style}
                  text={style?.MainContentP?.text} />
            
              </HeadingWrapper> */}
              <FaqWrapper item={style?.FaqWrapper}>
                {data?.data.map((e, index) => {
                  return (
                    <FaqWrap item={style?.FaqWrap}
                      onClick={() => {
                        clickHandle(e._id);
                      }}
                      key={index}
                    >
                      <TitleWrapper item={style?.TitleWrapper}>
                        <Text tagType={style?.TitleWrapperText.tagType}
                          style={style?.TitleWrapperText?.style}
                          text={e.title} />
                      </TitleWrapper>
                      {

                        <Description item={style.Description} className={activeFaq === e._id && 'show'}>
                          <Text tagType={style.DescriptionText.tagType}
                            style={style.DescriptionText.style}
                            dangerouslySetInnerHTML={{
                              __html:
                                e.description,
                            }} />
                        </Description>
                      }
                    </FaqWrap>
                  );
                })}
              </FaqWrapper>
            </MainContent>
            {/* </Container> */}
          </MainConatainer>
          :
          <RecordNotFound />
      }
    </MediaGallery>
  );
};

export default FaqTheme4;
