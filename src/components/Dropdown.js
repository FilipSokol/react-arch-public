import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed w-full h-72 shadow grid grid-rows-4 text-center items-center bg-white z-10"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        <a className="navupper">Strona Główna</a>
      </Link>
      <Link to="/portfolio" className="p-4">
        <a className="navupper">Portfolio</a>
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
  );
};

export default Dropdown;
