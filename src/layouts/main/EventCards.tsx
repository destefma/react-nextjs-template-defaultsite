import React, { PropsWithChildren } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import ImageCard from "../../components/Cards/ImageCard";
import { EventCardsDefaultProps } from "../../constans/ComponentDefaultProps";
import { EventCard, SectionHeader } from "../../constans/ComponentTypes";

interface Props extends PropsWithChildren<any> {
  sectionHeader: SectionHeader;
  events?: [EventCard];
}

function EventCards({ sectionHeader, events }: Props) {
  return (
    <div className="flex flex-col items-center my-10  px-6 lg:px-40">
      <h3 className="font-greatvibes italic tracking-wide text-3xl font-bold text-secondary">
        {sectionHeader.description}
      </h3>
      <h4 className="font-bold text-3xl text-center lg:text-5xl tracking-wide text-primary my-2">
        {sectionHeader.name}
      </h4>
      <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
      <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        navigation
        effect="cards"
        className="w-full h-50 my-10"
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {events?.map((event, i) => (
          <SwiperSlide key={i}>
            <ImageCard
              imageUrl={event.imageSrc}
              headerText={`${event.name}`}
              description={event.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

EventCards.defaultProps = EventCardsDefaultProps;
export default EventCards;
