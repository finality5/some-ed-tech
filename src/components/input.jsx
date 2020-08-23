import React from "react";
const Input = ({
  htmlFor,
  autoFocus,
  placeholder,
  id,
  onChange,
  HeaderName,
  type,
}) => {
  return (
    <React.Fragment>
      <label htmlFor={htmlFor}>{HeaderName}</label>
      <input
        autoComplete="off"
        type={type}
        autoFocus={autoFocus}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default Input;
