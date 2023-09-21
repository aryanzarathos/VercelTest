import React, { forwardRef } from "react";
import IconSearch from "./icon-search.svg";
import styles from "./SearchControl.module.scss";

// eslint-disable-next-line react/display-name
const SearchControl = forwardRef(({ name, value, id, type, label, classNameWrappper, className, reset, border, ...props }, ref) => {

    return (

        <form className={`${styles.SearchControlbar} ${classNameWrappper}`} onSubmit={(e) => e.preventDefault()}>
            <input type="search" required className={`${border ? styles.formControlSearchborder : styles.formControlSearch} ${className}`} id={id} ref={ref} name={name} value={value} {...props} />
            <button className={styles.searchCloseIcon} type="reset" onClick={reset}></button>
            <i className={styles.searchIcon}></i>
        </form>
    )
})
export default SearchControl;
