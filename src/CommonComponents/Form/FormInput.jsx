import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/display-name
const FormInput = forwardRef(
  ({ name, id, type, label, className, classNameContainer, LabelClassName, labelStyle, defaultValue, placeholder, value, labelPosition, ...props }, ref) => {
    // const { user } = useSelector((state) => {
    //   return {
    //     user: state.user,
    //   };
    // });
    return (
      <React.Fragment>
        <div className={`form-group ${classNameContainer}`}>
          {labelPosition === "top" ? (
            <label className={`animLabelTop ${LabelClassName}`} htmlFor={id} itemLabel={labelStyle}>
              {label}
            </label>
          ) : ""}
          {
            defaultValue ?
              <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                ref={ref}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...props}
              /> :
              <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                ref={ref}
                name={name}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...props}
              />}
          {labelPosition !== "top" ? (
            <label className={`animLabel ${LabelClassName}`} htmlFor={id}>
              {label}
            </label>
          ) : ""}

        </div>
      </React.Fragment>
    );
  }
);
export default FormInput;
