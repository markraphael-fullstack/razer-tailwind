import React from "react";
import IconRazer from "../../assets/icons/wordmark.svg";

const NavBar = () => {
  return (
    <div className="bg-night py-4">
      <div className="flex justify-between items-center max-w-[69.5rem] mx-auto">
        <img src={IconRazer} alt="" className="w-[10.5em]" />
        <nav className="text-white/60 uppercase font-semibold text-xxs tracking-wider">
          <ul className="hidden items-center gap-10 lg:flex">
            <li className="flex items-center gap-1">
              <span>Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
            <li>About</li>
            <li>Community</li>
            <li>Contact Us</li>
            <li
              id="buy-now"
              className="bg-razergreen text-black py-[13px] px-11 rounded-full font-bold "
            >
              Buy Now
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
