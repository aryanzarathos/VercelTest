import React, { useRef } from 'react';
import styles from "./logositename.module.scss"
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton';
import NameAndLogo from '../../../WebsiteSetting/NameAndLogo';
import UploadSection from '../../../WebsiteSetting/UploadSection';
import FormInput from '../../../../../../../CommonComponents/Form/FormInput';
import { useState, useEffect } from 'react';
import SelectDropDown from '../../../../../../../CommonComponents/SelectDropdown';
import FontIcon from "../../../../../../../Assets/SiteEditor/Icons/font-icon.svg";
import FontWeightIcon from "../../../../../../../Assets/SiteEditor/Icons/fa-solid_font.svg";
import RangeSlider from '../../../../../../../CommonComponents/Form/RangeSlider';
import { useSelector, useDispatch } from 'react-redux';
import Uploader from '../../../../../../../CommonComponents/ImageUploader';
import { updateMainHeaderData } from '../../../../../../../store/actions/siteEditor';
import ColorPalette from '../../../../../../../CommonComponents/ColorPalette';
import InputColorPickerPortal from '../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal';
import { UPDATE_FONTS_ARRAY, UPDATE_HEADER } from '@/store/reducers/websiteTemplate';
import SelectDropDownRandom from '@/CommonComponents/Dropdown/OpenPage&ScrollBlock';
import { StyleRegistry } from 'styled-jsx';
import InputSearchDropDown from '@/CommonComponents/InputSearchDropdown';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import { isBrowser } from '@/CommonFunctions/isBrowser';

