import React, { useState } from "react";
import { chevronBottom2, startIcon } from "./base/SVG";
import { CollapseModul } from "./CollapseModul";

export default function DaysCollapse() {
  const [active, setActive] = useState(null);
  return (
    <div className="collapse">
      <div className="auto__container">
        <div className="collapse__inner">
          {CollapseModul.map((item, index) => {
            return (
              <CollapseItem
                key={index}
                itemData={item}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CollapseItem = ({ itemData, active, setActive }) => {
  return (
    <div
      className={"collapseItem " + (active?.id === itemData.id ? "active" : "")}
      onClick={() => {
        if (active?.id === itemData.id) {
          setActive(null);
        } else {
          setActive(itemData);
        }
      }}
    >
      <div className="collapseItem__btn">
        <div className="caption">{itemData.day}</div>
        <div className="caption">{itemData.place}</div>
        {chevronBottom2}
      </div>
      <div className="collapseItem__body">
        <div className="collapseItem__body-items">
          {itemData.components.map((item, index) => {
            return (
              <div className="collapseItem__body-item" key={index}>
                <div className="collapseItem__body-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="collapseItem__body-item-content">
                  <h5>{item.title}</h5>
                  <div className="collapseItem__body-item-rating">
                    {startIcon} <div className="caption">{item.rating}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
