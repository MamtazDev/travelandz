import React from "react";
import Intro from "./../Intro";
import Hero from "../Hero";
import Cards from "../Cards";
import Days from "../Days";
import "src/assets/css/main.css";
import Footer from "../base/Footer";
export default function ClientView() {
  return (
    <>
      <div className="wrapper">
        <Intro />
        <Hero />
        <Cards />
        <Days />
      </div>
      <Footer />
    </>
  );
}
