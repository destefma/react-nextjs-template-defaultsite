import React, { PropsWithChildren } from "react";
import Image from "next/image";
import FadeInItem from "../../components/Animation/FadeInItem";
import { Innovation } from "../../constans/ComponentTypes";
import { GastroInnovationDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  innovations?: [Innovation];
}

const Innovations = ({ innovations }: Props) => {
  return (
    <div
      className="bg-background flex flex-col items-center py-10 px-6 lg:px-40"
      id="gastro-news"
    >
      <FadeInItem
        id={0}
        className="flex flex-col items-center align-items-center"
      >
        <h4 className="font-greatvibes italic tracking-wide text-3xl font-bold text-font-secondary">
          Endecke
        </h4>
        <h3 className="font-bold text-3xl text-center lg:text-5xl tracking-wide text-font-primary my-2">
          Neuheiten
        </h3>
        <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
        <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
      </FadeInItem>
      {innovations?.map((item, index) => (
        <FadeInItem id={index} key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 my-10 ">
            <div className="relative flex items-center justify-center m-4 overflow-hidden shadow-xl w-72 h-72 rounded-2xl justify-self-center aspect-square">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                loading="lazy"
                width={100}
                height={100}
                className="absolute w-72 h-72 object-cover object-center hover:scale-150 transition-all duration-500 ease-in-out transform bg-center bg-cover aspect-square"
              />
              <span className="absolute hover:scale-150 bottom-14 text-2xl font-black transition-all duration-500 ease-in-out transform scale-150 text-font-normal bg-secondary-accent rounded-lg  opacity-90 p-2">
                {item.name}
              </span>
            </div>
            <p className="text-center md:text-start lg:text-start text-lg lg:text-2xl text-font-normal m-auto tracking-wide">
              {item.description}
            </p>
          </div>
        </FadeInItem>
      ))}
    </div>
  );
};

Innovations.defaultProps = GastroInnovationDefaultProps;
export default Innovation;
