"use client";
import React, {useRef, useState} from "react";
import { toPng } from 'html-to-image';

export const Eighty8x31 = ({ children, leftImageSrc }) => {
  const [url, setUrl] = useState("");
  const elementRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false, pixelRatio: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        setUrl(dataUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <img src={url}/>
    <div
    ref={elementRef}
      style={{
        display: "inline-flex",
        borderStyle: "outset",
        border: "2px outset",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#000",
        borderBottomColor: "#000",
        width: 88,
        height: 31,
        backgroundColor: "#ccc",
        userSelect: "none",
        imageRendering: "pixelated",
      }}
      onClick={htmlToImageConvert}
    >
      {leftImageSrc && (
        <img
          src={leftImageSrc}
          style={{ display: "inline-flex", height: 31 }}
        />
      )}
      <div
        style={{
          height: "100%",
          width: leftImageSrc ? "calc(88px - 33px)" : "100%",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          fontFamily: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
        }}
      >
        {children}
      </div>
    </div>
    </>
  
  );
};
