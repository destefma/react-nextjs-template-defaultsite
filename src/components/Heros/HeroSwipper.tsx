import React, { useEffect, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { HeroSwipperDefaultProps as defaultProps } from "../../constans/ComponentDefaultProps";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { HalfCircleBorder } from "../Backgrounds/HalfCircleBorder";
import StarShape from "../Shapes/StarShape";
import { CustomImage } from "../../constans/ComponentTypes";

interface Props extends PropsWithChildren<any> {
  images?: [CustomImage];
}

function HeroSwipper({ images }: Props) {
  return (
    <>
      <section className="homepage-swipe-section flex w-screen max-h-128 relative">
        <HalfCircleBorder bgColor="bg-header" />
        <StarShape
          text="NEU 2B"
          className="absolute z-50 top-0 right-4 md:top-20 md:right-20 rotate-12 md:hover:scale-125 "
          width={40}
          height={40}
          color={"yellow"}
          fontSize={2}
          fontColor={"black"}
          title="Ein Button in Sternform mit dem Text Neu 2B, der auf das neue Angebot mit der Bezeichnung 2B weiterleitet"
        />
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            EffectFade,
            Mousewheel,
            Pagination,
          ]}
          spaceBetween={1}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          className="transition-opacity"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.imageSrc}
                width={500}
                height={500}
                priority
                className="relative w-screen h-full object-cover object-center"
                alt={image.alt ?? ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <a
          href="#welcome-section"
          title="Button um zur Unternehmensbeschreibung zu scrollen."
          className="decoration-none absolute bottom-5 left-1/2 transform -translate-x-1/2 z-50 "
        >
          <div
            className={`${styles.button_down} ring ring-gray-500 ring-offset-4`}
          ></div>
        </a>
        <HalfCircleBorder
          bgColor="bg-header"
          rotate={180}
          className="bottom-0"
        />
      </section>
    </>
  );
}

HeroSwipper.defaultProps = defaultProps;

export default HeroSwipper;
