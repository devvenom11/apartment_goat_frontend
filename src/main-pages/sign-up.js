"use client";
import React, { useState, useEffect } from "react";
import LogoSvg from "src/assets/Article/logo.svg";
import PhoneNumberInput from "src/components/common/PhoneInput";
import GoogleButtonSvg from "src/assets/SignUp/GoogleButtonSvg.svg";
import GoatImg from "src/assets/SignUp/GoatSvg.svg";
import CrossSvg from "src/assets/Article/CrossSvg.svg";
import ErrorIcon from "src/assets/SignUp/ErrorIcon.svg";
import Link from "next/link";
import { ArrowUpIcon } from "src/assets/icons";
import LoggedOutView from "src/components/LoggedOutView";
import { API_URL } from "src/utils/constants";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "src/lib/feature/users/userSlice";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = () => {
    return !!cookies.token;
  };
  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const registerInfo = {
      username: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: phoneNumber,
    };
    try {
      const register = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });
      if (!register.ok) {
        throw new Error("Registration failed");
      }

      const registerRes = await register.json();
      const userData = {
        name: registerRes.user.username,
        email: registerRes.user.email,
        id: registerRes.user.id,
        phoneNumber: registerRes.user.phoneNumber,
      };
      setCookie("token", registerRes.jwt, { path: "/" });

      if (registerRes.user.role.name === "Authenticated") {
        dispatch(addUser(userData));
        setLoading(false);
        toast.success("Registration successful!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };
  return (
    <LoggedOutView>
      <ToastContainer />
      <div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <Link href={`/`}>
              <img src={LogoSvg.src} alt="loading" />
            </Link>
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
            Sign Up for new account
          </p>
        </div>
        <div className="lg:px-[163px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[40px]">
              <div className="border-[1px] border-[#DCDCE0] px-[20px] mb-[20px] rounded-[24px] py-[9px]">
                <label
                  htmlFor="full-name"
                  className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
                >
                  Full name *
                </label>
                <input
                  type="text"
                  id="full-name"
                  placeholder=""
                  className="focus:outline-none w-[100%]"
                  {...register("fullName", { required: "Name is required " })}
                />
              </div>
              {errors.fullName && (
                <p className=" text-red-500 text-[14px] -mt-5 ml-2 mb-2">
                  {errors.fullName.message}
                </p>
              )}
              <div
                className={`border-[1px] relative border-[#DCDCE0] px-[20px] mb-4 rounded-[24px] py-[9px]`}
              >
                <label
                  htmlFor="email"
                  className="text-[13px] text-[#989898] font-[400] leading-[19.5px]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="focus:outline-none w-[100%] appearance-none"
                  {...register("email", {
                    required: "Email is required*",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mb-4 text-red-500 text-[14px] flex items-center gap-[5px] bottom-[-19px] mt-1">
                  <img src={ErrorIcon.src} alt="loading" />
                  {errors.email.message}
                </p>
              )}
              <div className="border-[1px] border-[#DCDCE0] px-[20px] mb-[20px] rounded-[24px] py-[9px]">
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
                  className="focus:outline-none w-[100%]"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className=" text-red-500 text-[14px]  -mt-5 ml-2 mb-2">
                  {errors.password.message}
                </p>
              )}
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
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                />
              </div>
            </div>
            <Button
              loading={loading}
              type={"submit"}
              icon={<ArrowUpIcon />}
              classNames={`cursor-pointer flex items-center justify-center py-[14.5px] px-auto w-full lg:w-[405px] mt-[20px] gap-[10px] text-[16px] font-[600] leading-[19.2px] text-center border-[1px] rounded-[99px] bg-[#FF6525] text-white`}
            >
              Signup
            </Button>

            <div className="mt-[18px] flex justify-center gap-[12px] items-center ">
              <div className="w-[100%] h-[1px] border-[#DBDBDB] border-[1px]"></div>
              <p className="text-center text-[#696969] text-[12px] font-[400] capitalize">
                or
              </p>
              <div className="w-[100%] h-[1px] border-[#DBDBDB] border-[1px]"></div>
            </div>
            <div>
              <button className="flex items-center  justify-center gap-[16px] mt-[16px] border-[1px] border-[#F0F0F0] rounded-[99px] py-[16px] w-[100%] lg:px-[77px]">
                <img src={GoogleButtonSvg.src} alt="loading" />
                <p className="font-[500] text-[14px] leading-[14px] ">
                  Continue with Google
                </p>
              </button>
            </div>
            <div className="flex items-center justify-center gap-[6px] mt-[16px]">
              <p className="text-[14px] font-[500] leading-[24px]">
                Already have an account?
              </p>
              <Link href="/login">
                <p className="text-[14px] font-[500] leading-[24px] text-[#FF6525] cursor-pointer">
                  Log In
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LoggedOutView>
  );
};

export default SignUp;
