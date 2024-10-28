import React, { useEffect, useState } from "react";
import HeadingSection from "../HeadingSection";
import { useInView } from "react-intersection-observer";
import Divider from "../common/Divider";
import { ArrowUpIcon, WriteIcon, SearchBarIcon, MoveIn } from "../../assets/icons";
import Button from "../common/Button";

const FeatureSectionMobile = () => {
  const [searchSize, setSearchSize] = useState(113);
  const [width2, setWidth2] = useState(113);
  const [width3, setWidth3] = useState(113);
  const [buttonToShow, setButtonToShow] = useState(0);
  const [ref, inView] = useInView({
    rootMargin: "0px 0px",
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let initialScroll = 0.0;
    const handleScroll = () => {
      if (inView) {
        if (initialScroll === 0.0) {
          initialScroll = window.scrollY;
        }
        let size = Number((window.scrollY - initialScroll) / 2.5);
        if (size < 280 && size >= 113) {
          setSearchSize(size);
          setButtonToShow(1);
        } else {
          if (560 - size > 113 && 560 - size < 280) {
            setSearchSize(560 - size);
            if (974 - size > 200) setButtonToShow(1);
          }
        }
        let size2 = size - 224;
        if (size2 < 280 && size2 >= 113) {
          setWidth2(size2);
          if (size2 > 200) setButtonToShow(2);
        } else {
          if (560 - size2 > 113 && 560 - size2 < 280) {
            setWidth2(560 - size2);
            if (560 - size2 > 200) setButtonToShow(2);
          }
        }
        let size3 = size2 - 224;
        if (size3 < 280 && size3 >= 113) {
          setWidth3(size3);
          if (size3 > 200) setButtonToShow(3);
        } else {
          if (560 - size3 > 113 && 560 - size3 < 280) {
            setWidth3(560 - size3);
            if (560 - size3 > 200) setButtonToShow(3);
          }
        }
      } else {
        setSearchSize(113);
        setWidth2(113);
        setWidth3(113);
        setButtonToShow(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);
  return (
    <section ref={ref} className="mb-[128px] md:mb-[139px] px-4 md:px-[45px] mx-auto">
      <div className="md:mb-[22px] mb-4">
        <HeadingSection heading={"Earn Cash Back On Your Next Lease"}>
          <p className="text-[48px] leading-[55px] font-semibold text-[#22223B]">3 easy steps</p>
        </HeadingSection>
      </div>
      <div className="md:mt-[32px] mt-0 ">
        <div className="md:mb-[33px] mb-[11px]">
          <Divider />
        </div>
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="mr-0 lg:mr-[90px]">
            <p className="text-2xl leading-[36px] font-semibold text-right lg:text-left text-[#22223B]">01</p>
          </div>
          <div className="w-[40%]">
            <div style={{ width: `${searchSize}px`, height: `${searchSize}px` }} className="bg-[#EAF3FC] rounded-full flex justify-center items-center ">
              <SearchBarIcon width={searchSize / 2} height={searchSize / 2} />
            </div>
          </div>

          <div className="min-w-[236px] mr-[93px] md:mt-0 mt-6 md:mb-0 mb-2">
            <p className="text-2xl leading-[36px] font-semibold text-[#22223B]">Explore Your Options</p>
          </div>
          <div className="max-w-[460px]">
            <p className="mb-6 text-sm leading-[21px] text-[#5C5C6C]">Uncover your perfect Chicago home - with 98% of the cityat your fingertips.</p>
            <div className={`transition-all duration-1000 delay-250 ease-in-out origin-center ${buttonToShow === 1 || buttonToShow === 4 ? "opacity-1" : "opacity-0"}`}>
              <Button icon={<ArrowUpIcon />} classNames="text-[16px] leading-[19px] font-semibold px-[36px] py-[10px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center" onClick={undefined}>
                Find apartments
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[48px] md:mt-[32px]">
        <div className="md:mb-[33px] mb-[12px]">
          <Divider />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mr-0 lg:mr-[90px]">
            <p className="text-2xl leading-[36px] text-right lg:text-left font-semibold text-[#22223B]">02</p>
          </div>
          <div className="w-[40%]">
            <div style={{ width: `${width2}px`, height: `${width2}px` }} className="rounded-full bg-[#FEE9D4] flex justify-center items-center">
              <WriteIcon width={width2 / 2} height={width2 / 2} />
            </div>
          </div>

          <div className="min-w-[236px] mr-[93px] md:mt-0 mt-6 md:mb-0 mb-2">
            <p className="text-2xl leading-[36px] font-semibold text-[#22223B]">Secure Your Space</p>
          </div>
          <div className="max-w-[460px]">
            <p className="mb-4 md:mb-6 text-sm leading-[21px] text-[#5C5C6C]">Reach out to apartments, set up tours, and apply. Make sure you add your locator as your referral source.</p>
            <div className={`transition-all duration-1000 delay-250 ease-in-out transform origin-center ${buttonToShow === 2 || buttonToShow === 4 ? "opacity-1" : "opacity-0"}`}>
              <Button icon={<ArrowUpIcon />} classNames="text-[16px] leading-[19px] font-semibold px-[36px] py-[10px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center" onClick={undefined}>
                Find apartments
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[32px]">
        <div className="md:mb-[33px] mb-[12px]">
          <Divider />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mr-0 lg:mr-[90px]">
            <p className="text-2xl leading-[36px] font-semibold text-right lg:text-left text-[#22223B]">03</p>
          </div>
          <div className="w-[40%]">
            <div style={{ width: `${width3}px`, height: `${width3}px` }} className="w-[113px] h-[113px] rounded-full bg-[#EBF5E8] flex justify-center items-center">
              <MoveIn width={width3 / 2} height={width3 / 2} />
            </div>
          </div>
          <div className="min-w-[236px] mr-[93px] md:mt-0 mt-6 md:mb-0 mb-2">
            <p className="text-2xl leading-[36px] font-semibold text-[#22223B]">Move In and Earn</p>
          </div>
          <div className="max-w-[460px]">
            <p className="mb-6 text-sm leading-[21px] text-[#5C5C6C]">
              Pay the same rent you'd find anywhere else, but with Apartment Goats you get a cash back rebate when you move in just for signing your lease through us.
            </p>
            <div className={`transition-all duration-1000 delay-250 ease-in-out origin-center ${buttonToShow === 3 || buttonToShow === 4 ? "opacity-1" : "opacity-0"}`}>
              <Button icon={<ArrowUpIcon />} classNames="text-[16px] leading-[19px] font-semibold px-[36px] py-[10px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center" onClick={undefined}>
                Find apartments
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionMobile;
