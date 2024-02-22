import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button style={{ border: "2px outset #eee #777 #777 #eee", backgroundColor: "#ccc" }}>
      {props.label}
    </button>
  );
};

export default Button;
