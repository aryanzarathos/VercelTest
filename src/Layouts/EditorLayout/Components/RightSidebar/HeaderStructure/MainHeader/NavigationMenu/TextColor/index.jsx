import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styles from "./textColor.module.scss"
import ColorPalette from '../../../../../../../../CommonComponents/ColorPalette'
import InputColorPickerPortal from '../../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal'
import { updateMainHeaderData } from '../../../../../../../../store/actions/siteEditor';
import { useDebounceFunction } from '../../../../../../../../CommonFunctions/debounce';
import { UPDATE_HEADER } from '@/store/reducers/websiteTemplate';

const TextColor = ({ setnavigation_menu, text_color, navigation_menu, type, color_type, headerData }) => {

    const dispatch = useDispatch();

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    const [colorPicker, setColorPicker] = useState(false);

    const ColorPickerhandle = () => {
        setColorPicker(!colorPicker);
    }

    // //// console.log(text_color, "line no 22222");

    const handleOnChange = (color) => {
        setnavigation_menu(
            {
                ...navigation_menu,
                [type]: { ...navigation_menu[type], [text_color]: color }
            });
              dispatch(UPDATE_HEADER({data:{ navigation_menu: {
                 ...navigation_menu,
                  [type]: { 
                    ...navigation_menu[type], 
                    [text_color]: color 
                } } } }))
        debouncedAppearance(() =>
            dispatch(updateMainHeaderData({
                headerId: headerData?._id, body: {
                    navigation_menu:
                    {
                        ...navigation_menu,
                        [type]: { ...navigation_menu[type], [text_color]: color }
                    }
                }
            }))
        );
    }

    return (
        <React.Fragment>
            <div className={styles.backgroundColor}>
                <p>{color_type}</p>
                <ColorPalette colorCode={navigation_menu?.[type]?.[text_color] || "#000000"}
                    paletteHandle={ColorPickerhandle}
                />
            </div>

            {
                colorPicker  && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => { handleOnChange(color) }}
                            Color={navigation_menu?.[type]?.[text_color]}
                            value={navigation_menu?.[type]?.[text_color]} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default TextColor
