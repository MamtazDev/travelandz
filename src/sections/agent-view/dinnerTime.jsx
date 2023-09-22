import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

const DinnerTime = () => {
    return (
      <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-700" />
      <time className="mb-1  text-base uppercase font-normal leading-none text-[#737394]">
      DINNER
      </time>
      <div className=" pt-5">
        <div className="w-full ">
          <Button
            className="btn addbtn justify-between bg-gray mb-2"
            fullWidth
            variant="outlined"
          >
            <div className="d-flex gap-2 text-[#1A1A33]">
              <MenuIcon />
              <p className="my-0 text-[#1A1A33]">Mesón Henri</p>
            </div>
            <div className="d-flex gap-2 text-[#1A1A33]">
              <EditIcon />
              <DeleteIcon />
            </div>
          </Button>

       

          <Button
            className="flex-start btn addbtn"
            fullWidth
            variant="outlined"
          >
            <AddIcon /> Add recommendation
          </Button>
        </div>
      </div>
    </li>
    );
}

export default DinnerTime;
