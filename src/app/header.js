"use client";
import React, { useState } from "react";

function Header({
  handlewhoWeAreDiv,
  handlewhatWeDoDiv,
  handleourImpactDiv,
  handleWhereWeWorkDiv,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex border-b border-transparent py-3 px-4 sm:px-10 bg-white/70 backdrop-blur-xl font-[sans-serif] min-h-[64px] tracking-wide fixed top-0 z-50 w-full shadow-sm"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="flex flex-wrap items-center gap-5 w-full">
        <a href="javascript:void(0)">
          <p className="text-xl font-bold bg-gradient-to-r from-orange-red to-rose-500 text-transparent bg-clip-text">
            LEKI CHARITY FOUNDATION
          </p>
        </a>

        {/* Side Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:flex max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          {/* Close Button */}
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleToggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          <ul className="lg:flex lg:ml-14 lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="/">
                <p className="text-orange-red text-xl font-bold">
                  LEKI CHARITY
                </p>
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 lg:ml-24 px-3">
              <button
                onClick={() => {
                  handlewhoWeAreDiv();
                  handleToggleMenu();
                }}
                className="lg:hover:text-[#FF4500] mt-2 text-black block font-medium text-[15px] hover:underline underline-offset-4"
              >
                Who We Are
              </button>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <button
                onClick={() => {
                  handlewhatWeDoDiv();
                  handleToggleMenu();
                }}
                className="lg:hover:text-[#FF4500] mt-2 text-black block font-medium text-[15px] hover:underline underline-offset-4"
              >
                What We Do
              </button>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <button
                onClick={() => {
                  handleWhereWeWorkDiv();
                  handleToggleMenu();
                }}
                className="lg:hover:text-[#FF4500] mt-2 text-black block font-medium text-[15px] hover:underline underline-offset-4"
              >
                Where We Work
              </button>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <button
                onClick={() => {
                  handleourImpactDiv();
                  handleToggleMenu();
                }}
                className="lg:hover:text-[#FF4500] mt-2 text-black block font-medium text-[15px] hover:underline underline-offset-4"
              >
                Our Impact
              </button>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                className="text-white bg-gradient-to-r from-orange-red to-rose-500 px-4 py-2 lg:right-4 lg:fixed ml-0 shadow-lg rounded-full"
                href="mailto:info@lekicharity.org?subject=Donation%20to%20Leki%20Charity%20Foundation"
                aria-label="Email Leki Charity Foundation to donate"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Open Button */}
        <button
          id="toggleOpen"
          className="lg:hidden ml-auto"
          onClick={handleToggleMenu}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
