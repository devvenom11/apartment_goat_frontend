import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = ({ classNames = "slider-container", settings, children }) => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...settings
    }
    return (
        <div className={classNames}>
            <Slider {...setting}>
                {children}
            </Slider>
        </div>
    )
}

export default SliderSection