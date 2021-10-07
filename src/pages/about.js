import React from "react";
import logowhite from "../images/big_logo_white.png";

const about = () => {
  return (
    <>
      <div className="bg-fixed bg-hero-pattern h-hero md:h-about bg-no-repeat bg-cover bg-center justify-items-center items-center">
        <div className="px-4 ">
          <img
            src={logowhite}
            alt="logo"
            className="object-contain h-herologo w-full"
          />
        </div>
      </div>
      <div className="h-auto bg-white mx-auto py-10 md:py-36 px-8 md:px-4 max-w-content items-center justify-center">
        <div className="text-left h-auto font-josefin">
          <div className="w-full md:max-w-left overflow-hidden">
            <p className="tracking-wide text-5xl  md:text-6xl mb-10">O MNIE</p>
            <p className="text-xl leading-relaxed font-medium textbox">
              Wiem, że każdy z nas jest inny - niepowtarzalny, wyjątkowy.
              Dlatego - tworzę wnętrza wyjątkowe, w całości dopasowane do
              właściciela. Nie toleruję powtarzalności i nudy. Staram się Was
              poznać i eksponować to, co w pomieszczeniu jest najciekawsze, a
              zarazem zgodne z charakterem i przysposobieniem inwestora.
              Potrafię więc słuchać. W swojej pracy kieruję się triadą
              Witruwiusza - trwałością, użytecznością i pięknem oraz
              przekonaniem, że wnętrze które zaprojektuję Ja, będzie służyć
              Tobie. Cierpliwie i precyzyjnie, zestawiam wnętrza ładne z
              funkcjonalnymi i ergonomicznymi. Na co dzień współpracuję ze
              specjalistami z wielu branż powiązanych z projektowaniem wnętrz,
              poczynając od przedstawicieli z branży dekoratorskiej, poprzez
              stolarzy aż do wykonawstwa - to bezpośrednio przekłada się na
              zadowolenie klienta z naszej współpracy. Jestem zwolenniczką
              naturalnych surowców, które w moim mniemaniu stanowią doskonałe
              tło do życia. Przywiązuje ogromną wagę do szczegółów, bo przecież
              w nich tkwi diabeł, to one sprawiają że wnętrza stają się bardziej
              wyjątkowe. Staram się dopasować do Was nie tylko wnętrza, ale
              również zakres moich prac. Działam na obrębie całego kraju,
              głownie jednak w rejonie Śląska, zdalnie oraz stacjonarnie. Tworzę
              kompleksowe projekty oraz poszczególne jego części. Zapraszam do
              kontaktu !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
