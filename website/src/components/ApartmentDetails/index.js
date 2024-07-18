
'use client'
import React from "react";
import HeroSlider from "./HeroSlider";
import MainDetails from "./MainDetails";
import ExploreApartments from "./ExploreApartments";


const ApartmentDetails = ({data}) => {
  if(!data)return(
    <p>Loading</p>
  )
  return (
    <div className="w-full apartment-detail">
      <HeroSlider images={data?.photos?.data}/>
      <MainDetails data={data} />
      <ExploreApartments />
    </div>
  );
};

export default ApartmentDetails;