import React from "react";
import logowhite from "../images/big_logo_white.png";

const Hero = () => {
  return (
    <div className="bg-hero-pattern h-hero bg-no-repeat bg-cover bg-center grid justify-items-center">
      <div className="px-10 self-center pt-0 sm:pt-20">
        <img
          src={logowhite}
          alt="logo"
          className="object-contain h-herologo w-full"
        />
      </div>
      <div className="animate-bounce self-end hidden sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
