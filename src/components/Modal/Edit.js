import React from "react";

const Edit = ({ showEdit, setShowEdit }) => {
  return (
    <div>
      <input type="checkbox" checked={showEdit} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white">
          <input
            style={{ border: "1px solid lightgray" }}
            type="text"
            placeholder="Type here"
            className=" rounded-md mb-4 p-3 w-full "
          />
          <select
            style={{ border: "1px solid lightgray" }}
            className=" rounded-sm p-3 w-full"
          >
            <option>9.30 - 10.30</option>
            <option>10.30 - 11.30</option>
            <option>11.30 - 12.30</option>
          </select>

          <div className="modal-action">
            <label onClick={() => setShowEdit(false)} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
