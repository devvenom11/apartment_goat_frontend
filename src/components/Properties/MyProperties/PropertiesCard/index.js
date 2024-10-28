import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { HeartIcon, HeartIconFilled } from "src/assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "src/utils/constants";
const PropertiesCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userData = useSelector((state) => state.user);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const likedBy = item.attributes.liked_by;
    let favArray = [];
    if (Array.isArray(likedBy)) {
      favArray = likedBy;
    } else if (typeof likedBy === "number" || typeof likedBy === "string") {
      favArray = [likedBy];
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
        window.location.reload();
      } catch (error) {
        toast.error("Something went wrong, please try again later");
        setIsLiked(false);
      }
    } else {
      router.push("/register");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col sm:flex-row gap-[24px] shadow-lg rounded-[24px] bg-white mb-6">
        <img
          src={item?.attributes?.photos?.data?.[0]?.attributes?.url}
          alt="loading"
          className="w-[150px] hidden sm:block sm:rounded-l-3xl cursor-pointer"
        />
        <img
          src={item?.attributes?.photos?.data?.[0]?.attributes?.url}
          alt="loading"
          className="w-full px-4 pt-4 block sm:hidden sm:rounded-l-3x cursor-pointer"
        />
        <div className="py-[14px] pr-[24px] flex justify-between w-[100%]">
          <div className="px-4 sm:px-0">
            <p className="text-[18px] font-[500] leading-[23.4px] mb-[12px] cursor-pointer">
              {item?.attributes?.name}
            </p>
            {(item.attributes.beds || item.attributes.baths) && (
              <p className="flex items-center text-[16px] font-[300] leading-[20.8px] mb-[23px] text-[#22223B]">
                {item.attributes.beds} Bedrooms
                <span className="mx-1.5 text-[16px] font-[300] leading-[20.8px] mb-[23px] text-[#22223B]"></span>
                {item.attributes.baths} Baths
              </p>
            )}
            <p className="text-[21px] font-[600] leading-[21px] mb-[8px]">
              {item.attributes?.price}
              <span className="text-[14px] font-[400] text-[#989898] leading-[21px]">
                {" "}
                / month
              </span>
            </p>
            <p className="text-[14px] font-[300] leading-[14px] text-[#FF6525] cursor-pointer">
              Rebate Eligible $$$
            </p>
          </div>
          <div className="cursor-pointer">
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

export default PropertiesCard;
