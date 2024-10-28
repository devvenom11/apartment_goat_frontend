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
import { BlogsData, NeighborData } from "src/utils/data";

const Home = () => {
  const [open, setOpen] = useState(true);

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
  
  return (
    <div>
      <Header />
      <HeroBanner />
      <HeroSlider data={NeighborData} />
      <div className="h-auto lg:min-h-[80rem] 2xl:min-h-[85rem] relative">
        <FeatureSection />
      </div>
      <CommunitySection />
      <BenefitSection />
      <BenefitSectionSlider />
      <FaqsSection />
      <BlogSection data={BlogsData} />
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
