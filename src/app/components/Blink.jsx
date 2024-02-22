import React from "react";

export const Blink = ({ children }) => {
  return (
    <>
      <style>
        {`
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
`}
      </style>
      <span class="blink">{children}</span>
    </>
  );
};
