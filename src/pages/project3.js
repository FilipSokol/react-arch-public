import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import rzut from "../images/AKatowice/rzut.jpg";
import wiz1 from "../images/AKatowice/WIZ1.png";
import wiz2 from "../images/AKatowice/WIZ2.png";
import wiz3 from "../images/AKatowice/WIZ3.png";
import wiz4 from "../images/AKatowice/WIZ11.png";
import wiz5 from "../images/AKatowice/WIZ1_1.png";

const options = {
  buttons: {
    showDownloadButton: false,
  },
};

const project3 = () => {
  return (
    <>
      <div className="h-auto min-h-screen flex flex-row px-5">
        <div className="h-auto w-1/2 py-5">
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="px-5 pt-5">
                <a href={wiz1} data-attribute="SRL">
                  <img src={wiz1} alt="Opis" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={wiz2} data-attribute="SRL">
                  <img src={wiz2} alt="Opis" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={wiz3} data-attribute="SRL">
                  <img src={wiz3} alt="Opis" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={wiz4} data-attribute="SRL">
                  <img src={wiz4} alt="Opis" />
                </a>
              </div>
              <div className="px-5 pt-5">
                <a href={wiz5} data-attribute="SRL">
                  <img src={wiz5} alt="Opis" />
                </a>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
        <div className="">
          <div className="font-josefin h-3/4 w-1/2 fixed">
            <div className="px-5 pt-10">
              <SimpleReactLightbox>
                <SRLWrapper options={options}>
                  <div className="px-5">
                    <a href={rzut}>
                      <img
                        src={rzut}
                        alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ut velit sodales, accumsan nunc ac, cursus velit. Curabitur sed
                quam aliquam, posuere dui ut, facilisis orci. Nam at orci a urna
                molestie viverra sit amet nec enim. Ut auctor tellus eget rutrum
                iaculis. Suspendisse sed consequat magna, in interdum neque."
                        srl_gallery_image="true"
                      />
                    </a>
                  </div>
                </SRLWrapper>
              </SimpleReactLightbox>
              <p className="text-left text-lg md:text-xl pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project3;
