import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LogOutVector from "../../../assets/Article/LogOutVector.svg";
import CrossSvg from "../../../assets/Article/CrossSvg.svg";
import LogoSvg from "../../../assets/Article/logo.svg";

const LightHousePopup = ({ setPopup, setCPopup, isButton, buttonTitle }) => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleVerificationCode = () => {
    setPopup(false);
    setCPopup(true);
  };

  return (
    <div className="p-[24px]">
      <div onClick={() => setPopup(false)} className="flex justify-end cursor-pointer">
        <img src={CrossSvg.src} alt="error" />
      </div>
 
      <div className="flex flex-col custom-height sm:h-auto justify-between">
        <div>
          <div className="flex justify-center mb-[24px]">
            <Link href={"#"}>
              <img src={LogoSvg.src} alt="logo" className="w-full h-auto" />
            </Link>
          </div>
          <p className="text-[24px] font-[600] leading-[36px] text-center ">Welcome To Lighthouse</p>
          <div className="flex gap-[17px] items-center w-full  border-[1px] border-[#22223B29] rounded-[99px] py-[10px] mt-[24px] pl-[20px]">
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={phone => setPhoneNumber(phone)}
              placeholder="Phone number" className="focus:outline-none focus:border-none"
              inputStyle={{ border: '0px' }}
              buttonStyle={{ border: '0px', backgroundColor: 'white' }}
              dropdownStyle={{
                backgroundColor: "2px solid red",
                boxShadow: "none",
                top: '39px'
              }}
              country-list={{ width: "100%" }}
            />
          </div>



        </div>
        <div className="sm:auto">
          <div>
            <p className="w-full text-[12px] font-[400] leading-[18px] mt-[12px] text-[#676767] text-center">We will send you an SMS to verify your phone number</p>
            <button
              disabled={!phoneNumber}
              onClick={handleVerificationCode}
              className="w-full bg-[#FF6525] text-[16px] font-[600] disabled:cursor-default disabled:opacity-50 transition-all duration-150 ease-in-out leading-[19.2px] py-[14.5px] px-[77px] rounded-[99px] text-[#FFFFFF] mt-[24px] cursor-pointer"
            >

              Get Verification Code

            </button>
          </div>
          <div className="mt-[18px] flex justify-between gap-[16px] items-center ">
            <div className="max-w-[141px] h-[1px] border-[#DBDBDB] border-[1px]"></div>
            <p className="text-center text-[#696969] text-[12px] font-[400] capitalize">or</p>
            <div className="max-w-[141px] h-[1px] border-[#DBDBDB] border-[1px]"></div>
          </div>

          <div className=" border-[1px] border-[#F0F0F0] py-[18.63px] rounded-[24px] mt-[18px] cursor-pointer">
            <Link href="/register">
            <div className="flex gap-[14px] justify-center items-center">
              <img src={LogOutVector.src} alt="loading" />
              <p className="text-[14px] font-[500] leading-[14px] ">Sign Up</p>
            </div>
            </Link>
          </div>
          
          <div className="mt-[18px]">
            <p className="text-[12px] leading-[18px] font-[400] text-[#676767] text-center">
              By creating an account, I accept Apartment Goats's <span className="underline text-black leading-[18px]">Terms of Service </span>
              or <span className="underline text-black leading-[18px]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightHousePopup;
