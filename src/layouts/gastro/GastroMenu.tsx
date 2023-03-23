import React, { PropsWithChildren, useState } from "react";
import style from "../../../styles/Home.module.css";
import Image from "next/image";
import FadeInItem from "../../components/Animation/FadeInItem";
import { EURO, GastroMenuDeal } from "../../constans/ComponentTypes";
import { GastroMenuDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren {
  description?: string;
  defaultImageSrc: string;
  defaultImageAlt: string;
  deals: [GastroMenuDeal];
}

const GastroMenu = ({
  description,
  defaultImageSrc,
  defaultImageAlt,
  deals,
}: Props) => {
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);

  return (
    <div
      className="bg-background flex flex-col items-center  px-6 lg:px-40"
      id="gastro-menu"
    >
      <FadeInItem id={0} className="flex flex-col items-center">
        <h4 className="font-greatvibes italic tracking-wide text-2xl lg:text-3xl font-bold text-font-secondary">
          Endecke
        </h4>
        <h3 className="font-bold text-center text-3xl lg:text-5xl tracking-wide text-font-primary my-2">
          Unsere Speisekarte
        </h3>

        <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
        <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
      </FadeInItem>
      <FadeInItem id={1} className="flex">
        <p className="text-center text-lg lg:text-2xl text-font-normal m-4 tracking-wide mb-20 ">
          {description}
        </p>
      </FadeInItem>
      <FadeInItem id={2}>
        <div className={`${style.edgeBorder}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 lg:gap-20 m-4 md:m-6 lg:md-10">
            <div className="flex items-center">
              <Image
                src={imageSrc}
                width={100}
                height={100}
                className="w-72 h-72 z-50 object-cover rounded-3xl aspect-square"
                alt={defaultImageAlt}
                loading="lazy"
              />
            </div>
            <div className="bg-gray-100 p-4 drop-shadow-md z-50 rounded-3xl aspect-square">
              <div className="flex flex-col items-center h-full">
                <p className="font-greatvibes italic tracking-wide text-3xl font-bold text-font-secondary text-center">
                  Angebot
                </p>
                <hr className="w-4/12 my-5 bg-accent z-50" />
                <ul className="decoration-none text-font-normal flex flex-col justify-around h-full w-full">
                  {deals?.map((deal, index) => (
                    <li
                      className="flex justify-between my-2 mx-2 md:mx-10 gap-2 hover:border-b-2 hover:border-solid border-accent"
                      key={index}
                      onMouseOver={(event) => setImageSrc(deal.imageSrc)}
                    >
                      <span>{deal.name}</span>
                      <span>{EURO.format(deal.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeInItem>
      <FadeInItem id={3}>
        <div className="my-20 lg:mt-18">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-br from-accent via-accent to-secondary text-white p-3 drop-shadow-lg shadow-lg"
          >
            Speisekarte
          </a>
        </div>
      </FadeInItem>
    </div>
  );
};

GastroMenu.defaultProps = GastroMenuDefaultProps;
export default GastroMenu;
