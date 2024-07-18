"use client";
import React, { useState } from "react";
import { ArrowDownIcon } from "src/assets/icons";
import PropertiesImage from "src/assets/properties/PropertiesImage.png";
import PropertiesImageB from "src/assets/properties/PropertiesResponsiveImage.png";
import RedHeartSvg from "src/assets/properties/RedHearSvg.svg";
import LocationList from "src/components/Properties/LocationsList";
import OutsideClickHandler from "react-outside-click-handler";

const MyProperties = () => {
  const [isLocationListVisible, setIsLocationListVisible] = useState(false);
  const [isSortListVisible, setIsSortListVisible] = useState(false);
  const [isBedroomListVisible, setIsBedroomListVisible] = useState(false);

  const toggleLocationList = () => {
    setIsLocationListVisible(!isLocationListVisible);
    setIsSortListVisible(false);
    setIsBedroomListVisible(false);
  };

  const toggleSortList = () => {
    setIsSortListVisible(!isSortListVisible);
    setIsLocationListVisible(false);
    setIsBedroomListVisible(false);
  };

  const toggleBedroomList = () => {
    setIsBedroomListVisible(!isBedroomListVisible);
    setIsLocationListVisible(false);
    setIsSortListVisible(false);
  };

  const locationItems = ["Location 1", "Location 2", "Location 3"];
  const sortItems = [
    "Price Low to High",
    "Price High to Low",
    "Newest Listings",
  ];
  const bedroomItems = ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"];

  return (
    <div className="max-w-[1076px] mx-auto px-6 sm:px-4 myFontFamily">
      <div>
        <h2 className="text-[36px] font-[600] leading-[48.6px]">
          My Properties
        </h2>
      </div>
      <div className="flex justify-between mt-[24px] mb-[24px]">
        <div className="flex gap-[21px] relative">
          <OutsideClickHandler
            onOutsideClick={() => setIsLocationListVisible(false)}
          >
            <button
              className="cursor-pointer flex items-center pl-[20px] pr-[16px] border-[1px] border-[#22223B29] rounded-[110px] py-[10px] gap-[12px]"
              onClick={toggleLocationList}
            >
              Location{" "}
              <span>
                <ArrowDownIcon />
              </span>
            </button>
            {isLocationListVisible && (
              <LocationList
                items={locationItems}
                className="location-list-class"
              />
            )}
          </OutsideClickHandler>
          <OutsideClickHandler
            onOutsideClick={() => setIsBedroomListVisible(false)}
          >
            <button
              className="cursor-pointer flex items-center pl-[20px] pr-[16px] border-[1px] border-[#22223B29] rounded-[110px] py-[10px] gap-[12px]"
              onClick={toggleBedroomList}
            >
              Bedroom{" "}
              <span>
                <ArrowDownIcon />
              </span>
            </button>
            {isBedroomListVisible && (
              <LocationList
                items={bedroomItems}
                className="bedroom-list-class"
              />
            )}
          </OutsideClickHandler>
        </div>
        <OutsideClickHandler onOutsideClick={() => setIsSortListVisible(false)}>
          <div className="relative">
            <button
              className="cursor-pointer text-[14px] font-[500] flex items-center gap-[12px]"
              onClick={toggleSortList}
            >
              Sort{" "}
              <span>
                <ArrowDownIcon />
              </span>
            </button>
            {isSortListVisible && (
              <LocationList items={sortItems} className="sort-list-class" />
            )}
          </div>
        </OutsideClickHandler>
      </div>
      <div className="flex justify-center mt-10 md:mt-20" >
        <span>No Properties Found</span>
      </div>
      {/* <div className="flex flex-col sm:flex-row gap-[24px] shadow-lg rounded-[24px] bg-white">
                <img src={PropertiesImage.src} alt="loading" className='w-[150px] hidden sm:block sm:rounded-none cursor-pointer' />
                <img src={PropertiesImageB.src} alt="loading" className='w-full px-4 pt-4 block sm:hidden sm:rounded-none cursor-pointer' />
                <div className="py-[14px] pr-[24px] flex justify-between w-[100%]">
                    <div className="px-4 sm:px-0">
                        <p className="text-[18px] font-[500] leading-[23.4px] mb-[12px] cursor-pointer">Cozy 2BR on Maple Street</p>
                        <p className="text-[16px] font-[300] leading-[20.8px] mb-[23px] text-[#22223B]">860 sqft - 2 bed - 1 bath</p>
                        <p className="text-[21px] font-[600] leading-[21px] mb-[8px]">$2,500 <span className="text-[14px] font-[400] text-[#989898] leading-[21px]"> / month</span></p>
                        <p className="text-[14px] font-[300] leading-[14px] text-[#FF6525] cursor-pointer">Rebate Eligible $$$</p>
                    </div>
                    <div className="cursor-pointer">
                        <img src={RedHeartSvg.src} alt="loading" />
                    </div>
                </div>
            </div>  */}
    </div>
  );
};

export default MyProperties;
