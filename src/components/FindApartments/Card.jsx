import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { HeartIcon, HeartIconFilled } from "../../assets/icons";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { API_URL, IMAGE_PATH } from "src/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ item, markerCard }) => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  const [currentSlide, setCurrentSlide] = useState(0);
  const multipleImages = item?.images?.length > 1;
  const [cookies] = useCookies(["token"]);
  const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   const likedBy = item.attributes.liked_by;
  //   let favArray = [];
  //   if (Array.isArray(likedBy)) {
  //     favArray = likedBy;
  //   } else if (typeof likedBy === "number" || typeof likedBy === "string") {
  //     favArray = [likedBy];
  //   }
  //   const isFav = favArray.includes(userData.id);
  //   setIsLiked(isFav);
  // }, [item, userData.id]);

  const handleHeartIcon = async (item, isFav) => {
    // const token = cookies.token;
    // if (token) {
    //   let favArray = item.attributes.liked_by || [];
    //   if (isFav) {
    //     favArray = favArray.filter((sin) => sin !== userData.id);
    //   } else {
    //     favArray.push(userData.id);
    //   }
    //   const payload = {
    //     data: {
    //       liked_by: favArray,
    //     },
    //   };
    //   try {
    //     await fetch(`${API_URL}/api/properties/${item.id}`, {
    //       method: "PUT",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     });
    //     setIsLiked(!isFav);
    //   } catch (error) {
    //     toast.error(
    //       "Could not add this property to favorites, please try again later"
    //     );
    //     setIsLiked(false);
    //   }
    // } else {
    //   router.push("/register");
    // }
  };

  const settings = {
    dots: multipleImages,
    infinite: multipleImages,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      multipleImages && currentSlide < item?.images.length - 1 ? (
        <SampleNextArrow />
      ) : null, // Show next arrow if not on the last slide
    prevArrow: multipleImages && currentSlide > 0 ? <SamplePrevArrow /> : null, // Show prev arrow only if not on the first slide
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "0px",
          bottom: "0px",
          margin: "auto",
          alignItems: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "85px",
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.75,
          margin: "0 5px",
        }}
      />
    ),
  };
  
  return (
    <div
      className={`${markerCard ? "max-w-[285px] min-w-[100%] md:min-w-[295px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 absolute bottom-5 left-5 rounded-lg" : "rounded-lg"} max-w-[285px] min-w-[100%] md:min-w-[285px] overflow-hidden  border bg-[#FFFFFF] grow md:grow-0  min-h-[320px]`}
    >
      <ToastContainer />

      <section className="  rounded-xl bg-white h-[320px] w-full hover:shadow-[0_4px_4px_rgba(20,21,26,0.1)]">
        <div className="relative">
          <a
            href={`/apartment/${item?.neighborhood}?building_id=${item?.id}&unit_id=${item?.unit_id}`}
          >
            <div className="relative w-full text-white overflow-hidden h-[320px] rounded-xl">
              <div className="group relative">
                <div className=" ">
                  <Slider {...settings}>
                    {item?.images?.map((photo, idx) => (
                      <div className="w-full min-w-full duration-300 ease-out">
                        <img
                          loading="lazy"
                          src={`${IMAGE_PATH}${photo.file}.283x145.webp`}
                          width="480"
                          height="208"
                          alt="Madison - Photo 1 of 5"
                          className="w-full object-cover h-[320px]"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="rounded-b-xl px-4 pt-3 absolute bottom-0 w-full bg-gradient-to-t from-[#0C2018] to-[#1E4D3A00] pb-4 text-white">
              <h2 className="truncate text-base font-medium">{item?.name}</h2>
              <div className="mt-1 text-sm font-book text-alfa-black-60 text-white">
                {item?.bedrooms} bedrooms •&nbsp; {item?.bathrooms}{" "}
                bathrooms&nbsp;
              </div>
              <div className="mt-2 flex items-center justify-between gap-1">
                <div className="text-lg font-bold">${item.price}</div>
                <div className="rounded-lg px-2 py-1 text-xs font-medium bg-[#FFE6D9] text-brand">
                  $500 Cash back
                </div>
              </div>
            </div>
          </a>

          <div className="absolute right-3 top-3">
            <button
              onClick={() => handleHeartIcon(item, isLiked)}
              className="cursor-pointer text-gray-900 w-8 h-8 rounded-full border bg-white flex justify-center items-center hover:bg-elevation-50"
            >
              {isLiked ? <HeartIconFilled /> : <HeartIcon />}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="  absolute m-auto right-0 top-0 bottom-0">
      {" "}
      <button className="bg-[#0000009b] absolute bottom-0 top-0 z-10 my-auto hidden h-8 w-8 items-center justify-center rounded-lg bg-alfa-black-80 text-white   group-hover:flex right-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9766 9.99865L6.85156 5.87365L8.0299 4.69531L13.3332 9.99865L8.0299 15.302L6.85156 14.1236L10.9766 9.99865Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex items-center h-full absolute top-0 bottom-0 left-[10px] z-10"
    >
      <button className="bg-[#0000009b]  h-8 w-8  items-center justify-center rounded-lg text-white group-hover:flex hidden">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02344 9.99865L13.1484 14.1236L11.9701 15.302L6.66675 9.99865L11.9701 4.69531L13.1484 5.87365L9.02344 9.99865Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
