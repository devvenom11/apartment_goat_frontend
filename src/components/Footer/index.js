"use client";
import React from "react";
import Link from "next/link";
import { FacebookIcon, InstaIcon, TiktokIcon } from "../../assets/icons";
import { HEADER_MENU } from "src/utils/data";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const bedsLink = HEADER_MENU?.apartment?.menu?.filter(
    (item) => item?.title === "Apartment Layout"
  );
  return (
    <React.Fragment>
      <footer className="w-full bg-white px-4 lg:px-11 pt-4 md:pt-8 lg:pt-[56px] pb-6 ">
        <div className="w-full flex flex-wrap items-start justify-between pb-[42px] lg:pb-[65px] gap-y-8 ">
          <div className="w-1/2 md:w-1/3 lg:w-fit pr-2 md:pr-0">
            <h4 className="text-[18px] text-[#22223B] font-semibold mb-4">
              Popular Searches
            </h4>
            <ul className="w-full flex flex-col gap-y-4 ">
              <Link href={"/apartments/chicago?search=all"}>
                <li className="text-sm text-[#5C5C6C] font-medium myFontFamily">
                  All Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=luxury"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Luxury Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=loft"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Loft Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=short-term"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Short-Term Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=best"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Best Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=cheap"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Cheap Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=new"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  New Apartments
                </li>
              </Link>
              <Link href={"/apartments/chicago?search=pet-friendly"}>
                <li className="text-sm text-[#5C5C6C] font-medium">
                  Pet Friendly Apartments
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-fit pl-2 md:pl-0">
            {bedsLink?.map((item) => (
              <>
                <h4 className="text-[18px] text-[#22223B] font-semibold mb-4">
                  {item?.title}
                </h4>
                <ul className="w-full flex flex-col gap-y-4">
                  {item?.items?.map((item) => (
                    <button
                      onClick={() => {
                        router.push(`/apartments/${item?.slug}`);
                      }}
                    >
                      <li className="text-sm text-[#5C5C6C] font-medium">
                        {item?.label}
                      </li>
                    </button>
                  ))}
                </ul>
              </>
            ))}
          </div>
          <div className="flex gap-y-8 justify-between lg:w-1/3 gap-x-8 ">
            {HEADER_MENU.neighborhoods?.menu?.map((item) => {
              return (
                <div className="">
                  <h4 className="text-[18px] text-[#22223B] font-semibold mb-4">
                    {item?.title}
                  </h4>
                  <ul className="w-full flex flex-col gap-y-4">
                    {item?.items?.map((item) => (
                      <Link href={`/apartments/${item?.slug ?? "#"}`}>
                        <li className="text-sm text-[#5C5C6C] font-medium">
                          {item?.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-[66%] lg:w-fit flex flex-row lg:flex-col gap-y-4">
            <div className=" pr-2 md:pr-0">
              <h4 className="text-[18px] text-[#22223B] font-semibold mb-4 lg:whitespace-nowrap">
                Popular Amenities
              </h4>
              <ul className="w-full flex flex-col gap-y-4">
                <Link href={"/apartments/chicago?amenity=inUnitLaundry"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    In-Unit Laundry
                  </li>
                </Link>
                <Link href={"/apartments/chicago?amenity=parking"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Parking
                  </li>
                </Link>
                <Link href={"/apartments/chicago?amenity=garageParking"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Garage Parking
                  </li>
                </Link>
                <Link href={"/apartments/chicago?amenity=petFriendly"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Pet Friendly
                  </li>
                </Link>
                <Link href={"/apartments/chicago?amenity=pool"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">pool</li>
                </Link>
              </ul>
            </div>
            <div className=" pl-2 md:pl-0">
              <h4 className="text-[18px] text-[#22223B] font-semibold mb-4 lg:whitespace-nowrap">
                Apartment Style
              </h4>
              <ul className="w-full flex flex-col gap-y-4">
                <Link href={"/apartments/albany-park-chicago-il?search=houses"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Houses for Rent
                  </li>
                </Link>
                <Link href={"/apartments/albany-park-chicago-il?search=houses"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Townhouses for Rent
                  </li>
                </Link>
                <Link href={"/apartments/albany-park-chicago-il?search=condos"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Condos for Rent
                  </li>
                </Link>
                <Link href={"/apartments/albany-park-chicago-il?search=rooms"}>
                  <li className="text-sm text-[#5C5C6C] font-medium">
                    Room for Rent
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex  flex-col-reverse gap-y-8 md:flex-row md:items-center justify-between pt-6 border-t-[1px] border-[#22223B] border-opacity-10">
          <p className="text-sm text-[#22223B]">
            Copyright © 2021 UI8 LLC. All rights reserved
          </p>
          <div className="flex items-center gap-x-6">
            <Link href={"#"}>
              <FacebookIcon />
            </Link>
            <Link href={"#"}>
              <InstaIcon />
            </Link>
            <Link href={"#"}>
              <TiktokIcon />
            </Link>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
