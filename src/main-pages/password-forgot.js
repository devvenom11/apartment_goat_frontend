"use client";
import React, { useState, useEffect } from "react";
import LogoSvg from "src/assets/Article/logo.svg";
import BackGroundSvg from "src/assets/Article/ApartmentBackgroundSvg.svg";
import GoogleButtonSvg from "src/assets/SignUp/GoogleButtonSvg.svg";

import GoatImg from "src/assets/SignUp/GoatSvg.svg";
import CrossSvg from "src/assets/Article/CrossSvg.svg";
import ErrorIcon from "src/assets/SignUp/ErrorIcon.svg";
import Link from "next/link";
import { ArrowUpIcon } from "src/assets/icons";
import LoggedOutView from "src/components/LoggedOutView";
import { API_URL } from "src/utils/constants";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = {
      email: data?.email,
    };
    try {
      const forgot = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      const forgotResponse = await forgot.json();
       
    } catch (error) {
    }
  };

  return (
    <LoggedOutView>
      <div>
        <div className=" hidden lg:block">
          <div className="flex items-center justify-center">
            <img src={LogoSvg.src} alt="loading" />
          </div>
        </div>
        <div className="flex justify-between lg:hidden pt-[24px] lg:p-0">
          <img src={GoatImg.src} alt="loading" />
          <Link href="/">
            <img src={CrossSvg.src} alt="loading" />
          </Link>
        </div>
        <div className="mt-[32px]">
          <p className="text-[26px] lg:text-[32px] leading-[40px] font-[600] text-center">
            Forgot password?
          </p>
        </div>

        <div className="lg:px-[163px]">
          <div className="mt-[16px]">
            <p className="text-[14px] font-[400] leading-[24.5px] text-[#5C5C6C] text-center">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[40px]">
              <div className="border-[1px] relative border-[#DCDCE0] px-[20px] mb-[16px] rounded-[24px] py-[9px]">
                <label
                  htmlFor="email"
                  className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="focus:outline-none w-[100%] appearance-none"
                  // value={email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs absolute flex items-center gap-[5px] bottom-[-20px] mt-1">
                    <img src={ErrorIcon.src} alt="loading" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`cursor-pointer flex items-center justify-center py-[14.5px] px-auto w-full lg:w-[405px] mt-[32px] text-[16px] font-[600] leading-[19.2px] gap-[10px] text-center border-[1px] rounded-[99px]  bg-[#FF6525] text-white`}
            >
              <ArrowUpIcon backgroundColor={"white"} />
              <p className="text-[16px] font-[600] leading-[19.2px] ">
                Send Link
              </p>
            </button>
          </form>
          <div className="flex gap-[6px] justify-center mt-[16px] lg:hidden">
            <p className="text-[14px] font-[500] leading-[24px] text-[#222222]">
              Don't have account ?
            </p>
            <p className="cursor-pointer text-[14px] font-[500] leading-[24px] text-[#FF6525]">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </LoggedOutView>
  );
};
export default ForgotPassword;
