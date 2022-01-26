import React from "react";
import logowhite from "../images/big_logo_white.png";

const about = () => {
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
      <div className="h-auto bg-white mx-auto py-10 md:py-36 px-8 max-w-content items-center justify-center">
        <div className="text-left h-auto font-josefin">
          <div className="w-full md:max-w-left overflow-hidden">
            <p className="tracking-wide text-5xl md:text-6xl mb-10">O MNIE</p>
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              Z ogromną pasją, zaangażowaniem podchodzę do mojej pracy. Każda
              inwestycja traktowana jest przeze mnie wyjątkowo i indywidualnie.
              Siadam nad: ”czystą kartką papieru” i z Waszą pomocą zmieniam
              PRZESTRZEŃ ANNY w WASZĄ PRZESTRZEŃ. Wiem, że każdy z nas jest
              inny, niepowtarzalny i taki ma być również projekt. Staram się Was
              poznać i eksponować to, co w pomieszczeniu jest najciekawsze, a
              zarazem zgodne z Waszym charakterem i przysposobieniem. Potrafię
              słuchać, wyłapywać detale. Każdy z nas ma inne potrzeby. Jestem po
              to, żeby wszystko połączyć w całość: funkcjonalność, estetykę,
              Wasze gusta. Na co dzień współpracuję ze specjalistami z wielu
              branż powiązanych z projektowaniem wnętrz, poczynając od
              przedstawicieli branży dekoratorskiej, poprzez stolarzy aż do
              wykonawstwa - to bezpośrednio przekłada się na zadowolenie klienta
              z naszej współpracy. Dopasowuję do Was nie tylko wnętrza, ale
              również zakres moich prac. Znajduję czas na wizytę na budowie, na
              wizytę w sklepach. Zawsze mam czas na rozmowę z Wami. Tworzę
              kompleksowe projekty poczynając od opracowania koncepcji kończąc
              na nadzorze budowy, gdy tylko jest taka potrzeba. Działam na
              obrębie całego kraju, głownie jednak w rejonie Śląska. Tworzę
              kompleksowe projekty indywidualne jak i komercyjne. Zapraszam do
              kontaktu !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
