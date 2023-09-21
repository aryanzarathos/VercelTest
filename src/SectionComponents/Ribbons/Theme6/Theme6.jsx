import React from "react";
import { Button, MainContent, MainSection, NewBtn } from "./RibbonsTheme6.style";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import useAppNavigate from "@/CustomHooks/useAppNavigate";

const RibbonTheme6 = ({ children }) => {

  const data = children;
  const navigate = useAppNavigate();

  const style = {
    container: data.custom_section_editable[0].style,
    subcontainer: data.custom_section_editable[1].style,
    text: data.custom_section_editable[2],
    NewBtn: data.custom_section_editable[3],
    ButtonBtn: data.custom_section_editable[4],

  }

  let textStyle = {
    ...data.custom_section_editable[2],
    style: {
      ...data.custom_section_editable[2],
      desktop: {
        color: data?.data?.Appearance?.text_color ? data?.data?.Appearance?.text_color : "var(--global-color-quaternary)"

      }
    },


  }

  console.log(data,"changesdsdsdsds")

  return (
    <>
      <MainSection item={style.container}>
        <MainContent item={style.subcontainer}>
          {data?.data?.show_Ribbon && data?.data?.Ribbon &&
            <NewBtn item={style.NewBtn.style} style={data?.data?.Appearance}> {data?.data?.Ribbon  }</NewBtn>
         
          }

          {data?.data?.show_text_message ?
            <Text item={textStyle.style} text={data?.data?.text_message}></Text>
            : ""
          }
          {data?.data?.show_Button ?
            <Button onClick={() => window.open(`${data?.data?.Button_link}`, "_blank")}
              item={style.ButtonBtn.style} style={data?.data?.Appearance} className={data?.data?.Button_link?.length > 0 ? 'cursor' : ''} >{data?.data?.Button}</Button>
            : ""
          }
        </MainContent>
      </MainSection>
    </>
  );
};

export default RibbonTheme6;
