import React from "react";
import { useSelector } from "react-redux";


function FormTextArea({ name, rows, maxlength, id, label, value, onChange, labelPosition, LabelClassName, TextareaBtmTxt, className, ...props }) {
    // const { user } = useSelector((state) => {
    //     return {
    //         user: state.user,
    //     };
    // });
    return (
        <React.Fragment>
            <div className="form-group">
                {labelPosition === "top" ?
                    (
                        <label className={`animLabelTop ${LabelClassName}`} htmlFor={id}>{label}</label>
                    ) : ""}
                <textarea rows={rows} maxLength={maxlength} value={value} onChange={(e) => onChange(e)}
                    className={`form-control-textarea form-control ${className}`} id={id} name={name} {...props}></textarea>
                {labelPosition !== "top" ? <label className={`animLabel ${LabelClassName}`} htmlFor={id}>{label}</label> : ""}
                {TextareaBtmTxt && <small className="w-400 gray">Max. allowed <span className="gray">{TextareaBtmTxt}</span> characters.</small>}
            </div>
        </React.Fragment>
    )
}
export default FormTextArea;