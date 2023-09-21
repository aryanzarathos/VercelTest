import React, { useState } from "react";
import styles from "./tabs.module.scss";

export default function RenderTabs({ tabs, TabWrapperClass, TabButtonClass, ActiveTabClass }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <React.Fragment>
      <div className={TabWrapperClass ? TabWrapperClass : styles.TabContainer}>
        {tabs.length && tabs.map((tab, index) => (
          <button className={`${TabButtonClass ? TabButtonClass : "button btn-s"} ${activeTab === index && (ActiveTabClass ? ActiveTabClass : 'button-primary')}`} key={index} onClick={() => setActiveTab(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      {tabs[activeTab].render()}
    </React.Fragment>
  );
}