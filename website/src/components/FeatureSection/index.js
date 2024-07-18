import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { MoveIn, SearchBarIcon, WriteIcon } from "../../assets/icons";
import HeadingSection from "../HeadingSection";
import FeatureItem from "./FeatureItem";
const FeatureSection = () => {
  const listRef = React.useRef(null);

  const featureContent = [
    {
      title: "Explore Your Options",
      icon: <SearchBarIcon width="100%" height="100%" />,
      description: "Uncover your perfect Chicago home - with 98% of the cityat your fingertips.",
      onClick: (e) => console.log(e),
      buttonText: "Find apartments",
      iconBg: "bg-[#EAF3FC]",
    },
    {
      title: "Secure Your Space",
      icon: <WriteIcon width="100%" height="100%" />,
      description: "Reach out to apartments, set up tours, and apply. Make sure you add your locator as your referral source.",
      onClick: (e) => console.log(e),
      buttonText: "Find apartments",
      iconBg: "bg-[#FEE9D4]",
    },
    {
      title: "Move In and Earn",
      icon: <MoveIn width="100%" height="100%" />,
      description: "Pay the same rent you'd find anywhere else, but with Apartment Goats you get a cash back rebate when you move in just for signing your lease through us.",
      onClick: (e) => console.log(e),
      buttonText: "Find apartments",
      iconBg: "bg-[#EBF5E8]",
    },
  ];
  if (typeof window === 'undefined') return;

  const DEFAULT_ICON_SIZE = "7rem";
  const ANIMATED_ICON_SIZE = window.innerWidth > 991 ? "21rem" : "16rem";
  const ICON_ANIMATED_DURATION = 1.5;
  const DEFAULT_ICON_PADDING = window.innerWidth > 768 ? "2rem" : "1rem";
  const ANIMATED_ICON_PADDING = window.innerWidth > 991 ? "6rem" : "4rem";

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const main = listRef.current;
      if (!main) return;

      const item = main.querySelectorAll(".feature-item");

      item.forEach((el, index) => {
        const triggerStart = window.innerWidth > 768 ? (index === 0 ? "bottom bottom" : index === item.length - 1 ? "30% 50%" : "top 50%") : "20% bottom";
        const triggerEnd = window.innerWidth > 768 ? (index === 0 ? "bottom 40%" : index === item.length - 1 ? "bottom 30%" : "bottom 25%") : "70% 20%";
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            end: triggerEnd,
            scrub: 0.5,
            markers: false,
          },
        });

        gsap.defaults({ ease: "none" });

        const icon = el.querySelector("[data-icon]");
        const button = el.querySelector("[data-button]");
        gsap.set(icon, {
          transformOrigin: "center",
        });
        gsap.set(button, {
          transformOrigin: "center bottom",
        });
        tl.to(icon, {
          width: ANIMATED_ICON_SIZE,
          height: ANIMATED_ICON_SIZE,
          padding: ANIMATED_ICON_PADDING,
          duration: ICON_ANIMATED_DURATION,
        })
          .fromTo(
            button,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
            },
            "-=0.5",
          )
          .to(icon, {
            opacity: 1,
            duration: ICON_ANIMATED_DURATION,
          })

          .to(icon, {
            width: DEFAULT_ICON_SIZE,
            height: DEFAULT_ICON_SIZE,
            padding: DEFAULT_ICON_PADDING,
            duration: ICON_ANIMATED_DURATION,
          })
          // hide button
          .to(
            button,
            {
              opacity: 0,
              duration: 0.5,
            },
            "-=1",
          );
      });
    },
    {
      scope: listRef,
    },
  );
  return (
    <section className="mb-12 lg:mb-16 2xl:mb-32 md:sticky top-12 px-4 md:px-[45px] mx-auto myFontFamily">
      <div className="md:mb-[22px] mb-4">
        <HeadingSection heading={"Earn Cash Back On Your Next Lease"}>
          <p className="text-[48px] leading-[55px] font-semibold text-[#22223B]">3 easy steps</p>
        </HeadingSection>
      </div>
      <div ref={listRef}>
        {featureContent.map((feature, index) => (
          <FeatureItem key={feature.title} count={index < 10 ? `0${index + 1}` : index + 1} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
