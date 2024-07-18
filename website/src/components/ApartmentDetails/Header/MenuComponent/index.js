import React from "react";
import MyAccountSvg from "../../../../assets/Header/AccountSvg.svg";
import HeartSvg from "../../../../assets/Header/HeartSvg.svg";
import FlagSvg from "../../../../assets/Header/FlagSvg.svg";
import LogoOutVector from "../../../../assets/Article/LogOutSvg.svg";
import Link from "next/link";

const MenuComponent = ({ handleLogout }) => {
  return (
    <div className="w-[246px] shadow-xl bg-white rounded-[16px]">
      <div className="px-[16px] py-[26px] cursor-default">
        <ul className="cursor-default">
          <li className=" cursor-pointer text-[16px] font-[500] leading-[19.2px] text-center mb-[18px]">
            <Link className="flex items-center gap-[12px]" href="/my-account">
              <img src={MyAccountSvg.src} alt="loading" />
              My Account
            </Link>
          </li>
          <li className="cursor-pointer text-[16px] font-[500] leading-[19.2px] text-center mb-[18px]">
            <Link className="flex items-center gap-[12px]" href="/properties">
              <img src={HeartSvg.src} alt="loading" />
              My Properties
            </Link>
          </li>
          <li className="cursor-pointer text-[16px] font-[500] leading-[19.2px] text-center mb-[26px]">
            <Link className="flex items-center gap-[12px]" href="#">
              <img src={FlagSvg.src} alt="loading" />
              Report A Lease
            </Link>
          </li>
        </ul>
        <hr className="cursor-default"></hr>
        <div onClick={handleLogout} className="flex items-center gap-[13px] mt-[20px] cursor-pointer ">
          <img src={LogoOutVector.src} alt="error" />
          <p className="text-[16px] font-[500] leading-[19.2px] ">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
