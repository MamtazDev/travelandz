import React from "react";
import { DaysModul } from "./DaysModul";
import DaysItem from "./DaysItem";

export default function Days() {
  return (
    <div className="days">
      <div className="auto__container">
        <div className="days__inner">
          {DaysModul.map((item, index) => {
            if (index < 2) {
              return <DaysItem {...item} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
