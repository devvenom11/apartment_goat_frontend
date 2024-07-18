import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { HeartIcon, HeartIconFilled } from "../../assets/icons";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { API_URL } from "src/utils/constants";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ item, markerCard }) => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  const photos = item?.attributes?.photos?.data || [];
  const multipleImages = photos.length > 1;
  const [cookies] = useCookies(["token"]);
  const [isLiked, setIsLiked] = useState(false);
  console.log("Card====Item++", item.attributes.liked_by);
  useEffect(() => {
    const likedBy = item.attributes.liked_by;
    let favArray = [];
    if (Array.isArray(likedBy)) {
      favArray = likedBy; // Use likedBy if it's already an array
    } else if (typeof likedBy === "number" || typeof likedBy === "string") {
      favArray = [likedBy]; // Wrap single value in an array
    }
    const isFav = favArray.includes(userData.id);
    setIsLiked(isFav);
  }, [item, userData.id]);

  const handleHeartIcon = async (item, isFav) => {
    const token = cookies.token;
    if (token) {
      let favArray = item.attributes.liked_by || [];
      if (isFav) {
        favArray = favArray.filter((sin) => sin !== userData.id);
      } else {
        favArray.push(userData.id);
      }
      const payload = {
        data: {
          liked_by: favArray,
        },
      };
      try {
        await fetch(`${API_URL}/api/properties/${item.id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        setIsLiked(!isFav);
      } catch (error) {
        toast.error(
          "Could not add this property to favorites, please try again later"
        );
        setIsLiked(false);
      }
    } else {
      router.push("/register");
    }
  };

  const settings = {
    dots: multipleImages,
    infinite: multipleImages,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
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
      className={`${markerCard ? "max-w-[285px] min-w-[100%] md:min-w-[295px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 absolute bottom-5 left-5 rounded-lg" : "rounded-lg"} max-w-[285px] min-w-[100%] md:min-w-[285px] overflow-hidden  border bg-[#FFFFFF] grow md:grow-0 cursor-pointer`}
    >
      <ToastContainer />
      <div
        key={item}
        className="shadow-[#1A1D1F1A] bg-[#FFFFFF] rounded-lg flex flex-col gap-3"
      >
        <Slider {...settings}>
          {photos.map((photo) => (
            <Link
              href={`/apartment/${item.attributes.slug}` || "#"}
              key={photo.id}
            >
              <img
                src={`${photo?.attributes?.url}`}
                alt={photo?.attributes?.url}
                className="w-full h-[145px] rounded-t-lg"
              />
            </Link>
          ))}
        </Slider>
        <div className="relative flex grow flex-col rounded-b-lg p-3 overflow-hidden">
          <div className="mb-1 flex items-center justify-between">
            <Link href={`/apartment/${item.attributes.slug}` || "#"}>
              <h3 className="font-poopins text-sm font-medium leading-[18.2px] text-[#22223B]">
                {item?.attributes?.name}
              </h3>
            </Link>
          </div>
          <p className="flex items-center font-poppins font-light text-xs leading-[15.6px] text-[#22223B] mb-1">
            <span>{item?.attributes.area}&nbsp;</span>
          </p>
          <p className="flex items-center font-poppins font-light text-xs leading-[15.6px] text-[#22223B] mb-3">
            <span>
              {" "}
              {item?.attributes.beds.replace("bd", "bedrooms")} •&nbsp;
            </span>
            <span> {item?.attributes.baths.replace("ba", "baths")}</span>
          </p>
          <div>
            <span className="font-poppins font-semibold text-sm leading-[18.2px] text-[#22223B]">
              {item.attributes.price}
            </span>{" "}
            <span className="font-poppins font-normal text-xs leading-[18px] text-[#989898]">
              / month
            </span>
          </div>
          <div className="flex justify-between">
            <p className="font-poppins font-light text-xs leading-[15.6px] text-[#FF6525]">
              Rebate Eligible $$$
            </p>
          </div>
          <div className="absolute right-[12px] md:top-[4.5rem] top-[3.5rem] flex gap-2.5">
            <button
              onClick={() => handleHeartIcon(item, isLiked)}
              className="cursor-pointer hover:opacity-75 active:scale-105 text-gray-900"
            >
              {isLiked ? <HeartIconFilled /> : <HeartIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
