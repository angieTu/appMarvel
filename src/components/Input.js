import React from "react";

const Input = ({ children, ...props }) => {
  return <input {...props}>{children}</input>;
};

export default Input;
