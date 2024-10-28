"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API_URL } from "src/utils/constants";
import LoggedOutView from "src/components/LoggedOutView";
import { ArrowUpIcon } from "src/assets/icons";
import LogoSvg from "src/assets/Article/logo.svg";
import GoatImg from "src/assets/SignUp/GoatSvg.svg";
import CrossSvg from "src/assets/Article/CrossSvg.svg";
import ErrorIcon from "src/assets/SignUp/ErrorIcon.svg";
import EyeSvg from "src/assets/LoginPage/EyeSvg.svg";
import OpenEyeSvg from "src/assets/LoginPage/OpenEyeSvg.svg";
import GoogleButtonSvg from "src/assets/SignUp/GoogleButtonSvg.svg";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "src/lib/feature/users/userSlice";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";

const LogIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isAuthenticated = () => {
    return !!cookies.token;
  };
  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const registerInfo = {
      identifier: data?.email,
      password: data?.password,
    };

    try {
      const logIn = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });

      const logInResponse = await logIn.json();
      const userId = logInResponse.user.id;

      const userInfo = {
        email: logInResponse.user.email,
        username: logInResponse.user.username,
        id: userId,
      };

      if (logIn.ok) {
        setLoading(false);
        setCookie("token", logInResponse.jwt, { path: "/" });
        dispatch(addUser(userInfo));
        toast.success("Your login was successful!");
        setTimeout(() => {
          router.push("/");
        }, 1400);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };
  return (
    <LoggedOutView
      footer={{
        cta: "Don't have an account?",
        link: "/register",
        text: "Sign up",
      }}
    >
      <ToastContainer />
      <div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <Link href={`/`}>
              <img src={LogoSvg.src} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between lg:hidden pt-[24px] lg:p-0">
          <img src={GoatImg.src} alt="goat" />
          <Link href="/">
            <img src={CrossSvg.src} alt="cross" />
          </Link>
        </div>
        <div className="mt-[32px]">
          <p className="text-[26px] lg:text-[32px] leading-[40px] font-[600] text-center">Log In to your account</p>
        </div>
        <div className="lg:px-[163px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[40px]">
              <div className="border-[1px] relative border-[#DCDCE0] px-[20px] mb-[16px] rounded-[24px] py-[9px]">
                <label htmlFor="email" className="text-[13px] text-[#989898] font-[400] leading-[19.5px]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="focus:outline-none w-[100%] appearance-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors?.email && (
                <p className="text-red-500 text-[14px]  -mt-3 ml-2 mb-2 flex gap-x-1">
                  <img src={ErrorIcon.src} alt="loading" /> {errors?.email?.message}*
                </p>
              )}
              <div className="border-[1px] border-[#DCDCE0] px-[20px] mb-[16px] rounded-[24px] pt-[29px] pb-[9px] relative flex items-center">
                <label htmlFor="password" className="text-[13px] text-[#989898] font-[400] leading-[19.5px] absolute top-[9px] left-[7px] bg-white ml-[14px]">
                  Password *
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder=" "
                  className="focus:outline-none w-full"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <img
                  src={isPasswordVisible ? EyeSvg.src : OpenEyeSvg.src}
                  alt="toggle password visibility"
                  className="cursor-pointer absolute top-[20px] right-[20px]"
                  onClick={togglePasswordVisibility}
                />
              </div>
              {errors?.password && <p className="text-red-500 text-[14px]  -mt-3 ml-2 mb-2">{errors?.password?.message}*</p>}
              <div className="flex justify-between px-4">
                <Link href="/forgot-password" onMouseDown={(e) => e.preventDefault()} className="text-[#FF6525]  text-[14px] font-[500] leading-[24px] cursor-pointer ">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button
              loading={loading}
              type={"submit"}
              icon={<ArrowUpIcon />}
              classNames={`cursor-pointer flex items-center justify-center py-[14.5px] px-auto w-full lg:w-[405px] mt-[20px] gap-[10px] text-[16px] font-[600] leading-[19.2px] text-center border-[1px] rounded-[99px] bg-[#FF6525] text-white`}
            >
              Log in
            </Button>
            <div className="mt-[18px] flex justify-center gap-[12px] items-center">
              <div className="w-[100%] h-[1px] border-[#DBDBDB] border-[1px]"></div>
              <p className="text-center text-[#696969] text-[12px] font-[400] capitalize">or</p>
              <div className="w-[100%] h-[1px] border-[#DBDBDB] border-[1px]"></div>
            </div>
            <div>
              <button className="flex items-center justify-center gap-[16px] mt-[16px] border-[1px] border-[#F0F0F0] rounded-[99px] py-[16px] w-[100%] lg:px-[77px]">
                <img src={GoogleButtonSvg.src} alt="google button" />
                <p className="font-[500] text-[14px] leading-[14px]">Continue with Google</p>
              </button>
            </div>
            <div className="flex items-center justify-center gap-[6px] mt-[16px]">
              <p className="text-[14px] font-[500] leading-[24px]">Dont't have an account?</p>
              <Link href={`/register`}>
                <p className="text-[14px] font-[500] leading-[24px] text-[#FF6525] cursor-pointer">Sign Up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LoggedOutView>
  );
};

export default LogIn;
