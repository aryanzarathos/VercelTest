import React, { useState, useRef } from 'react'
import Tabs from '../../../../../CommonComponents/Tabs/Tabs';
import styles from "./managefooter.module.scss";
// import Tabs from '../../../../../../Common/Tabs/Tabs'
import FooterElement from './FooterElement';
import EditFooter from './EditFooter';
const Managefooter = () => {
    const [active, setActive] = useState("Manage");

    return (
        <React.Fragment>
            <div className={styles.Managefooter}>
                <div className={styles.MenuContentHead}>
                    <h4>Manage Footer</h4>
                </div>
                <div className={styles.MenuContentBody}>
                    <div className={styles.MenuList}>
                    
                        <Tabs
                            valueState={true}
                            activeTitle={(val) => setActive(val)}
                            TabWrapperClass={`${styles.TabsWrapper}`}
                            TabButtonClass={`button btn-2xs ${styles.myBtn}`}
                            ActiveTabClass="button-primary"
                            tabs={["Manage", "Edit"]}
                        />
                    
                        {
                            active === "Manage" ? <FooterElement /> :
                                active === "Edit" ? <EditFooter /> : ''
                        }
                    </div>
                    <div className="">
                        <div className={`${styles.SaveButtonWrapper}`}>
                            <button className={`${styles.button} btn-2xs btn-o-gray text-xs w-500 base w-50 border-right`}>Save</button>
                            <button className={`${styles.button} btn-2xs button-primary text-xs w-500 base w-50 `}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Managefooter