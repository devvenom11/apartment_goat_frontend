import React from "react";

const Badge = ({ title, isDisabled = false, handleClick = () => {}, active = false }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`w-fit px-4 py-1.5 ${active ? "bg-[#b46e5114] border-brand text-brand" : "bg-white border-[#eaebeb]"} border whitespace-nowrap rounded-[200px] text-[13px] capitalize leading-5 cursor-pointer   ${!active && !isDisabled && "hover:bg-[#b46e5114] hover:border-brand"} ${isDisabled ? "!cursor-text text-[#22223B]" : "text-brand"}`}
    >
      {title}
    </button>
  );
};

export default Badge;
