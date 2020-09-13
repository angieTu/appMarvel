import React from "react";

const Heading = ({ as = "h1", ...props }) => {
  const Component = as;

  return <Component {...props}></Component>;
};

export default Heading;
