"use client";

import React from "react";

const Footer = () => {
  return (
    <>
      {/* Google Fonts Preconnect */}
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet" 
      />

      {/* Tailwind Config */}
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  primary: "#c2410c",
                  "background-light": "#f8f5f0",
                  "background-dark": "#0f172a",
                  "brand-charcoal": "#1a1a1a",
                },
                fontFamily: {
                  display: ["Anton", "sans-serif"],
                  sans: ["Inter", "sans-serif"],
                },
                borderRadius: {
                  DEFAULT: "0px",
                },
              },
            },
          };
        `
      }} />

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .grid-bg {
            background-image: radial-gradient(circle, #00000015 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .dark .grid-bg {
            background-image: radial-gradient(circle, #ffffff10 1px, transparent 1px);
          }
          .vertical-text {
            writing-mode: vertical-rl;
          }
          .panel-mask {
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
          }
          .panel-mask-alt {
            clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
          }
        `
      }} />

      <footer className="bg-brand-charcoal text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-7xl mb-8">
              THE END IS ONLY<br/>THE PROLOGUE.
            </h2>
            <p className="text-white/50 text-sm max-w-md leading-relaxed mb-12">
              Everia is a collective of visionaries, engineers, and storytellers dedicated to defining human-tech connection of the next century.
            </p>
            <div className="flex gap-4">
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display text-xl mb-6 text-primary uppercase">Narrative</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
                <li><a className="hover:text-white transition-colors" href="#">The Beginning</a></li>
                <li><a className="hover:text-white transition-colors" href="#">The Nexus Core</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Archive 001</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-xl mb-6 text-primary uppercase">Archives</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
                <li><a className="hover:text-white transition-colors" href="#">VR Trackers</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Manus Artifacts</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Steam Origins</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-xl mb-6 text-primary uppercase">Connect</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
                <li><a className="hover:text-white transition-colors" href="#">Contact Terminal</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Neural Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <div>COPYRIGHT © 2025 EVERIA CHRONICLES</div>
          <div className="flex gap-8 my-4 md:my-0">
            <a href="#">Security Protocols</a>
            <a href="#">Privacy Data</a>
            <a href="#">Terms of Engagement</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
