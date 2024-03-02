import React, { FC } from "react";

type Props = { children?: any };

const UnderConstruction = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: 20,
        background:
          "repeating-linear-gradient(135deg, #fe0 0px, #fe0 12px, #000 12px, #000 24px)",
      }}
    ></div>
  );
};

export default UnderConstruction;
