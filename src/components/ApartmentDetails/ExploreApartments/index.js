import React from "react";

const ExploreApartments = () => {
  return (
    <div className="w-full bg-[#F8F8F8]  px-5 md:px-7 myFontFamily">
      <div className="mx-auto max-w-[1168px] pt-20 pb-[60px]">
        <h3 className="text-[#22223B] text-[24px] font-semibold">Explore Nearby Grand Prairie Apartments</h3>
        <div className="w-full mt-10 flex flex-col sm:flex-row gap-x-6 gap-y-10 md:gap-y-8">
          <div className="w-full max-w-[360px]">
            <h5 className="font-medium text-black-100 mb-4">Search by Amenities</h5>
            <ul className="w-full flex flex-col gap-y-3">
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Pet friendly apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Furnished apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Student apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Senior apartments in Grand Prairie, TX</li>
            </ul>
          </div>
          <div className="w-full max-w-[360px]">
            <h5 className="font-medium text-black-100 mb-4">Search by Amenities</h5>
            <ul className="w-full flex flex-col gap-y-3">
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Studio apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">1 Bedroom apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">2 Bedroom apartments in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">3 Bedroom apartments in Grand Prairie, TX</li>
            </ul>
          </div>
          <div className="w-full max-w-[360px]">
            <h5 className="font-medium text-black-100 mb-4">Search by Budget</h5>
            <ul className="w-full flex flex-col gap-y-3">
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Apartments under $1,000 in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Apartments under $1,500 in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Apartments under $2,000 in Grand Prairie, TX</li>
              <li className="text-[13px] text-[#5C5C6C] hover:underline cursor-pointer">Apartments under $2,500 in Grand Prairie, TX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreApartments;
