import React from "react";
import DateSvg from "../../../assets/Article/DateSvg.svg";
import FacebookSvg from "../../../assets/Article/FacebookSvg.svg";
import InstagramSvg from "../../../assets/Article/InstagramSvg.svg";
import TiktokSvg from "../../../assets/Article/TiktokSvg.svg";
import moment from "moment";

const LuxuryApartments = ({ data }) => {
  const parsedDate = moment(data?.createdAt);
  const formattedDate = parsedDate.format("MMMM DD, YYYY");
  const shareUrl = `https://apartmentgoats.vercel.app/blog/${data?.Slug}`;
  const icons = [
    { svg: FacebookSvg, alt: "facebook" },
    { svg: InstagramSvg, alt: "instagram" },
    { svg: TiktokSvg, alt: "tiktok" },
  ];

  const handleShare = (icon) => {
    switch (icon.alt) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          "_blank"
        );
        break;
      case "instagram":
        window.open(`https://www.instagram.com/`, "_blank");
        break;
      case "tiktok":
        window.open(`https://www.tiktok.com/`, "_blank");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <hr className="mt-[5px] lg:mt-0"></hr>
      <div className="main-container list-items myFontFamily">
        <ul className="ul-items">
          <li className="">Home </li>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.644319 0.648697C0.73795 0.554829 0.86503 0.501992 0.997612 0.501804C1.13019 0.501616 1.25742 0.554094 1.35132 0.647697L6.83532 6.1127C6.88672 6.16381 6.92751 6.22458 6.95534 6.29151C6.98318 6.35844 6.9975 6.43021 6.9975 6.5027C6.9975 6.57518 6.98318 6.64696 6.95534 6.71389C6.92751 6.78082 6.88672 6.84159 6.83532 6.8927L1.35132 12.3557C1.30513 12.4034 1.2499 12.4414 1.18886 12.4675C1.12783 12.4936 1.0622 12.5073 0.995811 12.5078C0.929423 12.5083 0.863603 12.4955 0.802193 12.4703C0.740783 12.4451 0.685012 12.4079 0.638134 12.3609C0.591256 12.3139 0.554209 12.258 0.529156 12.1965C0.504102 12.135 0.491544 12.0692 0.492213 12.0028C0.492882 11.9364 0.506764 11.8708 0.533052 11.8098C0.559339 11.7489 0.597504 11.6938 0.64532 11.6477L5.81032 6.5027L0.645319 1.3557C0.551451 1.26207 0.498613 1.13499 0.498426 1.0024C0.498238 0.869823 0.550716 0.742593 0.644319 0.648697Z"
              fill="#5C5C6C"
            />
          </svg>

          <li className="">All Article</li>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.644319 0.648697C0.73795 0.554829 0.86503 0.501992 0.997612 0.501804C1.13019 0.501616 1.25742 0.554094 1.35132 0.647697L6.83532 6.1127C6.88672 6.16381 6.92751 6.22458 6.95534 6.29151C6.98318 6.35844 6.9975 6.43021 6.9975 6.5027C6.9975 6.57518 6.98318 6.64696 6.95534 6.71389C6.92751 6.78082 6.88672 6.84159 6.83532 6.8927L1.35132 12.3557C1.30513 12.4034 1.2499 12.4414 1.18886 12.4675C1.12783 12.4936 1.0622 12.5073 0.995811 12.5078C0.929423 12.5083 0.863603 12.4955 0.802193 12.4703C0.740783 12.4451 0.685012 12.4079 0.638134 12.3609C0.591256 12.3139 0.554209 12.258 0.529156 12.1965C0.504102 12.135 0.491544 12.0692 0.492213 12.0028C0.492882 11.9364 0.506764 11.8708 0.533052 11.8098C0.559339 11.7489 0.597504 11.6938 0.64532 11.6477L5.81032 6.5027L0.645319 1.3557C0.551451 1.26207 0.498613 1.13499 0.498426 1.0024C0.498238 0.869823 0.550716 0.742593 0.644319 0.648697Z"
              fill="#5C5C6C"
            />
          </svg>
          <li className="">{data?.Title}</li>
        </ul>
        <div>
          <p className="Top-Heading">{data?.Title}</p>
        </div>

        <div>
          <div className="Calender-social-container">
            <div className="calender-Right-container">
              <img src={DateSvg.src} alt="Date Icon" />
              <p className="Feb-date">{formattedDate}</p>
            </div>
            <div className="social-links">
              {icons?.map((icon, idx) => (
                <button key={idx} onClick={() => handleShare(icon)}>
                  <img
                    src={icon.svg.src}
                    alt={icon.alt}
                    className="social-image w-[48px] cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="image-container">
            <img
              src={`${data?.Image?.data?.attributes?.url}`}
              alt="Article Image"
              className=" w-full max-h-[400px] rounded-2xl bg-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryApartments;
