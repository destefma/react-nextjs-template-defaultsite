import React, { PropsWithChildren } from "react";
import Image from "next/image";
import FadeInItem from "../../components/Animation/FadeInItem";
import { CustomImage } from "../../constans/ComponentTypes";
import { GalleryDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  images?: [CustomImage];
}

function Gallery({ images, className }: Props) {
  return (
    <div
      className="flex flex-col items-center px-6 lg:mx-40 my-10"
      id="gallery"
    >
      <FadeInItem id={0} className="flex flex-col items-center">
        <h4 className="font-greatvibes italic tracking-wide text-3xl lg:text-5xl font-bold text-font-secondary my-2">
          Galerie
        </h4>

        <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
        <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
      </FadeInItem>
      <div className="grid grid-flow-row auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {images?.map((image, i) => (
          <FadeInItem
            id={i}
            key={i}
            className={`relative h-72 w-72 aspect-square`}
          >
            <Image
              src={image.imageSrc}
              alt={image.alt}
              width={100}
              height={100}
              className="absolute h-72 w-72 object-cover border-4 border-white hover:border-accent md:hover:scale-150 z-1 hover:z-50 aspect-square"
            />
          </FadeInItem>
        ))}
      </div>
    </div>
  );
}

Gallery.defaultProps = GalleryDefaultProps;
export default Gallery;
