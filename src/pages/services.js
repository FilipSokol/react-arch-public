import React from "react";
import logowhite from "../images/big_logo_white.png";

const services = () => {
  return (
    <>
      <div className="bg-fixed bg-hero-pattern h-hero md:h-about bg-no-repeat bg-cover bg-center grid justify-items-center items-center">
        <div className="px-10">
          <img
            src={logowhite}
            alt="logo"
            className="object-contain h-herologo w-full"
          />
        </div>
      </div>
      <div className="h-auto bg-white mx-auto py-10 md:py-36 px-8 max-w-content items-center justify-center">
        <div className="text-left h-auto font-josefin">
          <div className="w-full md:max-w-left overflow-hidden">
            <p className="tracking-wide text-5xl  md:text-6xl mb-10">USŁUGI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
