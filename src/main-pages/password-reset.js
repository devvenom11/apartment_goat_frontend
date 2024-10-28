'use client'
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LogoSvg from "src/assets/Article/logo.svg";
import GoatImg from "src/assets/SignUp/GoatSvg.svg";
import CrossSvg from "src/assets/Article/CrossSvg.svg";
import Link from "next/link";
import { ArrowUpIcon } from "src/assets/icons";
import LoggedOutView from "src/components/LoggedOutView";
import { API_URL } from "src/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  let code = searchParams.get("code");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          password: data.password,
          passwordConfirmation: data.confirmPassword,
        }),
      });

      const resetResponse = await res.json();
      if (res.ok) {
        toast.success("Your password has been changed successfully.");
        router.push("/login");
      } else {
        toast.error("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again.");
    }
  }; 

  return (
    <LoggedOutView>
      <ToastContainer />

      <div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <img src={LogoSvg.src} alt="Logo" />
          </div>
        </div>
        <div className="flex justify-between lg:hidden pt-[24px] lg:p-0">
          <img src={GoatImg.src} alt="Goat" />
          <Link href="/">
            <img src={CrossSvg.src} alt="Cross" />
          </Link>
        </div>
        <div className="mt-[32px]">
          <p className="text-[26px] lg:text-[32px] leading-[40px] font-[600] text-center">
            Reset your password
          </p>
        </div>

        <div className="lg:px-[163px]">
          <div className="mt-[16px]">
            <p className="text-[14px] font-[400] leading-[24.5px] text-[#5C5C6C] text-center">
              Choose a passphrase of 15 characters or a password of 8
              characters, including letters and numbers.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[40px]">
              <div className="border-[1px] relative border-[#DCDCE0] px-[20px] mb-[16px] rounded-[24px] py-[9px]">
                <label
                  htmlFor="password"
                  className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder=" "
                  className="focus:outline-none w-[100%] appearance-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  // onChange={handlePasswordChange}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-[14px] -mt-3 ml-2 mb-2">
                  {errors.password.message}
                </p>
              )}

              <div className="border-[1px] relative border-[#DCDCE0] px-[20px] mb-[16px] rounded-[24px] py-[9px]">
                <label
                  htmlFor="confirm-password"
                  className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder=" "
                  className="focus:outline-none w-[100%] appearance-none"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                  // onChange={handlePasswordChange}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-[14px] -mt-3 ml-2 mb-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              className={`cursor-pointer flex items-center justify-center py-[14.5px] px-auto w-full lg:w-[405px] mt-[32px] text-[16px] font-[600] leading-[19.2px] gap-[10px] text-center border-[1px] rounded-[99px] ${
                !isButtonDisabled
                  ? "bg-[#FF65251A] text-[#5C5C6C]"
                  : "bg-[#FF6525] text-white"
              }`}
              type="submit"
              // disabled={isButtonDisabled}
            >
              <ArrowUpIcon
                backgroundColor={!isButtonDisabled ? "#5C5C6C" : "#FFFFFF"}
              />
              <p className="text-[16px] font-[600] leading-[19.2px]">
                Reset Password
              </p>
            </button>
          </form>
          <div className="flex gap-[6px] justify-center mt-[16px] lg:hidden">
            <p className="text-[14px] font-[500] leading-[24px] text-[#222222]">
              Don't have an account?
            </p>
            <Link href="/signup">
              <p className="cursor-pointer text-[14px] font-[500] leading-[24px] text-[#FF6525]">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </LoggedOutView>
  );
};

export default ResetPassword;
