import React, { useEffect, useRef, useState } from 'react'
import styles from "./Fonts.module.scss";
import SelectDropDown from '../../../../../CommonComponents/SelectDropdown';
import CreateCustomFont from './CustomFonts';
import { useDispatch, useSelector } from 'react-redux';
import useGlobalTheme from '../../../../../CustomHooks/useGlobalTheme';
import ConfirmationPopup from '../../../../../CommonComponents/ConfirmationPopup';
import { deleteCustomFonts, editFontSize } from '../../../../../store/actions/siteEditor';
import { activateFontFamily } from '../../../../../store/actions/websiteTemplate';
import useTemplateId from '../../../../../CustomHooks/useTemplateId';


const data = [
  { _id: 0, font1: "Poppins", font2: "Roboto", heading: "Heading", para: "This is a pargraph. Describe the a is product listing the direct benefit." },
  { _id: 1, font1: "Montserrat", font2: "Roboto", heading: "Heading", para: "This is a pargraph. Describe the a is product listing the direct benefit." },
  { _id: 2, font1: "Montserrat", font2: "Roboto", heading: "Heading", para: "This is a pargraph. Describe the a is product listing the direct benefit." },
  { _id: 3, font1: "Montserrat", font2: "Roboto", heading: "Heading", para: "This is a pargraph. Describe the a is product listing the direct benefit." },
]
const data1 = [
  { _id: 0, font1: "Archivo", font2: "Blinker", heading: "Heading", para: "This is a pargraph. Describe the a is product listing the direct benefit." },
]

