import React, { useRef } from "react";
import styles from "./WebsiteCreation.module.scss";
import WebSiteType from "./WebsiteType/WebsiteType";
import EcomIcon from "../../../../../Assets/SiteEditor/Icons/ecommerceIcon.svg";
import BookingIcon from "../../../../../Assets/SiteEditor/Icons/bookingIcon.svg";
import LandingPageIcon from "../../../../../Assets/SiteEditor/Icons/landingPage.svg";
import Drawer from "../../../../../CommonComponents/Drawer";
import { isBrowser } from "../../../../../CommonFunctions/isBrowser";

// import WebSiteType from "./WebsiteType/WebsiteType";
const WebsiteCreation = () => {
  const drawerRef = useRef(null);
  const HandleClick = () => {
    drawerRef.current.open();
  };
  const WebsiteTypeData = [
    {
      id: 1,
      image: <EcomIcon />,
      heading: "E-commerce",
      paragraph: "Online store",
    },
    {
      id: 2,
      image: <BookingIcon />,
      heading: "Bookings",
      paragraph: "Restaurants, Hospitals, Salons etc",
    },
    {
      id: 3,
      image: <LandingPageIcon />,
      heading: "Landing Pages",
      paragraph: "Curated Webpages",
    },
  ];
  return (
    <>
      <div className={styles.mainWebsiteCreation}>
        <h1 className={styles.mainWebsiteCreation__Heading}>
          What kind of website are you creating?
        </h1>
        <div className={styles.mainWebsiteCreation__types}>
          <div className={styles.mainWebsiteCreation__types__data}>
            {WebsiteTypeData?.map((item, index) => {
              return (
                <>
                  <WebSiteType value={item} key={index} />
                </>
              );
            })}
          </div>
          <button
            className={`${styles.mainWebsiteCreation__types__continueBtn} button button-primary`}
            onClick={HandleClick}
          >
            Continue
          </button>
        </div>
      </div>
      {isBrowser() && (
        <Drawer ref={drawerRef} className={styles.mainDrawer}></Drawer>
      )}
    </>
  );
};
export default WebsiteCreation;
