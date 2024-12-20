"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const About = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, enable the animation setup
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Add data-animated attribute to mark the scroller as initialized
        scroller.setAttribute("data-animated", "true");

        // Get the inner container and its children
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);

        // Duplicate each child and append it to the inner container
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
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
                  src="/portfolio-image.jpeg"
                  alt="About Me"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>Noman E Jawad</h2>
              <p>I am a Web Designer based in Bangladesh.</p>
              <div className="about-social text-center">
                <ul>
                  <li>
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="">
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
              <p>Hello There!</p>
              <h2>
                I’m <span>Noman E Jawad</span>, a web Developer crafting{" "}
                <span>user-centric design</span> with pixel-perfect precision.
              </h2>
              <div className="adress-field">
                <ul>
                  <li>
                    <i className="ri-circle-fill"></i>Available for Freelancing
                  </li>
                </ul>
              </div>
              <div className="hero-btns">
                <a href="contact.html" className="theme-btn">
                  Download CV <i className="ri-download-line"></i>
                </a>
              </div>
            </div>
            <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="10">
                  <div className="scroller__inner">
                    <h4>Pixel perfect design</h4>
                    <h4>Excilet support</h4>
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
