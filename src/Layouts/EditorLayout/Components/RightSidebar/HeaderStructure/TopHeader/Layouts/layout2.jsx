

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from "../topheader.module.scss"
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton'
import FormInput from '../../../../../../../CommonComponents/Form/FormInput'
import { updateTopHeaderData } from '../../../../../../../store/actions/siteEditor/index'
import InputColorPickerPortal from '../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal';
import { useDebounceFunction } from '../../../../../../../CommonFunctions/debounce';
import ColorPalette from '../../../../../../../CommonComponents/ColorPalette';
import { UPDATE_TOP_HEADER } from '@/store/reducers/websiteTemplate';
import { updateMainContainerStatic } from '@/store/actions/appearanceSettings';
import { isBrowser } from '@/CommonFunctions/isBrowser';

const TopHeaderLayout2 = ({ headerData }) => {

    const dispatch = useDispatch();
    const { templateData } = useSelector((state) => {
        return {
            templateData: state.websiteTemplate.getTemplate.data,
        };
    });
    const [showRibbon, setShowRibbon] = useState(false);
    const [ribbon, setRibbon] = useState("");
    const [showTextMsg, setShowTextMsg] = useState(false);
    const [textmsg, setTextmsg] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [buttonText, setButtonText] = useState("");
    const [buttonLink, setButtonLink] = useState("");

    const [appearance, setAppearance] = useState({
        bgcolor: "",
        ribbon_color: "",
        ribbon_text: "",
        text_color: "",
        button: "",
        button_text_color: ""
    });
    const [colorPicker, setColorPicker] = useState(false);

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    useEffect(() => {
        if (headerData) {
            setShowRibbon(headerData?.show_Ribbon);
            setRibbon(headerData?.Ribbon);
            setShowTextMsg(headerData?.show_text_message);
            setTextmsg(headerData?.text_message);
            setShowButton(headerData?.show_Button);
            setButtonText(headerData?.Button);
            setButtonLink(headerData?.Button_link);
            setAppearance(headerData?.Appearance);
        }
    }, [headerData])

    const handleSwitch = (e, type) => {
        if (e.target.checked) {
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { [type]: true } }));
            dispatch(UPDATE_TOP_HEADER({ data: { [type]: true } }))
        }
        else {
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { [type]: false } }));
            dispatch(UPDATE_TOP_HEADER({ data: { [type]: false } }))
        }
    }

    const handleOnChange = (val, type) => {
        debouncedAppearance(() => {
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { [type]: val } }))
            dispatch(UPDATE_TOP_HEADER({ data: { [type]: val } }))
        })
    }

    const ColorPickerhandle = (val) => {
        setColorPicker(val);
    }

    const handleColors = (color, type) => {
        setAppearance({ ...appearance, [type]: color });
        debouncedAppearance(() =>
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { Appearance: { ...appearance, [type]: color } } }))
        );
        dispatch(UPDATE_TOP_HEADER({ data: { Appearance: { ...appearance, [type]: color } } }))
        if (type === "bgcolor") {
            let mainContainerData = { ...templateData?.upper[0] };
            mainContainerData["style"] = {
                ...mainContainerData["style"],
                desktop: {
                    ...mainContainerData["style"].desktop,
                    background: color,
                },
                mobile: {
                    ...mainContainerData["style"].mobile,
                    background: color,
                },
                tablet: {
                    ...mainContainerData["style"].tablet,
                    background: color,
                },
            };

            dispatch(
                updateMainContainerStatic({
                    pageId: templateData._id,
                    mainContainerId: templateData?.upper[0]?._id,
                    mainContainerIndex: 0,
                    data: mainContainerData,
                })
            )

            dispatch(UPDATE_TOP_HEADER({ mainContainerUpdate: true, mainContainerData: mainContainerData }))
        }
    }

    // get the default values of appearance
    const root = isBrowser() && document.querySelector(':root');
    const primary = isBrowser() && root.style.getPropertyValue('--global-color-primary');

    const quaternary = isBrowser() && root.style.getPropertyValue('--global-color-quaternary');
    const fithColor = isBrowser() && root.style.getPropertyValue('--global-color-penitentiary');

    return (
        <React.Fragment>
            <div className={styles.contactInfo}>
                {/* === phone No section start === */}
                <div className={styles.phoneNo}>
                    <div className={styles.phoneNoUprCont}>
                        <p>Ribbon</p>
                        <SwitchButton layout={true} onChange={(e) => {
                            handleSwitch(e, "show_Ribbon")
                            setShowRibbon(e.target.checked)
                        }}
                            checked={showRibbon} />
                    </div>
                    <FormInput type={"text"} placeholder={"New"} labelPosition="top" value={ribbon}
                        onChange={(e) => {
                            handleOnChange(e.target.value, "Ribbon")
                            setRibbon(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.phoneNo}>
                    <div className={styles.phoneNoUprCont}>

                        <p>Text Message</p>
                        <SwitchButton layout={true} onChange={(e) => {
                            handleSwitch(e, "show_text_message")
                            setShowTextMsg(e.target.checked)
                        }} checked={showTextMsg} />

                    </div>
                    <FormInput type={"text"} placeholder={"Your message goes right here."} labelPosition="top" value={textmsg}
                        onChange={(e) => {
                            setTextmsg(e.target.value)
                            handleOnChange(e.target.value, "text_message")
                        }}
                    />
                </div>
                <div className={styles.phoneNo}>
                    <div className={styles.phoneNoUprCont}>
                        <p>Button</p>
                        <SwitchButton layout={true} onChange={(e) => {
                            handleSwitch(e, "show_Button")
                            setShowButton(e.target.checked)
                        }} checked={showButton} />
                    </div>
                    <FormInput type={"text"} placeholder={"Button Text"} labelPosition="top" value={buttonText}
                        onChange={(e) => {
                            setButtonText(e.target.value)
                            handleOnChange(e.target.value, "Button")
                        }}
                    />
                </div>
                <div className={styles.phoneNo}>
                    <div className={styles.phoneNoUprCont}>
                        <p>Button Link</p>
                    </div>
                    <FormInput type={"text"} placeholder={"Enter the Link"} labelPosition="top" value={buttonLink}
                        onChange={(e) => {
                            setButtonLink(e.target.value)
                            handleOnChange(e.target.value, "Button_link")
                        }}
                    />
                </div>
            </div>
            {/* === Apperance section end === */}
            <div className={styles.HideTop}>
                <p>Appearance</p>
            </div>
            {/* === Apperance section end === */}
            <div className={styles.colorSection}>
                <div className={styles.backgroundColor}>
                    <p>Background</p>
                    <div className={styles.colorWrap}>
                        <ColorPalette colorCode={appearance?.bgcolor ? appearance?.bgcolor : "rgba(255,255,255,0)"}
                            paletteHandle={() => ColorPickerhandle("bgcolor")} />
                    </div>

                </div>
                <div className={styles.backgroundColor}>
                    <p>Ribbon</p>
                    <div className={styles.colorWrap}>
                        <ColorPalette colorCode={appearance?.ribbon_color ? appearance?.ribbon_color : "rgba(255,255,255,0)"}
                            paletteHandle={() => ColorPickerhandle("ribbon_color")} />
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <p>Ribbon Text</p>
                    <div className={styles.backgroundColor}>
                        <ColorPalette colorCode={appearance?.ribbon_text ? appearance?.ribbon_text : quaternary}
                            paletteHandle={() => ColorPickerhandle("ribbon_text")} />
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <p>Text</p>
                    <div className={styles.backgroundColor}>
                        <ColorPalette colorCode={appearance?.text_color ? appearance?.text_color : quaternary}
                            paletteHandle={() => ColorPickerhandle("text_color")} />
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <p>Button</p>
                    <div className={styles.backgroundColor}>
                        <ColorPalette colorCode={appearance?.button ? appearance?.button : primary}
                            paletteHandle={() => ColorPickerhandle("button")} />
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <p>Button Text</p>
                    <div className={styles.backgroundColor}>
                        <ColorPalette colorCode={appearance?.button_text_color ? appearance?.button_text_color : fithColor}
                            paletteHandle={() => ColorPickerhandle("button_text_color")} />
                    </div>
                </div>
            </div>

            {
                colorPicker && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => handleColors(color, colorPicker)}
                            Color={appearance?.[colorPicker]}
                            value={appearance?.[colorPicker]} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default TopHeaderLayout2;