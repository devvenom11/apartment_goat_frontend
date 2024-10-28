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
  CrossIcon,
  ChevronDown,
} from "src/assets/icons";
import { logoutUser } from "src/lib/feature/users/userSlice";
import {
  HEADER_MENU,
  community,
  locations,
  policyAmenities,
  popularAmenities,
  propertyHas,
  searchList,
  unitAmenities,
} from "src/utils/data";
import MenuComponent from "../ApartmentDetails/Header/MenuComponent";
import { getFilteredNeighborhoods, toTitleCase } from "src/utils/helpers";
import { Sidebar } from "../Header/Sidebar";
import { SearchBar } from "../common/SearchBar";

export default function ApartmentHeader({
  setMinPrice,
  minPrice,
  setMaxPrice,
  maxPrice,
  filters,
  setPetToggled,
  setParkingToggled,
  setCheckedItems,
  checkedItems,
  setInputValue,
  setFilters,
  properties,
  slug,
  pagination,
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

  const handleBooleanChange = (key, nestedKey = null) => {
    setFilters((prevFilters) => {
      if (nestedKey) {
        return {
          ...prevFilters,
          [nestedKey]: {
            ...prevFilters[nestedKey],
            [key]: !prevFilters[nestedKey][key],
          },
        };
      }

      return {
        ...prevFilters,
        [key]: !prevFilters[key],
      };
    });
  };

  // Handle changes for number inputs
  const handleNumberChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: Number(value),
    }));
  };

  const toggleMultiSelect = (value, currentSelection, filterKey) => {
    const updatedSelection = new Set(
      currentSelection?.split(",").filter(Boolean)
    );

    const stringValue = value.toString();

    if (updatedSelection.has(stringValue)) {
      updatedSelection.delete(stringValue);
    } else {
      updatedSelection.add(stringValue);
    }

    const selectionValue =
      updatedSelection.size === 1
        ? Array.from(updatedSelection)[0]
        : Array.from(updatedSelection).join(",");

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: selectionValue,
    }));
  };

  return (
    <div>
      <div className="w-full bg-white filter_dropdown">
        {showFilter && (
          <OutsideClickHandler onOutsideClick={() => setShowFilter(false)}>
            <Filters
              setShowFilter={setShowFilter}
              handleNumberChange={handleNumberChange}
              handleBooleanChange={handleBooleanChange}
              toggleMultiSelect={toggleMultiSelect}
              filters={filters}
              setFilters={setFilters}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
              properties={properties}
              pagination={pagination}
            />
          </OutsideClickHandler>
        )}
        <div className="w-full h-[60px] px-[18px] flex justify-between items-center border-b">
          <div className="w-full flex gap-8 items-center">
            <div className="hidden lg:block">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="w-full lg:w-auto flex items-center gap-x-[8px]">
              <div
                className="block lg:hidden"
                onClick={() => setIsSidebar(true)}
              >
                <MenuIcon />
              </div>

              <div className="relative apartmentSearch">
                <SearchBar icon slug={slug} />
              </div>
              <div className="w-fit  md:w-[129px] bg-white border-[1px] border-[#22223B29] border-opacity-15 rounded-full">
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
                      {pagination?.totalResults ?? "0"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="flex gap-2 cursor-pointer group">
                  <HeartIcon color />
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center gap-x-6 hidden lg:flex flex-shrink-0">
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

const Filters = ({
  setShowFilter,
  handleNumberChange,
  filters,
  handleBooleanChange,
  setFilters,
  setMinPrice,
  minPrice,
  setMaxPrice,
  maxPrice,
  properties,
  toggleMultiSelect,
  pagination,
}) => {
  const [price, setPrice] = useState(true);
  const [isLaundryExpanded, setIsLaundryExpanded] = useState(false);
  const [isPetsExpanded, setIsPetsExpanded] = useState(false);
  const [isParkingExpanded, setIsParkingExpanded] = useState(false);
  const [isAmenities, setIsAmenities] = useState(false);
  const [isOtherAmenities, setIsOtherAmenities] = useState(false);
  const [isPolicies, setIsPolicies] = useState(false);
  const [isProperty, setIsProperty] = useState(false);

  return (
    <div className=" w-[100%] h-[100vh] z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity backdrop-blur-sm">
      <div className=" max-h-[calc(100vh-120px)] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full flex flex-col overflow-hidden bg-white px-5 pb-5 pt-5 dialog-sm:relative rounded-2xl dialog-sm:rounded-2xl max-w-[740px] animate-dialog-fade-in !p-0 dialog-sm:max-h-[90vh] dialog-sm:w-[90vw]">
        <div className="p-6 pb-1">
          <button
            onClick={() => setShowFilter(false)}
            className="inline-flex flex-row items-center justify-center gap-1 font-medium enabled:cursor-pointer disabled:bg-alfa-black-5 disabled:text-alfa-black-30 bg-white text-alfa-black-70 desktop-sm:enabled:hover:bg-alfa-black-5 active:enabled:bg-alfa-black-5 active:enabled:outline active:outline-[#14151A3D] active:outline-[3px] h-8 text-sm rounded-lg p-1.5"
          >
            <img src="/images/filters/CloseIcon.svg" alt className="h-6 w-6" />
          </button>
        </div>
        <div className="overflow-auto px-4 md:px-6">
          <div className="border-t border-border-new first:border-none">
            <div className="flex items-center justify-between py-8">
              <span className="text-xl font-medium">Layout</span>
            </div>
            <div className="pb-8">
              <div className="mb-8">
                <div className="mb-2.5 font-medium">Bedrooms</div>
                <div className="flex rounded-[4px] bg-[#E9EAEC] p-1">
                  {["Studio", 1, 2, "3+"].map((label, index) => {
                    const value =
                      label === "Studio" ? 0 : label === "3+" ? 3 : label;
                    // Ensure filters.bedroomCount is treated as a string, handle number case
                    const bedroomCount =
                      typeof filters.bedroomCount === "number"
                        ? filters.bedroomCount.toString()
                        : filters.bedroomCount;

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          toggleMultiSelect(value, bedroomCount, "bedroomCount")
                        }
                        className={`flex-1 p-2 font-medium outline-none text-alfa-black-60 rounded-[2px] ${
                          bedroomCount?.split(",").includes(value.toString())
                            ? "bg-white"
                            : ""
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="mb-2.5 font-medium">Bathrooms</div>
                <div className="flex rounded-[4px] bg-[#E9EAEC] p-1">
                  {[1, 2, "3+"].map((count, index) => {
                    // Ensure filters.bathCount is treated as a string, handle number case
                    const bathCount =
                      typeof filters.bathCount === "number"
                        ? filters.bathCount.toString()
                        : filters.bathCount;

                    const numericValue =
                      count === "3+" ? 3.0 : parseFloat(`${count}.0`);

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          toggleMultiSelect(
                            numericValue,
                            bathCount,
                            "bathCount"
                          )
                        }
                        className={`flex-1 p-2 font-medium outline-none text-alfa-black-60 rounded-[2px] ${
                          bathCount
                            ?.split(",")
                            .includes(numericValue.toString())
                            ? "bg-white"
                            : ""
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setPrice(!price)}
            >
              <span className="text-xl font-medium">Price</span>

              <ChevronDown />
            </div>

            {price && (
              <div className="pb-8">
                <div className="flex w-full gap-3">
                  <div className="w-full min-w-[120px]">
                    <label className="mb-2.5 block font-medium">
                      Min price
                    </label>
                    <div className="flex cursor-text items-center gap-2 rounded-xl border-[1.5px] border-border-new px-3 py-3 text-alfa-black-60">
                      <span className>$</span>
                      <input
                        className="min-w-[20px] flex-1 focus:outline-none"
                        placeholder={0}
                        autoComplete="off"
                        maxLength={7}
                        // defaultValue
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <span className="font-medium">/mo</span>
                    </div>
                  </div>
                  <div className="w-full min-w-[120px]">
                    <label className="mb-2.5 block font-medium">
                      Max price
                    </label>
                    <div className="flex cursor-text items-center gap-2 rounded-xl border-[1.5px] border-border-new px-3 py-3 text-alfa-black-60">
                      <span className>$</span>
                      <input
                        className="min-w-[20px] flex-1 focus:outline-none"
                        placeholder="25,000"
                        autoComplete="off"
                        maxLength={7}
                        // defaultValue
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <span className="font-medium">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsLaundryExpanded(!isLaundryExpanded)}
            >
              <span className="text-xl font-medium">Laundry</span>
              <ChevronDown />
            </div>

            {isLaundryExpanded && (
              <div className="pb-8 ">
                <div className="grid gap-3 md:grid-cols-3">
                  <label
                    onClick={() =>
                      handleBooleanChange("laundryInUnit", "building_amenities")
                    }
                    className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.laundryInUnit ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""}`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      defaultValue="laundry in unit"
                      checked={
                        filters?.building_amenities?.laundryInUnit || false
                      }
                      onChange={() =>
                        handleBooleanChange(
                          "laundryInUnit",
                          "building_amenities"
                        )
                      }
                    />
                    <img
                      src="/images/filters/laundry-unit.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">Laundry in unit</div>
                  </label>
                  <label
                    className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.laundry ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""} `}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      defaultValue="laundry connections"
                      onClick={() =>
                        handleBooleanChange("laundry", "building_amenities")
                      }
                    />
                    <img
                      src="/images/filters/laundry-connections.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">Laundry connections</div>
                  </label>
                  <label
                    className={` flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.laundryFacility ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""} `}
                  >
                    <input
                      onClick={() =>
                        handleBooleanChange(
                          "laundryFacility",
                          "building_amenities"
                        )
                      }
                      type="checkbox"
                      className="hidden"
                      defaultValue="laundry facilities"
                    />
                    <img
                      src="/images/filters/laundry-facilities.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">Laundry Facilities</div>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsPetsExpanded(!isPetsExpanded)}
            >
              <span className="text-xl font-medium">Pets</span>
              <ChevronDown />
            </div>
            {isPetsExpanded && (
              <div className="pb-8 ">
                <div className="flex w-full items-center justify-between mt-3">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/images/filters/pets.svg"
                      loading="lazy"
                      alt="pets"
                      className="h-6 w-6"
                    />
                    <span className="font-medium">Pets-friendly</span>
                  </div>
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only hidden"
                      checked={
                        filters?.building_amenities?.petFriendly || false
                      }
                      onChange={() =>
                        handleBooleanChange("petFriendly", "building_amenities")
                      }
                    />
                    <div className="relative h-6 w-11 rounded-full bg-[#E8EAEC] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-alfa-black-5 after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:bg-brand peer-checked:after:translate-x-full peer-checked:after:border-white" />
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              role="button"
              className="flex items-center justify-between py-8"
              onClick={() => setIsParkingExpanded(!isParkingExpanded)}
            >
              <span className="text-xl font-medium">Parking</span>
              <ChevronDown />
            </div>
            {isParkingExpanded && (
              <div className="pb-8 ">
                <div className="flex w-full items-center justify-between mt-3">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/images/filters/parking.svg"
                      loading="lazy"
                      alt="pets"
                      className="h-6 w-6"
                    />
                    <span className="font-medium">Parking</span>
                  </div>
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only hidden"
                      defaultValue
                      checked={filters?.building_amenities?.parking || false}
                      onChange={() =>
                        handleBooleanChange("parking", "building_amenities")
                      }
                    />
                    <div className="relative h-6 w-11 rounded-full bg-[#E8EAEC] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-alfa-black-5 after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:bg-brand peer-checked:after:translate-x-full peer-checked:after:border-white" />
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsAmenities(!isAmenities)}
            >
              <span className="text-xl font-medium">Popular Amenities</span>
              <ChevronDown />
            </div>
            {isAmenities && (
              <div className="pb-8 ">
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {popularAmenities?.map((item, idx) => (
                    <label
                      className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.[item?.title] ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""}`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        defaultValue="dishwasher"
                        checked={
                          filters?.building_amenities?.[item?.title] || false
                        }
                        onChange={() =>
                          handleBooleanChange(item?.title, "building_amenities")
                        }
                      />
                      <img
                        src={item?.img}
                        alt
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                      <div className="mt-6 font-medium">{item?.title}</div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsOtherAmenities(!isOtherAmenities)}
            >
              <span className="text-xl font-medium">Other Amenities</span>
              <ChevronDown />
            </div>
            {isOtherAmenities && (
              <div className="pb-8 ">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="mb-5 flex items-center gap-2">
                      <img
                        src="/images/filters/community.svg"
                        loading="lazy"
                        alt="pets"
                        className="h-6 w-6"
                      />
                      <span className="font-medium">Community</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {community?.map((item, index) => (
                        <label
                          key={index}
                          className="relative flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={
                              filters?.building_amenities?.[item?.title] ||
                              false
                            }
                            onChange={() =>
                              handleBooleanChange(
                                item?.title,
                                "building_amenities"
                              )
                            }
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-border-new checked:border-transparent checked:bg-brand focus:outline-none disabled:bg-gray-200"
                          />
                          <svg
                            width={14}
                            height={9}
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-1.5 hidden h-3 w-3 peer-checked:block"
                          >
                            <path
                              d="M13 1L5.36364 8L1 4"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-book text-black">
                            {item?.title}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-5 flex items-center gap-2">
                      <img
                        src="/images/filters/unit.svg"
                        loading="lazy"
                        alt="pets"
                        className="h-6 w-6"
                      />
                      <span className="font-medium">Unit</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {unitAmenities?.map((item, idx) => (
                        <label
                          key={idx}
                          className="relative flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={
                              filters?.building_amenities?.[item?.title] ||
                              false
                            }
                            onChange={() =>
                              handleBooleanChange(
                                item?.title,
                                "building_amenities"
                              )
                            }
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-border-new checked:border-transparent checked:bg-brand focus:outline-none disabled:bg-gray-200"
                          />
                          <svg
                            width={14}
                            height={9}
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-1.5 hidden h-3 w-3 peer-checked:block"
                          >
                            <path
                              d="M13 1L5.36364 8L1 4"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-book text-black">
                            {item?.title}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsPolicies(!isPolicies)}
            >
              <span className="text-xl font-medium">Policies</span>
              <ChevronDown />
            </div>
            {isPolicies && (
              <div className="pb-8 ">
                <div className="grid gap-3 mb-8 md:grid-cols-3">
                  <label
                    className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.creditCheck ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""} `}
                  >
                    <input
                      checked={
                        filters?.building_amenities?.creditCheck || false
                      }
                      onChange={() =>
                        handleBooleanChange("creditCheck", "building_amenities")
                      }
                      type="checkbox"
                      className="hidden"
                      defaultValue="no credit check"
                    />
                    <img
                      src="/images/filters/credit-check.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">No credit check</div>
                  </label>
                  <label
                    className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.coSigner ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""}`}
                  >
                    <input
                      checked={filters?.building_amenities?.coSigner || false}
                      onChange={() =>
                        handleBooleanChange("coSigner", "building_amenities")
                      }
                      type="checkbox"
                      className="hidden"
                      defaultValue="allows co-signers"
                    />
                    <img
                      src="/images/filters/co-signers.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">Allows co-signers</div>
                  </label>
                  <label
                    className={` flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.vouchersAccepted ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""} `}
                  >
                    <input
                      checked={
                        filters?.building_amenities?.vouchersAccepted || false
                      }
                      onChange={() =>
                        handleBooleanChange(
                          "vouchersAccepted",
                          "building_amenities"
                        )
                      }
                      type="checkbox"
                      className="hidden"
                      defaultValue="section8"
                    />
                    <img
                      src="/images/filters/sec-8.svg"
                      alt
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <div className="mt-6 font-medium">
                      Sec-8 vouchers accepted
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {policyAmenities?.map((item, idx) => (
                    <label className="relative flex items-center gap-3 cursor-pointer">
                      <input
                        checked={
                          filters?.building_amenities?.[item?.title] || false
                        }
                        onChange={() =>
                          handleBooleanChange(item?.title, "building_amenities")
                        }
                        type="checkbox"
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-border-new checked:border-transparent checked:bg-brand focus:outline-none disabled:bg-gray-200"
                      />
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[3px] hidden h-3 w-3 peer-checked:block"
                      >
                        <path
                          d="M13 1L5.36364 8L1 4"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-book text-black">
                        {item?.title}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border-new first:border-none">
            <div
              className="flex items-center justify-between py-8"
              role="button"
              onClick={() => setIsProperty(!isProperty)}
            >
              <span className="text-xl font-medium">Property has</span>
              <ChevronDown />
            </div>
            {isProperty && (
              <div className="pb-8 ">
                <div className="grid gap-3 mb-8 md:grid-cols-3">
                  {propertyHas?.map((item, idx) => (
                    <label
                      className={`flex-1 cursor-pointer rounded-xl border p-4 font-medium outline-none md:hover:border-alfa-black-20 md:hover:bg-elevation-50 border-border-new bg-white ${filters?.building_amenities?.[item?.title] ? "border-[1px] border-[#7F8699] bg-[#F7F7F8]" : ""}`}
                    >
                      <input
                        checked={
                          filters?.building_amenities?.[item?.title] || false
                        }
                        onChange={() =>
                          handleBooleanChange(item?.title, "building_amenities")
                        }
                        type="checkbox"
                        className="hidden"
                        defaultValue="student"
                      />
                      <img
                        src={item?.img}
                        alt
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                      <div className="mt-6 font-medium">{item?.title}</div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-between border-t border-border-new bg-white px-4 py-3 hover:bg-[#F7F7F8]">
          <button
            onClick={() => {
              setFilters({});
              setMinPrice("");
              setMaxPrice("");
              setShowFilter(false);
            }}
            className="inline-flex flex-row items-center justify-center gap-1 font-medium enabled:cursor-pointer disabled:bg-alfa-black-5 disabled:text-alfa-black-30 bg-white text-alfa-black-70 desktop-sm:enabled:hover:bg-alfa-black-5 active:enabled:bg-alfa-black-5 active:enabled:outline active:outline-[#14151A3D] active:outline-[3px] h-12 text-base rounded-xl px-4 py-3"
          >
            Reset filters
          </button>
          <button
            onClick={() => setShowFilter(false)}
            className="inline-flex flex-row items-center justify-center gap-1 font-medium enabled:cursor-pointer disabled:bg-alfa-black-5 disabled:text-alfa-black-30 text-white bg-brand desktop-sm:enabled:hover:bg-[#5DAB8A] active:enabled:outline active:outline-[#34966D7A] active:outline-[3px] h-12 text-base rounded-xl px-4 py-3"
          >
            View {pagination?.totalResults} results
          </button>
        </div>
      </div>
    </div>
  );
};
