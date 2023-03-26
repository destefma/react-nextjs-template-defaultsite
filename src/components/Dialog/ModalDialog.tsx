import React, { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren<any> {
  headerText: string;
  message: string;
  buttonText: string;
  setModalOpen: (isOpen: boolean) => void;
}

function ModalDialog({ headerText, message, buttonText, setModalOpen }: Props) {
  return (
    <div
      className={`overflow-x-hidden overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center w-4/5 md:w-3/5 lg:w-2/5`}
    >
      <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
            {headerText}
          </h3>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
            {message}
          </p>
        </div>
        <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setModalOpen(false)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDialog;
