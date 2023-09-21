import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import AccordianIcon from "../../../../../../Assets/SiteEditor/Icons/accordian-icon.svg";
import { useState } from "react";
// import HeaderBackground from '../MainHeader/HeaderBackground';
import SwitchButton from "../../../../../../CommonComponents/SwitchButton";
// import HeaderStructure from '../MainHeader/headerStructure';
// import LogoSite from '../MainHeader/LogoSiteName';
// import NavigationMenu from '../MainHeader/NavigationMenu';
import SelectDropDown from "../../../../../../CommonComponents/SelectDropdown";
import BackgroundColor from "./BackgroundColorSection/Index";
import LogoSiteFooter from "./LogositeFooter";
import BrandDescriptionFooter from "./BrandDescriptionFooter";
import SocialMedia from "./SocialMediaFooter";
import MenusFooter from "./MenusFooter";
import MapImageFooter from "./MapsImageFooter";
import ImageUploade from "./ImageUploade";
import { useDispatch, useSelector } from "react-redux";
import {
  getFooterData,
  updateFooterData,
} from "../../../../../../store/actions/siteEditor";
import useTemplateId from "../../../../../../CustomHooks/useTemplateId";
import ColorPalette from "../../../../../../CommonComponents/ColorPalette";
import InputColorPickerPortal from "../../../../../../CommonComponents/ColorPicker/ColorPickerPortal";
import { useDebounceFunction } from "../../../../../../CommonFunctions/debounce";
import { UPDATE_FOOTER } from "@/store/reducers/websiteTemplate";
import { updateMainContainerStatic } from "@/store/actions/appearanceSettings";
import { getGoogleFonts } from "@/store/actions/googleFonts";

