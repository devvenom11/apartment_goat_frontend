import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "../../../../assets/icons";
import Expand from "react-expand-animated";
const Accordion = ({ title ,data}) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className={`w-full py-4 px-4 md:px-0 border-[1px] md:border-0 rounded-[16px] md:rounded-[0px] md:border-b-[1px]  border-[#DBDBDB]`}>
      <div className={`w-full flex items-center justify-between cursor-pointer ${isExpand ? "md:mb-3" : ""} `} onClick={() => setIsExpand(!isExpand)}>
        <h5 className="text-lg font-semibold leading-6">{title}</h5>
        {isExpand ? <ChevronUp /> : <ChevronDown />}
      </div>
      <Expand open={isExpand}>
        <div className="w-full bg-[#DBDBDB] h-[1px] my-3 block md-hidden" />
        <ul className="flex flex-col gap-y-2">
          {/* {data.leaseDetailsData.data.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <h6 className="text-[16px] font-semibold">{item.title}</h6>
              <p className="text-[16px] text-[#555d61]">{item.value}</p>
            </li>
          ))} */}
        </ul>
      </Expand>
    </div>
  );
};

export default Accordion;
