import React, { useState } from "react";

const Delete = ({ showDelete, setShowDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={showDelete} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white text-center">
          <p className="text-2xl text-black mb-4">Are you want to delete it?</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setShowDelete(false)}
              className="bg-green-500 text-white px-3  py-1 rounded-md"
            >
              No
            </button>
            <button
              onClick={() => setShowDelete(false)}
              className="bg-red-500 text-white px-3  py-1 rounded-md"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
