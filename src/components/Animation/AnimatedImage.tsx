import React, { useEffect, useRef, useState, useTransition } from "react";
import {
  domAnimation,
  LazyMotion,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CustomImage } from "../../constans/ComponentTypes";
import { AnimatedImageDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props {
  image?: CustomImage;
}

const AnimatedImage: React.FC = ({ image }: Props) => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 580], [0, 580]);
  const x = useTransform(scrollY, [0, 100], [-30, 100]);

  const rotate = useTransform(scrollY, [-20, 360], [-20, 360]);
  const scale = useTransform(scrollY, [-1, 0.4], [-1, 0.4]);

  const opacity = useTransform(scrollY, [1, 1], [-1, 1]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll

  const springY = useSpring(y, physics);
  const springX = useSpring(x, physics);

  const springRotate = useSpring(rotate, physics);
  const springScale = useSpring(scale, physics);

  const springOpacity = useSpring(opacity, physics);

  return (
    <LazyMotion features={domAnimation}>
      <motion.img
        src={image?.imageSrc}
        alt={`${image?.alt} Animation`}
        width={"300"}
        height={"300"}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: -20 }}
        initial={{
          opacity: 0,
          y: 50,
          x: 40,
        }}
        exit={{
          opacity: 1,
          y: 50,
          x: -20,
        }}
        transition={{
          delay: 0.2,
          stiffness: 55,
          mass: 0.27,
          damping: 15,
          default: { ease: "linear" },
        }}
        className="absolute top-0 left-0 object-cover z-50 drop-shadow-2xl"
      />
    </LazyMotion>
  );
};

AnimatedImage.defaultProps = AnimatedImageDefaultProps;
export default AnimatedImage;
