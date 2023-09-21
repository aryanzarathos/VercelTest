import React, { useEffect, useState } from 'react'
import styles from "./headerBackground.module.scss"
import InputColorPickerPortal from '../../../../../../../CommonComponents/ColorPicker/ColorPickerPortal';
import { useDispatch, useSelector } from 'react-redux';
import { updateMainHeaderData } from '../../../../../../../store/actions/siteEditor';
import { useDebounceFunction } from '../../../../../../../CommonFunctions/debounce';
import ColorPalette from '../../../../../../../CommonComponents/ColorPalette';
import { UPDATE_HEADER, UPDATE_TOP_HEADER } from '@/store/reducers/websiteTemplate';
import { updateMainContainerStatic } from '@/store/actions/appearanceSettings';

const HeaderBackground = () => {

    const dispatch = useDispatch();

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        500
    );

    const [color, setColor] = useState("");
    const [colorPicker, setColorPicker] = useState(false);

    const { headerData, getTemplateData } = useSelector((state) => {
        return {
            headerData: state.editor.mainHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })


    useEffect(() => {
        if (headerData) {
            setColor(headerData?.header_background_color)
        }
    }, [headerData])

    const ColorPickerhandle = () => {
        setColorPicker(!colorPicker);
    }

    const handleOnChange = (color) => {
        setColor(color);
     
         
      let mainContainerData = { ...getTemplateData?.upper[1] };
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
            pageId: getTemplateData._id,
            mainContainerId: getTemplateData?.upper[1]?._id,
            mainContainerIndex: 1,
            data: mainContainerData,
          })
        )
      
         debouncedAppearance(() =>
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { header_background_color: color } }))
        );
      dispatch(UPDATE_HEADER({mainContainerUpdate:true,mainContainerData:mainContainerData}))
    
    }

    return (
        <React.Fragment>
            <div className={styles.backgroundColor}>
                <p>Background</p>
                {/* <button><span>Hex</span> #000000 <span></span></button> */}
                <ColorPalette colorCode={color || "#000000"}
                    paletteHandle={ColorPickerhandle}
                />
            </div>
            {
                colorPicker && (
                    <div className={styles.colorPickerPopupWrap}>
                        <InputColorPickerPortal
                            onclose={() => setColorPicker(false)}
                            title={`Pick Color`}
                            handleChange={(color) => { handleOnChange(color) }}
                            Color={color}
                            value={color}
                        />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default HeaderBackground
