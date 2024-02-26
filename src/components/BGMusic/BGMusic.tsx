import React from "react";

export interface BGMusicProps {
  videoID?: string;
}

const BGMusic = (props: BGMusicProps) => {
  
  return (
    <iframe width="1" height="1" src={`https://www.youtube.com/embed/${props.videoID}?autoplay=1`}
    style={{display: "none"}}></iframe>
  );
};

export default BGMusic;
