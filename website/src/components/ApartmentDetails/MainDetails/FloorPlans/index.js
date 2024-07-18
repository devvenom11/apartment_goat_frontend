import React, { useEffect, useState } from "react";
import Badge from "../../../common/Badge";
import AvailabilityCard from "../../../common/AvailabiltyCard";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

const FloorPlans = ({ data }) => {
  dayjs.extend(relativeTime);
  const [isMore, setIsMore] = useState(5);
  const [sortBy, setSortBy] = useState("");
  const [units, setUnits] = useState([]);

  const handleSort = (value) => {
    console.log("🚀 ~ handleSort ~ value:", value);
    console.log("🚀 ~ handleSort ~ unit:", units);
    setSortBy(value);
    if (value === "") {
      setUnits(data.units);
    } else {
      setUnits(data.units.filter((unit) => unit.Bed == value));
    }
  };

  useEffect(() => {
    setUnits(data.units);
  }, [data]);

  const tags = [
    { title: "All Units", value: "" },
    { title: "Studio", value: 0 },
    { title: "1 Bedroom", value: 1 },
    { title: "2 Bedrooms", value: 2 },
  ];
  return (
    <div>
      {units && (
        <div className="w-full mb-11 md:mb-14">
          <div className="mb-4 flex items-center justify-between px-5 md:px-0">
            <h3
              id="check-availability"
              className="text-2xl font-bold leading-8 pt-9 sm:pt-0 border-t sm:border-none"
            >
              Floor Plans & Pricing
            </h3>
            <div className="rounded-[200px] bg-[#F4F5F5] px-4 py-1 text-13px leading-5 text-[#6B7075] md:hidden mt-9 sm:mt-0">
              Updated {dayjs(data?.updatedAt).fromNow()}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2 overflow-auto px-5 md:px-0 whitespace-nowrap no-scrollbar">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  active={tag.value === sortBy}
                  handleClick={() => handleSort(tag.value)}
                  title={tag.title}
                />
              ))}
            </div>
            <div className="hidden rounded-[200px] bg-[#F4F5F5] px-4 py-1 text-[13px] leading-5 text-[#6B7075] md:block">
              <span>Updated</span> {dayjs(data?.updatedAt).fromNow()}
            </div>
          </div>

          <p className="mb-4 px-5 text-sm leading-5 md:px-0 text-[#989898]">
            {data?.disclaimer}{" "}
            <span className="cursor-pointer text-brand hover:underline">
              Contact us
            </span>
             for the most up-to-date information.
          </p>
          {units && (
            <div
              className={`cus_units myFontFamily flex flex-col lg:flex-row gap-2 overflow-auto px-5 md:block md:gap-0 md:px-0 no-scrollbar`}
            >
              {units.length === 0 && <p>No units found</p>}
              {units.slice(0, isMore).map((unit, idx) => (
                <AvailabilityCard
                  handleClick={() => {}}
                  unit={unit}
                  key={unit.id}
                />
              ))}
            </div>
          )}

          {units.length > 5 && (
            <span
              onClick={() =>
                isMore < units.length ? setIsMore(units.length) : setIsMore(5)
              }
              className="text-sm text-brand font-semibold cursor-pointer hidden hover:underline md:block"
            >
              {isMore > 5 ? "See Less" : "See More"}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FloorPlans;
