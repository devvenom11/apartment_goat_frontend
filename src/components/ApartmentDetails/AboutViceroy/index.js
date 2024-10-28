import React from "react";
import SecondaryButton from "../../common/Button/secondary";

const AboutViceroy = ({data}) => {
  
  return (
    <section id="about-section"  className="mx-5 mb-8 border-b border-b-border-light pb-9 md:mx-0 md:mb-9 md:pb-[42px] m-auto max-w-screen-2xl">
      <h3 className="mb-5 text-2xl font-bold">About {data?.name}</h3>
      <p className="mb-4 text-gray-700">{data?.description}</p>

      <div className="mb-6">
        <h5 className="mb-2 text-lg font-semibold">Contact Information</h5>
        <ul>
          <li className="flex flex-wrap">
            <span className="font-medium mr-1">Phone: &nbsp;</span>
            <a href={`tel:+${`(859) 888-1200`}`} className="cursor-pointer text-brand hover:underline active:underline">
            (859) 888-1200 (Pin:49735)
            </a>
          </li>
          <li className="flex flex-wrap">
            <span className="font-medium">Website:&nbsp;</span>
            <a
              href="https://www.mainandmilltx.com/"
              title="https://www.mainandmilltx.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cursor-pointer truncate text-brand hover:underline active:underline"
            >
              {data?.website}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-x-2">
        <SecondaryButton
          onClick={() => {}}
          classNames=" flex whitespace-nowrap text-sm items-center justify-center rounded-full  bg-white hover:bg-[#ff65251a] py-2 px-[26px] text-brand font-medium  border-[1px] border-brand md:rounded-[200px]"
        >
          Ready to Apply
        </SecondaryButton>
        <SecondaryButton
          onClick={() => {}}
          classNames=" flex whitespace-nowrap text-sm items-center justify-center rounded-full  bg-white hover:bg-[#ff65251a] py-2 px-[26px] text-brand font-medium  border-[1px] border-brand md:rounded-[200px]"
        >
          Call Property
        </SecondaryButton>
      </div>
    </section>
  );
};

export default AboutViceroy;
