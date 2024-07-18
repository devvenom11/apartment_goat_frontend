import React from "react";

const MapMarker = ({ handleMarkerClick, item, selectedMarker }) => {
  const isSelected = item?.id === selectedMarker?.id;

  return (
    <div
      onClick={() => handleMarkerClick(item)}
      className={`relative inset-0 m-auto h-6 group -translate-y-1/2 -translate-x-1/2 flex min-h-[28px] max-h-[28px] w-[58px] max-w-[370px] px-2 items-center justify-center cursor-pointer rounded-[20px] shadow-[0px_2px_8px_rgba(21,26,29,0.15)] border-none  hover:bg-brand hover:text-white hover:z-50 ${isSelected ? "bg-brand text-white z-50" : "bg-white"}`}
    >
      <div
        className={`absolute overflow-hidden rounded-full transition-all duration-200 ease-in group-hover:-top-15 border-[2px]  group-hover:border-brand ${isSelected ? "border-brand -top-15" : "border-brand -top-11"}`}
      >
        {item?.attributes?.photos?.data?.length>0&&<img
          className={`transition-all duration-200 ease-in group-hover:h-14 group-hover:w-14  ${isSelected ? "w-14 h-14" : "h-11 w-11"}`}
          src={`${item?.attributes?.photos?.data[0]?.attributes?.url}`}
          width={56}
          height={56}
          alt={item.attributes.name}
        />}
      </div>
      <div className="relative w-full text-grey-dark font-circular text-14px leading-5 font-medium text-grey-dark text-center z-50 inline">
        {item.attributes.min_price.trim()}+
      </div>
      <div
        className={`z-50 pointer-events-none absolute whitespace-nowrap rounded-full bg-white px-2 text-center text-14px font-medium leading-5 shadow-[0px_2px_8px_rgba(21,26,29,0.15)] -top-20 group-hover:block group-hover:w-auto text-gray-800 ${isSelected ? "block w-auto" : "hidden w-0"}`}
      >
        {item.attributes.name}
      </div>
    </div>
  );
};

export default MapMarker;