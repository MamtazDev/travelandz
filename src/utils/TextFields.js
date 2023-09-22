import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const TextFields = () => {
  return (
    <div>
      <TextField
        fullWidth
        id="input-with-icon-textfield"
        className="input-timeline mb-2"
        label="Outlined"
        defaultValue={"Free Time"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SentimentSatisfiedAltIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
};

export default TextFields;
