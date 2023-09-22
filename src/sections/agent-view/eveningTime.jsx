import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Button, InputAdornment, TextField } from '@mui/material';
const EveningTime = () => {
    return (
      <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-700" />
      <time className="mb-1  text-base uppercase font-normal leading-none text-[#737394]">
       EVENING
      </time>
      <div className="flex pt-5 items-center">
      <div className=" w-full">
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          className="input-timeline mb-2"
           placeholder='Free time'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SentimentSatisfiedAltIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button className="flex-start btn addbtn" fullWidth variant="outlined"> <AddIcon /> Add activity</Button>
      </div>
    </div>
    </li>
    );
}

export default EveningTime;
