import React from "react";
import {
  bathIcon,
  bedIcon,
  chevronBottom,
  chevronBottom2,
  clockIcon,
  dollarIcon,
  locationIcon,
  securityRank,
  smileIcon,
  startIcon,
  sunIcon,
  tickIcon,
} from "./base/SVG";
import Feedback from "./Feedback";

export default function DaysItem(props) {
  return (
    <div className="daysItem">
      <h2 className="sm">
        {props.day}.{props.place}
      </h2>
      <div className="daysItem__inner">
        <div className="daysItem__detail">
          <div className="daysItem__detail-top">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div className="daysItem__detail-row">
              <div className="daysItem__detail-row-item">
                <div className="caption">Wake up at</div>
                <p>Your house</p>
              </div>
              <div className="daysItem__detail-row-item">
                <div className="caption">Sleep at</div>
                <p>Hotel Palace Barcelona</p>
              </div>
            </div>
            {props?.feedback && props?.feedback.length > 0 && (
              <Feedback feedback={props.feedback} />
            )}
          </div>
          {props.weather && (
            <div className="daysItem__detail-bot">
              <div className="daysItem__weather">
                <div className="daysItem__weather-item">
                  {sunIcon}
                  <div className="number">{props.weather.value}º</div>
                </div>
                <div className="daysItem__weather-item">
                  {securityRank}
                  <div className="caption">
                    Security ranking {props.weather.secRank}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="daysItem__timeline">
          {props?.timeLine?.length > 0 &&
            props?.timeLine.map((item, index) => {
              return <ComponentItem {...item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
const ComponentItem = (props) => {
  return (
    <div className="daysItem__comp">
      <div className="daysItem__comp-daytime">
        <div className="caption">{props.time}</div>
      </div>
      {props?.components &&
        props?.components?.length > 0 &&
        props.components.map((item, index) => {
          return item.type === "food" ? (
            <div className="daysItem__line" key={index}>
              <div className="daysItem__line-image">
                <img src={item?.image} alt="" />
              </div>
              <div className="daysItem__line-content">
                <h5>{item.title}</h5>
                <p className="italic">{item?.description}</p>
              </div>
            </div>
          ) : (
            <div className="daysItem__card" key={index}>
              <div className="daysItem__card-image">
                <img src={item?.image} alt="" />
                {item?.note && (
                  <div className="daysItem__card-type">
                    <div className="caption">{item?.note}</div>
                  </div>
                )}
                {(item?.time || item?.isPaid || item?.rating) && (
                  <div className="daysItem__card-row">
                    {item.time && (
                      <div className="daysItem__card-time">
                        {clockIcon} <div className="caption">{item.time}</div>
                      </div>
                    )}
                    {item.isPaid && (
                      <div className="daysItem__card-paid">{dollarIcon}</div>
                    )}
                    {item.rating && (
                      <div className="daysItem__card-rating">
                        {startIcon} <div className="caption">{item.rating}</div>
                      </div>
                    )}
                  </div>
                )}
                <div className="daysItem__card-content">
                  <h5>{item?.title}</h5>
                  {item?.description && <p>{item.description}</p>}
                  {(item?.location || item?.roomBed || item?.roomBath) && (
                    <div className="daysItem__card-content-row">
                      {item.location && (
                        <div className="daysItem__card-content-row-item">
                          {locationIcon} <p>{item.location}</p>
                        </div>
                      )}
                      {item.roomBed && (
                        <div className="daysItem__card-content-row-item">
                          {bedIcon} <p>{item.roomBed}</p>
                        </div>
                      )}
                      {item.roomBath && (
                        <div className="daysItem__card-content-row-item">
                          {bathIcon} <p>{item.roomBath}</p>
                        </div>
                      )}
                    </div>
                  )}
                  {item?.feedback && item?.feedback.length > 0 && (
                    <Feedback feedback={item.feedback} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      {props?.included && (
        <div className="daysItem__comp-line">
          {tickIcon} <p className="italic">Included in the hotel</p>
        </div>
      )}
      {props?.freeTime && (
        <div className="daysItem__comp-line">
          {smileIcon} <p className="italic">Free time</p>
        </div>
      )}
    </div>
  );
};
