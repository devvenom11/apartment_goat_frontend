import React from "react";

const Divider = ({ height = "1px", color = "#989898", marginY='' }) => {
  return <div style={{ height: height, background: color }} className={`${marginY} w-full`}></div>;
};

export default Divider;
