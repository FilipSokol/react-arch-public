import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import trzut from "../images/Projekt2/thumbnail/rzut.jpg";
import irzut from "../images/Projekt2/image/rzut.jpg";
import isypialnia0 from "../images/Projekt2/image/sypialnia4.jpg";
import isypialnia1 from "../images/Projekt2/image/sypialnia1.jpg";
import isypialnia2 from "../images/Projekt2/image/sypialnia2.jpg";
import isypialnia3 from "../images/Projekt2/image/sypialnia3.jpg";
import iprzedpokoj1 from "../images/Projekt2/image/przedpokoj1.jpg";
import iprzedpokoj2 from "../images/Projekt2/image/przedpokoj2.jpg";
import ikorytarz1 from "../images/Projekt2/image/korytarz1.jpg";
import ikorytarz2 from "../images/Projekt2/image/korytarz2.jpg";
import itoaleta1 from "../images/Projekt2/image/toaleta1.jpg";
import itoaleta2 from "../images/Projekt2/image/toaleta2.jpg";
import itoaleta3 from "../images/Projekt2/image/toaleta3.jpg";
import itoaleta4 from "../images/Projekt2/image/toaleta4.jpg";
import itoaleta5 from "../images/Projekt2/image/toaleta5.jpg";
import itoaleta7 from "../images/Projekt2/image/toaleta7.jpg";

const options = {
  buttons: {
    autoplaySpeed: 5000,
    showDownloadButton: false,
  },
};

const project3 = () => {
  return (
    <>
      <div className="h-auto min-h-screen flex md:flex-row flex-col sm:px-5">
        <div className="h-auto w-full md:w-1/2 py-2 sm:py-5">
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="px-5 pt-5">
                <a href={isypialnia0} data-attribute="SRL">
                  <img src={isypialnia0} alt="Sypialnia" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isypialnia1} data-attribute="SRL">
                  <img src={isypialnia1} alt="Sypialnia" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isypialnia2} data-attribute="SRL">
                  <img src={isypialnia2} alt="Sypialnia" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isypialnia3} data-attribute="SRL">
                  <img src={isypialnia3} alt="Sypialnia" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={iprzedpokoj1} data-attribute="SRL">
                  <img src={iprzedpokoj1} alt="Przedpokój" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={iprzedpokoj2} data-attribute="SRL">
                  <img src={iprzedpokoj2} alt="Przedpokój" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={ikorytarz1} data-attribute="SRL">
                  <img src={ikorytarz1} alt="Korytarz" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={ikorytarz2} data-attribute="SRL">
                  <img src={ikorytarz2} alt="Korytarz" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta5} data-attribute="SRL">
                  <img src={itoaleta5} alt="Pierwsza toaleta" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta7} data-attribute="SRL">
                  <img src={itoaleta7} alt="Pierwsza toaleta" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta1} data-attribute="SRL">
                  <img src={itoaleta1} alt="Druga toaleta" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta2} data-attribute="SRL">
                  <img src={itoaleta2} alt="Druga toaleta" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta3} data-attribute="SRL">
                  <img src={itoaleta3} alt="Druga toaleta" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={itoaleta4} data-attribute="SRL">
                  <img src={itoaleta4} alt="Druga toaleta" />
                </a>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
        <div>
          <div className="font-josefin h-3/4 w-full md:w-1/2 md:fixed flex justify-center md:justify-start mb-10">
            <div className="px-5 pt-0 md:pt-10">
              <SimpleReactLightbox>
                <SRLWrapper options={options}>
                  <div>
                    <a href={irzut}>
                      <img
                        src={trzut}
                        alt="Rzut planu"
                        height="300"
                        width="350"
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                </SRLWrapper>
              </SimpleReactLightbox>
              <div className="text-center md:text-left text-lg lg:text-xl pt-10 md:pt-5">
                <span className="text-4xl">Śląskie Mieszkanie</span>
                <p className="pt-5">
                  Temat: Nowoczesny apartament w sercu Katowic
                </p>
                <p>
                  Cel: Połączenie dwóch mieszkań w celu stworzenia ekskluzywnego
                  apartamentu dla rodziny
                </p>
                <p>Lokalizacja: Śródmieście Katowic</p>
                <p>Metraż: 130 m²</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project3;
