import React, { FC } from "react";

type Props = { size?: any };

const UnderConstruction = (props: Props) => {

  const getHeight = () => {
    switch (props.size || "") {
      case "sm":
        return 10;
      case "md":
        return 20;
      case "lg":
        return 30;
      case "xl":
        return 40;
      default:
        return 10;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: getHeight(),
        background:
          "repeating-linear-gradient(135deg, #fe0 0px, #fe0 24px, #000 24px, #000 48px)",
      }}
    ></div>
  );
};

export default UnderConstruction;
