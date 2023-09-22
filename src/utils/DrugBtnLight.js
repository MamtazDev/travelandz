import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DrugBtnLight = () => {
  return (
    <div>
      <Button className="flex-start btn addbtn" fullWidth variant="outlined">
        {" "}
        <AddIcon /> Add recommendation
      </Button>
    </div>
  );
};

export default DrugBtnLight;
