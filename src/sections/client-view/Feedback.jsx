import React, { useEffect, useRef, useState } from "react";
import { chevronBottom2 } from "./base/SVG";

export default function Feedback({ feedback }) {
  return (
    <div className="daysItem__feedback">
      <p>Any feedback?</p>
      <div className="daysItem__feedback-items">
        {feedback.map((feedbackItem, feedbackIndex) => {
          return feedbackItem?.options ? (
            <FeedbackItem key={feedbackIndex} feedbackItem={feedbackItem} />
          ) : (
            <div className="daysItem__feedback-item" key={feedbackIndex}>
              {feedbackItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
const FeedbackItem = ({ feedbackItem }) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    console.log("asdasd");
    setActive(!active);
  };

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  return (
    <div
      className={"daysItem__feedback-dropdown " + (active ? "active" : "")}
      ref={wrapper}
    >
      <div className="daysItem__feedback-dropdown-title" onClick={toggleActive}>
        {feedbackItem.name} {chevronBottom2}
      </div>
      <div className="daysItem__feedback-dropdown-options">
        {feedbackItem?.options.map((option, optionIndex) => {
          return (
            <div
              className="daysItem__feedback-dropdown-option"
              key={optionIndex}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};
