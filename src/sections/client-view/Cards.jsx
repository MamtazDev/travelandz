import React from "react";
import Slider from "react-slick";
import { DaysModul } from "./DaysModul";

export default function Cards() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="cards">
      <div className="auto__container">
        <div className="cards__inner">
          <div className="cards__line"></div>
          <div className="cards__items">
            <Slider {...settings}>
              {DaysModul.map((item, index) => {
                return <CardsItem {...item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
const CardsItem = (props) => {
  return (
    <div className="cardsItem">
      <div className="cardsItem__day">
        <div className="caption sm">{props.day}</div>
      </div>
      <div className="cardsItem__image">
        <img src={props.image} alt="" />
        <div className="cardsItem__place">
          <div className="caption sm">{props.place}</div>
        </div>
        <div className="cardsItem__subtitle">
          <p className="sm">{props.title}</p>
        </div>
      </div>
    </div>
  );
};
