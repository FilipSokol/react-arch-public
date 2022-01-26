import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import trzut1 from "../images/Projekt1/thumbnail/rzut1.jpg";
import irzut1 from "../images/Projekt1/image/rzut1.jpg";
import irzut2 from "../images/Projekt1/image/rzut2.jpg";
import irzut3 from "../images/Projekt1/image/rzut3.jpg";
import irzut4 from "../images/Projekt1/image/rzut4.jpg";
import ikuchnia1 from "../images/Projekt1/image/kuchnia1.jpg";
import isalon1 from "../images/Projekt1/image/salon1.jpg";
import isalon2 from "../images/Projekt1/image/salon2.jpg";
import isalon3 from "../images/Projekt1/image/salon3.jpg";
import isalon4 from "../images/Projekt1/image/salon4.jpg";

import isypialnia1 from "../images/Projekt1/image/sypialnia1.jpg";
import isypialnia2 from "../images/Projekt1/image/sypialnia2.jpg";
import isypialnia3 from "../images/Projekt1/image/sypialnia3.jpg";

const options = {
  buttons: {
    autoplaySpeed: 5000,
    showDownloadButton: false,
  },
};

const project1 = () => {
  return (
    <>
      <div className="h-auto min-h-screen flex md:flex-row flex-col sm:px-5">
        <div className="h-auto w-full md:w-1/2 py-2 sm:py-5">
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="px-5 pt-5">
                <a href={ikuchnia1} data-attribute="SRL">
                  <img src={ikuchnia1} alt="Kuchnia" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isalon1} data-attribute="SRL">
                  <img src={isalon1} alt="Salon" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isalon2} data-attribute="SRL">
                  <img src={isalon2} alt="Salon" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isalon3} data-attribute="SRL">
                  <img src={isalon3} alt="Salon" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={isalon4} data-attribute="SRL">
                  <img src={isalon4} alt="Salon" />
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
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
        <div>
          <div className="font-josefin h-3/4 w-full md:w-1/2 md:fixed flex justify-center md:justify-start mb-10">
            <div className="px-5 pt-0 md:pt-10">
              <SimpleReactLightbox>
                <SRLWrapper options={options}>
                  <div>
                    <a href={irzut1}>
                      <img
                        src={trzut1}
                        alt="Rzut planu"
                        height="300"
                        width="450"
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                  <div>
                    <a href={irzut2}>
                      <img
                        src={irzut2}
                        alt="Rzut planu"
                        height="0"
                        width="0"
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                  <div>
                    <a href={irzut3}>
                      <img
                        src={irzut3}
                        alt="Rzut planu"
                        height="0"
                        width="0"
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                  <div>
                    <a href={irzut4}>
                      <img
                        src={irzut4}
                        alt="Rzut planu"
                        height="0"
                        width="0"
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                </SRLWrapper>
              </SimpleReactLightbox>
              <div className="text-center md:text-left text-lg lg:text-xl pt-10 md:pt-5">
                <span className="text-4xl">Śląskie Mieszkanie</span>
                <p className="pt-5">Temat: Aranżacja mieszkania na wynajem</p>
                <p>Lokalizacja: Katowice Brynów</p>
                <p>Metraż: 40 m²</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project1;
