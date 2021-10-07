import React from "react";
import logowhite from "../images/big_logo_white.png";

const contact = () => {
  return (
    <>
      <div className="bg-hero-pattern h-hero md:h-about bg-no-repeat bg-cover bg-center grid justify-items-center items-center">
        <div className="px-4 ">
          <img
            src={logowhite}
            alt="logo"
            className="object-contain h-herologo w-full"
          />
        </div>
      </div>
      <div className="bg-white h-screen">
        <p>Kontakt</p>
      </div>
    </>
  );
};

export default contact;
