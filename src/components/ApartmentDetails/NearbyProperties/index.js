"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import {
  extractImage,
  extractSlugAndId,
} from "src/utils/helpers";
import LoadingCards from "../../common/LoadingCard";
import Link from "next/link";
import { IMAGE_PATH } from "src/utils/constants";
const NearbyProperty = ({ data, cardsLoading }) => {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <div
          className={`z-50 ${className}`}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        >
          <div className="w-9 h-9 drop-shadow-[0px_2px_8px_rgba(21,26,29,0.08)] rounded-full bg-white next_arr_cus flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.46967 3.96967C8.76256 3.67678 9.23744 3.67678 9.53033 3.96967L17.0303 11.4697C17.3232 11.7626 17.3232 12.2374 17.0303 12.5303L9.53033 20.0303C9.23744 20.3232 8.76256 20.3232 8.46967 20.0303C8.17678 19.7374 8.17678 19.2626 8.46967 18.9697L15.4393 12L8.46967 5.03033C8.17678 4.73744 8.17678 4.26256 8.46967 3.96967Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,

        settings: {
          arrows: false,
          slidesToShow: 1.35,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="px-4 lg:px-0" id="nearby-properties-section">
      <p className="text-[24px] font-bold leading-[30px] mt-[70px]">Nearby Properties</p>
      <div className="flex gap-4 flex-wrap my-2">
        {cardsLoading && [1, 2]?.map((item) => <LoadingCards key={item} />)}
      </div>
      {!cardsLoading ? (
        data && data?.length > 0 ? (
          <div className="mt-6 nearby-slider ">
            <Slider {...settings}>
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[285px] min-w-[285px] border-[1px] shadow-[#1A1D1F1A] bg-[#FFFFFF] rounded-lg flex gap-[16px]"
                >
                  <Link href={`/apartment/${item?.neighborhood}?building_id=${item?.id}&unit_id=${item?.unit_id}`}>
                    <img
                      src={`${IMAGE_PATH}${item?.images?.[0].file}.283x145.webp`}
                      alt={item.name}
                      className="w-full  h-[145px] rounded-t-lg"
                    />
                    <div className="relative flex grow flex-col rounded-b-lg border-x border-b p-4">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-lg font-semibold leading-6 min-h-10 ">
                          {item?.price}
                        </p>
                      </div>
                      <h3 className="mb-0.5 truncate text-base font-semibold leading-5">
                        {item?.name}
                      </h3>
                      <p className="flex items-center leading-6 text-[#71767a] min-h-10">
                        {item?.bedrooms} bed - {item?.bathrooms} bath
                      </p>
                      <div className="text-[14px] font-normal leading-[18px] text-[#71767a]">
                        Not eligible for reward
                      </div>

                      <div className="absolute right-4 top-4 flex gap-2.5">
                        <div className="cursor-pointer hover:opacity-75 active:scale-105 text-gray-900">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5345 19.8655L20.1283 12.2718C21.9939 10.3968 22.2658 7.33114 20.5033 5.37176C20.0612 4.87799 19.5232 4.47952 18.922 4.20071C18.3208 3.9219 17.669 3.7686 17.0066 3.75018C16.3441 3.73175 15.6848 3.84859 15.0691 4.09355C14.4533 4.33851 13.8939 4.70645 13.4251 5.17489L12.0001 6.60926L10.772 5.37176C8.897 3.50614 5.83138 3.23426 3.872 4.99676C3.37823 5.43878 2.97977 5.97683 2.70096 6.57804C2.42215 7.17925 2.26885 7.831 2.25042 8.49346C2.23199 9.15592 2.34883 9.81518 2.59379 10.431C2.83875 11.0467 3.20669 11.6061 3.67513 12.0749L11.4658 19.8655C11.6079 20.0063 11.8 20.0854 12.0001 20.0854C12.2003 20.0854 12.3923 20.0063 12.5345 19.8655V19.8655Z"
                              stroke="#2A343A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <span className="text-center w-full py-10">No properties found</span>
        )
      ) : null}
    </div>
  );
};

export default NearbyProperty;
