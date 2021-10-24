import React from "react";
import { Link } from "react-router-dom";
import szkic from "../images/szkic1.jpg";
import szkictlo from "../images/szkic2.jpg";

const Content = () => {
  return (
    <>
      <div className="h-auto bg-no-repeat bg-cover bg-center bcgray grid justify-items-center items-center">
        <div className="h-auto min-h-screen w-full bg-bg1-sketch py-20 flex flex-wrap justify-center content-center">
          <div className="pt-5">
            <img
              src={szkic}
              alt="szkic"
              className="pl-12 lg:sketchaboutlg xl:w-sketchaboutxl lg:h-sketchaboutlg xl:h-sketchaboutxl self-center hidden lg:block"
            />
          </div>
          <div className="md:w-full lg:w-paboutlg xl:w-paboutxl md:h-paboutmd lg:h-paboutlg xl:h-paboutxl bc5003 text-white lg:-ml-5 lg:mr-12 mx-5 p-5">
            <div className="w-full h-full border-2 border-solid border-white text-left py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
              <p className="text-4xl md:text-5xl">O MNIE</p>
              <p className="text-lg sm:text-2xl pt-10 sm:pt-0">
                Architekt Wnętrz z bajeczną wyobraźnią, najpierw freelancer,
                teraz z własną działalnością gospodarczą. Od dziecka rysowała
                wszystko i po wszystkim. Obecnie głowę pełną pomysłów
                wykorzystuje z powodzeniem we własnym biznesie, tworząc wnętrza
                dopasowane. Swoją pracę wykonuje dobrze, bo kocha to co robi.
                Urodzona artystka, ale zawsze z dalmierzem i laptopem w torebce.
              </p>
              <div className="pt-10 sm:pt-6">
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
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-6">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Projekt 1</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ut velit sodales, accumsan nunc ac, cursus velit.
                  Curabitur sed quam aliquam, posuere dui ut, facilisis orci.
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/project3">
                    <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                      WIĘCEJ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg1-pattern bg-no-repeat bg-cover bg-center"></div>
          </div>
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-20">
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg4-pattern bg-no-repeat bg-cover bg-center"></div>
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Projekt 2</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ut velit sodales, accumsan nunc ac, cursus velit.
                  Curabitur sed quam aliquam, posuere dui ut, facilisis orci.
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/project3">
                    <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                      WIĘCEJ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-20 mb-32">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Projekt 3</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ut velit sodales, accumsan nunc ac, cursus velit.
                  Curabitur sed quam aliquam, posuere dui ut, facilisis orci.
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/project3">
                    <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                      WIĘCEJ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg5-pattern bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>
        <div className="min-h-screen w-full bg-bg2-pattern bg-fixed bg-cover flex justify-center">
          <div className="items-center h-max mx-auto w-full bg-gray-500 bg-opacity-70 text-white flex content-end justify-center">
            (Tutaj będzie coś odnośnie usług)
          </div>
        </div>
      </div>
      <div className="min-h-screen h-auto bg-white">
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
