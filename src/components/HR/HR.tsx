import React from "react";
import { calculateBorderColor } from "../UnderConsstruction/helpers";

export interface HRProps {
  size?: string;
  color?: string;
}

const HR = (props: HRProps) => {
  const baseColor = props.color || "#ccc";

  const getHeight = () => {
    switch (props.size || "") {
      case "sm":
        return "initial";
      case "md":
        return 2;
      case "lg":
        return 4;
      case "xl":
        return 8;
      default:
        return "initial";
    }
  };

  return (
    <hr
      style={{
        borderTop: `2px solid ${calculateBorderColor(baseColor, "dark")}`,
        borderRight: `2px solid ${calculateBorderColor(baseColor, "light")}`,
        borderBottom: `2px solid ${calculateBorderColor(baseColor, "light")}`,
        borderLeft: `2px solid ${calculateBorderColor(baseColor, "dark")}`,
        backgroundColor: baseColor,
        height: getHeight(),
      }}
    />
  );
};

export default HR;
