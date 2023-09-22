import { useState } from "react";
import CriollaBtn from "src/utils/CriollaBtn";
import PaellaBtn from "src/utils/PaellaBtn";
import DrugBtnLight from "src/utils/DrugBtnLight";

const LaunchTime = () => {
  const drugButtons = [
    <CriollaBtn title="Criolla Resraurant" />,
    <PaellaBtn />,
    <DrugBtnLight />,
  ];

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
    <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-700" />
      <time className="mb-1  text-base uppercase font-normal leading-none text-[#737394]">
        LUNCH
      </time>
      <div className=" pt-5">
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
    </li>
  );
};

export default LaunchTime;
