// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { LoadScript, Autocomplete } from "@react-google-maps/api";
// import { SearchIcon, SearchSvg } from "src/assets/icons";
// import { HEADER_MENU } from "src/utils/data";
// import { GOOGLE_MAP_API_KEY } from "src/utils/constants";
// import Button from "../Button";
// import Link from "next/link";

// const chicagoBounds = {
//   north: 42.023131,
//   south: 41.644335,
//   west: -87.940101,
//   east: -87.523661,
// };

// export const SearchBar = ({ icon,slug }) => {
 
//   const router = useRouter();
//   const [dropDown, setDropDown] = useState(false);
//   const [autocompleteService, setAutocompleteService] = useState(null);
 
  
//   const onPlaceChanged = () => {
//     if (autocompleteService) {
//       const place = autocompleteService.getPlace();
//       if (place.geometry && place.geometry.location) {
//         const lat = place.geometry.location.lat();
//         const lng = place.geometry.location.lng();
//         const locality = place.name;
//         const region = place.address_components.find((component) =>
//           component.types.includes("administrative_area_level_1")
//         )?.short_name;
//         const slugRes = `${locality.toLowerCase()}-${region.toLowerCase()}`;
//         const slug = slugRes
//           .toLowerCase()
//           .replace(/,/g, "")
//           .replace(/\s+/g, "-")
//           .replace(/[^\w-]+/g, "");
//         router.push(`/apartments/${slug}?lat=${lat}&lng=${lng}`);
//       } else {
//         console.error("No geometry found for place");
//       }
//     }
//   };

//   const handleLoad = (autocomplete) => {
//     setAutocompleteService(autocomplete);
//   };

//   const handleInputChange = (event) => {
//     const inputValue = event.target.value;
//     if (inputValue.trim().length > 0) {
//       setDropDown(false);
//     } else {
//       setDropDown(true);
//     }
//   };
   

//   return (

//     <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} libraries={["places"]}>
//       <Autocomplete
//         onLoad={handleLoad}
//         onPlaceChanged={onPlaceChanged}
//         types={["(cities)"]}
//         bounds={chicagoBounds}
//         componentRestrictions={{ country: "us", administrativeArea: "CA" }}
//         // className={`${icon ? "apartmentSearch" : "cusHero"}`}
//         // id={icon ? "apartmentSearch" : "cusHero"}
//       >
//         <div
//           className={`${icon ? "w-full bg-[#FEFEFE] outline-none focus:outline-none border-[1px]  border-[#D6D6DA] rounded-[120px] h-full grow px-4 text-sm font-semibold flex items-center" : " max-w-[700px] relative w-full md:w-auto pl-[17px] pr-3 mx-auto h-[66px] rounded-[174px] border border-[#989898] flex items-center justify-between bg-[#FEFEFE] "}`}
//         >
//           <div className="w-full pr-2">
//             <input
//               type="text"
//               placeholder={`${icon ? "Search a city or building" : "Where do you want to live?"}`}
//               className={`${icon ? "bg-[#FEFEFE] py-[9px] outline-none focus:outline-none px-1 rounded-[120px] h-full w-full grow  text-sm font-semibold" : "placeholder-[#DBDBDB] md:placeholder-[#989898] text-base w-full h-full focus-visible:outline-none"}`}
//               onClick={() => setDropDown(true)}
//               onChange={handleInputChange}
//               // value={slug}
//               defaultValue={slug}

//             />
//           </div>
//           {icon ? (
//             <div>
//               <SearchSvg />
//             </div>
//           ) : (
//             <>
//               <div className="hidden md:block">
//                 <Button
//                   icon={undefined}
//                   classNames="text-[16px] leading-[19px] font-semibold px-[37px] py-[15px] bg-[#22223B] text-[#FEFEFE] rounded-[99px]"
//                   onClick={undefined}
//                 >
//                   Search
//                 </Button>
//               </div>

