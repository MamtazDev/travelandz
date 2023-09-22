import React from "react";
import DatePicker from "react-datepicker";

export default function DateInput({
  startDate,
  endDate,
  form,
  updateForm,
  placeholder,
}) {
  const onChange = (dates) => {
    const [start, end] = dates;
    updateForm({ [startDate]: start });
    updateForm({ [endDate]: end });
  };

  return (
    <div className="dateInput">
      <DatePicker
        onChange={onChange}
        startDate={form?.[startDate]}
        endDate={form?.[endDate]}
        placeholderText={placeholder}
        selectsRange
        dateFormat="MMM dd, yy"
      />
    </div>
  );
}
