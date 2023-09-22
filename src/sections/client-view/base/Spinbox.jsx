import React from "react";
import { minusSvg, plusSvg } from "./SVG";

export default function Spinbox({ form, updateForm, keyVal }) {
  return (
    <div className="spinbox">
      <button
        type="button"
        className="spinbox__btn"
        onClick={() => updateForm({ [keyVal]: form?.[keyVal] + 1 })}
      >
        {plusSvg}
      </button>
      <p className="big">{form?.[keyVal]}</p>
      <button
        type="button"
        className="spinbox__btn"
        onClick={() => {
          if (form?.[keyVal] - 1 !== 0) {
            updateForm({ [keyVal]: form?.[keyVal] - 1 });
          }
        }}
      >
        {minusSvg}
      </button>
    </div>
  );
}
