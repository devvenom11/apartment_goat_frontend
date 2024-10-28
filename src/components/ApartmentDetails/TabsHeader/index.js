import React, { useState, useEffect, useRef } from "react";
import { GlobeIcon } from "src/assets/icons";

const tabsData = [
  { label: "Property Highlights", href: "#property-highlights" },
  { label: "Floor Plans & Pricing", href: "#plans-pricing-section" },
  { label: "Amenities", href: "#amenities-section" },
  { label: "Property Details", href: "#detail-section" },
  { label: "About", href: "#about-section" },
  { label: "Nearby Properties", href: "#nearby-properties-section" },
  { label: "FAQs", href: "#faq-section" },
];

export const TabsHeader = ({ showNavbar, setShowNavbar }) => {
  const [activeTab, setActiveTab] = useState("#property-highlights");

  // Store a reference for the observer
  const observer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowNavbar]);

  // Function to handle scrolling with a 100px offset
  const scrollToWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110; // Offset of 100px
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  // Scroll observer to detect the current section in view
  useEffect(() => {
    const sections = tabsData.map(tab => document.querySelector(tab.href));
    
    // Function to handle intersection events
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set active tab when the section is in view
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-10px 0px 0px 0px", // Trigger 100px before the section hits the top
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    // Observe each section
    sections.forEach(section => {
      if (section) {
        observer.current.observe(section);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <div className={`${showNavbar ? "block" : "hidden"}`}>
        <div className="fixed top-20 z-[5] flex w-full overflow-auto bg-white px-[14px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] md:top-[59px] md:px-7 lg+:block border-t-[1px] border-gray-200">
          <div className="mx-auto flex max-w-[1168px] items-end">
            <ul className="flex md:gap-4">
              {tabsData.map((section, index) => (
                <li
                  onClick={() => {
                    setActiveTab(section.href);
                    scrollToWithOffset(section.href.replace("#", ""));
                  }}
                  key={index}
                  className="h-[38px] px-2 md:px-0 lg+:h-[31px]"
                >
                  <button
                    className={`block whitespace-nowrap py-2 text-sm leading-5 hover:text-brand lg+:inline ${activeTab === section.href ? "border-b-2 border-b-brand text-brand" : ""}`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="ml-12 flex items-center gap-2 py-1 lg+:flex">
              <button className="inline-flex flex-row items-center justify-center gap-1 font-medium bg-[#F1F1F1] h-8 text-sm rounded-lg px-3 py-1.5 ">
                <img
                  width={20}
                  height={20}
                  loading="lazy"
                  src="/images/PhoneIcon.svg"
                  alt="Call property"
                />
                Call property
              </button>
              <button className="inline-flex flex-row items-center justify-center gap-1 font-medium bg-[#F1F1F1] h-8 text-sm rounded-lg px-3 py-1.5 max-md:flex-1">
                <GlobeIcon />
                <span>Visit website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
