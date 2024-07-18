import React, { useEffect } from "react";
import { SpecialOfferIcon } from "../../../../assets/icons";
import SecondaryButton from "../../../common/Button/secondary";
import { useRouter } from "next/navigation";

const MoveIn = ({ data }) => {
  const bedroomRegex = /Bedrooms[\s\S]*?(\d+)/;
  const bathroomRegex = /Bathrooms[\s\S]*?(\d+)/;
  const rentRegex = /Monthly Rent([\s\S]*?)Bedrooms/;

  // Function to extract numbers
  function extractNumber(regex, input) {
    if (!input) return;
    const match = input.match(regex);
    if (match) {
      return match[1].trim();
    }
    return null;
  }
  const router = useRouter();
  return (
    data && (
      <div className="w-full">
        <div className="mb-0.5 flex items-center justify-between">
          <div className="flex gap-[5px]">
              <p className="text-[#22223B] text-xl font-semibold md:font-medium leading-6">
                {data.min_price} -{data.max_price}
              </p>
          </div>
          <span className="flex items-center space-x-2 group cursor-pointer">
            <svg
              className="group-hover:fill-current text-[#22223B] group-hover:text-[#E55A5C]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5345 19.8655L20.1283 12.2718C21.9939 10.3968 22.2658 7.33114 20.5033 5.37176C20.0612 4.87799 19.5232 4.47952 18.922 4.20071C18.3208 3.9219 17.669 3.7686 17.0066 3.75018C16.3441 3.73175 15.6848 3.84859 15.0691 4.09355C14.4533 4.33851 13.8939 4.70645 13.4251 5.17489L12.0001 6.60926L10.772 5.37176C8.897 3.50614 5.83138 3.23426 3.872 4.99676C3.37823 5.43878 2.97977 5.97683 2.70096 6.57804C2.42215 7.17925 2.26885 7.831 2.25042 8.49346C2.23199 9.15592 2.34883 9.81518 2.59379 10.431C2.83875 11.0467 3.20669 11.6061 3.67513 12.0749L11.4658 19.8655C11.6079 20.0063 11.8 20.0854 12.0001 20.0854C12.2003 20.0854 12.3923 20.0063 12.5345 19.8655V19.8655Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span className="group-hover:text-[#E55A5C] hidden sm:block">
              Favorite
            </span>{" "}
          </span>
        </div>

        <h1 className="text-[#22223B] mb-0.5 break-words text-2xl font-bold leading-8 md:mb-2 md:text-[44px] md:leading-[48px]">
          {data?.name}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="mb-4 md:mb-0 text-brand text-base font-normal leading-6">
            <address className="cursor-pointer not-italic hover:underline">
              <div
                rel="nofollow"
                className="mb-0.5 md:mb-1"
                // href="/apartments/lewisville-tx?lat=33.046102&amp;lng=-96.9939062&amp;zoom=16"
              >
                <h2>{data?.address.replace('Property Address:',"")}</h2>
              </div>
            </address>

            {(data.beds || data.baths) && (
              <p className="flex items-center leading-6 text-gray-700">
                {data.beds} Bedrooms
                <span className="mx-1.5 block h-[3px] w-[3px] rounded-full bg-gray-700"></span>
                {data.baths} Baths
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <SecondaryButton
              onClick={() => {
                router.push(`#check-availability`);
              }}
              classNames=" flex h-[44px] w-full whitespace-nowrap items-center justify-center rounded-full  bg-white hover:bg-[#ff65251a] py-2 px-6 text-brand font-medium  border-[1px] border-brand md:h-9 md:rounded-[200px]"
            >
              <span className="hidden sm:block mr-1">Check </span> Availability
            </SecondaryButton>{" "}
            <SecondaryButton
              onClick={() => {}}
              classNames=" flex h-[44px] w-full items-center justify-center rounded-full  bg-white hover:bg-[#ff65251a] py-2 px-6 text-brand font-medium  border-[1px] border-brand md:h-9 md:rounded-[200px]"
            >
              <span className="hidden sm:block whitespace-nowrap mr-1">
                Ready to{" "}
              </span>{" "}
              <span>Apply</span>
            </SecondaryButton>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#ff65251a] bg-[#faf7f3] px-4 py-3 md:px-5 md:py-4  ">
          <span className="hidden h-16 w-16 shrink-0 md:block">
            <SpecialOfferIcon />
          </span>
          <div>
            <div className="text-sm leading-5 text-gray-700 md:text-base md:leading-6">
              <h2 className="inline font-semibold text-black-100">
              Special Offers: 
              </h2>
              <p className="inline ml-[5px]">{data?.offers} </p>
            </div>

            <button
              type="button"
              className="text-sm leading-5 text-brand hover:underline"
            >
              Get details about move-in specials
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MoveIn;
