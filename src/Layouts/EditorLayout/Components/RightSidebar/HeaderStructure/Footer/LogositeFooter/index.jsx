import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import FormInput from '../../../../../../../CommonComponents/Form/FormInput';
import RangeSlider from '../../../../../../../CommonComponents/Form/RangeSlider';
import SelectDropDown from '../../../../../../../CommonComponents/SelectDropdown';
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton';
import UploadSection from '../../../WebsiteSetting/UploadSection';
import styles from "./logosite.module.scss";
import FontIcon from "../../../../../../../Assets/SiteEditor/Icons/font-icon.svg";
import FontWeightIcon from "../../../../../../../Assets/SiteEditor/Icons/fa-solid_font.svg";
import { useDispatch, useSelector } from 'react-redux';
import { updateFooterData } from '../../../../../../../store/actions/siteEditor';
import { useDebounceFunction } from '../../../../../../../CommonFunctions/debounce';
import Uploader from '../../../../../../../CommonComponents/ImageUploader';
import ColorPalette from '../../../../../../../CommonComponents/ColorPalette';
import InputColorPickerPortal from '../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal';
import { UPDATE_FONTS_ARRAY, UPDATE_FOOTER } from '@/store/reducers/websiteTemplate';
import SelectDropDownRandom from '@/CommonComponents/Dropdown/OpenPage&ScrollBlock';
import InputSearchDropDown from '@/CommonComponents/InputSearchDropdown';
import { isBrowser } from '@/CommonFunctions/isBrowser';

const LogoSiteFooter = () => {

    const ref = useRef();
    const dispatch = useDispatch();

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    const { fontList, footerData, getTemplateData } = useSelector((state) => {
        return {
            fontList: state.googleFonts,
            footerData: state.editor.footerData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    const [logoAndSiteName, setLogoAndSiteName] = useState({});
    const [colorPicker, setColorPicker] = useState(false);
    const FontFamily = ["Montserrat", "Poppins"];
    const FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

    useEffect(() => {
        if (footerData) {
            setLogoAndSiteName(footerData?.LogoAndSiteName);
        }
    }, [footerData])

    const handleOnChange = (value, type) => {
        // if(type === "font_size" && value.length < 4){            
        setLogoAndSiteName({ ...logoAndSiteName, [type]: value });
        debouncedAppearance(() =>
            dispatch(updateFooterData({ id: footerData?._id, body: { LogoAndSiteName: { ...logoAndSiteName, [type]: value } } }))
        );
        dispatch(UPDATE_FOOTER({ data: { LogoAndSiteName: { ...logoAndSiteName, [type]: value } } }))
        // }
    }

    const ColorPickerhandle = () => {
        setColorPicker(!colorPicker);
    }

    // get the value of font family of p


    const root = isBrowser() && document.querySelector(":root");
    var defaultTextFamily = isBrowser() && root.style.getPropertyValue('--global-typography-fontFamilyP') ? root.style.getPropertyValue('--global-typography-fontFamilyP') : "roboto";



    console.log(defaultTextFamily, "font family")

    return (
        <div className={styles.mainLogoSiteFooter}>
            <div className={styles.websiteLogo}>
                <p>Website Logo</p>
                <SwitchButton layout={true} checked={logoAndSiteName?.show_website_logo}
                    onChange={(e) => handleOnChange(e.target.checked, "show_website_logo")} />
            </div>
            {/* === upload section start === */}
            <UploadSection openUploader={() => ref?.current?.open()}
                src={logoAndSiteName?.logo}
                remove={() => handleOnChange("", "logo")}
            />
            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => ref?.current?.close()}
                multiSelect={false} discartRef={ref} onUploaded={(val) => handleOnChange(val, "logo")} uploadLimit={1} />
            {/* === upload section end === */}

            {/* === site name start ==== */}
            <div className={styles.phoneNoUprCont}>

                <p>Site Name</p>
                <SwitchButton layout={true} checked={logoAndSiteName?.show_site_name}
                    onChange={(e) => handleOnChange(e.target.checked, "show_site_name")} />

            </div>
            <FormInput type={"text"} className="mb-10" placeholder={"Enter your site name"}
                labelPosition="top" value={logoAndSiteName?.site_Name} onChange={(e) => handleOnChange(e.target.value, "site_Name")} />
            {/* === site name end ==== */}
            {/* ===  */}
            <div className={styles.rangeInput}>
                <p>Logo Size</p>
                <RangeSlider
                    minValue={0}
                    maxValue={100}
                    initialValue={logoAndSiteName?.logo_size == undefined ? 50 : typeof (logoAndSiteName?.logo_size) === "string" && logoAndSiteName?.logo_size?.includes("px") ? logoAndSiteName?.logo_size?.replace("px", "") : logoAndSiteName?.logo_size}
                    onChange={(val) => handleOnChange(`${val}px`, "logo_size")}
                />
            </div>
            {/* === Choose Text section start === */}
            <div className={styles.textDropDown}>
                <p className='mb-10'>Text</p>
                <div className={styles.FamilyAndWeightWrap}>

                    <div className={styles.FontFamilyWrap}>
                        <InputSearchDropDown
                            handleSelect={(val) => {
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
                        <span className={styles.FontWeightSvg}><FontWeightIcon height={14} width={13} fill={'#000'} /></span>
                        <SelectDropDown
                            deafultValue="400"
                            values={FontWeight}
                            selectClassName={styles.FontWeightSelector}
                            showValue={logoAndSiteName?.font_weight}
                            handleSelect={(val) => {
                                setLogoAndSiteName({ ...logoAndSiteName, font_weight: val })
                                setValue(val)
                                setChangedValueType("font_weight")
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
                    <FormInput type="number" placeholder="16" labelPosition={"top"}
                        min={0}
                        maxLength={3} value={typeof (logoAndSiteName?.font_size) === "string" && logoAndSiteName?.font_size?.includes("px") ? logoAndSiteName?.font_size?.replace("px", "") : logoAndSiteName?.font_size}
                        onChange={(e) => handleOnChange(`${e.target.value}px`, "font_size")} />
                    <span>px</span>
                </div>
                <ColorPalette className={'color-palette-hf'} colorCode={logoAndSiteName?.font_color || "#000000"} paletteHandle={ColorPickerhandle} />

            </div>
            {/* ===== choose font and color section end ==== */}

            {
                colorPicker && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => { handleOnChange(color, "font_color") }}
                            Color={logoAndSiteName?.font_color}
                            value={logoAndSiteName?.font_color} />
                    </div>
                )
            }

        </div>
    )
}

export default LogoSiteFooter
