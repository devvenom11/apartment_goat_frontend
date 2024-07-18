import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown } from "../../../assets/icons";
import Calendar from "react-calendar";

const ReactDatePicker = ({ label = "", className = "", required = false }) => {
  const [value, onChange] = useState();
  const [open, setOpen] = useState(false);

  function formatDate(inputDate) {
    if (!inputDate) {
      return;
    }
    const date = new Date(inputDate);

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    return formattedDate;
  }
  return (
    <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
      <div className={`w-full relative ${className}`}>
        <div className="w-full px-[14px] h-11 flex items-center rounded-lg outline-none focus:outline-none border-[1px] border-[#22223B29] border-opacity-15 peer">{formatDate(value) ?? ""}</div>
        {label && !value && (
          <label
            htmlFor={label.toLowerCase()}
            className={`absolute left-[14px] peer-focus:top-0 bg-white z-20 transition-all duration-300 text-[13px] font-medium text-[#989898] ${
              !!value ? "-translate-y-1/2 top-1 text-xs" : "top-[50%] -translate-y-1/2"
            }`}
          >
            <span>{label}</span>
            {required && <span className="text-[13px] text-[#FF4128]">*</span>}
          </label>
        )}
      </div>
      <span className="absolute right-4 top-1/2 -translate-y-1/2">
        <img src="https://lighthouse.app/static/assets/svg/building/CalendarIcon.svg" alt="calendar-svg" />
      </span>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className={`${open ? "block" : "hidden"} absolute bg-white  right-0 z-20 mt-1 rounded-md border border-border-light drop-shadow-[0px_2px_8px_rgba(21,26,29,0.08)]`}>
          <Calendar onChange={onChange} value={value} className={"p-3"} tileClassName={"w-full"} />
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default ReactDatePicker;