//               <div className="block md:hidden">
//                 <SearchIcon className="sm:hidden inline-block" />
//               </div>
//             </>
//           )}
//         </div>
//       </Autocomplete>
//       {dropDown && (
//         <ul
//           className={`${icon ? "max-w-[203px]" : "max-w-[660px] "} max-h-[182px] absolute mx-auto right-0 left-0 flex flex-col w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-[7px] z-10 whitespace-nowrap overflow-y-auto no-scrollbar`}
//         >
//           {HEADER_MENU?.neighborhoods?.menu[0]?.items?.map((option, index) => (
//             <Link
//               key={index}
//               href={`/apartments/${option.slug}?lat=${option.lat}&lng=${option.lng}`}
//               className="px-4 py-2 cursor-pointer hover:bg-brand hover:bg-opacity-10 hover:text-brand text-sm"
//             >
//               {option.name}
//             </Link>
//           ))}
//         </ul>
//       )}
//     </LoadScript>
//   );
// };


import React, { useEffect, useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { SearchIcon, SearchSvg } from "src/assets/icons";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HEADER_MENU } from "src/utils/data"; // Assuming this is where your static dropdown data is stored
import { GOOGLE_MAP_API_KEY } from "src/utils/constants";

const chicagoBounds = {
  north: 42.023131,
  south: 41.644335,
  west: -87.940101,
  east: -87.523661,
};

export const SearchBar = ({ icon, slug }) => {
  const router = useRouter();
  const [noOptionsFound, setNoOptionsFound] = useState(false);

  const [dropDown, setDropDown] = useState(false); // For managing the static dropdown
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => console.log("Google Maps API script loaded");
      document.head.appendChild(script);
    }
  }, [GOOGLE_MAP_API_KEY]);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // bounds: new window.google.maps.LatLngBounds(
      //   new window.google.maps.LatLng(chicagoBounds.south, chicagoBounds.west),
      //   new window.google.maps.LatLng(chicagoBounds.north, chicagoBounds.east)
      // ),
      componentRestrictions: { country: "us" },
    },
    debounce: 300,
  });
 
  const handleSelect = async (description) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      const locality = results[0].address_components[0].long_name;
      const region = results[0].address_components.find((component) =>
        component.types.includes("administrative_area_level_1")
      )?.short_name;

      const slugRes = `${locality.toLowerCase()}-${region.toLowerCase()}`;
      const slug = slugRes.replace(/,/g, "").replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

      router.push(`/apartments/${slug}?lat=${lat}&lng=${lng}`);
    } catch (error) {
      console.error("Error getting the place details:", error);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setDropDown(false); // Close static dropdown if user types in the input
    } else {
      setDropDown(true); // Show static dropdown when input is empty
    }
  };
   
  return (
    <div>
      <div
        className={`${icon ? "w-full bg-[#FEFEFE] outline-none focus:outline-none border-[1px] border-[#D6D6DA] rounded-[120px] h-full grow px-4 text-sm font-semibold flex items-center" : "max-w-[700px] relative w-full md:w-auto pl-[17px] pr-3 mx-auto h-[66px] rounded-[174px] border border-[#989898] flex items-center justify-between bg-[#FEFEFE]"}`}
      >
        <div className="w-full pr-2">
          <input
            type="text"
            placeholder={icon ? "Search a city or building" : "Where do you want to live?"}
            className={`${icon ? "bg-[#FEFEFE] py-[9px] outline-none focus:outline-none px-1 rounded-[120px] h-full w-full grow text-sm font-semibold" : "placeholder-[#DBDBDB] md:placeholder-[#989898] text-base w-full h-full focus-visible:outline-none"}`}
            // value={value}
            onChange={handleInputChange}
            defaultValue={slug}
            onClick={() => setDropDown(true)} // Show static dropdown when input is clicked
            // disabled={!ready}
          />
        </div>
        {icon ? (
          <div>
            <SearchSvg />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Dynamic Google Autocomplete Suggestions */}
      {status === "OK" && (
        <ul
          className={`${icon ? "max-w-[203px]" : "max-w-[660px] "} max-h-[182px] absolute mx-auto right-0 left-0 flex flex-col w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-[7px] z-10 whitespace-nowrap overflow-y-auto no-scrollbar`}
        >
          {data.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-brand hover:bg-opacity-10 hover:text-brand text-sm"
              onClick={() => handleSelect(suggestion.description)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}

      {/* Static Dropdown (for neighborhoods or categories) */}
      {dropDown && (
        <ul
          className={`${icon ? "max-w-[203px]" : "max-w-[660px] "} max-h-[182px] absolute mx-auto right-0 left-0 flex flex-col w-full bg-white border-[1px] border-[#D6D6DA] rounded-[10px] mt-[7px] z-10 whitespace-nowrap overflow-y-auto no-scrollbar`}
        >
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
  );
};
