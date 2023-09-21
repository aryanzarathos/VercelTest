import React, { forwardRef } from "react";
import PropTypes from 'prop-types';

const CheckboxInput = forwardRef(({ name, id, label, onChange, disabled, className, LabelClass, ...props }, ref) => {
  return (
    <label htmlFor={id} className={LabelClass}>
      <input
        type="checkbox"
        className={className}
        id={id}
        ref={ref}
        name={name}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
);

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};

CheckboxInput.displayName = "CheckboxInput"

export default CheckboxInput;
