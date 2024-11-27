import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "/about.html" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "/contact.html" },
  ];

  return (
    <header className="relative left-0 top-0 w-full transition-all duration-500 ease-in-out">
      {/* Header Upper */}
      <div className="container max-w-full px-6 md:px-14 lg:px-20 flex items-center justify-between py-4 z-50 relative bg-primary">
        {/* Logo */}
        <div className="flex-none">
          <h2 className="font-heading text-3xl font-bold text-white">
            Noman Jawad
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex-grow mx-auto hidden lg:flex justify-center items-center">
          <nav>
            <ul className="flex items-center gap-6">
              {menuLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link href={link.href} className="text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:flex">
            <Link href="/contact">Let&apos;s Talk</Link>
          </button>
          {/* Sidebar Button */}
          <div id="menu-btn-container" className="scale-125 lg:hidden sm:block">
            <div id="menu-btn">
              <input
                type="checkbox"
                id="menu-checkbox"
                checked={isMobileMenuOpen}
                readOnly
              />
              <label
                htmlFor="menu-checkbox"
                id="menu-label"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-center"
              >
                <div
                  id="menu-bar"
                  className="font-body text-[0.65rem] text-white text-centers font-bold tracking-widest"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower */}
      <div
        className="mobile-menu z-40 bg-accent bg-opacity-20"
        style={{
          right: isMobileMenuOpen ? "0" : "-100%",
        }}
      >
        <nav>
          <ul className="menu-list">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="menu-link font-body text-accent font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
