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
                Przecież sam znasz się najlepiej, wiesz co Ci się podoba,
                dlaczego ktoś miałby narysować to co Ty masz w głowie i dostać
                za to pieniądze? Masz wiedzę potrzebną do projektu mieszkania.
                Jeśli nie to przecież jest tyle dostępnych czasopism, które
                pozwolą Ci zagłębić temat do granic wieloletnich studiów
                architektury wnętrz. W dzieciństwie nawet coś zbudowałeś w Sims
                i byłeś najlepszy!
              </p>
              <p className="pt-6">Czy aby na pewno?</p>
              <p className="pt-6">
                1. Wiesz co Ci się podoba – to przecież jasne. Lubisz surowy
                skandynawski styl, ale nic się nie stanie jak dodasz trochę
                barokowych ornamentów. Architekt wnętrz ustrzeże Cię przed
                pomieszaniem z poplątaniem. Czy to znaczy, że narzuci Ci co ma
                Ci się podobać a co nie ? Absolutnie . Najpewniej połączy
                zachcianki, w bardzo logiczny/ awangardowy sposób, tak aby wilk
                był syty i owca cała. Należy też pamiętać, że jest się też
                najobiektywniejszym, w momencie gdy sprawa Cie nie dotyczy
                bezpośrednio. Ty będziesz przynosił i na siłę wkomponowywał w
                domowym zaciszu wszystko co wzbudza jakiekolwiek emocje, ja
                obiektywnie odpowiem “wystarczy”. Czasem warto zapytać o zdanie
                kogoś innego, niż siebie.
              </p>
              <p className="pt-6">
                2. Projektowanie wnętrz związane jest artystyczną duszą, ale to
                nie tylko moje hobby – To moja praca. Czy zastanawiamy się czy
                lekarz potrzebny jest przy chorobach? Przeciąż każdy z nas,
                mniej lub więcej wie co mu dolega, a apteki oferują całkiem
                spory wachlarz leczniczych proszków. Każdy z nas ma własny zawód
                i jest do niego przygotowany w określony sposób. Nie zapominajmy
                że żeby być architektem wnętrz, nie wystarczy być “artystyczną
                duszą”. Droga zaczyna się już na wieloletnich studiach, a wiedzę
                trzeba wciąż uzupełniać na dodatkowych kursach, szkoleniach.
                Dodatkowo prezentowane wizualizacje stworzone są przez
                wyspecjalizowane programy, których możliwości są nieporównywalne
                z Sims-ami.
              </p>
              <p className="pt-6">
                3. Czy to nie rozrzutność, mając tyle wydatków, fundować sobie
                kolejny? Na temat zarobków architektów powstało wiele legend.
                Niewiele się jednak mówi o realnych korzyściach wynikających z
                takiej współpracy. Otóż możesz zaoszczędzić np. przy zakupie
                mieszkania większość deweloperów daje swoim klientom możliwość
                prze-aranżowania ścian i przyłączy według własnego pomysłu.
                Warto z tego skorzystać! Na tym etapie można jeszcze wszystko,
                co w gotowym mieszkaniu kosztowałoby prawie 10 razy więcej!
                Dodatkowo trzeba pamiętać, że zanim zaczniecie budować wnętrze w
                realu, wszystko już będzie ustalone w świecie 3D, co niweluje
                koszty niewłaściwych decyzji. Można śmiało założyć, że
                doświadczony projektant pozwoli Państwu tak zoptymalizować
                koszty materiałów i usług, że zniweluje to inne, niepotrzebne
                czy chybione wydatki. Dodam również, że projektant wnętrz,
                wynosi zwykle 1-2% całkowitej przygody z zakupem i
                zaaranżowaniem naszych 4 kątów.
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
