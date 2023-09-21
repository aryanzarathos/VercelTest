import React, { useRef } from "react";
import styles from "./themeSetting.module.scss";
import { useState } from "react";
import { styled } from "styled-components";
import CreateCustomTheme from "./CreateCustomTheme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomTheme, getGlobalThemeList } from "../../../../../store/actions/siteEditor";
import useTemplateId from "../../../../../CustomHooks/useTemplateId";
import useGlobalTheme from "../../../../../CustomHooks/useGlobalTheme";
import { activateTheme } from "../../../../../store/actions/websiteTemplate";
import ConfirmationPopup from "../../../../../CommonComponents/ConfirmationPopup";
import { useOutsideClick } from "rooks";
import SpinnerLoader from "../../../../../CommonComponents/SpinnerLoader/SpinnerLoader";

const ColorPallet = styled.span`
  background: ${({ item }) => item};
  width: 35px;
  height: 35px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
`;
const Data = [
  {
    _id: "1",
    title: "Theme 1",
    themeList: [
      {
        _id: "1",
        colorCode: "#1F3259",
      },
      {
        _id: "2",
        colorCode: "#428BC1",
      },
      {
        _id: "3",
        colorCode: "#6AA9FF",
      },
      {
        _id: "4",
        colorCode: "#000000",
      },
      {
        _id: "5",
        colorCode: "#FFFFFF",
      },
    ],
  },
  {
    _id: "2",
    title: "Theme 2",
    themeList: [
      {
        _id: "1",
        colorCode: "#591F2D",
      },
      {
        _id: "2",
        colorCode: "#881833",
      },
      {
        _id: "3",
        colorCode: "#B50C35",
      },
      {
        _id: "4",
        colorCode: "#000000",
      },
      {
        _id: "5",
        colorCode: "#FFFFFF",
      },
    ],
  },
  {
    _id: "3",
    title: "Theme 3",
    themeList: [
      {
        _id: "1",
        colorCode: "#1F592F",
      },
      {
        _id: "2",
        colorCode: "#EA5E7F",
      },
      {
        _id: "3",
        colorCode: "#0CB550",
      },
      {
        _id: "4",
        colorCode: "#363636",
      },
      {
        _id: "5",
        colorCode: "#363636",
      },
    ],
  },
  {
    _id: "4",
    title: "Theme 4",
    themeList: [
      {
        _id: "1",
        colorCode: "#391F59",
      },
      {
        _id: "2",
        colorCode: "#721888",
      },
      {
        _id: "3",
        colorCode: "#B50CAE",
      },
      {
        _id: "4",
        colorCode: "#363636",
      },
      {
        _id: "5",
        colorCode: "#E8E8E8",
      },
    ],
  },
  {
    _id: "5",
    title: "Theme 5",
    themeList: [
      {
        _id: "1",
        colorCode: "#FF480E",
      },
      {
        _id: "2",
        colorCode: "#FCCF2F",
      },
      {
        _id: "3",
        colorCode: "#1A40C7 ",
      },
      {
        _id: "4",
        colorCode: "#363636",
      },
      {
        _id: "5",
        colorCode: "#E8E8E8",
      },
    ],
  },
];

