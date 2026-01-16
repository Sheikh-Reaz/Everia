"use client";

import React, { useEffect, useRef } from "react";
import { Play, Apple, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const leftCtaRef = useRef(null);
  const rightIconsRef = useRef(null);
  const mainRef = useRef(null);

useEffect(() => {
    if (!textRef.current) return;

    const isMobile = window.innerWidth < 768;
    const navbarHeight = 80;

    // 1. Setup SplitText
    const split = new SplitText(textRef.current, { 
      type: "chars,words,lines" 
    });

    // 2. Initial Entrance Animation (from your snippet)
    // We also set from: "end" here if you want the entrance to start from right
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(split.chars, {
      x: 150,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        each: 0.04,
        from: "end" // Starts entrance from the right side
      },
    });

    // 3. Scroll Animation
    if (!isMobile) {
      const textContainer = textRef.current.parentElement;

      ScrollTrigger.create({
        trigger: mainRef.current,
        start: `top ${navbarHeight}px`,
        end: "80% top",
        pin: textContainer,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Parallax for background elements
          const yMove = progress * 300;
          gsap.to([imageRef.current, leftCtaRef.current, rightIconsRef.current], { 
            y: yMove, 
            duration: 0, 
            overwrite: "auto" 
          });

          // LETTER BY LETTER SCROLL EFFECT
          // We target split.chars instead of words
          gsap.to(split.chars, {
            y: progress * -200,    // Moves letters UP
            opacity: 1 - progress * 2,
            rotation: progress * -10,
            overwrite: "auto",
            stagger: {
              amount: 0.5,        // Total time spread across all letters
              from: "end"         // THIS IS THE KEY: Starts the "Up" movement from the right
            }
          });
        },
      });
    }

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full bg-[#FCFCF9] overflow-hidden font-sans pt-20">
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 130px 130px;
          background-image:
            linear-gradient(to right, #EAEAE5 1px, transparent 1px),
            linear-gradient(to bottom, #EAEAE5 1px, transparent 1px);
        }
        .font-display { font-family: 'Oswald', sans-serif; }
        .text-responsive-hero {
          font-size: clamp(5rem, 18vw, 15rem);
          line-height: 0.8;
          letter-spacing: -0.02em;
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
      <div className="absolute inset-0 bg-grid-pattern z-0" />

      <main ref={mainRef} className="relative flex flex-col items-center justify-end h-[calc(100vh-80px)] pb-12 overflow-hidden">
        
        {/* TEXT CONTAINER: Moved to top-[5%] to be higher */}
        <div className="w-full flex justify-center z-10 select-none pointer-events-none absolute top-[5%]">
          <h1
            ref={textRef}
            className="font-display font-bold text-[#261C18] text-responsive-hero text-center whitespace-nowrap
              text-5xl sm:text-7xl md:text-[18vw] lg:text-[200px] xl:text-[12rem]"
          >
            VIRTUAL ESCAPE
          </h1>
        </div>

        {/* IMAGE */}
        <div ref={imageRef} className="relative z-20 w-full max-w-5xl mx-auto flex justify-center mb-40 md:mb-4">
          <img
            src="https://i.ibb.co.com/0pGTGcsq/per.png"
            alt="Person with VR Headset"
            className="w-full h-auto lg:max-h-[75vh] object-contain"
          />
        </div>

        {/* CTA */}
        <div ref={leftCtaRef} className="absolute left-6 md:left-24 top-[55%] z-30 max-w-[210px]">
          <p className="text-[13px] md:text-[16px] font-semibold leading-relaxed text-[#1A1A1A] mb-8">
            Efficiency does not have to appear robotic—this hits the human side of productivity.
          </p>
          <button className="flex items-center gap-4 bg-[#4A2C22] text-[#F3EFE9] px-6 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#351f18] transition-all">
            SHOP NOW <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ICONS */}
        <div ref={rightIconsRef} className="absolute hidden md:block right-6 md:right-24 bottom-[20%] z-30 max-w-[240px]">
          <div className="flex gap-2 mb-6">
            <div className="bg-[#FBC02D] p-3 rounded-full"><Play className="w-5 h-5 fill-black" /></div>
            <div className="bg-[#F07B5F] p-3 rounded-full text-white"><Apple className="w-5 h-5 fill-current" /></div>
          </div>
          <p className="text-[12px] font-black uppercase tracking-widest text-[#1A1A1A] leading-tight">
            EFFICIENCY ELEVATED THROUGH HUMAN INSIGHT.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;