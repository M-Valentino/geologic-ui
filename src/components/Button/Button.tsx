import React, { useState } from "react";

export interface ButtonProps {
  label: string;
  size?: string;
  color?: string;
  labelColor?: string;
}

const Button = (props: ButtonProps) => {
  const baseColor = props.color || "#ccc";

  const [isMouseDown, setIsMouseDown] = useState(false);

  const getTextSize = () => {
    switch (props.size || "") {
      case "sm":
        return 12;
      case "md":
        return 16;
      case "lg":
        return 20;
      case "xl":
        return 24;
      // If there is no size passed in props
      default:
        return 12;
    }
  };

  const getBorderSize = () => {
    switch (props.size || "") {
      case "sm":
        return 2;
      case "md":
        return 3;
      case "lg":
        return 4;
      case "xl":
        return 5;
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
        cursor: "pointer",
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
        color: props.labelColor || "#000",
        paddingLeft: getTextSize(),
        paddingRight: getTextSize(),
        paddingTop: getTextSize() / 3,
        paddingBottom: getTextSize() / 3,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
