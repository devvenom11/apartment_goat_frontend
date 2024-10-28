import React, { useEffect, useRef, useState } from "react";
import { LeasingBuildingIcon, PerfectHomeBuildingIcon, SimpleLeasingBuildingIcon } from "../../assets/icons";
import Sticky from "react-stickynode";
import { getElementVisibility } from "../../utils/helpers";

const BenefitSection = () => {
  return (
    <section className="bg-[#F5EEE8] pt-[126px] pb-[129px] sm:block hidden myFontFamily">
      <div className="px-4 md:px-[45px] mx-auto">
        <Sticky enabled={true} top={129} bottomBoundary={"#benefits"}>
          <div className="mx-auto absolute inset-0 min-w-[361px] max-w-[361px] rounded-[310px] py-[300px] bg-[#22223B] mix-blend-saturation"></div>
        </Sticky>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-[36px] mb-[148px]">
          <div className="lg:w-1/3 flex items-center">
            <div className="mt-[48px] lg:mt-[0px] ">
              <h2 className="mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]">We're Revolutionizing Your Leasing Experience</h2>
              <p className="text-[18px] leading-[31px] text-[#5C5C6C]">
                ApartmentGoats is on a mission to create the world’s most extensive rental platform, revolutionizing how apartments are found and leased. We want to make moving as effortless and
                rewarding as possible, offering a helping hand and a little extra cash to make life easier.
              </p>
            </div>
          </div>

          <FirstBuilding />
          <div className="lg:hidden min-w-[361px] max-w-[361px] rounded-[310px] bg-[#22223B] pt-14">
            <LeasingBuildingIcon />
          </div>

          <div className="lg:w-1/3" />
        </div>
        <div id="benefits" className="flex flex-col lg:flex-row justify-between gap-x-[36px] mb-[50px] pb-[98px]">
          <div className="w-1/3"></div>
          <SecondBuilding />
          <div className="lg:hidden w-1/3 min-w-[361px] max-w-[361px] rounded-[310px] bg-[#22223B] pt-14">
            <SimpleLeasingBuildingIcon />
          </div>
          <div className="lg:w-1/3 flex items-center">
            <div className="mt-[48px] lg:mt-[0px] ">
              <h2 className="mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]">Leasing Made Simple for You</h2>
              <p className="text-[18px] leading-[31px] text-[#5C5C6C]">
                We offer the best apartment search experience by providing exclusive building specials, post-signing cash back, and free expert guidance – making finding an apartment easier than ever
                before.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-[36px]">
          <div className="lg:w-1/3 flex items-center">
            <div className="mt-[48px] lg:mt-[0px] ">
              <h2 className="mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]">Find Your Perfect Home</h2>
              <p className="text-[18px] leading-[31px] text-[#5C5C6C]">
                Find your perfect home easily with our customization feature. Choose from pet-friendly options, gyms, balconies with views, or pools to match your lifestyle, all in one simple search.{" "}
              </p>
            </div>
          </div>
          <ThirdBuilding />
          <div className="lg:hidden w-1/3 min-w-[361px] max-w-[361px] rounded-[310px] bg-[#22223B] pt-14">
            <PerfectHomeBuildingIcon />
          </div>
          <div className="lg:w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

const FirstBuilding = () => {
  const ref = useRef(null);
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    if (!ref || !ref?.current || typeof window === 'undefined') {
      return;
    }
    const handleScroll = () => {
      const visible = getElementVisibility(ref.current);
      let opacity = 1;
      if (visible <= 50) {
        opacity = 1;
      } else {
        opacity = 1 - (visible - 50) / 50;
      }
      setVisibility(opacity);
    };
    window.addEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visibility,
        transform: `scale(${visibility})`,
        transformOrigin: "top",
      }}
      className="hidden z-20 relative lg:flex items-center justify-center w-1/3 pt-6"
    >
      <LeasingBuildingIcon />
    </div>
  );
};
const SecondBuilding = () => {
  const ref = useRef(null);
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {
    if (!ref || !ref?.current || typeof window === 'undefined') {
      return;
    }
    const handleScroll = () => {
      const visible = getElementVisibility(ref.current);
      let opacity = 0;
      if (visible <= 50) {
        opacity = visible / 50;
      } else {
        opacity = 1 - (visible - 50) / 50;
      }
      setVisibility(opacity);
    };
    window.addEventListener("scroll", handleScroll);
  }, [ref]);
  return (
    <div ref={ref} style={{ opacity: visibility, transform: `scale(${visibility})` }} className="hidden relative z-20 w-1/3 lg:flex justify-center transition-transform duration-100">
      <SimpleLeasingBuildingIcon />
    </div>
  );
};
const ThirdBuilding = () => {
  const ref = useRef(null);
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {
    if (!ref || !ref?.current || typeof window === 'undefined') {
      return;
    }
    const handleScroll = () => {
      const visible = getElementVisibility(ref.current);
      let opacity = 0;
      if (visible >= 40 && visible < 50) {
        opacity = visible / 50;
      } else if (visible >= 50) {
        opacity = 1;
      }
      setVisibility(opacity);
    };
    window.addEventListener("scroll", handleScroll);
  }, [ref]);
  return (
    <div
      ref={ref}
      style={{
        opacity: visibility,
        transform: `scale(${visibility})`,
        transformOrigin: "bottom",
      }}
      className="hidden w-1/3 relative z-20 lg:flex justify-center transition-transform duration-100"
    >
      <PerfectHomeBuildingIcon />
    </div>
  );
};
