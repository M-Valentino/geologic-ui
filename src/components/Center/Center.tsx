import React, { FC } from 'react'

type Props = {children: any}

 const Center = (props: Props) => {
  const {children} = props;
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
}

export default Center;