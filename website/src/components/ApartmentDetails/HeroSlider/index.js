import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { OpenMapIcon } from "../../../assets/icons";
import { extractImage } from "src/utils/helpers";

const HeroSlider = ({ images }) => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_35391)">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 42 3)" fill="white" shape-rendering="crispEdges" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.8978 17.4598C23.7478 17.3098 23.6778 17.1198 23.6778 16.9298C23.6778 16.7398 23.7478 16.5398 23.8978 16.3998C24.1878 16.1098 24.6678 16.1098 24.9578 16.3998L31.0278 22.4698C31.3178 22.7598 31.3178 23.2398 31.0278 23.5298L24.9578 29.5998C24.6678 29.8898 24.1878 29.8898 23.8978 29.5998C23.6078 29.3098 23.6078 28.8298 23.8978 28.5398L28.688 23.7496L13.4975 23.7496C13.0875 23.7496 12.7475 23.4096 12.7475 22.9996C12.7475 22.5896 13.0875 22.2496 13.4975 22.2496H28.6876L23.8978 17.4598Z"
                fill="#22223B"
              />
            </g>
            <defs>
              <filter id="filter0_d_0_35391" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="2" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_35391" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_35391" result="shape" />
              </filter>
            </defs>
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
          <g filter="url(#filter0_d_0_35384)">
            <rect x="7" y="3" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.1022 17.4598C25.2522 17.3098 25.3222 17.1198 25.3222 16.9298C25.3222 16.7398 25.2522 16.5398 25.1022 16.3998C24.8122 16.1098 24.3322 16.1098 24.0422 16.3998L17.9722 22.4698C17.6822 22.7598 17.6822 23.2398 17.9722 23.5298L24.0422 29.5998C24.3322 29.8898 24.8122 29.8898 25.1022 29.5998C25.3922 29.3098 25.3922 28.8298 25.1022 28.5398L20.312 23.7496L35.5025 23.7496C35.9125 23.7496 36.2525 23.4096 36.2525 22.9996C36.2525 22.5896 35.9125 22.2496 35.5025 22.2496H20.3124L25.1022 17.4598Z"
              fill="#22223B"
            />
          </g>
          <defs>
            <filter id="filter0_d_0_35384" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-3" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_35384" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_35384" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={`w-full details-hero-slider`}>
      <Slider {...setting}>
        {images?.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute bg-white px-4 py-1.5 left-4 top-4 rounded-[30px] flex justify-center items-center gap-x-2 sm:hidden">
              <OpenMapIcon />
              <p className="text-13px leading-5 text-brand">Map</p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-[200px] bg-[rgba(0,0,0,0.75)] px-4 py-1.5 text-white">
              <span className="block text-13px font-medium leading-5">
                {idx + 1} / {images.length || 0}
              </span>
            </div>
            <img src={item?.attributes?.url} alt="author" className="w-full min-h-[211px] sm:min-h-[328px] sm:max-h-[328px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
