import React, { useRef, useState } from 'react'
import Image from 'next/image';
// import AppLink from '../../../../Common/AppLink';
// import { useDetectOutsideClick } from "../../../../Common/DetectOutsideClick/useDetectOutsideClick";
import styles from "../header.module.scss";
import DesktopIcon from "../../../Assets/SiteEditor/Icons/desktop-icon.svg";
import MobileIcon from "../../../Assets/SiteEditor/Icons/mobile-icon.svg";
import TabletIcon from "../../../Assets/SiteEditor/Icons/tablet-icon.svg";

const DeviceOrientation = ({deviceOrientation}) => {

const [active, setActive] = useState("DesktopPreview");

const handleDeviceOrientation = (e) =>{
  deviceOrientation(e)
  setActive(e)
}
  return (
    <React.Fragment>
      <div className={styles.DeviceOrientationGroupButton}>
        <button type="button" className={`${styles.DesktopView} ${active === "DesktopPreview" && styles.Active}`} onClick={() => handleDeviceOrientation("DesktopPreview")}>
          <DesktopIcon src={DesktopIcon} alt="Desktop" />
        </button>
        <button type="button" className={`${styles.MobileView} ${active === "MobilePreview" && styles.Active}`} onClick={() => handleDeviceOrientation("MobilePreview")}>
          <MobileIcon src={MobileIcon} alt="Desktop" />
        </button>
        <button type="button" className={`${styles.Tabletview} ${active === "TabletPreview" && styles.Active}`} onClick={() => handleDeviceOrientation("TabletPreview")}>
          <TabletIcon src={TabletIcon} alt="Desktop" />
        </button>
      </div>
    </React.Fragment>
  )
}

export default DeviceOrientation