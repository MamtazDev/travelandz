import React from "react";
import "src/assets/css/main.css";
import Info from "../Info";
import Review from "../Review";
import DaysCollapse from "../DaysCollapse";

export default function ClientBookView() {
  return (
    <>
      <div className="wrapper pb">
        <Info />
        <Review />
        <DaysCollapse />
      </div>
    </>
  );
}
