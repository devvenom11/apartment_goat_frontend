"use client";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { ArrowUpIcon } from "src/assets/icons";
import PhoneNumberInput from "../../common/PhoneInput";
import { useForm } from "react-hook-form";
import { API_URL } from "src/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "src/lib/feature/users/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AccountProfile = () => {
  const [phoneNumber, setPhoneNumber] = useState("683 664-8202");
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleVerificationCode = () => {
    setPopup(false);
    setCPopup(true);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      username: data.fullName,
      email: data.email,
      phoneNumber:phoneNumber,
    };
    try {
      const update = await fetch(`${API_URL}/api/users/${userInfo.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const updateRes = await update.json();
      const userData = {
        name: updateRes.username,
        email: updateRes.email,
        id: updateRes.id,
        phoneNumber:updateRes.phoneNumber,
      };
      if (updateRes?.confirmed) {
        dispatch(addUser(userData));
        toast.success("Username and email successfully updated.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="max-w-[1076px] mx-auto px-6 lg:px-4 myFontFamily">
      <ToastContainer />

      <p className="text-[36px] font-[600] mt-[64px] mb-[24px]">My Account</p>
      <div className="flex gap-[24px] md:justify-between items-center mb-[40px] px-[24px] py-[16px] border-[1px] border-[#FF652533] rounded-[24px] bg-[#FAF7F3]">
        <p className="text-[16px] font-[400] leading-[20.8px] text-[#22223B]">
          Hey alex, please verify your phone number so you don't miss any
          notifications!
        </p>
        <button className="py-[12px] text-[14px] font-[600] px-[24px] bg-[#FF6525] rounded-[99px] text-[#FFFFFF] hidden md:block">
          Verify phone number
        </button>
        <button className="ver:scale-105 transition-transform duration-250  bg-brand py-[20px] px-[20px] rounded-[99px] block md:hidden">
          <ArrowUpIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-[20px] font-[500] mb-[16px]">Profile</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[24px]">
          <div class="input-container border-[1px] border-[#DCDCE0] px-[20px]  rounded-[24px] py-[9px] ">
            <label
              for="first-name"
              className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
            >
              Full name
            </label>
            <input
              {...register("fullName")}
              type="text"
              id="first-name"
              placeholder=" "
              defaultValue={userInfo?.name || userInfo?.username}
              className="focus:outline-none  w-[100%]"
            />
          </div>

          <div className="w-full rounded-[24px] pb-[12px] relative ">
            <label
              htmlFor="phone-number"
              className="text-[13px] absolute   mb-[2px] top-3 z-50 ml-[108px] font-[400] text-[#989898]"
            >
              Phone number
            </label>
            <PhoneInput
              inputProps={{
                name: "phoneNumber", // Register with RHF
                id: "phone-number",
                required: true,
              }}
              country={"us"}
              value={userInfo?.phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
            />
          </div>
          <div class="input-container border-[1px] border-[#DCDCE0] px-[20px]  rounded-[24px] py-[9px]">
            <label
              for="first-name"
              className="text-[13px] font-[400] leading-[19.5px] text-[#989898] "
            >
              {" "}
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="first-name"
              placeholder=" "
              defaultValue={userInfo.email}
              className="focus:outline-none  w-[100%]"
            />
          </div>
        </div>
        <div className="flex justify-end mt-[32px]  lg:ml-[900px]  lg:w-[153px]">
          <button
            type="submit"
            className="py-[16px] px-[32px] w-full rounded-[99px] bg-[#22223B] text-[12px] font-[600] leading-[14.4px] text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;
