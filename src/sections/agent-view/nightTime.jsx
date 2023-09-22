import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const NightTime = () => {
  return (
    <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-700" />
      <time className="mb-1  text-base uppercase font-normal leading-none text-[#737394]">
        MORNING
      </time>
      <div className=" pt-5">
        <div className="w-full ">
          <Button
            className="btn addbtn justify-between bg-dark mb-2"
            fullWidth
            variant="outlined"
          >
            <div className="d-flex gap-2 text-gray">
              <MenuIcon />
              <p className="my-0">F.C.Barcelona - Atlético...</p>
            </div>
            <p className="my-0 text-gray"> 9.30 - 10.30</p>
            <div className="d-flex gap-2 text-white">
              <EditIcon />
              <DeleteIcon />
            </div>
          </Button>

          <Button
            className="flex-start btn addbtn"
            fullWidth
            variant="outlined"
          >
            <AddIcon /> Add activity
          </Button>
        </div>
      </div>
    </li>
  );
};

export default NightTime;
