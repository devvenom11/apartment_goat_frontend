import Link from "next/link";
import ArrowSignUp from "src/assets/SignUp/ArrowSignUp.svg";
import BackGroundSvg from "src/assets/Article/ApartmentBackgroundSvg.svg";

const LoggedOutView = ({ children, footer }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 bg-[#FFFFFF] flex flex-col lg:flex-row">
      <div className="lg:p-[32px] w-50% max-w-[676px] mr-[32px] hidden lg:flex items-center h-screen">
        <div className="bg-[#F5EEE8] flex flex-col rounded-[24px]">
          <h2 className="pl-10 text-[58px] leading-[62px] font-[700] pt-10">Find your dream apartment</h2>
          <img className="flex-1" src={BackGroundSvg.src} alt="loading" />
          <div className="flex items-center mt-[5px] pb-[16px] justify-between px-4">
            <p>{footer?.cta ?? "Already have an account?"}</p>
            <Link href={footer?.link ?? "/login"}>
              <button className="cursor-pointer flex items-center justify-center py-[12px] px-[25px]  border-[1px] border-[#22223B] rounded-[99px] gap-[6px]">
                <img src={ArrowSignUp.src} alt="loading" />
                <p className="text-[16px] font-[600] leading-[19.2px]">{footer?.text ?? "Log In"}</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-screen flex items-center justify-center lg:w-[60%] py-6 lg:py-0">{children}</div>
    </div>
  );
};
export default LoggedOutView;
