import { useRouter } from "next/navigation";
import React from "react";
 
const PopularApartmentsBlogCards = ({ data,loading }) => {
  const CardsData = [
    {
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
    { 
      color: "#3987FF",
    },
    {
       
      color: "#3987FF",
    },
    {
      color: "#4ABC3F",
    },
    {
      
      color: "#3987FF",
    },
    {
     
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
    { 
      color: "#3987FF",
    },
  ];
  const router = useRouter();
  return (
    <div className="max-w-[1076px] mx-auto myFontFamily">
      <div className="px-[16px] lg:px-[0px]">
        <div className="mt-[64px]">
          <p className="text-[24px] font-[600] leading-[36px] text-[#22223B]">
            The most popular from ApartmentGoats
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[24px] gap-[16px] mb-[72px]">
        {loading &&
          [1, 2, 3, 4, 5,6,7].map((item, i) => {
            return <LoadingCard key={i} />;
          })}
          {!loading && data?.map((item, index) => (
            <div
              key={index}
              onClick={()=>router.push(`/article/${item?.attributes?.Slug}`)}

              className="bg-[#FFFFFF] rounded-[8px] cursor-pointer"
            >
              <img
                src={item?.attributes?.Image?.data?.attributes?.url}
                alt={item.title}
                className="w-full rounded-t-[8px]"
              />
              <div className="px-[16px] ">
                <p
                  className="mt-[16px] text-[14px] font-normal leading-[21px] text-[#5C5C6C] w-fit"
                  style={{ borderBottom: `2px solid ${CardsData[index% CardsData.length].color}` }}
                >
                  {item?.attributes?.blog_category?.data?.attributes?.Title}
                </p>
                <p className="mt-[16px] text-[16px] font-[500] leading-[20.8px] mb-[24px]">
                {item?.attributes?.Title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularApartmentsBlogCards;

const LoadingCard = () => {
  return (
    <div className="relative mb-3 h-[286px] desktop-sm:mb-5 w-full md:max-w-[283px] rounded-lg overflow-hidden border leading-none">
      <div className="flex h-[162px] w-full items-center justify-center bg-gray-50 animate-pulse"></div>
      <div className="relative flex w-full flex-col p-4 pt-3 leading-none">
        <span className="animate-pulse bg-gray-100 mb-1" style={{ width: 248, height: 16 }}>
          ‌
        </span>
        <br />
        <span className="animate-pulse bg-gray-100 mb-2" style={{ width: 122, height: 16 }}>
          ‌
        </span>
        <br />
        <span className="animate-pulse bg-gray-100 mb-1" style={{ width: 75, height: 20 }}>
          ‌
        </span>
        <br />
      </div>
    </div>
  );
};