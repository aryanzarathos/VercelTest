import React, { useEffect, useState } from 'react';
import styles from "./CopyRightFooter.module.scss";
import SwitchButton from '../../../../../../CommonComponents/SwitchButton';
import ColorPalette from '../../../../../../CommonComponents/ColorPalette';
import FormTextArea from '../../../../../../CommonComponents/Form/FormTextArea';
import InputColorPickerPortal from '../../../../../../CommonComponents/ColorPicker/ColorPickerPortal';
import { useDispatch, useSelector } from 'react-redux';
import { getCopyRightData, updateCopyRightData } from '../../../../../../store/actions/siteEditor';
import { useDebounceFunction } from '../../../../../../CommonFunctions/debounce';
import { updateMainContainerStatic } from '@/store/actions/appearanceSettings';
import { UPDATE_COPYRIGHT } from '@/store/reducers/websiteTemplate';

const CopyRightFooter = () => {

  const dispatch = useDispatch();

  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    500
  );

  const { copyRightData, getTemplateData } = useSelector((state) => {
    return {
      copyRightData: state.editor.copyRightData.data,
      getTemplateData: state.websiteTemplate.getTemplate.data
    }
  })

  const [copy_right, setCopyRight] = useState({});
  const [colorPicker, setColorPicker] = useState(false);

  useEffect(() => {
    dispatch(getCopyRightData({ id: getTemplateData?.template?._id }));
  }, [dispatch, getTemplateData?.template?._id])

  useEffect(() => {
    if (copyRightData) {
      setCopyRight(copyRightData);
    }
  }, [copyRightData])

  const ColorPickerhandle = (val) => {
    setColorPicker(val);
  }

  const handleOnChange = (value, type) => {
    setCopyRight({ ...copy_right, [type]: value });
    debouncedAppearance(() =>
      dispatch(updateCopyRightData({ id: getTemplateData?.template?._id, body: { ...copy_right, [type]: value } }))
    );
    if(type==="copyright_text"){

     dispatch(UPDATE_COPYRIGHT({data: {...copy_right, [type]: value} }))
    }else{
     dispatch(UPDATE_COPYRIGHT({pageUpdate:true,hide_low_footer:value}))
    }
  }

  const handleColors = (color, type) => {
    setCopyRight({ ...copy_right, Appearance: { ...copy_right.Appearance, [type]: color } });
    
    dispatch(UPDATE_COPYRIGHT({data:{ Appearance: { ...copy_right.Appearance, [type]: color }}}))
    if(type==="background"){
       let mainContainerData = { ...getTemplateData?.lower[1] };
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
          mainContainerId: getTemplateData?.lower[1]?._id,
          mainContainerIndex: 1,
          data: mainContainerData,
        })
      )
      dispatch(UPDATE_COPYRIGHT({mainContainerUpdate:true,mainContainerData:mainContainerData}))
    }
    debouncedAppearance(() =>
      dispatch(updateCopyRightData({ id: getTemplateData?.template?._id, body: { ...copy_right, Appearance: { ...copy_right.Appearance, [type]: color } } }))
    );
  }

  // console.log(copy_right, "line no 588");

  return (
    <React.Fragment>
      <div className={styles.copyRightFooter}>
        <div className={styles.hideCopyRight}>
          <p>Hide copyright strip</p>
          <SwitchButton layout={true} checked={copy_right?.hide_copyright_strip}
            onChange={(e) => handleOnChange(e.target.checked, "hide_copyright_strip")} />
        </div>

        <div className={styles.rowengi_Hiriye}>
          <FormTextArea
            labelPosition={`top`}
            LabelClassName={styles.label}
            label="Copyright text"
            placeholder="© 2022 Monito. All rights reserved."
            rows={5}
            value={copy_right?.copyright_text}
            onChange={(e) => handleOnChange(e.target.value, "copyright_text")}
          />
        </div>
        <div className={styles.hideCopyRight}>
          <p>Appearance</p>
        </div>

        <div className={styles.CopyFooterColor_Wrap}>
          <div className={styles.backgroundCopyFooterColor}>
            <p>Background</p>
            <ColorPalette colorCode={copy_right?.Appearance?.background || "#202020"}
              paletteHandle={() => ColorPickerhandle("background")} />
          </div>
          <div className={styles.backgroundCopyFooterColor}>
            <p>Text</p>
            <ColorPalette colorCode={copy_right?.Appearance?.color || "#FFFFFF"}
              paletteHandle={() => ColorPickerhandle("color")} />
          </div>
        </div>
      </div>

      {
        colorPicker && (
          <div className={styles.ColorPicker_Popup}>
            <InputColorPickerPortal
              onclose={() => setColorPicker(false)}
              title={`Pick Color`}
              handleChange={(color) => handleColors(color, colorPicker)}
              Color={copy_right?.Appearance?.[colorPicker]}
              value={copy_right?.Appearance?.[colorPicker]} />
          </div>
        )
      }
    </React.Fragment>
  )
}

export default CopyRightFooter