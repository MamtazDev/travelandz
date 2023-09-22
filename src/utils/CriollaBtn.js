import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import Edit from "src/components/Modal/Edit";
import Delete from "src/components/Modal/Delete";

const CriollaBtn = ({title}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div>
      <Button
        className="btn addbtn justify-between bg-gray mb-2"
        fullWidth
        variant="outlined"
      >
        <div className="d-flex gap-2 text-[#1A1A33]">
          <MenuIcon />
          <p className="my-0 text-[#1A1A33]">{title}</p>
        </div>
        <p className="my-0 text-[#1A1A33]"> 9.30 - 10.30</p>
        <div className="d-flex gap-2 text-[#1A1A33]">
          <EditIcon onClick={() => setShowEdit(true)} />
          <DeleteIcon onClick={() => setShowDelete(true)} />
        </div>
      </Button>
      <Edit showEdit={showEdit} setShowEdit={setShowEdit} />
      <Delete showDelete={showDelete} setShowDelete={setShowDelete} />
    </div>
  );
};

export default CriollaBtn;
