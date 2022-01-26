import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen h-auto bg-white">
      <div className="flex justify-center items-center h-screen mx-auto font-montserrat">
        <form
          action="https://formsubmit.co/biuro@przestrzenanny.pl"
          method="POST"
          className="w-full md:w-3/4 lg:w-3/6 p-4"
        >
          <div className="p-3">
            <input
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="text"
              name="ImieInazwisko"
              placeholder="Imię i nazwisko"
              required
            />
          </div>
          <div className="p-3">
            <input
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="email"
              name="Email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="p-3">
            <input
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="number"
              name="NumerTelefonu"
              placeholder="Numer telefonu (opcjonalnie)"
            />
          </div>
          <div className="p-3">
            <textarea
              className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-80 md:h-56"
              placeholder="Wiadomość"
              type="textarea"
              name="Wiadomosc"
              required
            ></textarea>
          </div>
          <div className="p-3 pt-4">
            <button className="w-full buttoninput transition duration-200 each-in-out text-white py-3 px-4 rounded text-xl font-semibold font-inter">
              WYŚLIJ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
