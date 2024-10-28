import React from "react";
import SecondaryButton from "../Button/secondary";

const AvailabilityCard = ({ unit, handleClick }) => {
  return (
    <li className="w-full  p-5 py-5 md:px-7 mb-4 rounded-lg border border-border-light flex flex-col md:flex-row gap-y-4 items-center justify-between  ">
      <div className="flex flex-col md:flex-row md:gap-y-2 gap-x-3 md:items-center ">
        <h5 className="text-xl md:font-medium font-semibold leading-6 text-[#22223B] w-[290px] md:w-[84px]">
          {unit.price ? `${unit.price}` : "-"}
        </h5>
        <p className=" text-gray-500">
          {unit?.bedrooms === 0
            ? "Studio"
            : unit?.bedrooms + `${unit?.bedrooms > 1 ? " Beds" : " Bed"}`}{" "}
          - {unit?.bathrooms} Bath - {unit?.square_feet} sqft{" "}
          <span className="text-brand hidden md:inline">- Floor Plan</span>
        </p>
      </div>
      <span>{unit.availability_date}</span>
    </li>
  );
};

export default AvailabilityCard;
