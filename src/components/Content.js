import React from "react";
import { Link } from "react-router-dom";
import szkic from "../images/szkic1.jpg";
import szkictlo from "../images/szkic2.jpg";

const Content = () => {
  return (
    <>
      <div className="h-auto bg-no-repeat bg-cover bg-center bcgray grid justify-items-center items-center">
        <div className="h-auto w-full bg-bg1-sketch py-20 flex justify-center ">
          <div className="pt-5">
            <img
              src={szkic}
              alt="szkic"
              className="pl-12 self-center h-sketchmainsm lg:h-sketchmain object-scale-down w-max hidden lg:block"
            />
          </div>
          <div className="xl:w-paboutxl xl:h-paboutxl  bc5003 text-white md:-ml-5 md:mr-12 mx-5 p-5">
            <div className="w-full h-full border-2 border-solid border-white text-left py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
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
        <div className="h-32 w-full dm:max-w-contentbox cgray font-josefin text-black text-5xl flex flex-wrap content-end justify-center">
          POTFOLIO
        </div>
        <div className="w-full py-10 px-4 flex flex-wrap content-center justify-center">
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl bg-yellow-200 text-white flex flex-col md:flex-row">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003"></div>
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg1-pattern bg-no-repeat bg-cover bg-center"></div>
          </div>
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

export default Content;
