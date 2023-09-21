import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../topheader.module.scss";
import SwitchButton from "../../../../../../../CommonComponents/SwitchButton";
import FormInput from "../../../../../../../CommonComponents/Form/FormInput";
import CheckboxInput from "../../../../../../../CommonComponents/Form/CheckboxInput";
import { updateTopHeaderData } from "../../../../../../../store/actions/siteEditor/index";
import ColorPalette from "../../../../../../../CommonComponents/ColorPalette";
// import InputColorPicker from "../../../../../../../CommonComponents/ColorPicker";
import { useDebounceFunction } from "../../../../../../../CommonFunctions/debounce";
import { updateMainContainerStatic } from "@/store/actions/appearanceSettings";
import { UPDATE_TOP_HEADER } from "@/store/reducers/websiteTemplate";
import InputColorPickerPortal from "@/CommonComponents/ColorPicker/ColorPickerPortal";
import { useGlobalVariable } from "@/CommonFunctions/changeColorType";

const TopHeaderLayout1 = ({ headerData }) => {
  const dispatch = useDispatch();
  const { templateData } = useSelector((state) => {
    return {
      templateData: state.websiteTemplate.getTemplate.data,
    };
  });
  const [globalVariable] = useGlobalVariable()
  const [showPhoneNo, setShowPhoneNo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState("");
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [followText, setFollowText] = useState("");
  const [showTwitter, setShowTwitter] = useState(false);
  const [twitter, setTwitter] = useState("");
  const [showFacebook, setShowFacebook] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [showGmail, setShowGmail] = useState(false);
  const [gmail, setGmail] = useState("");
  const [showInstagram, setShowInstagram] = useState(false);
  const [instagram, setInstagram] = useState("");
  const [showMultipleCurr, setShowMultipleCurr] = useState(false);
  const [showMultipleLang, setShowMultipleLang] = useState(false);
  const [locationUrl, setLocationUrl] = useState("")
  const [colorPicker, setColorPicker] = useState(false);
  const [appearance, setAppearance] = useState({
    background: "",
    icons: "",
    social_icons: "",
    text: "",
  });

  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  useEffect(() => {
    if (headerData) {
      setShowPhoneNo(headerData?.show_phone_number);
      setPhoneNumber(headerData?.phone_number);
      setShowEmail(headerData?.show_email);
      setEmail(headerData?.email);
      setShowLocation(headerData?.show_location);
      setLocationUrl(headerData?.locationUrl)
      setLocation(headerData?.location);
      setShowSocialMedia(headerData?.show_followUs);
      setFollowText(headerData?.followUs);
      setShowTwitter(headerData?.show_twitter);
      setTwitter(headerData?.twitter);
      setShowFacebook(headerData?.show_facebook);
      setFacebook(headerData?.facebook);
      setShowGmail(headerData?.show_gmail);
      setGmail(headerData?.gmail);
      setShowInstagram(headerData?.show_instagram);
      setInstagram(headerData?.instagram);
      setShowMultipleCurr(headerData?.Multiple_Currency);
      setShowMultipleLang(headerData?.Multiple_Language);
      setAppearance(headerData?.Appearance);
    }
  }, [headerData]);

  const handleSwitch = (e, type) => {
    if (e.target.checked) {
      dispatch(
        updateTopHeaderData({
          headerId: headerData?._id,
          body: { [type]: true },
        })
      );
      dispatch(UPDATE_TOP_HEADER({ data: { [type]: true } }))
    } else {
      dispatch(
        updateTopHeaderData({
          headerId: headerData?._id,
          body: { [type]: false },
        })
      );
      dispatch(UPDATE_TOP_HEADER({ data: { [type]: false } }))
    }
  };

  const handleOnChange = (val, type) => {
    debouncedAppearance(() => {
      dispatch(
        updateTopHeaderData({
          headerId: headerData?._id,
          body: { [type]: val },
        })
      );
      dispatch(UPDATE_TOP_HEADER({ data: { [type]: val } }))
    })
  }

  const ColorPickerhandle = (val) => {
    setColorPicker(val);
  };

  const handleColors = (color, type) => {
    setAppearance({ ...appearance, [type]: color });
    debouncedAppearance(() =>
      dispatch(
        updateTopHeaderData({
          headerId: headerData?._id,
          body: { Appearance: { ...appearance, [type]: color } },
        })
      )
    );
    dispatch(UPDATE_TOP_HEADER({ data: { Appearance: { ...appearance, [type]: color } } }))
    if (type === "background") {
      let mainContainerData = { ...templateData?.upper[0] };
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
      // debouncedAppearance(() =>
      dispatch(
        updateMainContainerStatic({
          pageId: templateData._id,
          mainContainerId: templateData?.upper[0]?._id,
          mainContainerIndex: 0,
          data: mainContainerData,
        })
      )
      // );
      dispatch(UPDATE_TOP_HEADER({ mainContainerUpdate: true, mainContainerData: mainContainerData }))
    }
  };

  return (
    <React.Fragment>
      <div>
        {/* ==== phone Email Social Section Start ===  */}
        <div className={styles.contactInfo}>
          {/* === phone No section start === */}
          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Phone Number</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "show_phone_number");
                  setShowPhoneNo(e.target.checked);
                }}
                checked={showPhoneNo}
              />
            </div>
            <FormInput
              type={"number"}
              maxLength={10}
              placeholder={"Phone Number"}
              labelPosition="top"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                handleOnChange(e.target.value, "phone_number");
              }}
            />
          </div>
          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Email Address</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "show_email");
                  setShowEmail(e.target.checked);
                }}
                checked={showEmail}
              />
            </div>
            <FormInput
              type={"email"}
              placeholder={"Enter your email address"}
              labelPosition="top"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleOnChange(e.target.value, "email");
              }}
            />
          </div>
          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Location</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "show_location");
                  setShowLocation(e.target.checked);
                }}
                checked={showLocation}
              />
            </div>
            <FormInput
              type={"text"}
              placeholder={"Enter your location"}
              labelPosition="top"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                handleOnChange(e.target.value, "location");
              }}
            />
            <FormInput
              type={"text"}
              placeholder={"Redirect Location Url"}
              labelPosition="top"
              value={locationUrl}
              onChange={(e) => {
                setLocationUrl(e.target.value);
                handleOnChange(e.target.value, "locationUrl");
              }}
            />
          </div>
          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Social Media</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "show_followUs");
                  setShowSocialMedia(e.target.checked);
                }}
                checked={showSocialMedia}
              />
            </div>
            {/* ==== social links start ==== */}
            <div className={styles.socialLinks}>
              <CheckboxInput
                label={"Twitter"}
                LabelClass={styles.checkBox}
                onChange={(e) => {
                  handleSwitch(e, "show_twitter");
                  setShowTwitter(e.target.checked);
                }}
                checked={showTwitter}
              />
              <FormInput
                type={"text"}
                placeholder={"Your social media link"}
                labelPosition="top"
                value={twitter}
                onChange={(e) => {
                  setTwitter(e.target.value);
                  handleOnChange(e.target.value, "twitter");
                }}
              />
            </div>
            <div className={styles.socialLinks}>
              <CheckboxInput
                label={"Facebook"}
                LabelClass={styles.checkBox}
                onChange={(e) => {
                  handleSwitch(e, "show_facebook");
                  setShowFacebook(e.target.checked);
                }}
                checked={showFacebook}
              />
              <FormInput
                type={"text"}
                placeholder={"Your social media link"}
                labelPosition="top"
                value={facebook}
                onChange={(e) => {
                  setFacebook(e.target.value);
                  handleOnChange(e.target.value, "facebook");
                }}
              />
            </div>
            <div className={styles.socialLinks}>
              <CheckboxInput
                label={"Gmail"}
                LabelClass={styles.checkBox}
                onChange={(e) => {
                  handleSwitch(e, "show_gmail");
                  setShowGmail(e.target.checked);
                }}
                checked={showGmail}
              />
              <FormInput
                type={"text"}
                placeholder={"Your social media link"}
                labelPosition="top"
                value={gmail}
                onChange={(e) => {
                  setGmail(e.target.value);
                  handleOnChange(e.target.value, "gmail");
                }}
              />
            </div>
            <div className={styles.socialLinks}>
              <CheckboxInput
                label={"Instagram"}
                LabelClass={styles.checkBox}
                onChange={(e) => {
                  handleSwitch(e, "show_instagram");
                  setShowInstagram(e.target.checked);
                }}
                checked={showInstagram}
              />
              <FormInput
                type={"text"}
                placeholder={"Your social media link"}
                labelPosition="top"
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                  handleOnChange(e.target.value, "instagram");
                }}
              />
            </div>
            <div className={styles.socialLinks}>
              <p className={styles.follow}>Follow Text</p>
              <FormInput
                type={"text"}
                placeholder={"Follow Us"}
                labelPosition="top"
                value={followText}
                onChange={(e) => {
                  setFollowText(e.target.value);
                  handleOnChange(e.target.value, "followUs");
                }}
              />
            </div>
            {/* ==== social links end ==== */}
          </div>
          {/* === start Multiple Currency === */}
          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Multiple Currency</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "Multiple_Currency");
                  setShowMultipleCurr(e.target.checked);
                }}
                checked={showMultipleCurr}
              />
            </div>
          </div>
          {/* === End Multiple Currency === */}

          {/* === start Multiple Language === */}

          <div className={styles.phoneNo}>
            <div className={styles.phoneNoUprCont}>
              <p>Multiple Languages</p>
              <SwitchButton
                layout={true}
                onChange={(e) => {
                  handleSwitch(e, "Multiple_Language");
                  setShowMultipleLang(e.target.checked);
                }}
                checked={showMultipleLang}
              />
            </div>
          </div>
          {/* === End Multiple Language === */}
          {/* === phone No section end === */}
        </div>
        {/* ==== phone Email Social Section end ===  */}
        {/* === Apperance  section start === */}
        <div className={styles.HideTop}>
          <p>Appearance</p>
        </div>
        {/* === Apperance section end === */}
        <div className={styles.colorSection}>
          <div className={styles.backgroundColor}>
            <p>Background</p>
            {/* <button><span>Hex</span> #000000 <span></span></button> */}
            <ColorPalette
              colorCode={appearance?.background}
              paletteHandle={() => ColorPickerhandle("background")}
            />
          </div>
          <div className={styles.backgroundColor}>
            <p>Icons</p>
            <ColorPalette
              colorCode={appearance?.icons}
              paletteHandle={() => ColorPickerhandle("icons")}
            />
          </div>
          <div className={styles.backgroundColor}>
            <p>Social Icons</p>
            <ColorPalette
              colorCode={appearance?.social_icons}
              paletteHandle={() => ColorPickerhandle("social_icons")}
            />
          </div>
          <div className={styles.backgroundColor}>
            <p>Text</p>
            <ColorPalette
              colorCode={appearance?.text}
              paletteHandle={() => ColorPickerhandle("text")}
            />
          </div>
        </div>
      </div>

      <>
        {colorPicker && (
          <div className={styles.colorPickerPopupWrap}>
            <InputColorPickerPortal
              onclose={() => setColorPicker(false)}
              title={`Pick Color`}
              handleChange={(color) => handleColors(color, colorPicker)}
              Color={appearance?.[colorPicker]}
              value={globalVariable(appearance?.[colorPicker])}
            />
          </div>
        )}
      </>
    </React.Fragment>
  );
};

export default TopHeaderLayout1;
