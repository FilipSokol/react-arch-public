import React from "react";
import logowhite from "../images/big_logo_white.png";
import logo from "../images/logo_black.svg";

const contact = () => {
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
      <div className="h-screen">
        <div className="h-full mx-auto py-10 md:py-36 px-8 max-w-content">
          <div className="text-left h-auto font-josefin ">
            <div className="w-full md:max-w-left overflow-hidden">
              <p className="tracking-wide text-5xl md:text-6xl mb-10">
                KONTAKT
              </p>
              <div className="flex flex-col space-y-20">
                {/* <span className="text-lg md:text-xl leading-relaxed font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <p className="text-4xl">E-MAIL:</p> blabla@blabla.com
                </span> 
                <span className="text-lg md:text-xl leading-relaxed font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-4xl">NUMER TELEFONU:</p> 812312355
                </span>
                <span className="text-lg md:text-xl flex leading-relaxed font-mediu">
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
                  <span className="text-4xl">FACEBOOK:</span> link
                </span>
                */}
                <p>
                  <span className="text-4xl">E-MAIL:</span> blabla@blabla.com
                </p>
                <p>
                  <span className="text-4xl">NUMER TELEFONU:</span> 123
                </p>
                <p>
                  <span className="text-4xl">FACEBOOK:</span> link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-bg1-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center h-screen mx-auto bg-gray-500 bg-opacity-70 font-montserrat">
          <form
            action="https://formsubmit.co/sok.filip@gmail.com"
            method="POST"
            className="w-full md:w-3/4 lg:w-3/6 p-4"
          >
            <div className="p-3">
              <input
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                type="text"
                name="ImieInazwisko"
                placeholder="Imię i nazwisko"
                required
              />
            </div>
            <div className="p-3">
              <input
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                type="email"
                name="Email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="p-3">
              <input
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                type="number"
                name="NumerTelefonu"
                placeholder="Numer telefonu (opcjonalnie)"
              />
            </div>
            <div className="p-3">
              <textarea
                className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-80 md:h-56"
                placeholder="Wiadomość"
                type="textarea"
                name="Wiadomosc"
                required
              ></textarea>
            </div>
            <div className="p-3 pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 each-in-out text-white py-3 px-4 rounded text-xl font-semibold font-inter">
                WYŚLIJ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
