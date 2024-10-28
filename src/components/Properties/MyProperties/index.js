"use client";
import React, { useState , useEffect } from "react";
import { ArrowDownIcon, HeartIcon, HeartIconFilled } from "src/assets/icons";
import RedHeartSvg from "src/assets/properties/RedHearSvg.svg";
import LocationList from "src/components/Properties/LocationsList";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import PropertiesCard from './PropertiesCard'
const MyProperties = ({ data }) => {
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
      <div className="mb-6 hidden flex justify-between mt-[24px] ">
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

      <div className="mt-6">
        {data?.length > 0  ? (
          data?.map((item,idx) => (
            <>
            <PropertiesCard item={item } key={idx}/>
            </>
          ))
        ) : (
          <div className="flex justify-center mt-10 md:mt-20">
            <span>No Properties Found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
