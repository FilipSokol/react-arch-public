import React from "react";
import logowhite from "../images/big_logo_white.png";

const contact = () => {
  return (
    <>
      <div className="bg-local md:bg-fixed bg-hero-pattern h-hero md:h-about bg-no-repeat bg-cover bg-center grid justify-items-center items-center">
        <div className="px-10">
          <img
            src={logowhite}
            alt="logo"
            className="object-contain h-herologo w-full"
          />
        </div>
      </div>

      <div className="h-auto min-h-screen">
        <div className="h-full mx-auto py-10 md:py-36 px-8 max-w-content font-josefin">
          <div className="text-left h-auto ">
            <p className="tracking-wide text-5xl md:text-6xl mb-10">KONTAKT</p>
          </div>
          <p className="text-left text-lg md:text-xl">
            Zapraszamy do kontaktu wszystkich zainteresowanych współpracą z
            profesjonalnym architektem wnętrz.
          </p>
        </div>
        <div className="h-auto w-full bg-local md:bg-fixed bg-cover flex justify-center">
          <div className="items-center h-max mx-auto w-full text-white flex justify-center">
            <div className="w-full pb-10 px-4 flex content-center justify-center">
              <div className="flex px-4 py-16 md:py-0 pb-0 md:pb-16 flex-col lg:flex-row">
                <div className="h-contactboxxl lg:h-contactboxlg xl:h-contactboxxl md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center items-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 mb-10 lg:mb-0 bc5003">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 sm:w-24"
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
                  <p className="pt-5 text-3xl h-30 md:h-20 lg:h-cservicesxl">
                    E-MAIL
                  </p>
                  <a
                    className="pt-5 md:pt-0 w-auto h-auto md:h-cservicesxlpx-2 font-medium leading-relaxed text-2xl"
                    href="mailto:biuro@przestrzenanny.pl"
                  >
                    biuro@przestrzenanny.pl
                  </a>
                </div>
                <div className="h-contactboxxl lg:h-contactboxlg xl:h-contactboxxl md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center items-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 mb-10 lg:mb-0 ml-0 lg:ml-5 mt-5 lg:mt-0 bc5003">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 sm:w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-5 px-3 text-3xl h-30 md:h-20 lg:h-cservicesxl">
                    NUMER TELEFONU
                  </p>
                  <a
                    className="pt-5 md:pt-0 w-auto h-auto md:h-cservicesxlpx-2 font-medium leading-relaxed text-2xl"
                    href="tel:+48601792398"
                  >
                    601 792 398
                  </a>
                </div>
                <div className="h-contactboxxl lg:h-contactboxlg xl:h-contactboxxl md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center items-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 lg:mb-0 ml-0 lg:ml-5 mt-5 lg:mt-0 bc5003">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-16 sm:w-24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                  <p className="pt-5 text-3xl h-30 md:h-20 lg:h-cservicesxl">
                    FACEBOOK
                  </p>
                  <a
                    className="pt-5 md:pt-0 w-auto h-auto md:h-cservicesxlpx-2 font-medium leading-relaxed text-2xl"
                    href="https://www.facebook.com/profile.php?id=100075065343211"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Kliknij
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-local md:bg-fixed bg-bg1-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center h-screen mx-auto bg-gray-500 bg-opacity-70 font-montserrat">
          <form
            action="https://formsubmit.co/biuro@przestrzenanny.pl"
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
              <button className="w-full buttoninput transition duration-200 each-in-out text-white py-3 px-4 rounded text-xl font-semibold font-inter">
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
