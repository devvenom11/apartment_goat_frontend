import React from "react";
import { ArrowUpIcon } from "../../assets/icons";
import Button from "../common/Button";
import Divider from "../common/Divider";
import Link from "next/link";

function FeatureItem(props) {
  const { icon, title, count = "01", description, onClick, buttonText, iconBg } = props;

  return (
    <div className="md:mt-[32px] feature-item group">
      <div className="md:mb-[33px] mb-[11px]">
        <Divider />
      </div>
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="mr-0 lg:mr-12 2xl:mr-[90px]">
          <p className="text-2xl leading-[36px] font-semibold text-right lg:text-left text-[#22223B]">{count}</p>
        </div>
        <div className="lg:min-w-[22rem]">
          <div className={`w-28 h-28 p-8 ${iconBg} rounded-full flex justify-center items-center`} data-icon>
            {icon}
          </div>
        </div>

        <div className="lg:min-w-52 lg:mr-12 2xl:mr-24 lg:mt-0 mt-6 lg:mb-0 mb-2">
          <p className="text-2xl leading-[36px] font-semibold text-[#22223B]">{title}</p>
        </div>
        <div className="max-w-[460px] pb-10 md:pb-0 lg:group-last:min-h-[22rem]">
          <p className="mb-6 text-sm leading-[21px] text-[#5C5C6C]">{description}</p>
          <div className={`transition-all duration-1000 delay-250 ease-in-out origin-center`}>
            <div className={`max-w-max`} data-button>
              <Link href={`/apartments/chicago-il`}>
                <Button icon={<ArrowUpIcon />} classNames="text-[16px] leading-[19px] font-semibold px-[36px] py-[10px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center" onClick={onClick}>
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
