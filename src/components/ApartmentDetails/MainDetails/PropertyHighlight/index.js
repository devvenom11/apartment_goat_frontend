import React from "react";
import Badge from "../../../common/Badge";

const PropertyHighlight = ({ data }) => {
  const formatHighlights = () => {
    const amenities = data?.building_amenities || {};
    return Object.keys(amenities).filter((key) => amenities[key]);
  };

  const hasUnitAmenities = data?.unit_amenities?.length > 0;
  const hasBuildingAmenities = formatHighlights().length > 0;

  if (!hasUnitAmenities && !hasBuildingAmenities) {
    return null;
  }

  return (
    <div>
      <div
        id="property-highlights"
        className="mb-9 mt-9 border-border-light md:border-b md:pb-[42px]"
      >
        <h3 className="mb-3 px-5 text-2xl font-bold leading-8 md:px-0">
          Property Highlights
        </h3>
        {hasUnitAmenities && (
          <div className="flex gap-1.5 overflow-auto md:overflow-visible px-5 md:px-0 whitespace-nowrap no-scrollbar md:flex-wrap">
            {data?.unit_amenities?.map((item, idx) => (
              <Badge isDisabled={true} title={item} key={idx} />
            ))}
          </div>
        )}
        {!hasUnitAmenities && hasBuildingAmenities && (
          <div className="flex gap-1.5 overflow-auto md:overflow-visible px-5 md:px-0 whitespace-nowrap no-scrollbar md:flex-wrap">
            {formatHighlights().map((item, idx) => (
              <Badge isDisabled={true} title={item} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyHighlight;
