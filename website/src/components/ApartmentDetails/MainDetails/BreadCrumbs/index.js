import React from "react";
import { ChevronRight } from "../../../../assets/icons";

const BreadCrumbs = () => {
  return (
    <div className="w-full  items-center gap-x-2 hidden lg:flex text-sm leading-5">
      <p className="text-[#5C5C6C] cursor-pointer">Home</p>
      <ChevronRight stroke={"#5C5C6C"} width={20} height={20} />
      <p className="text-[#5C5C6C] cursor-pointer">Lakeview East, Chicago</p>
      <ChevronRight stroke={"#5C5C6C"} width={20} height={20} />
      <p className="text-brand cursor-pointer hover:underline">Cozy 2BR on Maple Street</p>
    </div>
  );
};

export default BreadCrumbs;
