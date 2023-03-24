import React, { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./../../../styles/Home.module.css";
import { FeatureCard } from "../../constans/ComponentTypes";
import { FeaturesDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  cards?: [FeatureCard];
  id?: string;
}

function Features({ cards, id }: Props) {
  return (
    <section
      className={`bg-gray-100 py-10 lg:px-40 px-6 ${styles.eistheke}`}
      id={id}
    >
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 gap-2 my-8 xl:my-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-4">
          {cards?.map((card, i) => (
            <div
              className="flex h-full flex-col items-center p-4 space-y-3 text-center border-4 bg-gray-200 opacity-95 rounded-3xl border-background hover:border-solid hover:border-accent md:hover:-translate-y-8 hover:rotate-6 hover:scale-105 z-10 hover:z-50 transition-all delay-100"
              key={i}
            >
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-accent">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </span>

              <h3 className="text-4xl font-semibold text-font-primary capitalize">
                {card.headerText}
              </h3>

              <p className="flex-1 p-2 text-font-normal text-lg">
                {card.description}
              </p>

              <div className="flex flex-col justify-items-end"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Features.defaultProps = FeaturesDefaultProps;
export default Features;
