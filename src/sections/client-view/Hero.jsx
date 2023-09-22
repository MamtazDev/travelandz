import React, { useState } from "react";
import Spinbox from "./base/Spinbox";
import CustomSelect from "./base/CustomSelect";
import DateInput from "./base/DateInput";
import moment from "moment/moment";
import { infoSvg } from "./base/SVG";

const placeList = [
  {
    id: "1",
    value: "Spain",
  },
  {
    id: "2",
    value: "Italy",
  },
  {
    id: "3",
    value: "London",
  },
];
const initForm = {
  days: 1,
  people: 1,
  place: {
    id: "1",
    value: "Spain",
  },
  startDate: new Date(),
  endDate: new Date(),
};
export default function Hero() {
  const [form, setForm] = useState(initForm);
  const [isEdit, setIsEdit] = useState(false);
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onPlaceChange = (item) => {
    updateForm({ place: item });
  };
  const placeIndex = React.useMemo(() => {
    if (initForm.place !== "") {
      return placeList.findIndex((item) => item.id === initForm.place.id);
    }
    return null;
    // eslint-disable-next-line
  }, []);
  console.log(form);
  return (
    <div className="hero">
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inputs">
            <div className="input">
              <div className="caption sm">number of days</div>
              <Spinbox keyVal="days" form={form} updateForm={updateForm} />
            </div>
            <div className="input">
              <div className="caption sm">people</div>
              <Spinbox keyVal="people" form={form} updateForm={updateForm} />
            </div>
            <div className="input">
              <div className="caption sm">Place</div>
              <CustomSelect
                list={placeList}
                selected={placeList[placeIndex]}
                onChange={onPlaceChange}
              />
            </div>
            <div className="input">
              <div className="caption sm">Date</div>
              <div className="hero__date">
                {isEdit ? (
                  <DateInput
                    startDate="startDate"
                    endDate="endDate"
                    updateForm={updateForm}
                    form={form}
                  />
                ) : (
                  <p className="big">Dec 1st - Dec 7, 2023</p>
                )}

                <button className="button" onClick={() => setIsEdit(!isEdit)}>
                  {isEdit ? "Save" : "Edit"}
                </button>
              </div>
            </div>
          </div>
          <div className="hero__footprint">
            <div className="input">
              <div className="caption sm">Footprint</div>
              <div className="hero__footprint-info">
                <p className="big">High </p>
                {infoSvg}
              </div>
            </div>
            <div className="hero__footprint-row">
              <button type="button" className="button">
                I want something lower
              </button>
              <button type="button" className="button">
                Offsetting options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
