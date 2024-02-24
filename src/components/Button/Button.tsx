import React from "react";

export interface ButtonProps {
  label: string;
  size?: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  const baseColor = props.color || "#ccc";
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

  const calculateBorderColor = (colorParam: string, borders: string): string => {
    const colorSubS = colorParam.substring(1);
    // Convert the color to RGB
    const r = parseInt(colorSubS[0], 16);
    const g = parseInt(colorSubS[1], 16);
    const b = parseInt(colorSubS[2], 16);

    const calcColorChannel = (val: number) => {
      const result = borders === "tl" ? val + 3 : val - 4;
      return Math.min(15, result).toString(16);
    };

    // Add 2 to each color channel
    const newR = calcColorChannel(r);
    const newG = calcColorChannel(g);
    const newB = calcColorChannel(b);
    return `#${newR}${newG}${newB}`;
  };

  return (
    <button
      style={{
        // all and outline are for maintaining compatbility accross browsers.
        all: "unset",
        outline: "revert",
        borderTop: `${getBorderSize()}px solid ${calculateBorderColor(
          baseColor,
          "tl"
        )}`,
        borderRight: `${getBorderSize()}px solid ${calculateBorderColor(
          baseColor,
          "br"
        )}`,
        borderBottom: `${getBorderSize()}px solid ${calculateBorderColor(
          baseColor,
          "br"
        )}`,
        borderLeft: `${getBorderSize()}px solid ${calculateBorderColor(
          baseColor,
          "tl"
        )}`,
        backgroundColor: baseColor,
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
