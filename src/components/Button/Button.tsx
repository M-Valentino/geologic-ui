import React, { useState } from "react";

export interface ButtonProps {
  label: string;
  size?: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  const baseColor = props.color || "#ccc";

  const [isMouseDown, setIsMouseDown] = useState(false);

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

  const calculateBorderColor = (borders: string): string => {
    const colorSubS = baseColor.substring(1);
    const r = parseInt(colorSubS[0], 16);
    const g = parseInt(colorSubS[1], 16);
    const b = parseInt(colorSubS[2], 16);

    const calcColorChannel = (val: number) => {
      const result = borders === "light" ? val + 3 : val - 4;
      return Math.min(15, result).toString(16);
    };

    const newR = calcColorChannel(r);
    const newG = calcColorChannel(g);
    const newB = calcColorChannel(b);
    return `#${newR}${newG}${newB}`;
  };

  const calcMouseDownBGColor = (): string => {
    const colorSubS = baseColor.substring(1);
    const r = parseInt(colorSubS[0], 16);
    const g = parseInt(colorSubS[1], 16);
    const b = parseInt(colorSubS[2], 16);

    const calcColorChannel = (val: number) => {
      return Math.min(15, val - 1).toString(16);
    };

    const newR = calcColorChannel(r);
    const newG = calcColorChannel(g);
    const newB = calcColorChannel(b);
    return `#${newR}${newG}${newB}`;
  };

  return (
    <button
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      style={{
        // all and outline are for maintaining compatbility accross browsers.
        all: "unset",
        outline: "revert",
        cursor: "pointer",
        userSelect: "none",
        borderTop: `${getBorderSize()}px solid ${calculateBorderColor(
          isMouseDown ? "dark" : "light"
        )}`,
        borderRight: `${getBorderSize()}px solid ${calculateBorderColor(
          isMouseDown ? "light" : "dark"
        )}`,
        borderBottom: `${getBorderSize()}px solid ${calculateBorderColor(
          isMouseDown ? "light" : "dark"
        )}`,
        borderLeft: `${getBorderSize()}px solid ${calculateBorderColor(
          isMouseDown ? "dark" : "light"
        )}`,
        backgroundColor: isMouseDown ? calcMouseDownBGColor() : baseColor,
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
