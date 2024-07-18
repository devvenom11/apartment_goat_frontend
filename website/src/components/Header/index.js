"use client";
import React, { useState, useEffect } from "react";
import { Logo, MenuIcon } from "../../assets/icons";
import Button from "../common/Button";
import Link from "next/link";
import { Menu } from "./Menu";
import { HEADER_MENU } from "../../utils/data";
import { Sidebar } from "./Sidebar";
import ArticlePopup from "../ArticlePage/ArticlePopup";
import LineBarsSvg from "src/assets/Article/lineBars.svg";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "src/lib/feature/users/userSlice";
import MenuComponent from "../ApartmentDetails/Header/MenuComponent";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isMenu, setIsMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBar, setIsSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const token = cookies.token;
    setIsLoggedIn(token !== undefined && !!token);
  }, [cookies.token]);

  const handleLogout = () => {
    removeCookie("token");
    dispatch(logoutUser());
    setIsLoggedIn(false);
    router.push("/");
  };
  return (
    <React.Fragment>
      <header className="px-6 bg-[#F5EEE8] py-[14px] md:py-[18.5px]">
        <div className="w-full relative flex justify-center lg:justify-between items-center px-4 md:px-[45px] mx-auto">
          <div className="w-fit block lg:hidden absolute left-0">
            <span onClick={() => setIsSidebar(true)}>
              <MenuIcon />
            </span>
          </div>
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="items-center justify-center gap-2 hidden lg:flex">
            <Link href={`/apartments/dallas`}>
              <div
                className={`${isMenu === "apartment" ? "bg-white" : ""} px-6 py-[14px] rounded-full`}
                onMouseEnter={() => setIsMenu("apartment")}
              >
                <Button
                  classNames="rounded-full text-[#22223B] text-sm font-[400] capitalize leading-[16.80px] hidden md:block"
                  onClick={() => setIsMenu("apartment")}
                  icon={undefined}
                >
                  Find an apartment
                </Button>
              </div>
            </Link>
            <div
              className={`${isMenu === "neighborhoods" ? "bg-white" : ""} px-6 py-[14px] rounded-full`}
              onMouseEnter={() => setIsMenu("neighborhoods")}
            >
              <Button
                classNames="rounded-full text-[#22223B] text-sm font-[400] capitalize leading-[16.80px] hidden md:block"
                onClick={() => setIsMenu("neighborhoods")}
                icon={undefined}
              >
                Chicago Neighborhoods
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
          {isLoggedIn ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setIsMenuVisible(false);
                }}
              >
                <div
                  className="relative bg-[#FF65250D] pl-[5px] pr-[6px] py-[5px] z-50 border-[1px] border-[#DBDBDB] rounded-[99px] cursor-pointer hidden lg:block"
                  onClick={() => setIsMenuVisible(true)}
                >
                  <div className="flex gap-[8px]">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#FF6525]">
                      <p className="text-white mt-[5px] text-center uppercase">{user?.username ? user?.username?.slice(0, 2) : user?.name?.slice(0, 2)}</p>
                    </div>
                    <img src={LineBarsSvg.src} alt="loading" />
                  </div>
                  <div className={`absolute top-[50px] right-0 transition-opacity duration-300 ${isMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {isMenuVisible && <MenuComponent handleLogout={handleLogout} />}
                  </div>
                </div>
              </OutsideClickHandler>
            ) : (
              <Link href={"/register"}>
                <Button
                  icon={undefined}
                  classNames="px-[26px] py-[13.5px] rounded-[99px] border hover:border-2 border-neutral-400 text-center text-[#22223B] text-sm font-[600] capitalize leading-[16.80px] hidden md:block"
                >
                  Sign In / Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
        {!!isMenu && (
          <Menu
            data={
              isMenu === "apartment"
                ? HEADER_MENU?.apartment
                : HEADER_MENU?.neighborhoods
            }
            setIsMenu={setIsMenu}
            isMenu={isMenu}
          />
        )}
        {isOpen && (
          <ArticlePopup
            isOpen={isOpen}
            handleSignInSignUpClick={handleSignInSignUpClick}
          />
        )}
      </header>
      {isSideBar && (
        <Sidebar
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          data={HEADER_MENU}
          setOpen={setIsSidebar}
          handleLogout={handleLogout}
        />
      )}
    </React.Fragment>
  );
};

export default Header;
