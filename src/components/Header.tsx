"use client";
import React, { useEffect, useState } from "react";
import { FaHandshake } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    // Function to handle scroll behavior for fixed header and scroll-top button
    function headerStyle() {
      const siteHeader = document.querySelector(".main-header") as HTMLElement;
      const scrollLink = document.querySelector(".scroll-top") as HTMLElement;

      if (siteHeader) {
        const windowpos = window.scrollY;

        if (windowpos >= 250) {
          siteHeader.classList.add("fixed-header");
          if (scrollLink) scrollLink.style.display = "block"; // Show scroll-top button
        } else {
          siteHeader.classList.remove("fixed-header");
          if (scrollLink) scrollLink.style.display = "none"; // Hide scroll-top button
        }
      }
    }

    // Initial call to set the header style based on current scroll position
    headerStyle();

    // Add event listener for scroll event
    window.addEventListener("scroll", headerStyle);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", headerStyle);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* Logo Section */}
            <div className="logo-outer">
              <div className="logo">Noman Jawad</div>
            </div>

            {/* Navigation Section */}
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo logo">Noman Jawad</div>
                  {/* Mobile Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                    onClick={handleToggle}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse ${
                    isNavbarOpen ? "show" : ""
                  }`}
                >
                  <ul className="navigation onepage clearfix">
                    <li>
                      <a className="nav-link-click" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#service">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#works">
                        Works
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Hire Me Button */}
            <div className="menu-btns">
              <a href="#contact" className="theme-btn">
                Hire Me <FaHandshake />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
