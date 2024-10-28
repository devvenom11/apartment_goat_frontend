"use client";
import React from "react";
import HeroSlider from "./HeroSlider";
import MainDetails from "./MainDetails";
import ExploreApartments from "./ExploreApartments";

const ApartmentDetails = ({ data, showNavbar, units ,nearByProperties}) => {
 
  return (
    <div
      className={`w-full apartment-detail ${showNavbar ? "pt-[100px]" : "pt-[60px]"}`}
    >
      {data?.images && <HeroSlider images={data?.images} />}
      <MainDetails data={data} units={units} nearProperties={nearByProperties} />
      <ExploreApartments />
    </div>
  );
};

export default ApartmentDetails;
