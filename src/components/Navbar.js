import React from "react";
import logo from "../images/logo_black.svg";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <div className="h-navbar">
      <nav
        className="fixed top-0 inset-x-0 flex justify-between items-center h-navbar shadow bg-white text-black font-lato"
        role="navigation"
      >
        <div className="pl-6 sm:pl-10">
          <Link to="/">
            <img src={logo} alt="logo" className="h-smlogo w-smlogo" />
          </Link>
        </div>

        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4">
            <a className="navupper">Strona Główna</a>
          </Link>
          <Link to="/services" className="p-4">
            <a className="navupper">Usługi</a>
          </Link>
          <Link to="/contact" className="p-4">
            <a className="navupper">Kontakt</a>
          </Link>
          <Link to="/about" className="p-4">
            <a className="navupper">O Mnie</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
