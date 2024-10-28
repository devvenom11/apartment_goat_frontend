import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LoginIcon, Logo, ReportIcon } from "../../../assets/icons";
import OutsideClickHandler from "react-outside-click-handler";
export const Sidebar = ({ isMenu, setIsMenu, data, setOpen }) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div className=" bg-white shadow-inner fixed top-0 bottom-0 z-50  p-4 overflow-y-auto block lg:hidden">
        <div className="mb-6 pr-[80px]">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="w-full ">
          <div
            className={`w-full  items-center ${isMenu === "neighborhoods" ? "hidden" : "flex"} ${isMenu === "apartment" ? "  justify-start gap-x-[1px] pt-[14px] pb-6 border-b-[1px] border-[#DBDBDB]" : "justify-between py-[14px]"}   cursor-pointer`}
            onClick={() => {
              if (isMenu !== "apartment") {
                setIsMenu("apartment");
              } else {
                setIsMenu("");
              }
            }}
          >
            {isMenu === "apartment" && <ChevronLeft />}
            <p className="text-[14px] font-medium text-[#22223B]">Find an apartment</p>
            {isMenu !== "apartment" && <ChevronRight />}
          </div>
          {isMenu === "apartment" && (
            <div className="w-full flex flex-col gap-y-8 py-6">
              {data?.apartment?.menu?.map((item, idx) => {
                return (
                  <div className="w-full" key={idx}>
                    <h4 className="text-[14px] text-[#22223B] font-semibold mb-6">{item?.title}</h4>
                    <ul className="flex flex-col gap-y-6">
                      {item?.items?.map((_item, _idx) => {
                        return (
                          <Link href={`/apartments/${item?.slug ?? "#"}`} key={_idx}>
                            <li className="text-[12px] text-[#5C5C6C] font-medium">{_item?.name?_item.name.replace(', Chicago, IL',''): _item?.label}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-full">
          <div
            className={`w-full  items-center ${isMenu === "apartment" ? "hidden" : "flex"} ${isMenu === "neighborhoods" ? "  justify-start gap-x-[1px] pt-[14px] pb-6 border-b-[1px] border-[#DBDBDB]" : "justify-between py-[14px]"}   cursor-pointer`}
            onClick={() => {
              if (isMenu !== "neighborhoods") {
                setIsMenu("neighborhoods");
              } else {
                setIsMenu("");
              }
            }}
          >
            {isMenu === "neighborhoods" && <ChevronLeft />}
            <p className="text-[14px] font-medium text-[#22223B]">Chicago Neighborhoods</p>
            {isMenu !== "neighborhoods" && <ChevronRight />}
          </div>
          {isMenu === "neighborhoods" && (
            <div className="w-full flex flex-col gap-y-8 py-6">
              {data?.neighborhoods?.menu?.map((item, idx) => {
                return (
                  <div className="w-full" key={idx}>
                    <h4 className="text-[14px] text-[#22223B] font-semibold mb-6">{item?.title}</h4>
                    <ul className="flex flex-col gap-y-6">
                      {item?.items?.map((_item, _idx) => {
                        return (
                          <Link href={`/apartments/${item?.slug ?? "#"}`} key={_idx}>
                            <li className="text-[12px] text-[#5C5C6C] font-medium">{_item?.name}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-full mt-6 border-t-[1px] border-[#DBDBDB] py-6 flex flex-col">
          <div className="py-[14px] flex items-center gap-x-3">
            <ReportIcon />
            <p className="text-[14px] text-[#22223B] font-medium">Report a Lease</p>
          </div>
          <div className="py-[14px] flex items-center gap-x-3">
            <LoginIcon />
            <p className="text-[14px] text-[#22223B] font-medium">Sign In / Sign Up </p>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
