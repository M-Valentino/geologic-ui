import React, { useState } from "react";
import { calculateBorderColor } from "../helpers";

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

  const calcMouseDownBGColor = (): string => {
    const colorSubS = baseColor.substring(1);
    const r = parseInt(colorSubS[0], 16);
    const g = parseInt(colorSubS[1], 16);
    const b = parseInt(colorSubS[2], 16);

    const calcColorChannel = (val: number) => {
      const result = Math.min(15, val - 1);
      if (result < 0) {
        return "0";
      }
      return result.toString(16);
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
        borderTop: `2px solid ${calculateBorderColor(baseColor,
          isMouseDown ? "dark" : "light"
        )}`,
        borderRight: `2px solid ${calculateBorderColor(baseColor,
          isMouseDown ? "light" : "dark"
        )}`,
        borderBottom: `2px solid ${calculateBorderColor(baseColor,
          isMouseDown ? "light" : "dark"
        )}`,
        borderLeft: `2px solid ${calculateBorderColor(baseColor,
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
