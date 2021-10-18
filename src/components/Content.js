import React from "react";
import szkic from "../images/szkic1.jpg";
import szkictlo from "../images/szkic2.jpg";

const Content = () => {
  return (
    <>
      <div className="h-auto bg-no-repeat bg-cover bg-center bcgray grid justify-items-center items-center">
        <div className="h-box w-full bg-bg1-sketch py-20 flex justify-center ">
          <img
            src={szkic}
            alt="szkic"
            className="pl-12 self-end mb-40 lg:mb-16 h-96 lg:h-sketchmain w-auto hidden md:block"
          />
          <div className="h-full w-full md:w-textbox bg-yellow-400 text-white md:-ml-5 md:mr-12 mx-5 p-5">
            <div className="border-2 border-solid border-white h-full">
              kontent
            </div>
          </div>
        </div>
        <div className="h-screen w-full max-w-contentbox bg-green-500 px-8 ">
          projekt 1
        </div>
        <div className="h-screen w-full max-w-contentbox bg-green-600 px-8 ">
          projekt 2
        </div>
        <div className="h-screen w-full max-w-contentbox bg-green-700 px-8 ">
          projekt 3
        </div>
        <div className="h-box w-full bg-bg1-sketch bg-fixed py-20 flex justify-center "></div>
      </div>
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-screen mx-auto font-montserrat">
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

export default Content;
