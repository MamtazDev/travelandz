import React, { useState } from "react";

import Edit from "src/components/Modal/Edit";
import Delete from "src/components/Modal/Delete";
import DrugBtnDark from "src/utils/DrugBtnDark";
import DrugBtnLight from "src/utils/DrugBtnLight";
import DrugBtnDark2 from "src/utils/DrugBtnDark2";

const TimelineMorning = () => {
  const drugButtons = [<DrugBtnDark />, <DrugBtnDark2 />, <DrugBtnLight />];

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
        <p className="text-uppercase my-0 before-line">MORNING</p>
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

export default TimelineMorning;