const ColorSetting = () => {
  const dispatch = useDispatch();
  const themeRef = useRef(null)
  // const customThemeRef = useRef(null)
  const globalTheme = useGlobalTheme()
  const templateId = useTemplateId();
  const [themeId, setThemeId] = useState("")
  const [themeData, setThemeData] = useState({})
  const [defaultThemes, setDefaultTheme] = useState("");
  const [CustomTheme, setCustomTheme] = useState("");
  const [addCustomTheme, setAddCustomTheme] = useState("");
  const { themeList, themeListSuccess } = useSelector((state) => {
    return {
      themeList: state.editor.getGlobalThemeList.data,
      themeListSuccess: state.editor.getGlobalThemeList.success
    };
  });
  // useOutsideClick(customThemeRef,()=>{
  //   if(addCustomTheme)setAddCustomTheme(false)
  // })

  const ThemePalethandle = (id, item, isDefault) => {
    setDefaultTheme(id);
    setCustomTheme(id);
    let body = { ...item }
    delete body._id;
    dispatch(activateTheme({ data: { theme_id: id, isDefaultTheme: isDefault, ...body }, themeId: globalTheme?._id }))
  };

  const AddThemeHandle = (val, item, e) => {
    // e.stopPropagation()
    if (val === "edit") {
      setThemeId(item._id)
      setThemeData(item)
    } else {
      setThemeId("")
      setThemeData("")
    }
    setAddCustomTheme(true);
  };

  const closeCustomHandle = () => {
    setAddCustomTheme(false);
  };

  useEffect(() => {
    if (templateId) {
      dispatch(getGlobalThemeList({ template: templateId }));
    }
  }, [dispatch, templateId]);


  const deleteThemeHandle = (_id, e) => {
    e.stopPropagation()
    setThemeId(_id)
    themeRef.current.open()
  }
  const CloseDeleteThemeHandle = () => {
    themeRef.current.close()
  }
  const ConfirmDeleteItemHandle = () => {
    dispatch(deleteCustomTheme({ themeId: themeId }))
    themeRef.current.close()
  }

  return (
    <React.Fragment>
      {themeListSuccess ?
        <div className={styles.ColorPaletteList}>
          {
            themeList?.UserEditorThemeData?.length > 0 ?
              <React.Fragment>
                <div className={styles.titleWrapper}>
                  <p>Custom Themes</p>
                </div>
                <ul className={styles.ColorPaletListWrapper}>
                  {themeList?.UserEditorThemeData?.length > 0 &&
                    themeList?.UserEditorThemeData.map((item, key) => (
                      item?.color && <li
                        key={key}
                        className={`${styles.ColorPaletteItem} ${item?.isActivated ? `${styles.Active}` : ""
                          }`}
                        onClick={() => ThemePalethandle(item._id, item, false)}
                      >
                        <div className={styles.HeadPalette}>
                          <div className={styles.TitleWrapper}>
                            {item?.isActivated ? (
                              <i className={styles.CheckIcon}></i>
                            ) : (
                              <i className={styles.UnCheckIcon}></i>
                            )}
                            <h6>{item?.theme_Name}</h6>
                          </div>
                          <div className={styles.IconWrapper}>
                            <button onClick={(e) => AddThemeHandle("edit", item, e)}>
                              <i className={styles.EditIcon}></i>
                            </button>
                            {!item?.isActivated && <button onClick={(e) => deleteThemeHandle(item._id, e)}>
                              <i className={styles.DeleteIcon}></i>
                            </button>}
                          </div>
                        </div>
                        <div className={styles.ColorPaletteGrid}>
                          <ColorPallet item={item["color"]["global-color-primary"]} />
                          <ColorPallet item={item["color"]["global-color-secondary"]} />
                          <ColorPallet item={item["color"]["global-color-tertiary"]} />
                          <ColorPallet item={item["color"]["global-color-quaternary"]} />
                          <ColorPallet
                            item={item["color"]["global-color-penitentiary"]}
                          />
                        </div>
                      </li>
                    ))}
                </ul>
              </React.Fragment> : ""
          }

          <div className={styles.titleWrapper}>
            <p>Default Themes</p>
          </div>
          <ul className={styles.ColorPaletListWrapper}>
            {themeList?.GloabalThemeData?.length > 0 &&
              themeList?.GloabalThemeData.map((item, key) => (
                item?.color && <li
                  key={key}
                  className={`${styles.ColorPaletteItem} ${item?.isActivated ? `${styles.Active}` : ""
                    }`}
                  onClick={() => ThemePalethandle(item._id, item, true)}
                >
                  <div className={styles.HeadPalette}>
                    <div className={styles.TitleWrapper}>
                      {item?.isActivated ? (
                        <i className={styles.CheckIcon}></i>
                      ) : (
                        <i className={styles.UnCheckIcon}></i>
                      )}
                      <h6>{item?.theme_Name}</h6>
                    </div>
                  </div>
                  <div className={styles.ColorPaletteGrid}>
                    <ColorPallet item={item["color"]["global-color-primary"]} />
                    <ColorPallet item={item["color"]["global-color-secondary"]} />
                    <ColorPallet item={item["color"]["global-color-tertiary"]} />
                    <ColorPallet item={item["color"]["global-color-quaternary"]} />
                    <ColorPallet
                      item={item["color"]["global-color-penitentiary"]}
                    />
                  </div>
                </li>
              ))}
          </ul>
          <div className={styles.FooterPalette}>
            <button
              className={`button btn-oval  btn-xs ${addCustomTheme ? styles.btn_disable : "btn-o-primary"}`}
              onClick={(e) => AddThemeHandle("", "", e)}
            >
              Create a custom theme
            </button>
          </div>

          {addCustomTheme &&
            <CreateCustomTheme onClose={() => closeCustomHandle()} _id={themeId} themeData={themeData} />

          }
        </div> : <SpinnerLoader className={styles.spinerLoader_wrap} />}
      <ConfirmationPopup
        title="Delete Theme?"
        subTitle="Are you sure you want to delete this theme?"
        ref={themeRef}
        onclose={CloseDeleteThemeHandle}
        confirmDeleteItem={ConfirmDeleteItemHandle}
        buttonTitle1="No"
        buttonTitle2="Yes"
      />
    </React.Fragment >
  );
};

export default ColorSetting;
