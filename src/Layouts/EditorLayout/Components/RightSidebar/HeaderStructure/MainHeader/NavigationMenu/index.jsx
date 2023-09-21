import React from 'react'
import styles from "./navigationMenu.module.scss"
import SwitchButton from '../../../../../../../CommonComponents/SwitchButton'
import SelectDropDown from '../../../../../../../CommonComponents/SelectDropdown'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '../../../../../../../CommonComponents/Tabs/Tabs'
import TextColor from './TextColor'
import { getNavigationMenuList, updateMainHeaderData } from './../../../../../../../store/actions/siteEditor/index';
import SelectDropDownRandom from '../../../../../../../CommonComponents/Dropdown/OpenPage&ScrollBlock'
import { UPDATE_HEADER } from '@/store/reducers/websiteTemplate'
import useTemplateId from '@/CustomHooks/useTemplateId'

const NavigationMenu = () => {

    const dispatch = useDispatch();
    const templateId = useTemplateId()
    const [navigation_menu, setnavigation_menu] = useState({});
    const [textTyprography, setTextTyprography] = useState("Normal");
    const [dropdownTypo, setDropdownTypo] = useState("Normal");

    const [text_color, setText_color] = useState("");
    const [dropdown_text_color, setDropdown_Text_color] = useState("");
    const [background_color, setBackground_color] = useState("");

    const { headerData, getTemplateData, navMenuList } = useSelector((state) => {
        return {
            headerData: state.editor.mainHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data,
            navMenuList: state.editor.navigationMenu.data
        }
    })

    useEffect(() => {
        if (headerData) {
            setnavigation_menu(headerData?.navigation_menu);
        }
    }, [headerData])

    useEffect(() => {
        if (textTyprography === "Normal") {
            setText_color("Normal_Text_Color")
        }
        else if (textTyprography === "Hover") {
            setText_color("Hover_Text_Color")
        }
        else {
            setText_color("Active_Text_Color")
        }
    }, [textTyprography, navigation_menu])

    useEffect(() => {
        if (dropdownTypo === "Normal") {
            setDropdown_Text_color("Normal_Text_Color")
            setBackground_color("Normal_Background_Color")
        }
        else if (dropdownTypo === "Hover") {
            setDropdown_Text_color("Hover_Text_Color")
            setBackground_color("Hover_Background_Color")
        }
        else {
            setDropdown_Text_color("Active_Text_Color")
            setBackground_color("Active_Background_Color")
        }
    }, [dropdownTypo, navigation_menu])

    const handleSwitch = (e, type) => {
        if (e.target.checked) {
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { navigation_menu: { ...navigation_menu, [type]: true } } }));
            dispatch(UPDATE_HEADER({ data: { navigation_menu: { ...navigation_menu, [type]: true } } }))
        }
        else {
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { navigation_menu: { ...navigation_menu, [type]: false } } }));
            dispatch(UPDATE_HEADER({ data: { navigation_menu: { ...navigation_menu, [type]: false } } }))
        }
    }

    useEffect(() => {
        dispatch(getNavigationMenuList({ id: getTemplateData?.business, template: templateId }))
    }, [dispatch, templateId])

    const handleSelect = (_id) => {
        setnavigation_menu({
            ...navigation_menu,
            "navhead": _id
        });
        dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { navigation_menu: { ...navigation_menu, "navhead": _id } } }));
        dispatch(UPDATE_HEADER({ data: { navigation_menu: { ...navigation_menu, "navhead": _id } } }))
    }

    ////// console.log(navigation_menu, "line no 855");

    return (
        <div className={styles.mainNavigationMenu}>
            {/* === hide top section start ===== */}
            <div className={styles.HideTop}>
                <p>Hide Navigation</p>
                <SwitchButton layout={true}
                    onChange={(e) => {
                        handleSwitch(e, "hide_navigation")
                        setnavigation_menu(
                            {
                                ...navigation_menu,
                                "hide_navigation": e.target.checked
                            });
                    }}
                    checked={navigation_menu?.hide_navigation} />
            </div>
            {/* === hide top section end ===== */}
            {/* === Choose Menu section start === */}
            <div className={styles.choseLayout}>
                <p>Choose Menu</p>
                {/* <SelectDropDown handleSelect={selectedHandle} deafultValue="Menu 1" values={seleted} /> */}
                <SelectDropDownRandom
                    handleSelect={(_id) => handleSelect(_id)}
                    deafultValue={"Menu 1"}
                    label={"nav_name"}
                    showValue={navigation_menu?.navhead}
                    value={"_id"}
                    values={navMenuList}
                />
            </div>
            {/* === Choose Menu section end === */}
            {/* === typography section start ===*/}
            <div className={styles.typography}>
                <h5 className={styles.typoHeading}>Typography</h5>
                <Tabs valueState={true}
                    clearState={true}
                    activeTitle={(val) => setTextTyprography(val)}
                    TabWrapperClass={`${styles.tabsWrapper}`}
                    TabButtonClass={styles.tabBtn}
                    ActiveTabClass={styles.activeTabBtn}
                    defaultValue={"Normal"}
                    tabs={["Normal", "Hover", "Active"]} />

                <TextColor setnavigation_menu={setnavigation_menu} text_color={text_color} color_type={"Text Color"}
                    navigation_menu={navigation_menu} type={"navigationTypography"} headerData={headerData} />

            </div>
            {/* === typography section end ===*/}
            {/* === typography section start ===*/}
            <div className={styles.typography}>
                <h3>Dropdown menu</h3>
                <h5 className={styles.typoHeading}>Typography</h5>
                <Tabs
                    valueState={true}
                    activeTitle={(val) => setDropdownTypo(val)}
                    TabWrapperClass={`${styles.tabsWrapper}`}
                    TabButtonClass={styles.tabBtn}
                    ActiveTabClass={styles.activeTabBtn}
                    tabs={["Normal", "Hover", "Active"]}
                    defaultValue={"Normal"}
                    clearState={true} />

                <TextColor setnavigation_menu={setnavigation_menu} text_color={dropdown_text_color} color_type={"Text Color"}
                    navigation_menu={navigation_menu} type={"navigationDropDownTypography"} headerData={headerData} />

                <TextColor setnavigation_menu={setnavigation_menu} text_color={background_color} color_type={"Background"}
                    navigation_menu={navigation_menu} type={"navigationDropDownTypography"} headerData={headerData} />
            </div>
            {/* === typography section end ===*/}
        </div>
    )
}

export default NavigationMenu
