import React, { useEffect, useState } from "react";
import FormTextArea from "../../../../../../../CommonComponents/Form/FormTextArea";
import styles from './BrandDescription.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useDebounceFunction } from "../../../../../../../CommonFunctions/debounce";
import { updateFooterData } from "../../../../../../../store/actions/siteEditor";
import { UPDATE_FOOTER } from "@/store/reducers/websiteTemplate";

const BrandDescriptionFooter = () => {

    const dispatch = useDispatch();

    const [desc, setDesc] = useState("");

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    const { footerData, getTemplateData } = useSelector((state) => {
        return {
            footerData: state.editor.footerData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    useEffect(() => {
        if (footerData) {
            setDesc(footerData?.brand_description);
        }
    }, [footerData])

    const handleChange = (e) => {
        setDesc(e.target.value);
        debouncedAppearance(() =>
            dispatch(updateFooterData({ id: footerData?._id, body: { brand_description: e.target.value } }))
        );
         dispatch(UPDATE_FOOTER({data:{ brand_description: e.target.value } }))
    }

    return (
        <div className={styles.BrandDescriptionFooterMain}>
            <FormTextArea placeholder="Your Brand Description" rows={6} className={styles.textAreaInput} value={desc} onChange={handleChange} />
        </div>

    )
}
export default BrandDescriptionFooter;
