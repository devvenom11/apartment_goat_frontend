import React from "react";
import { ChevronRight } from "../../../../assets/icons";

const BreadCrumbs = ({data}) => {
  return (
    <div className="w-full  items-center gap-x-2 hidden lg:flex text-sm leading-5">
      <p className="text-[#5C5C6C] cursor-pointer">Home</p>
      <ChevronRight stroke={"#5C5C6C"} width={20} height={20} />
      <p className="text-[#5C5C6C] cursor-pointer">{data?.state}, {data?.city}</p>
      <ChevronRight stroke={"#5C5C6C"} width={20} height={20} />
      <p className="text-brand cursor-pointer hover:underline">{data?.street_address}</p>
    </div>
  );
};

export default BreadCrumbs;
