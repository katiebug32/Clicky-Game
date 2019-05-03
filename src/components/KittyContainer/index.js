import React from "react";
import "./style.css";

function KittyContainer(props) {
  return <div className="kittyContainer">{props.children}</div>;
}

export default KittyContainer;