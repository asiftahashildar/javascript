import React, { useState } from "react";
import "./togglebutton.css";

export const ToggleButton = () => {
  const [clickChange, setClickChange] = useState(false);
  const handleClick = () => {
    setClickChange(!clickChange);
  };
  return (
    <div className={clickChange ? "container-change" : "container"}>
      <div className="child-container">
        <div
          className={
            clickChange
              ? "grant-child-container-change"
              : "grant-child-container"
          }
          onClick={() => handleClick()}
        ></div>
      </div>
      {clickChange ? (
        <h1 className={clickChange ? "text-change" : "text"}>Bulb Off</h1>
      ) : (
        <h1>Bulb On</h1>
      )}
    </div>
  );
};
