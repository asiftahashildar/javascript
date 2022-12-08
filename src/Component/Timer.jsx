import React, { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";

export const Timer = () => {
  const [initialTime, setInitialTime] = useState(0);
  const [clickHandle, setClickHandle] = useState(false);

  useEffect(() => {
    if (clickHandle !== true)
      setTimeout(() => {
        setInitialTime(initialTime + 1);
      }, 1000);
    else setInitialTime(initialTime);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "655px",
        backgroundColor: clickHandle ? "#3258a0" : "black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          height: "325px",
          marginBottom: "5px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setClickHandle(false)}
        >
          Start
        </Button>
        <Button
          variant="standard"
          style={{ color: clickHandle ? "black" : "white" }}
        >
          {initialTime}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setClickHandle(true)}
        >
          Stop
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          height: "325px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => setInitialTime(0)}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
