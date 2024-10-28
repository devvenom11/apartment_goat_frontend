import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = ({ classNames = "slider-container", settings, children, forcedMobileSlides }) => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1364,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: forcedMobileSlides ?? 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    ...settings,
  };
  return (
    <div className={classNames}>
      <Slider {...setting}>{children}</Slider>
    </div>
  );
};

export default SliderSection;
