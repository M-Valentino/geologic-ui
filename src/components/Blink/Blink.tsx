import React, { FC } from "react";

type Props = { children: any };

const Blink = (props: Props) => {
  const { children } = props;
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
      <span className="blink">{children}</span>
    </>
  );
};

export default Blink;
