import React from "react";
import { Link } from "react-router-dom";
import ContentForm from "./ContactForm";
import szkic from "../images/szkic1.jpg";
import one from "../images/Icons/one.svg";
import two from "../images/Icons/two.svg";
import three from "../images/Icons/three.svg";

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
                Architekt wnętrz, najpierw freelancer, teraz z własną
                działalnością. Od dziecka z zacięciem artystycznym, w końcu
                absolwentka Wyższej Szkoły Technicznej w Katowicach, kierunek:
                architektura wnętrz. Na co dzień uczestniczka kursów, szkoleń
                branżowych, targów wnętrzarskich. Prywatnie szczęśliwy człowiek,
                żona, mama trójki dzieci, psa i kotów. Osoba, która dzięki temu,
                że na co dzień robi to co kocha nigdy nie jest w pracy.
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
          PROJEKTY
        </div>
        <div className="py-10 px-4 flex flex-col content-center justify-center">
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-6">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Śląskie Mieszkanie</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  Aranżacaja mieszkania na wynajem <br />
                  Lokalizacja: Katowice Brynów <br />
                  Metraż: 40 m²
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/project1">
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
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg5-pattern bg-no-repeat bg-cover bg-center"></div>
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Nowoczesny apartament</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  <p>
                    Połączenie dwóch mieszkań w celu stworzenia ekskluzywnego
                    apartamentu dla rodziny.
                  </p>
                  <p>Lokalizacja: Śródmieście Katowic</p>
                  <p>Metraż: 130 m²</p>
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/project2">
                    <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                      WIĘCEJ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-20">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Mieszkanie na poddaszu</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  Generalny remont mieszkania na poddaszu{" "}
                  <p>Lokalizacja: Sosnowiec Centrum</p>
                  <p>Metraż: 60 m²</p>
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
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg4-pattern bg-no-repeat bg-cover bg-center"></div>
          </div>
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-20">
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg1-sketch bg-no-repeat bg-cover bg-center"></div>
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Przychodnia</p>
                <p className="text-xl md:text-lg lg:text-xl xl:text-2xl pt-10 sm:pt-0">
                  <p>W trakcie realizacji.</p>
                  <p>Planowane oddanie na początku roku.</p>
                </p>
                <div className="pt-10 sm:pt-6">
                  <Link to="/portfolio">
                    <a className="btn anim font-montserrat tracking-widest border-t-2 border-b-2">
                      WIĘCEJ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-16 pb-20 sm:pb-24">
          <Link to="/portfolio">
            <a className="btnmore animmore font-montserrat tracking-widest border-t-2 border-b-2">
              ZOBACZ WIĘCEJ
            </a>
          </Link>
        </div>
        <div className="min-h-screen w-full bg-bg2-pattern bg-local md:bg-fixed bg-cover flex justify-center">
          <div className="items-center h-max mx-auto w-full bg-gray-500 bg-opacity-70 text-white flex justify-center">
            <div className="w-full py-10 px-4 flex content-center justify-center">
              <div className="flex px-4 py-16 flex-col lg:flex-row">
                <div className="h-auto md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 mb-10 lg:mb-0">
                  <img src={one} alt="logo" className="h-32" />
                  <p className="pt-5 text-4xl h-30 md:h-20 lg:h-cservicesxl">
                    UKŁAD FUNKCJONALNY
                  </p>
                  <p className="pt-5 w-auto h-auto md:h-cservicesxlpx-2 font-medium leading-relaxed text-lg">
                    a nawet 2-3 ! (zależy to od rodzaju pomieszczenia i
                    możliwości jakie mamy, generalnie w przypadku kuchni będzie
                    ich zawsze więcej niż np w przypadku sypialni).
                  </p>
                </div>
                <div className="h-auto md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 ml-0 lg:ml-5 mt-5 lg:mt-0">
                  <img src={two} alt="logo" className="h-32" />
                  <p className="pt-5 text-4xl h-30 md:h-30 lg:h-cservicesxl">
                    PROJEKT KONCEPCYJNY I FUKCJONALNY
                  </p>
                  <p className="pt-5 w-auto px-2 font-medium leading-relaxed text-lg h-cservicesxl">
                    przedstawiony na fotorealistycznych wizualizacjach oraz
                    informacje odnośnie użytych materiałów.
                  </p>
                </div>
                <div className="h-auto md:w-full lg:w-cserviceslg xl:w-cservicesxl flex justify-center flex-col font-josefin sm:px-2 md:px-20 ld:px-10 lg:px-0 xl:px-0 ml-0 lg:ml-5 mt-5 lg:mt-0">
                  <img src={three} alt="logo" className="h-32" />
                  <p className="pt-5 text-4xl h-30 md:h-20 lg:h-cservicesxl">
                    RYSUNKI TECHNICZNE
                  </p>
                  <p className="pt-5 w-auto px-2 font-medium leading-relaxed text-lg h-cservicesxl">
                    oraz specyfikację materiałów wykończeniowych i elementów
                    gotowych. Elektryka, WOD-KAN, rysunki dla stolarzy płytkarzy
                    itd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentForm />
    </>
  );
};

export default Content;
