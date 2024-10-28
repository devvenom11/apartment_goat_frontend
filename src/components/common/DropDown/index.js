import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown } from "../../../assets/icons";
const values = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
];
const Dropdown = ({ label = "", className = "", required = false, onChange ,id,name}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (e) => {
    setSelectedValue(e);
    if(onChange){
      onChange(e)
    }
  };

  return (
    <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
      <div className={`w-full relative ${className}`}>
        <div className="w-full px-[14px] h-11 flex items-center rounded-lg outline-none focus:outline-none border-[1px] border-[#22223B29] border-opacity-15 peer">{selectedValue ?? ""}</div>
        {label && !selectedValue && (
          <label
            htmlFor={label.toLowerCase()}
            className={`absolute left-[14px] peer-focus:top-0 bg-white z-20 transition-all duration-300 text-[13px] font-medium text-[#989898] ${
              !!selectedValue ? "-translate-y-1/2 top-1 text-xs" : "top-[50%] -translate-y-1/2"
            }`}
          >
            <span name={name}>{label}</span>
            {required && <span className="text-[13px] text-[#FF4128]">*</span>}
          </label>
        )}
      </div>
      <span className="absolute right-4 top-1/2 -translate-y-1/2">
        <ChevronDown />
      </span>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className={`${open ? "block" : "hidden"} absolute bg-white  shadow right-0 left-0 mt-1 rounded-md z-30`}>
          <ul className="w-full flex flex-col ">
            {values?.map((item, idx) => (
              <li key={idx} onClick={() => handleSelect(item?.value)} className="w-full py-2 px-4 hover:bg-gray-100">
                {item?.label}
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Dropdown;
