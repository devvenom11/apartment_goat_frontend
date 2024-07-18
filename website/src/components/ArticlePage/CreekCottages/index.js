import React from "react";
import mapImage from "../../../assets/Article/map.png";
import RoanakImage from "../../../assets/Article/Roanake.png";
import ArticleImage from "../../../assets/Article/Rectangle 19352.png";
import Link from "next/link";

import GetFreeMove from "../GetFreeMove";

const CreekCottages = ({data}) => {
  
  
  return (
     


    <div className="max-w-[526px] mx-auto">
      <div>
        <div className="relative">
          <iframe
            title="Google Map"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.192402353!2d-0.2416811325292974!3d51.528771841567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce9644b3bf%3A0x3c787f5af9f99f98!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1620216463587!5m2!1sen!2suk"
          ></iframe>
          <button className=" absolute px-[24px] py-[11px] bg-[#FF6525] min-h-[45px] rounded-[99px] bottom-[184px] top-[218px]   left-[53px] right-[53px] text-[14px] text-[500] text-white">
            View Lakeview apartments
          </button>
        </div>
        <hr className="mt-[24px]"></hr>
        <div>
          <p className="Apartments-para">
            Nestled north of Fort Worth to the left of the sprawling Grapevine Lake sits the charming town of Trophy Club, renowned for its upscale living and serene surroundings. If you're
            considering making Trophy Club your home, you'll be pleased to discover a range of luxurious apartment communities that offer an array of top-notch amenities.
          </p>
          <p className="Apartments-para mt-[24px]">
            In this article, we'll take a closer look at some of the most desirable properties in Trophy Club, as well as neighboring Roanoke and Trophy Club, detailing their amenities that set them
            apart from other apartment properties in the DFW area. Check out the links beneath each property to earn cash back on rent with{" "}
            <Link href={"#"} className="Apartment-link">
              ApartmentGoats
            </Link>
            .
          </p>
        </div>
        <div className="block lg:hidden">
          <GetFreeMove />
        </div>
      </div>
      <div>
        <p className="Litsey-cottages">Litsey Creek Cottages</p>
        <p className="Tagline">Roanoke</p>
        <div className="Image-Div">
          <img src={RoanakImage.src} alt="error" className="w-full" />
          <p className="Image-title">Litsey Creek Cottages</p>
        </div>
      </div>
      <div>
        <p className="Litsey-Creek-para">
          At{" "}
          <Link href={"#"} className="Litsey-para-Link">
            Litsey Creek Cottages
          </Link>
          , the apartments are known for providing a distinctive living experience, where every home is thoughtfully designed with the residents' comfort and convenience in mind
        </p>
        <p className="Litsey-Creek-para2">
          Residents at Litsey Creek Cottages Apartments can enjoy the luxury of having a private fenced yard for each home, creating a personal oasis for outdoor relaxation. Unlike traditional
          apartments, there are no shared walls, ensuring residents enjoy tranquility and privacy
        </p>
      </div>
      <div className="Article-image-container">
        <img src={ArticleImage.src} alt="error" className="w-full" />
        <p className="Image-title">Litsey Creek Cottages</p>
        <p className="Litsey-Creek-para">
          Inside these well-appointed apartments, one can find elegant features such as a white kitchen backsplash, open kitchens with sleek quartz countertops, and high-quality stainless-steel
          appliances. Ceiling fans in bedrooms and living rooms maintain a comfortable indoor environment throughout the year. Each home also includes a private enclosed garage, a rare amenity in
          apartment living. With a variety of 1, 2, and 3-bedroom options available, wood-style flooring, full-size washer and dryer included, and spacious walk-in closets, Litsey Creek Cottages
          Apartments offer a harmonious blend of style and functionality, setting a new standard for modern living
        </p>
        <p className="Litsey-Creek-para2">
          These include a pool and fitness center for recreation, a business center for professional needs, and the added convenience of in-unit laundry, parking, a dishwasher, and a patio
        </p>
        <p className="Litsey-Creek-para2">Litsey Creek Cottages offer some amazing unique spaces that separates it from the other apartments on this list.</p>
      </div>
      <div>
        <h2 className="h2">
          Earn cash back at <span className="h2-span">Litsey Creek Cottages</span> .
        </h2>
        <p className="Litsey-Creek-para2">
          Trophy Club, Westlake and the nearby Roanoke area offer a selection of luxury apartment communities with outstanding amenities to suit a variety of lifestyles. Whether you're seeking
          relaxation, recreation, or convenience, these communities have you covered, making Westlake an excellent choice for those in search of upscale living in the Fort Worth area. A friendly
          reminder to explore the properties even more with links provided to earn cash back on rent with ApartmentGoats!
        </p>
      </div>
    </div>
  );
};

export default CreekCottages;
