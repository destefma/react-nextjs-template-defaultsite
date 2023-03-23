import Link from "next/link";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { HeroContainerDefaultProps } from "../../constans/ComponentDefaultProps";
import TypedLabel from "../Animation/TypedLabel";

interface Props extends PropsWithChildren<any> {
  bgColor?: string;
  welcomeText?: string;
  headerText?: string;
  headerTypedText?: [string];
  headerTextAfter?: string;
  description?: string;
  buttonText?: string;
  buttonHref: string;
  buttonHrefAs?: string;
  imageSrc: string;
}

function HeroContainer({
  welcomeText,
  headerText,
  headerTypedText,
  headerTextAfter,
  description,
  buttonText,
  buttonHref,
  buttonHrefAs,
  imageSrc,
  bgColor,
}: Props) {
  return (
    <section
      className={
        "homepage-hero-section flex justify-center h-screen " + bgColor
      }
    >
      <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="hero-text col-span-6">
            <p className="text-gray-500 text-lg leading-relaxed mt-8 font-semibold mb-4">
              {welcomeText}
            </p>
            <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-main leading-tight">
              {headerText}
              <div className="break-normal clear-left text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                <TypedLabel strings={headerTypedText} />
              </div>
              {headerTextAfter}
            </h1>
            <hr className=" w-12 h-1 bg-skyblue rounded-full mt-8" />
            <p className="text-main text-base leading-relaxed mt-8 font-semibold">
              {description}
            </p>
            <div className="get-app flex space-x-5 mt-8 justify-center md:justify-start">
              <div className="bg-skyblue hover:bg-sky-700 text-white font-semibold rounded-full px-6 py-2">
                <Link href={buttonHref} as={buttonHrefAs}>
                  <a className="text-white">{buttonText}</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-image col-span-6 relative w-full h-full">
            <Image alt="hero-image" src={imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}

HeroContainer.defaultProps = HeroContainerDefaultProps;
export default HeroContainer;