const accordianData = [
  {
    id: 1,
    title: "Logo & Site Name",
    component: <LogoSiteFooter />,
  },
  {
    id: 2,
    title: "Brand Description",
    component: <BrandDescriptionFooter />,
  },
  {
    id: 3,
    title: "Social Media",
    component: <SocialMedia />,
  },
  {
    id: 4,
    title: "Menus",
    component: <MenusFooter />,
  },
  {
    id: 5,
    title: "maps/Image",
    component: <MapImageFooter />,
  },
];
const Footer = () => {
  const dispatch = useDispatch();

  const templateId = useTemplateId();

  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const { footerData, getTemplateData } = useSelector((state) => {
    return {
      footerData: state.editor.footerData.data,
      getTemplateData: state.websiteTemplate.getTemplate.data,
    };
  });

  const [hidefromPage, setHideFromPage] = useState(false);
  const [hidefromAllPages, setHideFromAllPages] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [appearance, setAppearance] = useState({
    background: "",
    description: "",
    icon: "",
    heading: "",
    menu: "",
    color: "",
    background_type: "Color",
    image_url: "",
    object_fit: "fill",
    position: "center",
  });
  const [expand, setExpand] = useState(-1);
  const array = ["Color", "Image"];

  useEffect(() => {
    dispatch(getFooterData({ id: getTemplateData?.template?._id }));
  }, [dispatch]);

  useEffect(() => {
    if (footerData) {
      setHideFromPage(getTemplateData?.hide_footer);
      setHideFromAllPages(footerData?.hide_on_all_pages);
      setAppearance({ ...appearance, ...footerData?.Appearance });
    }
  }, [footerData]);

  const selectedHandle = (type, val) => {
    setAppearance({ ...appearance, [type]: val });
    dispatch(
      updateFooterData({
        id: footerData?._id,
        body: { Appearance: { ...appearance, [type]: val } },
      })
    );
    dispatch(
      UPDATE_FOOTER({ data: { Appearance: { ...appearance, [type]: val } } })
    );

    if (type === "background_type") {
      let mainContainerData = { ...getTemplateData?.lower[0] };
      mainContainerData["style"] = {
        ...mainContainerData["style"],
        desktop: {
          ...mainContainerData["style"].desktop,
          backgroundType: val.toLowerCase(),
        },
        mobile: {
          ...mainContainerData["style"].mobile,
          backgroundType: val.toLowerCase(),
        },
        tablet: {
          ...mainContainerData["style"].tablet,
          backgroundType: val.toLowerCase(),
        },
      };

      dispatch(
        updateMainContainerStatic({
          pageId: getTemplateData._id,
          mainContainerId: getTemplateData?.lower[0]?._id,
          mainContainerIndex: 0,
          data: mainContainerData,
        })
      )

      dispatch(
        UPDATE_FOOTER({
          mainContainerUpdate: true,
          mainContainerData: mainContainerData,
        })
      );
    } else if (
      type === "image_url" ||
      type === "position" ||
      type === "object_fit"
    ) {
      let mainContainerData = { ...getTemplateData?.lower[0] };
      const imgType =
        type === "image_url"
          ? "url"
          : type === "position"
            ? "backgroundPostion"
            : type === "object_fit"
              ? "backgroundSize"
              : "";
      mainContainerData["style"] = {
        ...mainContainerData["style"],
        desktop: {
          ...mainContainerData["style"].desktop,
          backgroundImage: {
            ...mainContainerData["style"].desktop.backgroundImage,
            [imgType]: val,
          },
        },
        mobile: {
          ...mainContainerData["style"].mobile,
          backgroundImage: {
            ...mainContainerData["style"].mobile.backgroundImage,
            [imgType]: val,
          },
        },
        tablet: {
          ...mainContainerData["style"].tablet,
          backgroundImage: {
            ...mainContainerData["style"].tablet.backgroundImage,
            [imgType]: val,
          },
        },
      };

      dispatch(
        updateMainContainerStatic({
          pageId: getTemplateData._id,
          mainContainerId: getTemplateData?.lower[0]?._id,
          mainContainerIndex: 0,
          data: mainContainerData,
        })
      )

      dispatch(
        UPDATE_FOOTER({
          mainContainerUpdate: true,
          mainContainerData: mainContainerData,
        })
      );
    }
  };

  const closeImageHandle = () => {
    setAppearance({ ...appearance, image_url: "" });
    dispatch(
      updateFooterData({
        id: footerData?._id,
        body: { Appearance: { ...appearance, image_url: "" } },
      })
    );
    dispatch(
      UPDATE_FOOTER({ data: { Appearance: { ...appearance, image_url: "" } } })
    );

    let mainContainerData = { ...getTemplateData?.lower[0] };
    const imgType = "url"
    mainContainerData["style"] = {
      ...mainContainerData["style"],
      desktop: {
        ...mainContainerData["style"].desktop,
        backgroundImage: {
          ...mainContainerData["style"].desktop.backgroundImage,
          [imgType]: "",
        },
      },
      mobile: {
        ...mainContainerData["style"].mobile,
        backgroundImage: {
          ...mainContainerData["style"].mobile.backgroundImage,
          [imgType]: "",
        },
      },
      tablet: {
        ...mainContainerData["style"].tablet,
        backgroundImage: {
          ...mainContainerData["style"].tablet.backgroundImage,
          [imgType]: "",
        },
      },
    };

    dispatch(
      updateMainContainerStatic({
        pageId: getTemplateData._id,
        mainContainerId: getTemplateData?.lower[0]?._id,
        mainContainerIndex: 0,
        data: mainContainerData,
      })
    )

    dispatch(
      UPDATE_FOOTER({
        mainContainerUpdate: true,
        mainContainerData: mainContainerData,
      })
    );
  }

  //// console.log(appearance, "line no 1066");

  const ChangeHandle = (e, type, pageId) => {
    if (e.target.checked) {
      dispatch(
        updateFooterData({
          id: footerData?._id,
          body: { [type]: true },
          pageId: pageId,
        })
      );
      dispatch(UPDATE_FOOTER({ pageUpdate: true, hide_footer: true }));
    } else {
      dispatch(
        updateFooterData({
          id: footerData?._id,
          body: { [type]: false },
          pageId: pageId,
        })
      );
      dispatch(UPDATE_FOOTER({ pageUpdate: true, hide_footer: false }));
    }
  };

  const ColorPickerhandle = (val) => {
    setColorPicker(val);
  };

  useEffect(() => {
    dispatch(getGoogleFonts());
  }, [dispatch]);
  const handleColors = (color, type) => {
    setAppearance({ ...appearance, [type]: color });

    dispatch(
      updateFooterData({
        id: footerData?._id,
        body: { Appearance: { ...appearance, [type]: color } },
      })
    )

    dispatch(
      UPDATE_FOOTER({ data: { Appearance: { ...appearance, [type]: color } } })
    );
    if (type?.toLowerCase() === "color") {
      let mainContainerData = { ...getTemplateData?.lower[0] };
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
      debouncedAppearance(() =>
        dispatch(
          updateMainContainerStatic({
            pageId: getTemplateData._id,
            mainContainerId: getTemplateData?.lower[0]?._id,
            mainContainerIndex: 0,
            data: mainContainerData,
          })
        )
      );
      dispatch(
        UPDATE_FOOTER({
          mainContainerUpdate: true,
          mainContainerData: mainContainerData,
        })
      );
    }
  };

  const ClickHandle = (index) => {
    setExpand(expand === index ? -1 : index);
  };

  return (
    <div className={styles.mainFooter}>
      <div className={styles.HideTop}>
        <p>Hide on this page</p>
        <SwitchButton
          layout={true}
          onChange={(e) => {
            ChangeHandle(e, "hide_this_page", getTemplateData?._id);
            setHideFromPage(e.target.checked);
          }}
          checked={hidefromPage}
        />
      </div>
      <div className={styles.HideTop}>
        <p>Hide on all pages</p>
        <SwitchButton
          layout={true}
          onChange={(e) => {
            ChangeHandle(e, "hide_on_all_pages", "");
            setHideFromAllPages(e.target.checked);
          }}
          checked={hidefromAllPages}
        />
      </div>
      {accordianData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <div
              className={`${styles.accordian} ${expand === item.id ? `${styles.active}` : ""
                }`}
              key={key}
            >
              <div
                className={styles.accordianHeader}
                onClick={() => ClickHandle(item.id)}
              >
                <p>{item.title}</p>
                <div className={styles.acccordianIcon}>
                  <AccordianIcon />
                </div>
              </div>
              {expand === item.id && (
                <div className={styles.accordianContent}>{item.component}</div>
              )}
            </div>
          </React.Fragment>
        );
      })}
      <div className={styles.HideTop}>
        <p>Appearance</p>
      </div>
      <div className={styles.backgroundDropdownWrap}>
        <p className={styles.backgroundColorTxt}>Background</p>
        <SelectDropDown
          handleSelect={(val) => selectedHandle("background_type", val)}
          className={styles.dropdown}
          showValue={appearance?.background_type}
          deafultValue={appearance?.background_type}
          values={array}
        />
      </div>
      {appearance?.background_type === "Image" ? (
        <div className={styles.uploadeImagewrap}>
          <ImageUploade
            object_data={appearance}
            selectedHandle={selectedHandle}
            closeImageHandle={closeImageHandle}
          />
        </div>
      ) : appearance?.background_type === "Color" ? (
        <BackgroundColor
          appearance={appearance}
          ColorPickerhandle={ColorPickerhandle}
        />
      ) : (
        ""
      )}

      <div className={styles.borderlineMain}>
        <span className={styles.borderline} />
      </div>

      <div className={styles.colorSection}>
        <div className={styles.backgroundColor}>
          <p>Description</p>
          <ColorPalette
            colorCode={appearance?.description || "#FFFFFF"}
            paletteHandle={() => ColorPickerhandle("description")}
          />
        </div>
        <div className={styles.backgroundColor}>
          <p>Icon</p>
          <ColorPalette
            colorCode={appearance?.icon || "#FFFFFF"}
            paletteHandle={() => ColorPickerhandle("icon")}
          />
        </div>
        <div className={styles.backgroundColor}>
          <p>Heading</p>
          <ColorPalette
            colorCode={appearance?.heading || "#FFFFFF"}
            paletteHandle={() => ColorPickerhandle("heading")}
          />
        </div>
        <div className={styles.backgroundColor}>
          <p>Menu</p>
          <ColorPalette
            colorCode={appearance?.menu || "#FFFFFF"}
            paletteHandle={() => ColorPickerhandle("menu")}
          />
        </div>
      </div>
      {colorPicker && (
        <div className={styles.colorPickerPopupWrap}>
          <InputColorPickerPortal
            onclose={() => setColorPicker(false)}
            title={`Pick Color`}
            handleChange={(color) => handleColors(color, colorPicker)}
            Color={appearance[colorPicker]}
            value={appearance[colorPicker]}
          />
        </div>
      )}
    </div>
  );
};

export default Footer;
