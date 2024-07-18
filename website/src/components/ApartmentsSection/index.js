import React from "react";
import HeadingSection from "../HeadingSection";
import Button from "../common/Button";
import { ArrowUpIcon, BlackArrowUpIcon } from "../../assets/icons";
import data from "./data";
import Link from "next/link";

const ApartmentsSection = () => {
  return (
    <section className="bg-[#F8F8F8] pb-[22px] md:pb-[60px] pt-[60px] md:pt-[120px] myFontFamily">
      <div className="px-4 md:px-[45px] mx-auto">
        <div className="pb-8 md:pb-[60px] md:px-[27px]">
          <HeadingSection heading={"Best apartments in Chicago"}>
            <Button
              icon={<BlackArrowUpIcon fill="#070707" />}
              classNames={
                "text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-transparent text-[#22223B] rounded-[99px] flex items-center border border-[#22223B]"
              }
              onClick={undefined}
            >
              Find apartments
            </Button>
          </HeadingSection>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-hidden ">
          <div className="flex lg:grid  lg:grid-cols-4 gap-[1vw]">
            {data?.map((item) => {
              return (
                <Link
                  href={`/apartments/albany-park-chicago-il?type=${item?.url}`}
                >
                  <div className="p-[163px] relative overflow-hidden rounded-t-3xl">
                    <img
                      className="absolute w-full h-full top-0 left-0 bg-cover"
                      src={item.img.src}
                      alt="card"
                    />
                  </div>
                  <div className="px-4 pt-6 pb-12 bg-[#FFFFFF] rounded-bl-[16px] rounded-br-[16px]">
                    <div className="max-w-[294px]">
                      <h2 className="text-[22px] leading-[28px] font-semibold text-[#070707] min-h-[56px]">
                        {item?.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Button
          onClick={() => {}}
          icon={<ArrowUpIcon />}
          classNames="mt-10 w-full bg-[#22223B] hover:scale-105 transition-transform duration-250 flex md:hidden justify-center gap-[4px] items-center mb-6 md:mb-[83px] py-[14px] md:py-[18.5px] px-[32px] text-[#FEFEFE] font-[600] rounded-[99px]"
        >
          Find Apartments
        </Button>
      </div>
    </section>
  );
};

export default ApartmentsSection;
