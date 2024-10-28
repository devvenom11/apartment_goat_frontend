import React, { useEffect } from "react";
import { useState } from "react";
import { ArrowUpIcon, SheveronUp } from "../../assets/icons";
import { SheveronDown } from "../../assets/icons";
import Accordion from "../common/Accordian";
// import { Illustration } from "../../assets/icons";
import Image from "../../assets/landingPage/Illustrations.png";
import Button from "../common/Button";
import Link from "next/link";
import { FAQsDATA } from "src/utils/data";
const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[rgb(186,218,249)] myFontFamily">
      <div className="px-4 md:px-[45px] mx-auto ">
        <div className="flex flex-col lg:flex-row pt-10 md:pt-[120px] justify-between gap-[44px] relative">
          <div className="max-w-[633px]">
            <h1 className="text-[36px] md:text-[48px] font-[600] leading-[40px] md:leading-[62.4px] mb-[16px] md:mb-[52px]">
              Curious About Apartment Goats?
            </h1>
            <Link href={`/apartments/chicago`}>
              <Button
                onClick={() => {}}
                icon={<ArrowUpIcon />}
                classNames="hidden bg-[#22223B] hover:scale-105 transition-transform duration-250 md:flex flex-col-row gap-[4px] items-center mb-[83px] py-[14px] md:py-[18.5px] px-[32px] text-[#FEFEFE] font-[600] rounded-[99px]"
              >
                Find Apartments
              </Button>
            </Link>

            <img src={Image.src} alt="error" className="hidden lg:block" />
          </div>
          <div className="lg:w-[40%]">
            {FAQsDATA?.map((item, idx) => {
              return (
                <Accordion
                  key={idx}
                  index={idx}
                  question={item?.Question}
                  answer={item?.Answer}
                  isOpen={idx === openIndex}
                  onClick={() => handleClick(idx)}
                />
              );
            })}
          </div>
          <Button
            onClick={() => {}}
            icon={<ArrowUpIcon />}
            classNames="w-full bg-[#22223B] hover:scale-105 transition-transform duration-250 flex md:hidden justify-center gap-[4px] items-center mb-0 py-[14px] md:py-[18.5px] px-[32px] text-[#FEFEFE] font-[600] rounded-[99px]"
          >
            Find Apartments
          </Button>
          <img
            src={Image.src}
            alt="error"
            className="block lg:hidden mt-[32px] lg:mt-0 -ml-6"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
