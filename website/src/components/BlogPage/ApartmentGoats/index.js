import React from "react";
const catTags = [
  {
    title: "latest",
    url: "latest",
  },
  {
    title: "Top Article",
    url: "Top Article",
  },
  {
    title: "Lakeview",
    url: "Lakeview",
  },
  {
    title: "Linkoln Park",
    url: "Linkoln Park",
  },
  {
    title: "West Loop",
    url: "West Loop",
  },
  {
    title: "Logan Square",
    url: "Logan Square",
  },
];
const ApartmentGoats = ({ input, setInput }) => {
  return (
    <div className="max-w-[856px] mx-auto">
      <div className="">
        <div className="pt-[56px]">
          <p className="text-[28px] lg:text-[40px] font-[600] leading-[42px] lg:leading-[60px] text-center">
            ApartmentGoats Blog
          </p>
          <ul className="flex justify-center flex-wrap  mt-[16px] gap-[8px]">
            {catTags?.map((item, idx) => {
              return (
                <button key={idx} onClick={() => setInput(item.url)}>
                  <li
                    className={`capitalize text-[12px] md:text-[14px] font-[400] leading-[18px] md:leading-[21px] px-[14px] py-[5.5px] border-[1px] border-[#22223B29] rounded-[110px] bg-[#FFFFFF] ${input === item.title && "bg-gray-200"} `}
                  >
                    {item?.title}
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentGoats;
