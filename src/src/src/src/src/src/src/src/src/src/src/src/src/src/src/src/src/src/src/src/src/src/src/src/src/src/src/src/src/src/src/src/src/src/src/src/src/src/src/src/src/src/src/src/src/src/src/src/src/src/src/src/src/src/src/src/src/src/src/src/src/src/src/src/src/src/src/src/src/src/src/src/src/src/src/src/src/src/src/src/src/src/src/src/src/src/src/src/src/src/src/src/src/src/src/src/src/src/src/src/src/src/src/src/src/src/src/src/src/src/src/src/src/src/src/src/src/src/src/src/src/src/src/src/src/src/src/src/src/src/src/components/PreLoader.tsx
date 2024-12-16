"use client";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    console.log("Preloader mounted");

    // Get preloader element
    const preloader = document.querySelector(".preloader") as HTMLElement;
    if (!preloader) {
      console.warn("Preloader element not found");
      return;
    }
    console.log("Preloader element found");
    // Preloader fade out effect
    const fadeOutPreloader = () => {
      console.log("Preloader fade out effect");
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";

      // Remove preloader from DOM after fade out
      setTimeout(() => {
        console.log("Preloader removed");
        if (preloader.parentElement) {
          preloader.parentElement.removeChild(preloader);
        }
      }, 500); // Match with the transition duration
    };

    // Handle window load
    const handleWindowLoad = () => {
      console.log("Window loaded");
      fadeOutPreloader();
    };

    // Add event listener
    window.addEventListener("load", handleWindowLoad);

    // Cleanup listener
    return () => {
      console.log("Preloader unmounted");
      window.removeEventListener("load", handleWindowLoad);
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
