import React, { useEffect } from 'react'
import styles from "./otherHeader.module.scss"
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton'
import { useState } from 'react'
import { updateMainHeaderData } from '../../../../../../../store/actions/siteEditor'
import { useDispatch, useSelector } from 'react-redux'
import ColorPalette from '../../../../../../../CommonComponents/ColorPalette'
import InputColorPickerPortal from '../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal'
import { useDebounceFunction } from '../../../../../../../CommonFunctions/debounce'
import { UPDATE_HEADER } from '@/store/reducers/websiteTemplate'
import FormInput from '@/CommonComponents/Form/FormInput'
import Tabs from '@/CommonComponents/Tabs/Tabs'

const OtherHeader = () => {

    const dispatch = useDispatch();
    const [type,setType]=useState("")
    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    const { headerData, getTemplateData } = useSelector((state) => {
        return {
            headerData: state.editor.mainHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    const [show_Search, SetShow_Search] = useState(false);
    const [show_wishlist, SetShow_wishlist] = useState(false);
    const [show_User_profile, SetShow_User_profile] = useState(false);
    const [show_shopping_cart, SetShow_shopping_cart] = useState(false);
    const [show_Booking_Appointment, SetShow_Booking_Appointment] = useState(false);
    const [otherColor, setOtherColor] = useState({});
    const [colorPicker, setColorPicker] = useState(false);
    const [booking_appointment, setbooking_appointment] = useState({});
    useEffect(() => {
        if (headerData) {
            SetShow_Search(headerData?.show_Search);
            SetShow_wishlist(headerData?.show_wishlist);
            SetShow_User_profile(headerData?.show_User_profile);
            SetShow_shopping_cart(headerData?.show_shopping_cart);
            SetShow_Booking_Appointment(headerData?.show_Booking_Appointment);
            setOtherColor(headerData?.otherColor);
            setbooking_appointment(headerData?.booking_appointment)
        }
    }, [headerData])

    const ChangeHandle = (e, value) => {
        if (e.target.checked) {
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { [value]: true } }));
            dispatch(UPDATE_HEADER({ data: { [value]: true } }))
        }
        else {
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { [value]: false } }));
            dispatch(UPDATE_HEADER({ data: { [value]: false } }))
        }

    }

    const ColorPickerhandle = (val,type) => {
        setColorPicker(val);
        setType(type)
    }

    const handleOnChange = (color) => {
        setOtherColor({ ...otherColor, [colorPicker]: color });
        if(type==="booking_appointment"){
 debouncedAppearance(() =>
            dispatch(updateMainHeaderData({
                headerId: headerData?._id, body: {
                    "booking_appointment":
                    {
                        ...booking_appointment,
                        [colorPicker]: color
                    }
                }
            }))
        );
        dispatch(UPDATE_HEADER({
            data: {
                "booking_appointment":
                {
                    ...booking_appointment,
                    [colorPicker]: color
                }
            }
        }))
        }else{
 debouncedAppearance(() =>
            dispatch(updateMainHeaderData({
                headerId: headerData?._id, body: {
                    "otherColor":
                    {
                        ...otherColor,
                        [colorPicker]: color
                    }
                }
            }))
        );
        dispatch(UPDATE_HEADER({
            data: {
                "otherColor":
                {
                    ...otherColor,
                    [colorPicker]: color
                }
            }
        }))
        }
       
    }

    const [textTyprography, setTextTyprography] = useState("Normal");
    const handleBookAppointment = (e)=>{
         debouncedAppearance(() =>
            dispatch(updateMainHeaderData({
                headerId: headerData?._id, body: {
                    "booking_appointment":
                    {
                        ...booking_appointment,
                       text: e.target.value
                    }
                }
            }))
        );
        setbooking_appointment({...booking_appointment,text:e.target.value})
    }
    return (
        <div className={styles.mainOtherHeader}>
            <div className={styles.switchBtn}>
                <div className={styles.phoneNoUprCont}>
                    <p>Search</p>
                    <SwitchButton layout={true}
                        onChange={(e) => {
                            ChangeHandle(e, "show_Search")
                            SetShow_Search(e.target.checked)
                        }}
                        checked={show_Search} />
                </div>
                <div className={styles.phoneNoUprCont}>
                    <p>Wishlist</p>
                    <SwitchButton layout={true}
                        onChange={(e) => {
                            ChangeHandle(e, "show_wishlist")
                            SetShow_wishlist(e.target.checked)
                        }}
                        checked={show_wishlist} />
                </div>
                <div className={styles.phoneNoUprCont}>
                    <p>User Profile</p>
                    <SwitchButton layout={true}
                        onChange={(e) => {
                            ChangeHandle(e, "show_User_profile")
                            SetShow_User_profile(e.target.checked)
                        }}
                        checked={show_User_profile} />
                </div>
                <div className={styles.phoneNoUprCont}>
                    <p>Shopping Cart</p>
                    <SwitchButton layout={true}
                        onChange={(e) => {
                            ChangeHandle(e, "show_shopping_cart")
                            SetShow_shopping_cart(e.target.checked)
                        }}
                        checked={show_shopping_cart} />
                </div>
                <div className={styles.phoneNoUprCont}>
                    <p>Book Appointment</p>
                    <SwitchButton layout={true}
                        onChange={(e) => {
                            ChangeHandle(e, "show_Booking_Appointment")
                            SetShow_Booking_Appointment(e.target.checked)
                        }}
                        checked={show_Booking_Appointment} />
                </div>
            </div>



            <div className={styles.backgroundColor}>
                <p>Icon</p>
                <ColorPalette colorCode={otherColor?.Icon || "#000000"}
                    paletteHandle={() => ColorPickerhandle("Icon")}
                />
            </div>
            {/* <div className={styles.backgroundColor}>
                <p>Placeholder </p>
                <ColorPalette colorCode={otherColor?.Placeholder || "#000000"}
                    paletteHandle={() => ColorPickerhandle("Placeholder")}
                />
            </div> */}
            {/* <div className={styles.backgroundColor}>
                <p>Button Color </p>
                <ColorPalette colorCode={otherColor?.Placeholder || "#000000"}
                    paletteHandle={() => ColorPickerhandle("Placeholder")}
                />
            </div> */}
            {/* <div className={styles.backgroundColor}>
                <p>Search BG</p>
                <ColorPalette colorCode={otherColor?.SearchBg || "#000000"}
                    paletteHandle={() => ColorPickerhandle("SearchBg")}
                />
            </div> */}
            {/* <div className={styles.backgroundColor}>
                <p>Text</p>
                <ColorPalette colorCode={otherColor?.SearchBg || "#000000"}
                    paletteHandle={() => ColorPickerhandle("SearchBg")}
                />
            </div> */}

            {
                colorPicker && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => { handleOnChange(color) }}
                            Color={otherColor?.[colorPicker]}
                            value={otherColor?.[colorPicker]} />
                    </div>
                )
            }
            {/* === Booking Appointment section start ===*/}
            <div className={styles.typography}>
                <p className={styles.typoHeading}>Button</p>
                <Tabs valueState={true}
                    clearState={true}
                    activeTitle={(val) => setTextTyprography(val)}
                    TabWrapperClass={`${styles.tabsWrapper}`}
                    TabButtonClass={styles.tabBtn}
                    ActiveTabClass={styles.activeTabBtn}
                    defaultValue={"Normal"}
                    tabs={["Normal", "Hover"]} />
                {
                    textTyprography === "Normal" &&
                    <>
                        <div className={styles.bookAppointmentColor}>
                            <p>Text</p>
                            <ColorPalette colorCode={booking_appointment?.Normal_Text_Color || "#000000"}
                                paletteHandle={() => ColorPickerhandle("Normal_Text_Color","booking_appointment")}
                            />
                        </div>
                        <div className={styles.bookAppointmentColor}>
                            <p>Background </p>
                            <ColorPalette colorCode={booking_appointment?.Normal_Button_Color || "#000000"}
                                paletteHandle={() => ColorPickerhandle("Normal_Button_Color","booking_appointment")}
                            />
                        </div>
                    </>
                }
                {
                    textTyprography === "Hover" && <>
                        <div className={styles.bookAppointmentColor}>
                            <p>Text</p>
                            <ColorPalette colorCode={booking_appointment?.Hover_Text_Color || "#000000"}
                                paletteHandle={() => ColorPickerhandle("Hover_Text_Color","booking_appointment")}
                            />
                        </div>
                        <div className={styles.bookAppointmentColor}>
                            <p>Background </p>
                            <ColorPalette colorCode={booking_appointment?.Hover_Button_Color || "#000000"}
                                paletteHandle={() => ColorPickerhandle("Hover_Button_Color","booking_appointment")}
                            />
                        </div>
                    </>
                }



            </div>
            {/* === Booking Appointment section end ===*/}

            <div className={`${styles.backgroundColor} ${styles.marginBg}`}>
                <FormInput type={"text"} value={booking_appointment?.text} onChange={(e)=>handleBookAppointment(e)} onKeyUp={(e)=>handleBookAppointment(e)} className="mb-10 " placeholder={"eg. Booking Appointment"} labelPosition="top" />
            </div>
        </div>
    )
}

export default OtherHeader
