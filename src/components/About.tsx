"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaCircle, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import PortfolioImage from "@/assets/images/portfolio-image.jpeg";

const About = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, enable the animation setup
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        const scrollerElement = scroller as ScrollerElement;
        if (!scrollerElement.hasAttribute("data-animated")) {
          addAnimation(scrollerElement);
        }
      });
    }

    interface ScrollerElement extends HTMLElement {
      querySelector<K extends keyof HTMLElementTagNameMap>(
        selectors: K
      ): HTMLElementTagNameMap[K] | null;
      querySelector<K extends keyof SVGElementTagNameMap>(
        selectors: K
      ): SVGElementTagNameMap[K] | null;
      querySelector<E extends Element = Element>(selectors: string): E | null;
    }

    function addAnimation(scroller: ScrollerElement): void {
      // Mark the scroller as initialized
      scroller.setAttribute("data-animated", "true");

      // Get the inner container and its children
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      // Avoid infinite duplication by checking for `aria-hidden` elements
      if (
        scrollerContent.some(
          (item) => item.getAttribute("aria-hidden") === "true"
        )
      )
        return;

      // Duplicate each child and append it to the inner container
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });

      // Add animation class (optional depending on CSS)
      scrollerInner.classList.add("animate-scroller");
    }
  }, []);

  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* START ABOUT IMAGE DESIGN AREA */}
          <div className="col-lg-4">
            <div className="about-image-part wow fadeInUp delay-0-3s">
              <div className="about-image-part2">
                <Image
                  src={PortfolioImage}
                  alt="About Me"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>Noman E Jawad</h2>
              <p>I am a Web Developer based in Bangladesh.</p>
              <div className="about-social text-center">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/nomanjawad/">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nomanjawad">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* / END ABOUT IMAGE DESIGN AREA */}
          {/* START ABOUT TEXT DESIGN AREA */}
          <div className="col-lg-8">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <p>Hi there!</p>
              <h2>
                I’m <span>Noman E Jawad</span>, a web Developer crafting{" "}
                <span>user-centric design</span> with pixel-perfect precision.
              </h2>
              <p>
                With over 3 years of experience, I specialize in building custom
                websites that are responsive, optimized, and tailored to your
                business needs. Whether you&apos;re looking to revamp your
                online presence or develop a feature-rich platform, I’m here to
                bring your ideas to life.
              </p>
              <div className="adress-field">
                <ul>
                  <li>
                    <FaCircle fontSize={10} color="var(--primary-color)" />{" "}
                    Available for Freelancing
                  </li>
                </ul>
              </div>
              <div className="hero-btns">
                <a
                  href="https://drive.google.com/file/d/1o_Lzd95CZgJFvsqXuC1bd3RCsmSHyc2P/view?usp=sharing"
                  className="theme-btn"
                  target="_blank"
                >
                  Download CV <FaDownload />
                </a>
              </div>
            </div>
            <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="10">
                  <div className="scroller__inner">
                    <h4>Pixel perfect design</h4>
                    <h4>Excellent support</h4>
                    <h4>Fast delivery</h4>
                    <h4>24/7 Communication</h4>
                    <h4>Optimized to perfection</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / END ABOUT TEXT DESIGN AREA */}
        </div>
      </div>
    </section>
  );
};

export default About;
