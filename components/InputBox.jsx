import { IconButton } from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const InputBox = ({ type, value, onChange, placeholder }) => {
  return (
    <textarea
      rows={5}
      id={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="py-2.5 px-4 border-none focus:outline-none block w-full 
        rounded-lg bg-neutral-300 border-transparent text-black"
    >
      <IconButton onClick={() => {}}>
        <VolumeUpIcon sx={{ color: "#000000" }} />
      </IconButton>
    </textarea>
  );
};

export default InputBox;
