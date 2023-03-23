import React from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  headerText: string;
  description: string;
}

const Card: React.FC<Props> = ({ imageUrl, headerText, description }) => {
  return (
    <div className="flex-col bg-secondary rounded-3xl">
      <div className="">
        <Image
          src={imageUrl}
          alt={""}
          className="w-full h-48 rounded-t-3xl"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-white">{headerText}</h3>
      </div>
      <div className="bg-gray-100 p-2 rounded-b-3xl">
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href="#"
          className="flex items-center -mx-1 mt-2 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <span className="mx-1">Mehr Erfahren</span>
          <svg
            className="w-4 h-4 mx-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
