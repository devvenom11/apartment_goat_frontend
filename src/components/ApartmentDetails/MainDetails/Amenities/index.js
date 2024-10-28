import React from "react";
import AmenityCard from "./AmenityCard";
const availabilityNote = "*Some amenities are not available in all units";

const Amenities = ({ data }) => {
  return (
    <section
      id="amenities-section"
      className="mx-5 mb-8 border-b border-b-border-light pb-9 md:mx-0 md:mb-9 md:pb-[42px]"
    >
      <h3 className="mb-4 text-2xl font-bold leading-8">Amenities</h3>
      <div className="mb-4 grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-4">
        {data?.amenities?.map((item, idx) => (
          <AmenityCard key={idx} icon={item.icon} title={item.title} />
        ))}
      </div>
      <div>
        {/* <ul className=" mb-10 grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-3">
          {data?.amenities?.map((item, index) => (
            <li
              key={index}
              className="relative pl-2.5 text-sm leading-5 capitalize text-gray-700 before:absolute before:left-0 before:top-2.5 before:block before:h-1 before:w-1 before:rounded-full before:bg-gray-700 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul> */}
      </div>
      <ul>
        {data?.unit_amenities?.length > 0 && (
          <li className="mb-4 last:mb-0 md:mb-10">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-[calc(25%-12px)_3fr] md:gap-4">
              <div className="">
                <h3 className="font-semibold sm:font-medium">Unit Amenities</h3>
              </div>
              <ul className="grid auto-rows-auto grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-3">
                {data?.unit_amenities &&
                  data?.unit_amenities?.map((item, index) => {
                    // Only display the amenities that are true

                    return (
                      <li
                        key={index}
                        className="relative pl-2.5 text-sm leading-5 capitalize text-gray-700 before:absolute before:left-0 before:top-2.5 before:block before:h-1 before:w-1 before:rounded-full before:bg-gray-700 before:content-['']"
                      >
                        {item} {/* Format key */}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </li>
        )}
      </ul>
      {data?.building_amenities && (
        <>
          <ul>
            <li className="mb-4 mt-10 last:mb-0 md:mb-10">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-[calc(25%-12px)_3fr] md:gap-4">
                <div className="">
                  <h3 className="font-semibold sm:font-medium">
                    Building Amenities
                  </h3>
                </div>
                <ul className="grid auto-rows-auto grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-3">
                  {data?.building_amenities &&
                    Object.entries(data?.building_amenities)?.map(
                      ([key, value], index) => (
                        <li
                          key={index}
                          className="relative pl-2.5 capitalize text-gray-700 before:absolute before:left-0 before:top-2.5 before:block before:h-1 before:w-1 before:rounded-full before:bg-gray-700 before:content-['']"
                        >
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}{" "}
                        </li>
                      )
                    )}
                </ul>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-sm leading-5 text-[#7f8589]">
            {availabilityNote}
          </p>
        </>
      )}
    </section>
  );
};

export default Amenities;
