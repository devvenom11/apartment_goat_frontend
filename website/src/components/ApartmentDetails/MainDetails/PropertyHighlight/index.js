import React from "react";
import Badge from "../../../common/Badge";

const PropertyHighlight = ({ data }) => {
  const formatHighlights = () => {
    return data?.highlights.split(" ") || [];
  };
  return (
    <div className="mb-9 mt-9 border-border-light md:border-b md:pb-[42px]">
      <h3 className="mb-3 px-5 text-2xl font-bold leading-8 md:px-0">
        Property Highlights
      </h3>
      <div className="flex gap-1.5 overflow-auto md:overflow-visible px-5 md:px-0 whitespace-nowrap no-scrollbar md:flex-wrap">
        {formatHighlights().map((item) => {
          return (
            <>
              <Badge isDisabled={true} title={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyHighlight;
