"use client";
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* Logo Section */}
            <div className="logo-outer">
              <div className="logo">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  title="Logo"
                  width={100}
                  height={50}
                />
              </div>
            </div>

            {/* Navigation Section */}
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Mobile Logo"
                      title="Mobile Logo"
                      width={100}
                      height={50}
                    />
                  </div>
                  {/* Mobile Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
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
                Hire Me<i className="ri-shake-hands-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
