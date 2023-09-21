import React from "react";
import styles from './Background.module.scss';
import ColorPalette from "../../../../../../../CommonComponents/ColorPalette";
const BackgroundColor = ({ appearance, ColorPickerhandle }) => {
    return (
        <div className={styles.backgroundSectionColor}>
            <p>Color</p>
            <ColorPalette colorCode={appearance?.color || "#FFFFFF"}
                paletteHandle={() => ColorPickerhandle("color")}
            />
        </div>
    )
}

export default BackgroundColor