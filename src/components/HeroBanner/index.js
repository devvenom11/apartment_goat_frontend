import React, { useState, useEffect } from "react";
import {
  BuildingsIcon,
  BuildingsIconMobile,
  HeroShockIcon,
} from "../../assets/icons";
 
import {SearchBar} from '../common/SearchBar'
 
const HeroBanner = () => {
  
  return (
    <section className="bg-[#F5EEE8] relative mb-[60px] md:mb-[142px] myFontFamily">
      <div className="max-w-[962px] h-[calc(100vh - 68px)] md:h-auto mx-auto pt-[34px] md:pt-[51px] pb-[310px] static z-10 md:px-0 px-4">
        <div className="pb-[25px] md:pb-[57px] border-b border-[#989898]">
          <h1 className="text-[53px] md:text-[70px] leading-[55px] md:leading-[70px] font-semibold text-[#22223B] text-center tracking-[0.07em]">
            Your Dream Apartment +{" "}
            <span className="static">
              Cashback
              <span className="absolute right-[208px] left-0 top-[193px] md:mb-0 mb-2">
                <HeroShockIcon />
              </span>
            </span>{" "}
            = Bliss
          </h1>
        </div>
        <div className="pt-6 md:pt-7">
          <p className="text-center text-[16px] md:text-[25px] font-[400px] leading-[24px] md:leading-[34px] text-[#22223B]">
            Lease in Chicago through Apartment Goats and enjoy up to $450 in
            rebates
          </p>
        </div>
        <div className="pt-7 md:pt-10 relative z-[9]">
         <SearchBar/>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-full mx-auto max-w-[1440px] ">
        <div className="lg:flex hidden w-full overflow-hidden justify-center">
          <BuildingsIcon width="1440px" height="768px" />
        </div>
        <div className="lg:hidden block">
          <BuildingsIconMobile width="100%" height="768px" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
