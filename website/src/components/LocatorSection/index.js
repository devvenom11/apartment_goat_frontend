import React from "react";
import { ArrowUpIcon } from "../../assets/icons";
import ImageTower from "../../assets/landingPage/Frame 1160444588.png";
import Button from "../common/Button";

const LocatorSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto myFontFamily">
      <div className="mx-4 md:mx-[45px] my-[60px] md:my-[120px] gap-[-21px] lg:gap-[190.16px] bg-[#F5EEE8] rounded-[32px] flex flex-col lg:flex-row overflow-hidden">
        <div className="p-[24px] lg:ml-[48px] pt-[42px]">
          <p className="text-[35px] font-[600]">
            Work with a locator and earn up to <span className="text-brand text-[35px] font-[600]">$450</span>
          </p>
          <ul className="mt-[16px] mb-[37px] leading-[35.52px] text-[16px] ">
            <li className="flex items-center gap-[5px]">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Get a curated list sent to you
            </li>
            <li className="flex items-center gap-[5px]">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Save time, we easily uncover the best deals in Chicago
            </li>
            <li className="flex items-center gap-[5px]">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              We schedule your appointments <span className="text-[16px] font-[500] text-brand">- FREE!</span>
            </li>
          </ul>
          <Button
            onClick={() => { }}
            icon={<ArrowUpIcon />}
            classNames="hover:scale-105 transition-transform duration-250 py-[18.5px] mb-[40px] px-[32px] flex gap-[4px] bg-brand rounded-[99px] text-[16px] text-[#FEFEFE] font-[600] text-center "
          >
            Get Recommendations
          </Button>
        </div>

        <img className="max-w-[565px] pr-0 lg:pr-[77.87px] border" src={ImageTower.src} alt="" />
      </div>
    </section>
  );
};

export default LocatorSection;
