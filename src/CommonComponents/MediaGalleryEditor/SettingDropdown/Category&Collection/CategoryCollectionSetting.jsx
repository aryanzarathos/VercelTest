import React, { useState } from 'react';
import styles from "./CategoryCollectionDropdown.module.scss"
import Tabs from '../../../Tabs/Tabs';
import ImageSetting from './ImageSetting/ImageSetting';
import ViewSetting from './ViewSetting/ViewSetting';

const CategoryCollectionSetting = () => {
    const [activeTab, setActiveTab] = useState("Image Setting");

    return (
        <React.Fragment>
                <Tabs
                    valueState={true}
                    activeTitle={(val) => setActiveTab(val)}
                    TabWrapperClass={styles.SectionSettingDropdown}
                    TabButtonClass={`${styles.EditorBtns}`}
                    ActiveTabClass={styles.ActiveBtn}
                    tabs={["Image Setting", "View Setting"]}
                />
                <div>
                    {activeTab === "Image Setting" ? (
                        <ImageSetting/>
                    ) : activeTab === "View Setting" ? (
                        <ViewSetting/>
                    ) : (
                        ""
                    )}
                </div>
            </React.Fragment>
    )
}

export default CategoryCollectionSetting