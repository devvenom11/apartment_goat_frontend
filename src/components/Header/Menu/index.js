import Link from "next/link";
import React from "react";

export const Menu = ({ data, setIsMenu ,isMenu}) => {
  return (
    <div className="w-full absolute  right-0 left-0 top-14 pt-10  z-50 hidden lg:block " onMouseLeave={() => setIsMenu("")}>
      <div className="w-full bg-white ">
        <div className="w-full pt-10 pb-[100px] px-11 flex items-start justify-between ">
          {data?.menu?.map((item, index) => {
            return (
              <div className={`${data?.title === "apartment" ? "w-1/5" : "w-1/4"} w-1/5`} key={index}>
                <h4 className="text-[18px] font-semibold text-[#22223B] mb-4">{item?.title}</h4>
                <ul className="flex flex-col gap-y-4">
                  {item?.items?.map((_item, idx) => {
                    return (
                      <li className="text-sm font-medium text-[#5C5C6C] cursor-pointer" key={idx}>
                        <Link href={`/apartments/${_item?.slug?? "#"}`}>
                        {_item?.name?_item.name.replace(', Chicago, IL',''): _item?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="w-1/5"></div>
        </div>
      </div>
    </div>
  );
};
