"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { Logo, MenuIcon, SearchIcon, SearchSvg } from "../../../assets/icons";
import Button from "../../common/Button";
import LineBarsSvg from "../../../assets/Article/lineBars.svg";
import MenuComponent from "./MenuComponent";
import { Sidebar } from "./Sidebar";
import { HEADER_MENU, locations } from "../../../utils/data";
import ArticlePopup from "src/components/ArticlePage/ArticlePopup";
import { useCookies } from "react-cookie";
import { getFilteredNeighborhoods } from "src/utils/helpers";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "src/lib/feature/users/userSlice";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "src/utils/constants";
const chicagoBounds = {
  north: 42.023131,
  south: 41.644335,
  west: -87.940101,
  east: -87.523661,
};

const Header = ({ MainLinks, ApartmentDetailLink ,isFixed}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState("");
  const [isSideBar, setIsSidebar] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter;
  const user = useSelector((state) => state.user);
  const [dropDown, setDropDown] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [autocompleteService, setAutocompleteService] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => setGoogleMapsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

const dispatch = useDispatch();
  useEffect(() => {
    const token = cookies.token;
    setIsLoggedIn(token !== undefined && !!token);
  }, [cookies.token]);
  const handleDivClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleSignInSignUpClick = () => {
    setIsOpen((prevState) => !prevState);
    setIsButton((prevState) => !prevState);
  };
  const updateCity = (slug) => {
    const shouldNavigate = locations.find((item) => item.slug === slug);
    if (shouldNavigate) {
      router.push(`/apartments/${slug}`);
    }
  }; 
  const handleLogout = () => {
    removeCookie("token");
    dispatch(logoutUser());
    setIsLoggedIn(false);
  };
  const onPlaceChanged = () => {
    if (autocompleteService) {
      const place = autocompleteService.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        const locality = place.name;
        const region = place.address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        )?.short_name;
        const slugRes = `${locality.toLowerCase()}-${region.toLowerCase()}`;
        const slug = slugRes
          .toLowerCase()
          .replace(/,/g, "")
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "");
        router?.push(`/apartments/${slug}?lat=${lat}&lng=${lng}`);
      } else {
        console.error("No geometry found for place");
      }
    }
  };

  const handleLoad = (autocomplete) => {
    setAutocompleteService(autocomplete);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim().length > 0) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  if (!googleMapsLoaded) {
    return null;
  }
  return (
    <header className="w-full bg-white   ">
      
      <div className={`apartmentDetail w-full h-[60px] px-[18px] flex justify-between items-center  ${isFixed ? 'z-[22] fixed top-0 bg-white ': ''}`}>
        <div className="w-full lg:w-auto flex items-center gap-x-[18px] lg:gap-x-16">
          <div className="hidden lg:block">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="block lg:hidden">
            <span onClick={() => setIsSidebar(true)}>
              <MenuIcon />
            </span>
          </div>
          <div className="relative w-full md:w-[335px] bg-white">
          <Autocomplete
            onLoad={handleLoad}
            onPlaceChanged={onPlaceChanged}
            types={["(cities)"]}
            bounds={chicagoBounds}
            componentRestrictions={{ country: "us", administrativeArea: "CA" }}
            className="apartmentDetail"
          >
            <div className="relative">
              <div className="w-full pr-2">
                <input
                  type="text"
                  placeholder="Search a city or building"
                  className="w-full bg-[#FEFEFE] py-[9px] outline-none focus:outline-none border-[1px] border-[#D6D6DA] rounded-[120px] h-full grow px-4 text-16px outline-0"
                  onClick={() => setDropDown(true)}
                  onChange={handleInputChange}
                />
              </div>
              <span className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">
              <SearchSvg />
            </span>
            </div>
          </Autocomplete>
          {dropDown && (
            <ul className="max-h-[176px] absolute max-w-[315px] mx-auto right-0 left-0 flex flex-col w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-[7px] z-10 whitespace-nowrap overflow-y-auto no-scrollbar">
              {HEADER_MENU?.neighborhoods?.menu[0]?.items?.map((option, index) => (
                <Link
                  key={index}
                  href={`/apartments/${option.slug}?lat=${option.lat}&lng=${option.lng}`}
                  className="px-4 py-2 cursor-pointer hover:bg-brand hover:bg-opacity-10 hover:text-brand text-sm"
                >
                  {option.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
        </div>
        <div className="flex items-center gap-[18px]">
          {isLoggedIn ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsMenuVisible(false);
              }}
            >
              <div
                className="relative bg-[#FF65250D] pl-[5px] pr-[6px] py-[5px] z-50 border-[1px] border-[#DBDBDB] rounded-[99px] cursor-pointer hidden lg:block"
                onClick={handleDivClick}
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
                  {isMenuVisible && <MenuComponent handleLogout={handleLogout} />}
                </div>
              </div>
            </OutsideClickHandler>
          ) : (
            <div className="items-center gap-x-6 hidden lg:flex">
              {MainLinks?.map((item, index) => (
                <Link href={"#"} key={index}>
                  <p className="text-[#22223B] text-[16px] font-[400] leading-[19.2px]">
                    {item?.name}
                  </p>
                </Link>
              ))}
              {ApartmentDetailLink?.map((item, index) => (
                <Link href={"#"} key={index}>
                  <p className="text-[#22223B] text-[16px] font-[400] leading-[19.2px]">
                    {item?.name}
                  </p>
                </Link>
              ))}
              <Button
                icon={undefined}
                classNames="px-[26px] py-[13.5px] rounded-[99px] border hover:border-2 border-neutral-400 text-center text-[#22223B] text-sm font-[600] capitalize leading-[16.80px] hidden md:block"
                onClick={handleSignInSignUpClick}
              >
                Sign In / Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* <div className="h-[300px] w-full bg-red-200" /> */}
      {isSideBar && (
        <Sidebar
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          data={HEADER_MENU}
          setOpen={setIsSidebar}
          handleLogout={handleLogout}
        />
      )}
      {isOpen && (
        <ArticlePopup
          isOpen={isOpen}
          handleSignInSignUpClick={handleSignInSignUpClick}
          isButton={isButton}
        />
      )}
    </header>
  );
};

export default Header;
