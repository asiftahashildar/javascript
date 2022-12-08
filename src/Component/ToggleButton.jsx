import React, { useState } from "react";
import "./togglebutton.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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
        <>
          <h1 className={clickChange ? "text-change" : "text"}>Bulb Off</h1>
          <SentimentVeryDissatisfiedIcon
            style={{
              width: "100px",
              height: "100px",
              color: "rgb(148, 148, 10)",
            }}
          />
        </>
      ) : (
        <>
          <h1>Bulb On</h1>
          <TagFacesIcon
            style={{
              width: "100px",
              height: "100px",
              color: "rgb(150, 150, 20)",
            }}
          />
        </>
      )}
      <div className={clickChange ? "name-text-change" : "name-text"}>
        <h1>A</h1>
        <h1>K</h1>
        <h1>T</h1>
      </div>
    </div>
  );
};
