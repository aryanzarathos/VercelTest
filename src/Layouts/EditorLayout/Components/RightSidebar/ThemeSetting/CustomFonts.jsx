import React, { useEffect, useState } from "react";
import styles from "./CustomFont.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SelectDropDownRandom from "../../../../../CommonComponents/Dropdown/OpenPage&ScrollBlock";
import useTemplateId from "../../../../../CustomHooks/useTemplateId";
import {
  createCustomFonts,
  editCustomFonts,
} from "../../../../../store/actions/siteEditor";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { UPDATE_DYNAMIC_FONTS, UPDATE_FONTS_ARRAY } from "@/store/reducers/websiteTemplate";
import InputSearchDropDown from "@/CommonComponents/InputSearchDropdown";
import ValidationUtils from "@/Classes/ValidationUtils";
import FormError from "@/CommonComponents/Form/FormError";
import { getGoogleFonts } from "@/store/actions/googleFonts";

const CreateCustomFont = ({ onClose, _id, themeData }) => {
  const [previousFontFamily, setPreviousFontFamily] = useState({})
  const [isFilled, setIsFilled] = useState(false)
  const dispatch = useDispatch();
  const templateId = useTemplateId();
  const debounce = useDebounceFunction((callback) => callback(), 400);
  const { fontList, user, templateData } = useSelector((state) => {
    return {
      fontList: state.googleFonts,
      templateData: state.websiteTemplate.getTemplate.data,
      user: state.user,
    };
  });
  const [headingFontFamily, setHeadingFontFamily] = useState("");
  const [paraFontFamily, setParaFontFamily] = useState("");
  const [error, setError] = useState(false);

  const closeModal = () => {
    onClose();
    dispatch(UPDATE_DYNAMIC_FONTS({ ...previousFontFamily }))
  };
  const selectedHandle = (v) => {
    setHeadingFontFamily(v);
    dispatch(UPDATE_FONTS_ARRAY(v))
    dispatch(UPDATE_DYNAMIC_FONTS({ header: v }))
  };
  const selectedHandlePara = (v) => {
    setParaFontFamily(v);
    dispatch(UPDATE_FONTS_ARRAY(v))
    dispatch(UPDATE_DYNAMIC_FONTS({ paragraph: v }))
  };
  const Addcustumfont = () => {
    let data = {
      theme_Name: "Font",
      template: templateId,
      header: headingFontFamily,
      paragraph: paraFontFamily,
      owner: user._id,
      business: user.user_business,
    };
    if (ValidationUtils.isNotEmpty(headingFontFamily) && ValidationUtils.isNotEmpty(paraFontFamily)) {
      if (_id) {
        dispatch(editCustomFonts({ data: data, themeId: themeData?._id }));
        onClose();
      } else {
        dispatch(createCustomFonts({ data: data }));
        onClose();
      }
    }
    else {
      setError(true);
    }


  };

  useEffect(() => {
    dispatch(getGoogleFonts())
  }, [dispatch])
  // console.log(fontList,"fontList")

  useEffect(() => {
    if (!isFilled) {
      if (_id) {
        setHeadingFontFamily(themeData?.header);
        setParaFontFamily(themeData?.paragraph);
        setIsFilled(true)
      }
      if (templateData.template.draftfontfamily) {
        setPreviousFontFamily(templateData.template.draftfontfamily)
        setIsFilled(true)
      }

    }
  }, [_id, isFilled, templateData.template.draftfontfamily, themeData?.header, themeData?.paragraph])
  return (
    <React.Fragment>
      <div className={styles.CustomFontPopup}>
        <div className={styles.customhead}>
          <h5 className={styles.title}>Select custom font style</h5>
          <button className={styles.closebutton} onClick={closeModal}>
            <i className={styles.closeIcon}>&#10006;</i>
          </button>
        </div>
        <div className={styles.custombody}>
          <p className={styles.fontDropDown}>Header Fonts</p>
          <InputSearchDropDown
            handleSelect={selectedHandle}
            className={styles.dropdown}
            deafultValue={"Select"}
            label={"family"}
            value={"family"}
            showValue={headingFontFamily}
            values={fontList}
            selectListClassName={styles.dropDownContent}
          />
          <FormError
            show={error && !headingFontFamily}
            error="Please select header fonts."
          />

          <p className={styles.fontDropDown}>Paragraph Fonts</p>
          <InputSearchDropDown
            handleSelect={selectedHandlePara}
            className={styles.dropdown}
            deafultValue={"Select"}
            label={"family"}
            value={"family"}
            showValue={paraFontFamily}
            values={fontList}
            selectListClassName={styles.dropDownContentpara}
          />

          <FormError
            show={error && !paraFontFamily}
            error="Please select paragraph fonts."
          />

          <div className={styles.buttonGroup}>
            <button
              className={`button btn-xs btn-oval btn-o-gray`}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className={`button btn-xs btn-oval button-primary`}
              onClick={() => Addcustumfont()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateCustomFont;
