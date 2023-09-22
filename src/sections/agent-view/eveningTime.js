import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import TextFields from "src/utils/TextFields";
import DrugBtnLight from "src/utils/DrugBtnLight";
const EveningTime = () => {
  const drugButtons = [<TextFields />, <DrugBtnLight />];

  const [buttons, setButtons] = useState(drugButtons);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const index = e.dataTransfer.getData("index");
    const updatedButtons = [...buttons];
    const [movedButton] = updatedButtons.splice(index, 1);
    updatedButtons.splice(newIndex, 0, movedButton);
    setButtons(updatedButtons);
  };

  return (
    <div className="d-flex align-start gap-4 relative mb-5">
      <div className="time">
        <p className="text-uppercase my-0 before-line">evening</p>
      </div>
      <div className="w-100">
        {buttons.map((drugBtn, index) => (
          <div
            className="mb-2"
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {drugBtn}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EveningTime;
