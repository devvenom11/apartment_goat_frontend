import React from "react";
import { useState } from "react";

const Input = ({ type = "text", label = "", className = "", required = false, name, id, onChange}) => {
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (e) => {
    setHasValue(e.target.value !== "");
    if (onChange){
      onChange(e)
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <input
        type={type}
        className="w-full px-[14px] h-11 rounded-lg outline-none focus:outline-none border-[1px] border-[#22223B29] border-opacity-15 peer focus:ring-2 focus:ring-[#ff65251a] focus:ring-offset-0 "
        onChange={handleInputChange}
        name={name}
        id={id}
      />
      {label && (
        <label
          htmlFor={label.toLowerCase()}
          className={`absolute pointer-events-none left-[14px] peer-focus:top-0 bg-white z-20 transition-all duration-300 text-[13px] font-medium text-[#989898] ${
            hasValue ? "-translate-y-1/2 top-1 text-xs" : "top-[50%] -translate-y-1/2 "
          }`}
        >
          <span>{label}</span>
          {required && <span className="text-[13px] text-[#FF4128]">*</span>}
        </label>
      )}
    </div>
  );
};

export default Input;
