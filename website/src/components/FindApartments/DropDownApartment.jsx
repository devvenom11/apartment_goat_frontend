import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown } from "../../assets/icons";

<ChevronDown />;
const DropdownApartment = ({
  setSort,
  sort,
  icon = <ChevronDown />,
  border,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
      <div
        className={`${border ? "border border-[#22223B29]" : ""} flex items-center space-x-2 relative w-full pl-[14px] md:pr-[14px] h-full py-[7px] rounded-full outline-none focus:outline-none border-opacity-15 peer text-sm`}
      >
        <p>
          {sort === "highToLow"
            ? "By Price (High to Low)"
            : !sort
              ? "Sort by"
              : "By Price (Low to High)"}
        </p>
        <p className="">{icon}</p>
      </div>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className="relative">
          <div
            className={`${open ? "block" : "hidden"} absolute bg-white overflow-hidden shadow right-0 mt-1 rounded-md z-30 min-w-[200px]`}
          >
            <ul className="w-full flex flex-col ">
              <li
                onClick={() => setSort("highToLow")}
                className={`w-full py-2 px-4 hover:bg-gray-100 text-sm ${sort === "highToLow"?'text-brand':''}`}
              >
                By Price (High to Low)
              </li>
              <li
                onClick={() => setSort("lowToHigh")}
                className={`w-full py-2 px-4 hover:bg-gray-100 text-sm ${sort === "lowToHigh"?'text-brand':''}`}
              >
                By Price (Low to High)
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownApartment;
