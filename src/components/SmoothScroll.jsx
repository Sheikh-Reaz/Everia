"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function SmoothScroll({ children }) {
  const smoothWrapper = useRef(null);
  const smoothContent = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let smoother;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapper.current,
        content: smoothContent.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapper}>
      <div id="smooth-content" ref={smoothContent}>
        {children}
      </div>
    </div>
  );
}
