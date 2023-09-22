import React from "react";
import { infoSvg } from "./base/SVG";

export default function Info() {
  return (
    <div className="info">
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__left">
            <div className="info__left-box">
              <p className="sm">
                92% of people with like you enjoyed activities you selected!
              </p>
            </div>
            <h2 className="sm">
              You have created an amazing and unique trip. Congrats!
            </h2>
          </div>
          <div className="info__right">
            <div className="info__right-number">
              <div className="number">2132 €</div>
              <p>1062€/ person</p>
            </div>
            <div className="button blue">Book trip</div>
            <div className="info__right-cancel">
              {infoSvg}
              <p className="sm">Cancel for free until August 26,2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
