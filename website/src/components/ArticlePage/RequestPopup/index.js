import React, { useState } from "react";
import Link from "next/link";
import CrossSvg from "../../../assets/Article/CrossSvg.svg";
import LogoSvg from "../../../assets/Article/logo.svg";

const RequestCodePopup = ({ setPopup }) => {
  const [vCode, setVCode] = useState(null);
  const handleVerificationCode = () => {
    setPopup(false);
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
              <img src={LogoSvg.src} alt="logo" />
            </Link>
          </div>
          <div>
            <p className="text-[14px] font-[400] leading-[18px] text-center ">Enter the verification code we sent to</p>
            <h2 className="text-[21px] font-[600] leading-[31.5px] text-[#22223B] text-center mt-[16px]">+38********52</h2>
            <div className="flex gap-[17px] items-center w-full  border-[1px] border-[#22223B29] rounded-[99px] py-[14px] mt-[24px] pl-[14px]">
              <input
                type="text"
                value={vCode}
                onChange={(e) => setVCode(e.target.value)}
                name="code"
                placeholder="6-digital code"
                className="focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
        </div>

        <div className=" sm:auto">
          <div>
            <p className="w-full text-[14px] font-[400] leading-[18px] mt-[40px] text-[#676767] text-center">
              Didn't receive your verification code? Request a new one in: <span className="text-[14px] font-[500] text-black">31</span>
            </p>
            <button
              disabled={!vCode}
              onClick={handleVerificationCode}
              className="transition-all duration-150 ease-in-out disabled:cursor-default disabled:opacity-50 w-full bg-[#FF6525] text-[16px] font-[600] leading-[19.2px] py-[14.5px] px-[77px] rounded-[99px] text-[#ffff] mt-[24px] cursor-pointer"
            >
              Request new code
            </button>
          </div>
          <div className="mt-[18px]">
            <p className="text-[12px] leading-[20px] font-[400] text-[#676767] text-center">If you need additional help, contact support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCodePopup;
