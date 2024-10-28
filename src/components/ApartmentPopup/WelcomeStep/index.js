import React from "react";
import Link from "next/link";
import { ApartmentSlide1, Logo } from "../../../assets/icons";
import Button from "../../common/Button";

const WelcomeStep = ({ setStep }) => {
  return (
    <div className="w-full flex items-stretch myFontFamily ">
      <div className="w-[38%] bg-[#E2E5FF] rounded-l-[24px] pt-7 px-10 sm:flex hidden flex-col gap-y-[76px]">
        <Link href={"#"}>
          <Logo />
        </Link>
        <div className="w-full flex items-center justify-center">
          <ApartmentSlide1 />
        </div>
      </div>
      <div className="sm:w-[62%] w-full rounded-r-[24px] sm:pl-[38px] sm:pr-[70px] relative sm:pt-[84px] sm:pb-0 pb-6 pt-6 pr-6 pl-6">
        <div className="sm:hidden block mb-6">
          <Link href={"#"}>
            <Logo />
          </Link>
        </div>
        <h3 className="sm:text-[28px] text-[21px] text-[#070707] font-semibold sm:leading-9 leading-[26px] mb-4 sm:max-w-full max-w-[241px]">Welcome to ApartmentGoats</h3>
        <p className="text-[#FF6525] font-medium sm:mb-5 mb-3 sm:text-base text-sm sm:leading-[26px] leading-[18px]">The most rewarding search ever.</p>
        <p className="text-[#5C5C6C] sm:mb-[79px] mb-6 sm:text-base text-sm sm:leading-[26px] leading-[21px]">
          Apartment Goats is a rental marketplace pioneering cash back on rent. We recently acquired UMoveFres, the leading apartment locating company in Texas. We're rolling out their service while
          we make some changes to our site. Work with a UMoveFree locator to help you search and sign with confidence.
        </p>
        <div className="w-full flex sm:flex-row flex-col justify-between items-center sm:absolute relative sm:bottom-[35px]  sm:right-0 sm:left-0 sm:px-9 gap-y-8">
          <div className="flex items-center gap-x-3">
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#FF6525]  cursor-pointer"></div>
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#C1C1C1B2] bg-opacity-80 hover:bg-opacity100 cursor-pointer" onClick={() => setStep("rebate")}></div>
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#C1C1C1B2] bg-opacity-80 hover:bg-opacity100 cursor-pointer" onClick={() => setStep("locator")}></div>
          </div>
          <Button
            icon={null}
            onClick={() => setStep("rebate")}
            classNames=" bg-[#FF6525] text-base leading-[19.2px] hover:scale-105 transition-transform duration-250  sm:w-fit w-full py-[13px]  px-6 text-[#FEFEFE] font-[600] rounded-[99px]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStep;
