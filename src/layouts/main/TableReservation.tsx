import React from "react";
import FadeInItem from "../../components/Animation/FadeInItem";

function TableReservation() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="flex flex-col items-center">
        <FadeInItem id={0} className="flex flex-col items-center">
          <h4 className="font-greatvibes italic tracking-wide text-2xl lg:text-3xl font-bold text-secondary">
            Reservieren
          </h4>
          <h3 className="font-bold text-3xl lg:text-5xl tracking-wide text-primary my-2">
            Sie Ihren Tisch
          </h3>

          <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
          <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
        </FadeInItem>
        <FadeInItem
          id={1}
          className="flex flex-col w-11/12 lg:w-6/12 bg-white drop-shadow-md p-8 mt-10 rounded-3xl"
        >
          <form>
            <div className="flex flex-col">
              <p className="tracking-wide text-lg text-primary text-left">
                Reservieren Sie Ihren Tisch Online.
              </p>
            </div>

            <div className="mt-2 ">
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                  />
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    E-mail
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                  />
                </div>
              </div>
              <div className="items-center -mx-2 md:flex mt-2">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Ihre Telefonnummer
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="tel"
                  />
                </div>

                <div className="w-full mx-2 mt-2 md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Personenanzahl
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="number"
                  />
                </div>
              </div>
              <div className="items-center -mx-2 md:flex mt-2">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Datum
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="date"
                  />
                </div>

                <div className="w-full mx-2 mt-2 md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Uhrzeit
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="time"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Nachricht
                </label>
                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Senden
                </button>
              </div>
            </div>
          </form>
        </FadeInItem>
      </div>
    </section>
  );
}

export default TableReservation;
