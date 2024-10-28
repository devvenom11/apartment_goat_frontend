import React, { useEffect, useState } from "react";
import ApartmentForm from "../ApartmentForm";
import BreadCrumbs from "./BreadCrumbs";
import MoveIn from "./MoveIn";
import PropertyHighlight from "./PropertyHighlight";
import Divider from "../../common/Divider";
import FloorPlans from "./FloorPlans";
import { CrossIcon, Logo } from "../../../assets/icons";
import Button from "../../common/Button";
import Faq from "../FAQ";
import Amenities from "./Amenities";
import PropertyDetails from "../PropertyDetails";
import AboutViceroy from "../AboutViceroy";
import Neighborhood from "../Neighborhood";
import NearbyProperty from "../NearbyProperties";
import Link from "next/link";
import LogoImg from "../../../assets/ApartmentDetails/Logo.png";
import StickyBox from "react-sticky-box";
import SecondaryButton from "../../common/Button/secondary";
import { FAQsDATA, propertyDetailData } from "src/utils/data";
const MainDetails = ({data,units,nearProperties}) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-[#2a343a] myFontFamily">
      <div className="xl:mt-12  mb-10 flex justify-between overflow-x-hidden md:px-7 lg:overflow-x-visible xl:mx-auto xl:max-w-[1168px] xl:px-0">
        <div className="mx-auto w-[100%] max-w-[1168px] xl:mx-0 xl:w-auto xl:max-w-[752px]">
          <BreadCrumbs data={data}/>
          <div className="mx-5 mb-8 border-b border-b-border-light pb-9 md:mx-0 md:mb-9 mt-[18px] md:pb-[42px]">
            <MoveIn data={data} />
          </div>
          <PropertyHighlight data={data} />
          <FloorPlans data={units}/>
          <aside className="flex flex-col md:flex-row md:items-center rounded-xl border border-border-light p-6  shadow-[0_1px_3px_rgba(23,25,35,0.04)]  md:gap-6 mx-5 mb-11 md:mx-0 md:mb-14">
            <div>
              <h6 className="mx-auto mb-1 text-[18px] font-semibold leading-6 md:mb-0">
                Stop searching <span className="sm:hidden">apartments</span> on your own!
              </h6>
              <p className="mx-auto mb-4 mt-4 text-[16px] leading-6 text-gray-700 md:hidden">
                Let the expert locators from UMoveFree find you the perfect place with a free move or $200 rebate when you sign a lease.
              </p>
              <p className="hidden text-[16px] leading-6 text-gray-700 md:block">
                Let the expert locators from UMoveFree find you the perfect place with a free move or $200 rebate when you sign a lease.
              </p>
            </div>
            <div className="flex flex-col gap-y-2.5 items-center">
              <SecondaryButton onClick={() => {}} classNames=" bg-[#FFD289]    py-[13px]  px-[32px] text-[#22223B] font-[600] rounded-[99px] whitespace-nowrap">
                Work with Locator
              </SecondaryButton>
              <span className="">
                <img loading="eager" src={LogoImg.src} alt="UMoveFree Logo" width="120" height="20" />
              </span>
            </div>
          </aside>
          <Amenities data={data}/>

          <PropertyDetails data={propertyDetailData} />
          <AboutViceroy data={data} />

          {/* <Neighborhood /> */}
          <NearbyProperty data={nearProperties}/>
          <Divider height="1px" color="#DBDBDB" marginY={"my-9"} />
          <Faq data={FAQsDATA}/>
        </div>

        <div className="relative hidden xl:block  xl:w-[336px]">
          <StickyBox offsetTop={isActive ? 20 : 200} offsetBottom={10}>
            <div
              className={`w-full ${!isActive ? "absolute" : ""}   z-[3] pt-8 px-6 pb-6 rounded-6 left-0 right-0  -top-74 rounded-xl border border-solid border-border-light bg-white shadow-[0px_2px_8px_rgba(21,26,29,0.08)] `}
            >
              <ApartmentForm />
            </div>
          </StickyBox>
        </div>
      </div>
      {!isResponsive && (
        <div className="w-full border-t fixed bottom-0 bg-white z-50 p-4 xl:hidden flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-[#22223B] mb-[1px]">$200 Rebate/Free Move</h4>
            <Link href="#">
              <p className="text-xs text-brand">Learn more</p>
            </Link>
          </div>
          <Button
            icon={null}
            onClick={() => setIsResponsive(!isResponsive)}
            classNames=" bg-brand hover:scale-105 transition-transform duration-250 text-sm   py-[12px]  px-[17px] text-[#FEFEFE] font-[600] rounded-[99px]"
          >
            I’m Interested
          </Button>
        </div>
      )}
      {isResponsive && (
        <div className={`xl:hidden  bg-white fixed top-0 bottom-0 left-0 right-0 overflow-y-auto z-50 `}>
          <div className="p-3 absolute right-0 opacity-50">
            <span className="cursor-pointer" onClick={() => setIsResponsive(!isResponsive)}>
              <CrossIcon />
            </span>
          </div>
          <div className="w-full  px-4 pb-6">
            <ApartmentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDetails;