import React from "react";

export const Marquee = ({ children }) => {
  return (
    <>
      <style>
        {`
.elements {
  -moz-animation: marquee 10s linear infinite;
  -webkit-animation: marquee 10s linear infinite;
  animation: marquee 10s linear infinite;
}
@-moz-keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@-webkit-keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes marquee {
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
`}
      </style>
      <div class="elements">{children}</div>
    </>
  );
};