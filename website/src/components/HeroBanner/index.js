import React, { useState, useEffect } from "react";
import {
  BuildingsIcon,
  BuildingsIconMobile,
  HeroShockIcon,
  SearchIcon,
} from "../../assets/icons";
import Button from "../common/Button";
import Link from "next/link";
import { HEADER_MENU, searchList } from "src/utils/data";
import { useRouter } from "next/navigation";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "src/utils/constants";

const chicagoBounds = {
  north: 42.023131,
  south: 41.644335,
  west: -87.940101,
  east: -87.523661,
};

const HeroBanner = () => {
  const router = useRouter();
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
        router.push(`/apartments/${slug}`);
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
    <section className="bg-[#F5EEE8] relative mb-[60px] md:mb-[142px] myFontFamily">
      <div className="max-w-[962px] h-[calc(100vh - 68px)] md:h-auto mx-auto pt-[34px] md:pt-[51px] pb-[310px] static z-10 md:px-0 px-4">
        <div className="pb-[25px] md:pb-[57px] border-b border-[#989898]">
          <h1 className="text-[53px] md:text-[70px] leading-[55px] md:leading-[70px] font-semibold text-[#22223B] text-center tracking-[0.07em]">
            Your Dream Apartment +{" "}
            <span className="static">
              Cashback
              <span className="absolute right-[208px] left-0 top-[193px] md:mb-0 mb-2">
                <HeroShockIcon />
              </span>
            </span>{" "}
            = Bliss
          </h1>
        </div>
        <div className="pt-6 md:pt-7">
          <p className="text-center text-[16px] md:text-[25px] font-[400px] leading-[24px] md:leading-[34px] text-[#22223B]">
            Lease in Chicago through Apartment Goats and enjoy up to $450 in
            rebates
          </p>
        </div>
        <div className="pt-7 md:pt-10 relative z-[9]">
          <Autocomplete
            onLoad={handleLoad}
            onPlaceChanged={onPlaceChanged}
            types={["(cities)"]}
            bounds={chicagoBounds}
            componentRestrictions={{ country: "us", administrativeArea: "CA" }}
            className="cusHero"
          >
            <div className="max-w-[700px] relative w-full md:w-auto pl-[17px] pr-3 mx-auto h-[66px] rounded-[174px] border border-[#989898] flex items-center justify-between bg-[#FEFEFE]">
              <div className="w-full pr-2">
                <input
                  type="text"
                  placeholder="Where do you want to live?"
                  className="placeholder-[#DBDBDB] md:placeholder-[#989898] text-base w-full h-full py-2 focus-visible:outline-none"
                  onClick={() => setDropDown(true)}
                  onChange={handleInputChange}
                />
              </div>
              <div className="hidden md:block">
                <Button
                  icon={undefined}
                  classNames="text-[16px] leading-[19px] font-semibold px-[37px] py-[15px] bg-[#22223B] text-[#FEFEFE] rounded-[99px]"
                  onClick={undefined}
                >
                  Search
                </Button>
              </div>
              <div className="block md:hidden">
                <SearchIcon className="sm:hidden inline-block" />
              </div>
            </div>
          </Autocomplete>
          {dropDown && (
            <ul className="max-h-[182px] absolute max-w-[660px] mx-auto right-0 left-0 flex flex-col w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-[7px] z-10 whitespace-nowrap overflow-y-auto no-scrollbar">
              {HEADER_MENU?.neighborhoods?.menu[0]?.items?.map((option, index) => (
                <Link
                  key={index}
                  href={`/apartments/${option.slug}`}
                  className="px-4 py-2 cursor-pointer hover:bg-brand hover:bg-opacity-10 hover:text-brand text-sm"
                >
                  {option.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-full mx-auto max-w-[1440px] ">
        <div className="lg:flex hidden w-full overflow-hidden justify-center">
          <BuildingsIcon width="1440px" height="768px" />
        </div>
        <div className="lg:hidden block">
          <BuildingsIconMobile width="100%" height="768px" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
