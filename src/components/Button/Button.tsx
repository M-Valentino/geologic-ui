import React from "react";

export interface ButtonProps {
  label: string;
  size?: string;
}

const Button = (props: ButtonProps) => {
  const getTextSize = () => {
    switch (props.size || "") {
      case "small":
        return 16;
      case "medium":
        return 20;
      case "large":
        return 24;
      // If there is no size passed in props
      default:
        return 16;
    }
  };

  const getBorderSize = () => {
    switch (props.size || "") {
      case "small":
        return 2;
      case "medium":
        return 3;
      case "large":
        return 4;
      default:
        return 2;
    }
  };

  return (
    <button
      style={{
        // all and outline are for maintaining compatbility accross browsers.
        all: "unset",
        outline: "revert",
        borderTop: `${getBorderSize()}px solid #eee`,
        borderRight: `${getBorderSize()}px solid #777`,
        borderBottom: `${getBorderSize()}px solid #777`,
        borderLeft: `${getBorderSize()}px solid #eee`,
        backgroundColor: "#ccc",
        fontSize: getTextSize(),
        paddingLeft: getTextSize() / 2,
        paddingRight: getTextSize() / 2,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
