import React from 'react'
// import RenderTabs from '../../../../Common/Tabs/RenderTabs'
import styles from './themeSetting.module.scss'
import ColorSetting from "./colorSetting.jsx"
import FontSetting from './fontSetting'
import RenderTabs from '../../../../../CommonComponents/Tabs/RenderTabs'
const ThemeSetting = () => {
  return (
    <RenderTabs
      TabWrapperClass={styles.ThemeSettingWrapper}
      TabButtonClass={`button btn-2xs btn-oval ${styles.ThemeSettingButton}`}
      ActiveTabClass="button-primary"
      tabs={[
        { title: "Themes", render: () => <ColorSetting /> },
        { title: "Fonts", render: () => <FontSetting /> },
      ]}
    />
  )
}

export default ThemeSetting