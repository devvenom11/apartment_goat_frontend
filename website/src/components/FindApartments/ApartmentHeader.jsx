"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../common/Button";
import PriceDropDown from "./PriceDropDown";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import LineBarsSvg from "src/assets/Article/lineBars.svg";

import {
  Logo,
  MenuIcon,
  SearchSvg,
  ParkingIcon,
  PetIconNew,
  BedIcon,
  ToggledIcon,
  HeartIcon,
} from "src/assets/icons";
import { logoutUser } from "src/lib/feature/users/userSlice";
import { HEADER_MENU, locations, searchList } from "src/utils/data";
import MenuComponent from "../ApartmentDetails/Header/MenuComponent";
import { getFilteredNeighborhoods } from "src/utils/helpers";
import { Sidebar } from "../Header/Sidebar";

export default function ApartmentHeader({
  setMinPrice,
  minPrice,
  setMaxPrice,
  maxPrice,
  filterData,
  isProcessing,
  setPetToggled,
  setParkingToggled,
  petToggled,
  parkingToggled,
  bed,
  propertiesData,
  setCheckedItems,
  checkedItems,
  setInputValue,
  inputValue,
  mainSlug,
}) {
  const [isMenu, setIsMenu] = useState("");
  const [isSideBar, setIsSidebar] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const createQueryString = (name, value) => {
    const params = new URLSearchParams();

    params.set(name, value);
    return params.toString();
  };
  const bedsData = [
    { number: "studio" },
    { number: "1" },
    { number: "2" },
    { number: "3" },
    { number: "4" },
    { number: "5" },
  ];
  const handleToggle = (_item, slug, filterSlug) => {
    let dup = structuredClone(checkedItems);
    let sectionExists = dup.find((section) => section.slug === slug); //if section already exists
    if (sectionExists) {
      let itemExists = sectionExists.items.find((item) => _item.id === item.id);
      if (itemExists) {
        sectionExists.items = sectionExists.items.filter(
          (item) => item.id !== _item.id
        );
      } else {
        sectionExists.items.push(_item);
      }
    } else {
      dup.push({ slug: slug, items: [_item], filterSlug: filterSlug });
    }
    setCheckedItems(dup);
  };

  const getCheckboxState = (slug, id) => {
    let dup = structuredClone(checkedItems);
    let sectionExists = dup.find((section) => section.slug === slug); //if section already exists
    if (sectionExists) {
      let itemExists = sectionExists.items.find((item) => id === item.id);
      if (itemExists) {
        return true;
      }
      return false;
    }
    return false;
  };
  const HandleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setParkingToggled(false);
    setPetToggled(false);
    setCheckedItems([]);
    setShowFilter(false);
  };
  useEffect(() => {
    const token = cookies.token;
    setIsLoggedIn(token !== undefined && !!token);
  }, [cookies.token]);

  const handleLogout = () => {
    removeCookie("token");
    dispatch(logoutUser());
    setIsLoggedIn(false);
    router.push("/");
  };
  const updateCity = (slug) => {
    const shouldNavigate = searchList.find((item) => item.slug === slug);
    if (shouldNavigate) {
      router.push(`/apartments/${slug}`);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDropdownVisible(true);
    updateCity(e.target.value);
  };
  const handleOptionClick = (slug) => {
    const location = searchList.find((item) => item.slug === slug);
    setInputValue(location.name);
    setDropdownVisible(false);
    updateCity(slug);
  };

  return (
    <div>
      <div className="w-full bg-white">
        <div className="w-full h-[60px] px-[18px] flex justify-between items-center border-b">
          <div className="hidden lg:block">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-x-[8px]">
            <div className="block lg:hidden" onClick={() => setIsSidebar(true)}>
              <MenuIcon />
            </div>
            <div className="relative w-full md:w-[220px] bg-white">
              <input
                className="w-full bg-[#FEFEFE] py-[9px] outline-none focus:outline-none border-[1px] border-[#D6D6DA] rounded-[120px] h-full grow px-4 text-sm font-semibold"
                type="text"
                placeholder="Search a city"
                value={inputValue}
                onChange={handleInputChange}
                onClick={() => setDropdownVisible(true)}
              />
              <span className="absolute right-4 top-[50%] translate-y-[-50%]">
                <SearchSvg />
              </span>
              {isDropdownVisible && (
                <ul
                  className={`${
                    getFilteredNeighborhoods(
                      searchList.filter((l) => !l.cat),
                      inputValue
                    ).length > 10
                      ? "h-96"
                      : "h-auto"
                  } absolute w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-1 z-10 h-96 whitespace-nowrap overflow-y-auto no-scrollbar`}
                >
                  {searchList
                    .filter((option) =>
                      option?.name
                        ?.toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(option.slug)}
                        className="px-4 py-2 cursor-pointer hover:bg-brand hover:bg-opacity-10 hover:text-brand text-sm"
                      >
                        {option.name}
                      </li>
                    ))}
                </ul>
              )}
            </div>

            <div className="relative w-fit md:min-w-[158px] bg-white hidden md:block">
              <PriceDropDown
                border
                minPrice={minPrice}
                isProcessing={isProcessing}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                maxPrice={maxPrice}
                propertiesData={propertiesData}
              />
            </div>
            <div className="relative  w-fit  md:w-[129px] bg-white border-[1px] border-[#22223B29] border-opacity-15 rounded-full">
              <div onClick={() => setShowFilter(!showFilter)} className="  ">
                <div className="py-[6px] px-[13px] flex gap-x-3 items-center cursor-pointer">
                  <div>
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.12759 2.375C4.1406 2.375 4.15365 2.375 4.16675 2.375L15.8726 2.375C16.4284 2.37498 16.9035 2.37495 17.2832 2.42285C17.686 2.47365 18.0752 2.58775 18.3949 2.8877C18.7203 3.19295 18.8496 3.5738 18.9063 3.97004C18.9585 4.33404 18.9585 4.78664 18.9584 5.30299L18.9584 5.9501C18.9584 6.35719 18.9585 6.70912 18.9281 7.00259C18.8953 7.31839 18.8239 7.61466 18.6522 7.89911C18.4818 8.18142 18.2524 8.38633 17.9879 8.57003C17.7388 8.74308 17.4205 8.92225 17.0462 9.13296L14.5941 10.5133C14.036 10.8275 13.8416 10.9406 13.7119 11.0533C13.4139 11.312 13.2433 11.599 13.1631 11.9587C13.1288 12.1124 13.1251 12.306 13.1251 12.8941L13.1251 15.1708C13.1251 15.9219 13.1252 16.5595 13.0479 17.0496C12.9657 17.5709 12.7749 18.0708 12.2749 18.3835C11.7863 18.6892 11.248 18.6611 10.7249 18.5369C10.2211 18.4172 9.6003 18.1745 8.85538 17.8833L8.78298 17.855C8.43404 17.7186 8.12851 17.5991 7.88662 17.4743C7.62666 17.34 7.38525 17.173 7.20054 16.9131C7.01376 16.6502 6.93887 16.3684 6.90548 16.0803C6.87503 15.8175 6.87506 15.5022 6.87508 15.1505L6.87509 12.8941C6.87509 12.306 6.87137 12.1124 6.8371 11.9587C6.75691 11.599 6.58627 11.312 6.28828 11.0533C6.15853 10.9406 5.96418 10.8275 5.40603 10.5133L2.954 9.13296C2.57966 8.92225 2.26136 8.74308 2.01223 8.57003C1.74778 8.38633 1.51834 8.18142 1.34797 7.89911C1.17632 7.61466 1.10484 7.31839 1.07212 7.00259C1.04172 6.70912 1.04173 6.35719 1.04175 5.9501L1.04175 5.34555C1.04175 5.33131 1.04175 5.31712 1.04175 5.30297C1.04171 4.78663 1.04168 4.33403 1.09384 3.97004C1.15062 3.5738 1.27988 3.19295 1.60523 2.8877C1.92494 2.58775 2.31421 2.47365 2.71694 2.42285C3.09668 2.37495 3.5718 2.37498 4.12759 2.375ZM2.87338 3.66303C2.59533 3.6981 2.50691 3.75576 2.46051 3.7993C2.41974 3.83755 2.36594 3.90487 2.3312 4.14736C2.29326 4.41212 2.29175 4.7739 2.29175 5.34555V5.9204C2.29175 6.36558 2.29252 6.65231 2.31547 6.87379C2.33683 7.08005 2.37352 7.17923 2.4182 7.25326C2.46417 7.32943 2.5405 7.415 2.72536 7.54341C2.92013 7.6787 3.18621 7.82923 3.59169 8.05749L6.01921 9.42402C6.04194 9.43682 6.06433 9.44941 6.08639 9.46182C6.55198 9.72376 6.86907 9.90215 7.10775 10.1094C7.60055 10.5372 7.91672 11.0568 8.05714 11.6866C8.12539 11.9927 8.12527 12.3359 8.1251 12.8204C8.12509 12.8446 8.12509 12.8692 8.12509 12.8941V15.1187C8.12509 15.5121 8.12605 15.7542 8.14717 15.9364C8.16627 16.1011 8.19635 16.1565 8.2195 16.1891C8.24474 16.2246 8.29472 16.2782 8.46011 16.3636C8.63712 16.455 8.88098 16.5512 9.2661 16.7017C10.0669 17.0148 10.6056 17.2238 11.0138 17.3207C11.4126 17.4154 11.544 17.3663 11.612 17.3238C11.6686 17.2884 11.7562 17.2164 11.8131 16.855C11.8732 16.4738 11.8751 15.9362 11.8751 15.1187V12.8941C11.8751 12.8692 11.8751 12.8446 11.8751 12.8204C11.8749 12.3359 11.8748 11.9927 11.943 11.6866C12.0834 11.0568 12.3996 10.5372 12.8924 10.1094C13.1311 9.90215 13.4482 9.72376 13.9138 9.46184C13.9358 9.44942 13.9582 9.43682 13.981 9.42402L16.4085 8.05749C16.814 7.82923 17.08 7.6787 17.2748 7.54341C17.4597 7.415 17.536 7.32943 17.582 7.25326C17.6267 7.17923 17.6633 7.08005 17.6847 6.87379C17.7076 6.65231 17.7084 6.36558 17.7084 5.9204V5.34555C17.7084 4.7739 17.7069 4.41212 17.669 4.14736C17.6342 3.90487 17.5804 3.83755 17.5397 3.7993C17.4933 3.75576 17.4048 3.6981 17.1268 3.66303C16.8346 3.62617 16.4393 3.625 15.8334 3.625H4.16675C3.56089 3.625 3.16553 3.62617 2.87338 3.66303Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block text-sm">Filter</div>
                  <div className="bg-[#FF6525] text-white py-[2.5px] px-2 rounded-full w-fit-content text-xs">
                    {propertiesData?.length ?? "0"}
                  </div>
                </div>
              </div>
              {showFilter && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowFilter(false)}
                >
                  <div className="fixed h-auto md:absolute top-0 md:top-11 left-0 md:left-unset right-0 md:right-unset max-h-[1400px] bg-white border border-[#edf2f7] rounded w-[440px] z-[999] shadow-2xl ">
                    <ul className="h-[calc(100vh-108px)] md:max-h-[500px] overflow-y-auto no-scrollbar  p-4 pb-12 ">
                      <div className="md:hidden flex h-[48px] items-center justify-between border-b border-border-light mb-4">
                        <div className="flex gap-4">
                          <button
                            onClick={() => setShowFilter(false)}
                            className="outline-none focus:outline-none"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 16.25L6.25 10L12.5 3.75"
                                stroke="#2A343A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div className="text-[20px] font-medium">Filters</div>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 pl-4 pr-2">
                          <svg
                            width={24}
                            height={24}
                            className="text-red-error"
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
                          <div className="flex whitespace-nowrap text-[14px]">
                            Save
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 flex h-6 w-full items-center justify-between pr-2">
                        <div className="flex items-center">
                          <BedIcon />
                          <div className="ml-3">Beds</div>
                        </div>
                        <div className="flex gap-2">
                          {bedsData?.slice(0, 4)?.map((item, index) => {
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  router.push(
                                    `/apartments/${mainSlug}` +
                                      "?" +
                                      createQueryString(
                                        "beds",
                                        `${item.number}`
                                      )
                                  );
                                }}
                                className={`rounded-3xl px-2.5 py-0.5 border font-circular text-13px text-sm outline-none focus:outline-none md:hover:border-[#FF6525] md:hover:bg-green-light md:hover:text-[#FF6525] ${
                                  bed === item?.number
                                    ? "border-[#FF6525]"
                                    : "border-gray-light"
                                }`}
                              >
                                {item.number}
                                {index === 3 && bedsData.length > 4 && "+"}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-between my-3 h-6 pr-2">
                        <div className="flex">
                          <PetIconNew />
                          <div className="ml-3">Pets</div>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setPetToggled((prev) => !prev)}
                        >
                          <ToggledIcon isToggled={petToggled} />
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-between my-3 h-6 pr-2">
                        <div className="flex">
                          <ParkingIcon />
                          <div className="ml-3">Parking</div>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setParkingToggled((prev) => !prev)}
                        >
                          <ToggledIcon isToggled={parkingToggled} />
                        </div>
                      </div>
                      {filterData?.map((section) => (
                        <li className="" key={section.title}>
                          <h2 className="mb-2 w-full text-base text-gray-dark">
                            {section.title}
                          </h2>
                          <ul className="grid grid-cols-2 gap-x-2  h-auto w-full  mb-4">
                            {section?.items?.map((item) => (
                              <li
                                key={item?.title}
                                className=" text-[14px] leading-5 text-[#555d61] mb-2 cursor-pointer"
                              >
                                <div
                                  onClick={() =>
                                    handleToggle(
                                      item,
                                      section.slug,
                                      section.filterSlug
                                    )
                                  }
                                  className="flex items-center group"
                                >
                                  <div className="bg-white border rounded-sm border-gray-300 group-hover:border-brand group-hover:border-opacity-75 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input
                                      checked={getCheckboxState(
                                        section.slug,
                                        item.id
                                      )}
                                      type="checkbox"
                                      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                    />
                                    <div className="check-icon hidden bg-brand text-white rounded-sm">
                                      <svg
                                        className="icon icon-tabler icon-tabler-check"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                      </svg>
                                    </div>
                                  </div>
                                  <p className="ml-1.5 text-base leading-4 font-normal text-gray-800 text-14px">
                                    {item?.title}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    <div className="flex w-full flex-col justify-between rounded-lg bg-white p-4 shadow-[0_-14px_20px_-1px_rgba(21,26,29,0.1)] hover:scale-100 md:border-t md:border-border-light">
                      <button
                        onClick={() => setShowFilter(false)}
                        className="h-11 rounded-3xl bg-[#FF6525] text-16px font-medium text-white outline-none focus:outline-none"
                      >
                        View {propertiesData?.length} results
                      </button>
                      <button
                        onClick={() => HandleReset()}
                        className="mt-[8px] w-full text-16px text-[#FF6525] outline-none focus:outline-none"
                      >
                        Reset filters
                      </button>
                    </div>
                  </div>
                </OutsideClickHandler>
              )}
            </div>

            <div className="hidden md:block">
              <div className="flex gap-2 cursor-pointer group">
                <HeartIcon color />
                <span className="text-[14px] font-medium text-[#22223B] group-hover:text-[#E55A5C]">
                  Save
                </span>
              </div>
            </div>
          </div>
          <div className=" items-center gap-x-6 hidden lg:flex">
            <Link href={"#"}>
              <p className="text-[#22223B]">Neighborhood page</p>
            </Link>
            {isLoggedIn ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setIsMenuVisible(false);
                }}
              >
                <div
                  className="relative bg-[#FF65250D] pl-[5px] pr-[6px] py-[5px] z-50 border-[1px] border-[#DBDBDB] rounded-[99px] cursor-pointer hidden lg:block"
                  onClick={() => setIsMenuVisible(true)}
                >
                  <div className="flex gap-[8px]">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#FF6525]">
                      <p className="text-white mt-[5px] text-center uppercase">
                        {user?.username
                          ? user?.username?.slice(0, 2)
                          : user?.name?.slice(0, 2)}
                      </p>
                    </div>
                    <img src={LineBarsSvg.src} alt="loading" />
                  </div>
                  <div
                    className={`absolute top-[50px] right-0 transition-opacity duration-300 ${isMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  >
                    {isMenuVisible && (
                      <MenuComponent handleLogout={handleLogout} />
                    )}
                  </div>
                </div>
              </OutsideClickHandler>
            ) : (
              <Link href={"/register"}>
                <Button
                  icon={undefined}
                  classNames="px-[26px] py-[13.5px] rounded-[99px] border hover:border-2 border-neutral-400 text-center text-[#22223B] text-sm font-[600] capitalize leading-[16.80px] hidden md:block"
                >
                  Sign In / Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {isSideBar && (
        <Sidebar
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          data={HEADER_MENU}
          setOpen={setIsSidebar}
          handleLogout={handleLogout}
        />
      )}
      <style>
        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
      </style>
    </div>
  );
}
