import React from "react";
import LoadingGif from "./Loading.gif";

const Loading = () => {
  return (
    <span>
      <img
        src={LoadingGif}
        alt="Loading..."
        style={{
          width: "20px", 
          height: "20px",
          marginLeft: "8px", 
        }}
      />
    </span>
  );
};

export default Loading;
