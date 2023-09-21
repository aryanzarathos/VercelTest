import React from 'react';
import styles from './tabs.module.scss';

const Tabs = ({ toggleState, handleToggleState }) => {
  return (
    <React.Fragment>
      <div className={styles.tabHead}>
        <div className={`tab ${toggleState === 1 ? `${styles.activeTab}` : ''}`} onClick={() => { handleToggleState(1) }}>Upload Media</div>
        <div className={`tab ${toggleState === 2 ? `${styles.activeTab}` : ''}`} onClick={() => { handleToggleState(2) }}>Unsplash</div>
        {/* <div className={`tab ${toggleState === 3 ? `${styles.activeTab}` : ''}`} onClick={() => { handleToggleState(3) }}>Pixabay</div> */}
        <div className={`tab ${toggleState === 4 ? `${styles.activeTab}` : ''}`} onClick={() => { handleToggleState(4) }}>My Files</div>

      </div>
    </React.Fragment>
  )
}

export default Tabs