import { IconButton } from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const InputBox = ({ type, value, onChange, placeholder, onIconClick }) => {
  return (
    <div className="relative w-full">
      <textarea
        rows={5}
        id={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="py-2.5 pl-4 pr-12 border-none focus:outline-none block w-full 
          rounded-lg bg-neutral-300 border-transparent text-black"
      />
      {/* <IconButton
        onClick={onIconClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <VolumeUpIcon sx={{ color: "#000000" }} />
      </IconButton> */}
    </div>
  );
};

export default InputBox;
