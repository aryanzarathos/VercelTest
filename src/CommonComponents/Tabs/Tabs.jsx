import React, { forwardRef, useEffect, useState } from "react";
import styles from "./tabs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { activateProfile } from "@/store/actions/myprofile";
// import Tabs from "../ImageUploader/Tabs/Tabs";

const Tabs=forwardRef(({ tabs, TabWrapperClass, TabButtonClass, ActiveTabClass, activeTitle, activeDefaultIndex, defaultValue,clearState },ref)=> {

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("");
  const [activeIndex, setActiveIndex] = useState(activeDefaultIndex ? activeDefaultIndex : -1)
 
  useEffect(() => {
    if(clearState){
      setActiveTab(defaultValue)
    }
  }, [clearState, defaultValue])

  const handleActive = (title, index) => {
    // setActiveTab(activeTitle)
    setActiveTab(title, index)
    activeTitle(title, index)
    setActiveIndex(index)
    dispatch(activateProfile(title))
  }
  return (
    <React.Fragment>
      <div className={TabWrapperClass ? TabWrapperClass : styles.TabContainer}>
        {tabs.map((title, index) => (
          <button className={`${TabButtonClass ? TabButtonClass : "button btn-s"} ${(activeTab === title || activeIndex === index) && (ActiveTabClass ? ActiveTabClass : 'button-primary')}`} key={index} onClick={() => handleActive(title, index)}>
            {title}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
})
Tabs.displayName="Tabs"
export default Tabs