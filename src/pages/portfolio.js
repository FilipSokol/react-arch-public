import React from "react";
import logowhite from "../images/big_logo_white.png";
import { Link } from "react-router-dom";

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
      <div className="h-auto bg-white mx-auto py-10 md:py-0 pt-10 md:pt-36 px-8 max-w-content items-center justify-center">
        <div className="text-left h-auto font-josefin">
          <div className="w-full md:max-w-left overflow-hidden">
            <p className="tracking-wide text-5xl md:text-6xl mb-10">
              PORTFOLIO
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              W moim portfolio znajdują się fotografie prezentujące zrealizowane
              przeze mnie zlecenia na aranżację wnętrz. Każde z nich jest
              dopasowane do potrzeb i wymagań Klienta.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto bg-no-repeat bg-cover bg-center bg-white grid justify-items-center items-center">
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
          <div className="w-full sm:w-pboxsm md:w-pboxmd lg:w-pboxlg xl:w-pboxxl h-pboxph sm:h-pboxsm md:h-pboxmd lg:h-pboxlg xl:h-pboxxl text-white flex flex-col md:flex-row mt-20 mb-12">
            <div className="h-3/5 sm:h-full w-full md:w-1/2 bc5003">
              <div className="w-full h-full text-center justify-center py-16 px-5 sm:p-16 font-josefin flex flex-wrap">
                <p className="text-4xl md:text-5xl">Kamienica</p>
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
            <div className="h-2/5 sm:h-full w-full md:w-1/2 bg-bg1-sketch bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
