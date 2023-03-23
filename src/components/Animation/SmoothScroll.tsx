import React, { PropsWithChildren } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface Props extends PropsWithChildren {
  pageHeight: number;
}

const SmoothScroll = ({ pageHeight, children }: Props) => {
  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div style={{ y: spring }} className="scroll-container">
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
