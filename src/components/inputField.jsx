import React from "react";

const InputField = ({ id, type, placeholder, value, onChange, required = true }) => {
  return (
    <input
      id={id}
      type={type}
      className="form-control input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputField;
