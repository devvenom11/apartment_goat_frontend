import React from "react";
import cardImg from "../../../../assets/ApartmentDetails/car-image.png";
import Divider from "../../../common/Divider";
const ApartmentCard = () => {
  return (
    <>
      <div className="w-full flex items-center gap-x-2">
        <div className="rounded-[16px]">
          <img src={cardImg.src} alt="card-img" className="rounded-[8px] w-16 h-16" />
        </div>
        <div className="">
          <h3 className="text-sm font-semibold text-[#22223B] mb-1">$2,500 - $3,000</h3>
          <h4 className="text-sm font-medium text-[#22223B] mb-1">$2,500 - $3,000</h4>
          <p className="text-xs  text-[#22223B]">860 sqft - 2 bed - 1 bath</p>
        </div>
      </div>
      <Divider marginY={"my-6"} />
    </>
  );
};

export default ApartmentCard;
