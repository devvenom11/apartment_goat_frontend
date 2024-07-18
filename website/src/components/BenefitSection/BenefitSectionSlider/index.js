import React from "react";
import { ArrowUpIcon } from "../../../assets/icons";
import Button from "../../common/Button";
import SliderSection from "../../common/Slider";
import data from "./data";

const BenefitSectionSlider = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0)" fill="#DBD7D3" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.8978 18.4596C25.7478 18.3096 25.6778 18.1196 25.6778 17.9296C25.6778 17.7396 25.7478 17.5396 25.8978 17.3996C26.1878 17.1096 26.6678 17.1096 26.9578 17.3996L33.0278 23.4696C33.3178 23.7596 33.3178 24.2396 33.0278 24.5296L26.9578 30.5996C26.6678 30.8896 26.1878 30.8896 25.8978 30.5996C25.6078 30.3096 25.6078 29.8296 25.8978 29.5396L30.688 24.7493L15.4975 24.7493C15.0875 24.7493 14.7475 24.4093 14.7475 23.9993C14.7475 23.5893 15.0875 23.2493 15.4975 23.2493H30.6876L25.8978 18.4596Z"
              fill="#22223B"
            />
          </svg>
        </div>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", zIndex: "10" }} onClick={onClick}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="#DBD7D3" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1022 18.4596C22.2522 18.3096 22.3222 18.1196 22.3222 17.9296C22.3222 17.7396 22.2522 17.5396 22.1022 17.3996C21.8122 17.1096 21.3322 17.1096 21.0422 17.3996L14.9722 23.4696C14.6822 23.7596 14.6822 24.2396 14.9722 24.5296L21.0422 30.5996C21.3322 30.8896 21.8122 30.8896 22.1022 30.5996C22.3922 30.3096 22.3922 29.8296 22.1022 29.5396L17.312 24.7493L32.5025 24.7493C32.9125 24.7493 33.2525 24.4093 33.2525 23.9993C33.2525 23.5893 32.9125 23.2493 32.5025 23.2493H17.3124L22.1022 18.4596Z"
            fill="#22223B"
          />
        </svg>
      </div>
    );
  }
  return (
    <section className="px-[16px] pt-[6px] pb-[6px] bg-[#F5EEE8] sm:hidden block">
      <SliderSection
        classNames="benefit_slider"
        settings={{
          dots: false,
          slidesToShow: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          infinite: false,
        }}
        forcedMobileSlides={undefined}
      >
        {data?.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="w-[279px] rounded-[310px] bg-[#22223B] pt-8 mx-auto mb-8">{item?.icon}</div>
              <div className="mb-4 min-h-[230px]">
                <h2 className="text-[30px] leading-[32px] font-semibold text-[#22223B] mb-4">{item?.title}</h2>
                <p className="text-[14px] leading-[21px] text-[#5C5C6C]">{item?.description}</p>
              </div>
              <div className="flex w-full justify-end items-center">
                <Button
                  icon={<ArrowUpIcon />}
                  classNames={"text-[16px] leading-[19px] font-semibold px-[48px] py-[12px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center"}
                  onClick={undefined}
                >
                  Get Started
                </Button>
              </div>
            </div>
          );
        })}
      </SliderSection>
    </section>
  );
};

export default BenefitSectionSlider;
