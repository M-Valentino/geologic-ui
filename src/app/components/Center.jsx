import React from "react";

export const Center = ({ children }) => {
  return (
    <div
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      {children}
    </div>
  );
};
