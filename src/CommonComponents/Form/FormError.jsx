import React from "react"
import ErrorIcon from "../../Assets/SiteEditor/Icons/error-icon.svg"

const FormError = ({ className, error, success, show = false }) => {
    return show === true && <div className={`errorInputMsg ${className}`}>
        {
            success ? "" : <React.Fragment> <ErrorIcon className="erroricon" />
                &nbsp;</React.Fragment>
        }
        {error}</div>
}

export default FormError