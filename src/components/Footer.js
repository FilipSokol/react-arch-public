import React from "react";

const Footer = () => {
  return (
    <div className="bg-black font-inter">
      <div className="container md:h-navbar md:py-0 py-5 mx-auto items-center px-5 flex flex-wrap flex-col sm:flex-row ">
        <p className="text-white text-sm text-center sm:text-left sm:pb-0 pb-3 md:pr-3">
          © 2021 PRZESTRZEŃ ANNY
        </p>
        <a
          className="text-white"
          href="https://www.facebook.com/profile.php?id=100075065343211"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-3 justify-center sm:justify-start">
          <p className="text-gray-700 text-sm text-center ">
            REALIZACJA -
            <a
              href="https://www.linkedin.com/in/filip-sok%C3%B3%C5%82"
              rel="noopener noreferrer"
              className="text-gray-200 ml-1"
              target="_blank"
            >
              @Filip Sokół
            </a>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
