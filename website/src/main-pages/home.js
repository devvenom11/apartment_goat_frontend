"use client";
import { useEffect, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import ApartmentsSection from "src/components/ApartmentsSection";
import BenefitSection from "src/components/BenefitSection";
import BenefitSectionSlider from "src/components/BenefitSection/BenefitSectionSlider";
import BlogSection from "src/components/BlogSection";
import CommunitySection from "src/components/CommunitySection";
import FaqsSection from "src/components/FAQsSection";
import FeatureSection from "src/components/FeatureSection";
import HeroBanner from "src/components/HeroBanner";
import HeroSlider from "src/components/HeroSlider";
import LocatorSection from "src/components/LocatorSection";
import Popup from "src/components/common/Popup";
import ApartmentPopup from "src/components/ApartmentPopup";
import { useSelector } from "react-redux";
import { getBlogs, getPages } from "src/utils/helpers";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [blogs, setBlogs] = useState();
  const [neighborhoods, setNeighborhoods] = useState();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]; // Accessing the first body element
    if (open) {
      body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      body.style.overflow = ""; // Allow scrolling
    }

    // Cleanup function to reset overflow property when component unmounts
    return () => {
      body.style.overflow = ""; // Reset overflow property
    };
  }, [open]);

  useEffect(() => {
    const isPopupShownAlready = localStorage.getItem("isPopupShownAlready");
    if (isPopupShownAlready) {
      setOpen(null);
    }
  }, [setOpen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query =
          "neighborhoods?fields[0]=Title&fields[1]=Price&fields[2]=Slug&populate[Image][fields][0]=url&populate[Image][fields][1]=name";
        const data = await getBlogs();
        const neighborData = await getPages(query);
        setNeighborhoods(neighborData);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <HeroBanner />
      <HeroSlider data={neighborhoods?.data}/>
      <div className="h-auto lg:min-h-[80rem] 2xl:min-h-[85rem] relative">
        <FeatureSection />
      </div>
      <CommunitySection />
      <BenefitSection />
      <BenefitSectionSlider />
      <FaqsSection />
      <BlogSection data={blogs} />
      <ApartmentsSection />
      <LocatorSection />
      {open && (
        <Popup setShow={setOpen}>
          <div className="w-full">
            <ApartmentPopup setOpen={setOpen} />
          </div>
        </Popup>
      )}
      <Footer />
    </div>
  );
};

export default Home;
