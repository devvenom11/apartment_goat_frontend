import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown, CircleSpin } from "../../assets/icons";

<ChevronDown />;
const PriceDropDown = ({
  icon = <ChevronDown />,

  border,
  setMaxPrice,
  setMinPrice,
  minPrice,
  maxPrice,
  isProcessing,
  propertiesData,
}) => {
  const [open, setOpen] = useState(false);

  const handleButton = () => {
    setOpen(false);
  };

  return (
    <div className="relative cursor-pointer">
      <div className="relative " onClick={() => setOpen(!open)}>
        <div
          className={`${border ? "border border-[#22223B29]" : ""} flex items-center space-x-2 justify-between relative w-full px-[14px] h-full py-[7px] rounded-full outline-none focus:outline-none border-opacity-15 peer text-sm`}
        >
          <p>
            $  {minPrice} - ${maxPrice}
          </p>
          <p className="">{icon}</p>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className="relative">
          <div className={`${open ? "block" : "hidden"} p-4 absolute bg-white overflow-hidden shadow right-0 mt-1 rounded-md z-30 min-w-[180px]`}>
            <div className="flex w-full">
              <div className="w-full min-w-[120px]">
                <label htmlFor="min-price-input" className="mb-1 text-sm">
                  Min price
                </label>
                <div className="flex cursor-text items-center rounded-md border border-gray-lh-100 px-3 py-2">
                  <span className="absolute -z-100 whitespace-pre opacity-0">22</span>
                  <span className="text-[14px] leading-5 ">$</span>
                  <input onChange={(e) => setMinPrice(e.target.value)} className="min-w-[20px] w-full text-gray-lh-700 focus:outline-none z-[999]" maxLength={5} defaultValue={minPrice} />
                  <span className="text-[13px] leading-5 text-[#7f8589]">/mo</span>
                </div>
              </div>
              <p className="mx-2 mb-2.5 mt-auto text-gray-lh-500">-</p>
              <div className="w-full min-w-[120px]">
                <label htmlFor="max-price-input" className="mb-1 text-sm">
                  Max price
                </label>
                <div className="flex cursor-text items-center rounded-md border border-gray-lh-100 px-3 py-2">
                  <span className="text-[14px] leading-5 ">$</span>
                  <input onChange={(e) => setMaxPrice(e.target.value)} className="  w-full text-gray-lh-700 focus:outline-none z-[999]" maxLength={5} defaultValue={maxPrice} />
                  <span className="text-[13px] leading-5 text-[#7f8589]">/mo</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleButton}
              className={`${propertiesData?.length == 0 ? "cursor-default opacity-50 pointer-events-none" : ""} mt-3 flex h-11 w-full items-center justify-center rounded-[60px] bg-[#FF6525] py-2 text-[16px] font-medium text-white hover:bg-[#34966d]-darker disabled:border disabled:border-gray-lh-100 disabled:bg-gray-mediumlight-2 disabled:font-normal disabled:text-gray-400`}
            >
              {isProcessing ? <CircleSpin spin /> : propertiesData?.length == 0 ? "No Properties" : <span>View {propertiesData?.length} properties</span>}
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default PriceDropDown;
