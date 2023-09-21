import React from 'react'
import { CopyRightWrapper } from "./CopyRightStyled";
import Text from "../../../../SectionsLayout/Elements/TextElement/Text"

const CopyRight = ({ children }) => {
    // get data
    const data = children;
    // console.log(data, 'sdsdsdsd');
    const style = {
        copyWriteWrapper: data.custom_section_editable[0],
        copyWriteText: data.custom_section_editable[1],
        poweredBycopyWriteText: data.custom_section_editable[2]
    }
    const copyRightData = children?.data
    console.log(style?.poweredBycopyWriteText, "hhh")

    let copyRightText = {
        desktop: {
            ...data.custom_section_editable[1]?.style?.desktop,
            color: copyRightData?.Appearance?.color
        }
    }

    return (
        <CopyRightWrapper item={style.copyWriteWrapper.style}>
            {copyRightData?.hide_copyright_strip ? "" :
                <Text tagType={style.copyWriteText.tagType}
                    text={copyRightData?.copyright_text} style={copyRightText}>
                </Text>
            }
            {
                <Text tagType={style?.poweredBycopyWriteText?.tagType}
                    text={style?.poweredBycopyWriteText?.text} style={copyRightText} ></Text>
            }
        </CopyRightWrapper>
    )
}

export default CopyRight