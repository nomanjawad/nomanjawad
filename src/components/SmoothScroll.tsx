import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            gsap.to(window, {
              duration: 1, // Animation duration
              scrollTo: targetElement,
              ease: "power2.inOut", // Smooth easing
            });
          }
        }
      });
    });

    return () => {
      links.forEach(
        (link) => link.removeEventListener("click", () => {}) // Cleanup event listener
      );
    };
  }, []);

  return null; // No visible UI; just behavior
};

export default SmoothScroll;
