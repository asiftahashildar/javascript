import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [dataReceived, setDataReceived] = useState([]);
  const handleSave = () => {
    setDataReceived([...dataReceived, inputData]);
  };
  const handleDelete = (item) => {
    const deletedData = dataReceived.filter((elem) => elem !== item);
    setDataReceived([...deletedData]);
  };
  return (
    <div>
      <TextField
        variant="outlined"
        onChange={(e) => setInputData(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleSave()}>
        Add
      </Button>
      {dataReceived.map((item) => (
        <ul>
          <li onClick={() => handleDelete(item)}>{item}</li>
        </ul>
      ))}
    </div>
  );
};
