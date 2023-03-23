import React from "react";

function AboutSettingsForm() {
  return (
    <div className="card-body p-4">
      <form>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-skyblue peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-skyblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Willkommens Text
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-skyblue peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-skyblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Überschrift Beschreibung
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="message" className="block mb-2 text-sm text-gray-500">
            Beschreibung
          </label>
          <label htmlFor="message" className="block mb-2 text-xs text-gray-400">
            Ihre Unternehmens Beschreibung auf Ihrer Website
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:outline-none focus:ring-0 border-2 focus:border-skyblue "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="flex flex-row flex-reverse mt-2">
          <button
            type="submit"
            className="ml-auto text-white bg-skyblue hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:border-skyblue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Speichern
          </button>
        </div>
      </form>
    </div>
  );
}

export default AboutSettingsForm;
