import React, { useState } from "react";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "src/components/Modal/Edit";
import Delete from "src/components/Modal/Delete";

const DrugBtnDark2 = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div>
      <Button
        className="btn addbtn justify-between bg-dark"
        fullWidth
        variant="outlined"
      >
        <div className="d-flex gap-2 text-gray">
          <MenuIcon />
          <p className="my-0">City Sightseeing bus tour</p>
        </div>
        <p className="my-0 text-gray"> 9.30 - 10.30</p>
        <div className="d-flex gap-2 text-white">
          <EditIcon onClick={() => setShowEdit(true)} />
          <DeleteIcon onClick={() => setShowDelete(true)} />
        </div>
      </Button>
      <Edit showEdit={showEdit} setShowEdit={setShowEdit} />
      <Delete showDelete={showDelete} setShowDelete={setShowDelete} />
    </div>
  );
};

export default DrugBtnDark2;
