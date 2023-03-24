import React, { PropsWithChildren } from "react";
import FadeInItem from "../../components/Animation/FadeInItem";

interface Props extends PropsWithChildren {
  telNumber: string;
  bgColor: string;
  id?: string;
}

function PhoneReservationTable({ bgColor, telNumber, id }: Props) {
  return (
    <section className={`${bgColor} py-10`} id={id}>
      <div className="flex flex-col items-center">
        <FadeInItem id={0} className={"flex flex-col items-center"}>
          <h3 className="font-greatvibes italic tracking-wide text-2xl lg:text-3xl font-bold text-font-secondary">
            Reservieren
          </h3>
          <h4 className="font-bold text-3xl lg:text-5xl tracking-wide text-font-primary my-2">
            Sie Ihren Tisch
          </h4>

          <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
          <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
        </FadeInItem>

        <FadeInItem
          id={1}
          className="flex flex-col w-11/12 lg:w-6/12 bg-white drop-shadow-md p-8 mt-10 rounded-3xl"
        >
          <div className="flex flex-col m-2">
            <p className="tracking-wide text-lg text-font-primary text-left">
              Jetzt anrufen & Tisch reservieren.
            </p>
          </div>

          <div className="mt-2 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-font-normal dark:text-gray-200">
                  Telefonnr:
                </label>
                <a
                  className="block w-full px-4 py-2 text-gray-700 bg-white font-medium border rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  href={`tel:${telNumber}`}
                >
                  {telNumber}
                </a>
              </div>
            </div>
          </div>
        </FadeInItem>
      </div>
    </section>
  );
}

export default PhoneReservationTable;
