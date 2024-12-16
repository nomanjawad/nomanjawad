"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  useEffect(() => {
    console.log("Preloader mounted");

    // Get preloader and SVG element
    const preloader = document.querySelector(".preloader") as HTMLElement;
    const svg = document.getElementById(
      "preloaderSvg"
    ) as unknown as SVGPathElement;

    if (!preloader || !svg) {
      console.warn("Preloader or SVG element not found");
      return;
    }

    // Define the SVG animation paths
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Define GSAP animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        console.log("Preloader animation complete");
        // Hide preloader visually after animation
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        preloader.style.pointerEvents = "none";
      },
    });

    tl.to(".preloader-heading .load-text", {
      delay: 1.5,
      y: -100,
      opacity: 0,
      duration: 0.5,
    })
      .to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(preloader, {
        y: -1500,
        duration: 0.8,
        ease: "power2.easeIn",
      });

    // Fallback timeout (e.g., 5 seconds) in case of load event not firing
    const fallbackTimeout = setTimeout(() => {
      console.log("Fallback timeout triggered");
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      preloader.style.pointerEvents = "none";
    }, 5000);

    // Cleanup timeout and GSAP timeline on unmount
    return () => {
      console.log("Preloader unmounted");
      tl.kill(); // Stop GSAP timeline
      clearTimeout(fallbackTimeout); // Clear fallback timeout
    };
  }, []);

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>
      <div className="preloader-heading">
        <div className="load-text">
          <span>D</span>
          <span>o</span>
          <span>r</span>
          <span>b</span>
          <span>e</span>
          <span>s</span>
          <span>h</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
