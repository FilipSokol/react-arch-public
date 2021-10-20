import React from "react";
import { Link } from "react-router-dom";
import szkic from "../images/szkic1.jpg";
import szkictlo from "../images/szkic2.jpg";

const Content = () => {
  return (
    <>
      <div className="h-auto bg-no-repeat bg-cover bg-center bcgray grid justify-items-center items-center">
        <div className="h-box w-full bg-bg1-sketch py-20 flex justify-center ">
          <div className="pt-5">
            <img
              src={szkic}
              alt="szkic"
              className="pl-12 self-center h-sketchmainsm lg:h-sketchmain object-scale-down w-max hidden md:block"
            />
          </div>
          <div className="h-full w-full md:w-textbox bg-yellow-400 text-white md:-ml-5 md:mr-12 mx-5 p-5">
            <div className="border-2 border-solid border-white h-full text-left py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
              <p className="text-4xl md:text-5xl">O MNIE</p>
              <p className="text-lg sm:text-2xl">
                Architekt Wnętrz z bajeczną wyobraźnią, najpierw freelancer,
                teraz z własną działalnością gospodarczą. Od dziecka rysowała
                wszystko i po wszystkim. Obecnie głowę pełną pomysłów
                wykorzystuje z powodzeniem we własnym biznesie, tworząc wnętrza
                dopasowane. Swoją pracę wykonuje dobrze, bo kocha to co robi.
                Urodzona artystka, ale zawsze z dalmierzem i laptopem w torebce.
              </p>
              <div className="pt-6">
                <Link to="/about">
                  <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                    WIĘCEJ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full max-w-contentbox cgray font-josefin text-black text-5xl flex flex-wrap content-center justify-center">
          POTFOLIO
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
