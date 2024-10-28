import React from "react";
import Link from "next/link";
import { ApartmentSlideBuilding1, ApartmentSlideBuilding2, LocationIcon, DotedArrow, FileCheckIcon, Logo, ConfettiIcon } from "../../../assets/icons";
import Button from "../../common/Button";

const RebateStep = ({ setStep }) => {
  return (
    <div className="w-full flex items-stretch myFontFamily">
      <div className="sm:w-[38%] bg-[#F8F8F8] rounded-l-[24px] pt-7 pl-[42px] pr-[22px] sm:flex hidden flex-col gap-y-[49px]">
        <Link href={"#"}>
          <Logo />
        </Link>
        <div className="w-full flex gap-x-4 items-end">
          <ApartmentSlideBuilding2 />
          <ApartmentSlideBuilding1 />
        </div>
      </div>
      <div className="sm:w-[62%] w-full bg-white rounded-r-[24px] sm:pl-[38px] sm:pr-[48px] relative sm:pt-[84px] sm:pb-0 pb-6 pt-6 pl-6 pr-6">
        <div className="sm:hidden block mb-6">
          <Link href={"#"}>
            <Logo />
          </Link>
        </div>
        <h3 className="sm:text-[28px] text-[21px] text-[#070707] font-semibold sm:leading-9 leading-[26px] mb-4 sm:max-w-full max-w-[241px]">Get a free move or $200 rebate</h3>
        <p className="text-[#FF6525] font-medium mb-5 sm:text-base text-sm sm:leading-[26px] leading-[18px]">No catch. Just rewards to help you move forward.</p>
        <div className="w-full sm:mb-[47px] mb-6">
          <div className="w-full flex items-center pl-1 pr-1 sm:gap-x-3 gap-x-3 sm:mb-6 mb-4">
            <div className="sm:w-[82px] sm:h-[82px] w-[56px] h-[56px]  rounded-full bg-[#BADAF9] flex justify-center items-center">
              <LocationIcon />
            </div>
            <DotedArrow />
            <div className="sm:w-[82px] sm:h-[82px] w-[56px] h-[56px]  rounded-full bg-[#FFE7D3] flex justify-center items-center mx-[6px]">
              <FileCheckIcon />
            </div>
            <div className="transform scale-y-[-1] mt-6">
              <DotedArrow />
            </div>
            <div className="sm:w-[82px] sm:h-[82px] w-[56px] h-[56px]  rounded-full bg-[#EBF5E8] flex justify-center items-center">
              <ConfettiIcon />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[130px] pr-5">
              <h6 className="sm:text-[14px] text-[12px] text-[#22223B] sm:leading-[18px] leading-[12px] font-medium text-center sm:mb-4 mb-2">Find a place</h6>
              <p className="sm:text-[12px] text-[10px] text-[#5C5C6C] sm:leading-[19px] leading-[10px] text-center">Work with a Locator of find a place of your own.</p>
            </div>
            <div className="w-[142px] pr-4">
              <h6 className="sm:text-[14px] text-[12px] text-[#22223B] sm:leading-[18px] leading-[12px] font-medium text-center sm:mb-4 mb-2">Sign a lease</h6>
              <p className="sm:text-[12px] text-[10px] text-[#5C5C6C] sm:leading-[19px] leading-[10px] text-center">Sign your nase and add Locator as the referral.</p>
            </div>
            <div className="w-[154px]">
              <h6 className="sm:text-[14px] text-[12px] text-[#22223B] sm:leading-[18px] leading-[12px] font-medium text-center sm:mb-4 mb-2">Get free move/rebate</h6>
              <p className="sm:text-[12px] text-[10px] text-[#5C5C6C] sm:leading-[19px] leading-[10px] text-center">Move in to your new place and collect your reward!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col justify-between items-center sm:absolute relative sm:bottom-[35px]  sm:right-0 sm:left-0 sm:px-9 gap-y-8">
          <div className="flex items-center gap-x-3">
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#C1C1C1B2] bg-opacity-80 hover:bg-opacity-100 cursor-pointer" onClick={() => setStep("welcome")}></div>
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#FF6525]  cursor-pointer"></div>
            <div className="sm:w-3 w-2 sm:h-3 h-2 rounded-full bg-[#C1C1C1B2] bg-opacity-80 hover:bg-opacity-100 cursor-pointer" onClick={() => setStep("locator")}></div>
          </div>
          <Button
            icon={null}
            onClick={() => setStep("locator")}
            classNames="sm:w-fit w-full  bg-[#FF6525] text-base leading-[19px] hover:scale-105 transition-transform duration-250    py-[13px]  px-6 text-[#FEFEFE] font-[600] rounded-[99px]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RebateStep;
