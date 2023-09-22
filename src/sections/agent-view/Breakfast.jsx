import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import "../../sections/client-home/App.css";
import Offcanvas from "./Offcanvas";
const Breakfast = () => {
  const [show, setShow] = useState(false);
  return (
    <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-700" />
      <time className="mb-1  text-base uppercase font-normal leading-none text-[#737394]">
        BREAKFAST
      </time>
      <div className="flex pt-5 items-center">
        <div className=" w-full">
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            className="input-timeline mb-2"
            placeholder="Included in the hotel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CheckCircleIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button
            onClick={() => setShow(true)}
            className="flex-start btn addbtn"
            fullWidth
            variant="outlined"
          >
            {" "}
            <AddIcon /> Add recommendation
          </Button>

          {/* new code */}
          <Offcanvas show={show} setShow={setShow} />
        </div>
      </div>
    </li>
  );
};

export default Breakfast;
