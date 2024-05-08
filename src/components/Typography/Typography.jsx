import React from "react";

const Typography = ({ size, weight, style, children }) => {
  const textStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: size,
    fontWeight: weight,
    ...style,
  };

  return <span style={textStyle}>{children}</span>;
};

Typography.defaultProps = {
  size: "1em",
  weight: "normal",
  style: {},
};

export default Typography;
