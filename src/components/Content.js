import React from "react";
import szkic from "../images/szkic1.jpg";
import szkictlo from "../images/szkic2.jpg";

const Content = () => {
  return (
    <>
      <div className="h-auto bg-no-repeat bg-cover bg-center  grid justify-items-center items-center">
        <div className="h-hero w-full py-20 bg-gray-100 flex flex-row ">
          <img
            src={szkic}
            alt="szkic"
            className="pl-8 h-96 w-auto hidden md:block"
          />
          <div className="h-96 w-96 bg-gray-400"></div>
        </div>

        <div className="h-hero w-full max-w-contentbox bg-green-500 px-8 ">
          projekt 1
        </div>
        <div className="h-hero w-full max-w-contentbox bg-green-600 px-8 ">
          projekt 2
        </div>
        <div className="h-hero w-full max-w-contentbox bg-green-700 px-8 ">
          projekt 3
          <img src={szkictlo} alt="szkic" className="pl-8 h-20 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Content;
