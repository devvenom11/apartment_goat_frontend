import React from "react";
import GoogleIconSvg from "../../../assets/UmoveFree/GoogleIcon.svg";
import ReviewStarSvg from "../../../assets/UmoveFree/ReviewStar.svg";
import VectorSvg from "../../../assets/Article/Vector.svg";
import ArrowUpSvg from "../../../assets/UmoveFree/ArrowUp.svg";
import InfoSvg from "../../../assets/UmoveFree/Info.svg";
import { ArrowUpIcon } from "../../../assets/icons";
import Button from "../../common/Button";

const GetFreeMove = () => {
  return (
    <div>
      <div>
        <div className="UMove mb-[40px]">
          <div>
            <p className="UMove-Heading">
              Use <span className="UMove-Heading-span">U</span>Move<span className="UMove-Heading-span">Free</span> and get a free move or $200 rebate
            </p>
          </div>
          <div className="Google-review-sec">
            <div>
              <p className="Num-Head">4.9</p>
              <img src={VectorSvg.src} alt="error" />
            </div>
            <div>
              <div>
                <img src={GoogleIconSvg.src} alt="error" />
              </div>
              <div className="Review-sec">
                <div>
                  <p className="Review-title">Reviews 96</p>
                </div>
                <div className="Star-Svg">
                  <img src={ReviewStarSvg.src} alt="error" className="w-[18px] h-[18px]" />
                  <img src={ReviewStarSvg.src} alt="error" className="w-[18px] h-[18px]" />
                  <img src={ReviewStarSvg.src} alt="error" className="w-[18px] h-[18px]" />
                  <img src={ReviewStarSvg.src} alt="error" className="w-[18px] h-[18px]" />
                  <img src={ReviewStarSvg.src} alt="error" className="w-[18px] h-[18px]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={() => {}} icon={<ArrowUpIcon />} classNames="hover:scale-105 transition-transform duration-250 Button-class ">
              Get Started
            </Button>{" "}
          </div>
          <div className="Info-class">
            <img src={InfoSvg.src} alt="error" />
            <p>What's Umove Free?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFreeMove;
