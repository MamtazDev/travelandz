import React from "react";
import Slider from "react-slick";
import image1 from "src/assets/client-book-view/1.jpg";
import image2 from "src/assets/client-book-view/2.jpg";
import image3 from "src/assets/client-book-view/3.jpg";
import avatar from "src/assets/client-book-view/avatar.jpg";
import avatar2 from "src/assets/client-book-view/avatar2.png";

const ReviewModul = [
  {
    id: "1",
    avatar: avatar,
    name: "Ariadna",
    age: "27",
    review:
      "“Travelanz was great to create my trip and have all my tickets in one place”",
  },
  {
    id: "2",
    avatar: avatar2,
    name: "Jocelyn",
    age: "22",
    review:
      "“Travelanz was great to create my trip and have all my tickets in one place”",
  },
  {
    id: "3",
    avatar: avatar,
    name: "Anna",
    age: "35",
    review:
      "“Travelanz was great to create my trip and have all my tickets in one place”",
  },
];

export default function Review() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="review">
      <div className="review__inner">
        <div className="review__left">
          <div className="review__left-image">
            <img src={image1} alt="" />
          </div>
          <div className="review__slider">
            <Slider {...settings}>
              {ReviewModul.map((item, index) => {
                return <ReviewItem key={index} {...item} />;
              })}
            </Slider>
          </div>
        </div>
        <div className="review__right">
          <div className="review__right-imagetop">
            <img src={image2} alt="" />
          </div>
          <div className="review__right-imagebot">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ReviewItem = (props) => {
  return (
    <div className="review__item">
      <div className="review__item-avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="review__item-content">
        <p className="big">{props.review}</p>
        <div className="caption">
          {props.name}, {props.age}
        </div>
      </div>
    </div>
  );
};
