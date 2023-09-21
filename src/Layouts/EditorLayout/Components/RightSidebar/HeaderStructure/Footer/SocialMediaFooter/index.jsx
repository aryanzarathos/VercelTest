import React, { useEffect, useState } from 'react'
import styles from './SocialMedia.module.scss'
import CheckboxInput from '../../../../../../../CommonComponents/Form/CheckboxInput'
import FormInput from '../../../../../../../CommonComponents/Form/FormInput'
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounceFunction } from '../../../../../../../CommonFunctions/debounce'
import { updateFooterData } from '../../../../../../../store/actions/siteEditor'
import { UPDATE_FOOTER } from '@/store/reducers/websiteTemplate'

const SocialMedia = () => {

    const dispatch = useDispatch();

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

    const [social_media, setSocial_media] = useState({});

    useEffect(() => {
        if (footerData) {
            setSocial_media(footerData?.social_media);
        }
    }, [footerData])

    const handleOnChange = (value, type) => {
        setSocial_media({ ...social_media, [type]: value });
        debouncedAppearance(() =>
            dispatch(updateFooterData({ id: footerData?._id, body: { social_media: { ...social_media, [type]: value } } }))
        );
        dispatch(UPDATE_FOOTER({ data: { social_media: { ...social_media, [type]: value } } }))
    }

    return (
        <div className={styles.SocialMediaFooter}>
            <div className={styles.phoneNoUprCont}>
                <p className={styles.hidetxt}>Hide Icons</p>
                <SwitchButton layout={true} onChange={(e) => handleOnChange(e.target.checked, "hide_icon")} checked={social_media?.hide_icon} />
            </div>

            <div className={styles.socialWrap}>
                <div className={styles.socialLinks}>

                    <CheckboxInput label={"Twitter"} LabelClass={styles.checkBox}
                        onChange={(e) => handleOnChange(e.target.checked, "show_twitter")} checked={social_media?.show_twitter} />

                    <FormInput type={"text"} placeholder={"www.twitter.com/eblouissante"} labelPosition="top"
                        value={social_media?.twitter} onChange={(e) => handleOnChange(e.target.value, "twitter")} />
                </div>
                <div className={styles.socialLinks}>

                    <CheckboxInput label={"Facebook"} LabelClass={styles.checkBox}
                        onChange={(e) => handleOnChange(e.target.checked, "show_facebook")} checked={social_media?.show_facebook} />

                    <FormInput type={"text"} placeholder={"www.facebook.com/ebluissante"} labelPosition="top"
                        value={social_media?.facebook} onChange={(e) => handleOnChange(e.target.value, "facebook")} />
                </div>
                <div className={styles.socialLinks}>

                    <CheckboxInput label={"Gmail"} LabelClass={styles.checkBox}
                        onChange={(e) => handleOnChange(e.target.checked, "show_gmail")} checked={social_media?.show_gmail} />

                    <FormInput type={"text"} placeholder={"www.gmail.com/eblouissante"} labelPosition="top"
                        value={social_media?.gmail} onChange={(e) => handleOnChange(e.target.value, "gmail")} />
                </div>
                <div className={styles.socialLinks}>

                    <CheckboxInput label={"Instagram"} LabelClass={styles.checkBox}
                        onChange={(e) => handleOnChange(e.target.checked, "show_instagram")} checked={social_media?.show_instagram} />

                    <FormInput type={"text"} placeholder={"www.instagram.com/eblouissante"} labelPosition="top"
                        value={social_media?.instagram} onChange={(e) => handleOnChange(e.target.value, "instagram")} />
                </div>
            </div>

        </div>
    )
}

export default SocialMedia