const LogoSite = () => {

    const ref = useRef();
    const dispatch = useDispatch();

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );


    const [logoAndSiteName, setLogoAndSiteName] = useState({});
    const [colorPicker, setColorPicker] = useState(false);

    const seleted = ["Montserrat", "Poppins"];
    const FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

    const { fontList, headerData, getTemplateData } = useSelector((state) => {
        return {
            fontList: state.googleFonts,
            headerData: state.editor.mainHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    useEffect(() => {
        if (headerData) {
            setLogoAndSiteName(headerData?.logoAndSiteName);
        }
    }, [headerData])

    const uploadThumbnail = (data) => {
        let imgData = data;
        ////// console.log(imgData);
        setLogoAndSiteName({ ...logoAndSiteName, logo: imgData });
        dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { logoAndSiteName: { ...logoAndSiteName, logo: imgData } }, pageId: getTemplateData?._id }));
        dispatch(UPDATE_HEADER({ data: { logoAndSiteName: { ...logoAndSiteName, logo: imgData } } }))
    }

    const removeThumbnail = () => {
        setLogoAndSiteName({ ...logoAndSiteName, logo: "" });
        dispatch(updateMainHeaderData({
            headerId: headerData?._id,
            body: { logoAndSiteName: { ...logoAndSiteName, logo: "" } }, pageId: getTemplateData?._id
        }));
        dispatch(UPDATE_HEADER({ data: { logoAndSiteName: { ...logoAndSiteName, logo: "" } } }))
    }

    const handleSwitch = (e, type) => {
        if (e.target.checked) {
            setLogoAndSiteName({ ...logoAndSiteName, [type]: true });
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { logoAndSiteName: { ...logoAndSiteName, [type]: true } } }));
            dispatch(UPDATE_HEADER({ data: { logoAndSiteName: { ...logoAndSiteName, [type]: true } } }))
        }
        else {
            setLogoAndSiteName({ ...logoAndSiteName, [type]: false });
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { logoAndSiteName: { ...logoAndSiteName, [type]: false } } }));
            dispatch(UPDATE_HEADER({ data: { logoAndSiteName: { ...logoAndSiteName, [type]: false } } }))
        }
    }

    const handleOnChange = (val, type) => {
        debouncedAppearance(() => {
            dispatch(updateMainHeaderData({
                headerId: headerData?._id, body: { logoAndSiteName: { ...logoAndSiteName, [type]: val } }
            }));
            dispatch(UPDATE_HEADER({ data: { logoAndSiteName: { ...logoAndSiteName, [type]: val } } }))
        })
    }

    const ColorPickerhandle = () => {
        setColorPicker(!colorPicker)
    }


    const root = isBrowser() && document.querySelector(":root");
    var defaultTextFamily = isBrowser() && root.style.getPropertyValue('--global-typography-fontFamilyP') ? root.style.getPropertyValue('--global-typography-fontFamilyP') : "roboto";

    return (
        <div className={styles.mainLogoSite}>
            <div className={styles.websiteLogo}>
                <p>Website Logo</p>
                <SwitchButton layout={true} onChange={(e) => handleSwitch(e, "show_site_logo")} checked={logoAndSiteName?.show_site_logo} />
            </div>
            {/* === upload section start === */}
            <UploadSection openUploader={() => ref?.current?.open()} src={logoAndSiteName?.logo} remove={removeThumbnail} />
            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => ref?.current?.close()}
                multiSelect={false} discartRef={ref} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={1} />
            {/* === upload section end === */}

            {/* === site name start ==== */}
            <div className={styles.phoneNoUprCont}>

                <p>Site Name</p>
                <SwitchButton layout={true} onChange={(e) => handleSwitch(e, "show_site_name")} checked={logoAndSiteName?.show_site_name} />

            </div>
            <FormInput type={"text"} className="mb-10" placeholder={"Enter your site name"} labelPosition="top"
                value={logoAndSiteName?.site_name}
                onChange={(e) => {
                    setLogoAndSiteName({ ...logoAndSiteName, site_name: e.target.value })
                    handleOnChange(e.target.value, "site_name")
                }} />
            {/* === site name end ==== */}
            {/* ===  */}
            <div className={styles.rangeInput}>
                <p>Logo Size</p>
                <RangeSlider
                    minValue={0}
                    maxValue={100}
                    initialValue={logoAndSiteName?.logo_size == undefined ? 50 : logoAndSiteName?.logo_size?.includes("px") ? logoAndSiteName?.logo_size?.replace("px", "") : logoAndSiteName?.logo_size}
                    onChange={(val) => {
                        setLogoAndSiteName({ ...logoAndSiteName, logo_size: `${val}px` })
                        handleOnChange(`${val}px`, "logo_size")
                    }}
                />
            </div>
            {/* === Choose Text section start === */}
            <div className={styles.textDropDown}>
                <p className='mb-10'>Text</p>

                <div className={styles.FamilyAndWeightWrap}>
                    <div className={styles.FontFamilyWrap}>
                        <InputSearchDropDown
                            handleSelect={(val) => {
                                setLogoAndSiteName({ ...logoAndSiteName, font_family: val })
                                handleOnChange(val, "font_family");
                                dispatch(UPDATE_FONTS_ARRAY(val))
                            }}
                            className={`${styles.dropdown} ${styles.fontFamDropWrap}`}
                            deafultValue={defaultTextFamily}
                            label={"family"}
                            value={"family"}
                            showValue={logoAndSiteName?.font_family}
                            values={fontList}
                            selectListClassName={styles.dropDownContent}
                            selectClassName={styles.selectedContent}
                        />
                    </div>
                    <div className={styles.FontWeightWrap}>
                        <span className={styles.FontWeightSvg}>
                            <FontWeightIcon height={14} width={13} fill={'#000'} /></span>
                        <SelectDropDown
                            value="400"
                            deafultValue={"400"}
                            values={FontWeight}
                            selectClassName={styles.FontWeightSelector}
                            showValue={logoAndSiteName?.font_weight}
                            handleSelect={(val) => {
                                setLogoAndSiteName({ ...logoAndSiteName, font_weight: val })
                                handleOnChange(val, "font_weight")
                            }}
                        />
                    </div>
                </div>

            </div>
            {/* === Choose Text section end === */}

            {/* ===== choose font and color section start ==== */}
            <div className={styles.fontColor}>
                <div className={styles.fontSize}>
                    <span><FontIcon /></span>
                    <FormInput type="number" min={0} placeholder={"16"} labelPosition={"top"} maxLength={"2"}
                        value={logoAndSiteName?.font_size?.includes("px") ? logoAndSiteName?.font_size?.replace("px", "") : logoAndSiteName?.font_size}
                        onChange={(e) => {
                            setLogoAndSiteName({ ...logoAndSiteName, font_size: `${e.target.value}px` })
                            handleOnChange(`${e.target.value}px`, "font_size")
                        }}
                    />
                    <span>px</span>
                </div>
                <ColorPalette className={styles.colorPaletteHf} colorCode={logoAndSiteName?.color} paletteHandle={ColorPickerhandle} />


            </div>

            {
                colorPicker && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => {
                                setLogoAndSiteName({ ...logoAndSiteName, color: color })
                                handleOnChange(color, "color")
                            }}
                            Color={logoAndSiteName?.color}
                            value={logoAndSiteName?.color} />
                    </div>
                )
            }

            {/* ===== choose font and color section end ==== */}

        </div>
    )
}

export default LogoSite