const FontSetting = () => {
  const dispatch = useDispatch()
  const themeRef = useRef(null)
  const globalTheme = useGlobalTheme()
  const templateId = useTemplateId()
  const [activeTab, setactiveTab] = useState(false)
  const [activeCustomTab, setactiveCustomTab] = useState(false)
  const [themeId, setThemeId] = useState("")
  const [themeData, setThemeData] = useState({})
  const { themeList, templateData } = useSelector((state) => {
    return {
      themeList: state.editor.getGlobalThemeList.data,
      templateData: state.websiteTemplate.getTemplate.data
    };
  });
  let paragraph = "This is a pargraph. Describe the a is product listing the direct benefit."
  const [selectedvalue, setselectedvalue] = useState()
  const [addCustomFont, setAddCustomFont] = useState();
  const [selectedHeader, setselectedHeader] = useState()
  const [selectedpara, setselectedpara] = useState()
  const [customfont, setcustomfont] = useState();
  const [fontSize, setFontSize] = useState("Medium")
  const Value = ['Small', 'Medium', 'Large', 'Extra Large']
  const selectedHandle = (val) => {
    setFontSize(val)
    dispatch(editFontSize({ templateId: templateId, data: { fontType: val } }))
  }
  const HandleClick = (id, item, isDefault) => {
    setactiveCustomTab(false)
    let body = { ...item }
    delete body._id;
    dispatch(activateFontFamily({ data: { font_id: id, isDefaultFontFamily: isDefault, ...body }, templateId: templateData?.template?.draftfontfamily?._id }))
  }
  const HandleCustom = (r) => {
    setactiveCustomTab(r)
    setactiveTab(false)
  }
  const AddFontHandle = (val, item, e) => {
    if (val === "edit") {
      setThemeId(item._id)
      setThemeData(item)
    } else {
      setThemeId("")
      setThemeData("")
    }
    setAddCustomFont(true)
  }

  const closeCustomHandle = () => {
    setAddCustomFont(false)
  }
  const deleteThemeHandle = (_id, e) => {
    e.stopPropagation()
    setThemeId(_id)
    themeRef.current.open()
  }
  const CloseDeleteThemeHandle = () => {
    themeRef.current.close()
  }
  const ConfirmDeleteItemHandle = () => {
    dispatch(deleteCustomFonts({ themeId: themeId }))
    themeRef.current.close()
  }
  useEffect(() => {
    setFontSize(themeList?.FontSize)
  }, [themeList?.FontSize])
  return (
    <div className={styles.fontsContainer}>
      <h4 className={styles.VariantHead}>
        Font Size
      </h4>
      <div className={styles.dropdownMain}>
        <SelectDropDown handleSelect={selectedHandle} className={styles.dropdown} showValue={fontSize} deafultValue={fontSize} values={Value} />
      </div>

      {
        themeList?.UserEditorFontFamilyData?.length > 0 &&
        <div className={styles.customcontainer}>
          <h4 className={styles.VariantHead}>
            Custom Font Styles
          </h4>
          <div className={styles.StyleVariantSection}>
            {
              themeList?.UserEditorFontFamilyData.map((item, key) => {
                return (
                  <div className={`${styles.PresetTypoItem} ${activeCustomTab === key ? `${styles.Active}` : ""}`} onClick={() => HandleClick(item._id, item, false)} key={key}>
                    <div className={styles.selectwrap}>
                      <div className={styles.HeadFontItem}>
                        <div className={styles.TitleWrapper}>
                          {
                            item.isActivated ?
                              <i className={styles.check} />
                              :
                              <span className={styles.uncheck} />
                          }
                          <h6 className={styles.PresetFontFamily}><span style={{ fontFamily: item?.header }}>{item?.header}</span> + <span style={{ fontFamily: item?.paragraph }}>{item?.paragraph}</span></h6>
                        </div>

                        <div className={styles.IconWrapper}>
                          <button onClick={(e) => AddFontHandle("edit", item, e)}>
                            <i className={styles.EditIcon}></i>
                          </button>
                          {
                            !item.isActivated && (<button onClick={(e) => deleteThemeHandle(item._id, e)}>
                              <i className={styles.DeleteIcon}></i>
                            </button>)
                          }
                        </div>

                      </div>

                    </div>
                    <h1 className={styles.headingtxt} style={{ fontFamily: item?.header }}>{"Heading"}</h1>
                    <p className={styles.paratxt} style={{ fontFamily: item?.paragraph }}>{paragraph}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      }

      <div className={styles.defaultcONTAINER}>
        <h4 className={styles.VariantHead}>
          Default Font Styles
        </h4>
        <div className={styles.StyleVariantSection}>
          {
            themeList?.GloabalFontFamilyData?.length > 0 &&
            themeList?.GloabalFontFamilyData.map((item, key) => {
              return (

                <div className={`${styles.PresetTypoItem} ${activeTab === key ? `${styles.Active}` : ""}`} onClick={() => HandleClick(item._id, item, true)} key={key}>
                  <div className={styles.selectwrap}>
                    <div className={styles.HeadFontItem}>
                      <div className={styles.TitleWrapper}>
                        {
                          item?.isActivated ?
                            <i className={styles.check} />
                            :
                            <span className={styles.uncheck} />
                        }
                        <h6 className={styles.PresetFontFamily}><span style={{ fontFamily: item?.header }}>{item?.header}</span> + <span style={{ fontFamily: item?.paragraph }}>{item?.paragraph}</span></h6>
                      </div>
                    </div>
                  </div>
                  <h1 className={styles.headingtxt} style={{ fontFamily: item?.header }}>{"Heading"}</h1>
                  <p className={styles.paratxt} style={{ fontFamily: item?.paragraph }}>{paragraph}</p>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className={styles.FooterPalette}>
        <button className={`button btn-oval btn-xs ${addCustomFont ? styles.btn_disable : "btn-o-primary"}`} onClick={(e) => AddFontHandle("", "", e)}>Add Custom Fonts</button>
      </div>

      {
        addCustomFont && (<CreateCustomFont
          onClose={closeCustomHandle}
          _id={themeId}
          themeData={themeData} />)
      }
      <ConfirmationPopup
        title="Delete Theme?"
        subTitle="Are you sure you want to delete this theme?"
        ref={themeRef}
        onclose={CloseDeleteThemeHandle}
        confirmDeleteItem={ConfirmDeleteItemHandle}
        buttonTitle1="No"
        buttonTitle2="Yes"
      />
    </div>
  )
}

export default FontSetting