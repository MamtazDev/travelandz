import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CriollaBtn from "src/utils/CriollaBtn";
import DrugBtnLight from "src/utils/DrugBtnLight";

const DinnerTime = () => {
  const drugButtons = [<CriollaBtn title="Mesón Henri" />, <DrugBtnLight />];

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
        <p
          className="text-uppercase my-0 before-line"
          style={{ marginLeft: "14px" }}
        >
          dinner
        </p>
      </div>
      <div className="w-100 ">
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

export default DinnerTime;
