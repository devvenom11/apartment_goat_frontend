import React from "react";

const AmenityCard = ({ icon, title }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border-light px-4 py-4 md:py-6">
      <span className="w-10 sm:w-6 h-10 sm:h-6 mb-1">{icon}  </span>
      <p className="text-center font-medium capitalize leading-5 -tracking-[0.01em]">{title}</p>
    </div>
  );
};

export default AmenityCard;
