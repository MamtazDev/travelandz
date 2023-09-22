import React from "react";
import { resetIcon } from "./base/SVG";
import introBg from "src/assets/client-view/introBg.jpg";
export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__bg">
        <img src={introBg} alt="" />
      </div>
      <div className="auto__container">
        <div className="intro__inner">
          <button type="button" className="intro__reset">
            {resetIcon}
            Reset
          </button>
          <h1>
            Taylor made <br /> inspiring Spain
          </h1>
          <div className="intro__row">
            <p>
              Explore the highlights of Spain, visiting Barcelona, Madrid,
              Toledo and Seville. Savor the gastronomy of Spain with a
              showcooking evening in Barcelona. Enjoy day trips to captivating
              sites like Toledo, including a winery tour. See the dazzling works
              of master architect Antoni Gaudí in Barcelona. Enjoy superb
              flamenco performance at an authentic place in Seville
            </p>
            <div className="intro__row-number">
              <div className="number">2132 €</div>
              <p>1062€/ person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
