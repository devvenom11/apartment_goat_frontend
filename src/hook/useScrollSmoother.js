'use client'
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useScrollSmoother = () => {
  const [lenis, setLenis] = useState(null);
  const reqIdRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = (time) => {
      lenis?.raf(time);
      lenis?.on("scroll", () => ScrollTrigger.update());
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useLayoutEffect(() => {
    // Check if it's a mobile device based on screen width or other criteria.
    const isMobile = window.innerWidth <= 767; // Adjust the screen width as needed.

    if (!isMobile && !lenis) {
      const lenis = new Lenis({
        duration: 1, // change scroll speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });
      setLenis(lenis);
      window.lenis = lenis;
    }

    return () => {
      // !isMobile && lenis?.destroy();
      if (lenis) {
        lenis.destroy();
        setLenis(null);
      }
    };
  }, [lenis]);
};

export default useScrollSmoother;
