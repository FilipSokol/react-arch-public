import React from "react";
import logowhite from "../images/big_logo_white.png";

import one from "../images/Icons/one.svg";
import two from "../images/Icons/two.svg";
import three from "../images/Icons/three.svg";

const services = () => {
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
      <div className="h-auto bg-white mx-auto py-16 md:py-36 px-8 max-w-content items-center justify-center">
        <div className="text-left h-auto font-josefin">
          <div className="w-full md:max-w-left overflow-hidden">
            <p className="tracking-wide text-4xl md:text-6xl mb-10">
              PROJEKTANT WNĘTRZ CZY WARTO ?
            </p>
            <div className="text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Wykonuje projekty wnętrz domów, apartamentów, mieszkań oraz
                lokali użytkowych. Realizuje zlecenia aranżacji przestrzeni
                publicznych takich jak biura, przychodnie, restauracje, sale
                zabaw. Prowadzę inwestycje od projektu koncepcyjnego aż po
                nadzór autorski.
              </p>
              <p className="pt-6">Etapy Projektowania</p>
              <p className="pt-6">
                1. Podczas spotkania i luźnej rozmowy z klientem poznaje
                wymarzony styl, ulubione materiały, kolory. Poznaje wasze pasje,
                hobby oraz styl życia. Poznaje waszych członków rodziny i ich
                zaineresowania, którym mam stworzyć nowy dom. Daje możliwość
                spotkania się z klientem w sklepach branżowych.
              </p>
              <p className="pt-6">
                2. Układ funkcjonalny – w moim odczuciu niezwykle ważny. Ta
                część pracy poprzedzona wykonaniem inwentaryzacji. W zależności
                od rodzaju pomieszczenia i możliwości jakie mamy mogę
                zaproponować 2 lub więcej propozycji.
              </p>
              <p className="pt-6">
                3. Projekt koncepcyjny i funkcjonalny przedstawiony na
                fotorealistycznych wizualizacjach 3D wybranych wcześniej
                pomieszczeń
              </p>
              <p className="pt-6">
                4. Dokumentacja techniczna wykonana na podstawie zatwierdzonych
                wizualizacji zawierająca w zależności od złożoności projektu: -
                projekt koncepcyjny -projekt funkcjonalny zawierający elementy
                projektu, pkt sanitarne, przyłącza wod-kan -schemat stolarki
                drzwiowej - rysunki ułożenia posadzek z podaniem ilości
                materiału -widoki wybranych ścian, rysunki w formie przekrojów
                -projekty mebli
              </p>
              <p className="pt-6">
                5. Nadzór autorski Jest to dodatkowa opcja dla Klientów, którym
                brakuje czasu by samodzielnie nadzorować
              </p>
            </div>
          </div>
        </div>
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
                  a nawet 2-3 ! (zależy to od rodzaju pomieszczenia i możliwości
                  jakie mamy, generalnie w przypadku kuchni będzie ich zawsze
                  więcej niż np w przypadku sypialni).
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
    </>
  );
};

export default services;
