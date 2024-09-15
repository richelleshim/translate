import { InputBoxProps } from "@/types";
import React from "react";

const InputBox = ({ type, value, onChange, placeholder }: InputBoxProps) => {
  return (
    <div className="border-white">
        <textarea rows={5} id={type} placeholder={placeholder} onChange={onChange} value={}>

        </textarea>
    </div>
  );
};

export default InputBox;
