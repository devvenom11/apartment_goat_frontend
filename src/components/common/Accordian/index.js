import React from "react";
import { useState } from "react";
import { SheveronDown } from "../../../assets/icons";
import { SheveronUp } from "../../../assets/icons";

const Accordian = ({question,answer}) => {
    const [openIndex, setOpenIndex] = useState(false);

    
  return (
    <div className="">
     <div
        className="bg-[#FEFEFE] rounded-[24px] p-[24px] mb-[10px] w-[635px] cursor-pointer"
        onClick={() => setOpenIndex (!openIndex)}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
        
        >
          <p className="font-[500] text-[16px] leading-[20.8px] text-[#22223B]">{question}</p>
          {openIndex ? <SheveronDown /> :  <SheveronUp /> }
        </div>
        {openIndex && <p className="text-left mt-[10px] font-[300] text-[16px] leading-[24px]">{answer}</p>}
      </div>
    </div>
  );
};

export default Accordian;
