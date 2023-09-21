import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

const useGlobalFonts = () => {
    const [globalFonts, setGlobalFonts] = useState({})
    const { data } = useSelector((state) => state.websiteTemplate?.getTemplate)

    useEffect(() => {
        if (data) {
            let fonts = { ...data?.template?.draftfontsizes }
            let heading = data?.template?.draftfontfamily?.header
            let paragraph = data?.template?.draftfontfamily?.paragraph
            fonts = {
                ...fonts,
                typoH1: {
                    ...fonts.typoH1,
                    ["global-typography-fontFamilyH1"]: heading
                },
                typoH2: {
                    ...fonts.typoH2,
                    ["global-typography-fontFamilyH2"]: heading
                },
                typoH3: {
                    ...fonts.typoH3,
                    ["global-typography-fontFamilyH3"]: heading
                },
                typoH4: {
                    ...fonts.typoH4,
                    ["global-typography-fontFamilyH4"]: heading
                },
                typoH5: {
                    ...fonts.typoH5,
                    ["global-typography-fontFamilyH5"]: heading
                },
                typoH6: {
                    ...fonts.typoH6,
                    ["global-typography-fontFamilyH6"]: heading
                },
                typoPara: {
                    ...fonts.typoPara,
                    ["global-typography-fontFamilyP"]: paragraph
                },
                typoAnchor: {
                    ...fonts.typoAnchor,
                    ["global-typography-fontFamilyAnchor"]: paragraph
                },
                typoButton: {
                    ...fonts.typoButton,
                    ["global-typography-fontFamilyButton"]: paragraph
                }
            }
            setGlobalFonts({ ...fonts })
        }
    }, [data])
    return globalFonts
}
export default useGlobalFonts