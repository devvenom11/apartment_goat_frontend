import React, { useState } from "react";
import Button from "../../common/Button";
import { useSelector } from "react-redux";

const GetStarted = ({ setStep }) => {
  const [active, setActive] = useState("locator");
  const user = useSelector((state)=>state.user);

  const handleGo = () => {
    setStep(null);
    localStorage.setItem("isPopupShownAlready", true);
  }; 
  return (
    <div className="sm:pt-[54px] sm:pb-[66px] sm:px-[90px] pt-6 pb-6 px-6 w-full rounded-l-[24px] bg-white myFontFamily">
      <div className="w-full justify-center mb-[30px]">
        <h3 className="sm:text-[28px] text-[21px] text-[#070707] font-semibold sm:leading-9 leading-[26px] mb-4 text-center">
          Get started.
        </h3>
        <p className="text-[#FF6525] font-medium mb-5 sm:text-base text-sm sm:leading-[26px] leading-[18px] text-center">
          Let’s find the perfect place.
        </p>
      </div>
      <div className="flex sm:gap-x-9 gap-x-3 mb-[30px] relative justify-center">
        <div
          onClick={() => setActive("own")}
          className={`rounded-[24px] sm:pt-[23px] sm:pb-[26px] sm:px-[52px] ${active === "own" ? "bg-[#FAF7F3] border-[#FF6525]" : "bg-white border-transparent"} px-[15px] pb-5 pt-4 border drop-shadow-md cursor-pointer`}
        >
          <div className="sm:mb-[14px] mb-3 w-full flex justify-center">
            <svg
              className="sm:w-[82px] sm:h-[117px] w-[60px] h-[85px]"
              width="82"
              height="117"
              viewBox="0 0 82 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_1876)">
                <path
                  d="M82 0H0V292.601H82V0Z"
                  stroke="#22223B"
                  strokeWidth="2.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6328 7.41699V15.611V25.2392V133.27"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3203 114.873V166.957V191.935"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3203 77.645V104.475"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3203 48.5068V67.1431"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3203 7.41699V38.9382"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.0078 39.6177V117.375"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.0078 7.41699V21.4297"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.7188 89.1182V163.103"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.7188 34.9272V75.1503"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.7188 7.41699V26.5612"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.4062 64.1548V136.243"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.4062 7.41699V52.2413"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.0938 65.7163V108.815"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.0938 40.7085V56.9471"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.0938 7.41699V30.1167"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.7969 85.6816V126.988"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.7969 26.561V72.1397"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.7969 7.41699V15.9322"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M71.4844 55.4453V150.659"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M71.4844 7.41699V44.0697"
                  stroke="#22223B"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1876">
                  <rect width="82" height="117" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="sm:text-base text-[14px] sm:leading-5 leading-[18px] text-[#22223B] font-medium">
            Search on your own
          </p>
        </div>
        <div
          onClick={() => setActive("locator")}
          className={`rounded-[24px] sm:pt-[22px] sm:pb-[26px] sm:pl-[20px] sm:pr-[23px] pt-4 pb-5 pl-4 pr-4 ${active === "locator" ? "bg-[#FAF7F3] border-[#FF6525]" : "bg-white border-transparent"}  drop-shadow-md border  relative cursor-pointer`}
        >
          <span className="sm:top-[14px] sm:right-[23px] top-[6px] right-[6px] absolute">
            <svg
              className="sm:block hidden"
              width="95"
              height="12"
              viewBox="0 0 95 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_0_2455"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="95"
                height="12"
              >
                <rect
                  width="95"
                  height="11.4573"
                  fill="url(#pattern0_0_2455)"
                />
              </mask>
              <g mask="url(#mask0_0_2455)">
                <rect
                  width="95"
                  height="11.4573"
                  fill="url(#pattern1_0_2455)"
                />
                <rect width="95" height="11.4573" fill="#FF6525" />
                <rect
                  x="11.4573"
                  width="47.2613"
                  height="11.4573"
                  fill="url(#pattern2_0_2455)"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0_0_2455"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_0_2455"
                    transform="matrix(0.00301508 0 0 0.025 -0.00351761 0)"
                  />
                </pattern>
                <pattern
                  id="pattern1_0_2455"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_0_2455"
                    transform="matrix(0.00301508 0 0 0.025 -0.00351761 0)"
                  />
                </pattern>
                <pattern
                  id="pattern2_0_2455"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_0_2455"
                    transform="matrix(0.00606061 0 0 0.025 -0.249495 0)"
                  />
                </pattern>
                <image
                  id="image0_0_2455"
                  width="334"
                  height="40"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <svg
              className="sm:hidden block"
              width="70"
              height="15"
              viewBox="0 0 70 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="70" height="15" fill="url(#pattern0_0_23803)" />
              <defs>
                <pattern
                  id="pattern0_0_23803"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_0_23803"
                    transform="matrix(0.0037037 0 0 0.017284 0 -0.0185185)"
                  />
                </pattern>
                <image
                  id="image0_0_23803"
                  width="270"
                  height="60"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          <div className="mb-[14px] w-full flex justify-center">
            <svg
              className="sm:w-[211px] sm:h-[120px] w-[106px] h-[73px]"
              width="211"
              height="120"
              viewBox="0 0 211 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_1921)">
                <g clip-path="url(#clip1_0_1921)">
                  <path
                    d="M165.128 51.6211H179.023V180.275H165.128V51.6211Z"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M184.07 180.275H179.022V50.5829H184.07V53.844"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M184.078 58.1791H195.564V100.549H200.617V180.275H195.564H184.078"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M184.074 52.5615V53.466V58.1793H195.664L184.074 52.5615Z"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M188.414 39.1528V54.4071"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M175.773 53.5991V176.232"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M172.07 53.5991V176.232"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M168.375 53.5991V176.232"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 60.0854V62.9394"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 72.6221V75.476"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 78.8921V81.7424"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 91.4287V94.279"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 97.6948V100.545"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 103.961V106.815"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 110.231V113.082"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M185.664 116.498V119.352"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 60.0854V62.9394"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 66.3555V69.2058"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 78.8921V81.7424"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 85.1587V88.0126"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 103.961V106.815"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M189.109 110.231V113.082"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 60.0854V62.9394"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 66.3555V69.2058"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 72.6222V75.4761"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 85.1584V88.0124"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 91.4285V94.2788"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 97.6948V100.545"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 103.961V106.815"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M192.555 116.498V119.352"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M196.119 103.673C196.119 104.015 196.465 104.289 196.888 104.289C197.315 104.289 197.656 104.012 197.656 103.673C197.656 103.331 197.31 103.057 196.888 103.057C196.46 103.057 196.119 103.334 196.119 103.673Z"
                    fill="#22223B"
                  />
                  <path
                    d="M196.119 107.002C196.119 107.345 196.465 107.619 196.888 107.619C197.315 107.619 197.656 107.341 197.656 107.002C197.656 106.66 197.31 106.386 196.888 106.386C196.46 106.383 196.119 106.66 196.119 107.002Z"
                    fill="#22223B"
                  />
                  <path
                    d="M196.119 113.655C196.119 113.997 196.465 114.271 196.888 114.271C197.315 114.271 197.656 113.993 197.656 113.655C197.656 113.312 197.31 113.039 196.888 113.039C196.46 113.039 196.119 113.316 196.119 113.655Z"
                    fill="#22223B"
                  />
                  <path
                    d="M196.119 120.31C196.119 120.653 196.465 120.926 196.888 120.926C197.315 120.926 197.656 120.649 197.656 120.31C197.656 119.968 197.31 119.694 196.888 119.694C196.46 119.694 196.119 119.972 196.119 120.31Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 60.3788C180.892 60.7211 181.238 60.995 181.661 60.995C182.084 60.995 182.43 60.7175 182.43 60.3788C182.43 60.0364 182.084 59.7626 181.661 59.7626C181.238 59.7626 180.892 60.0364 180.892 60.3788Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M180.97 63.743C180.97 64.0853 181.316 64.3592 181.739 64.3592C182.162 64.3592 182.508 64.0817 182.508 63.743C182.508 63.4007 182.162 63.1268 181.739 63.1268C181.316 63.1268 180.97 63.4043 180.97 63.743Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 67.034C180.892 67.3764 181.238 67.6502 181.661 67.6502C182.084 67.6502 182.43 67.3728 182.43 67.034C182.43 66.6917 182.084 66.4178 181.661 66.4178C181.238 66.4178 180.892 66.6917 180.892 67.034Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M181.739 71.015C181.315 71.015 180.97 70.7391 180.97 70.3988C180.97 70.0585 181.315 69.7826 181.739 69.7826C182.164 69.7826 182.508 70.0585 182.508 70.3988C182.508 70.7391 182.164 71.015 181.739 71.015Z"
                    fill="#22223B"
                  />
                  <path
                    d="M181.661 77.6322C181.236 77.6322 180.892 77.3563 180.892 77.016C180.892 76.6757 181.236 76.3998 181.661 76.3998C182.086 76.3998 182.43 76.6757 182.43 77.016C182.43 77.3563 182.086 77.6322 181.661 77.6322Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M180.97 80.3807C180.97 80.7231 181.316 80.9969 181.739 80.9969C182.162 80.9969 182.508 80.7195 182.508 80.3807C182.508 80.0384 182.162 79.7645 181.739 79.7645C181.316 79.7645 180.97 80.042 180.97 80.3807Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 86.9979C180.892 87.3402 181.238 87.6141 181.661 87.6141C182.084 87.6141 182.43 87.3366 182.43 86.9979C182.43 86.6556 182.084 86.3817 181.661 86.3817C181.238 86.3817 180.892 86.6592 180.892 86.9979Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M181.739 94.3079C181.315 94.3079 180.97 94.0321 180.97 93.6917C180.97 93.3514 181.315 93.0756 181.739 93.0756C182.164 93.0756 182.508 93.3514 182.508 93.6917C182.508 94.0321 182.164 94.3079 181.739 94.3079Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 96.9789C180.892 97.3212 181.238 97.595 181.661 97.595C182.084 97.595 182.43 97.3176 182.43 96.9789C182.43 96.6365 182.084 96.3627 181.661 96.3627C181.238 96.3627 180.892 96.6401 180.892 96.9789Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M180.97 107.003C180.97 107.345 181.316 107.619 181.739 107.619C182.162 107.619 182.508 107.341 182.508 107.003C182.508 106.66 182.162 106.387 181.739 106.387C181.316 106.387 180.97 106.66 180.97 107.003Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 110.29C180.892 110.633 181.238 110.907 181.661 110.907C182.084 110.907 182.43 110.629 182.43 110.29C182.43 109.948 182.084 109.674 181.661 109.674C181.238 109.674 180.892 109.948 180.892 110.29Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M180.97 113.655C180.97 113.997 181.316 114.271 181.739 114.271C182.162 114.271 182.508 113.994 182.508 113.655C182.508 113.313 182.162 113.039 181.739 113.039C181.316 113.039 180.97 113.316 180.97 113.655Z"
                    fill="#22223B"
                  />
                  <path
                    d="M180.892 120.272C180.892 120.614 181.238 120.888 181.661 120.888C182.084 120.888 182.43 120.611 182.43 120.272C182.43 119.929 182.084 119.656 181.661 119.656C181.238 119.656 180.892 119.933 180.892 120.272Z"
                    fill="#FE9264"
                  />
                  <path
                    d="M181.734 53.0195V55.8699"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M160.08 180.276H165.133V50.5835H160.08V53.8446"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M160.07 58.1792H148.584V100.549H143.536V180.275H148.584H160.07"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M160.062 52.5615V53.466V58.1793H148.477L160.062 52.5615Z"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.617 39.1528V54.4071"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 60.1492V63.0031"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 72.6854V75.5394"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 78.8922V81.7425"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 85.2218V88.0757"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 91.4285V94.2788"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 97.6948V100.545"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 104.024V106.878"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M158.484 110.232V113.082"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 66.3555V69.2058"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 72.6221V75.476"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 91.4287V94.279"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 103.961V106.815"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 110.231V113.082"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M155.031 116.498V119.352"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 60.0854V62.9394"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 66.4189V69.2693"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 78.9556V81.8059"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 85.1587V88.0126"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 91.4917V94.342"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 97.6948V100.545"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 103.961V106.815"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M151.594 116.561V119.415"
                    stroke="#FE9264"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M148.031 103.673C148.031 104.015 147.685 104.289 147.263 104.289C146.835 104.289 146.494 104.012 146.494 103.673C146.494 103.331 146.84 103.057 147.263 103.057C147.685 103.057 148.031 103.334 148.031 103.673Z"
                    fill="#22223B"
                  />
                  <path
                    d="M148.031 107.002C148.031 107.345 147.685 107.619 147.263 107.619C146.835 107.619 146.494 107.341 146.494 107.002C146.494 106.66 146.84 106.386 147.263 106.386C147.685 106.383 148.031 106.66 148.031 107.002Z"
                    fill="#22223B"
                  />
                  <path
                    d="M148.031 113.655C148.031 113.997 147.685 114.271 147.263 114.271C146.835 114.271 146.494 113.993 146.494 113.655C146.494 113.312 146.84 113.039 147.263 113.039C147.685 113.039 148.031 113.316 148.031 113.655Z"
                    fill="#22223B"
                  />
                  <path
                    d="M148.031 116.984C148.031 117.327 147.685 117.601 147.263 117.601C146.835 117.601 146.494 117.323 146.494 116.984C146.494 116.646 146.84 116.368 147.263 116.368C147.685 116.368 148.031 116.642 148.031 116.984Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 60.4176C163.195 60.7599 162.849 61.0338 162.427 61.0338C161.999 61.0338 161.658 60.7563 161.658 60.4176C161.658 60.0753 162.004 59.8014 162.427 59.8014C162.849 59.8014 163.195 60.0753 163.195 60.4176Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 63.7438C163.195 64.0861 162.849 64.3599 162.427 64.3599C161.999 64.3599 161.658 64.0825 161.658 63.7438C161.658 63.4014 162.004 63.1276 162.427 63.1276C162.849 63.1276 163.195 63.405 163.195 63.7438Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 67.0729C163.195 67.4152 162.849 67.6891 162.427 67.6891C161.999 67.6891 161.658 67.4116 161.658 67.0729C161.658 66.7306 162.004 66.4567 162.427 66.4567C162.849 66.4531 163.195 66.7306 163.195 67.0729Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 73.7291C163.195 74.0715 162.849 74.3453 162.427 74.3453C161.999 74.3453 161.658 74.0679 161.658 73.7291C161.658 73.3868 162.004 73.1129 162.427 73.1129C162.849 73.1093 163.195 73.3868 163.195 73.7291Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 77.0548C163.195 77.3971 162.849 77.671 162.427 77.671C161.999 77.671 161.658 77.3935 161.658 77.0548C161.658 76.7161 162.004 76.4386 162.427 76.4386C162.849 76.4386 163.195 76.7125 163.195 77.0548Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 83.7106C163.195 84.0529 162.849 84.3268 162.427 84.3268C161.999 84.3268 161.658 84.0493 161.658 83.7106C161.658 83.3683 162.004 83.0944 162.427 83.0944C162.849 83.0908 163.195 83.3683 163.195 83.7106Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 90.3654C163.195 90.7077 162.849 90.9816 162.427 90.9816C161.999 90.9816 161.658 90.7041 161.658 90.3654C161.658 90.0231 162.004 89.7492 162.427 89.7492C162.849 89.7456 163.195 90.0231 163.195 90.3654Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 97.0177C163.195 97.36 162.849 97.6339 162.427 97.6339C161.999 97.6339 161.658 97.3564 161.658 97.0177C161.658 96.6754 162.004 96.4015 162.427 96.4015C162.849 96.4015 163.195 96.679 163.195 97.0177Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 103.673C163.195 104.016 162.849 104.29 162.427 104.29C161.999 104.29 161.658 104.012 161.658 103.673C161.658 103.331 162.004 103.057 162.427 103.057C162.849 103.057 163.195 103.335 163.195 103.673Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 107.003C163.195 107.345 162.849 107.619 162.427 107.619C161.999 107.619 161.658 107.342 161.658 107.003C161.658 106.661 162.004 106.387 162.427 106.387C162.849 106.383 163.195 106.661 163.195 107.003Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 110.329C163.195 110.672 162.849 110.945 162.427 110.945C161.999 110.945 161.658 110.668 161.658 110.329C161.658 109.987 162.004 109.713 162.427 109.713C162.849 109.713 163.195 109.987 163.195 110.329Z"
                    fill="#22223B"
                  />
                  <path
                    d="M163.195 120.311C163.195 120.653 162.849 120.927 162.427 120.927C161.999 120.927 161.658 120.649 161.658 120.311C161.658 119.968 162.004 119.694 162.427 119.694C162.849 119.694 163.195 119.972 163.195 120.311Z"
                    fill="#22223B"
                  />
                  <path
                    d="M162.414 53.0195V55.8699"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M102.362 38.918H136.461V180.076H102.362V38.918Z"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M132.039 108.328V180.076"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M132.039 42.4961V46.4491V51.0939V103.211"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M128.43 94.3354V119.462V131.512"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M128.43 76.3755V89.3191"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M128.43 62.3188V71.3095"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M128.43 42.4961V57.7027"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M124.812 101.578V122.687"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M124.812 58.0303V95.5423"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M124.812 42.4961V49.2562"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M121.195 81.9106V117.603"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M121.195 55.7676V75.1722"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M121.195 42.4961V51.7318"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M117.586 110.537V159.097"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M117.586 69.8677V104.645"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M117.586 42.4961V64.1204"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M113.969 115.754V133.123"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M113.969 96.9336V111.838"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M113.969 70.6211V91.413"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M113.969 58.5566V66.3906"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M113.969 42.4961V53.447"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M110.352 106.879V121.927"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M110.352 80.2529V100.18"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M110.352 51.7314V73.7197"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M110.352 42.4961V46.604"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M106.734 117.603V144.2"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M106.734 65.6665V111.6"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M106.734 42.4961V60.1783"
                    stroke="#22223B"
                    strokeWidth="0.74434"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <mask
                  id="mask0_0_1921"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="57"
                  y="-1"
                  width="34"
                  height="139"
                >
                  <path
                    d="M90.2418 -0.317383V137.704H57.75V135.32H66.7006C68.1181 135.32 69.2701 134.396 69.2701 133.26V79.7436L69.2401 79.6474C69.2101 79.4998 69.163 79.3521 69.0945 79.2078C69.0474 79.1185 69.0003 79.0395 68.9617 78.988C68.9146 78.909 68.8418 78.806 68.7305 78.6927L57.75 67.3623V-0.317383H90.2418Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_0_1921)">
                  <path
                    d="M74.8906 14.5947L87.7512 27.6835V33.4431"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8918 14.5947L62.0312 27.6835V33.4431"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.7559 42.7334V32.32L86.788 30.9875L85.4048 29.0745L84.0343 27.1855L82.6425 25.2725L81.2764 23.3835L79.8888 21.474L78.5227 19.585L77.1308 17.672L74.8953 14.5947L72.6641 17.672L71.2723 19.585L69.9062 21.474L68.5186 23.3835L67.1482 25.2725L65.7606 27.1855L64.3902 29.0745L63.0069 30.9875L62.0391 32.32V42.7334"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72.2656 30.7436L72.651 28.3807L73.0408 25.9834L73.4348 23.5862L73.8287 21.1855L74.2185 18.7882L74.8994 14.5947L75.5846 18.7882L75.9743 21.1855L76.3683 23.5862L76.758 25.9834L77.1477 28.3807L77.5332 30.7436"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.7523 60.5618V41.9401V41.9367V41.8577H87.6795L84.1849 37.9801L82.018 35.5795L79.851 33.1822L77.6883 30.7849L77.5641 30.6441L75.5213 28.3808L74.8918 27.6836L74.2665 28.3808L72.2237 30.6441L72.0995 30.7849L69.9326 33.1822L67.7699 35.5795L65.6029 37.9801L62.1083 41.8577H62.0312V60.5618"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.7523 77.9814V60.5618L74.8918 46.6899L62.0312 60.5618V77.9814"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8918 64.1099L62.0312 77.9817V133.26H87.7523V77.9817L74.8918 64.1099Z"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M77.5669 30.5651V133.259H72.2266V30.5651L74.8946 27.6836L77.5669 30.5651Z"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8984 6.25244V17.782"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.2034 18.7881H71.8438"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M77.93 18.7881H75.5703"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M79.6696 21.1855H75.9609"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M73.8181 21.1855H70.1094"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M73.4249 23.5859H68.3672"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M81.4128 23.5859H76.3594"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M73.0274 25.9834H66.625"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M83.1489 25.9834H76.7422"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M84.8885 28.3804H77.1328"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72.6385 28.3804H64.8828"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72.099 30.7847H63.1484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M86.638 30.7847H77.6875"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M69.9283 33.1821H62.0312"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.8128 33.1821H79.8516"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.8099 35.5791H82.0156"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M67.7656 35.5791H62.0312"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M87.807 37.98H84.1797"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M65.5986 37.98H62.0312"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M71.1152 37.5612C71.1152 37.8531 70.8197 38.0866 70.4599 38.0866C70.0959 38.0866 69.8047 37.8497 69.8047 37.5612C69.8047 37.2692 70.1002 37.0357 70.4599 37.0357C70.8197 37.0322 71.1152 37.2692 71.1152 37.5612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 47.8234C71.1152 48.1153 70.8197 48.3488 70.4599 48.3488C70.0959 48.3488 69.8047 48.1119 69.8047 47.8234C69.8047 47.5349 70.1002 47.2979 70.4599 47.2979C70.8197 47.2945 71.1152 47.5314 71.1152 47.8234Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 54.6612C71.1152 54.9531 70.8197 55.1867 70.4599 55.1867C70.0959 55.1867 69.8047 54.9497 69.8047 54.6612C69.8047 54.3693 70.1002 54.1357 70.4599 54.1357C70.8197 54.1357 71.1152 54.3727 71.1152 54.6612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 61.503C71.1152 61.795 70.8197 62.0285 70.4599 62.0285C70.0959 62.0285 69.8047 61.7915 69.8047 61.503C69.8047 61.2145 70.1002 60.9775 70.4599 60.9775C70.8197 60.9775 71.1152 61.2145 71.1152 61.503Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 64.9234C71.1152 65.2153 70.8197 65.4489 70.4599 65.4489C70.0959 65.4489 69.8047 65.2119 69.8047 64.9234C69.8047 64.6315 70.1002 64.3979 70.4599 64.3979C70.8197 64.3979 71.1152 64.6315 71.1152 64.9234Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 71.7648C71.1152 72.0567 70.8197 72.2902 70.4599 72.2902C70.0959 72.2902 69.8047 72.0533 69.8047 71.7648C69.8047 71.4728 70.1002 71.2393 70.4599 71.2393C70.8197 71.2359 71.1152 71.4728 71.1152 71.7648Z"
                    fill="#22223B"
                  />
                  <path
                    d="M71.1152 75.1857C71.1152 75.4776 70.8197 75.7111 70.4599 75.7111C70.0959 75.7111 69.8047 75.4742 69.8047 75.1857C69.8047 74.8937 70.1002 74.6602 70.4599 74.6602C70.8197 74.6568 71.1152 74.8937 71.1152 75.1857Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 40.9816C67.8261 41.2735 67.5306 41.507 67.1709 41.507C66.8069 41.507 66.5156 41.2701 66.5156 40.9816C66.5156 40.6896 66.8111 40.4561 67.1709 40.4561C67.5349 40.4527 67.8261 40.6896 67.8261 40.9816Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 44.4025C67.8261 44.6944 67.5306 44.9279 67.1709 44.9279C66.8069 44.9279 66.5156 44.691 66.5156 44.4025C66.5156 44.1105 66.8111 43.877 67.1709 43.877C67.5349 43.8736 67.8261 44.1105 67.8261 44.4025Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 51.2438C67.8261 51.5357 67.5306 51.7692 67.1709 51.7692C66.8069 51.7692 66.5156 51.5323 66.5156 51.2438C66.5156 50.9519 66.8111 50.7183 67.1709 50.7183C67.5349 50.7149 67.8261 50.9519 67.8261 51.2438Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 58.0821C67.8261 58.374 67.5306 58.6076 67.1709 58.6076C66.8069 58.6076 66.5156 58.3706 66.5156 58.0821C66.5156 57.7936 66.8111 57.5566 67.1709 57.5566C67.5349 57.5566 67.8261 57.7936 67.8261 58.0821Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 61.503C67.8261 61.795 67.5306 62.0285 67.1709 62.0285C66.8069 62.0285 66.5156 61.7915 66.5156 61.503C66.5156 61.2145 66.8111 60.9775 67.1709 60.9775C67.5349 60.9775 67.8261 61.2145 67.8261 61.503Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 64.9234C67.8261 65.2153 67.5306 65.4489 67.1709 65.4489C66.8069 65.4489 66.5156 65.2119 66.5156 64.9234C66.5156 64.6315 66.8111 64.3979 67.1709 64.3979C67.5349 64.3979 67.8261 64.6315 67.8261 64.9234Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 75.1857C67.8261 75.4776 67.5306 75.7111 67.1709 75.7111C66.8069 75.7111 66.5156 75.4742 66.5156 75.1857C66.5156 74.8937 66.8111 74.6602 67.1709 74.6602C67.5349 74.6568 67.8261 74.8937 67.8261 75.1857Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 78.6066C67.8261 78.8985 67.5306 79.132 67.1709 79.132C66.8069 79.132 66.5156 78.8951 66.5156 78.6066C66.5156 78.3181 66.8111 78.0811 67.1709 78.0811C67.5349 78.0777 67.8261 78.3146 67.8261 78.6066Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 82.0275C67.8261 82.3194 67.5306 82.5529 67.1709 82.5529C66.8069 82.5529 66.5156 82.316 66.5156 82.0275C66.5156 81.7355 66.8111 81.502 67.1709 81.502C67.5349 81.4986 67.8261 81.7355 67.8261 82.0275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 85.4479C67.8261 85.7398 67.5306 85.9733 67.1709 85.9733C66.8069 85.9733 66.5156 85.7364 66.5156 85.4479C66.5156 85.1559 66.8111 84.9224 67.1709 84.9224C67.5349 84.919 67.8261 85.1559 67.8261 85.4479Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 88.8653C67.8261 89.1573 67.5306 89.3908 67.1709 89.3908C66.8069 89.3908 66.5156 89.1538 66.5156 88.8653C66.5156 88.5734 66.8111 88.3398 67.1709 88.3398C67.5349 88.3398 67.8261 88.5768 67.8261 88.8653Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 99.1275C67.8261 99.4195 67.5306 99.653 67.1709 99.653C66.8069 99.653 66.5156 99.416 66.5156 99.1275C66.5156 98.8356 66.8111 98.6021 67.1709 98.6021C67.5349 98.6021 67.8261 98.8356 67.8261 99.1275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 109.39C67.8261 109.682 67.5306 109.915 67.1709 109.915C66.8069 109.915 66.5156 109.678 66.5156 109.39C66.5156 109.101 66.8111 108.864 67.1709 108.864C67.5349 108.861 67.8261 109.098 67.8261 109.39Z"
                    fill="#22223B"
                  />
                  <path
                    d="M67.8261 112.811C67.8261 113.103 67.5306 113.336 67.1709 113.336C66.8069 113.336 66.5156 113.099 66.5156 112.811C66.5156 112.519 66.8111 112.285 67.1709 112.285C67.5349 112.282 67.8261 112.519 67.8261 112.811Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 44.4025C64.537 44.6944 64.2415 44.9279 63.8818 44.9279C63.5178 44.9279 63.2266 44.691 63.2266 44.4025C63.2266 44.1105 63.5221 43.877 63.8818 43.877C64.2415 43.8736 64.537 44.1105 64.537 44.4025Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 51.2438C64.537 51.5357 64.2415 51.7692 63.8818 51.7692C63.5178 51.7692 63.2266 51.5323 63.2266 51.2438C63.2266 50.9519 63.5221 50.7183 63.8818 50.7183C64.2415 50.7149 64.537 50.9519 64.537 51.2438Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 54.6612C64.537 54.9531 64.2415 55.1867 63.8818 55.1867C63.5178 55.1867 63.2266 54.9497 63.2266 54.6612C63.2266 54.3693 63.5221 54.1357 63.8818 54.1357C64.2415 54.1357 64.537 54.3727 64.537 54.6612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 61.503C64.537 61.795 64.2415 62.0285 63.8818 62.0285C63.5178 62.0285 63.2266 61.7915 63.2266 61.503C63.2266 61.2145 63.5221 60.9775 63.8818 60.9775C64.2415 60.9775 64.537 61.2145 64.537 61.503Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 71.7648C64.537 72.0567 64.2415 72.2902 63.8818 72.2902C63.5178 72.2902 63.2266 72.0533 63.2266 71.7648C63.2266 71.4728 63.5221 71.2393 63.8818 71.2393C64.2415 71.2359 64.537 71.4728 64.537 71.7648Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 82.0275C64.537 82.3194 64.2415 82.5529 63.8818 82.5529C63.5178 82.5529 63.2266 82.316 63.2266 82.0275C63.2266 81.7355 63.5221 81.502 63.8818 81.502C64.2415 81.4986 64.537 81.7355 64.537 82.0275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 88.8653C64.537 89.1573 64.2415 89.3908 63.8818 89.3908C63.5178 89.3908 63.2266 89.1538 63.2266 88.8653C63.2266 88.5734 63.5221 88.3398 63.8818 88.3398C64.2415 88.3398 64.537 88.5768 64.537 88.8653Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 92.2862C64.537 92.5782 64.2415 92.8117 63.8818 92.8117C63.5178 92.8117 63.2266 92.5747 63.2266 92.2862C63.2266 91.9943 63.5221 91.7607 63.8818 91.7607C64.2415 91.7607 64.537 91.9977 64.537 92.2862Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 95.7066C64.537 95.9985 64.2415 96.2321 63.8818 96.2321C63.5178 96.2321 63.2266 95.9951 63.2266 95.7066C63.2266 95.4181 63.5221 95.1812 63.8818 95.1812C64.2415 95.1812 64.537 95.4181 64.537 95.7066Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 99.1275C64.537 99.4195 64.2415 99.653 63.8818 99.653C63.5178 99.653 63.2266 99.416 63.2266 99.1275C63.2266 98.8356 63.5221 98.6021 63.8818 98.6021C64.2415 98.6021 64.537 98.8356 64.537 99.1275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 102.548C64.537 102.84 64.2415 103.074 63.8818 103.074C63.5178 103.074 63.2266 102.837 63.2266 102.548C63.2266 102.257 63.5221 102.023 63.8818 102.023C64.2415 102.023 64.537 102.257 64.537 102.548Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 109.39C64.537 109.682 64.2415 109.915 63.8818 109.915C63.5178 109.915 63.2266 109.678 63.2266 109.39C63.2266 109.101 63.5221 108.864 63.8818 108.864C64.2415 108.861 64.537 109.098 64.537 109.39Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 112.811C64.537 113.103 64.2415 113.336 63.8818 113.336C63.5178 113.336 63.2266 113.099 63.2266 112.811C63.2266 112.519 63.5221 112.285 63.8818 112.285C64.2415 112.282 64.537 112.519 64.537 112.811Z"
                    fill="#22223B"
                  />
                  <path
                    d="M64.537 119.652C64.537 119.944 64.2415 120.177 63.8818 120.177C63.5178 120.177 63.2266 119.94 63.2266 119.652C63.2266 119.363 63.5221 119.127 63.8818 119.127C64.2415 119.123 64.537 119.36 64.537 119.652Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 37.5612C78.7422 37.8531 79.0377 38.0866 79.3974 38.0866C79.7615 38.0866 80.0527 37.8497 80.0527 37.5612C80.0527 37.2692 79.7572 37.0357 79.3974 37.0357C79.0377 37.0322 78.7422 37.2692 78.7422 37.5612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 40.9821C78.7422 41.274 79.0377 41.5075 79.3974 41.5075C79.7615 41.5075 80.0527 41.2705 80.0527 40.9821C80.0527 40.6901 79.7572 40.4566 79.3974 40.4566C79.0377 40.4531 78.7422 40.6901 78.7422 40.9821Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 44.4025C78.7422 44.6944 79.0377 44.9279 79.3974 44.9279C79.7615 44.9279 80.0527 44.691 80.0527 44.4025C80.0527 44.1105 79.7572 43.877 79.3974 43.877C79.0377 43.8736 78.7422 44.1105 78.7422 44.4025Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 47.8234C78.7422 48.1153 79.0377 48.3488 79.3974 48.3488C79.7615 48.3488 80.0527 48.1119 80.0527 47.8234C80.0527 47.5349 79.7572 47.2979 79.3974 47.2979C79.0377 47.2945 78.7422 47.5314 78.7422 47.8234Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 54.6612C78.7422 54.9531 79.0377 55.1867 79.3974 55.1867C79.7615 55.1867 80.0527 54.9497 80.0527 54.6612C80.0527 54.3693 79.7572 54.1357 79.3974 54.1357C79.0377 54.1357 78.7422 54.3727 78.7422 54.6612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 58.0821C78.7422 58.374 79.0377 58.6076 79.3974 58.6076C79.7615 58.6076 80.0527 58.3706 80.0527 58.0821C80.0527 57.7936 79.7572 57.5566 79.3974 57.5566C79.0377 57.5566 78.7422 57.7936 78.7422 58.0821Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 61.503C78.7422 61.795 79.0377 62.0285 79.3974 62.0285C79.7615 62.0285 80.0527 61.7915 80.0527 61.503C80.0527 61.2145 79.7572 60.9775 79.3974 60.9775C79.0377 60.9775 78.7422 61.2145 78.7422 61.503Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 64.9239C78.7422 65.2158 79.0377 65.4494 79.3974 65.4494C79.7615 65.4494 80.0527 65.2124 80.0527 64.9239C80.0527 64.632 79.7572 64.3984 79.3974 64.3984C79.0377 64.3984 78.7422 64.632 78.7422 64.9239Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 71.7648C78.7422 72.0567 79.0377 72.2902 79.3974 72.2902C79.7615 72.2902 80.0527 72.0533 80.0527 71.7648C80.0527 71.4728 79.7572 71.2393 79.3974 71.2393C79.0377 71.2359 78.7422 71.4728 78.7422 71.7648Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 75.1857C78.7422 75.4776 79.0377 75.7111 79.3974 75.7111C79.7615 75.7111 80.0527 75.4742 80.0527 75.1857C80.0527 74.8937 79.7572 74.6602 79.3974 74.6602C79.0377 74.6568 78.7422 74.8937 78.7422 75.1857Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 82.0275C78.7422 82.3194 79.0377 82.5529 79.3974 82.5529C79.7615 82.5529 80.0527 82.316 80.0527 82.0275C80.0527 81.7355 79.7572 81.502 79.3974 81.502C79.0377 81.4986 78.7422 81.7355 78.7422 82.0275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 85.4479C78.7422 85.7398 79.0377 85.9733 79.3974 85.9733C79.7615 85.9733 80.0527 85.7364 80.0527 85.4479C80.0527 85.1559 79.7572 84.9224 79.3974 84.9224C79.0377 84.919 78.7422 85.1559 78.7422 85.4479Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 88.8653C78.7422 89.1573 79.0377 89.3908 79.3974 89.3908C79.7615 89.3908 80.0527 89.1538 80.0527 88.8653C80.0527 88.5734 79.7572 88.3398 79.3974 88.3398C79.0377 88.3398 78.7422 88.5768 78.7422 88.8653Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 92.2862C78.7422 92.5782 79.0377 92.8117 79.3974 92.8117C79.7615 92.8117 80.0527 92.5747 80.0527 92.2862C80.0527 91.9943 79.7572 91.7607 79.3974 91.7607C79.0377 91.7607 78.7422 91.9977 78.7422 92.2862Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 99.1275C78.7422 99.4195 79.0377 99.653 79.3974 99.653C79.7615 99.653 80.0527 99.416 80.0527 99.1275C80.0527 98.8356 79.7572 98.6021 79.3974 98.6021C79.0377 98.6021 78.7422 98.8356 78.7422 99.1275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 102.548C78.7422 102.84 79.0377 103.074 79.3974 103.074C79.7615 103.074 80.0527 102.837 80.0527 102.548C80.0527 102.257 79.7572 102.023 79.3974 102.023C79.0377 102.023 78.7422 102.257 78.7422 102.548Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 105.969C78.7422 106.261 79.0377 106.494 79.3974 106.494C79.7615 106.494 80.0527 106.257 80.0527 105.969C80.0527 105.68 79.7572 105.443 79.3974 105.443C79.0377 105.443 78.7422 105.677 78.7422 105.969Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 109.39C78.7422 109.682 79.0377 109.915 79.3974 109.915C79.7615 109.915 80.0527 109.678 80.0527 109.39C80.0527 109.101 79.7572 108.864 79.3974 108.864C79.0377 108.861 78.7422 109.098 78.7422 109.39Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 112.811C78.7422 113.103 79.0377 113.336 79.3974 113.336C79.7615 113.336 80.0527 113.099 80.0527 112.811C80.0527 112.519 79.7572 112.285 79.3974 112.285C79.0377 112.282 78.7422 112.519 78.7422 112.811Z"
                    fill="#22223B"
                  />
                  <path
                    d="M78.7422 116.231C78.7422 116.523 79.0377 116.757 79.3974 116.757C79.7615 116.757 80.0527 116.52 80.0527 116.231C80.0527 115.939 79.7572 115.706 79.3974 115.706C79.0377 115.702 78.7422 115.939 78.7422 116.231Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 40.9821C82.0312 41.274 82.3268 41.5075 82.6865 41.5075C83.0505 41.5075 83.3417 41.2705 83.3417 40.9821C83.3417 40.6901 83.0462 40.4566 82.6865 40.4566C82.3268 40.4531 82.0312 40.6901 82.0312 40.9821Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 44.4025C82.0312 44.6944 82.3268 44.9279 82.6865 44.9279C83.0505 44.9279 83.3417 44.691 83.3417 44.4025C83.3417 44.1105 83.0462 43.877 82.6865 43.877C82.3268 43.8736 82.0312 44.1105 82.0312 44.4025Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 51.2443C82.0312 51.5362 82.3268 51.7697 82.6865 51.7697C83.0505 51.7697 83.3417 51.5328 83.3417 51.2443C83.3417 50.9523 83.0462 50.7188 82.6865 50.7188C82.3268 50.7154 82.0312 50.9523 82.0312 51.2443Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 58.0821C82.0312 58.374 82.3268 58.6076 82.6865 58.6076C83.0505 58.6076 83.3417 58.3706 83.3417 58.0821C83.3417 57.7936 83.0462 57.5566 82.6865 57.5566C82.3268 57.5566 82.0312 57.7936 82.0312 58.0821Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 64.9239C82.0312 65.2158 82.3268 65.4494 82.6865 65.4494C83.0505 65.4494 83.3417 65.2124 83.3417 64.9239C83.3417 64.632 83.0462 64.3984 82.6865 64.3984C82.3268 64.3984 82.0312 64.632 82.0312 64.9239Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 75.1857C82.0312 75.4776 82.3268 75.7111 82.6865 75.7111C83.0505 75.7111 83.3417 75.4742 83.3417 75.1857C83.3417 74.8937 83.0462 74.6602 82.6865 74.6602C82.3268 74.6568 82.0312 74.8937 82.0312 75.1857Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 78.6066C82.0312 78.8985 82.3268 79.132 82.6865 79.132C83.0505 79.132 83.3417 78.8951 83.3417 78.6066C83.3417 78.3181 83.0462 78.0811 82.6865 78.0811C82.3268 78.0777 82.0312 78.3146 82.0312 78.6066Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 85.4479C82.0312 85.7398 82.3268 85.9733 82.6865 85.9733C83.0505 85.9733 83.3417 85.7364 83.3417 85.4479C83.3417 85.1559 83.0462 84.9224 82.6865 84.9224C82.3268 84.919 82.0312 85.1559 82.0312 85.4479Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 88.8653C82.0312 89.1573 82.3268 89.3908 82.6865 89.3908C83.0505 89.3908 83.3417 89.1538 83.3417 88.8653C83.3417 88.5734 83.0462 88.3398 82.6865 88.3398C82.3268 88.3398 82.0312 88.5768 82.0312 88.8653Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 99.1275C82.0312 99.4195 82.3268 99.653 82.6865 99.653C83.0505 99.653 83.3417 99.416 83.3417 99.1275C83.3417 98.8356 83.0462 98.6021 82.6865 98.6021C82.3268 98.6021 82.0312 98.8356 82.0312 99.1275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 105.969C82.0312 106.261 82.3268 106.494 82.6865 106.494C83.0505 106.494 83.3417 106.257 83.3417 105.969C83.3417 105.68 83.0462 105.443 82.6865 105.443C82.3268 105.443 82.0312 105.677 82.0312 105.969Z"
                    fill="#22223B"
                  />
                  <path
                    d="M82.0312 112.811C82.0312 113.103 82.3268 113.336 82.6865 113.336C83.0505 113.336 83.3417 113.099 83.3417 112.811C83.3417 112.519 83.0462 112.285 82.6865 112.285C82.3268 112.282 82.0312 112.519 82.0312 112.811Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 44.4025C85.3203 44.6944 85.6158 44.9279 85.9755 44.9279C86.3395 44.9279 86.6308 44.691 86.6308 44.4025C86.6308 44.1105 86.3353 43.877 85.9755 43.877C85.6115 43.8736 85.3203 44.1105 85.3203 44.4025Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 47.8234C85.3203 48.1153 85.6158 48.3488 85.9755 48.3488C86.3395 48.3488 86.6308 48.1119 86.6308 47.8234C86.6308 47.5349 86.3353 47.2979 85.9755 47.2979C85.6115 47.2945 85.3203 47.5314 85.3203 47.8234Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 51.2443C85.3203 51.5362 85.6158 51.7697 85.9755 51.7697C86.3395 51.7697 86.6308 51.5328 86.6308 51.2443C86.6308 50.9523 86.3353 50.7188 85.9755 50.7188C85.6115 50.7154 85.3203 50.9523 85.3203 51.2443Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 54.6612C85.3203 54.9531 85.6158 55.1867 85.9755 55.1867C86.3395 55.1867 86.6308 54.9497 86.6308 54.6612C86.6308 54.3693 86.3353 54.1357 85.9755 54.1357C85.6115 54.1357 85.3203 54.3727 85.3203 54.6612Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 61.503C85.3203 61.795 85.6158 62.0285 85.9755 62.0285C86.3395 62.0285 86.6308 61.7915 86.6308 61.503C86.6308 61.2145 86.3353 60.9775 85.9755 60.9775C85.6115 60.9775 85.3203 61.2145 85.3203 61.503Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 64.9239C85.3203 65.2158 85.6158 65.4494 85.9755 65.4494C86.3395 65.4494 86.6308 65.2124 86.6308 64.9239C86.6308 64.632 86.3353 64.3984 85.9755 64.3984C85.6115 64.3984 85.3203 64.632 85.3203 64.9239Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 68.3443C85.3203 68.6363 85.6158 68.8698 85.9755 68.8698C86.3395 68.8698 86.6308 68.6328 86.6308 68.3443C86.6308 68.0524 86.3353 67.8188 85.9755 67.8188C85.6115 67.8188 85.3203 68.0524 85.3203 68.3443Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 71.7648C85.3203 72.0567 85.6158 72.2902 85.9755 72.2902C86.3395 72.2902 86.6308 72.0533 86.6308 71.7648C86.6308 71.4728 86.3353 71.2393 85.9755 71.2393C85.6115 71.2359 85.3203 71.4728 85.3203 71.7648Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 78.6066C85.3203 78.8985 85.6158 79.132 85.9755 79.132C86.3395 79.132 86.6308 78.8951 86.6308 78.6066C86.6308 78.3181 86.3353 78.0811 85.9755 78.0811C85.6115 78.0777 85.3203 78.3146 85.3203 78.6066Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 82.0275C85.3203 82.3194 85.6158 82.5529 85.9755 82.5529C86.3395 82.5529 86.6308 82.316 86.6308 82.0275C86.6308 81.7355 86.3353 81.502 85.9755 81.502C85.6115 81.4986 85.3203 81.7355 85.3203 82.0275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 88.8653C85.3203 89.1573 85.6158 89.3908 85.9755 89.3908C86.3395 89.3908 86.6308 89.1538 86.6308 88.8653C86.6308 88.5734 86.3353 88.3398 85.9755 88.3398C85.6115 88.3398 85.3203 88.5768 85.3203 88.8653Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 92.2862C85.3203 92.5782 85.6158 92.8117 85.9755 92.8117C86.3395 92.8117 86.6308 92.5747 86.6308 92.2862C86.6308 91.9943 86.3353 91.7607 85.9755 91.7607C85.6115 91.7607 85.3203 91.9977 85.3203 92.2862Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 95.7071C85.3203 95.999 85.6158 96.2326 85.9755 96.2326C86.3395 96.2326 86.6308 95.9956 86.6308 95.7071C86.6308 95.4186 86.3353 95.1816 85.9755 95.1816C85.6115 95.1816 85.3203 95.4186 85.3203 95.7071Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 99.1275C85.3203 99.4195 85.6158 99.653 85.9755 99.653C86.3395 99.653 86.6308 99.416 86.6308 99.1275C86.6308 98.8356 86.3353 98.6021 85.9755 98.6021C85.6115 98.6021 85.3203 98.8356 85.3203 99.1275Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 105.969C85.3203 106.261 85.6158 106.494 85.9755 106.494C86.3395 106.494 86.6308 106.257 86.6308 105.969C86.6308 105.68 86.3353 105.443 85.9755 105.443C85.6115 105.443 85.3203 105.677 85.3203 105.969Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 109.39C85.3203 109.682 85.6158 109.915 85.9755 109.915C86.3395 109.915 86.6308 109.678 86.6308 109.39C86.6308 109.101 86.3353 108.864 85.9755 108.864C85.6115 108.861 85.3203 109.098 85.3203 109.39Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 112.811C85.3203 113.103 85.6158 113.336 85.9755 113.336C86.3395 113.336 86.6308 113.099 86.6308 112.811C86.6308 112.519 86.3353 112.285 85.9755 112.285C85.6115 112.282 85.3203 112.519 85.3203 112.811Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 116.231C85.3203 116.523 85.6158 116.757 85.9755 116.757C86.3395 116.757 86.6308 116.52 86.6308 116.231C86.6308 115.939 86.3353 115.706 85.9755 115.706C85.6115 115.702 85.3203 115.939 85.3203 116.231Z"
                    fill="#22223B"
                  />
                  <path
                    d="M85.3203 119.652C85.3203 119.944 85.6158 120.177 85.9755 120.177C86.3395 120.177 86.6308 119.94 86.6308 119.652C86.6308 119.363 86.3353 119.127 85.9755 119.127C85.6115 119.123 85.3203 119.36 85.3203 119.652Z"
                    fill="#22223B"
                  />
                  <path
                    d="M74.8984 27.6836V38.0866"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8984 41.7578V46.6897"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8984 54.8984C74.9406 55.1423 74.8984 64.2436 74.8984 64.2436"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8594 49.9731V52.075"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8594 76.3086V79.6469"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8594 104.094V107.435"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8594 109.63V112.968"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8984 82.2334V85.5751"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.8594 88.1616V94.2578"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <mask
                  id="mask1_0_1921"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="21"
                  y="54"
                  width="49"
                  height="88"
                >
                  <path
                    d="M69.3486 54.0156V142H21.0156C21.0156 136.237 21.0156 101.922 21.0156 54.0156H69.3486Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_0_1921)">
                  <path
                    d="M51.7734 93.6495V64.5664L61.088 74.1795L66.6853 79.9563L54.874 93.6495"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.2379 74.1795L32.6406 79.9563L47.5525 97.242V74.1795V64.5664L38.2379 74.1795Z"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.687 79.9561V133.259H32.6406V79.9561"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M54.8779 93.8901H51.7773H47.5547V133.259H54.2526"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.5588 86.7734H47.5547"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.5588 90.3315H47.5547"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.5588 93.8901H47.5547"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6784 101.003H32.6406"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6784 104.557H32.6406"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6827 108.116H32.6406"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.5206 86.7734H32.6406"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41.5947 90.3315H32.6484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M44.6653 93.8901H32.6484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.5005 86.7734H60.8047"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.4965 90.3315H57.7344"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.4934 93.8901H54.4766"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6863 97.4443H32.6484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6863 111.673H32.6484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6863 115.229H32.6484"
                    stroke="#FE9264"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.6863 118.786H32.6484"
                    stroke="#22223B"
                    strokeWidth="0.73679"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_0_1921">
                  <rect
                    width="211"
                    height="120"
                    fill="white"
                    transform="matrix(-1 0 0 1 211 0)"
                  />
                </clipPath>
                <clipPath id="clip1_0_1921">
                  <rect
                    width="99"
                    height="144"
                    fill="white"
                    transform="matrix(-1 0 0 1 201.227 30)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-base leading-5 text-[#22223B] font-medium text-center">
            Work with a Locator
          </p>
          <div className="py-1 px-[22px] border border-[#FF6525] bg-[#fddbcd] absolute -bottom-3 left-1/2 transform -translate-x-1/2 rounded-[6px]">
            <p className="text-[13px] leading-4 font-medium text-[#22223B]">
              Free
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          icon={null}
          onClick={handleGo}
          classNames=" bg-[#FF6525] text-base leading-[19.2px] hover:scale-105 transition-transform duration-250  sm:w-fit w-full py-[13px]  px-6 text-[#FEFEFE] font-[600] rounded-[99px]"
        >
          Lets Go
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
