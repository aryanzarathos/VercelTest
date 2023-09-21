import React, { useState } from "react";
import styles from "./themeSetting.module.scss";
import FormInput from "../../../../../CommonComponents/Form/FormInput";
import { styled } from "styled-components";
import ColorPalette from "../../../../../CommonComponents/ColorPalette";
import InputColorPickerPortal from "../../../../../CommonComponents/ColorPicker/ColorPickerPortal";
import ValidationFile from "../../../../../Classes/ValidationFile";
import {
  RGBToHex,
  rgbaToHex,
} from "../../../../../CommonFunctions/changeColorType";
import { useEffect } from "react";
import useGlobalTheme from "../../../../../CustomHooks/useGlobalTheme";
import { useDispatch } from "react-redux";
import {
  createCustomTheme,
  editCustomTheme,
} from "../../../../../store/actions/siteEditor";
import FormError from "../../../../../CommonComponents/Form/FormError";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { UPDATE_DYNAMIC_THEME } from "@/store/reducers/websiteTemplate";

const Color = styled.span`
  width: 24px;
  height: 24px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  background: ${({ item }) => item};
`;

const CreateCustomTheme = ({ onClose, _id, themeData }) => {
  const globalTheme = useGlobalTheme();
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(false);
  const [validError, setValidError] = useState(false);
  const [colorVariations, setColorVariations] = useState({});
  const [themeName, setThemeName] = useState("");
  const [colorPicker, setColorPicker] = useState(false);
  const [previousTheme, setPreviousTheme] = useState({});
  const debounce = useDebounceFunction((callback) => callback(), 400);
  function createDarkShade(rgbColor, percent, opacity = 1) {
    const factor = 1 - percent / 100;
    const darkR = Math.round(rgbColor[0] * factor);
    const darkG = Math.round(rgbColor[1] * factor);
    const darkB = Math.round(rgbColor[2] * factor);
    return `rgba(${darkR}, ${darkG},${darkB},${opacity})`;
  }

  function createLightShade(rgbColor, percent, opacity = 1) {
    const factor = 1 + percent / 100;
    const lightR = Math.min(Math.round(rgbColor[0] * factor), 255);
    const lightG = Math.min(Math.round(rgbColor[1] * factor), 255);
    const lightB = Math.min(Math.round(rgbColor[2] * factor), 255);
    return `rgba(${lightR}, ${lightG},${lightB},${opacity})`;
  }

  const ColorPickerhandle = (val) => {
    setColorPicker(val);
  };

  const createColorVariationFunction = (dynamicColors) => {
    let myColor = 0;
    // 1. get the colors 2. create the color varient 3. add new color to colors object
    const varients = [
      "darkShadeBold",
      "darkShadeMedium",
      "lightShadeRegular",
      "lightShadeThin",
    ];
    let colors = {};
    if (dynamicColors) {
      colors = {
        ["global-color-primary"]: dynamicColors["global-color-primary"],
        ["global-color-secondary"]: dynamicColors["global-color-secondary"],
        ["global-color-tertiary"]: dynamicColors["global-color-tertiary"],
        ["global-color-quaternary"]: dynamicColors["global-color-quaternary"],
        ["global-color-penitentiary"]:
          dynamicColors["global-color-penitentiary"],
      };
    } else {
      colors = {
        ["global-color-primary"]: colorVariations["global-color-primary"],
        ["global-color-secondary"]: colorVariations["global-color-secondary"],
        ["global-color-tertiary"]: colorVariations["global-color-tertiary"],
        ["global-color-quaternary"]: colorVariations["global-color-quaternary"],
        ["global-color-penitentiary"]:
          colorVariations["global-color-penitentiary"],
      };
    }
    ////// console.log(colors,"kkook")
    for (let color in colors) {
      //  ////// console.log( 'darltheme', createDarkShade([31,50,89],40,1))
      //  ////// console.log('newColor' ,LightenDarkenColor("#1F3259",0.2))
      // colors.primaryL = createDarkShade([31,50,89],0.3)
      // get the color rgb values
      if (myColor >= 5) return;
      // set the variable name
      else {
        // setColorsIndex(colorsIndex + 1)
        myColor = myColor + 1;
        let colorName = color;
        const rgbaValue = colors[color];
        const getRgbarray = rgbaValue.match(/\d+(\.\d+)?/g);
        // convert rgb array to number
        const rgbaNumbers = getRgbarray.map(Number);
        // ////// console.log('color name', createDarkShade(rgbaNumbers,40));

        for (let varient of varients) {
          if (varient === "darkShadeBold") {
            const getRbaColor = createDarkShade(rgbaNumbers, 50, 1).toString();
            colors[`${colorName}-${varient}`] = getRbaColor;
          } else if (varient === "darkShadeMedium") {
            const getRbaColor = createDarkShade(rgbaNumbers, 30, 1).toString();
            colors[`${colorName}-${varient}`] = getRbaColor;
          } else if (varient === "lightShadeRegular") {
            const getRgbaColor = createLightShade(
              rgbaNumbers,
              0,
              0.7
            ).toString();
            colors[`${colorName}-${varient}`] = getRgbaColor;
          } else if (varient === "lightShadeThin") {
            const getRgbaColor = createLightShade(
              rgbaNumbers,
              0,
              0.4
            ).toString();
            colors[`${colorName}-${varient}`] = getRgbaColor;
          } else break;
        }
      }
    }
    return { ...colors };
  };
  const handle = (val, type) => {
    setColorVariations({ ...colorVariations, [type]: val });
    debounce(() =>
      dispatch(
        UPDATE_DYNAMIC_THEME(
          createColorVariationFunction({ ...colorVariations, [type]: val })
        )
      )
    );
  };
  const payload = () => {
    ////// console.log(createColorVariationFunction())
    let body = {
      ...globalTheme,
      theme_Name: themeName,
      color: createColorVariationFunction(),
    };
    delete body._id;
    delete body.theme_id;
    return body;
  };
  const applyColor = () => {
    ////// console.log(colorVariations,"submitbuttno")
    if (ValidationFile.isNotEmpty(themeName)) {
      if (_id) {
        dispatch(editCustomTheme({ data: payload(), themeId: themeData?._id }));
      } else {
        dispatch(createCustomTheme({ data: payload() }));
      }
       onClose();
    } else {
      setValidError(true);
    }
  };
  const closeModal = () => {
    onClose();
    dispatch(
      UPDATE_DYNAMIC_THEME(createColorVariationFunction({ ...previousTheme }))
    );
  };
  
  useEffect(() => {
    if (!isFilled && JSON.stringify(globalTheme) !== "{}") {
      //// console.log("hi", globalTheme, "jo");
      setPreviousTheme(globalTheme?.color);
      if (_id) {
        setColorVariations(themeData?.color);
        setThemeName(themeData?.theme_Name);
        setIsFilled(true);
      } else {
        setColorVariations(globalTheme?.color);
        setIsFilled(true);
      }
    }
  }, [_id, globalTheme, isFilled, themeData]);
  return (
    <React.Fragment>
      {colorVariations && (
        <div className={styles.CustomThemePopup}>
          <div className={styles.customhead}>
            <h5 className={styles.title}>Create custom theme</h5>
            <button className={styles.closebutton} onClick={closeModal}>
              <i className={styles.closeIcon}>&#10006;</i>
            </button>
          </div>
          <div className={styles.custombody}>
            <div className={styles.formFieldWrap}>
              <FormInput
                placeholder="Custom Theme 1"
                className={styles.CustomInput}
                onChange={(e) => setThemeName(e.target.value)}
                onKeyUp={(e) => setThemeName(e.target.value)}
                value={themeName}
              />
              <FormError
                show={!themeName && validError}
                error={"Theme name required."}
              />
            </div>

            <div className={styles.SelectColoPaletteWrapper}>
              <div className={styles.SelectColoPalette}>
                <Color item={colorVariations?.["global-color-primary"]} />
                <span className={styles.title}>Color 1</span>
              </div>
              <ColorPalette
                colorCode={colorVariations["global-color-primary"]}
                paletteHandle={() => ColorPickerhandle("global-color-primary")}
              />
            </div>

            <div className={styles.SelectColoPaletteWrapper}>
              <div className={styles.SelectColoPalette}>
                <Color item={colorVariations["global-color-secondary"]} />
                <span className={styles.title}>Color 2</span>
              </div>
              <ColorPalette
                colorCode={colorVariations["global-color-secondary"]}
                paletteHandle={() =>
                  ColorPickerhandle("global-color-secondary")
                }
              />
            </div>

            <div className={styles.SelectColoPaletteWrapper}>
              <div className={styles.SelectColoPalette}>
                <Color item={colorVariations["global-color-tertiary"]} />
                <span className={styles.title}>Color 3</span>
              </div>
              <ColorPalette
                colorCode={colorVariations["global-color-tertiary"]}
                paletteHandle={() => ColorPickerhandle("global-color-tertiary")}
              />
            </div>

            <div className={styles.SelectColoPaletteWrapper}>
              <div className={styles.SelectColoPalette}>
                <Color item={colorVariations["global-color-quaternary"]} />
                <span className={styles.title}>Color 4</span>
              </div>
              <ColorPalette
                colorCode={colorVariations["global-color-quaternary"]}
                paletteHandle={() =>
                  ColorPickerhandle("global-color-quaternary")
                }
              />
            </div>

            <div className={styles.SelectColoPaletteWrapper}>
              <div className={styles.SelectColoPalette}>
                <Color item={colorVariations["global-color-penitentiary"]} />
                <span className={styles.title}>Color 5</span>
              </div>
              <ColorPalette
                colorCode={colorVariations["global-color-penitentiary"]}
                paletteHandle={() =>
                  ColorPickerhandle("global-color-penitentiary")
                }
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                className={`button btn-xs btn-oval btn-o-gray`}
                onClick={() => closeModal()}
              >
                Cancel
              </button>
              <button
                className={`button btn-xs btn-oval button-primary`}
                onClick={() => applyColor()}
              >
                Apply
              </button>
            </div>
          </div>
          {colorPicker && (
            <div className={styles.colorPickerPopupWrap}>
              <InputColorPickerPortal
                onclose={() => setColorPicker(false)}
                title="Pick Color"
                handleChange={(color) => handle(color, colorPicker)}
                value={colorVariations[colorPicker]}
              />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default CreateCustomTheme;
